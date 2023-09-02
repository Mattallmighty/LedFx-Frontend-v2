import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import {
  Card,
  CardContent,
  CardHeader,
  Slider,
  Switch,
  TextField,
  Typography,
  useTheme
} from '@mui/material'
import * as d3 from 'd3'
import BladeFrame from './SchemaForm/components/BladeFrame'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const MGraph = () => {
  const [data, setData] = useState({} as any)
  const theme = useTheme()

  const [scaleType, setScaleType] = useState(false)

  const [animationDuration, setAnimationDuration] = useState<number>(10)
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setAnimationDuration(typeof newValue === 'number' ? newValue : newValue[0])
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnimationDuration(
      event.target.value === '' ? 0 : Number(event.target.value)
    )
  }

  const [fillOpacity, setFillOpacity] = useState<number>(0)
  const handleFillOpacitySliderChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setFillOpacity(typeof newValue === 'number' ? newValue : newValue[0])
  }
  const handleFillOpacityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFillOpacity(event.target.value === '' ? 0 : Number(event.target.value))
  }

  const [lineTension, setLineTension] = useState<number>(0.5)
  const handleLineTensionSliderChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setLineTension(typeof newValue === 'number' ? newValue : newValue[0])
  }
  const handleLineTensionInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLineTension(event.target.value === '' ? 0 : Number(event.target.value))
  }

  useEffect(() => {
    const handleWebsockets = (e: any) => {
      const messageData = e.detail
      const chartData = {
        labels: messageData.frequencies,
        datasets: [
          {
            label: '',
            id: 1,
            lineTension,
            backgroundColor: `#0dbedc${fillOpacity.toString(16)}`,
            fill: true,
            borderColor: theme.palette.primary.main,
            pointRadius: 0,
            data: messageData.melbank
          }
        ]
      }

      // Adjust the axes based on the max
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: { enabled: false },
        hover: {
          animationDuration: 0,
          mode: null
        },
        animation: {
          duration: animationDuration
        },
        responsiveAnimationDuration: 0,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Frequency'
            },
            ticks: {
              borderColor: '#fff',
              maxTicksLimit: 12,
              callback(value: any, _index: any, _values: any) {
                return `${value} Hz`
              }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0)'
            },
            ...(scaleType && { type: 'logarithmic' })
          },
          y: {
            title: {
              display: true,
              text: 'Melbank'
            },
            ticks: {
              display: false,
              maxTicksLimit: 7,
              callback(value: any, _index: any, _values: any) {
                return `${parseFloat(value).toFixed(2)}`
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
      setData({ chartData, chartOptions })
    }
    document.addEventListener('YZoldDev', handleWebsockets)
    return () => {
      document.removeEventListener('YZoldDev', handleWebsockets)
    }
  }, [animationDuration, fillOpacity, scaleType])

  function updateVisualization(chartData: any, svg: any) {
    // Create or update the visualization using the chartData
    // You can use d3 functions such as selectAll, data, enter, append, etc. to create/update the visualization elements

    // Example:
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length])
      .range([0, width])

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d: any) => d.y)])
      .range([chartHeight, 0])

    const bars = svg.selectAll('.bar').data(chartData, (d: any) => d.x)

    bars.enter().append('rect').attr('class', 'bar')

    bars
      .attr('x', (d: any) => xScale(d.x))
      .attr('y', (d: any) => yScale(d.y))
      .attr('width', barWidth)
      .attr('height', (d: any) => chartHeight - yScale(d.y))

    bars.exit().remove()
  }

  function updateChart(newData: any) {
    // Update the chart data
    ChartJS.updateData(newData)

    // Update the visualization
    const svg = d3.select('#chart-container-d3 svg')
    updateVisualization(newData, svg)
  }

  return (
    <div>
      <Card
        style={{
          maxWidth: 720,
          width: '100%',
          margin: '3rem',
          background: '#1c1c1e'
        }}
      >
        <CardHeader title="Melbank Graph Settings" />
        <CardContent>
          <BladeFrame
            title="Animation Duration"
            style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}
          >
            <Slider
              value={
                typeof animationDuration === 'number' ? animationDuration : 0
              }
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
            />
            <TextField
              InputProps={{
                endAdornment: 'ms'
              }}
              type="number"
              value={
                typeof animationDuration === 'number' ? animationDuration : 0
              }
              onChange={handleInputChange}
              style={{
                marginLeft: '2rem',
                width: '130px',
                backgroundColor: theme.palette.background.paper
              }}
            />
          </BladeFrame>
          <BladeFrame
            title="Fill Opacity"
            style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}
          >
            <Slider
              value={typeof fillOpacity === 'number' ? fillOpacity : 0}
              onChange={handleFillOpacitySliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
            <TextField
              InputProps={{
                endAdornment: '%'
              }}
              type="number"
              value={typeof fillOpacity === 'number' ? fillOpacity : 0}
              onChange={handleFillOpacityInputChange}
              style={{
                marginLeft: '2rem',
                width: '130px',
                backgroundColor: theme.palette.background.paper
              }}
            />
          </BladeFrame>

          <BladeFrame
            title="LineTension"
            style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}
          >
            <Slider
              value={typeof lineTension === 'number' ? lineTension : 0}
              onChange={handleLineTensionSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={10}
              step={0.1}
            />
            <TextField
              InputProps={{
                endAdornment: ''
              }}
              type="number"
              value={typeof lineTension === 'number' ? lineTension : 0}
              onChange={handleLineTensionInputChange}
              style={{
                marginLeft: '2rem',
                width: '130px',
                backgroundColor: theme.palette.background.paper
              }}
            />
          </BladeFrame>

          <BladeFrame
            title="Logarithmic"
            style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}
          >
            <Switch
              value={scaleType}
              onChange={() => setScaleType(!scaleType)}
            />
          </BladeFrame>
        </CardContent>
      </Card>
      <div
        id="chart-container"
        style={{ maxWidth: 720, width: '100%', height: 500, margin: '3rem' }}
      >
        {data?.chartData && data?.chartOptions && data?.chartData?.labels && (
          <Line data={data.chartData} options={data.chartOptions} />
        )}
      </div>
      <div
        id="chart-container-d3"
        style={{ maxWidth: 720, width: '100%', height: 500, margin: '3rem' }}
      />
    </div>
  )
}

export default MGraph

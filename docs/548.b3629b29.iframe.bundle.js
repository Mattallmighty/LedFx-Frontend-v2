"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[548],{"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiBox",["root"]),defaultTheme=(0,createTheme.A)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.A);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.A)(defaultTheme),_extendSxProp=(0,extendSxProp.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.A)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.A)({as:component,ref,className:(0,clsx.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.A,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.A.generate}),Box_Box=Box},"./node_modules/@mui/material/Slider/Slider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>Slider_Slider});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator.js"),RtlProvider=__webpack_require__("./node_modules/@mui/system/esm/RtlProvider/index.js"),useSlotProps=__webpack_require__("./node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js"),isHostComponent=__webpack_require__("./node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js"),ownerDocument=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"),useControlled=__webpack_require__("./node_modules/@mui/utils/esm/useControlled/useControlled.js"),clamp=__webpack_require__("./node_modules/@mui/utils/esm/clamp/clamp.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),useEventCallback=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js");const visuallyHidden_visuallyHidden={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var extractEventHandlers=__webpack_require__("./node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js");const utils_areArraysEqual=function areArraysEqual(array1,array2,itemComparer=(a,b)=>a===b){return array1.length===array2.length&&array1.every(((value,index)=>itemComparer(value,array2[index])))};function asc(a,b){return a-b}function findClosest(values,currentValue){var _values$reduce;const{index:closestIndex}=null!=(_values$reduce=values.reduce(((acc,value,index)=>{const distance=Math.abs(currentValue-value);return null===acc||distance<acc.distance||distance===acc.distance?{distance,index}:acc}),null))?_values$reduce:{};return closestIndex}function trackFinger(event,touchId){if(void 0!==touchId.current&&event.changedTouches){const touchEvent=event;for(let i=0;i<touchEvent.changedTouches.length;i+=1){const touch=touchEvent.changedTouches[i];if(touch.identifier===touchId.current)return{x:touch.clientX,y:touch.clientY}}return!1}return{x:event.clientX,y:event.clientY}}function valueToPercent(value,min,max){return 100*(value-min)/(max-min)}function roundValueToStep(value,step,min){const nearest=Math.round((value-min)/step)*step+min;return Number(nearest.toFixed(function getDecimalPrecision(num){if(Math.abs(num)<1){const parts=num.toExponential().split("e-"),matissaDecimalPart=parts[0].split(".")[1];return(matissaDecimalPart?matissaDecimalPart.length:0)+parseInt(parts[1],10)}const decimalPart=num.toString().split(".")[1];return decimalPart?decimalPart.length:0}(step)))}function setValueIndex({values,newValue,index}){const output=values.slice();return output[index]=newValue,output.sort(asc)}function focusThumb({sliderRef,activeIndex,setActive}){var _sliderRef$current,_doc$activeElement;const doc=(0,ownerDocument.A)(sliderRef.current);var _sliderRef$current2;null!=(_sliderRef$current=sliderRef.current)&&_sliderRef$current.contains(doc.activeElement)&&Number(null==doc||null==(_doc$activeElement=doc.activeElement)?void 0:_doc$activeElement.getAttribute("data-index"))===activeIndex||(null==(_sliderRef$current2=sliderRef.current)||_sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus());setActive&&setActive(activeIndex)}function areValuesEqual(newValue,oldValue){return"number"==typeof newValue&&"number"==typeof oldValue?newValue===oldValue:"object"==typeof newValue&&"object"==typeof oldValue&&utils_areArraysEqual(newValue,oldValue)}const axisProps={horizontal:{offset:percent=>({left:`${percent}%`}),leap:percent=>({width:`${percent}%`})},"horizontal-reverse":{offset:percent=>({right:`${percent}%`}),leap:percent=>({width:`${percent}%`})},vertical:{offset:percent=>({bottom:`${percent}%`}),leap:percent=>({height:`${percent}%`})}},Identity=x=>x;let cachedSupportsTouchActionNone;function doesSupportTouchActionNone(){return void 0===cachedSupportsTouchActionNone&&(cachedSupportsTouchActionNone="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),cachedSupportsTouchActionNone}function useSlider(parameters){const{"aria-labelledby":ariaLabelledby,defaultValue,disabled=!1,disableSwap=!1,isRtl=!1,marks:marksProp=!1,max=100,min=0,name,onChange,onChangeCommitted,orientation="horizontal",rootRef:ref,scale=Identity,step=1,shiftStep=10,tabIndex,value:valueProp}=parameters,touchId=react.useRef(),[active,setActive]=react.useState(-1),[open,setOpen]=react.useState(-1),[dragging,setDragging]=react.useState(!1),moveCount=react.useRef(0),[valueDerived,setValueState]=(0,useControlled.A)({controlled:valueProp,default:null!=defaultValue?defaultValue:min,name:"Slider"}),handleChange=onChange&&((event,value,thumbIndex)=>{const nativeEvent=event.nativeEvent||event,clonedEvent=new nativeEvent.constructor(nativeEvent.type,nativeEvent);Object.defineProperty(clonedEvent,"target",{writable:!0,value:{value,name}}),onChange(clonedEvent,value,thumbIndex)}),range=Array.isArray(valueDerived);let values=range?valueDerived.slice().sort(asc):[valueDerived];values=values.map((value=>null==value?min:(0,clamp.A)(value,min,max)));const marks=!0===marksProp&&null!==step?[...Array(Math.floor((max-min)/step)+1)].map(((_,index)=>({value:min+step*index}))):marksProp||[],marksValues=marks.map((mark=>mark.value)),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.A)(),[focusedThumbIndex,setFocusedThumbIndex]=react.useState(-1),sliderRef=react.useRef(),handleFocusRef=(0,useForkRef.A)(focusVisibleRef,sliderRef),handleRef=(0,useForkRef.A)(ref,handleFocusRef),createHandleHiddenInputFocus=otherHandlers=>event=>{var _otherHandlers$onFocu;const index=Number(event.currentTarget.getAttribute("data-index"));handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusedThumbIndex(index),setOpen(index),null==otherHandlers||null==(_otherHandlers$onFocu=otherHandlers.onFocus)||_otherHandlers$onFocu.call(otherHandlers,event)},createHandleHiddenInputBlur=otherHandlers=>event=>{var _otherHandlers$onBlur;handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusedThumbIndex(-1),setOpen(-1),null==otherHandlers||null==(_otherHandlers$onBlur=otherHandlers.onBlur)||_otherHandlers$onBlur.call(otherHandlers,event)},changeValue=(event,valueInput)=>{const index=Number(event.currentTarget.getAttribute("data-index")),value=values[index],marksIndex=marksValues.indexOf(value);let newValue=valueInput;if(marks&&null==step){const maxMarksValue=marksValues[marksValues.length-1];newValue=newValue>maxMarksValue?maxMarksValue:newValue<marksValues[0]?marksValues[0]:newValue<value?marksValues[marksIndex-1]:marksValues[marksIndex+1]}if(newValue=(0,clamp.A)(newValue,min,max),range){disableSwap&&(newValue=(0,clamp.A)(newValue,values[index-1]||-1/0,values[index+1]||1/0));const previousValue=newValue;newValue=setValueIndex({values,newValue,index});let activeIndex=index;disableSwap||(activeIndex=newValue.indexOf(previousValue)),focusThumb({sliderRef,activeIndex})}setValueState(newValue),setFocusedThumbIndex(index),handleChange&&!areValuesEqual(newValue,valueDerived)&&handleChange(event,newValue,index),onChangeCommitted&&onChangeCommitted(event,newValue)},createHandleHiddenInputKeyDown=otherHandlers=>event=>{var _otherHandlers$onKeyD;if(null!==step){const index=Number(event.currentTarget.getAttribute("data-index")),value=values[index];let newValue=null;("ArrowLeft"===event.key||"ArrowDown"===event.key)&&event.shiftKey||"PageDown"===event.key?newValue=Math.max(value-shiftStep,min):(("ArrowRight"===event.key||"ArrowUp"===event.key)&&event.shiftKey||"PageUp"===event.key)&&(newValue=Math.min(value+shiftStep,max)),null!==newValue&&(changeValue(event,newValue),event.preventDefault())}null==otherHandlers||null==(_otherHandlers$onKeyD=otherHandlers.onKeyDown)||_otherHandlers$onKeyD.call(otherHandlers,event)};(0,useEnhancedEffect.A)((()=>{var _document$activeEleme;disabled&&sliderRef.current.contains(document.activeElement)&&(null==(_document$activeEleme=document.activeElement)||_document$activeEleme.blur())}),[disabled]),disabled&&-1!==active&&setActive(-1),disabled&&-1!==focusedThumbIndex&&setFocusedThumbIndex(-1);const previousIndex=react.useRef();let axis=orientation;isRtl&&"horizontal"===orientation&&(axis+="-reverse");const getFingerNewValue=({finger,move=!1})=>{const{current:slider}=sliderRef,{width,height,bottom,left}=slider.getBoundingClientRect();let percent,newValue;if(percent=0===axis.indexOf("vertical")?(bottom-finger.y)/height:(finger.x-left)/width,-1!==axis.indexOf("-reverse")&&(percent=1-percent),newValue=function percentToValue(percent,min,max){return(max-min)*percent+min}(percent,min,max),step)newValue=roundValueToStep(newValue,step,min);else{const closestIndex=findClosest(marksValues,newValue);newValue=marksValues[closestIndex]}newValue=(0,clamp.A)(newValue,min,max);let activeIndex=0;if(range){activeIndex=move?previousIndex.current:findClosest(values,newValue),disableSwap&&(newValue=(0,clamp.A)(newValue,values[activeIndex-1]||-1/0,values[activeIndex+1]||1/0));const previousValue=newValue;newValue=setValueIndex({values,newValue,index:activeIndex}),disableSwap&&move||(activeIndex=newValue.indexOf(previousValue),previousIndex.current=activeIndex)}return{newValue,activeIndex}},handleTouchMove=(0,useEventCallback.A)((nativeEvent=>{const finger=trackFinger(nativeEvent,touchId);if(!finger)return;if(moveCount.current+=1,"mousemove"===nativeEvent.type&&0===nativeEvent.buttons)return void handleTouchEnd(nativeEvent);const{newValue,activeIndex}=getFingerNewValue({finger,move:!0});focusThumb({sliderRef,activeIndex,setActive}),setValueState(newValue),!dragging&&moveCount.current>2&&setDragging(!0),handleChange&&!areValuesEqual(newValue,valueDerived)&&handleChange(nativeEvent,newValue,activeIndex)})),handleTouchEnd=(0,useEventCallback.A)((nativeEvent=>{const finger=trackFinger(nativeEvent,touchId);if(setDragging(!1),!finger)return;const{newValue}=getFingerNewValue({finger,move:!0});setActive(-1),"touchend"===nativeEvent.type&&setOpen(-1),onChangeCommitted&&onChangeCommitted(nativeEvent,newValue),touchId.current=void 0,stopListening()})),handleTouchStart=(0,useEventCallback.A)((nativeEvent=>{if(disabled)return;doesSupportTouchActionNone()||nativeEvent.preventDefault();const touch=nativeEvent.changedTouches[0];null!=touch&&(touchId.current=touch.identifier);const finger=trackFinger(nativeEvent,touchId);if(!1!==finger){const{newValue,activeIndex}=getFingerNewValue({finger});focusThumb({sliderRef,activeIndex,setActive}),setValueState(newValue),handleChange&&!areValuesEqual(newValue,valueDerived)&&handleChange(nativeEvent,newValue,activeIndex)}moveCount.current=0;const doc=(0,ownerDocument.A)(sliderRef.current);doc.addEventListener("touchmove",handleTouchMove,{passive:!0}),doc.addEventListener("touchend",handleTouchEnd,{passive:!0})})),stopListening=react.useCallback((()=>{const doc=(0,ownerDocument.A)(sliderRef.current);doc.removeEventListener("mousemove",handleTouchMove),doc.removeEventListener("mouseup",handleTouchEnd),doc.removeEventListener("touchmove",handleTouchMove),doc.removeEventListener("touchend",handleTouchEnd)}),[handleTouchEnd,handleTouchMove]);react.useEffect((()=>{const{current:slider}=sliderRef;return slider.addEventListener("touchstart",handleTouchStart,{passive:doesSupportTouchActionNone()}),()=>{slider.removeEventListener("touchstart",handleTouchStart),stopListening()}}),[stopListening,handleTouchStart]),react.useEffect((()=>{disabled&&stopListening()}),[disabled,stopListening]);const trackOffset=valueToPercent(range?values[0]:min,min,max),trackLeap=valueToPercent(values[values.length-1],min,max)-trackOffset,createHandleMouseLeave=otherHandlers=>event=>{var _otherHandlers$onMous3;null==(_otherHandlers$onMous3=otherHandlers.onMouseLeave)||_otherHandlers$onMous3.call(otherHandlers,event),setOpen(-1)};return{active,axis,axisProps,dragging,focusedThumbIndex,getHiddenInputProps:(externalProps={})=>{var _parameters$step;const externalHandlers=(0,extractEventHandlers.A)(externalProps),ownEventHandlers={onChange:(otherHandlers=externalHandlers||{},event=>{var _otherHandlers$onChan;null==(_otherHandlers$onChan=otherHandlers.onChange)||_otherHandlers$onChan.call(otherHandlers,event),changeValue(event,event.target.valueAsNumber)}),onFocus:createHandleHiddenInputFocus(externalHandlers||{}),onBlur:createHandleHiddenInputBlur(externalHandlers||{}),onKeyDown:createHandleHiddenInputKeyDown(externalHandlers||{})};var otherHandlers;const mergedEventHandlers=(0,esm_extends.A)({},externalHandlers,ownEventHandlers);return(0,esm_extends.A)({tabIndex,"aria-labelledby":ariaLabelledby,"aria-orientation":orientation,"aria-valuemax":scale(max),"aria-valuemin":scale(min),name,type:"range",min:parameters.min,max:parameters.max,step:null===parameters.step&&parameters.marks?"any":null!=(_parameters$step=parameters.step)?_parameters$step:void 0,disabled},externalProps,mergedEventHandlers,{style:(0,esm_extends.A)({},visuallyHidden_visuallyHidden,{direction:isRtl?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(externalProps={})=>{const externalHandlers=(0,extractEventHandlers.A)(externalProps),ownEventHandlers={onMouseDown:(otherHandlers=externalHandlers||{},event=>{var _otherHandlers$onMous;if(null==(_otherHandlers$onMous=otherHandlers.onMouseDown)||_otherHandlers$onMous.call(otherHandlers,event),disabled)return;if(event.defaultPrevented)return;if(0!==event.button)return;event.preventDefault();const finger=trackFinger(event,touchId);if(!1!==finger){const{newValue,activeIndex}=getFingerNewValue({finger});focusThumb({sliderRef,activeIndex,setActive}),setValueState(newValue),handleChange&&!areValuesEqual(newValue,valueDerived)&&handleChange(event,newValue,activeIndex)}moveCount.current=0;const doc=(0,ownerDocument.A)(sliderRef.current);doc.addEventListener("mousemove",handleTouchMove,{passive:!0}),doc.addEventListener("mouseup",handleTouchEnd)})};var otherHandlers;const mergedEventHandlers=(0,esm_extends.A)({},externalHandlers,ownEventHandlers);return(0,esm_extends.A)({},externalProps,{ref:handleRef},mergedEventHandlers)},getThumbProps:(externalProps={})=>{const externalHandlers=(0,extractEventHandlers.A)(externalProps),ownEventHandlers={onMouseOver:(otherHandlers=externalHandlers||{},event=>{var _otherHandlers$onMous2;null==(_otherHandlers$onMous2=otherHandlers.onMouseOver)||_otherHandlers$onMous2.call(otherHandlers,event);const index=Number(event.currentTarget.getAttribute("data-index"));setOpen(index)}),onMouseLeave:createHandleMouseLeave(externalHandlers||{})};var otherHandlers;return(0,esm_extends.A)({},externalProps,externalHandlers,ownEventHandlers)},marks,open,range,rootRef:handleRef,trackLeap,trackOffset,values,getThumbStyle:index=>({pointerEvents:-1!==active&&active!==index?"none":void 0})}}var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),slotShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/slotShouldForwardProp.js");const utils_shouldSpreadAdditionalProps=Slot=>!Slot||!(0,isHostComponent.A)(Slot);var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSliderUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiSlider",slot)}const Slider_sliderClasses=(0,generateUtilityClasses.A)("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function Slider_Identity(x){return x}const SliderRoot=(0,styled.Ay)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`color${(0,capitalize.A)(ownerState.color)}`],"medium"!==ownerState.size&&styles[`size${(0,capitalize.A)(ownerState.size)}`],ownerState.marked&&styles.marked,"vertical"===ownerState.orientation&&styles.vertical,"inverted"===ownerState.track&&styles.trackInverted,!1===ownerState.track&&styles.trackFalse]}})((({theme})=>{var _theme$vars;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${Slider_sliderClasses.disabled}`]:{pointerEvents:"none",cursor:"default",color:(theme.vars||theme).palette.grey[400]},[`&.${Slider_sliderClasses.dragging}`]:{[`& .${Slider_sliderClasses.thumb}, & .${Slider_sliderClasses.track}`]:{transition:"none"}},variants:[...Object.keys((null!=(_theme$vars=theme.vars)?_theme$vars:theme).palette).filter((key=>{var _theme$vars2;return(null!=(_theme$vars2=theme.vars)?_theme$vars2:theme).palette[key].main})).map((color=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}})),SliderRail=(0,styled.Ay)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(props,styles)=>styles.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),SliderTrack=(0,styled.Ay)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(props,styles)=>styles.track})((({theme})=>{var _theme$vars3;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:theme.transitions.create(["left","width","bottom","height"],{duration:theme.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys((null!=(_theme$vars3=theme.vars)?_theme$vars3:theme).palette).filter((key=>{var _theme$vars4;return(null!=(_theme$vars4=theme.vars)?_theme$vars4:theme).palette[key].main})).map((color=>({props:{color,track:"inverted"},style:(0,esm_extends.A)({},theme.vars?{backgroundColor:theme.vars.palette.Slider[`${color}Track`],borderColor:theme.vars.palette.Slider[`${color}Track`]}:(0,esm_extends.A)({backgroundColor:(0,colorManipulator.a)(theme.palette[color].main,.62),borderColor:(0,colorManipulator.a)(theme.palette[color].main,.62)},theme.applyStyles("dark",{backgroundColor:(0,colorManipulator.e$)(theme.palette[color].main,.5)}),theme.applyStyles("dark",{borderColor:(0,colorManipulator.e$)(theme.palette[color].main,.5)})))})))]}})),SliderThumb=(0,styled.Ay)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.thumb,styles[`thumbColor${(0,capitalize.A)(ownerState.color)}`],"medium"!==ownerState.size&&styles[`thumbSize${(0,capitalize.A)(ownerState.size)}`]]}})((({theme})=>{var _theme$vars5;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:theme.transitions.create(["box-shadow","left","bottom"],{duration:theme.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(theme.vars||theme).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${Slider_sliderClasses.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys((null!=(_theme$vars5=theme.vars)?_theme$vars5:theme).palette).filter((key=>{var _theme$vars6;return(null!=(_theme$vars6=theme.vars)?_theme$vars6:theme).palette[key].main})).map((color=>({props:{color},style:{[`&:hover, &.${Slider_sliderClasses.focusVisible}`]:(0,esm_extends.A)({},theme.vars?{boxShadow:`0px 0px 0px 8px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${(0,colorManipulator.X4)(theme.palette[color].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${Slider_sliderClasses.active}`]:(0,esm_extends.A)({},theme.vars?{boxShadow:`0px 0px 0px 14px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${(0,colorManipulator.X4)(theme.palette[color].main,.16)}`})}})))]}})),Slider_SliderValueLabel=(0,styled.Ay)((function SliderValueLabel(props){const{children,className,value}=props,classes=(props=>{const{open}=props;return{offset:(0,clsx.A)(open&&Slider_sliderClasses.valueLabelOpen),circle:Slider_sliderClasses.valueLabelCircle,label:Slider_sliderClasses.valueLabelLabel}})(props);return children?react.cloneElement(children,{className:(0,clsx.A)(children.props.className)},(0,jsx_runtime.jsxs)(react.Fragment,{children:[children.props.children,(0,jsx_runtime.jsx)("span",{className:(0,clsx.A)(classes.offset,className),"aria-hidden":!0,children:(0,jsx_runtime.jsx)("span",{className:classes.circle,children:(0,jsx_runtime.jsx)("span",{className:classes.label,children:value})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(props,styles)=>styles.valueLabel})((({theme})=>(0,esm_extends.A)({zIndex:1,whiteSpace:"nowrap"},theme.typography.body2,{fontWeight:500,transition:theme.transitions.create(["transform"],{duration:theme.transitions.duration.shortest}),position:"absolute",backgroundColor:(theme.vars||theme).palette.grey[600],borderRadius:2,color:(theme.vars||theme).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${Slider_sliderClasses.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${Slider_sliderClasses.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:theme.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),SliderMark=(0,styled.Ay)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:prop=>(0,slotShouldForwardProp.A)(prop)&&"markActive"!==prop,overridesResolver:(props,styles)=>{const{markActive}=props;return[styles.mark,markActive&&styles.markActive]}})((({theme})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(theme.vars||theme).palette.background.paper,opacity:.8}}]}))),SliderMarkLabel=(0,styled.Ay)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:prop=>(0,slotShouldForwardProp.A)(prop)&&"markLabelActive"!==prop,overridesResolver:(props,styles)=>styles.markLabel})((({theme})=>(0,esm_extends.A)({},theme.typography.body2,{color:(theme.vars||theme).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(theme.vars||theme).palette.text.primary}}]}))),Forward=({children})=>children,Slider=react.forwardRef((function Slider(inputProps,ref){var _ref,_slots$root,_ref2,_slots$rail,_ref3,_slots$track,_ref4,_slots$thumb,_ref5,_slots$valueLabel,_ref6,_slots$mark,_ref7,_slots$markLabel,_ref8,_slots$input,_slotProps$root,_slotProps$rail,_slotProps$track,_slotProps$thumb,_slotProps$valueLabel,_slotProps$mark,_slotProps$markLabel,_slotProps$input;const props=(0,DefaultPropsProvider.b)({props:inputProps,name:"MuiSlider"}),isRtl=(0,RtlProvider.I)(),{"aria-label":ariaLabel,"aria-valuetext":ariaValuetext,"aria-labelledby":ariaLabelledby,component="span",components={},componentsProps={},color="primary",classes:classesProp,className,disableSwap=!1,disabled=!1,getAriaLabel,getAriaValueText,marks:marksProp=!1,max=100,min=0,orientation="horizontal",shiftStep=10,size="medium",step=1,scale=Slider_Identity,slotProps,slots,track="normal",valueLabelDisplay="off",valueLabelFormat=Slider_Identity}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{isRtl,max,min,classes:classesProp,disabled,disableSwap,orientation,marks:marksProp,color,size,step,shiftStep,scale,track,valueLabelDisplay,valueLabelFormat}),{axisProps,getRootProps,getHiddenInputProps,getThumbProps,open,active,axis,focusedThumbIndex,range,dragging,marks,values,trackOffset,trackLeap,getThumbStyle}=useSlider((0,esm_extends.A)({},ownerState,{rootRef:ref}));ownerState.marked=marks.length>0&&marks.some((mark=>mark.label)),ownerState.dragging=dragging,ownerState.focusedThumbIndex=focusedThumbIndex;const classes=(ownerState=>{const{disabled,dragging,marked,orientation,track,classes,color,size}=ownerState,slots={root:["root",disabled&&"disabled",dragging&&"dragging",marked&&"marked","vertical"===orientation&&"vertical","inverted"===track&&"trackInverted",!1===track&&"trackFalse",color&&`color${(0,capitalize.A)(color)}`,size&&`size${(0,capitalize.A)(size)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",disabled&&"disabled",size&&`thumbSize${(0,capitalize.A)(size)}`,color&&`thumbColor${(0,capitalize.A)(color)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,composeClasses.A)(slots,getSliderUtilityClass,classes)})(ownerState),RootSlot=null!=(_ref=null!=(_slots$root=null==slots?void 0:slots.root)?_slots$root:components.Root)?_ref:SliderRoot,RailSlot=null!=(_ref2=null!=(_slots$rail=null==slots?void 0:slots.rail)?_slots$rail:components.Rail)?_ref2:SliderRail,TrackSlot=null!=(_ref3=null!=(_slots$track=null==slots?void 0:slots.track)?_slots$track:components.Track)?_ref3:SliderTrack,ThumbSlot=null!=(_ref4=null!=(_slots$thumb=null==slots?void 0:slots.thumb)?_slots$thumb:components.Thumb)?_ref4:SliderThumb,ValueLabelSlot=null!=(_ref5=null!=(_slots$valueLabel=null==slots?void 0:slots.valueLabel)?_slots$valueLabel:components.ValueLabel)?_ref5:Slider_SliderValueLabel,MarkSlot=null!=(_ref6=null!=(_slots$mark=null==slots?void 0:slots.mark)?_slots$mark:components.Mark)?_ref6:SliderMark,MarkLabelSlot=null!=(_ref7=null!=(_slots$markLabel=null==slots?void 0:slots.markLabel)?_slots$markLabel:components.MarkLabel)?_ref7:SliderMarkLabel,InputSlot=null!=(_ref8=null!=(_slots$input=null==slots?void 0:slots.input)?_slots$input:components.Input)?_ref8:"input",rootSlotProps=null!=(_slotProps$root=null==slotProps?void 0:slotProps.root)?_slotProps$root:componentsProps.root,railSlotProps=null!=(_slotProps$rail=null==slotProps?void 0:slotProps.rail)?_slotProps$rail:componentsProps.rail,trackSlotProps=null!=(_slotProps$track=null==slotProps?void 0:slotProps.track)?_slotProps$track:componentsProps.track,thumbSlotProps=null!=(_slotProps$thumb=null==slotProps?void 0:slotProps.thumb)?_slotProps$thumb:componentsProps.thumb,valueLabelSlotProps=null!=(_slotProps$valueLabel=null==slotProps?void 0:slotProps.valueLabel)?_slotProps$valueLabel:componentsProps.valueLabel,markSlotProps=null!=(_slotProps$mark=null==slotProps?void 0:slotProps.mark)?_slotProps$mark:componentsProps.mark,markLabelSlotProps=null!=(_slotProps$markLabel=null==slotProps?void 0:slotProps.markLabel)?_slotProps$markLabel:componentsProps.markLabel,inputSlotProps=null!=(_slotProps$input=null==slotProps?void 0:slotProps.input)?_slotProps$input:componentsProps.input,rootProps=(0,useSlotProps.A)({elementType:RootSlot,getSlotProps:getRootProps,externalSlotProps:rootSlotProps,externalForwardedProps:other,additionalProps:(0,esm_extends.A)({},utils_shouldSpreadAdditionalProps(RootSlot)&&{as:component}),ownerState:(0,esm_extends.A)({},ownerState,null==rootSlotProps?void 0:rootSlotProps.ownerState),className:[classes.root,className]}),railProps=(0,useSlotProps.A)({elementType:RailSlot,externalSlotProps:railSlotProps,ownerState,className:classes.rail}),trackProps=(0,useSlotProps.A)({elementType:TrackSlot,externalSlotProps:trackSlotProps,additionalProps:{style:(0,esm_extends.A)({},axisProps[axis].offset(trackOffset),axisProps[axis].leap(trackLeap))},ownerState:(0,esm_extends.A)({},ownerState,null==trackSlotProps?void 0:trackSlotProps.ownerState),className:classes.track}),thumbProps=(0,useSlotProps.A)({elementType:ThumbSlot,getSlotProps:getThumbProps,externalSlotProps:thumbSlotProps,ownerState:(0,esm_extends.A)({},ownerState,null==thumbSlotProps?void 0:thumbSlotProps.ownerState),className:classes.thumb}),valueLabelProps=(0,useSlotProps.A)({elementType:ValueLabelSlot,externalSlotProps:valueLabelSlotProps,ownerState:(0,esm_extends.A)({},ownerState,null==valueLabelSlotProps?void 0:valueLabelSlotProps.ownerState),className:classes.valueLabel}),markProps=(0,useSlotProps.A)({elementType:MarkSlot,externalSlotProps:markSlotProps,ownerState,className:classes.mark}),markLabelProps=(0,useSlotProps.A)({elementType:MarkLabelSlot,externalSlotProps:markLabelSlotProps,ownerState,className:classes.markLabel}),inputSliderProps=(0,useSlotProps.A)({elementType:InputSlot,getSlotProps:getHiddenInputProps,externalSlotProps:inputSlotProps,ownerState});return(0,jsx_runtime.jsxs)(RootSlot,(0,esm_extends.A)({},rootProps,{children:[(0,jsx_runtime.jsx)(RailSlot,(0,esm_extends.A)({},railProps)),(0,jsx_runtime.jsx)(TrackSlot,(0,esm_extends.A)({},trackProps)),marks.filter((mark=>mark.value>=min&&mark.value<=max)).map(((mark,index)=>{const percent=valueToPercent(mark.value,min,max),style=axisProps[axis].offset(percent);let markActive;return markActive=!1===track?-1!==values.indexOf(mark.value):"normal"===track&&(range?mark.value>=values[0]&&mark.value<=values[values.length-1]:mark.value<=values[0])||"inverted"===track&&(range?mark.value<=values[0]||mark.value>=values[values.length-1]:mark.value>=values[0]),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(MarkSlot,(0,esm_extends.A)({"data-index":index},markProps,!(0,isHostComponent.A)(MarkSlot)&&{markActive},{style:(0,esm_extends.A)({},style,markProps.style),className:(0,clsx.A)(markProps.className,markActive&&classes.markActive)})),null!=mark.label?(0,jsx_runtime.jsx)(MarkLabelSlot,(0,esm_extends.A)({"aria-hidden":!0,"data-index":index},markLabelProps,!(0,isHostComponent.A)(MarkLabelSlot)&&{markLabelActive:markActive},{style:(0,esm_extends.A)({},style,markLabelProps.style),className:(0,clsx.A)(classes.markLabel,markLabelProps.className,markActive&&classes.markLabelActive),children:mark.label})):null]},index)})),values.map(((value,index)=>{const percent=valueToPercent(value,min,max),style=axisProps[axis].offset(percent),ValueLabelComponent="off"===valueLabelDisplay?Forward:ValueLabelSlot;return(0,jsx_runtime.jsx)(ValueLabelComponent,(0,esm_extends.A)({},!(0,isHostComponent.A)(ValueLabelComponent)&&{valueLabelFormat,valueLabelDisplay,value:"function"==typeof valueLabelFormat?valueLabelFormat(scale(value),index):valueLabelFormat,index,open:open===index||active===index||"on"===valueLabelDisplay,disabled},valueLabelProps,{children:(0,jsx_runtime.jsx)(ThumbSlot,(0,esm_extends.A)({"data-index":index},thumbProps,{className:(0,clsx.A)(classes.thumb,thumbProps.className,active===index&&classes.active,focusedThumbIndex===index&&classes.focusVisible),style:(0,esm_extends.A)({},style,getThumbStyle(index),thumbProps.style),children:(0,jsx_runtime.jsx)(InputSlot,(0,esm_extends.A)({"data-index":index,"aria-label":getAriaLabel?getAriaLabel(index):ariaLabel,"aria-valuenow":scale(value),"aria-labelledby":ariaLabelledby,"aria-valuetext":getAriaValueText?getAriaValueText(scale(value),index):ariaValuetext,value:values[index]},inputSliderProps))}))}),index)}))]}))})),Slider_Slider=Slider}}]);
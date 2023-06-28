"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[256],{"./src/components/SchemaForm/SchemaForm/SchemaForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return SchemaForm_SchemaForm}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),ListSubheader=__webpack_require__("./node_modules/@mui/material/ListSubheader/ListSubheader.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),DialogContentText=__webpack_require__("./node_modules/@mui/material/DialogContentText/DialogContentText.js"),Info=__webpack_require__("./node_modules/@mui/icons-material/esm/Info.js"),Mic=__webpack_require__("./node_modules/@mui/icons-material/Mic.js"),Speaker=__webpack_require__("./node_modules/@mui/icons-material/Speaker.js"),BladeBoolean=__webpack_require__("./src/components/SchemaForm/components/Boolean/BladeBoolean.tsx"),BladeSelect=__webpack_require__("./src/components/SchemaForm/components/String/BladeSelect.tsx"),BladeSlider=__webpack_require__("./src/components/SchemaForm/components/Number/BladeSlider.tsx"),BladeFrame=__webpack_require__("./src/components/SchemaForm/components/BladeFrame.tsx"),SchemaFormDefaultProps={hideToggle:void 0,onModelChange:void 0,type:void 0},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classes={bladeSchemaForm:"".concat("SchemaForm","-bladeSchemaForm"),FormListHeaders:"".concat("SchemaForm","-FormListHeaders"),bladeSelect:"".concat("SchemaForm","-bladeSelect")},Root=(0,styled.ZP)("div")((function(_ref){var _ref2,theme=_ref.theme;return _ref2={},(0,defineProperty.Z)(_ref2,"& .".concat(classes.bladeSchemaForm),{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}),(0,defineProperty.Z)(_ref2,"& .".concat(classes.FormListHeaders),{background:theme.palette.secondary.main,color:"#fff"}),(0,defineProperty.Z)(_ref2,"& .".concat(classes.bladeSelect),{"& .MuiSelect-select":{display:"flex",alignItems:"center"}}),_ref2})),SchemaForm=function SchemaForm(_ref3){var schema=_ref3.schema,model=_ref3.model,hideToggle=_ref3.hideToggle,onModelChange=_ref3.onModelChange,type=_ref3.type,_useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),hideDesc=_useState2[0],setHideDesc=_useState2[1],yzSchema=schema&&schema.properties&&Object.keys(schema.properties).map((function(sk){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},schema.properties[sk]),{},{id:sk,required:schema.required&&-1!==schema.required.indexOf(sk),permitted:!schema.permitted_keys||schema.permitted_keys.indexOf(sk)>-1})})).sort((function(a,_b){return a.required?-1:1})).sort((function(a,_b){return"name"===a.id?-1:1}));function onlyUnique(value,index,self){return self.indexOf(value)===index}return(0,jsx_runtime.jsxs)(Root,{children:[(0,jsx_runtime.jsx)("div",{className:classes.bladeSchemaForm,children:yzSchema&&yzSchema.map((function(s,i){var _s$enum;switch(s.type){case"boolean":return(0,jsx_runtime.jsx)(BladeBoolean.Z,{hideDesc:hideDesc,index:i,model:model,model_id:s.id,required:s.required,style:{margin:"0.5rem 0",flexBasis:"49%"},schema:s,onClick:function onClick(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i);case"string":var _schema$properties,_schema$properties$au,_audio_groups,_audio_groups2,group={},audio_groups=[];if(null!=schema&&null!==(_schema$properties=schema.properties)&&void 0!==_schema$properties&&null!==(_schema$properties$au=_schema$properties.audio_device)&&void 0!==_schema$properties$au&&_schema$properties$au.enum){for(var _schema$properties$au3,_i=0,_Object$entries=Object.entries(null===(_schema$properties$au2=schema.properties.audio_device)||void 0===_schema$properties$au2?void 0:_schema$properties$au2.enum);_i<_Object$entries.length;_i++){var _schema$properties$au2,_Object$entries$_i=(0,slicedToArray.Z)(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];"string"==typeof value&&(group[null==value?void 0:value.split(":")[0]]||(group[value.split(":")[0]]={}),group[value.split(":")[0]][key]=value.split(":")[1])}audio_groups=Object.values(null===(_schema$properties$au3=schema.properties.audio_device)||void 0===_schema$properties$au3?void 0:_schema$properties$au3.enum).map((function(d){return d.split(":")[0]})).filter(onlyUnique)}return null!==(_audio_groups=audio_groups)&&void 0!==_audio_groups&&_audio_groups.length?(0,jsx_runtime.jsx)(BladeFrame.Z,{style:{order:-1},title:"Audio Device",full:!0,children:(0,jsx_runtime.jsx)(Select.Z,{value:model&&model.audio_device||0,fullWidth:!0,onChange:function onChange(e){var c={};return c.audio_device=parseInt(e.target.value,10),onModelChange?onModelChange(c):null},className:classes.bladeSelect,id:"grouped-select",children:null===(_audio_groups2=audio_groups)||void 0===_audio_groups2?void 0:_audio_groups2.map((function(c,ind){return[(0,jsx_runtime.jsx)(ListSubheader.Z,{className:classes.FormListHeaders,color:"primary",children:c},ind),Object.keys(group[c]).map((function(e){return(0,jsx_runtime.jsxs)(MenuItem.Z,{value:e,children:[group[c][e].indexOf("[Loopback]")>-1?(0,jsx_runtime.jsx)(Speaker.Z,{style:{marginRight:"10px"}}):(0,jsx_runtime.jsx)(Mic.Z,{style:{marginRight:"10px"}}),group[c][e].replace("[Loopback]","")]})}))]}))})},i):!("mqtt_hass"===type&&"name"===s.id||"mqtt_hass"===type&&"description"===s.id)&&(0,jsx_runtime.jsx)(BladeSelect.Z,{children:void 0,hideDesc:hideDesc,model:model,disabled:!s.permitted,wrapperStyle:{margin:"0.5rem 0",width:"49%",flexBasis:"unset"},textStyle:{width:"100%"},schema:s,required:s.required,model_id:s.id,index:i,onChange:function onChange(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i);case"number":return(0,jsx_runtime.jsx)(BladeSlider.Z,{step:void 0,hideDesc:hideDesc,disabled:!s.permitted,model_id:s.id,model:model,required:s.required,schema:s,onChange:function onChange(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i);case"integer":return(0,jsx_runtime.jsx)(BladeSlider.Z,{full:"delay_ms"===s.id,hideDesc:hideDesc,disabled:!s.permitted,step:1,model_id:s.id,model:model,required:s.required,schema:s,textfield:!1,marks:void 0,index:void 0,style:{margin:"0.5rem 0",width:"49%"},onChange:function onChange(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i);case"int":return(null==s||null===(_s$enum=s.enum)||void 0===_s$enum?void 0:_s$enum.length)>10?(0,jsx_runtime.jsx)(BladeSlider.Z,{hideDesc:hideDesc,disabled:!s.permitted,marks:null==s?void 0:s.enum,step:void 0,model_id:s.id,model:model,required:s.required,schema:s,textfield:!1,style:{margin:"0.5rem 0",width:"49%"},onChange:function onChange(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i):(0,jsx_runtime.jsx)(BladeSlider.Z,{hideDesc:hideDesc,disabled:!s.permitted,marks:null==s?void 0:s.enum,step:void 0,model_id:s.id,model:model,required:s.required,schema:s,textfield:!1,style:{margin:"0.5rem 0",width:"49%"},onChange:function onChange(model_id,value){var c={};return c[model_id]=value,onModelChange?onModelChange(c):null}},i);default:return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Unsupported type:",s.type]})}}))}),!hideToggle&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Divider.Z,{style:{margin:"1rem 0 0.5rem 0"}}),(0,jsx_runtime.jsx)(FormControlLabel.Z,{value:"start",control:(0,jsx_runtime.jsx)(Switch.Z,{checked:!hideDesc,onChange:function onChange(_e){return setHideDesc(!hideDesc)}}),label:(0,jsx_runtime.jsxs)(DialogContentText.Z,{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:0},children:["Field-Descriptions",(0,jsx_runtime.jsx)(Info.Z,{style:{marginLeft:"0.5rem"}})]}),labelPlacement:"end"})]})]})};SchemaForm.defaultProps=SchemaFormDefaultProps;var SchemaForm_SchemaForm=SchemaForm;try{SchemaForm.displayName="SchemaForm",SchemaForm.__docgenInfo={description:"Dynamically render Forms based on a `schema` <br />\nmost schemas retrived from ledfx/api/schema are read-only <br />\nto enable write, please provide the key `permitted_keys`",displayName:"SchemaForm",props:{schema:{defaultValue:null,description:"Schema to generate Form from. <br />\nin production this is provided by <br />\nan external api or a store-management. <br />\nSee examples, for manual usage...",name:"schema",required:!0,type:{name:"Schema"}},model:{defaultValue:null,description:"Model is the current value of the schema",name:"model",required:!0,type:{name:"Record<string, unknown>"}},hideToggle:{defaultValue:null,description:"Hide Field-Description Toggle",name:"hideToggle",required:!1,type:{name:"boolean"}},onModelChange:{defaultValue:null,description:"onChange function for the given model",name:"onModelChange",required:!1,type:{name:"((e: any) => any)"}},type:{defaultValue:null,description:"internal",name:"type",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/SchemaForm/SchemaForm.tsx#SchemaForm"]={docgenInfo:SchemaForm.__docgenInfo,name:"SchemaForm",path:"src/components/SchemaForm/SchemaForm/SchemaForm.tsx#SchemaForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SchemaForm/components/BladeFrame.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("div")((function(_ref){var theme=_ref.theme;return{minWidth:"23.5%",padding:"16px 1.2rem 6px 1.2rem",border:"1px solid",borderColor:theme.palette.divider,borderRadius:"10px",position:"relative",display:"flex",alignItems:"center",height:"auto",margin:"0.5rem 0","@media (max-width: 580px)":{width:"100% !important",margin:"0.5rem 0"},"& > label":{top:"-0.75rem",display:"flex",alignItems:"center",left:"1rem",padding:"0 0.3rem",position:"absolute",fontVariant:"all-small-caps",fontSize:"0.9rem",letterSpacing:"0.1rem",color:theme.palette.text.secondary,backgroundColor:theme.palette.background.paper,boxSizing:"border-box"}}})),BladeFrame=function BladeFrame(_ref2){var index=_ref2.index,title=_ref2.title,children=_ref2.children,_ref2$full=_ref2.full,full=void 0!==_ref2$full&&_ref2$full,_ref2$style=_ref2.style,style=void 0===_ref2$style?{width:"unset",order:0}:_ref2$style,_ref2$required=_ref2.required,required=void 0!==_ref2$required&&_ref2$required,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"outlined":_ref2$variant,className=_ref2.className,disabled=_ref2.disabled,_ref2$labelStyle=_ref2.labelStyle,labelStyle=void 0===_ref2$labelStyle?{}:_ref2$labelStyle;return"outlined"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Root,{className:className||"",style:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},style),{},{width:full?"100%":style.width}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{style:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},labelStyle),className:"MuiFormLabel-root".concat(disabled?" Mui-disabled":"","  step-effect-").concat(index),children:[title,required?"*":""]}),children]}):children};BladeFrame.defaultProps={index:void 0,title:void 0,children:void 0,full:!1,style:{width:"unset",order:0},required:!1,variant:"outlined",className:void 0,disabled:void 0,labelStyle:void 0},__webpack_exports__.Z=BladeFrame;try{BladeFrame.displayName="BladeFrame",BladeFrame.__docgenInfo={description:"",displayName:"BladeFrame",props:{title:{defaultValue:{value:"undefined"},description:"",name:"title",required:!1,type:{name:"string"}},index:{defaultValue:{value:"undefined"},description:"",name:"index",required:!1,type:{name:"number"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},style:{defaultValue:{value:"{\n    width: 'unset',\n    order: 0,\n  }"},description:"",name:"style",required:!1,type:{name:"any"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"contained"'},{value:'"inherit"'}]}},className:{defaultValue:{value:"undefined"},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"undefined"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},labelStyle:{defaultValue:{value:"undefined"},description:"",name:"labelStyle",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/BladeFrame.tsx#BladeFrame"]={docgenInfo:BladeFrame.__docgenInfo,name:"BladeFrame",path:"src/components/SchemaForm/components/BladeFrame.tsx#BladeFrame"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SchemaForm/components/Boolean/BladeBoolean.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Boolean_BladeBoolean}});var Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),BladeFrame=__webpack_require__("./src/components/SchemaForm/components/BladeFrame.tsx"),BladeBooleanDefaultProps={index:void 0,style:void 0,required:!1,onClick:void 0,type:"switch",schema:{title:"Check me"},model:void 0,hideDesc:void 0,model_id:void 0},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BladeBoolean=function BladeBoolean(_ref){var _onClick=_ref.onClick,index=_ref.index,required=_ref.required,style=_ref.style,type=_ref.type,schema=_ref.schema,model=_ref.model,_ref$hideDesc=_ref.hideDesc,hideDesc=void 0!==_ref$hideDesc&&_ref$hideDesc,model_id=_ref.model_id;switch(type){case"switch":return(0,jsx_runtime.jsxs)(BladeFrame.Z,{index:index,required:required,style:style,title:schema.title.replaceAll("_"," ").replaceAll("Color","c"),children:[(0,jsx_runtime.jsx)(Switch.Z,{defaultValue:model&&model[model_id]||schema.default,checked:model&&!!model[model_id],onChange:function onChange(e,b){return _onClick(model_id,b)},name:schema.title.replaceAll("_"," ").replaceAll("color","c"),color:"primary"}),!hideDesc&&schema.description?(0,jsx_runtime.jsxs)(Typography.Z,{variant:"body2",className:"MuiFormHelperText-root",children:[schema.description," "]}):null]});case"checkbox":return(0,jsx_runtime.jsx)(BladeFrame.Z,{index:index,title:schema.title.replaceAll("_"," ").replaceAll("Color","c"),children:(0,jsx_runtime.jsx)(Checkbox.Z,{defaultValue:schema.default,checked:model&&!!model[model_id],onChange:function onChange(e,b){return _onClick(model_id,b)},name:model_id,color:"primary"})});case"button":return(0,jsx_runtime.jsx)(Button.Z,{color:"primary",variant:model&&model[model_id]?"contained":"outlined",onClick:function onClick(){return _onClick(model_id,model&&!model[model_id])},children:schema.title.replaceAll("_"," ").replaceAll("color","c")});default:return(0,jsx_runtime.jsx)("div",{children:"unset"})}};BladeBoolean.defaultProps=BladeBooleanDefaultProps;var Boolean_BladeBoolean=BladeBoolean;try{BladeBoolean.displayName="BladeBoolean",BladeBoolean.__docgenInfo={description:"## Boolean\n### render as `switch`,`checkbox` or `button`",displayName:"BladeBoolean",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"switch"'},{value:'"checkbox"'}]}},schema:{defaultValue:null,description:"",name:"schema",required:!1,type:{name:"any"}},model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"Record<string, unknown>"}},hideDesc:{defaultValue:{value:"false"},description:"",name:"hideDesc",required:!1,type:{name:"boolean"}},model_id:{defaultValue:null,description:"",name:"model_id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/Boolean/BladeBoolean.tsx#BladeBoolean"]={docgenInfo:BladeBoolean.__docgenInfo,name:"BladeBoolean",path:"src/components/SchemaForm/components/Boolean/BladeBoolean.tsx#BladeBoolean"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SchemaForm/components/Number/BladeSlider.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Number_BladeSlider}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Slider=__webpack_require__("./node_modules/@mui/material/Slider/Slider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Input=__webpack_require__("./node_modules/@mui/material/Input/Input.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),BladeSlider_styles=(0,__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js").Z)((function(){return{input:{marginLeft:"1rem",paddingLeft:"0.5rem",borderRadius:"5px",paddingTop:"3px"},wrapper:{width:"49%",padding:"16px 1.2rem 6px 1.2rem",borderRadius:"10px",position:"relative",display:"flex",margin:"0.5rem 0","@media (max-width: 580px)":{width:"100% !important"},"& > label":{top:"-0.75rem",display:"flex",alignItems:"center",left:"1rem",padding:"0 0.3rem",position:"absolute",fontVariant:"all-small-caps",fontSize:"0.9rem",letterSpacing:"0.1rem",boxSizing:"border-box"},"& .sortable-handler":{touchAction:"none"}}}})),BladeSliderInnerDefaultProps={schema:void 0,model:void 0,model_id:"",step:void 0,onChange:void 0,textfield:void 0,style:void 0,disabled:void 0,marks:void 0,hideDesc:void 0,full:void 0},BladeSliderDefaultProps={variant:"outlined",disableUnderline:void 0,schema:{title:"Slide me"},model:void 0,model_id:"",step:void 0,onChange:void 0,marks:void 0,index:void 0,required:!1,textfield:!1,disabled:!1,hideDesc:!1,style:{},full:!1},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BladeSliderInner=function BladeSliderInner(_ref){var schema=_ref.schema,model=_ref.model,model_id=_ref.model_id,step=_ref.step,onChange=_ref.onChange,textfield=_ref.textfield,style=_ref.style,disabled=_ref.disabled,marks=_ref.marks,hideDesc=_ref.hideDesc,classes=BladeSlider_styles(),theme=(0,useTheme.Z)(),_useState=(0,react.useState)("number"===(model_id&&typeof model[model_id])?model_id&&model[model_id]:"number"==typeof schema.default?schema.default:1),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleSliderChange=function handleSliderChange(_event,newValue){newValue!==value&&setValue(newValue)};return(0,react.useEffect)((function(){setValue(model_id&&"number"==typeof model[model_id]?model[model_id]:"number"==typeof schema.default?schema.default:1)}),[model,model_id]),schema.maximum&&!textfield?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{style:{width:"100%"},children:[(0,jsx_runtime.jsx)(Slider.ZP,{"aria-labelledby":"input-slider",valueLabelDisplay:"auto",disabled:disabled,step:step||(schema.maximum>1?.1:.01),valueLabelFormat:"delay_ms"===model_id?"".concat("number"==typeof value?value:0," ms"):"".concat("number"==typeof value?value:0),min:schema.minimum||0,max:schema.maximum,value:"number"==typeof value?value:0,onChange:handleSliderChange,onChangeCommitted:function onChangeCommitted(e,b){return onChange(model_id,b)},style:(0,objectSpread2.Z)((0,objectSpread2.Z)({color:"#aaa"},style),{},{width:"100%"})}),!hideDesc&&schema.description?(0,jsx_runtime.jsxs)(Typography.Z,{variant:"body2",className:"MuiFormHelperText-root",children:[schema.description," "]}):null]}),(0,jsx_runtime.jsx)(Input.Z,{disableUnderline:!0,disabled:disabled,className:classes.input,style:"delay_ms"===model_id?{minWidth:90,textAlign:"right",paddingTop:0,backgroundColor:theme.palette.divider}:{backgroundColor:theme.palette.divider},value:value,margin:"dense",onChange:function handleInputChange(event){value!==event.target.value&&(setValue(""===event.target.value?"":Number(event.target.value)),event.target.value<schema.minimum?setValue(schema.minimum):event.target.value>schema.maximum&&setValue(schema.maximum),onChange(model_id,Number(event.target.value)))},onBlur:function handleBlur(){value<schema.minimum?setValue(schema.minimum):value>schema.maximum&&setValue(schema.maximum)},endAdornment:"delay_ms"===model_id?"ms ":null,inputProps:{step:step||(schema.maximum>1?.1:.01),min:schema.minimum||0,max:schema.maximum,type:"number","aria-labelledby":"input-slider"}})]}):schema.enum&&!textfield?(0,jsx_runtime.jsx)(Slider.ZP,{"aria-labelledby":"input-slider",valueLabelDisplay:"auto",disabled:disabled,marks:marks.map((function(m,i){return{value:m,label:0===i||i===marks.length-1?m:""}})),step:null,min:marks[0],max:marks[marks.length-1],value:"number"==typeof value?value:0,onChange:handleSliderChange,onChangeCommitted:function onChangeCommitted(e,b){return onChange(model_id,b)},style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{width:"100%"})}):(0,jsx_runtime.jsx)(TextField.Z,{disabled:disabled,InputProps:{endAdornment:"delay_ms"===model_id?"ms":null},type:"number",value:value,onChange:function handleTextChange(event){value<schema.minimum?setValue(schema.minimum):value>schema.maximum&&setValue(schema.maximum),onChange(model_id,Number(event.target.value))},helperText:!hideDesc&&schema.description,style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{width:"100%",backgroundColor:theme.palette.background.paper})})};BladeSliderInner.defaultProps=BladeSliderInnerDefaultProps;var BladeSlider=function BladeSlider(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"outlined":_ref2$variant,schema=_ref2.schema,model=_ref2.model,model_id=_ref2.model_id,step=_ref2.step,onChange=_ref2.onChange,_ref2$marks=_ref2.marks,marks=void 0===_ref2$marks?void 0:_ref2$marks,_ref2$index=_ref2.index,index=void 0===_ref2$index?void 0:_ref2$index,_ref2$required=_ref2.required,required=void 0!==_ref2$required&&_ref2$required,_ref2$textfield=_ref2.textfield,textfield=void 0!==_ref2$textfield&&_ref2$textfield,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$hideDesc=_ref2.hideDesc,hideDesc=void 0!==_ref2$hideDesc&&_ref2$hideDesc,_ref2$full=_ref2.full,full=void 0!==_ref2$full&&_ref2$full,_ref2$style=_ref2.style,style=void 0===_ref2$style?{}:_ref2$style,classes=BladeSlider_styles(),theme=(0,useTheme.Z)();return"outlined"===variant?(0,jsx_runtime.jsxs)(Box.Z,{className:"".concat(classes.wrapper," step-effect-").concat(index),sx:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{border:"1px solid",borderColor:theme.palette.divider,width:full?"100%":style.width,"& > label":{backgroundColor:theme.palette.background.paper},"& .MuiSliderValueLabel > span":{backgroundColor:theme.palette.background.paper}}),children:[(0,jsx_runtime.jsxs)("label",{style:{color:disabled?theme.palette.text.disabled:theme.palette.text.primary},className:"MuiFormLabel-root",children:[schema.title,required?"*":""]}),(0,jsx_runtime.jsx)(BladeSliderInner,{style:style,schema:schema,model:model,model_id:model_id,disabled:disabled,step:step,onChange:onChange,textfield:textfield,marks:marks,hideDesc:hideDesc})]}):(0,jsx_runtime.jsx)(BladeSliderInner,{style:style,step:step,schema:schema,model:model,model_id:model_id,onChange:onChange,disabled:disabled,textfield:textfield,marks:marks,hideDesc:hideDesc})};BladeSlider.defaultProps=BladeSliderDefaultProps;var Number_BladeSlider=BladeSlider;try{BladeSlider.displayName="BladeSlider",BladeSlider.__docgenInfo={description:"## Number\n### render as `input fields` or `sliders`\nRenders slider if:\n\n - schema.maximum && !textfield\n - schema.enum && !textfield",displayName:"BladeSlider",props:{variant:{defaultValue:{value:"outlined"},description:"`outlined` or not. More might come",name:"variant",required:!1,type:{name:"string"}},schema:{defaultValue:null,description:"Renders slider if:\n\n - schema.maximum && !textfield\n - schema.enum && !textfield\n\nElse: renders input field",name:"schema",required:!1,type:{name:"any"}},model:{defaultValue:null,description:"current value representation of schema",name:"model",required:!1,type:{name:"any"}},model_id:{defaultValue:null,description:"",name:"model_id",required:!1,type:{name:"string"}},step:{defaultValue:null,description:"if steps not provided it will be calculated like:\n`schema.maximum > 1 ? 0.1 : 0.01`",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},marks:{defaultValue:{value:"undefined"},description:"",name:"marks",required:!1,type:{name:"any"}},index:{defaultValue:{value:"undefined"},description:"",name:"index",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},textfield:{defaultValue:{value:"false"},description:"Forces input field rendering.\nno slider",name:"textfield",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideDesc:{defaultValue:{value:"false"},description:"",name:"hideDesc",required:!1,type:{name:"boolean"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"any"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/Number/BladeSlider.tsx#BladeSlider"]={docgenInfo:BladeSlider.__docgenInfo,name:"BladeSlider",path:"src/components/SchemaForm/components/Number/BladeSlider.tsx#BladeSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SchemaForm/components/String/BladeSelect.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return String_BladeSelect}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),react=__webpack_require__("./node_modules/react/index.js"),BladeIcon=__webpack_require__("./src/components/Icons/BladeIcon/BladeIcon.tsx"),BladeFrame=__webpack_require__("./src/components/SchemaForm/components/BladeFrame.tsx"),BladeSelectDefaultProps={disabled:!1,schema:{},model:{},model_id:"",onChange:void 0,index:0,required:!1,wrapperStyle:void 0,selectStyle:void 0,textStyle:void 0,menuItemStyle:void 0,hideDesc:!1,children:void 0},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BladeSelect=function BladeSelect(_ref){var _schema$description,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"outlined":_ref$variant,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,schema=_ref.schema,model=_ref.model,model_id=_ref.model_id,_onChange=_ref.onChange,index=_ref.index,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,_ref$wrapperStyle=_ref.wrapperStyle,wrapperStyle=void 0===_ref$wrapperStyle?{margin:"0.5rem",flexBasis:"49%",width:"unset"}:_ref$wrapperStyle,_ref$selectStyle=_ref.selectStyle,selectStyle=void 0===_ref$selectStyle?{}:_ref$selectStyle,_ref$textStyle=_ref.textStyle,textStyle=void 0===_ref$textStyle?{}:_ref$textStyle,_ref$menuItemStyle=_ref.menuItemStyle,menuItemStyle=void 0===_ref$menuItemStyle?{}:_ref$menuItemStyle,hideDesc=_ref.hideDesc,children=_ref.children,_useState=(0,react.useState)("icon_name"===schema.id?model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]:""),_useState2=(0,slicedToArray.Z)(_useState,2),icon=_useState2[0],setIcon=_useState2[1];return(0,jsx_runtime.jsx)(BladeFrame.Z,{title:schema.title,className:"step-effect-".concat(index),full:!(schema.enum&&schema.enum.length&&Object.values(schema.enum).every((function(a){return(null==a?void 0:a.length)<20}))),required:required,style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},wrapperStyle),{},{flexBasis:"Name"===schema.title?"100%":"49%"}),children:"contained"===variant?schema.enum?(0,jsx_runtime.jsx)(Select.Z,{variant:"filled",disabled:disabled,style:(0,objectSpread2.Z)({flexGrow:"unset"},selectStyle),defaultValue:schema.default,value:model&&model_id&&model[model_id]||schema.enum[0],onChange:function onChange(e){return _onChange(model_id,e.target.value)},children:children||schema.enum.map((function(item,i){return(0,jsx_runtime.jsx)(MenuItem.Z,{value:item,children:item},"".concat(i,"-").concat(i))}))}):(0,jsx_runtime.jsx)(TextField.Z,{helperText:!hideDesc&&schema.description,defaultValue:model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]||schema.default||"",onBlur:function onBlur(e){return _onChange(model_id,e.target.value)},style:textStyle}):schema.enum&&Array.isArray(schema.enum)?(0,jsx_runtime.jsx)(Select.Z,{disabled:disabled,style:(0,objectSpread2.Z)({flexGrow:"outlined"===variant?1:"unset"},selectStyle),defaultValue:schema.default,value:model&&model_id&&model[model_id]||schema.enum[0],onChange:function onChange(e){return _onChange(model_id,e.target.value)},children:schema.enum.map((function(item,i){return(0,jsx_runtime.jsx)(MenuItem.Z,{value:item,style:menuItemStyle,children:item},i)}))}):schema.enum&&!Array.isArray(schema.enum)?(0,jsx_runtime.jsx)(Select.Z,{disabled:disabled,style:(0,objectSpread2.Z)({flexGrow:"outlined"===variant?1:"unset"},selectStyle),defaultValue:schema.default,value:model&&model_id&&schema.enum[model[model_id]]||schema.enum[0],onChange:function onChange(e){return _onChange(model_id,parseInt(Object.keys(schema.enum).find((function(en){return schema.enum[en]===e.target.value}))||"0",10))},children:Object.keys(schema.enum).map((function(item,i){return(0,jsx_runtime.jsx)(MenuItem.Z,{value:schema.enum[item],children:schema.enum[item]},i)}))}):(0,jsx_runtime.jsx)(TextField.Z,{type:null!==(_schema$description=schema.description)&&void 0!==_schema$description&&_schema$description.includes("password")?"password":"unset",helperText:!hideDesc&&schema.description,InputProps:"icon_name"===schema.id?{startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:(0,jsx_runtime.jsx)(BladeIcon.Z,{name:icon,style:{color:"#eee"}})})}:{},defaultValue:model&&model_id&&model[model_id]||schema.enum&&schema.enum[0]||schema.default||"",onBlur:function onBlur(e){return _onChange(model_id,e.target.value)},onChange:function onChange(e){"icon_name"===schema.id&&setIcon(e.target.value)},style:textStyle})})};BladeSelect.defaultProps=BladeSelectDefaultProps;var String_BladeSelect=BladeSelect;try{BladeSelect.displayName="BladeSelect",BladeSelect.__docgenInfo={description:"## String\n### render as `input field` or `select`\nRenders select if schema.enum is defined properly",displayName:"BladeSelect",props:{variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"contained"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"",name:"schema",required:!1,type:{name:"any"}},model:{defaultValue:null,description:"",name:"model",required:!1,type:{name:"any"}},model_id:{defaultValue:null,description:"",name:"model_id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},wrapperStyle:{defaultValue:{value:"{ margin: '0.5rem', flexBasis: '49%', width: 'unset' }"},description:"",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}},selectStyle:{defaultValue:{value:"{}"},description:"",name:"selectStyle",required:!1,type:{name:"CSSProperties"}},textStyle:{defaultValue:{value:"{}"},description:"",name:"textStyle",required:!1,type:{name:"CSSProperties"}},menuItemStyle:{defaultValue:{value:"{}"},description:"",name:"menuItemStyle",required:!1,type:{name:"CSSProperties"}},hideDesc:{defaultValue:null,description:"",name:"hideDesc",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SchemaForm/components/String/BladeSelect.tsx#BladeSelect"]={docgenInfo:BladeSelect.__docgenInfo,name:"BladeSelect",path:"src/components/SchemaForm/components/String/BladeSelect.tsx#BladeSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,r){t.exports=r(64)},25:function(t,e,r){},27:function(t,e,r){},63:function(t){t.exports={definitions:{contrasts:{ttest:{type:"object",required:[],properties:{name:{type:"string"},condition_list:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"number"}},type:{type:"string",enum:["T","t",null]}}},Ftest:{type:"object",required:[],properties:{name:{type:"string"},condition_list:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"array",items:{type:"number"}}},type:{type:"string",enum:["F"]}}}},transformationArgs:{input:{type:"array",items:{type:"string"}},output_str:{type:"string"},output_arr:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"number"}},wrt:{type:"array",items:{type:"string"}},demean:{type:"boolean"},target:{type:"array",items:{type:"string"}},input_attr:{oneOf:[{type:"string"},{type:"array",items:{type:"string"}}]},output_attr:{anyOf:[{type:"string"},{type:"array",items:{type:"string"}}]},prefix:{type:"array",items:{type:"string"}},ref_level:{type:"string"},replace:{type:"object"},attribute:{type:"string"},rescale:{type:"boolean"},threshold:{type:"string"},binarize:{type:"boolean"},above:{type:"boolean"},signed:{type:"boolean"},model:{type:"string",enum:["spm","glover","fir"]},derivative:{type:"boolean"},dispersion:{type:"boolean"},fir_delays:{type:"array",items:{type:"string"}},constraint:{type:"string"},order:{type:"number"},_comment:{type:"string"}},transformations:{drop_na:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"drop_na",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},assign:{type:"object",additionalProperties:!1,required:["input","target"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"assign",input:{$ref:"#/definitions/transformationArgs/input"},target:{$ref:"#/definitions/transformationArgs/target"},target_attr:{$ref:"#/definitions/transformationArgs/output_attr"},output:{$ref:"#/definitions/transformationArgs/output_arr"},input_attr:{$ref:"#/definitions/transformationArgs/input_attr"},output_attr:{$ref:"#/definitions/transformationArgs/output_attr"}}},copy:{type:"object",additionalProperties:!1,required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"copy",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},demean:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"demean",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},factor:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"factor",input:{$ref:"#/definitions/transformationArgs/input"},prefix:{$ref:"#/definitions/transformationArgs/prefix"},constraint:{$ref:"#/definitions/transformationArgs/constraint"},ref_level:{$ref:"#/definitions/transformationArgs/ref_level"}}},not:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},or:{type:"object",additionalProperties:!1,required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"or",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},and:{type:"object",additionalProperties:!1,required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"and",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},orthogonalize:{type:"object",additionalProperties:!1,required:["input","wrt"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"orthogonalize",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},wrt:{$ref:"#/definitions/transformationArgs/wrt"},demean:{$ref:"#/definitions/transformationArgs/demean"}}},product:{type:"object",additionalProperties:!1,required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"product",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},replace:{type:"object",additionalProperties:!1,required:["input","replace"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"replace",input:{$ref:"#/definitions/transformationArgs/input"},replace:{$ref:"#/definitions/transformationArgs/replace"},attribute:{$ref:"#/definitions/transformationArgs/attribute"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},scale:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"scale",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},demean:{$ref:"#/definitions/transformationArgs/demean"},rescale:{$ref:"#/definitions/transformationArgs/rescale"}}},select:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"select",input:{$ref:"#/definitions/transformationArgs/input"}}},sum:{type:"object",additionalProperties:!1,required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"sum",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},weights:{$ref:"#/definitions/transformationArgs/weights"}}},threshold:{type:"object",required:["input","output"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"threshold",input:{$ref:"#/definitions/transformationArgs/input"},threshold:{$ref:"#/definitions/transformationArgs/threshold"},binarize:{$ref:"#/definitions/transformationArgs/binarize"},above:{$ref:"#/definitions/transformationArgs/above"},signed:{$ref:"#/definitions/transformationArgs/signed"}}},to_dense:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"to_dense",input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},convolve_HRF:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"convolve_HRF",input:{$ref:"#/definitions/transformationArgs/input"},model:{$ref:"#/definitions/transformationArgs/model"},derivative:{$ref:"#/definitions/transformationArgs/derivative"},dispersion:{$ref:"#/definitions/transformationArgs/dispersion"},fir_delays:{$ref:"#/definitions/transformationArgs/fir_delays"}}},polynomial_expansion:{type:"object",additionalProperties:!1,properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"polynomial_expansion",order:{$ref:"#/definitions/transformationArgs/order"}}},split:{type:"object",additionalProperties:!1,required:["input"],properties:{_comment:{$ref:"#/definitions/transformationArgs/_comment"},name:"split",input:{$ref:"#/definitions/transformationArgs/input"},by:{$ref:"#/definitions/transformationArgs/input"}}}}},type:"object",required:[],properties:{name:{type:"string"},description:{type:"string"},input:{type:"object",required:[],properties:{task:{type:"string"}}},blocks:{type:"array",items:{type:"object",required:[],additionalProperties:!1,properties:{level:{type:"string",enum:["run","session","subject","dataset"]},transformations:{type:"array",items:{anyOf:[{$ref:"#/definitions/transformations/copy"},{$ref:"#/definitions/transformations/drop_na"},{$ref:"#/definitions/transformations/scale"},{$ref:"#/definitions/transformations/orthogonalize"},{$ref:"#/definitions/transformations/factor"},{$ref:"#/definitions/transformations/sum"},{$ref:"#/definitions/transformations/product"},{$ref:"#/definitions/transformations/or"},{$ref:"#/definitions/transformations/not"},{$ref:"#/definitions/transformations/and"},{$ref:"#/definitions/transformations/select"},{$ref:"#/definitions/transformations/replace"},{$ref:"#/definitions/transformations/assign"},{$ref:"#/definitions/transformations/threshold"},{$ref:"#/definitions/transformations/to_dense"},{$ref:"#/definitions/transformations/convolve_HRF"},{$ref:"#/definitions/transformations/split"},{$ref:"#/definitions/transformations/polynomial_expansion"}]}},model:{type:"object",additionalProperties:!1,required:[],properties:{model_type:{type:"string"},variables:{type:"array",items:{type:"string"}},variances:{type:"array",items:[{name:{type:"string"},groupBy:{type:"string"}}]}}},auto_contrasts:{anyOf:[{$ref:"#/definitions/transformationArgs/input"},{type:"boolean"}]},contrasts:{type:"array",items:{anyOf:[{$ref:"#/definitions/contrasts/ttest"},{$ref:"#/definitions/contrasts/Ftest"}]}}}}}}}},64:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),o=r(19),s=r.n(o),a=(r(25),r(2)),f=r(6),p=r(7),m=r(10),d=r(8),u=r(9),c=(r(27),r(29)),l=r(63),g=function(t){function e(){return Object(f.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=[];return this.props.valid.split(",").map(function(e,r){return t.push(i.a.createElement("li",{key:r},e)),e}),i.a.createElement("div",null,i.a.createElement("ul",null,t))}}]),e}(n.Component),y=function(t){function e(t){var r;return Object(f.a)(this,e),(r=Object(m.a)(this,Object(d.a)(e).call(this,t))).state={value:"test",schema:l,valid:"Invalid"},r.handleChange=r.handleChange.bind(Object(a.a)(Object(a.a)(r))),r}return Object(u.a)(e,t),Object(p.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState({value:e}),t.preventDefault();try{e=JSON.parse(e)}catch(t){console.log(t)}var r=new c,n=r.compile(this.state.schema),i=n(e);i?i="Valid!":(console.log(n.errors),i="Invalid: "+r.errorsText(n.errors)),this.setState({valid:i})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),i.a.createElement(g,{valid:this.state.valid})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.7d256b8e.chunk.js.map
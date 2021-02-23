var e={props:{value:String},data(){return{backgroundImg:{backgroundImage:`url(${this.value})`}}}};var n=function(e,n,t,a,i,r,o,s,d,l){"boolean"!=typeof o&&(d=s,s=o,o=!1);var c,u="function"==typeof t?t.options:t;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),a&&(u._scopeId=a),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=o?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),c)if(u.functional){var p=u.render;u.render=function(e,n){return c.call(n),p(e,n)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return t},t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a=document.head||document.getElementsByTagName("head")[0],i={};var r=function(e){return function(e,n){return function(e,n){var r=t?n.media||"default":e,o=i[r]||(i[r]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var s=n.source;if(n.map&&(s+="\n/*# sourceURL="+n.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",n.media&&o.element.setAttribute("media",n.media),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(s),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var d=o.ids.size-1,l=document.createTextNode(s),c=o.element.childNodes;c[d]&&o.element.removeChild(c[d]),c.length?o.element.insertBefore(l,c[d]):o.element.appendChild(l)}}}(e,n)}};const o=e;var s=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"cloudinary-image-row",style:e.backgroundImg})};s._withStripped=!0;var d={id:"cloudinary-image-display",name:"Cloudinary Image",description:"Display to show a Cloudinary image",icon:"image",handler:n({render:s,staticRenderFns:[]},(function(e){e&&e("data-v-dceeda58_0",{source:"\n.cloudinary-image-row[data-v-dceeda58] {\n    display: inline-block;\n    height: 32px;\n    width: 32px;\n    border-radius: 4px;\n    vertical-align: -30%;\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n",map:{version:3,sources:["/home/daniel/cloudinary-example/extensions/displays/cloudinary-image/src/display.vue"],names:[],mappings:";AAuBA;IACA,qBAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,oBAAA;IACA,uBAAA;IACA,4BAAA;IACA,2BAAA;AACA",file:"display.vue",sourcesContent:['<template>\n    <div\n        class="cloudinary-image-row"\n        :style="backgroundImg"\n    />\n</template>\n\n<script>\nexport default {\n    props: {\n        value: String\n    },\n    data() {\n        return {\n            backgroundImg: {\n                backgroundImage: `url(${this.value})`\n            }\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n.cloudinary-image-row {\n    display: inline-block;\n    height: 32px;\n    width: 32px;\n    border-radius: 4px;\n    vertical-align: -30%;\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n</style>']},media:void 0})}),o,"data-v-dceeda58",false,undefined,!1,r,void 0,void 0),types:["string"]};export default d;

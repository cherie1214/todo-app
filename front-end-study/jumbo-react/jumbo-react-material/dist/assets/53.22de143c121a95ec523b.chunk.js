webpackJsonp([53],{1347:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),_=r(u),l=n(3599),d=r(l),p=n(1423),f=r(p),m=n(66),R=r(m),b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateContent=n.updateContent.bind(n),n.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},n}return i(t,e),c(t,[{key:"updateContent",value:function(e){this.setState({content:e})}},{key:"onChange",value:function(e){var t=e.editor.getData();this.setState({content:t})}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){return _.default.createElement("div",null,_.default.createElement(f.default,{title:_.default.createElement(R.default,{id:"sidebar.editors.CKEditor"}),match:this.props.match}),_.default.createElement("div",{className:"jr-card"},_.default.createElement(d.default,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}})))}}]),t}(_.default.Component),h=b;t.default=h;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"CK","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(h,"default","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(_,"_react2","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(d,"_reactCkeditorComponent2","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(R,"_IntlMessages2","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(a,"_possibleConstructorReturn","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(i,"_inherits","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"CK","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(h,"_default","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","D:/React/jambo-react/src/app/routes/editors/routes/CK/index.js"))}()},1423:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(270),s=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},c=function(e,t,n){return 0===n?"#/":"#/"+e.split(t)[0]+t},u=function(e){var t=e.title,n=e.match,r=n.path.substr(1),o=r.split("/");return a.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},a.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t),a.default.createElement(i.Breadcrumb,{className:"mb-0",tag:"nav"},o.map(function(e,t){return a.default.createElement(i.BreadcrumbItem,{active:o.length===t+1,tag:o.length===t+1?"span":"a",key:t,href:c(r,e,t)},s(e))})))},_=u;t.default=_;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"getDisplayString","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"getUrlString","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"ContainerHeader","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"default","D:/React/jambo-react/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"_react2","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(s,"getDisplayString","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"getUrlString","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"ContainerHeader","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_default","D:/React/jambo-react/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","D:/React/jambo-react/src/components/ContainerHeader/index.js"))}()},3599:function(e,t,n){"use strict";e.exports=n(3600)},3600:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),_=n(3),l=r(_),d=n(30),p=r(d),f=n(3601),m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onLoad=n.onLoad.bind(n),n.state={isScriptLoaded:n.props.isScriptLoaded,config:n.props.config},n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.isScriptLoaded?this.onLoad():f(this.props.scriptUrl,this.onLoad)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting){if(this.setState({isScriptLoaded:!0}),!window.CKEDITOR)return void console.error("CKEditor not found");this.editorInstance=window.CKEDITOR.appendTo(p.default.findDOMNode(this),this.state.config,this.props.content);for(var e in this.props.events){var t=this.props.events[e];this.editorInstance.on(e,t)}}}},{key:"render",value:function(){return u.default.createElement("div",{className:this.props.activeClass})}}]),t}(u.default.Component);m.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},m.propTypes={content:l.default.any,config:l.default.object,isScriptLoaded:l.default.bool,scriptUrl:l.default.string,activeClass:l.default.string,events:l.default.object},t.default=m},3601:function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,a){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(a=t,t={}),t=t||{},a=a||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t)||!!t.async,s.src=e,t.attrs&&n(s,t.attrs),t.text&&(s.text=""+t.text),("onload"in s?r:o)(s,a),s.onload||r(s,a),i.appendChild(s)}}});
//# sourceMappingURL=53.22de143c121a95ec523b.chunk.js.map
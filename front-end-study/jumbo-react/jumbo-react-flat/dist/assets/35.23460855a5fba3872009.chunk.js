webpackJsonp([35],{1123:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),o=r(s),l=a(1148),n=r(l),c=a(1147),_=r(c),i=a(2639),u=r(i),d=a(56),m=r(d),f=function(e){var t=e.match;return o.default.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},o.default.createElement(_.default,{title:o.default.createElement(m.default,{id:"extraElements.callouts"}),match:t}),o.default.createElement("div",{className:"row"},o.default.createElement(n.default,{childrenStyle:"p-0",styleName:"col-lg-12",heading:o.default.createElement(m.default,{id:"callouts.basic"})},o.default.createElement(u.default,null))))},p=f;t.default=p;var E=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"Callouts","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(p,"default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(n,"_index2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(_,"_index4","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(u,"_Basic2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(m,"_IntlMessages2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(f,"Callouts","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(p,"_default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"),__REACT_HOT_LOADER__.register(E,"_temp","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/index.js"))}()},1147:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),o=r(s),l=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},n=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t},c=function(e){var t=e.title,a=e.match,r=a.path.substr(1);r.split("/");return o.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},o.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},_=c;t.default=_;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"getDisplayString","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getUrlString","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"default","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"getDisplayString","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getUrlString","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_default","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","D:/React/jumbo-react-flat/src/components/ContainerHeader/index.js"))}()},1148:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),o=r(s),l=function(e){var t=e.heading,a=e.children,r=e.styleName,s=e.cardStyle,l=e.childrenStyle,n=e.headerOutside;return o.default.createElement("div",{className:""+r},n&&o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading heading"},t),a.length>1&&o.default.createElement("div",{className:"entry-description"},a[0])),o.default.createElement("div",{className:"jr-card "+s},!n&&t&&o.default.createElement("div",{className:"jr-card-header"},o.default.createElement("h3",{className:"card-heading"},t),a.length>1&&o.default.createElement("div",{className:"sub-heading"},a[0])),o.default.createElement("div",{className:"jr-card-body "+l},a.length>1?a[1]:a)))},n=l;t.default=n,l.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"CardBox","D:/React/jumbo-react-flat/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"default","D:/React/jumbo-react-flat/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","D:/React/jumbo-react-flat/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jumbo-react-flat/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(l,"CardBox","D:/React/jumbo-react-flat/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"_default","D:/React/jumbo-react-flat/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(c,"_temp","D:/React/jumbo-react-flat/src/components/CardBox/index.js"))}()},2639:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),o=r(s),l=a(2640),n=r(l),c=a(2641),_=r(c),i=function(){return o.default.createElement("div",{id:"callouts"},_.default.map(function(e,t){return o.default.createElement(n.default,{key:t,styleName:t%2==0?"odd":"even",callout:e})}))},u=i;t.default=u;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Basic","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(u,"default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(n,"_Callout2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(_,"_calloutsData2","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(i,"Basic","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(u,"_default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/Basic/index.js"))}()},2640:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),o=r(s),l=a(93),n=a(56),c=r(n),_=function(e){var t=e.styleName,a=e.callout,r=a.image,s=a.title,n=a.description;return o.default.createElement("div",{className:"product-row "+t},o.default.createElement("div",{className:"product-col product-thumb "},o.default.createElement("div",{className:"grid-thumb-equal"},o.default.createElement("a",{href:"javascript:void(0)",className:"grid-thumb-cover"},o.default.createElement("img",{alt:"Special Edition Party Spas",src:r})))),o.default.createElement("div",{className:"product-col product-content"},o.default.createElement("div",{className:"product-content-inner"},o.default.createElement("h2",{className:"fw-regular"},s),o.default.createElement("p",null,n),o.default.createElement(l.Button,{outline:!0,color:"primary",className:"text-uppercase"},o.default.createElement(c.default,{id:"callouts.viewRange"})))))},i=_;t.default=i;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"Callout","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(i,"default","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(c,"_IntlMessages2","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(_,"Callout","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(i,"_default","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"),__REACT_HOT_LOADER__.register(u,"_temp","D:/React/jumbo-react-flat/src/components/callouts/Callout.js"))}()},2641:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[{image:"assets/images/callouts/cardboard.jpg",title:"Cedar Barrel Sauna",description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{image:"assets/images/callouts/macbook-40.jpeg",title:"Traditional Saunas",description:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},{image:"assets/images/callouts/iphone.jpeg",title:"Traditional Saunas",description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},{image:"assets/images/callouts/headphone.jpeg",title:"Cedar Barrel Sauna",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{image:"assets/images/callouts/camera.jpeg",title:"Traditional Saunas",description:" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."},{image:"assets/images/callouts/alarm.jpeg",title:"Infrared Saunas",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},{image:"assets/images/callouts/office-40.jpeg",title:"Infrared Saunas",description:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}],s=r;t.default=s;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"calloutsData","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/calloutsData.js"),__REACT_HOT_LOADER__.register(s,"default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/calloutsData.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"calloutsData","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/calloutsData.js"),__REACT_HOT_LOADER__.register(s,"_default","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/calloutsData.js"),__REACT_HOT_LOADER__.register(o,"_temp","D:/React/jumbo-react-flat/src/app/routes/extraElements/routes/callouts/calloutsData.js"))}()}});
//# sourceMappingURL=35.23460855a5fba3872009.chunk.js.map
(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.parentEl=e}var n,i,r;return n=t,i=[{key:"init",value:function(){var e=this;this.parentEl.innerHTML=this.constructor.markup();var t=this.parentEl.querySelector(".button"),n=this.parentEl.querySelector(".collapse"),i=n.clientHeight;n.style.maxHeight="0px",t.addEventListener("click",(function(){e.onClick(n,i)}))}},{key:"onClick",value:function(e,t){e.classList.contains("show")?(e.style.maxHeight="0px",e.classList.remove("show")):(e.style.maxHeight="".concat(t,"px"),e.classList.add("show"))}}],r=[{key:"markup",value:function(){return'\n      <button class="button" type="button">Collapse</button>\n      <div class="collapse">\n        <p class="collapse__content">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proidint.</p>\n      </div>\n    '}}],i&&e(n.prototype,i),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();new t(document.querySelector(".container")).init()})();
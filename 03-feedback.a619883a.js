!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function I(e){return c=e,f=setTimeout(O,t),s?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=u}function O(){var e=p();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,u-(e-c)):n}(e))}function T(e){return f=void 0,d&&r?y(e):(r=o=void 0,a)}function h(){var e=p(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return I(l);if(m)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(m="maxWait"in n)?v(S(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?a:T(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var I="feedback-form-state",j={formInput:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),submitForm:document.querySelector(".feedback-form"),message:document.querySelector("textarea")};j.submitForm.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(I),""==j.emailInput.value||""==j.message.value?alert("Не всі рядки заповнені"):e.currentTarget.reset();var t={email:j.emailInput.value,message:j.message.value};localStorage.setItem(I,JSON.stringify(t))})),function(){var e=JSON.parse(localStorage.getItem(I));if(null===e)return;j.message.value=e.message||"",j.emailInput.value=e.email||""}(),j.formInput.addEventListener("input",e(t)((function(e){var t={email:j.emailInput.value,message:j.message.value};t[e.target.name]=e.target.value,localStorage.setItem(I,JSON.stringify(t))}),500))}();
//# sourceMappingURL=03-feedback.a619883a.js.map
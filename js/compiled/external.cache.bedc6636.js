!function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){return o(e[i][1][r]||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(require,module,exports){UserVoice=window.UserVoice||[],function(){var uv=document.createElement("script");uv.type="text/javascript",uv.async=!0,uv.src="//widget.uservoice.com/i25Vw5UI5zit2eA8vAjpBg.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(uv,s)}(),UserVoice.push(["set",{accent_color:"#448dd6",trigger_color:"white",trigger_background_color:"#448dd6"}]),UserVoice.push(["identify",{}]),UserVoice.push(["addTrigger",{mode:"contact",trigger_position:"bottom-right"}]),UserVoice.push(["autoprompt",{}])},{}]},{},[1]);
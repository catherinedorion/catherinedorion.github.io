(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function a(){}function N(e){return e()}function v(){return Object.create(null)}function p(e){e.forEach(N)}function A(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function M(e){return Array.from(e.childNodes)}let b;function d(e){b=e}const f=[],O=[],m=[],L=[],q=Promise.resolve();let y=!1;function F(){y||(y=!0,q.then(S))}function $(e){m.push(e)}const g=new Set;let h=0;function S(){const e=b;do{for(;h<f.length;){const t=f[h];h++,d(t),K(t.$$)}for(d(null),f.length=0,h=0;O.length;)O.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];g.has(n)||(g.add(n),n())}m.length=0}while(f.length);for(;L.length;)L.pop()();y=!1,g.clear(),d(e)}function K(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const z=new Set;function D(e,t){e&&e.i&&(z.delete(e),e.i(t))}function G(e,t,n,i){const{fragment:r,on_mount:c,on_destroy:l,after_update:_}=e.$$;r&&r.m(t,n),i||$(()=>{const u=c.map(N).filter(A);l?l.push(...u):p(u),e.$$.on_mount=[]}),_.forEach($)}function H(e,t){const n=e.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(f.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,i,r,c,l,_=[-1]){const u=b;d(e);const o=e.$$={fragment:null,ctx:null,props:c,update:a,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:v(),dirty:_,skip_bound:!1,root:t.target||u.$$.root};l&&l(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(s,k,...w)=>{const E=w.length?w[0]:k;return o.ctx&&r(o.ctx[s],o.ctx[s]=E)&&(!o.skip_bound&&o.bound[s]&&o.bound[s](E),x&&J(e,s)),k}):[],o.update(),x=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const s=M(t.target);o.fragment&&o.fragment.l(s),s.forEach(j)}else o.fragment&&o.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),S()}d(u)}class R{$destroy(){H(this,1),this.$destroy=a}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(e){let t;return{c(){t=I("main"),t.textContent="En construction"},m(n,i){B(n,t,i)},p:a,i:a,o:a,d(n){n&&j(t)}}}class U extends R{constructor(t){super(),Q(this,t,null,T,C,{})}}new U({target:document.getElementById("app")});
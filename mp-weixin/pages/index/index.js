(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2b05":function(n,t,e){"use strict";e.r(t);var i=e("88db"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},"3f6c":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.homeshixigonggaolist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.homeshixigonggaolist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},o=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},"6d0b":function(n,t,e){"use strict";(function(n){e("1fd4"),e("921b");i(e("66fd"));var t=i(e("f27f"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},7791:function(n,t,e){"use strict";var i=e("f43a"),a=e.n(i);a.a},"88db":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,i,a,o,r){try{var u=n[o](r),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(i,a)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function u(n){o(r,i,a,u,c,"next",n)}function c(n){o(r,i,a,u,c,"throw",n)}u(void 0)}))}}e("e63a");var u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("4a96"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:u},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],homeshixigonggaolist:[],news:[]}},onShow:function(){var n=r(i.default.mark((function n(){var t,e,a,o,r,u,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,a=!0,o=!1,r=void 0,n.prev=7,u=e.data.list[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&(console.log(s),t.push({img:s.value}));n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),o=!0,r=n.t0;case 15:n.prev=15,n.prev=16,a||null==u.return||u.return();case 18:if(n.prev=18,!o){n.next=21;break}throw r;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),n.next=26,this.$api.list("shixigonggao",{page:1,limit:4});case 26:e=n.sent,this.homeshixigonggaolist=e.data.list;case 28:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},f27f:function(n,t,e){"use strict";e.r(t);var i=e("3f6c"),a=e("2b05");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("7791");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports},f43a:function(n,t,e){}},[["6d0b","common/runtime","common/vendor"]]]);
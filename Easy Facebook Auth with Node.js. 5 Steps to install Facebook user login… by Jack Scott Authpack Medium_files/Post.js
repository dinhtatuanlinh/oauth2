(self.webpackChunklite=self.webpackChunklite||[]).push([[2332],{69100:(e,t,n)=>{var r=n(99489),o=n(57067);function a(t,n,i){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,t,n)=>{var r=n(29754),o=n(99489),a=n(70430),i=n(69100);function u(t){var n="function"==typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return i(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},u(t)}e.exports=u},6672:(e,t,n)=>{"use strict";n.d(t,{Ij:()=>k,iT:()=>x,rK:()=>S});var r=n(28655),o=n.n(r),a=n(71439),i=n(67294),u=n(49768),c=n(34575),s=n.n(c),l=n(2205),p=n.n(l),f=n(78585),d=n.n(f),h=n(29754),m=n.n(h),v=n(65957);var y=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var o=m()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d()(this,e)});function o(){return s()(this,o),r.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return o}(n.n(v)()(Error)),g=n(41254),b=n(52383),P=n(80177),O=n(47266);function w(){var e=o()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);return w=function(){return e},e}function E(e){var t=e.errorData,n=e.showMetabar;return i.createElement(g.q,{code:451,title:"451 Not available — Medium",lumenId:t.lumenId,showMetabar:n},"This story is subject to a DMCA copyright or other legal or government claim.")}var M=(0,a.Ps)(w());function I(){var e=o()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);return I=function(){return e},e}function R(e){var t=e.errorData,n=e.showMetabar;return i.createElement(g.q,{code:451,title:"451 Not available in your country — Medium",lumenId:t.lumenId,showMetabar:n},"This page is not available in your country.")}var _=(0,a.Ps)(I()),D=n(19732);function j(){var e=o()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ","\n  ","\n"]);return j=function(){return e},e}var S=function(e){return!(0,D.f)(e)},k=function(e){var t=e.postResult,n=e.showMetabar;if(!t)return i.createElement(b.C,{error:new y});switch(t.__typename){case"Unauthorized":return i.createElement(u.N,{opt_isDraft:!0});case"NotFound":return i.createElement(P.$,{showMetabar:n});case"AccountDeleted":return i.createElement(g.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:n},"User deactivated or deleted their account.");case"AccountSuspended":return i.createElement(O.y,{suspension:"account",showMetabar:n});case"PostSuspended":return i.createElement(O.y,{suspension:"post",showMetabar:n});case"Blocked":return i.createElement(g.q,{code:403,title:"403 Blocked — Medium",showMetabar:n},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return i.createElement(g.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:n},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return i.createElement(E,{errorData:t,showMetabar:n});case"WithheldInCountry":return i.createElement(R,{errorData:t,showMetabar:n});default:return i.createElement(b.C,{error:new Error("Unsupported postResult: ".concat(t.__typename)),showMetabar:n})}},x=(0,a.Ps)(j(),M,_)},1250:(e,t,n)=>{"use strict";n.d(t,{k:()=>d});var r=n(28655),o=n.n(r),a=n(71439),i=n(46829),u=n(67294),c=n(42963),s=n(8403),l=n(67297);function p(){var e=o()(["\n  query InlineExpandingPostCanonicalizer($postId: ID!) {\n    post(id: $postId) {\n      mediumUrl\n    }\n  }\n"]);return p=function(){return e},e}var f=(0,a.Ps)(p()),d=function(e){var t,n=e.children,r=(0,s.Wd)("p"),o=(0,l.v9)((function(e){return e.client.hydrated})),a=(0,i.useQuery)(f,{variables:{postId:r||""},skip:!r}).data;return null!=a&&null!==(t=a.post)&&void 0!==t&&t.mediumUrl&&!o?u.createElement(c.l,{to:a.post.mediumUrl,replace:!0}):n}},49768:(e,t,n)=>{"use strict";n.d(t,{N:()=>l});var r=n(67294),o=n(42963),a=n(14414),i=n(51512),u=n(67297),c=n(96879),s=n(27952),l=function(e){var t=e.opt_isDraft,n=e.opt_params,l=e.operation,p=(0,u.v9)((function(e){return e.config.authDomain})),f=(0,u.v9)((function(e){return e.navigation.currentLocation})),d=(0,i.pK)(),h=(0,i.hp)(),m=(0,c.Rk)((0,s.Kkz)(p),{operation:l||"login",redirect:(0,a.hQ)(f,d,h,null,null,n),isDraft:t?"1":"0"});return r.createElement(o.l,{to:m,temporary:!0})}},37620:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PostHandler:()=>K});var r=n(59713),o=n.n(r),a=n(28655),i=n.n(a),u=n(46829),c=n(71439),s=n(67294),l=n(6672),p=n(1250),f=n(8575),d=n(75341),h=n(42963),m=n(80177),v=n(8403),y=n(67297),g=n(96879);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){var e=i()(["\n  fragment PostCanonicalizer_post on Post {\n    mediumUrl\n  }\n"]);return O=function(){return e},e}var w=(0,c.Ps)(O()),E=["blog.coinbase.com","moody-pub.medium.fail"],M=function(e){var t=e.post.mediumUrl,n=e.matchedPath,r=e.children,o=(0,y.v9)((function(e){return e.navigation.currentHash})),a=(0,v.Wd)("showDomainSetup"),i=(0,v.Wd)("postPublishedType"),u=(0,v.Wd)("responsesOpen"),c=(0,v.PM)(),l=(0,v.G1)(),p=(0,y.v9)((function(e){return e.navigation.host})),b=(0,d.zM)();if(!t||b)return r;var O=f.parse(decodeURIComponent(t)),w=P(P(P(P(P({},c?{source:c}:{}),l?{sk:l}:{}),i?{postPublishedType:i}:{}),a?{showDomainSetup:a}:{}),u?{responsesOpen:u}:{});return p!==O.host?E.indexOf(p)>-1?s.createElement(m.$,null):s.createElement(h.l,{to:(0,g.Rk)(t,w,o),replace:!0}):O.path&&n!==O.path?s.createElement(h.l,{to:(0,g.Rk)(O.path,w,o),replace:!0}):r},I=n(25537),R=n(32149),_=n(66893),D=n(95760),j=n(31235),S=n(53976),k=n(1932),x=n(51512),C=n(96890),U=n(2874),$=n(52383),L=n(90320),W=n(54247),F=n(27952);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(){var e=i()(["\n  query PostMeter($postId: ID!, $postMeteringOptions: PostMeteringOptions) {\n    meterPost(postId: $postId, postMeteringOptions: $postMeteringOptions) {\n      __typename\n      ... on MeteringInfo {\n        ...PostScreen_meteringInfo\n      }\n    }\n  }\n  ","\n"]);return N=function(){return e},e}function A(){var e=i()(["\n  query PostHandler(\n    $postId: ID!\n    $postMeteringOptions: PostMeteringOptions\n    $includePostInternalLinks: Boolean!\n    $includePostRecirc: Boolean = false\n    $postRecircPaging: PaginationLimit\n  ) {\n    postResult(id: $postId) {\n      __typename\n      ...PostResultError_postResult\n      ... on Post {\n        ...PostScreen_post\n        ...PostCanonicalizer_post\n        creator {\n          ...useShouldShowEntityDrivenSubscription_creator\n        }\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return A=function(){return e},e}var z=(0,c.Ps)(A(),l.iT,w,W.m6,R.G),B=(0,c.Ps)(N(),W.De),K=function(e){var t,n=e.match,r=(0,I.o)(),o=(0,y.v9)((function(e){var t,n,o=e.config.recircOptions;return r?null==o||null===(t=o.v2)||void 0===t?void 0:t.limit:null==o||null===(n=o.v1)||void 0===n?void 0:n.limit})),a=(0,y.v9)((function(e){return e.navigation.referrer})),i=(0,v.G1)(),c=(0,v.PM)(),f=(0,j.xg)();!function(){var e=(0,_.Vb)(),t=(0,j.xg)(),n=(0,j.Wj)(),r=(0,D.Av)(),o=JSON.stringify(e);s.useEffect((function(){var o,a;e&&Object.keys(e).length&&t&&(o=e,a=(new TextEncoder).encode(JSON.stringify(o)),crypto.subtle.digest("SHA-256",a).then((function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}))).then((function(e){e!==n&&r.event("client.edgeCacheVariantMismatch",{})}))}),[o])}();var d=(0,F.mrd)(n)||"",h={referrer:a,sk:i,source:c},g=(0,u.useQuery)(B,{variables:{postId:d,postMeteringOptions:h},ssr:!f}).data,b=(g=void 0===g?{}:g).meterPost,P=(0,u.useQuery)(z,{variables:{postId:d,includePostInternalLinks:r,postRecircPaging:o||3,postMeteringOptions:f?void 0:h},skip:!d}),O=P.loading,w=P.error,E=P.data,R=(E=void 0===E?{}:E).postResult,T=P.refetch,N=P.fetchMore,A="Post"===(null==R?void 0:R.__typename)&&!(null==R||null===(t=R.content)||void 0===t||!t.isLockedPreviewOnly),K=(0,k.n)(d,A).content,Q=R&&K?q(q({},R),{},{content:K}):R,G=(0,S.VB)({name:"eds_public_story_to_membership_landing_page",placeholder:!1}),H=s.useMemo((function(){return{name:"post_page",postId:d}}),[d]),J=s.useMemo((function(){return d?(0,l.rK)(Q)?null:G&&Q.creator&&!c&&!Q.isLocked?s.createElement(x.cW,{source:H},s.createElement(U.d0,{user:Q.creator,redirectExperiment:!0,postId:d})):s.createElement(p.k,null,s.createElement(M,{post:Q,matchedPath:n.url,key:d},s.createElement(x.cW,{source:H},s.createElement(W.gc,{meteringInfo:b,post:Q})))):null}),[H,n.url,d,JSON.stringify(Q),JSON.stringify(b)]);return d?O?s.createElement(L.a,null):w?s.createElement($.C,{error:w}):(0,l.rK)(Q)?s.createElement(l.Ij,{postResult:Q}):s.createElement(C.x.Provider,{value:{refetch:T,fetchMore:N,postId:d}},J):s.createElement(m.$,null)}},14259:e=>{e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},38125:(e,t,n)=>{var r=n(14259);e.exports=function(e){return null!=e&&e.length?r(e,0,-1):[]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/Post.3d44e340.chunk.js.map
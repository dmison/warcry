(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,a){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=a(1),i=a(7),s=i.get,h=(i.deepValue,i.isArray),c=function(){function e(t,a){var n=a.location,r=void 0===n?0:n,o=a.distance,i=void 0===o?100:o,h=a.threshold,c=void 0===h?.6:h,l=a.maxPatternLength,d=void 0===l?32:l,u=a.caseSensitive,p=void 0!==u&&u,v=a.tokenSeparator,f=void 0===v?/ +/g:v,A=a.findAllMatches,E=void 0!==A&&A,g=a.minMatchCharLength,S=void 0===g?1:g,T=a.id,I=void 0===T?null:T,R=a.keys,b=void 0===R?[]:R,m=a.shouldSort,O=void 0===m||m,N=a.getFn,y=void 0===N?s:N,L=a.sortFn,C=void 0===L?function(e,t){return e.score-t.score}:L,M=a.tokenize,D=void 0!==M&&M,k=a.matchAllTokens,w=void 0!==k&&k,P=a.includeMatches,G=void 0!==P&&P,x=a.includeScore,_=void 0!==x&&x,F=a.verbose,H=void 0!==F&&F;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:i,threshold:c,maxPatternLength:d,isCaseSensitive:p,tokenSeparator:f,findAllMatches:E,minMatchCharLength:S,id:I,keys:b,includeMatches:G,includeScore:_,shouldSort:O,getFn:y,sortFn:C,verbose:H,tokenize:D,matchAllTokens:w},this.setCollection(t),this._processKeys(b)}var t,a;return t=e,(a=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,a=e.length;t<a;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var r=null,o=null,i=0,s=0,h=e.length;s<h;s+=1){var c=e[s];if(!c.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=c.name;if(this._keyNames.push(l),!c.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var d=c.weight;if(d<0||d>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?d:Math.max(o,d),r=null==r?d:Math.min(r,d),this._keyWeights[l]=d,i+=d}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var a=this._prepareSearchers(e),n=a.tokenSearchers,r=a.fullSearcher,o=this._search(n,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var a=e.split(this.options.tokenSeparator),n=0,r=a.length;n<r;n+=1)t.push(new o(a[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=this.list,n={},r=[];if("string"==typeof a[0]){for(var o=0,i=a.length;o<i;o+=1)this._analyze({key:"",value:a[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,h=a.length;s<h;s+=1)for(var c=a[s],l=0,d=this._keyNames.length;l<d;l+=1){var u=this._keyNames[l];this._analyze({key:u,value:this.options.getFn(c,u),record:c,index:s},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var a=this,n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,s=e.record,c=e.index,l=t.tokenSearchers,d=void 0===l?[]:l,u=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,A=void 0===f?[]:f;!function e(t,r,o,i){if(null!=r)if("string"==typeof r){var s=!1,c=-1,l=0;a._log("\nKey: ".concat(""===n?"--":n));var p=u.search(r);if(a._log('Full text: "'.concat(r,'", score: ').concat(p.score)),a.options.tokenize){for(var f=r.split(a.options.tokenSeparator),E=f.length,g=[],S=0,T=d.length;S<T;S+=1){var I=d[S];a._log('\nPattern: "'.concat(I.pattern,'"'));for(var R=!1,b=0;b<E;b+=1){var m=f[b],O=I.search(m),N={};O.isMatch?(N[m]=O.score,s=!0,R=!0,g.push(O.score)):(N[m]=1,a.options.matchAllTokens||g.push(1)),a._log('Token: "'.concat(m,'", score: ').concat(N[m]))}R&&(l+=1)}c=g[0];for(var y=g.length,L=1;L<y;L+=1)c+=g[L];c/=y,a._log("Token score average:",c)}var C=p.score;c>-1&&(C=(C+c)/2),a._log("Score average:",C);var M=!a.options.tokenize||!a.options.matchAllTokens||l>=d.length;if(a._log("\nCheck Matches: ".concat(M)),(s||p.isMatch)&&M){var D={key:n,arrayIndex:t,value:r,score:C};a.options.includeMatches&&(D.matchedIndices=p.matchedIndices);var k=v[i];k?k.output.push(D):(v[i]={item:o,output:[D]},A.push(v[i]))}}else if(h(r))for(var w=0,P=r.length;w<P;w+=1)e(w,r[w],o,i)}(o,i,s,c)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,a=!!Object.keys(t).length,n=0,r=e.length;n<r;n+=1){for(var o=e[n],i=o.output,s=i.length,h=1,c=0;c<s;c+=1){var l=i[c],d=l.key,u=a?t[d]:1,p=0===l.score&&t&&t[d]>0?Number.EPSILON:l.score;h*=Math.pow(p,u)}o.score=h,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var a=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==a.indexOf(t))return;a.push(t)}return t}),2)),a=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var a=e.output;t.matches=[];for(var n=0,r=a.length;n<r;n+=1){var o=a[n];if(0!==o.matchedIndices.length){var i={indices:o.matchedIndices,value:o.value};o.key&&(i.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(i.arrayIndex=o.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,i=e.length;o<i;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var h={item:s.item},c=0,l=r.length;c<l;c+=1)r[c](s,h);t.push(h)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,a),e}();e.exports=c},function(e,t,a){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=a(2),o=a(3),i=a(6),s=function(){function e(t,a){var n=a.location,r=void 0===n?0:n,o=a.distance,s=void 0===o?100:o,h=a.threshold,c=void 0===h?.6:h,l=a.maxPatternLength,d=void 0===l?32:l,u=a.isCaseSensitive,p=void 0!==u&&u,v=a.tokenSeparator,f=void 0===v?/ +/g:v,A=a.findAllMatches,E=void 0!==A&&A,g=a.minMatchCharLength,S=void 0===g?1:g,T=a.includeMatches,I=void 0!==T&&T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:c,maxPatternLength:d,isCaseSensitive:p,tokenSeparator:f,findAllMatches:E,includeMatches:I,minMatchCharLength:S},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=d&&(this.patternAlphabet=i(this.pattern))}var t,a;return t=e,(a=[{key:"search",value:function(e){var t=this.options,a=t.isCaseSensitive,n=t.includeMatches;if(a||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return n&&(i.matchedIndices=[[0,e.length-1]]),i}var s=this.options,h=s.maxPatternLength,c=s.tokenSeparator;if(this.pattern.length>h)return r(e,this.pattern,c);var l=this.options,d=l.location,u=l.distance,p=l.threshold,v=l.findAllMatches,f=l.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:d,distance:u,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:n})}}])&&n(t.prototype,a),e}();e.exports=s},function(e,t){var a=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(a,"\\$&").replace(n,"|")),o=e.match(r),i=!!o,s=[];if(i)for(var h=0,c=o.length;h<c;h+=1){var l=o[h];s.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,a){var n=a(4),r=a(5);e.exports=function(e,t,a,o){for(var i=o.location,s=void 0===i?0:i,h=o.distance,c=void 0===h?100:h,l=o.threshold,d=void 0===l?.6:l,u=o.findAllMatches,p=void 0!==u&&u,v=o.minMatchCharLength,f=void 0===v?1:v,A=o.includeMatches,E=void 0!==A&&A,g=s,S=e.length,T=d,I=e.indexOf(t,g),R=t.length,b=[],m=0;m<S;m+=1)b[m]=0;if(-1!==I){var O=n(t,{errors:0,currentLocation:I,expectedLocation:g,distance:c});if(T=Math.min(O,T),-1!==(I=e.lastIndexOf(t,g+R))){var N=n(t,{errors:0,currentLocation:I,expectedLocation:g,distance:c});T=Math.min(N,T)}}I=-1;for(var y=[],L=1,C=R+S,M=1<<(R<=31?R-1:30),D=0;D<R;D+=1){for(var k=0,w=C;k<w;)n(t,{errors:D,currentLocation:g+w,expectedLocation:g,distance:c})<=T?k=w:C=w,w=Math.floor((C-k)/2+k);C=w;var P=Math.max(1,g-w+1),G=p?S:Math.min(g+w,S)+R,x=Array(G+2);x[G+1]=(1<<D)-1;for(var _=G;_>=P;_-=1){var F=_-1,H=a[e.charAt(F)];if(H&&(b[F]=1),x[_]=(x[_+1]<<1|1)&H,0!==D&&(x[_]|=(y[_+1]|y[_])<<1|1|y[_+1]),x[_]&M&&(L=n(t,{errors:D,currentLocation:F,expectedLocation:g,distance:c}))<=T){if(T=L,(I=F)<=g)break;P=Math.max(1,2*g-I)}}if(n(t,{errors:D+1,currentLocation:g,expectedLocation:g,distance:c})>T)break;y=x}var B={isMatch:I>=0,score:0===L?.001:L};return E&&(B.matchedIndices=r(b,f)),B}},function(e,t){e.exports=function(e,t){var a=t.errors,n=void 0===a?0:a,r=t.currentLocation,o=void 0===r?0:r,i=t.expectedLocation,s=void 0===i?0:i,h=t.distance,c=void 0===h?100:h,l=n/e.length,d=Math.abs(s-o);return c?l+d/c:d?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],n=-1,r=-1,o=0,i=e.length;o<i;o+=1){var s=e[o];s&&-1===n?n=o:s||-1===n||((r=o-1)-n+1>=t&&a.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&a.push([n,o-1]),a}},function(e,t){e.exports=function(e){for(var t={},a=e.length,n=0;n<a;n+=1)t[e.charAt(n)]=0;for(var r=0;r<a;r+=1)t[e.charAt(r)]|=1<<a-r-1;return t}},function(e,t){var a=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,s){if(s){var h=s.indexOf("."),c=s,l=null;-1!==h&&(c=s.slice(0,h),l=s.slice(h+1));var d=t[c];if(null!=d)if(l||!r(d)&&!o(d))if(a(d))for(var u=0,p=d.length;u<p;u+=1)e(d[u],l);else l&&e(d,l);else i.push(n(d))}else i.push(t)}(e,t),i},isArray:a,isString:r,isNum:o,toString:n}}])},GKVU:function(e,t,a){"use strict";var n=a("I+eb"),r=a("hXpO");n({target:"String",proto:!0,forced:a("rwPt")("anchor")},{anchor:function(e){return r(this,"a","name",e)}})},wQbG:function(e,t,a){"use strict";a.r(t);var n=a("VTBJ"),r=(a("+2oP"),a("rB9j"),a("hByQ"),a("2B1R"),a("QWBl"),a("FZtP"),a("GKVU"),a("/+cc")),o=a.n(r),i=a("CjXH"),s={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new o.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(a){e.push(Object(n.a)(Object(n.a)({},a),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},h=a("KHd+"),c=a("Kw5r"),l=c.a.config.optionMergeStrategies.computed,d={allMarkdownPage:{edges:[{node:{id:"7e8dee9105407e6c054a008c98f43395",path:"/rules/warbandroster/",title:"Warband Roster",headings:[{depth:1,value:"WARBAND ROSTER",anchor:"#warband-roster"},{depth:2,value:"ADDING FIGHTERS",anchor:"#adding-fighters"},{depth:2,value:"CAMPAIGN PROGRESS TRACKER",anchor:"#campaign-progress-tracker"},{depth:2,value:"PREPARING FOR YOUR FIRST CAMPAIGN BATTLE",anchor:"#preparing-for-your-first-campaign-battle"},{depth:3,value:"ARTEFACTS AND COMMAND TRAITS",anchor:"#artefacts-and-command-traits"},{depth:3,value:"DESTINY LEVELS",anchor:"#destiny-levels"},{depth:3,value:"TERRITORIES",anchor:"#territories"},{depth:3,value:"GLORY POINTS",anchor:"#glory-points"}]}},{node:{id:"3073e025cca5075ded16fee5d49ddf6e",path:"/rules/waitaction/",title:"Wait",headings:[{depth:1,value:"WAIT ACTION",anchor:"#wait-action"},{depth:2,value:"Wait Actions and Abilities",anchor:"#wait-actions-and-abilities"}]}},{node:{id:"dff93a5360503b2dbc3548210383c5a7",path:"/rules/trialofchampions/",title:"Trial of Champions",headings:[{depth:1,value:"TRIAL OF CHAMPIONS",anchor:"#trial-of-champions"},{depth:2,value:"EMBARKING ON A CAMPAIGN IN CHAMPION MODE",anchor:"#embarking-on-a-campaign-in-champion-mode"},{depth:2,value:"ADDING FIGHTERS IN CHAMPION MODE",anchor:"#adding-fighters-in-champion-mode"},{depth:2,value:"EXPLORING TERRITORY",anchor:"#exploring-territory"},{depth:3,value:"EXPLORATION TABLE",anchor:"#exploration-table"},{depth:4,value:"NOTHING OF NOTE",anchor:"#nothing-of-note"},{depth:4,value:"OLD RUINS",anchor:"#old-ruins"},{depth:4,value:"CRUMBLING CATACOMBS",anchor:"#crumbling-catacombs"},{depth:3,value:"RUINED TEMPLE",anchor:"#ruined-temple"},{depth:3,value:"DESECRATED TOMB",anchor:"#desecrated-tomb"},{depth:3,value:"CHAOTIC NEXUS",anchor:"#chaotic-nexus"},{depth:3,value:"HIDDEN STORMVAULT",anchor:"#hidden-stormvault"},{depth:2,value:"CRITICAL INJURIES",anchor:"#critical-injuries"},{depth:3,value:"INJURIES",anchor:"#injuries"}]}},{node:{id:"7c60ee3c159e1279d64c167854714a1b",path:"/rules/thralls/",title:"Thralls",headings:[{depth:1,value:"THRALLS",anchor:"#thralls"}]}},{node:{id:"aea2c871d98f409290755ce0770c1bfc",path:"/rules/terrain/",title:"Terrain",headings:[{depth:1,value:"TERRAIN",anchor:"#terrain"},{depth:2,value:"OBSTACLES",anchor:"#obstacles"},{depth:2,value:"Cover",anchor:"#cover"},{depth:2,value:"PLATFORMS",anchor:"#platforms"},{depth:3,value:"FALLING OFF TERRAIN",anchor:"#falling-off-terrain"},{depth:2,value:"DEADLY TERRAIN",anchor:"#deadly-terrain"},{depth:2,value:"STAIRS AND LADDERS",anchor:"#stairs-and-ladders"},{depth:2,value:"ARCHWAYS AND DOORS",anchor:"#archways-and-doors"},{depth:3,value:"RESTRICTIONS",anchor:"#restrictions"}]}},{node:{id:"d8ffcd5eb1fb885b3b5e4f5ed3653706",path:"/rules/setup/",title:"Setting up a battle",headings:[{depth:1,value:"SETTING UP A BATTLE",anchor:"#setting-up-a-battle"},{depth:2,value:"THE BATTLEFIELD",anchor:"#the-battlefield"},{depth:2,value:"THE WARBANDS",anchor:"#the-warbands"},{depth:2,value:"THE PRIORITY ROLL",anchor:"#the-priority-roll"},{depth:2,value:"BATTLE GROUPS",anchor:"#battle-groups"},{depth:2,value:"THE BATTLEPLAN",anchor:"#the-battleplan"},{depth:3,value:"1. TERRAIN CARD",anchor:"#1-terrain-card"},{depth:3,value:"2. DEPLOYMENT CARD",anchor:"#2-deployment-card"},{depth:4,value:"Reserve Battle Groups",anchor:"#reserve-battle-groups"},{depth:3,value:"3. VICTORY CARD",anchor:"#3-victory-card"},{depth:4,value:"Objectives and Treasure",anchor:"#objectives-and-treasure"},{depth:4,value:"TIED GAMES",anchor:"#tied-games"},{depth:3,value:"4. TWIST CARD",anchor:"#4-twist-card"},{depth:2,value:"THE BATTLE BEGINS",anchor:"#the-battle-begins"}]}},{node:{id:"5b428677a1a623c2b40e21f0e67fbcf8",path:"/rules/moveaction/",title:"Move",headings:[{depth:1,value:"MOVE ACTION",anchor:"#move-action"},{depth:2,value:"NORMAL MOVES",anchor:"#normal-moves"},{depth:2,value:"JUMPING",anchor:"#jumping"},{depth:2,value:"FLYING",anchor:"#flying"},{depth:2,value:"CLIMBING",anchor:"#climbing"},{depth:2,value:"Falling",anchor:"#falling"},{depth:2,value:"MOVE ACTIONS WITH MONSTERS",anchor:"#move-actions-with-monsters"},{depth:2,value:"Impact Damage",anchor:"#impact-damage"},{depth:2,value:"Moving Over Low Terrain",anchor:"#moving-over-low-terrain"},{depth:2,value:"Disallowed Moves",anchor:"#disallowed-moves"}]}},{node:{id:"d1e28a950f3f5d7dd60569e40561d2d3",path:"/rules/lesserartefacts/",title:"Lesser Artefacts",headings:[{depth:1,value:"LESSER ARTEFACTS",anchor:"#lesser-artefacts"},{depth:2,value:"HEALING POTION",anchor:"#healing-potion"},{depth:2,value:"SWIFTWIND DUST",anchor:"#swiftwind-dust"},{depth:2,value:"SILKSTRIDER WEBBING",anchor:"#silkstrider-webbing"},{depth:2,value:"SKIN OF FLAME-ALE",anchor:"#skin-of-flame-ale"},{depth:2,value:"JAR OF CHAMONIC GLOWFLIES",anchor:"#jar-of-chamonic-glowflies"},{depth:2,value:"CARVOLAX-SCALE ANKLET",anchor:"#carvolax-scale-anklet"},{depth:2,value:"CHRONOMANTIC DIAL",anchor:"#chronomantic-dial"},{depth:2,value:"IRONOAK SEED",anchor:"#ironoak-seed"},{depth:2,value:"GREATER HEALING POTION",anchor:"#greater-healing-potion"},{depth:2,value:"GODBEAST IDOL",anchor:"#godbeast-idol"},{depth:2,value:"VIAL OF JABBERSLYTHE BLOOD",anchor:"#vial-of-jabberslythe-blood"},{depth:2,value:"UR-GOLD SIGIL",anchor:"#ur-gold-sigil"},{depth:2,value:"BLIGHT SERPENT VENOM",anchor:"#blight-serpent-venom"},{depth:2,value:"BAUBLE OF SHADOWS",anchor:"#bauble-of-shadows"},{depth:2,value:"FLASK OF AQUA GHYRANIS",anchor:"#flask-of-aqua-ghyranis"},{depth:2,value:"PENDANT OF BLOODGLASS",anchor:"#pendant-of-bloodglass"},{depth:2,value:"RAVEN-FEATHER NECKLACE",anchor:"#raven-feather-necklace"},{depth:2,value:"RUNE-ETCHED VAMBRACES",anchor:"#rune-etched-vambraces"}]}},{node:{id:"c04868e68e8ec4dd9db13af073ddcc3c",path:"/rules/monsters/",title:"Monsters",headings:[{depth:1,value:"MONSTERS",anchor:"#monsters"},{depth:2,value:"DEPLOYING MONSTERS",anchor:"#deploying-monsters"},{depth:2,value:"ACTIVATING MONSTERS",anchor:"#activating-monsters"},{depth:2,value:"MONSTERS AND TREASURE",anchor:"#monsters-and-treasure"},{depth:2,value:"MONSTERS AND UNIVERSAL ABILITIES",anchor:"#monsters-and-universal-abilities"},{depth:2,value:"MONSTER-HUNTING ABILITIES",anchor:"#monster-hunting-abilities"}]}},{node:{id:"e3562fed8c60c738769c6f60443b3daf",path:"/rules/heroesallies/",title:"Heroes & Allies",headings:[{depth:1,value:"HEROES AND ALLIES",anchor:"#heroes-and-allies"},{depth:2,value:"INCLUDING HEROES AND ALLIES IN YOUR WARBAND",anchor:"#including-heroes-and-allies-in-your-warband"},{depth:3,value:"OPEN AND MATCHED PLAY",anchor:"#open-and-matched-play"},{depth:3,value:"NARRATIVE PLAY",anchor:"#narrative-play"},{depth:2,value:"HEROES AND ALLIES NEVER LEAD",anchor:"#heroes-and-allies-never-lead"}]}},{node:{id:"b95d3bb486a9788eab19db92500d02f7",path:"/rules/",title:"Home",headings:[{depth:1,value:"Warcry Rules",anchor:"#warcry-rules"}]}},{node:{id:"c06aba318b204bec77a26d805b3e53c4",path:"/rules/general/",title:"General Rules",headings:[{depth:1,value:"GENERAL RULES",anchor:"#general-rules"},{depth:2,value:"RE-ROLLS",anchor:"#re-rolls"},{depth:2,value:"ROLL-OFFS",anchor:"#roll-offs"},{depth:2,value:"MEASURING DISTANCES",anchor:"#measuring-distances"},{depth:2,value:"VISIBILITY",anchor:"#visibility"},{depth:2,value:"FRIENDLY AND ENEMY FIGHTERS",anchor:"#friendly-and-enemy-fighters"},{depth:2,value:"RUNEMARKS",anchor:"#runemarks"},{depth:2,value:"LEADERS",anchor:"#leaders"},{depth:2,value:"SEQUENCING",anchor:"#sequencing"},{depth:2,value:"CONTROLLING OBJECTIVES",anchor:"#controlling-objectives"},{depth:2,value:"CARRYING TREASURE",anchor:"#carrying-treasure"}]}},{node:{id:"57fc5e0ff1ac2733f758125efa0bb11e",path:"/rules/fatedquests/",title:"Fated Quests",headings:[{depth:1,value:"FATED QUESTS",anchor:"#fated-quests"},{depth:2,value:"PATHS OPEN TO ANY WHO DARE",anchor:"#paths-open-to-any-who-dare"},{depth:2,value:"FATED QUEST TERRITORY RULES",anchor:"#fated-quest-territory-rules"},{depth:2,value:"HONOUR OR GLORY",anchor:"#honour-or-glory"},{depth:2,value:"EXALTED COMMAND TRAITS",anchor:"#exalted-command-traits"}]}},{node:{id:"ed7dd3f9712c7d0477cca49c832892ea",path:"/rules/disengageaction/",title:"Disengage",headings:[{depth:1,value:"DISENGAGE ACTION",anchor:"#disengage-action"},{depth:2,value:"Disengage Actions vs Move Actions",anchor:"#disengage-actions-vs-move-actions"}]}},{node:{id:"c29f9aa7e36b41c3e125868ab975088b",path:"/rules/chaoticbeasts/",title:"Chaotic Beasts",headings:[{depth:1,value:"CHAOTIC BEASTS",anchor:"#chaotic-beasts"},{depth:2,value:"TERRITORIAL PREDATORS",anchor:"#territorial-predators"},{depth:2,value:"BESTIAL INTELLECTS",anchor:"#bestial-intellects"},{depth:2,value:"CHAOTIC BEASTS AND ABILITIES",anchor:"#chaotic-beasts-and-abilities"}]}},{node:{id:"2bd0d43114ad9159e3b8154e4507b214",path:"/rules/challengebattles/",title:"Challenge Battles",headings:[{depth:1,value:"CHALLENGE BATTLES",anchor:"#challenge-battles"},{depth:1,value:"HOW TO PLAY A CHALLENGE BATTLE",anchor:"#how-to-play-a-challenge-battle"},{depth:2,value:"SET-UP",anchor:"#set-up"},{depth:2,value:"ADVERSARIES",anchor:"#adversaries"},{depth:2,value:"THE PREREQUISITE AND THE STAKE",anchor:"#the-prerequisite-and-the-stake"},{depth:2,value:"SPECIAL RULES",anchor:"#special-rules"},{depth:2,value:"SHATTERED DOMINION OBJECTIVES",anchor:"#shattered-dominion-objectives"},{depth:2,value:"BATTLEPLAN",anchor:"#battleplan"},{depth:2,value:"THE SPOILS",anchor:"#the-spoils"},{depth:2,value:"THE AFTERMATH SEQUENCE",anchor:"#the-aftermath-sequence"},{depth:2,value:"PLAYING AGAIN",anchor:"#playing-again"}]}},{node:{id:"e70532966027537e74b1e9773c526d06",path:"/rules/campaigns/",title:"About Campaigns",headings:[{depth:1,value:"CAMPAIGNS",anchor:"#campaigns"},{depth:2,value:"EMBARKING UPON A CAMPAIGN",anchor:"#embarking-upon-a-campaign"}]}},{node:{id:"dbe312665252c80d19a2268ab8f5e72a",path:"/rules/campaignquests/",title:"Campaign Quests",headings:[{depth:1,value:"CAMPAIGN QUESTS",anchor:"#campaign-quests"},{depth:2,value:"TERRITORY RULES",anchor:"#territory-rules"},{depth:2,value:"ARTEFACTS OF POWER & COMMAND TRAITS TABLES",anchor:"#artefacts-of-power--command-traits-tables"}]}},{node:{id:"463ab27023eadb198f17562097c7a3b1",path:"/rules/campaignbattles/",title:"Campaign Battles",headings:[{depth:1,value:"PLAYING A CAMPAIGN BATTLE",anchor:"#playing-a-campaign-battle"},{depth:2,value:"CONVERGENCES",anchor:"#convergences"},{depth:3,value:"DECISIVE BATTLES",anchor:"#decisive-battles"},{depth:3,value:"SPOILS OF WAR",anchor:"#spoils-of-war"},{depth:3,value:"THE NARRATIVE OF CONVERGENCES",anchor:"#the-narrative-of-convergences"}]}},{node:{id:"ca16cece87c035ad48c4dcc4c63a1050",path:"/rules/battleround/",title:"The Battle Round",headings:[{depth:1,value:"THE BATTLE ROUND",anchor:"#the-battle-round"},{depth:2,value:"HERO PHASE",anchor:"#hero-phase"},{depth:3,value:"WILD DICE",anchor:"#wild-dice"},{depth:3,value:"SEIZING THE INITIATIVE",anchor:"#seizing-the-initiative"},{depth:2,value:"RESERVE PHASE",anchor:"#reserve-phase"},{depth:2,value:"COMBAT PHASE",anchor:"#combat-phase"},{depth:3,value:"ACTIONS",anchor:"#actions"}]}},{node:{id:"125fb1a3a7e2742cf9054c43f1edafba",path:"/rules/attackactions/",title:"Attack",headings:[{depth:1,value:"ATTACK ACTION",anchor:"#attack-action"},{depth:2,value:"PICK A WEAPON AND TARGET",anchor:"#pick-a-weapon-and-target"},{depth:3,value:"RANGE",anchor:"#range"},{depth:2,value:"ROLL TO HIT",anchor:"#roll-to-hit"},{depth:2,value:"ALLOCATE DAMAGE",anchor:"#allocate-damage"},{depth:2,value:"REMOVE TAKEN DOWN FIGHTERS",anchor:"#remove-taken-down-fighters"}]}},{node:{id:"ad92656f9fc66a6998c7d67ea470ecf4",path:"/rules/aftermath/",title:"Aftermath Sequence",headings:[{depth:2,value:"AFTERMATH SEQUENCE",anchor:"#aftermath-sequence"},{depth:3,value:"1. EARN AND SPEND GLORY POINTS",anchor:"#1-earn-and-spend-glory-points"},{depth:4,value:"DOMINATING TERRITORY",anchor:"#dominating-territory"},{depth:4,value:"REINFORCEMENTS",anchor:"#reinforcements"},{depth:4,value:"ADDITIONAL SEARCH ROLL",anchor:"#additional-search-roll"},{depth:3,value:"2. MAKE INJURY ROLLS",anchor:"#2-make-injury-rolls"},{depth:4,value:"DESTINED FOR GREATNESS",anchor:"#destined-for-greatness"},{depth:4,value:"LOST FAVOUR",anchor:"#lost-favour"},{depth:4,value:"FULL RECOVERY",anchor:"#full-recovery"},{depth:3,value:"3. ROLL FOR DESTINY LEVELS",anchor:"#3-roll-for-destiny-levels"},{depth:4,value:"FAVOUR OF THE GODS",anchor:"#favour-of-the-gods"},{depth:3,value:"4. ADD AND REMOVE FIGHTERS",anchor:"#4-add-and-remove-fighters"},{depth:3,value:"5. SEARCH FOR LESSER ARTEFACTS",anchor:"#5-search-for-lesser-artefacts"},{depth:4,value:"BEARING LESSER ARTEFACTS",anchor:"#bearing-lesser-artefacts"},{depth:4,value:"USING LESSER ARTEFACTS",anchor:"#using-lesser-artefacts"},{depth:3,value:"6. ADVANCE ON THE CAMPAIGN PROGRESS TRACKER",anchor:"#6-advance-on-the-campaign-progress-tracker"},{depth:3,value:"7. EARN ARTEFACTS OF POWER AND COMMAND TRAITS",anchor:"#7-earn-artefacts-of-power-and-command-traits"},{depth:4,value:"ARTEFACTS OF POWER",anchor:"#artefacts-of-power"},{depth:4,value:"COMMAND TRAITS",anchor:"#command-traits"},{depth:4,value:"FAVOURED WARRIORS",anchor:"#favoured-warriors"},{depth:2,value:"COMPLETING A CAMPAIGN QUEST",anchor:"#completing-a-campaign-quest"},{depth:3,value:"CHOOSING A NEW CAMPAIGN QUEST",anchor:"#choosing-a-new-campaign-quest"}]}},{node:{id:"98ab59dbe809cdced88a0f9121bd398a",path:"/rules/abilities/",title:"Abilities",headings:[{depth:1,value:"ABILITIES",anchor:"#abilities"},{depth:2,value:"BONUS ACTIONS",anchor:"#bonus-actions"},{depth:2,value:"RUNEMARKS",anchor:"#runemarks"},{depth:2,value:"DESPERATE LAST STAND",anchor:"#desperate-last-stand"},{depth:2,value:"UNIVERSAL ABILITIES",anchor:"#universal-abilities"}]}}]}},u=function(e){var t=e.options;t.__staticData?t.__staticData.data=d:(t.__staticData=c.a.observable({data:d}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(h.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go.apply(null,arguments)}]}},[a("label",{staticClass:"relative block"},[a("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),a("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[a("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),a("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?a("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[a("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?a("li",{staticClass:"px-2"},[e._v("\n        No results for "),a("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,n){return a("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":n+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=n},mousedown:e.go}},[a("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===n},attrs:{to:t.path+t.anchor}},[t.value===t.title?a("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):a("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),a("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),a("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports}}]);
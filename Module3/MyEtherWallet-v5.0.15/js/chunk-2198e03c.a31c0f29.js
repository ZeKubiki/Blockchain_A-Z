(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2198e03c"],{"0003":function(t,e,a){"use strict";a.d(e,"e",function(){return r}),a.d(e,"d",function(){return c}),a.d(e,"c",function(){return o}),a.d(e,"f",function(){return u}),a.d(e,"h",function(){return d}),a.d(e,"g",function(){return p}),a.d(e,"a",function(){return v}),a.d(e,"b",function(){return h});a("6b54");var i=a("901e"),n=a.n(i),s=function(t){return new n.a(t)},l=function(t,e,a){return s(t).times(s(e)).div(s(a))};function r(t){return n.a.isBigNumber(t)||(t=new n.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n.a.isBigNumber(t)||(t=new n.a(t)),!isFinite(t)||isNaN(t)?"--":a?t.toFixed(e,n.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=c(r(t),e,a);return isFinite(i)&&new n.a(i).gt(0)?i:"--"}function u(t,e,a,i){return l(s(t),s(e),s(a)).minus(s(i))}function d(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return s(t).minus(l(s(e).plus(.001),s(a),s(i))).minus(s(n).times(1))}function p(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return s(t).minus(l(s(e),s(a),s(i))).minus(s(n).times(1))}function v(t,e,a){return l(s(a),t,e)}function h(t,e,a,i){for(var n=parseInt(a),r=n;r>0;r--){var c=l(r,t,e).lte(s(i));if(c)return r}for(var o=100;o>0;o--){var u=l(o/100,t,e).lte(s(i));if(u)return o/100}return 0}},"03c4":function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMaker.cdpPortal")))]),a("p",{staticClass:"cdp-id"},[t._v("\n        "+t._s(t.$t("dappsMaker.positionLabel",{value:t.cdpIdDisplay}))+"\n      ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice"))+" (ETH/USD)")]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v("\n            USD\n          ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.currentPrice"))+"(ETH/USD)")]),a("div",[t._v(t._s(t.ethPriceDisplay)+" "),a("span",[t._v("USD")])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.stabilityFee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.ethCollateral")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.deposited")))]),a("div",[t._v("\n                "+t._s(t.ethCollateral)+"\n                "),a("span",[t._v("ETH")])]),a("div",[t._v("\n                "+t._s(t.pethCollateral)+"\n                "),a("span",[t._v("PETH")]),t._v(" /\n                "+t._s(t.usdCollateral)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showDeposit}},[t._v("\n                "+t._s(t.$t("dappsMaker.deposit"))+" >\n              ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.maxWithDraw")))]),a("div",[t._v("\n                "+t._s(t.maxEthDrawDisplay)+"\n                "),a("span",[t._v("ETH")])]),a("div",[t._v("\n                "+t._s(t.maxPethDrawDisplay)+"\n                "),a("span",[t._v("PETH")]),t._v(" /\n                "+t._s(t.maxUsdDrawDisplay)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showWithdraw}},[t._v("\n                "+t._s(t.$t("dappsMaker.withdraw"))+" >\n              ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.daiPosition")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.generated")))]),a("div",[t._v(t._s(t.debtValue)+" "),a("span",[t._v("DAI")])]),a("div",[t._v("\n                "+t._s(t.debtValueDisplay)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showPayback}},[t._v("\n                "+t._s(t.$t("dappsMaker.payBack"))+" >\n              ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.maxAvailable")))]),a("div",[t._v("\n                "+t._s(t.maxDai)+"\n                "),a("span",[t._v("DAI")])]),a("div",[t._v("\n                "+t._s(t.maxUsd)+"\n                "),a("span",[t._v("USD")])]),a("button",{on:{click:t.showGenerate}},[t._v("\n                "+t._s(t.$t("dappsMaker.generate"))+" >\n              ")])])])])])])]),a("help-link")],1)},s=[],l=(a("96cf"),a("3b8d")),r=a("bd86"),c=(a("ac6a"),a("cebc")),o=(a("c5f6"),a("2f62")),u=a("55c1"),d=a("539d"),p=a("8e13"),v=a("c8e5"),h=a("0003"),f=a("901e"),b=a.n(f),_=function(t){return new b.a(t)},m={components:{"interface-container-title":u["a"],"interface-bottom-text":d["a"],blockie:v["a"],"help-link":p["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}},ethPrice:{type:b.a,default:_(0)},pethPrice:{type:b.a,default:_(0)},liquidationPenalty:{type:b.a,default:_(0)},stabilityFee:{type:b.a,default:_(0)},liquidationRatio:{type:b.a,default:_(0)},wethToPethRatio:{type:b.a,default:_(0)},pethMin:{type:b.a,default:_(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}}},data:function(){return{activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:_(0),maxWithDraw:_(0),maxWithDrawUSD:_(0),maxPethDraw:_(0),maxEthDraw:_(0)}},computed:Object(c["a"])({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{noProxy:function(){if(this.activeCdp)return this.activeCdp.noProxy},finishMigration:function(){if(this.activeCdp)return this.activeCdp.needToFinishMigrating},collateralRatioColoring:function(){return this.values?this.values.collateralRatio>=2?"green":this.values.collateralRatio>=1.75&&this.values.collateralRatio<2?"orange":"red":""},liquidationPriceDisplay:function(){if(this.values){var t=Object(h["d"])(this.values.liquidationPrice,2);return new b.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.values?Object(h["c"])(this.values.collateralRatio):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.values?Object(h["d"])(Object(h["e"])(this.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.values?Object(h["d"])(Object(h["e"])(this.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.values?Object(h["d"])(Object(h["e"])(this.stabilityFee)):"--"},ethPriceDisplay:function(){return this.values?Object(h["d"])(this.ethPrice,2):"--"},maxPethDrawDisplay:function(){return this.values?Object(h["d"])(this.values.maxPethDraw,5):"--"},zeroDebt:function(){return _(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.values?this.values.maxEthDraw:"--"},maxUsdDrawDisplay:function(){return this.values?Object(h["d"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.values?Object(h["d"])(this.values.ethCollateral,5,!0):"--"},pethCollateral:function(){return this.values?Object(h["d"])(this.values.pethCollateral,5,!0):"--"},usdCollateral:function(){return this.values?Object(h["d"])(this.values.usdCollateral,2):"--"},debtValueDisplay:function(){return this.values?Object(h["d"])(this.values.debtValue,2):"--"},debtValue:function(){return this.values?this.values.debtValue:"--"},maxDai:function(){return this.values?this.values.maxDai:"--"},maxUsd:function(){return this.values?Object(h["d"])(this.values.maxDai,2):"--"}}),watch:(i={},Object(r["a"])(i,"activeCdp.ready",function(){this.isReady()}),Object(r["a"])(i,"openCloseModal",function(t){t&&this.showClose()}),Object(r["a"])(i,"openMoveModal",function(t){t&&this.showMove()}),i),mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.activeCdp={},this.cdpId=this.$route.params.cdpId,this.makerActive&&(this.loaded=!0,this.cdpId&&this.$emit("activeCdpId",this.cdpId));case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:h["e"],displayFixedValue:h["d"],isReady:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},y=m,C=(a("3dc3"),a("2877")),w=Object(C["a"])(y,n,s,!1,null,"7bce70aa",null),D=w.exports;e["default"]=D},"3dc3":function(t,e,a){"use strict";var i=a("b825"),n=a.n(i);n.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v("\n    Having issues?\n    "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank"}},[t._v("Help Center")])]):t._e()])},n=[],s={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},l=s,r=(a("b234"),a("2877")),c=Object(r["a"])(l,i,n,!1,null,"bb016cdc",null),o=c.exports;a.d(e,"a",function(){return o})},b234:function(t,e,a){"use strict";var i=a("c21c"),n=a.n(i);n.a},b825:function(t,e,a){},c21c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2198e03c.a31c0f29.js.map
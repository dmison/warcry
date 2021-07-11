(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Xlw":function(t,e,a){"use strict";a("SKUP")},"8AdL":function(t,e,a){},Bv2Q:function(t,e,a){"use strict";a.r(e);var n=a("KHd+"),i=a("Q7Jd"),r=a("ipbP"),o=a("UQSp"),s=a("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var l={BookQuote:i.a,Runemark:r.a,VueRemarkRoot:o.a},h=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===c(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:a[t]=function(){return l[t]}}))},u=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Attack",description:"",sidebar:"rules",sources:[{book:"Warcry Core Rules",page:"44,46,47"},{book:"ERRATA & DESIGNERS’ COMMENTARIES March 2021",page:"1"}]};var f=function(t){t.options[d]&&(t.options[d]=p),s.a.util.defineReactive(t.options,d,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"attack-action"}},[a("a",{attrs:{href:"#attack-action","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("ATTACK ACTION")]),a("book-quote",[a("p",[t._v("\n Some warriors fight with unrestrained ferocity, hacking at their foes until they are little more than bloody chunks of meat. Others dance through battle with preternatural grace, opening throats and piercing hearts with every strike.\n")]),a("template",{slot:"cite"},[t._v("Warcry Core Book")])],2),a("p",[t._v("To make an attack action with a fighter:")]),a("ol",[a("li",[t._v("Pick a weapon & target")]),a("li",[t._v("Check for cover")]),a("li",[t._v("Roll to hit")]),a("li",[t._v("Allocate damage")]),a("li",[t._v("Falling Check")])]),a("h2",{attrs:{id:"pick-a-weapon-and-target"}},[a("a",{attrs:{href:"#pick-a-weapon-and-target","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("PICK A WEAPON AND TARGET")]),a("ol",[a("li",[t._v("select weapon")]),a("li",[t._v("select enemy fighter as the target"),a("ol",[a("li",[t._v("target must be visible, ")]),a("li",[t._v("in range of selected weapon")])])])]),a("p",[t._v("if any enemy fighters are within 1 inch, ")]),a("ol",[a("li",[t._v("one of those must be the target ")]),a("li",[t._v("the weapon selected cannot have a minimum range")])]),a("h2",{attrs:{id:"check-for-cover"}},[a("a",{attrs:{href:"#check-for-cover","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("CHECK FOR COVER")]),a("p",[t._v("target gets cover if:")]),a("ul",[a("li",[t._v("target is on a platform at least 3 inches higher than the attacker")]),a("li",[t._v("an imaginary line drawn between the closest points on each fighter’s base passes through an obstacle. "),a("ul",[a("li",[t._v("if distance > 1 inch, dont include obstacles within 1/2 inch of attacker")])])])]),a("p",[t._v("target has cover: +1 toughness")]),a("h2",{attrs:{id:"roll-to-hit"}},[a("a",{attrs:{href:"#roll-to-hit","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("ROLL TO HIT")]),a("ul",[a("li",[t._v("roll one dice per attacks characteristic")]),a("li",[t._v("refer to table to tell if attack is miss, hit, or critical hit")])]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[t._v("STRENGTH VS TOUGHNESS")]),a("th",{attrs:{align:"center"}},[t._v("MISS")]),a("th",{attrs:{align:"center"}},[t._v("HIT")]),a("th",{attrs:{align:"center"}},[t._v("CRITICAL HIT")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[t._v("Strength is greater than Toughness")]),a("td",{attrs:{align:"center"}},[t._v("1-2")]),a("td",{attrs:{align:"center"}},[t._v("3-5")]),a("td",{attrs:{align:"center"}},[t._v("6")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("Strength is equal to Toughness")]),a("td",{attrs:{align:"center"}},[t._v("1-3")]),a("td",{attrs:{align:"center"}},[t._v("4-5")]),a("td",{attrs:{align:"center"}},[t._v("6")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("Strength is lower than Toughness")]),a("td",{attrs:{align:"center"}},[t._v("1-4")]),a("td",{attrs:{align:"center"}},[t._v("5-6")]),a("td",{attrs:{align:"center"}},[t._v("6")])])])]),a("h2",{attrs:{id:"allocate-damage"}},[a("a",{attrs:{href:"#allocate-damage","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("ALLOCATE DAMAGE")]),a("ul",[a("li",[t._v("each hit allocates damage equal to first damage number")]),a("li",[t._v("each critical hit allocates damage equal to second number.")])]),a("p",[t._v("once allocated damage equals or exceeds wounds, the fighter is "),a("code",{pre:!0},[t._v("taken down")]),t._v(" & removed from the battlefield.")]),a("p",[t._v("any excess damage to the target is lost")]),a("h2",{attrs:{id:"falling-test"}},[a("a",{attrs:{href:"#falling-test","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("FALLING TEST")]),a("ol",[a("li",[t._v("target was not taken out ")]),a("li",[t._v("critical hits are scored in this attack action")]),a("li",[t._v("target is "),a("ul",[a("li",[t._v("within 1/2 inch of platform edge which is not enclosed by an obsatcle")]),a("li",[t._v("climbing stairs or ladder")])])]),a("li",[t._v("target does not have the "),a("Runemark",{attrs:{mark:"Fly"}}),t._v(" runemark")],1)]),a("p",[t._v("the targets player rolls d6: on a one, the target has fallen over the edge or from its climbing position.")])],1)}),[],!1,null,null,null);"function"==typeof h&&h(v),"function"==typeof f&&f(v);e.default=v.exports},FJJc:function(t,e,a){"use strict";a("8AdL")},Q7Jd:function(t,e,a){"use strict";var n={name:"BookQuote"},i=(a("FJJc"),a("KHd+")),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border-l-4  pl-4 py-2 flex flex-col mb-4 dark:border-gray-800"},[e("div",{staticClass:"content"},[this._t("default")],2),e("div",{staticClass:"self-end cite"},[this._t("cite")],2)])}),[],!1,null,"c1dcd13a",null);e.a=r.exports},SKUP:function(t,e,a){},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},ipbP:function(t,e,a){"use strict";var n={name:"Runemark",props:{mark:{type:String,required:!0}},computed:{runemark:function(){return this.mark.toUpperCase()},icon:function(){return this.iconMap[this.runemark]}},data:function(){return{iconMap:{LEADER:"x",FLY:"'",GARGANTUAN:"",MOUNT:".",BEAST:"s","CHAOTIC BEAST":"j",THRALL:"/"}}}},i=(a("2Xlw"),a("KHd+")),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"font-bold p-runemark "},[e("span",{staticClass:"runemark"},[this._v(this._s(this.runemark))]),this._v(" "),e("span",{staticClass:"mark"},[this._v(this._s(this.icon))])])}),[],!1,null,"2438e7ac",null);e.a=r.exports}}]);
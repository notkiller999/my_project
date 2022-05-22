/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib.js":
/*!***********************!*\
  !*** ./src/js/lib.js ***!
  \***********************/
/***/ (() => {

(() => {
  "use strict";

  const t = function (e) {
    return new t.prototype.init(e);
  };

  t.prototype.init = function (t) {
    return t ? t.tagName ? (this[0] = t, this.length = 1, this) : (Object.assign(this, document.querySelectorAll(t)), this.length = document.querySelectorAll(t).length, this) : this;
  }, t.prototype.init.prototype = t.prototype, window.$ = t;
  const e = t;
  e.prototype.show = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";

    for (let e = 0; e < this.length; e++) this[e].style && (this[e].style.display = t);

    return this;
  }, e.prototype.hide = function () {
    for (let t = 0; t < this.length; t++) this[t].style && (this[t].style.display = "none");

    return this;
  }, e.prototype.toggle = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";

    for (let e = 0; e < this.length; e++) this[e].style && ("none" === this[e].style.display ? this[e].style.display = t : this[e].style.display = "none");

    return this;
  }, e.prototype.addClass = function () {
    for (let t = 0; t < this.length; t++) this[t].classList && this[t].classList.add(...arguments);

    return this;
  }, e.prototype.removeClass = function () {
    for (let t = 0; t < this.length; t++) this[t].classList && this[t].classList.remove(...arguments);

    return this;
  }, e.prototype.toggleClass = function (t) {
    for (let e = 0; e < this.length; e++) this[e].classList && this[e].classList.toggle(t);

    return this;
  }, e.prototype.on = function (t, e) {
    for (let s = 0; s < this.length; s++) {
      if (!t || !e) return this;
      this[s].addEventListener(t, e);
    }

    return this;
  }, e.prototype.off = function (t, e) {
    for (let s = 0; s < this.length; s++) {
      if (!t || !e) return this;
      this[s].removeEventListener(t, e);
    }

    return this;
  }, e.prototype.click = function (t) {
    for (let e = 0; e < this.length; e++) t ? this[e].addEventListener("click", t) : this[e].click();

    return this;
  }, e.prototype.addAttribute = function (t, e) {
    for (let s = 0; s < this.length; s++) this[s].setAttribute(t, e);

    return this;
  }, e.prototype.deleteAttribute = function (t) {
    for (let e = 0; e < this.length; e++) this[e].removeAttribute(t);

    return this;
  }, e.prototype.toggleAttribute = function (t, e) {
    for (let s = 0; s < this.length; s++) this[s].hasAttribute(t) ? this[s].removeAttribute(t) : this[s].setAttribute(t, e);

    return this;
  }, e.prototype.html = function (t) {
    for (let e = 0; e < this.length; e++) {
      if (!t) return this[e].innerHTML;
      this[e].innerHTML = t;
    }

    return this;
  }, e.prototype.eq = function (t) {
    const e = this[t],
          s = Object.keys(this).length;

    for (let t = 0; t < s; t++) delete this[t];

    return this[0] = e, this.length = 1, this;
  }, e.prototype.index = function () {
    return [...this[0].parentNode.children].findIndex(t => t == this[0]);
  }, e.prototype.find = function (t) {
    let e = 0,
        s = 0;
    const i = Object.assign({}, this);

    for (let n = 0; n < i.length; n++) {
      const o = i[n].querySelectorAll(t);

      if (0 != o.length) {
        for (let t = 0; t < o.length; t++) this[s] = o[t], s++;

        e += o.length;
      }
    }

    this.length = e;
    const n = Object.keys(this).length;

    for (; e < n; e++) delete this[e];

    return this;
  }, e.prototype.closest = function (t) {
    let e = 0,
        s = 0;

    for (let s = 0; s < this.length; s++) this[s] = this[s].closest(t), e++;

    const i = Object.keys(this).length;

    for (; e < i; e++) delete this[e];

    for (let t = 0; t < this.length; t++) this[t] || (s++, delete this[t]);

    return this.length = this.length - s, this;
  }, e.prototype.sibbling = function () {
    let t = 0,
        e = 0;
    const s = Object.assign({}, this);

    for (let i = 0; i < s.length; i++) {
      const n = s[i].parentNode.children;

      for (let t = 0; t < n.length; t++) s[i] !== n[t] && (this[e] = n[t], e++);

      t += n.length - 1;
    }

    this.length = t;
    const i = Object.keys(this).length;

    for (; t < i; t++) delete this[t];

    return this;
  }, e.prototype.animateOverTime = function (t, e, s) {
    let i;
    return function n(o) {
      i || (i = o);
      let l = o - i,
          r = Math.min(l / t, 1);
      e(r), l < t ? requestAnimationFrame(n) : "function" == typeof s && s();
    };
  }, e.prototype.chooseAnimation = function (t, e, s, i, n) {
    if ("in" === i) {
      n.style.display = e || "block";

      const i = t => {
        n.style.opacity = t;
      },
            o = this.animateOverTime(t, i, s);

      requestAnimationFrame(o);
    } else {
      const e = t => {
        n.style.opacity = 1 - t, 1 === t && (n.style.display = "none");
      },
            i = this.animateOverTime(t, e, s);

      requestAnimationFrame(i);
    }
  }, e.prototype.fadeIn = function (t, e, s) {
    for (let i = 0; i < this.length; i++) this.chooseAnimation(t, e, s, "in", this[i]);

    return this;
  }, e.prototype.fadeOut = function (t, e) {
    for (let s = 0; s < this.length; s++) this.chooseAnimation(t, "", e, "", this[s]);

    return this;
  }, e.prototype.fadeToggle = function (t, e, s) {
    for (let i = 0; i < this.length; i++) "none" === window.getComputedStyle(this[i]).display ? this.chooseAnimation(t, e, s, "in", this[i]) : this.chooseAnimation(t, "", s, "", this[i]);

    return this;
  }, e.prototype.dropdown = function () {
    for (let t = 0; t < this.length; t++) {
      const s = this[t].getAttribute("id");
      e(this[t]).click(() => {
        e(`[data-toggle-id="${s}"]`).fadeToggle(300);
      });
    }
  }, e(".dropdown-toggle").dropdown(), e.prototype.modal = function (t) {
    const s = function () {
      const t = document.createElement("div");
      t.style.cssText = "\n            width: 50px;\n            heigth: 50px;\n            display: hidden;\n            overflow-y: scroll;\n        ", document.body.appendChild(t);
      const e = t.offsetWidth - t.clientWidth;
      return t.remove(), e;
    }();

    for (let t = 0; t < this.length; t++) {
      const n = this[t].getAttribute("data-target");
      e(this[t]).click(t => {
        t.preventDefault(), document.body.style.overflow = "hidden", document.body.style.marginRight = s + "px", e(n).fadeIn(400);
      }), e(`${n} [data-close]`).click(() => {
        i(n);
      }), e(n).click(t => {
        t.target.classList.contains("modal") && i(n);
      });
    }

    function i(i) {
      const n = document.querySelector(i);
      n.style.paddingLeft = s + "px", setTimeout(() => {
        n.style.paddingLeft = "0px", t && n.remove();
      }, 400), e(i).fadeOut(400), document.body.style.overflow = "", document.body.style.marginRight = "0px";
    }
  }, e(".btn-modal").modal(), e.prototype.createModal = function () {
    let {
      text: t,
      btns: s
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let i = 0; i < this.length; i++) {
      const n = document.createElement("div");
      n.classList.add("modal"), n.setAttribute("id", this[i].getAttribute("data-target").slice(1));
      const o = [];

      for (let t = 0; t < s.settings.length; t++) {
        let e = document.createElement("button");
        e.classList.add("btn", ...s.settings[t][0]), e.textContent = s.settings[t][1], s.settings[t][2] && e.setAttribute("data-close", "true"), s.settings[t][3] && "function" == typeof s.settings[t][3] && e.addEventListener("click", s.settings[t][3]), o.push(e);
      }

      n.innerHTML = `\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="close" data-close>\n                        <span>&times;</span>\n                    </button>\n                    <div class="modal-header">\n                        <div class="modal-title">${t.title}</div>\n                    </div>\n                    <div class="modal-body">${t.body}</div>\n                    <div class="modal-footer">\n                    </div>\n                </div>\n            </div>\n        `, n.querySelector(".modal-footer").append(...o), document.body.appendChild(n), e(this[i]).modal(!0), e(this[i].getAttribute("data-target")).fadeIn(400);
    }
  }, e.prototype.tab = function () {
    let {
      tabHeaderSelector: t = ".tab-panel",
      tabContentSelector: s = ".tab-wrapper",
      tabHederActiveClass: i = "tab-item--active",
      tabContentActiveClass: n = "tab-content--active"
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let o = 0; o < this.length; o++) {
      const l = this[o].querySelector(s).children;
      e(t).click(s => {
        if (s.target && !s.target.classList.contains(t.slice(1))) {
          e(s.target).addClass(i).sibbling().removeClass(i);

          for (let t = 0; t < l.length; t++) t === e(s.target).index() && e(l[e(s.target).index()]).addClass(n).sibbling().removeClass(n);
        }
      });
    }
  }, e(".tab").tab(), e.prototype.accordion = function () {
    let {
      headerClass: t = "accordion-header--active",
      contentClass: s = "accordion-content--active",
      padding: i = 40
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let n = 0; n < this.length; n++) e(this[n]).click(() => {
      e(this[n]).toggleClass(t), e(this[n].nextElementSibling).toggleClass(s), this[n].classList.contains(t) ? this[n].nextElementSibling.style.maxHeight = this[n].nextElementSibling.scrollHeight + i + "px" : this[n].nextElementSibling.style.maxHeight = "0px";
    });

    return this;
  }, e(".accordion .accordion-header").accordion(), e.prototype.slider = function () {
    let {
      sliderInner: t = ".slider-inner",
      sliderItems: s = ".slider-item",
      sliderWrapper: i = ".slider-slides",
      indicators: n = ".slider-indicators > li",
      next: o = '[data-slide="next"]',
      prev: l = '[data-slide="prev"]',
      dotActiveClass: r = "active",
      addDots: a = !1,
      indicate: h = !1,
      btns: d = !1,
      autoSlide: c = 0,
      stopAnimation: p = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let u = 0; u < this.length; u++) {
      if (a) {
        const A = document.createElement("ol"),
              C = this[u].querySelectorAll(s).length;
        A.classList.add("slider-indicators");

        for (let L = 0; L < C; L++) {
          const w = document.createElement("li");
          w.setAttribute("data-slide-to", L), A.appendChild(w);
        }

        this[u].appendChild(A);
      }

      if (d) {
        const E = document.createElement("a"),
              S = document.createElement("span"),
              k = document.createElement("a"),
              q = document.createElement("span");
        E.classList.add("slider-next"), E.setAttribute("href", "#"), E.setAttribute("data-slide", "next"), S.classList.add("slider-next-icon"), S.innerHTML = "&gt;", k.classList.add("slider-prev"), k.setAttribute("href", "#"), k.setAttribute("data-slide", "prev"), q.classList.add("slider-prev-icon"), q.innerHTML = "&lt;", E.append(S), k.append(q), this[u].appendChild(E), this[u].appendChild(k);
      }

      if (c > 0) {
        const T = () => {
          let t = setInterval(b, 1e3 * c);
          p && this[u].addEventListener("mouseover", () => clearInterval(t));
        };

        T(), p && this[u].addEventListener("mouseout", T);
      }

      const f = window.getComputedStyle(this[u].querySelector(t)).width.replace(/\D/g, ""),
            g = this[u].querySelectorAll(s),
            y = this[u].querySelector(i);
      let m = 0;

      function b() {
        y.style.transition = "0.4s", y.style.transform = `translateX(${-2 * f}px)`, m >= g.length - 1 ? m = 0 : m++, setTimeout(() => {
          y.style.transition = "0s", y.append(y.firstElementChild), y.style.transform = `translateX(${-f}px)`;
        }, 400), h && x();
      }

      function v() {
        y.style.transition = "0s", y.style.transform = `translateX(${-2 * f}px)`, y.prepend(y.lastElementChild), 0 == m ? m = g.length - 1 : m--, setTimeout(() => {
          y.style.transition = "0.4s", y.style.transform = `translateX(${-f}px)`;
        }, 0), h && x();
      }

      y.style.width = 100 * g.length + "%", g.forEach(t => {
        t.style.width = f + "px";
      }), y.style.transform = `translateX(${-f}px)`, y.prepend(g[g.length - 1]), e(this[u].querySelector(o)).click(t => {
        t.preventDefault(), b();
      }), e(this[u].querySelector(l)).click(t => {
        t.preventDefault(), v();
      });

      const x = () => {
        const t = this[u].querySelectorAll(n);
        t.forEach(t => {
          t.classList.remove(r);
        }), t[m].classList.add(r);
      };

      h && (x(), this[u].querySelector(n).parentNode.addEventListener("click", t => {
        t.preventDefault();
        const e = t.target.getAttribute("data-slide-to");
        let s = m - e;
        if (s > 0) if (y.style.transition = "", 1 == s) v();else {
          y.style.transform = `translateX(-${+f * s}px)`;

          for (let t = 1; t < s; t++) y.prepend(y.lastElementChild);

          setTimeout(() => {
            y.style.transition = "0.7s all", y.style.transform = `translateX(-${f}px)`, y.prepend(y.lastElementChild);
          }, 0);
        }
        s < 0 && (y.style.transition = "", s *= -1, 1 == s ? b() : (y.style.transition = "0.7s all", y.style.transform = `translateX(-${+f * s}px)`, y.append(y.firstElementChild), setTimeout(() => {
          for (let t = 1; t < s; t++) y.append(y.firstElementChild), y.style.transition = "";

          y.style.transform = `translateX(-${f}px)`;
        }, 700))), m = e, x();
      }));
    }
  }, e.prototype.get = async function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "json",
        s = await fetch(t);
    if (!s.ok) throw new Error(`Could not fetch ${t}, status: ${s.status}`);

    switch (e) {
      case "json":
        return await s.json();

      case "text":
        return await s.text();

      case "blob":
        return await s.blob();
    }
  }, e.prototype.post = async function (t, e) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "text",
        i = await fetch(t, {
      method: "POST",
      body: e
    });

    switch (s) {
      case "json":
        return await i.json();

      case "text":
        return await i.text();

      case "blob":
        return await i.blob();
    }
  };
})();

/***/ }),

/***/ "./src/js/miniSlider.js":
/*!******************************!*\
  !*** ./src/js/miniSlider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const miniSlider = _ref => {
  let {
    sliderInner,
    sliderItems,
    sliderWrapper,
    next,
    prev,
    container
  } = _ref;
  const parent = document.querySelector(container),
        slideInner = parent.querySelector(sliderInner),
        slides = parent.querySelectorAll(sliderItems),
        sliderWrapp = parent.querySelector(sliderWrapper),
        nextBtn = parent.querySelector(next),
        prevBtn = parent.querySelector(prev),
        width = window.getComputedStyle(slideInner).width.replace(/\D/g, '') / 3;
  console.log(width);
  let offset = 0;
  slides.forEach(slide => {
    slide.style.width = width + 'px';
    slide.firstElementChild.style.cssText = `
        width: 100%;
        height: 100%;
        `;
  });
  sliderWrapp.style.width = 100 * slides.length / 3 + '%';
  nextBtn.addEventListener('click', e => {
    e.preventDefault();

    if (offset < (slides.length - 3) * width) {
      if (offset < (slides.length - 4) * width) {
        offset += width * 2;
      } else {
        offset += width;
      }

      sliderWrapp.style.transform = `translateX(-${offset}px)`;
    }

    console.log(offset, (slides.length - 3) * width);
  });
  prevBtn.addEventListener('click', e => {
    e.preventDefault();

    if (offset > 0) {
      if (offset >= width * 2) {
        offset -= width * 2;
      } else {
        offset -= width;
      }

      sliderWrapp.style.transform = `translateX(-${offset}px)`;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (miniSlider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/js/lib.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _miniSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miniSlider */ "./src/js/miniSlider.js");


window.addEventListener('DOMContentLoaded', () => {
  try {
    $('.main-slider').slider({
      sliderInner: '.main-slider-inner',
      sliderItems: '.main-slider-item',
      sliderWrapper: '.main-slider-wrapper',
      addDots: true,
      indicate: true,
      autoSlide: 6,
      stopAnimation: false
    });
  } catch (e) {}

  try {
    const tabItems = document.querySelectorAll('.tab-item'),
          tabContent = document.querySelectorAll('.tab-content'),
          activeTab = document.querySelector('.tab-item--active');
    tabItems.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target != activeTab) {
          tabContent.forEach(tab => {
            if (tab.classList.contains('tab-content--active')) {
              setTimeout(slider, 0);
            }
          });
        }
      }, {
        once: true
      });
    });

    function slider() {
      (0,_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
        container: '.tab-content--active',
        sliderInner: '.product-slider-inner',
        sliderItems: '.product-slider-item',
        sliderWrapper: '.product-slider-wrapper',
        next: '[data-slider="next"]',
        prev: '[data-slider="prev"]'
      });
    }

    slider();
  } catch (e) {}

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      // console.log(card);
      card.querySelector(`.card-item-active`).style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector(`.card-item-active`).style.display = 'none';
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
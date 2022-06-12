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
    const n = Object.assign({}, this);

    for (let i = 0; i < n.length; i++) {
      const o = n[i].querySelectorAll(t);

      if (0 != o.length) {
        for (let t = 0; t < o.length; t++) this[s] = o[t], s++;

        e += o.length;
      }
    }

    this.length = e;
    const i = Object.keys(this).length;

    for (; e < i; e++) delete this[e];

    return this;
  }, e.prototype.closest = function (t) {
    let e = 0,
        s = 0;

    for (let s = 0; s < this.length; s++) this[s] = this[s].closest(t), e++;

    const n = Object.keys(this).length;

    for (; e < n; e++) delete this[e];

    for (let t = 0; t < this.length; t++) this[t] || (s++, delete this[t]);

    return this.length = this.length - s, this;
  }, e.prototype.sibbling = function () {
    let t = 0,
        e = 0;
    const s = Object.assign({}, this);

    for (let n = 0; n < s.length; n++) {
      const i = s[n].parentNode.children;

      for (let t = 0; t < i.length; t++) s[n] !== i[t] && (this[e] = i[t], e++);

      t += i.length - 1;
    }

    this.length = t;
    const n = Object.keys(this).length;

    for (; t < n; t++) delete this[t];

    return this;
  }, e.prototype.animateOverTime = function (t, e, s) {
    let n;
    return function i(o) {
      n || (n = o);
      let l = o - n,
          r = Math.min(l / t, 1);
      e(r), l < t ? requestAnimationFrame(i) : "function" == typeof s && s();
    };
  }, e.prototype.chooseAnimation = function (t, e, s, n, i) {
    if ("in" === n) {
      i.style.display = e || "block";

      const n = t => {
        i.style.opacity = t;
      },
            o = this.animateOverTime(t, n, s);

      requestAnimationFrame(o);
    } else {
      const e = t => {
        i.style.opacity = 1 - t, 1 === t && (i.style.display = "none");
      },
            n = this.animateOverTime(t, e, s);

      requestAnimationFrame(n);
    }
  }, e.prototype.fadeIn = function (t, e, s) {
    for (let n = 0; n < this.length; n++) this.chooseAnimation(t, e, s, "in", this[n]);

    return this;
  }, e.prototype.fadeOut = function (t, e) {
    for (let s = 0; s < this.length; s++) this.chooseAnimation(t, "", e, "", this[s]);

    return this;
  }, e.prototype.fadeToggle = function (t, e, s) {
    for (let n = 0; n < this.length; n++) "none" === window.getComputedStyle(this[n]).display ? this.chooseAnimation(t, e, s, "in", this[n]) : this.chooseAnimation(t, "", s, "", this[n]);

    return this;
  }, e.prototype.dropdown = function () {
    for (let t = 0; t < this.length; t++) {
      const s = this[t].getAttribute("id");
      e(this[t]).on("mouseover", () => {
        e(`[data-toggle-id="${s}"]`).fadeIn(300);
      }), e(this[t].parentNode).on("mouseleave", () => {
        e(`[data-toggle-id="${s}"]`).fadeOut(300);
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
      const i = this[t].getAttribute("data-target");
      e(this[t]).click(t => {
        t.preventDefault(), document.body.style.overflow = "hidden", document.body.style.marginRight = s + "px", e(i).fadeIn(400);
      }), e(`${i} [data-close]`).click(() => {
        n(i);
      }), e(i).click(t => {
        t.target.classList.contains("modal") && n(i);
      });
    }

    function n(n) {
      const i = document.querySelector(n);
      i.style.paddingLeft = s + "px", setTimeout(() => {
        i.style.paddingLeft = "0px", t && i.remove();
      }, 400), e(n).fadeOut(400), document.body.style.overflow = "", document.body.style.marginRight = "0px";
    }
  }, e(".btn-modal").modal(), e.prototype.createModal = function () {
    let {
      text: t,
      btns: s
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let n = 0; n < this.length; n++) {
      const i = document.createElement("div");
      i.classList.add("modal"), i.setAttribute("id", this[n].getAttribute("data-target").slice(1));
      const o = [];

      for (let t = 0; t < s.settings.length; t++) {
        let e = document.createElement("button");
        e.classList.add("btn", ...s.settings[t][0]), e.textContent = s.settings[t][1], s.settings[t][2] && e.setAttribute("data-close", "true"), s.settings[t][3] && "function" == typeof s.settings[t][3] && e.addEventListener("click", s.settings[t][3]), o.push(e);
      }

      i.innerHTML = `\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="close" data-close>\n                        <span>&times;</span>\n                    </button>\n                    <div class="modal-header">\n                        <div class="modal-title">${t.title}</div>\n                    </div>\n                    <div class="modal-body">${t.body}</div>\n                    <div class="modal-footer">\n                    </div>\n                </div>\n            </div>\n        `, i.querySelector(".modal-footer").append(...o), document.body.appendChild(i), e(this[n]).modal(!0), e(this[n].getAttribute("data-target")).fadeIn(400);
    }
  }, e.prototype.tab = function () {
    let {
      tabHeaderSelector: t = ".tab-panel",
      tabContentSelector: s = ".tab-wrapper",
      tabHederActiveClass: n = "tab-item--active",
      tabContentActiveClass: i = "tab-content--active"
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let o = 0; o < this.length; o++) {
      const l = this[o].querySelector(s).children;
      e(this[o].querySelector(t)).click(s => {
        if (s.target && !s.target.classList.contains(t.slice(1))) {
          e(s.target).addClass(n).sibbling().removeClass(n);

          for (let t = 0; t < l.length; t++) t === e(s.target).index() && e(l[e(s.target).index()]).addClass(i).sibbling().removeClass(i);
        }
      });
    }
  }, e(".tab").tab(), e.prototype.accordion = function () {
    let {
      headerClass: t = "accordion-header--active",
      contentClass: s = "accordion-content--active",
      padding: n = 40
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

    for (let i = 0; i < this.length; i++) e(this[i]).click(() => {
      e(this[i]).toggleClass(t), e(this[i].nextElementSibling).toggleClass(s), this[i].classList.contains(t) ? this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + n + "px" : this[i].nextElementSibling.style.maxHeight = "0px";
    });

    return this;
  }, e(".accordion .accordion-header").accordion(), e.prototype.slider = function () {
    let {
      sliderInner: t = ".slider-inner",
      sliderItems: s = ".slider-item",
      sliderWrapper: n = ".slider-slides",
      indicators: i = ".slider-indicators > li",
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
              q = document.createElement("a"),
              k = document.createElement("span");
        E.classList.add("slider-next"), E.setAttribute("href", "#"), E.setAttribute("data-slide", "next"), S.classList.add("slider-next-icon"), S.innerHTML = "&gt;", q.classList.add("slider-prev"), q.setAttribute("href", "#"), q.setAttribute("data-slide", "prev"), k.classList.add("slider-prev-icon"), k.innerHTML = "&lt;", E.append(S), q.append(k), this[u].appendChild(E), this[u].appendChild(q);
      }

      if (c > 0) {
        const $ = () => {
          let t = setInterval(b, 1e3 * c);
          p && this[u].addEventListener("mouseover", () => clearInterval(t));
        };

        $(), p && this[u].addEventListener("mouseout", $);
      }

      const f = window.getComputedStyle(this[u].querySelector(t)).width.replace(/\D/g, ""),
            g = this[u].querySelectorAll(s),
            y = this[u].querySelector(n);
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
        const t = this[u].querySelectorAll(i);
        t.forEach(t => {
          t.classList.remove(r);
        }), t[m].classList.add(r);
      };

      h && (x(), this[u].querySelector(i).parentNode.addEventListener("click", t => {
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
        n = await fetch(t, {
      method: "POST",
      body: e
    });

    switch (s) {
      case "json":
        return await n.json();

      case "text":
        return await n.text();

      case "blob":
        return await n.blob();
    }
  };
})();

/***/ }),

/***/ "./src/js/modules/cards/activateCards.js":
/*!***********************************************!*\
  !*** ./src/js/modules/cards/activateCards.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _cardActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardActions */ "./src/js/modules/cards/cardActions.js");



const activateCards = (wrapper, basketState) => {
  try {
    const parent = document.querySelector(wrapper);
    parent.addEventListener('mouseover', e => {
      const target = e.target;
      let targetCard = $(target.closest('.card'))[0];

      if ($(target).closest('.card') && target != parent) {
        if ($(targetCard).find(`.card-item-active`).length != 0 && targetCard != undefined) {
          targetCard.querySelector(`.card-item-active`).style.display = 'block';
          targetCard.addEventListener('mouseleave', () => {
            try {
              targetCard.querySelector(`.card-item-active`).style.display = 'none';
            } catch (e) {}
          });
        } else {
          const cardActive = document.createElement('div');
          cardActive.classList.add('card-item-active');
          cardActive.innerHTML = `
                    <div class="item-color">
                        <div class="item-color-title">Цвет</div>
                        <div class="item-color-panel"></div>
                    </div>
                    <div class="item-size">
                        <div class="item-size-title">Размер</div>
                        <div class="item-size-panel"></div>
                    </div>
                    <div data-target="#buy_modal" class="btn btn-dark item-btn">Купить</div>
                    <div data-target="#buy_modal" class="btn btn-dark item-btn-basket">Купить</div>
                    <div class="item-favorite">
                        <div class="item-favorite-ico">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                            </svg>
                            <svg style="display: none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                            </svg>
                        </div>
                        <div class="item-favorite-text">В желания</div>
                    </div>
                `;
          cardActive.style.display = 'none';
          (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/products').then(res => res.forEach(item => {
            let product;
            let color = null;

            for (let key in item) {
              const id = targetCard.getAttribute('data-article');

              if (item[key][id] != undefined) {
                product = item[key][id];
              }
            }

            let colorState = [];
            let sizeState = [];
            product.forEach(item => {
              let checker = true;
              colorState.forEach(i => {
                if (i === item.color) {
                  checker = false;
                }
              });

              if (item.color != color) {
                color = item.color;
                colorState.push(color);
                const imgBlock = document.createElement('div');
                const img = document.createElement('img');
                imgBlock.classList.add('item-color-img');

                if (item === product[0]) {
                  imgBlock.classList.add('item-color-img-active');
                }

                if (item.photo != null) {
                  img.setAttribute('src', item.photo.split(';')[0]);
                } else {
                  product.forEach(i => {
                    if (i.color === color && i.photo != null) {
                      img.setAttribute('src', i.photo.split(';')[0]);
                    }
                  });
                }

                img.setAttribute('alt', item.product_modification_name);
                imgBlock.setAttribute('data-color', color);
                imgBlock.appendChild(img);

                if (checker) {
                  cardActive.querySelector('.item-color-panel').appendChild(imgBlock);
                }
              }

              if (product[0].color === color) {
                sizeState.push(item.size);
              }
            });
            sizeState.sort((a, b) => a - b);
            sizeState.forEach(size => {
              const sizeBlock = document.createElement('div');
              sizeBlock.classList.add('item-size-block');
              sizeBlock.setAttribute('data-size', size);
              sizeBlock.textContent = size;

              if (product[0].size === size) {
                sizeBlock.classList.add('item-size-block-active');
              }

              cardActive.querySelector('.item-size-panel').appendChild(sizeBlock);
            });
          })).finally(() => {
            (0,_cardActions__WEBPACK_IMPORTED_MODULE_1__["default"])(targetCard, basketState);
          });
          targetCard.appendChild(cardActive);
          cardActive.style.display = 'block';
        }
      }
    });
  } catch (e) {}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateCards);

/***/ }),

/***/ "./src/js/modules/cards/cardActions.js":
/*!*********************************************!*\
  !*** ./src/js/modules/cards/cardActions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _modalActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalActions */ "./src/js/modules/modalActions.js");
/* harmony import */ var _changeBasketState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../changeBasketState */ "./src/js/modules/changeBasketState.js");




const cardActions = (card, basketState) => {
  if ($(card).find('.card-item-active').length != 0) {
    const color = card.querySelector('.item-color-panel');
    const size = card.querySelector('.item-size-panel');
    size.addEventListener('click', e => {
      const target = e.target;

      if (target.getAttribute('data-size')) {
        $(target).addClass('item-size-block-active').sibbling().removeClass('item-size-block-active');
        localStorage.setItem(card.getAttribute('data-article'), target.getAttribute('data-size'));
      }
    });
    color.addEventListener('click', e => {
      const target = e.target;

      if (target.getAttribute('data-color')) {
        $(target).addClass('item-color-img-active').sibbling().removeClass('item-color-img-active');
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/products').then(res => {
          let product;
          res.forEach(item => {
            for (let key in item) {
              let id = card.getAttribute('data-article');

              if (item[key][id] != undefined) {
                product = item[key][id];
              }
            }
          });
          return product;
        }).then(product => {
          let sizes = [];
          product.forEach(item => {
            if (item.color === target.getAttribute('data-color')) {
              sizes.push(item.size);

              if (item.photo != null) {
                card.querySelector('.card-img > img').setAttribute('src', item.photo.split(';')[0]);
              }
            }
          });
          size.innerHTML = '';
          sizes.sort((a, b) => a - b);
          sizes.forEach(item => {
            const sizeBlock = document.createElement('div');
            sizeBlock.classList.add('item-size-block');
            sizeBlock.setAttribute('data-size', item);
            sizeBlock.textContent = item;
            size.appendChild(sizeBlock);
          });
          return size;
        }).then(size => {
          const sizeBloks = size.querySelectorAll('.item-size-block');
          let active;
          sizeBloks.forEach(item => {
            if (item.getAttribute('data-size') === localStorage.getItem(card.getAttribute('data-article'))) {
              active = item;
            }
          });

          if (active) {
            active.classList.add('item-size-block-active');
          } else {
            sizeBloks[0].classList.add('item-size-block-active');
          }
        });
      }
    });
  }

  $(card.querySelector('[data-target="#buy_modal"]')).click(e => {
    const name = $(e.target).closest('.card').find('.card-title').html(),
          size = $(e.target).closest('.card').find('.item-size-block-active')[0].getAttribute('data-size'),
          color = $(e.target).closest('.card').find('.item-color-img-active')[0].getAttribute('data-color'),
          price = $(e.target).closest('.card').find('.price').html(),
          img = $(e.target).closest('.card').find('.card-main-img')[0].getAttribute('src');

    if (basketState.length === 0) {
      (0,_modalActions__WEBPACK_IMPORTED_MODULE_1__["default"])(name, size, color, price, img, basketState);
      (0,_changeBasketState__WEBPACK_IMPORTED_MODULE_2__["default"])(name, size, color, price, basketState);
    }

    function checkBasket() {
      let checker = true;
      basketState.forEach(item => {
        if (item.name === name && item.size === size && item.color === color) {
          checker = false;
        }
      });

      if (checker) {
        (0,_modalActions__WEBPACK_IMPORTED_MODULE_1__["default"])(name, size, color, price, img, basketState);
        (0,_changeBasketState__WEBPACK_IMPORTED_MODULE_2__["default"])(name, size, color, price, basketState);
      }
    }

    checkBasket();
  });
  $(card.querySelector('[data-target="#buy_modal"]')).modal();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardActions);

/***/ }),

/***/ "./src/js/modules/cards/createCards.js":
/*!*********************************************!*\
  !*** ./src/js/modules/cards/createCards.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");


const createCards = () => {
  localStorage.clear();

  try {
    const wrapper = document.querySelector('.card-wrapper');
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/products').then(res => {
      res.forEach(item => {
        for (let key in item) {
          const product = item[key][item[key]["id"]];
          let photo = 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg';
          let i = 0;
          let currrency;

          if (product[i].photo === null) {
            while (s <= product.length) {
              i++;

              if (product[i].photo) {
                break;
              }
            }
          }

          if (i < product.length) {
            photo = product[i].photo.split(';')[0];
          }

          const card = document.createElement('div');
          card.setAttribute('data-article', item[key].id);
          card.classList.add('card', 'card-active');

          if (product[0].currency == 'UAH') {
            currrency = 'грн';
          } else {
            currrency = 'дол';
          }

          card.innerHTML = `
                        <a href="product.html">
                            <div class="card-img">
                                <img class="card-main-img" src="${photo}" alt="">
                            </div>
                        </a>
                        <a href="#" class="card-link">
                            <div class="card-title">${product[0].product_name}</div>
                        </a>
                        <div class="card-price d-flex">
                            <div class="price">${product[0].price.split('.')[0]}</div>
                            <div class="currency">${currrency}</div>
                        </div>
                    `;

          try {
            wrapper.appendChild(card);
          } catch (e) {}
        }
      });
    });
  } catch (e) {}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);

/***/ }),

/***/ "./src/js/modules/changeBasketState.js":
/*!*********************************************!*\
  !*** ./src/js/modules/changeBasketState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeBasketState = (name, size, color, price, basketState) => {
  const order = {};
  order.name = name;
  order.size = size;
  order.color = color;
  order.price = price;
  order.count = 1;
  basketState.push(order);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBasketState);

/***/ }),

/***/ "./src/js/modules/miniSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/miniSlider.js ***!
  \**************************************/
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
    container,
    numberOfSlides = 3
  } = _ref;
  const parent = document.querySelector(container),
        slideInner = parent.querySelector(sliderInner),
        slides = parent.querySelectorAll(sliderItems),
        sliderWrapp = parent.querySelector(sliderWrapper),
        nextBtn = parent.querySelector(next),
        prevBtn = parent.querySelector(prev),
        width = window.getComputedStyle(slideInner).width.replace(/\D/g, '') / numberOfSlides;
  console.log(width);
  let offset = 0;
  slides.forEach(slide => {
    slide.style.width = width + 'px';
    slide.firstElementChild.style.cssText = `
        width: 100%;
        height: 100%;
        `;
  });
  sliderWrapp.style.width = 100 * slides.length / numberOfSlides + '%';
  nextBtn.addEventListener('click', e => {
    e.preventDefault();

    if (offset < (slides.length - numberOfSlides) * width) {
      if (offset < (slides.length - (numberOfSlides + 1)) * width) {
        offset += width * 2;
      } else {
        offset += width;
      }

      sliderWrapp.style.transform = `translateX(-${offset}px)`;
    }
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

/***/ }),

/***/ "./src/js/modules/modalActions.js":
/*!****************************************!*\
  !*** ./src/js/modules/modalActions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modalActions = (name, size, color, price, img, basketState) => {
  const modal = document.querySelector('#buy_modal'),
        cartBody = modal.querySelector('.cart-items');
  const cart = document.createElement('tr');
  cart.classList.add('cart-item');
  cart.innerHTML = `
            <td class="cart-item-img">
                <div class="cart-item-image">
                    <a class="cart-item-link" href="product.html">
                        <img src="${img}"
                            alt="">
                    </a>
                </div>
            </td>
            <td class="cart-item-info">
                <a class="cart-item-link" href="product.html">
                    <div class="cart-item-name">${name}</div>
                </a>
                <div class="cart-item-character">
                    <div class="cart-item-size">Размер: ${size}</div>
                    <div class="cart-item-color">Цвет: ${color}</div>
                </div>
                <div class="cart-item-price">${price} грн</div>
            </td>
            <td class="cart-item-count">
                <div class="cart-item-counter">
                    <button class="counter-minus counter-btn btn btn-outline-dark">&ndash;</button>
                    <input type="text" class="counter-input" type="text" value="1" aria-valuemin="1">
                    <button class="counter-plus counter-btn btn btn-outline-dark">+</button>
                </div>
            </td>
            <td class="cart-item-total">
                <div class="cart-item-total-price">${price} грн</div>
            </td>
            <td class="cart-item-delete">
                <div class="cart-item-delete-trigger">&times;</div>
            </td>
        `;
  cartBody.appendChild(cart);
  cart.addEventListener('click', e => {
    const target = e.target,
          input = cart.querySelector('.counter-input'),
          value = +input.value,
          minus = cart.querySelector('.counter-minus'),
          plus = cart.querySelector('.counter-plus'),
          cartPrice = cart.querySelector('.cart-item-total-price');

    if (target === minus && value > 1) {
      input.value = value - 1;
      cartPrice.textContent = `${+input.value * price} грн`;
      calcTotalPrice();
    }

    if (target === plus && value < 100) {
      input.value = value + 1;
      cartPrice.textContent = `${+input.value * price} грн`;
      calcTotalPrice();
    }
  });

  function calcTotalPrice() {
    const cartTotal = modal.querySelectorAll('.cart-item-total-price'),
          total = modal.querySelector('.cart-footer-total-count');
    let totalCounter = 0;
    cartTotal.forEach(item => {
      const price = +item.textContent.replace(/\D/g, '');
      totalCounter += price;
    });
    total.textContent = `${totalCounter} грн`;
  }

  calcTotalPrice();
  const cartDelet = cart.querySelector('.cart-item-delete-trigger');
  cart.addEventListener('mouseover', () => {
    cartDelet.style.display = 'block';
  });
  cart.addEventListener('mouseleave', () => {
    cartDelet.style.display = 'none';
  });
  cartDelet.addEventListener('click', () => {
    cart.remove();
    calcTotalPrice();
    basketState.forEach((item, i) => {
      if (item.name === name && item.size === size && item.color === color) {
        basketState.splice(i, 1);
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalActions);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};

const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status:${res.status}`);
  }

  return await res.json();
};



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
/* harmony import */ var _modules_miniSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/miniSlider */ "./src/js/modules/miniSlider.js");
/* harmony import */ var _modules_cards_createCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards/createCards */ "./src/js/modules/cards/createCards.js");
/* harmony import */ var _modules_cards_activateCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards/activateCards */ "./src/js/modules/cards/activateCards.js");




window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const basketState = [];

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
    const tabItems = document.querySelectorAll('.card-slider-block .tab-item'),
          tabContent = document.querySelectorAll('.card-slider-block .tab-content'),
          activeTab = document.querySelector('.card-slider-block .tab-item--active');
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
      (0,_modules_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
        container: '.tab-content--active',
        sliderInner: '.product-slider-inner',
        sliderItems: '.product-slider-item',
        sliderWrapper: '.product-slider-wrapper',
        next: '[data-slider="next"]',
        prev: '[data-slider="prev"]',
        numberOfSlides: 3
      });
    }

    slider();
  } catch (e) {}

  try {
    (0,_modules_cards_activateCards__WEBPACK_IMPORTED_MODULE_3__["default"])('.card-wrapper', basketState);
  } catch (e) {}

  try {
    (0,_modules_cards_activateCards__WEBPACK_IMPORTED_MODULE_3__["default"])('.product-slider', basketState);
  } catch (e) {}

  try {
    (0,_modules_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
      container: '.more-products-slider',
      sliderInner: '.more-products-slider-inner',
      sliderItems: '.more-products-slider-item',
      sliderWrapper: '.more-products-slider-wrapper',
      next: '.more-products-slider [data-slider="next"]',
      prev: '.more-products-slider [data-slider="prev"]',
      numberOfSlides: 7
    });
  } catch (e) {}

  $('.product-tab').tab({
    tabHeaderSelector: '.product-tab-panel',
    tabContentSelector: '.product-tab-wrapper',
    tabHederActiveClass: 'product-tab-item--active',
    tabContentActiveClass: 'product-tab-content--active'
  });
  (0,_modules_cards_createCards__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
/*!
 * Wavescrollbar v1.0.0 (https://github.com/yonicb/wavescrollbar/)
 * Copyright 2011-2019 The Wavescrollbar Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/wavescrollbar/blob/master/LICENSE)
 */
"use strict";
var d = document,
   w = window,
   de = d.documentElement,
   Wavescrollbar = function () {
      function t(t) {
         var o = this;
         void 0 === t && (t = null), this.cont = d.querySelector("wavescrollbar"), this.progress = d.createElement("wavescrollbar-progress"), this.scrollTop = 0, this.scrollHeight = 0, this.clientHeight = 0, this.windowHeight = 0, this.porcent = 0, this.procentString = "0%", this.version = "1.0.0", this.author = "Yoni Calsin", this.handleScroll = function () {
            var t = o;
            t.scrollTop = de.scrollTop, t.scrollHeight = de.scrollHeight, t.clientHeight = de.clientHeight, t.windowHeight = t.scrollHeight - t.clientHeight, t.porcent = t.scrollTop / t.windowHeight * 100, t.procentString = t.porcent + "%", t.progress.style.width = t.procentString
         }, null !== t && "string" == typeof t && (this.cont = d.querySelector(t)), this.init()
      }
      return t.prototype.initProgress = function () {
         this.progress.id = "wavescrollbar-progress"
      }, t.prototype.initCont = function () {
         this.cont.id = "wavescrollbar", this.cont.appendChild(this.progress), this.initProgress()
      }, t.prototype.init = function () {
         if (!this.cont) throw new Error("\n   ======================================================\n   ======================================================\n   === Wavescrollbar: Reference tag not found!.\n   ------------------------------------------------------\n   === Add the <wavescrollbar> </wavescrollbar> tag.\n   ======================================================\n   ======================================================");
         this.initCont(), w.addEventListener("scroll", this.handleScroll), this.handleScroll(), console.log("%c✔🚀Wavescrollbar", "color: green; font-size: 35px;")
      }, t.prototype.setHeight = function (t) {
         void 0 === t && (t = "5px"), this.cont.style.height = t
      }, t.prototype.setTransition = function (t) {
         void 0 === t && (t = {});
         var o = t.duration,
            e = void 0 === o ? ".2s" : o,
            r = t.delay,
            i = void 0 === r ? "0s" : r,
            n = t.timing,
            s = void 0 === n ? "linear" : n;
         this.progress.style.transition = "all " + e + " " + s + " " + i
      }, t.prototype.setBackground = function (t) {
         void 0 === t && (t = "pink"), this.progress.style.background = t
      }, t.prototype.setGradient = function (t) {
         void 0 === t && (t = {});
         for (var o = t.colors, e = void 0 === o ? ["#11998e", "#38ef7d"] : o, r = t.angle, i = void 0 === r ? "90deg" : r, n = "", s = 0; s < e.length; s++) {
            n += e[s] + (s + 1 >= e.length ? "" : ",")
         }
         this.progress.style.background = "linear-gradient(" + i + ", " + n + ")"
      }, t.prototype.setContainerBackground = function (t) {
         void 0 === t && (t = "#eee"), this.cont.style.background = t
      }, t.prototype.setAnimation = function () {
         this.progress.classList.add("animation")
      }, t
   }();
"undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = Wavescrollbar), exports.Wavescrollbar = Wavescrollbar);
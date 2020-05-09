/*!
 * Wavescrollbar v1.0.0 (https://github.com/yonicb/wavescrollbar/)
 * Copyright 2011-2019 The Wavescrollbar Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/wavescrollbar/blob/master/LICENSE)
 */
interface WavescrollbarI {
   readonly cont: Element | null
   readonly progress: Element
   readonly scrollTop?: number
   readonly scrollHeight?: number
   readonly clientHeight?: number
   readonly windowHeight?: number
   readonly porcent?: number
   readonly procentString?: string
}
interface TransitionProps {
   readonly duration?: string
   readonly delay?: string
   readonly timing?: "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out"
}
interface GradientProps {
   readonly angle?: string
   readonly colors?: Array<string>
}



const d: Document = document
const w: Window = window
const de: HTMLElement = d.documentElement


/**
 * @Class Wavescrollbar
 */
class Wavescrollbar implements WavescrollbarI {
   public cont: any = d.querySelector("wavescrollbar")
   public progress = d.createElement("wavescrollbar-progress")
   public scrollTop = 0
   public scrollHeight = 0
   public clientHeight = 0
   public windowHeight = 0
   public porcent = 0
   public procentString = `0%`

   // Characteristics
   public version: string = "1.0.0"
   public author: string = "Yoni Calsin"


   /**
    * @Contructor
    * @param selector 
    */
   constructor(selector: string | null = null) {
      if (selector !== null && typeof selector == "string") {
         this.cont = d.querySelector(selector)
      }
      this.init()
   }

   /**
    * @function initProgress()
    * @param void
    */
   initProgress() {
      this.progress.id = "wavescrollbar-progress"
   }

   /**
    * @function initCont()
    * @param void
    */
   initCont() {
      this.cont.id = "wavescrollbar"
      this.cont.appendChild(this.progress)
      this.initProgress()
   }

   /**
    * @function handleScroll
    * @param void
    */
   handleScroll = () => {
      const t = this
      t.scrollTop = de.scrollTop
      t.scrollHeight = de.scrollHeight
      t.clientHeight = de.clientHeight
      t.windowHeight = t.scrollHeight - t.clientHeight
      t.porcent = t.scrollTop / t.windowHeight * 100
      t.procentString = `${t.porcent}%`
      t.progress.style.width = t.procentString
   }

   /**
    * @function init()
    * @param void
    */
   init() {
      if (!this.cont) throw new Error(`
   ======================================================
   ======================================================
   === Wavescrollbar: Reference tag not found!.
   ------------------------------------------------------
   === Add the <wavescrollbar> </wavescrollbar> tag.
   ======================================================
   ======================================================`)
      this.initCont()
      w.addEventListener("scroll", this.handleScroll)
      this.handleScroll()
      console.log("%c✔🚀Wavescrollbar", "color: green; font-size: 35px;");
   }

   /**
    * @function setHeight(value)
    * @param value
    */
   setHeight(value: string = "5px") {
      this.cont.style.height = value
   }

   /**
    * @function setTransition(options)
    * @param options 
    */
   setTransition(options: TransitionProps = {}) {
      const { duration = ".2s", delay = "0s", timing = "linear" } = options
      this.progress.style.transition = `all ${duration} ${timing} ${delay}`
   }

   setBackground(color: string = "pink") {
      this.progress.style.background = color
   }

   /**
    * @function setGradient(options)
    * @param options 
    */
   setGradient(options: GradientProps = {}) {
      var colorsDefault = [
         "#11998e",
         "#38ef7d"
      ]
      const { colors = colorsDefault, angle = "90deg" } = options
      var clrs = ""

      for (let i = 0; i < colors.length; i++) {
         var color = colors[i]
         clrs += `${color}${i + 1 >= colors.length ? '' : ','}`
      }
      this.progress.style.background = `linear-gradient(${angle}, ${clrs})`
   }


   /**
    * @function setContainerBackground(colot)
    * @param color
    */
   setContainerBackground(color: string = "#eee") {
      this.cont.style.background = color
   }

   /**
    * @function setAnimation(options)
    * @param options 
    */
   setAnimation() {
      this.progress.classList.add("animation")
   }
}


if (typeof exports !== 'undefined') {
   if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Wavescrollbar;
   }
   exports.Wavescrollbar = Wavescrollbar;
}
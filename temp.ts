/*!
 * Wavescrollbar v1.0.3 (https://github.com/yonicb/wavescrollbar/)
 * Copyright 2011-2019 The Wavescrollbar Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/wavescrollbar/blob/master/LICENSE)
 */

class Wavescrollbar {
   private container: HTMLDivElement;
   private progress: HTMLDivElement;
   public porcent = 0;
   constructor(el: string) {
      const tempContainer = document.querySelector(el);
      if (tempContainer) {
         this.container = tempContainer as HTMLDivElement;
         this.container.id = '__wavescrollbar';
      } else {
         console.error(`${el} element not found ❌ !`);
      }
   }
   private createProgress() {
      this.progress = document.createElement('div') as HTMLDivElement;
      this.progress.id = '__wavescrollbar-progress';
      this.container.appendChild(this.progress);
   }
   public init() {
      if (!this.container) return;
      this.createProgress();
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
   }
   private handleScroll = () => {
      const de = document.documentElement;
      const scrollTop = de.scrollTop;
      const scrollHg = de.scrollHeight;
      const clientHg = de.clientHeight;
      const windowHg = scrollHg - clientHg;
      const porcent = (scrollTop / windowHg) * 100;
      this.progress.style.width = `${porcent}%`;
   };
}

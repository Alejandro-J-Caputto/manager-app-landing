import { Slider } from "../interfaces/slider.interface";


export class SliderShow implements Slider {
  slides!: NodeListOf<HTMLDivElement>
  btnSlideToRight!:HTMLButtonElement
  btnSlideToLeft!: HTMLButtonElement

  

  constructor() {
    this.selectors();
    this.setPositionStart();
    this.configureSlide();
  }

  selectors ():void {
    this.slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
    this.btnSlideToRight = document.querySelector('.btn-slider--right') as HTMLButtonElement;
    this.btnSlideToLeft = document.querySelector('.btn-slider--left') as HTMLButtonElement;
  }

  setPositionStart():void {
    this.slides.forEach((el, i) => {
      el.style.transform = `translateX(${100 * i}%)`
    })
  }
  configureSlide():void {
    let slide: number = 0;
    this.btnSlideToRight.addEventListener('click', () => {
      if(slide === this.slides.length - 1 ){
        slide = 0
      }else {
        slide++;
      }
      this.goToSlide(slide);
    })
    this.btnSlideToLeft.addEventListener('click', () => {
      if(slide === 0) {
        slide = this.slides.length -1;
      } else {
        slide--;
      }
      this.goToSlide(slide);
    })
  }
  
  goToSlide(slide:number):void {
    this.slides.forEach((el, i ) => {
        
      el.style.transform = `translateX(${100 * (i - slide)}%)`
    })
  }

}
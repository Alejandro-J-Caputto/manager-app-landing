// ELEMENTS SELECTION 
import {NavigationElements} from '../interfaces/navigation.interface';

class NavigationDroppable implements NavigationElements {

  navButton!: HTMLDivElement;
  navList!:HTMLDivElement;
  backgroundButton!: HTMLDivElement;
  navIconMenu!: HTMLDivElement; 
  navIconMenuTop!:HTMLDivElement; 
  navIconMenuBot!:HTMLDivElement; 

  constructor() {
    this.selectors();
    this.toggleMenu();
  }

  selectors(): void {
     this.navButton = document.querySelector('.navigation__button') as HTMLDivElement;
     this.navList = document.querySelector('.navigation__nav') as HTMLDivElement;
     this.backgroundButton = document.querySelector('.navigation__background') as HTMLDivElement;
     this.navIconMenu = document.querySelector('.navigation__icon--2') as HTMLDivElement;
     this.navIconMenuTop = document.querySelector('.navigation__icon--1') as HTMLDivElement;
     this.navIconMenuBot = document.querySelector('.navigation__icon--3') as HTMLDivElement;
  }

  toggleMenu(): void {
    this.navButton.addEventListener('click', this.togleMenuHandler.bind(this))
  }
  togleMenuHandler() {
    this.backgroundButton.classList.toggle('bg__shown');
    this.navList.classList.toggle('nav__shown');
    this.navIconMenu.classList.toggle('icon-hide__partial');
    this.navIconMenuTop.classList.toggle('icon-rotate--right');
    this.navIconMenuBot.classList.toggle('icon-rotate--left');
  }

}



const navDroppable = new NavigationDroppable();

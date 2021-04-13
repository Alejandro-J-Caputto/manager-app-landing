// ELEMENTS SELECTION 
import {NavigationElements} from '../interfaces/navigation.interface';

export class NavigationDroppable implements NavigationElements {

  navButton!: HTMLDivElement;
  nav!:HTMLDivElement;
  backgroundButton!: HTMLDivElement;
  navIconMenu!: HTMLDivElement; 
  navIconMenuTop!:HTMLDivElement; 
  navIconMenuBot!:HTMLDivElement; 
  navList!:HTMLUListElement;

  constructor() {
    this.selectors();
    this.toggleMenu();
    this.navigateTo();
    this.hideNav();
  }

  selectors(): void {
     this.navButton = document.querySelector('.navigation__button') as HTMLDivElement;
     this.nav = document.querySelector('.navigation__nav') as HTMLDivElement;
     this.backgroundButton = document.querySelector('.navigation__background') as HTMLDivElement;
     this.navIconMenu = document.querySelector('.navigation__icon--2') as HTMLDivElement;
     this.navIconMenuTop = document.querySelector('.navigation__icon--1') as HTMLDivElement;
     this.navIconMenuBot = document.querySelector('.navigation__icon--3') as HTMLDivElement;
     this.navList = document.querySelector('.navigation__list') as HTMLUListElement
  }
  hideNav(): void {
    // this.nav.classList.toggle('hidden');
  }

  toggleMenu(): void {
    this.navButton.addEventListener('click', this.toggleMenuHandler.bind(this))
    // this.hideNav();
  }
  toggleMenuHandler() {
    this.hideNav();
    this.backgroundButton.classList.toggle('bg__shown');
    this.nav.classList.toggle('nav__shown');
    this.nav.classList.toggle('bringBack');
    this.navIconMenu.classList.toggle('icon-hide__partial');
    this.navIconMenuTop.classList.toggle('icon-rotate--right');
    this.navIconMenuBot.classList.toggle('icon-rotate--left');
  }

  navigateTo(): void {
    this.navList.addEventListener('click', (event: Event) => {
      
      const liItem = event.target as HTMLLIElement
      if(!liItem.classList.contains('navigation__link--app')) {
        event.preventDefault()
        this.toggleMenuHandler()
        const id = liItem.getAttribute('href');
        document.querySelector(id!)?.scrollIntoView({behavior: 'smooth'})
      }
    })
  }

}

export default class Popup{
  constructor(selector){
     this._popup = document.querySelector(selector);
     this._buttonClose = this._popup.querySelector('.popup__close');
  }

  open() {
   this._popup.classList.add('popup_is-active');
   document.addEventListener('keyup', this._handleĞ¡loseByEscape);
     
  }

  close() {
   this._popup.classList.remove('popup_is-active');
   document.removeEventListener('keyup', this._handleĞ¡loseByEscape);     
  }

  _handleĞ¡loseByEscape = (e) => {
   if (e.key === "Escape") {
      this.close();
   }      
}

  setEventListeners() {
   this._buttonClose.addEventListener('click', () => this.close());
   this._popup.addEventListener('click', (e) => {
      if (e.target === this._popup) {
         this.close();
      }
   })      
}  
}
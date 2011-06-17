var ProductView = function(){
    this.showHelpTextElementId = "showHelpText";
    this.helpTextMessage = "To search for products, please...";
    mixer.mix(this, ShowHelpTextMixin);
};

ProductView.prototype.init = function(){
    this._bindShowHelpText(this.showHelpTextElementId, this.helpTextMessage);
};
var ShowHelpTextMixin = function(){
};

ShowHelpTextMixin.prototype._bindShowHelpText = function(elementId, message){
    var element = document.getElementById(elementId);
    element.addEventListener('click',function(){
        alert(message);
    },false);
};
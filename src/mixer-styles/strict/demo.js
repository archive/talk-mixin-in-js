var Target = function(){
};

Target.prototype.someFunction = function(){
};

/* */

var Mixin = function(){
};

Mixin.prototype.someFunction = function(){
};

/* */

mixer.mixStrict(Target, Mixin);

var target = new Target();

console.log(typeof target.someFunction)

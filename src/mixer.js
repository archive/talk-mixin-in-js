var mixer = {

    mix : function(target, mixin){
        this.mixStrict(target, mixin);
    },

    mixStrict: function (target, mixin) {
        this._mix(target, mixin, true);
    },

    mixLoose: function(target, mixin){
        this._mix(target, mixin, false);
    },

    _mix:function(target, mixin, useStrict){
        if (typeof mixin === "undefined" ||
            typeof mixin !== "function" ||
            typeof target === "undefined" ||
            typeof useStrict === "undefined") {

            throw "invalid argument(s)";
        }

        if (typeof target === 'function') {
            target = target.prototype;
        }

        this._copyMembers(target, mixin, useStrict);
    },

    _copyMembers: function(target, mixin, useStrict){
        for (var member in mixin.prototype) {

            if (mixin.prototype.hasOwnProperty(member)) {
                if (target[member]) {
                    if(useStrict){
                        throw "the member " + member + " already exists on the target";
                    }
                }else{
                    target[member] = mixin.prototype[member];
                }
            }

        }
    }
}
var mixer = {

    mix : function(target, mixin){
        this.mixStrict(target, mixin);
    },

    mixStrict: function (target, mixin) {
        this._mix(target, mixin, true, false);
    },

    mixStrictWithContract: function(target, mixin){
        this._mix(target, mixin, true, true);
    },

    mixLoose: function(target, mixin){
        this._mix(target, mixin, false, false);
    },

    _mix:function(target, mixin, useStrict, useContract){
        if (typeof mixin === "undefined" ||
            typeof mixin !== "function" ||
            typeof target === "undefined" ||
            typeof useStrict === "undefined" ||
            typeof useContract === "undefined") {

            throw "invalid argument(s)";
        }

        if (typeof target === 'function') {
            target = target.prototype;
        }

        this._copyMembers(target, mixin, useStrict, useContract);
    },

    _copyMembers: function(target, mixin, useStrict, useContract){
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
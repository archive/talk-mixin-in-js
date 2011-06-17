var mixer = {
    mix: function (target, mixin) {
        if (typeof mixin === "undefined" || typeof mixin !== "function" || typeof target === "undefined") {
            throw "invalid argument(s)";
        }

        if (typeof target === 'function') {
            target = target.prototype;
        }

        this._mix(mixin, target);

        /*if (!mixin.prototype.canMixWith) {
            throw this.errorMessages.missingCanMixWithMethod;
        }
        if (!mixin.prototype.canMixWith(target)) {
            throw this.errorMessages.targetNotValidForThisMixin;
        }*/


    },

    _mix:function(mixin, target){
        for (var member in mixin.prototype) {
            if (mixin.prototype.hasOwnProperty(member) /*&& member !== 'canMixWith'*/) {
                if (target[member]) {
                    throw "the member " + member + " already exists on the target";
                }
                target[member] = mixin.prototype[member];
            }
        }
    }
}
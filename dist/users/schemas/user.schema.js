"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get User () {
        return User;
    },
    get UserSchema () {
        return UserSchema;
    }
});
const _mongoose = require("@nestjs/mongoose");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let User = class User {
};
_ts_decorate([
    (0, _mongoose.Prop)({
        required: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "name", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        required: true,
        unique: [
            true,
            'ایمیل تکراری است'
        ]
    }),
    _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        required: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
User = _ts_decorate([
    (0, _mongoose.Schema)()
], User);
const UserSchema = _mongoose.SchemaFactory.createForClass(User);

//# sourceMappingURL=user.schema.js.map
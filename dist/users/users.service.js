"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersService", {
    enumerable: true,
    get: function() {
        return UsersService;
    }
});
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = require("mongoose");
const _userschema = require("./schemas/user.schema");
const _bcrypt = /*#__PURE__*/ _interop_require_wildcard(require("bcrypt"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UsersService = class UsersService {
    async findAll() {
        return this.userModel.find().exec();
    }
    async create(createUserDto) {
        const salt = await _bcrypt.genSalt();
        const hashPassword = await _bcrypt.hash(createUserDto.password, salt);
        const userWhitHash = {
            ...createUserDto,
            password: hashPassword
        };
        const createdUser = new this.userModel(userWhitHash);
        return createdUser.save();
    }
    async findOne(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user) throw new _common.NotFoundException('کاربر یافت نشد');
        return user;
    }
    async deleteOne(id) {
        const user = await this.userModel.deleteOne({
            id
        }).exec();
        if (!user) throw new _common.NotFoundException('کاربر یافت نشد');
        return user;
    }
    async updateOne(updateUserDto, id) {
        const updatedUser = await this.userModel.updateOne({
            _id: id
        }, updateUserDto).exec();
        return updatedUser;
    }
    async findOneByEmail(email) {
        const user = await this.userModel.findOne({
            email
        }).exec();
        if (!user) throw new _common.NotFoundException('کاربر یافت نشد');
        return user;
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
UsersService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_userschema.User.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], UsersService);

//# sourceMappingURL=users.service.js.map
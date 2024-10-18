"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const homeViewInitial = {
    titleSmall: "Hey, I am Jose Cardona",
    title: "Designer - Dev FullStack",
    description: `Welcome to my portfolio featuring academic projects. 
    Explore
    Web Design: Concepts in Adobe XD.
    Functional Projects: Built with HTML, CSS, and JavaScript.
    Driven by Design Thinking for user-focused solutions.`,
    urlImage: `/images/me.png`,
};
let HomeViewModel = class HomeViewModel {
    getHomeView() {
        return __awaiter(this, void 0, void 0, function* () {
            return homeViewInitial;
        });
    }
    putTitleSmall(titleNew) {
        return __awaiter(this, void 0, void 0, function* () {
            homeViewInitial.titleSmall = titleNew;
            return homeViewInitial;
        });
    }
};
HomeViewModel = __decorate([
    (0, tsyringe_1.injectable)()
], HomeViewModel);
exports.default = HomeViewModel;

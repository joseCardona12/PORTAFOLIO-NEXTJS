"use strict";
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
exports.HomeViewController = void 0;
const tsyringe_1 = require("tsyringe");
const homeViewService_1 = require("../services/homeViewService");
class HomeViewController {
    static getHomeView(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const homeViewService = tsyringe_1.container.resolve(homeViewService_1.HomeViewService);
                const homeView = yield homeViewService.getHomeView();
                res.json({ message: "correct getHomeViewService", homeView }).status(200);
            }
            catch (error) {
                res
                    .json({ message: "Error with the getHomeView", data: error })
                    .status(500);
            }
        });
    }
    static putTitleSmall(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { titleNew } = req.body();
                if (!titleNew) {
                    res
                        .json({ message: "Error. Is required all params", data: "error" })
                        .status(400);
                    return;
                }
                const homeViewService = tsyringe_1.container.resolve(homeViewService_1.HomeViewService);
                const homeView = yield homeViewService.putTitleSmall(titleNew);
                res
                    .json({ message: "Updated titleSmall correctly", homeView })
                    .status(200);
            }
            catch (error) {
                res
                    .json({ message: "Error with the putTitleSmall", data: error })
                    .status(500);
            }
        });
    }
}
exports.HomeViewController = HomeViewController;

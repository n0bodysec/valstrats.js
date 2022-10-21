"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
(async () => {
    try {
        const vdb = new src_1.default();
        const strat = await vdb.strats.get('c87d6ae1-ed36-41bd-bebf-f0d7ec17c9cb');
        console.log(strat);
        vdb.closeAndExit();
    }
    catch (e) {
        console.error(e);
    }
})();

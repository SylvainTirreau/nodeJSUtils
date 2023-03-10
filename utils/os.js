"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkSync = exports.walkAsync = void 0;
const fsp = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const fs_1 = __importDefault(require("fs"));
async function* walkAsync(dir) {
    const rootPath = dir;
    const dirs = [];
    const files = [];
    for await (const dirEntity of await fsp.opendir(dir)) {
        if (dirEntity.isDirectory())
            dirs.push(dirEntity.name);
        else if (dirEntity.isFile())
            files.push(dirEntity.name);
    }
    for (const dirName of dirs) {
        yield* walkAsync(path.join(dir, dirName));
    }
    yield [rootPath, dirs, files];
}
exports.walkAsync = walkAsync;
function* walkSync(dir) {
    const rootPath = dir;
    const dirs = [];
    const files = [];
    for (const dirEntity of fs_1.default.readdirSync(dir, { withFileTypes: true })) {
        if (dirEntity.isDirectory())
            dirs.push(dirEntity.name);
        else if (dirEntity.isFile())
            files.push(dirEntity.name);
    }
    for (const dirName of dirs) {
        yield* walkSync(path.join(dir, dirName));
    }
    yield [rootPath, dirs, files];
}
exports.walkSync = walkSync;
//# sourceMappingURL=os.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cdkCacheDir = exports.cdkHomeDir = void 0;
const os = require("os");
const path = require("path");
function cdkHomeDir() {
    var _a;
    return process.env.CDK_HOME
        ? path.resolve(process.env.CDK_HOME)
        : path.join(((_a = os.userInfo().homedir) !== null && _a !== void 0 ? _a : os.homedir()).trim() || '/', '.cdk');
}
exports.cdkHomeDir = cdkHomeDir;
function cdkCacheDir() {
    return path.join(cdkHomeDir(), 'cache');
}
exports.cdkCacheDir = cdkCacheDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXJlY3Rvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLFNBQWdCLFVBQVU7O0lBQ3hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBQSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxtQ0FBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUpELGdDQUlDO0FBRUQsU0FBZ0IsV0FBVztJQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb3MgZnJvbSAnb3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNka0hvbWVEaXIoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5DREtfSE9NRVxuICAgID8gcGF0aC5yZXNvbHZlKHByb2Nlc3MuZW52LkNES19IT01FKVxuICAgIDogcGF0aC5qb2luKChvcy51c2VySW5mbygpLmhvbWVkaXIgPz8gb3MuaG9tZWRpcigpKS50cmltKCkgfHwgJy8nLCAnLmNkaycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2RrQ2FjaGVEaXIoKSB7XG4gIHJldHVybiBwYXRoLmpvaW4oY2RrSG9tZURpcigpLCAnY2FjaGUnKTtcbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestVersionIfHigher = exports.VersionCheckTTL = exports.versionNumber = exports.DISPLAY_VERSION = void 0;
const child_process_1 = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const semver = require("semver");
const util_1 = require("util");
const logging_1 = require("./logging");
const directories_1 = require("./util/directories");
const ONE_DAY_IN_SECONDS = 1 * 24 * 60 * 60;
const exec = util_1.promisify(child_process_1.exec);
exports.DISPLAY_VERSION = `${versionNumber()}`;
function versionNumber() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('../package.json').version.replace(/\+[0-9a-f]+$/, '');
}
exports.versionNumber = versionNumber;
class VersionCheckTTL {
    constructor(file, ttlSecs) {
        this.file = file || VersionCheckTTL.timestampFilePath();
        try {
            fs.mkdirsSync(path.dirname(this.file));
            fs.accessSync(path.dirname(this.file), fs.constants.W_OK);
        }
        catch (_a) {
            throw new Error(`Directory (${path.dirname(this.file)}) is not writable.`);
        }
        this.ttlSecs = ttlSecs || ONE_DAY_IN_SECONDS;
    }
    static timestampFilePath() {
        // Using the same path from account-cache.ts
        return path.join(directories_1.cdkCacheDir(), 'repo-version-ttl');
    }
    async hasExpired() {
        try {
            const lastCheckTime = (await fs.stat(this.file)).mtimeMs;
            const today = new Date().getTime();
            if ((today - lastCheckTime) / 1000 > this.ttlSecs) {
                // convert ms to sec
                return true;
            }
            return false;
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return true;
            }
            else {
                throw err;
            }
        }
    }
    async update(latestVersion) {
        if (!latestVersion) {
            latestVersion = '';
        }
        await fs.writeFile(this.file, latestVersion);
    }
}
exports.VersionCheckTTL = VersionCheckTTL;
// Export for unit testing only.
// Don't use directly, use displayVersionMessage() instead.
async function latestVersionIfHigher(currentVersion, cacheFile) {
    if (!(await cacheFile.hasExpired())) {
        return null;
    }
    const { stdout, stderr } = await exec('npm view ros-cdk version');
    if (stderr && stderr.trim().length > 0) {
        logging_1.debug(`The 'npm view' command generated an error stream with content [${stderr.trim()}]`);
    }
    const latestVersion = stdout.trim();
    if (!semver.valid(latestVersion)) {
        throw new Error(`npm returned an invalid semver ${latestVersion}`);
    }
    const isNewer = semver.gt(latestVersion, currentVersion);
    await cacheFile.update(latestVersion);
    if (isNewer) {
        return latestVersion;
    }
    else {
        return null;
    }
}
exports.latestVersionIfHigher = latestVersionIfHigher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLCtCQUFpQztBQUNqQyx1Q0FBa0M7QUFDbEMsb0RBQWlEO0FBRWpELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRTVDLE1BQU0sSUFBSSxHQUFHLGdCQUFTLENBQUMsb0JBQUssQ0FBQyxDQUFDO0FBRWpCLFFBQUEsZUFBZSxHQUFHLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQztBQUVwRCxTQUFnQixhQUFhO0lBQzNCLGlFQUFpRTtJQUNqRSxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFIRCxzQ0FHQztBQUVELE1BQWEsZUFBZTtJQVcxQixZQUFZLElBQWEsRUFBRSxPQUFnQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4RCxJQUFJO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRDtRQUFDLFdBQU07WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztJQUMvQyxDQUFDO0lBbkJNLE1BQU0sQ0FBQyxpQkFBaUI7UUFDN0IsNENBQTRDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBa0JNLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDekQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqRCxvQkFBb0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxDQUFDO2FBQ1g7U0FDRjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQXNCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUNELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQS9DRCwwQ0ErQ0M7QUFFRCxnQ0FBZ0M7QUFDaEMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxxQkFBcUIsQ0FDekMsY0FBc0IsRUFDdEIsU0FBMEI7SUFFMUIsSUFBSSxDQUFDLENBQUMsTUFBTSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2xFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDLGVBQUssQ0FBQyxrRUFBa0UsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMzRjtJQUNELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekQsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXRDLElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxhQUFhLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBeEJELHNEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWMgYXMgX2V4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBzZW12ZXIgZnJvbSAnc2VtdmVyJztcclxuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XHJcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi9sb2dnaW5nJztcclxuaW1wb3J0IHsgY2RrQ2FjaGVEaXIgfSBmcm9tICcuL3V0aWwvZGlyZWN0b3JpZXMnO1xyXG5cclxuY29uc3QgT05FX0RBWV9JTl9TRUNPTkRTID0gMSAqIDI0ICogNjAgKiA2MDtcclxuXHJcbmNvbnN0IGV4ZWMgPSBwcm9taXNpZnkoX2V4ZWMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BMQVlfVkVSU0lPTiA9IGAke3ZlcnNpb25OdW1iZXIoKX1gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcnNpb25OdW1iZXIoKTogc3RyaW5nIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xyXG4gIHJldHVybiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLnJlcGxhY2UoL1xcK1swLTlhLWZdKyQvLCAnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJzaW9uQ2hlY2tUVEwge1xyXG4gIHB1YmxpYyBzdGF0aWMgdGltZXN0YW1wRmlsZVBhdGgoKTogc3RyaW5nIHtcclxuICAgIC8vIFVzaW5nIHRoZSBzYW1lIHBhdGggZnJvbSBhY2NvdW50LWNhY2hlLnRzXHJcbiAgICByZXR1cm4gcGF0aC5qb2luKGNka0NhY2hlRGlyKCksICdyZXBvLXZlcnNpb24tdHRsJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGZpbGU6IHN0cmluZztcclxuXHJcbiAgLy8gRmlsZSBtb2RpZnkgdGltZXMgYXJlIGFjY3VyYXRlIG9ubHkgdG8gdGhlIHNlY29uZFxyXG4gIHByaXZhdGUgcmVhZG9ubHkgdHRsU2VjczogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmaWxlPzogc3RyaW5nLCB0dGxTZWNzPzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbGUgPSBmaWxlIHx8IFZlcnNpb25DaGVja1RUTC50aW1lc3RhbXBGaWxlUGF0aCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZnMubWtkaXJzU3luYyhwYXRoLmRpcm5hbWUodGhpcy5maWxlKSk7XHJcbiAgICAgIGZzLmFjY2Vzc1N5bmMocGF0aC5kaXJuYW1lKHRoaXMuZmlsZSksIGZzLmNvbnN0YW50cy5XX09LKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdG9yeSAoJHtwYXRoLmRpcm5hbWUodGhpcy5maWxlKX0pIGlzIG5vdCB3cml0YWJsZS5gKTtcclxuICAgIH1cclxuICAgIHRoaXMudHRsU2VjcyA9IHR0bFNlY3MgfHwgT05FX0RBWV9JTl9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGhhc0V4cGlyZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBsYXN0Q2hlY2tUaW1lID0gKGF3YWl0IGZzLnN0YXQodGhpcy5maWxlKSkubXRpbWVNcztcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmICgodG9kYXkgLSBsYXN0Q2hlY2tUaW1lKSAvIDEwMDAgPiB0aGlzLnR0bFNlY3MpIHtcclxuICAgICAgICAvLyBjb252ZXJ0IG1zIHRvIHNlY1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKGxhdGVzdFZlcnNpb24/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghbGF0ZXN0VmVyc2lvbikge1xyXG4gICAgICBsYXRlc3RWZXJzaW9uID0gJyc7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBmcy53cml0ZUZpbGUodGhpcy5maWxlLCBsYXRlc3RWZXJzaW9uKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBmb3IgdW5pdCB0ZXN0aW5nIG9ubHkuXHJcbi8vIERvbid0IHVzZSBkaXJlY3RseSwgdXNlIGRpc3BsYXlWZXJzaW9uTWVzc2FnZSgpIGluc3RlYWQuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsYXRlc3RWZXJzaW9uSWZIaWdoZXIoXHJcbiAgY3VycmVudFZlcnNpb246IHN0cmluZyxcclxuICBjYWNoZUZpbGU6IFZlcnNpb25DaGVja1RUTCxcclxuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgaWYgKCEoYXdhaXQgY2FjaGVGaWxlLmhhc0V4cGlyZWQoKSkpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYygnbnBtIHZpZXcgcm9zLWNkayB2ZXJzaW9uJyk7XHJcbiAgaWYgKHN0ZGVyciAmJiBzdGRlcnIudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgIGRlYnVnKGBUaGUgJ25wbSB2aWV3JyBjb21tYW5kIGdlbmVyYXRlZCBhbiBlcnJvciBzdHJlYW0gd2l0aCBjb250ZW50IFske3N0ZGVyci50cmltKCl9XWApO1xyXG4gIH1cclxuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gc3Rkb3V0LnRyaW0oKTtcclxuICBpZiAoIXNlbXZlci52YWxpZChsYXRlc3RWZXJzaW9uKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBucG0gcmV0dXJuZWQgYW4gaW52YWxpZCBzZW12ZXIgJHtsYXRlc3RWZXJzaW9ufWApO1xyXG4gIH1cclxuICBjb25zdCBpc05ld2VyID0gc2VtdmVyLmd0KGxhdGVzdFZlcnNpb24sIGN1cnJlbnRWZXJzaW9uKTtcclxuICBhd2FpdCBjYWNoZUZpbGUudXBkYXRlKGxhdGVzdFZlcnNpb24pO1xyXG5cclxuICBpZiAoaXNOZXdlcikge1xyXG4gICAgcmV0dXJuIGxhdGVzdFZlcnNpb247XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=
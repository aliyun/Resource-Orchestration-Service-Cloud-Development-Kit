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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLCtCQUFpQztBQUNqQyx1Q0FBa0M7QUFDbEMsb0RBQWlEO0FBRWpELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRTVDLE1BQU0sSUFBSSxHQUFHLGdCQUFTLENBQUMsb0JBQUssQ0FBQyxDQUFDO0FBRWpCLFFBQUEsZUFBZSxHQUFHLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQztBQUVwRCxTQUFnQixhQUFhO0lBQzNCLGlFQUFpRTtJQUNqRSxPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFIRCxzQ0FHQztBQUVELE1BQWEsZUFBZTtJQVcxQixZQUFZLElBQWEsRUFBRSxPQUFnQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4RCxJQUFJO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRDtRQUFDLFdBQU07WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztJQUMvQyxDQUFDO0lBbkJNLE1BQU0sQ0FBQyxpQkFBaUI7UUFDN0IsNENBQTRDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBa0JNLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDekQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqRCxvQkFBb0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxDQUFDO2FBQ1g7U0FDRjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQXNCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUNELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQS9DRCwwQ0ErQ0M7QUFFRCxnQ0FBZ0M7QUFDaEMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxxQkFBcUIsQ0FDekMsY0FBc0IsRUFDdEIsU0FBMEI7SUFFMUIsSUFBSSxDQUFDLENBQUMsTUFBTSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2xFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDLGVBQUssQ0FBQyxrRUFBa0UsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMzRjtJQUNELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekQsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXRDLElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxhQUFhLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBeEJELHNEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWMgYXMgX2V4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBzZW12ZXIgZnJvbSAnc2VtdmVyJztcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcuL2xvZ2dpbmcnO1xuaW1wb3J0IHsgY2RrQ2FjaGVEaXIgfSBmcm9tICcuL3V0aWwvZGlyZWN0b3JpZXMnO1xuXG5jb25zdCBPTkVfREFZX0lOX1NFQ09ORFMgPSAxICogMjQgKiA2MCAqIDYwO1xuXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcblxuZXhwb3J0IGNvbnN0IERJU1BMQVlfVkVSU0lPTiA9IGAke3ZlcnNpb25OdW1iZXIoKX1gO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyc2lvbk51bWJlcigpOiBzdHJpbmcge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICByZXR1cm4gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbi5yZXBsYWNlKC9cXCtbMC05YS1mXSskLywgJycpO1xufVxuXG5leHBvcnQgY2xhc3MgVmVyc2lvbkNoZWNrVFRMIHtcbiAgcHVibGljIHN0YXRpYyB0aW1lc3RhbXBGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIC8vIFVzaW5nIHRoZSBzYW1lIHBhdGggZnJvbSBhY2NvdW50LWNhY2hlLnRzXG4gICAgcmV0dXJuIHBhdGguam9pbihjZGtDYWNoZURpcigpLCAncmVwby12ZXJzaW9uLXR0bCcpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlOiBzdHJpbmc7XG5cbiAgLy8gRmlsZSBtb2RpZnkgdGltZXMgYXJlIGFjY3VyYXRlIG9ubHkgdG8gdGhlIHNlY29uZFxuICBwcml2YXRlIHJlYWRvbmx5IHR0bFNlY3M6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihmaWxlPzogc3RyaW5nLCB0dGxTZWNzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZSB8fCBWZXJzaW9uQ2hlY2tUVEwudGltZXN0YW1wRmlsZVBhdGgoKTtcbiAgICB0cnkge1xuICAgICAgZnMubWtkaXJzU3luYyhwYXRoLmRpcm5hbWUodGhpcy5maWxlKSk7XG4gICAgICBmcy5hY2Nlc3NTeW5jKHBhdGguZGlybmFtZSh0aGlzLmZpbGUpLCBmcy5jb25zdGFudHMuV19PSyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdG9yeSAoJHtwYXRoLmRpcm5hbWUodGhpcy5maWxlKX0pIGlzIG5vdCB3cml0YWJsZS5gKTtcbiAgICB9XG4gICAgdGhpcy50dGxTZWNzID0gdHRsU2VjcyB8fCBPTkVfREFZX0lOX1NFQ09ORFM7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFzRXhwaXJlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGFzdENoZWNrVGltZSA9IChhd2FpdCBmcy5zdGF0KHRoaXMuZmlsZSkpLm10aW1lTXM7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICBpZiAoKHRvZGF5IC0gbGFzdENoZWNrVGltZSkgLyAxMDAwID4gdGhpcy50dGxTZWNzKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgbXMgdG8gc2VjXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKGxhdGVzdFZlcnNpb24/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWxhdGVzdFZlcnNpb24pIHtcbiAgICAgIGxhdGVzdFZlcnNpb24gPSAnJztcbiAgICB9XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHRoaXMuZmlsZSwgbGF0ZXN0VmVyc2lvbik7XG4gIH1cbn1cblxuLy8gRXhwb3J0IGZvciB1bml0IHRlc3Rpbmcgb25seS5cbi8vIERvbid0IHVzZSBkaXJlY3RseSwgdXNlIGRpc3BsYXlWZXJzaW9uTWVzc2FnZSgpIGluc3RlYWQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGF0ZXN0VmVyc2lvbklmSGlnaGVyKFxuICBjdXJyZW50VmVyc2lvbjogc3RyaW5nLFxuICBjYWNoZUZpbGU6IFZlcnNpb25DaGVja1RUTCxcbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBpZiAoIShhd2FpdCBjYWNoZUZpbGUuaGFzRXhwaXJlZCgpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYygnbnBtIHZpZXcgcm9zLWNkayB2ZXJzaW9uJyk7XG4gIGlmIChzdGRlcnIgJiYgc3RkZXJyLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgZGVidWcoYFRoZSAnbnBtIHZpZXcnIGNvbW1hbmQgZ2VuZXJhdGVkIGFuIGVycm9yIHN0cmVhbSB3aXRoIGNvbnRlbnQgWyR7c3RkZXJyLnRyaW0oKX1dYCk7XG4gIH1cbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHN0ZG91dC50cmltKCk7XG4gIGlmICghc2VtdmVyLnZhbGlkKGxhdGVzdFZlcnNpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBucG0gcmV0dXJuZWQgYW4gaW52YWxpZCBzZW12ZXIgJHtsYXRlc3RWZXJzaW9ufWApO1xuICB9XG4gIGNvbnN0IGlzTmV3ZXIgPSBzZW12ZXIuZ3QobGF0ZXN0VmVyc2lvbiwgY3VycmVudFZlcnNpb24pO1xuICBhd2FpdCBjYWNoZUZpbGUudXBkYXRlKGxhdGVzdFZlcnNpb24pO1xuXG4gIGlmIChpc05ld2VyKSB7XG4gICAgcmV0dXJuIGxhdGVzdFZlcnNpb247XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==
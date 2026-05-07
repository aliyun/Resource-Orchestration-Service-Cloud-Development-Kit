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
const exec = (0, util_1.promisify)(child_process_1.exec);
exports.DISPLAY_VERSION = `${versionNumber()}`;
function versionNumber() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('../package.json').version.replace(/\+[0-9a-f]+$/, '');
}
exports.versionNumber = versionNumber;
class VersionCheckTTL {
    static timestampFilePath() {
        // Using the same path from account-cache.ts
        return path.join((0, directories_1.cdkCacheDir)(), 'repo-version-ttl');
    }
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
        (0, logging_1.debug)(`The 'npm view' command generated an error stream with content [${stderr.trim()}]`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLCtCQUFpQztBQUNqQyx1Q0FBa0M7QUFDbEMsb0RBQWlEO0FBRWpELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRTVDLE1BQU0sSUFBSSxHQUFHLElBQUEsZ0JBQVMsRUFBQyxvQkFBSyxDQUFDLENBQUM7QUFFakIsUUFBQSxlQUFlLEdBQUcsR0FBRyxhQUFhLEVBQUUsRUFBRSxDQUFDO0FBRXBELFNBQWdCLGFBQWE7SUFDM0IsaUVBQWlFO0lBQ2pFLE9BQU8sT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUhELHNDQUdDO0FBRUQsTUFBYSxlQUFlO0lBQ25CLE1BQU0sQ0FBQyxpQkFBaUI7UUFDN0IsNENBQTRDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFBLHlCQUFXLEdBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFPRCxZQUFZLElBQWEsRUFBRSxPQUFnQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4RCxJQUFJO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRDtRQUFDLFdBQU07WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztJQUMvQyxDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVU7UUFDckIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pELG9CQUFvQjtnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLENBQUM7YUFDWDtTQUNGO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBc0I7UUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBL0NELDBDQStDQztBQUVELGdDQUFnQztBQUNoQywyREFBMkQ7QUFDcEQsS0FBSyxVQUFVLHFCQUFxQixDQUN6QyxjQUFzQixFQUN0QixTQUEwQjtJQUUxQixJQUFJLENBQUMsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbEUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdEMsSUFBQSxlQUFLLEVBQUMsa0VBQWtFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0Y7SUFDRCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsYUFBYSxFQUFFLENBQUMsQ0FBQztLQUNwRTtJQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV0QyxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sYUFBYSxDQUFDO0tBQ3RCO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQXhCRCxzREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIGFzIF9leGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgc2VtdmVyIGZyb20gJ3NlbXZlcic7XG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7IGNka0NhY2hlRGlyIH0gZnJvbSAnLi91dGlsL2RpcmVjdG9yaWVzJztcblxuY29uc3QgT05FX0RBWV9JTl9TRUNPTkRTID0gMSAqIDI0ICogNjAgKiA2MDtcblxuY29uc3QgZXhlYyA9IHByb21pc2lmeShfZXhlYyk7XG5cbmV4cG9ydCBjb25zdCBESVNQTEFZX1ZFUlNJT04gPSBgJHt2ZXJzaW9uTnVtYmVyKCl9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnNpb25OdW1iZXIoKTogc3RyaW5nIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgcmV0dXJuIHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24ucmVwbGFjZSgvXFwrWzAtOWEtZl0rJC8sICcnKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZlcnNpb25DaGVja1RUTCB7XG4gIHB1YmxpYyBzdGF0aWMgdGltZXN0YW1wRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICAvLyBVc2luZyB0aGUgc2FtZSBwYXRoIGZyb20gYWNjb3VudC1jYWNoZS50c1xuICAgIHJldHVybiBwYXRoLmpvaW4oY2RrQ2FjaGVEaXIoKSwgJ3JlcG8tdmVyc2lvbi10dGwnKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsZTogc3RyaW5nO1xuXG4gIC8vIEZpbGUgbW9kaWZ5IHRpbWVzIGFyZSBhY2N1cmF0ZSBvbmx5IHRvIHRoZSBzZWNvbmRcbiAgcHJpdmF0ZSByZWFkb25seSB0dGxTZWNzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZmlsZT86IHN0cmluZywgdHRsU2Vjcz86IG51bWJlcikge1xuICAgIHRoaXMuZmlsZSA9IGZpbGUgfHwgVmVyc2lvbkNoZWNrVFRMLnRpbWVzdGFtcEZpbGVQYXRoKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZzLm1rZGlyc1N5bmMocGF0aC5kaXJuYW1lKHRoaXMuZmlsZSkpO1xuICAgICAgZnMuYWNjZXNzU3luYyhwYXRoLmRpcm5hbWUodGhpcy5maWxlKSwgZnMuY29uc3RhbnRzLldfT0spO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXJlY3RvcnkgKCR7cGF0aC5kaXJuYW1lKHRoaXMuZmlsZSl9KSBpcyBub3Qgd3JpdGFibGUuYCk7XG4gICAgfVxuICAgIHRoaXMudHRsU2VjcyA9IHR0bFNlY3MgfHwgT05FX0RBWV9JTl9TRUNPTkRTO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhc0V4cGlyZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxhc3RDaGVja1RpbWUgPSAoYXdhaXQgZnMuc3RhdCh0aGlzLmZpbGUpKS5tdGltZU1zO1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgaWYgKCh0b2RheSAtIGxhc3RDaGVja1RpbWUpIC8gMTAwMCA+IHRoaXMudHRsU2Vjcykge1xuICAgICAgICAvLyBjb252ZXJ0IG1zIHRvIHNlY1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZShsYXRlc3RWZXJzaW9uPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFsYXRlc3RWZXJzaW9uKSB7XG4gICAgICBsYXRlc3RWZXJzaW9uID0gJyc7XG4gICAgfVxuICAgIGF3YWl0IGZzLndyaXRlRmlsZSh0aGlzLmZpbGUsIGxhdGVzdFZlcnNpb24pO1xuICB9XG59XG5cbi8vIEV4cG9ydCBmb3IgdW5pdCB0ZXN0aW5nIG9ubHkuXG4vLyBEb24ndCB1c2UgZGlyZWN0bHksIHVzZSBkaXNwbGF5VmVyc2lvbk1lc3NhZ2UoKSBpbnN0ZWFkLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxhdGVzdFZlcnNpb25JZkhpZ2hlcihcbiAgY3VycmVudFZlcnNpb246IHN0cmluZyxcbiAgY2FjaGVGaWxlOiBWZXJzaW9uQ2hlY2tUVEwsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgaWYgKCEoYXdhaXQgY2FjaGVGaWxlLmhhc0V4cGlyZWQoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoJ25wbSB2aWV3IHJvcy1jZGsgdmVyc2lvbicpO1xuICBpZiAoc3RkZXJyICYmIHN0ZGVyci50cmltKCkubGVuZ3RoID4gMCkge1xuICAgIGRlYnVnKGBUaGUgJ25wbSB2aWV3JyBjb21tYW5kIGdlbmVyYXRlZCBhbiBlcnJvciBzdHJlYW0gd2l0aCBjb250ZW50IFske3N0ZGVyci50cmltKCl9XWApO1xuICB9XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSBzdGRvdXQudHJpbSgpO1xuICBpZiAoIXNlbXZlci52YWxpZChsYXRlc3RWZXJzaW9uKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgbnBtIHJldHVybmVkIGFuIGludmFsaWQgc2VtdmVyICR7bGF0ZXN0VmVyc2lvbn1gKTtcbiAgfVxuICBjb25zdCBpc05ld2VyID0gc2VtdmVyLmd0KGxhdGVzdFZlcnNpb24sIGN1cnJlbnRWZXJzaW9uKTtcbiAgYXdhaXQgY2FjaGVGaWxlLnVwZGF0ZShsYXRlc3RWZXJzaW9uKTtcblxuICBpZiAoaXNOZXdlcikge1xuICAgIHJldHVybiBsYXRlc3RWZXJzaW9uO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=
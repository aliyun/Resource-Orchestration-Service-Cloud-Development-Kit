"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs = require("fs");
const os = require("os");
const path = require("path");
const copy_1 = require("./copy");
const fingerprint_1 = require("./fingerprint");
__exportStar(require("./ignore"), exports);
__exportStar(require("./options"), exports);
/**
 * File system utilities.
 */
class FileSystem {
    /**
     * Copies an entire directory structure.
     * @param srcDir Source directory
     * @param destDir Destination directory
     * @param options options
     * @param rootDir Root directory to calculate exclusions from
     */
    static copyDirectory(srcDir, destDir, options = {}, rootDir) {
        return copy_1.copyDirectory(srcDir, destDir, options, rootDir);
    }
    /**
     * Produces fingerprint based on the contents of a single file or an entire directory tree.
     *
     * Line endings are converted from CRLF to LF.
     *
     * The fingerprint will also include:
     * 1. An extra string if defined in `options.extra`.
     * 2. The symlink follow mode value.
     *
     * @param fileOrDirectory The directory or file to fingerprint
     * @param options Fingerprinting options
     */
    static fingerprint(fileOrDirectory, options = {}) {
        return fingerprint_1.fingerprint(fileOrDirectory, options);
    }
    /**
     * Checks whether a directory is empty
     *
     * @param dir The directory to check
     */
    static isEmpty(dir) {
        return fs.readdirSync(dir).length === 0;
    }
    /**
     * The real path of the system temp directory
     */
    static get tmpdir() {
        if (FileSystem._tmpdir) {
            return FileSystem._tmpdir;
        }
        FileSystem._tmpdir = fs.realpathSync(os.tmpdir());
        return FileSystem._tmpdir;
    }
    /**
     * Creates a unique temporary directory in the **system temp directory**.
     *
     * @param prefix A prefix for the directory name. Six random characters
     * will be generated and appended behind this prefix.
     */
    static mkdtemp(prefix) {
        return fs.mkdtempSync(path.join(FileSystem.tmpdir, prefix));
    }
}
exports.FileSystem = FileSystem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQXVDO0FBQ3ZDLCtDQUE0QztBQUc1QywyQ0FBeUI7QUFDekIsNENBQTBCO0FBRTFCOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ3JCOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxVQUF1QixFQUFHLEVBQUUsT0FBZ0I7UUFDdkcsT0FBTyxvQkFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBdUIsRUFBRSxVQUE4QixFQUFHO1FBQ2xGLE9BQU8seUJBQVcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFDL0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxLQUFLLE1BQU07UUFDdEIsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3RCLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUMzQjtRQUNELFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFjO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBR0Y7QUEzREQsZ0NBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgb3MgZnJvbSAnb3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNvcHlEaXJlY3RvcnkgfSBmcm9tICcuL2NvcHknO1xuaW1wb3J0IHsgZmluZ2VycHJpbnQgfSBmcm9tICcuL2ZpbmdlcnByaW50JztcbmltcG9ydCB7IENvcHlPcHRpb25zLCBGaW5nZXJwcmludE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2lnbm9yZSc7XG5leHBvcnQgKiBmcm9tICcuL29wdGlvbnMnO1xuXG4vKipcbiAqIEZpbGUgc3lzdGVtIHV0aWxpdGllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogQ29waWVzIGFuIGVudGlyZSBkaXJlY3Rvcnkgc3RydWN0dXJlLlxuICAgKiBAcGFyYW0gc3JjRGlyIFNvdXJjZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIGRlc3REaXIgRGVzdGluYXRpb24gZGlyZWN0b3J5XG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnNcbiAgICogQHBhcmFtIHJvb3REaXIgUm9vdCBkaXJlY3RvcnkgdG8gY2FsY3VsYXRlIGV4Y2x1c2lvbnMgZnJvbVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb3B5RGlyZWN0b3J5KHNyY0Rpcjogc3RyaW5nLCBkZXN0RGlyOiBzdHJpbmcsIG9wdGlvbnM6IENvcHlPcHRpb25zID0geyB9LCByb290RGlyPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGNvcHlEaXJlY3Rvcnkoc3JjRGlyLCBkZXN0RGlyLCBvcHRpb25zLCByb290RGlyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlcyBmaW5nZXJwcmludCBiYXNlZCBvbiB0aGUgY29udGVudHMgb2YgYSBzaW5nbGUgZmlsZSBvciBhbiBlbnRpcmUgZGlyZWN0b3J5IHRyZWUuXG4gICAqXG4gICAqIExpbmUgZW5kaW5ncyBhcmUgY29udmVydGVkIGZyb20gQ1JMRiB0byBMRi5cbiAgICpcbiAgICogVGhlIGZpbmdlcnByaW50IHdpbGwgYWxzbyBpbmNsdWRlOlxuICAgKiAxLiBBbiBleHRyYSBzdHJpbmcgaWYgZGVmaW5lZCBpbiBgb3B0aW9ucy5leHRyYWAuXG4gICAqIDIuIFRoZSBzeW1saW5rIGZvbGxvdyBtb2RlIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZU9yRGlyZWN0b3J5IFRoZSBkaXJlY3Rvcnkgb3IgZmlsZSB0byBmaW5nZXJwcmludFxuICAgKiBAcGFyYW0gb3B0aW9ucyBGaW5nZXJwcmludGluZyBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZpbmdlcnByaW50KGZpbGVPckRpcmVjdG9yeTogc3RyaW5nLCBvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMgPSB7IH0pIHtcbiAgICByZXR1cm4gZmluZ2VycHJpbnQoZmlsZU9yRGlyZWN0b3J5LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBhIGRpcmVjdG9yeSBpcyBlbXB0eVxuICAgKlxuICAgKiBAcGFyYW0gZGlyIFRoZSBkaXJlY3RvcnkgdG8gY2hlY2tcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNFbXB0eShkaXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhkaXIpLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcmVhbCBwYXRoIG9mIHRoZSBzeXN0ZW0gdGVtcCBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHRtcGRpcigpOiBzdHJpbmcge1xuICAgIGlmIChGaWxlU3lzdGVtLl90bXBkaXIpIHtcbiAgICAgIHJldHVybiBGaWxlU3lzdGVtLl90bXBkaXI7XG4gICAgfVxuICAgIEZpbGVTeXN0ZW0uX3RtcGRpciA9IGZzLnJlYWxwYXRoU3luYyhvcy50bXBkaXIoKSk7XG4gICAgcmV0dXJuIEZpbGVTeXN0ZW0uX3RtcGRpcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdW5pcXVlIHRlbXBvcmFyeSBkaXJlY3RvcnkgaW4gdGhlICoqc3lzdGVtIHRlbXAgZGlyZWN0b3J5KiouXG4gICAqXG4gICAqIEBwYXJhbSBwcmVmaXggQSBwcmVmaXggZm9yIHRoZSBkaXJlY3RvcnkgbmFtZS4gU2l4IHJhbmRvbSBjaGFyYWN0ZXJzXG4gICAqIHdpbGwgYmUgZ2VuZXJhdGVkIGFuZCBhcHBlbmRlZCBiZWhpbmQgdGhpcyBwcmVmaXguXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1rZHRlbXAocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmcy5ta2R0ZW1wU3luYyhwYXRoLmpvaW4oRmlsZVN5c3RlbS50bXBkaXIsIHByZWZpeCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX3RtcGRpcj86IHN0cmluZztcbn1cbiJdfQ==
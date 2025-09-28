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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
        return (0, copy_1.copyDirectory)(srcDir, destDir, options, rootDir);
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
        return (0, fingerprint_1.fingerprint)(fileOrDirectory, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLGlDQUF1QztBQUN2QywrQ0FBNEM7QUFHNUMsMkNBQXlCO0FBQ3pCLDRDQUEwQjtBQUUxQjs7R0FFRztBQUNILE1BQWEsVUFBVTtJQUNyQjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsVUFBdUIsRUFBRyxFQUFFLE9BQWdCO1FBQ3ZHLE9BQU8sSUFBQSxvQkFBYSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBdUIsRUFBRSxVQUE4QixFQUFHO1FBQ2xGLE9BQU8sSUFBQSx5QkFBVyxFQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBVztRQUMvQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLEtBQUssTUFBTTtRQUN0QixJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDO1NBQzNCO1FBQ0QsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWM7UUFDbEMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FHRjtBQTNERCxnQ0EyREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgY29weURpcmVjdG9yeSB9IGZyb20gJy4vY29weSc7XG5pbXBvcnQgeyBmaW5nZXJwcmludCB9IGZyb20gJy4vZmluZ2VycHJpbnQnO1xuaW1wb3J0IHsgQ29weU9wdGlvbnMsIEZpbmdlcnByaW50T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vaWdub3JlJztcbmV4cG9ydCAqIGZyb20gJy4vb3B0aW9ucyc7XG5cbi8qKlxuICogRmlsZSBzeXN0ZW0gdXRpbGl0aWVzLlxuICovXG5leHBvcnQgY2xhc3MgRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBDb3BpZXMgYW4gZW50aXJlIGRpcmVjdG9yeSBzdHJ1Y3R1cmUuXG4gICAqIEBwYXJhbSBzcmNEaXIgU291cmNlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0gZGVzdERpciBEZXN0aW5hdGlvbiBkaXJlY3RvcnlcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9uc1xuICAgKiBAcGFyYW0gcm9vdERpciBSb290IGRpcmVjdG9yeSB0byBjYWxjdWxhdGUgZXhjbHVzaW9ucyBmcm9tXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvcHlEaXJlY3Rvcnkoc3JjRGlyOiBzdHJpbmcsIGRlc3REaXI6IHN0cmluZywgb3B0aW9uczogQ29weU9wdGlvbnMgPSB7IH0sIHJvb3REaXI/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY29weURpcmVjdG9yeShzcmNEaXIsIGRlc3REaXIsIG9wdGlvbnMsIHJvb3REaXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2VzIGZpbmdlcnByaW50IGJhc2VkIG9uIHRoZSBjb250ZW50cyBvZiBhIHNpbmdsZSBmaWxlIG9yIGFuIGVudGlyZSBkaXJlY3RvcnkgdHJlZS5cbiAgICpcbiAgICogTGluZSBlbmRpbmdzIGFyZSBjb252ZXJ0ZWQgZnJvbSBDUkxGIHRvIExGLlxuICAgKlxuICAgKiBUaGUgZmluZ2VycHJpbnQgd2lsbCBhbHNvIGluY2x1ZGU6XG4gICAqIDEuIEFuIGV4dHJhIHN0cmluZyBpZiBkZWZpbmVkIGluIGBvcHRpb25zLmV4dHJhYC5cbiAgICogMi4gVGhlIHN5bWxpbmsgZm9sbG93IG1vZGUgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlT3JEaXJlY3RvcnkgVGhlIGRpcmVjdG9yeSBvciBmaWxlIHRvIGZpbmdlcnByaW50XG4gICAqIEBwYXJhbSBvcHRpb25zIEZpbmdlcnByaW50aW5nIG9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmluZ2VycHJpbnQoZmlsZU9yRGlyZWN0b3J5OiBzdHJpbmcsIG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyA9IHsgfSkge1xuICAgIHJldHVybiBmaW5nZXJwcmludChmaWxlT3JEaXJlY3RvcnksIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgZGlyZWN0b3J5IGlzIGVtcHR5XG4gICAqXG4gICAqIEBwYXJhbSBkaXIgVGhlIGRpcmVjdG9yeSB0byBjaGVja1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0VtcHR5KGRpcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKGRpcikubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByZWFsIHBhdGggb2YgdGhlIHN5c3RlbSB0ZW1wIGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgdG1wZGlyKCk6IHN0cmluZyB7XG4gICAgaWYgKEZpbGVTeXN0ZW0uX3RtcGRpcikge1xuICAgICAgcmV0dXJuIEZpbGVTeXN0ZW0uX3RtcGRpcjtcbiAgICB9XG4gICAgRmlsZVN5c3RlbS5fdG1wZGlyID0gZnMucmVhbHBhdGhTeW5jKG9zLnRtcGRpcigpKTtcbiAgICByZXR1cm4gRmlsZVN5c3RlbS5fdG1wZGlyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB1bmlxdWUgdGVtcG9yYXJ5IGRpcmVjdG9yeSBpbiB0aGUgKipzeXN0ZW0gdGVtcCBkaXJlY3RvcnkqKi5cbiAgICpcbiAgICogQHBhcmFtIHByZWZpeCBBIHByZWZpeCBmb3IgdGhlIGRpcmVjdG9yeSBuYW1lLiBTaXggcmFuZG9tIGNoYXJhY3RlcnNcbiAgICogd2lsbCBiZSBnZW5lcmF0ZWQgYW5kIGFwcGVuZGVkIGJlaGluZCB0aGlzIHByZWZpeC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbWtkdGVtcChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZzLm1rZHRlbXBTeW5jKHBhdGguam9pbihGaWxlU3lzdGVtLnRtcGRpciwgcHJlZml4KSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBfdG1wZGlyPzogc3RyaW5nO1xufVxuIl19
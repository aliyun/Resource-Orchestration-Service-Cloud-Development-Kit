"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalIDs = void 0;
/**
 * Class that keeps track of the logical IDs that are assigned to resources
 *
 * Supports renaming the generated IDs.
 */
class LogicalIDs {
    constructor() {
        /**
         * The rename table (old to new)
         */
        this.renames = {};
        /**
         * All assigned names (new to old, may be identical)
         *
         * This is used to ensure that:
         *
         * - No 2 resources end up with the same final logical ID, unless they were the same to begin with.
         * - All renames have been used at the end of renaming.
         */
        this.reverse = {};
    }
    /**
     * Rename a logical ID from an old ID to a new ID
     */
    addRename(oldId, newId) {
        if (oldId in this.renames) {
            throw new Error(`A rename has already been registered for '${oldId}'`);
        }
        this.renames[oldId] = newId;
    }
    /**
     * Return the renamed version of an ID or the original ID.
     */
    applyRename(oldId) {
        let newId = oldId;
        if (oldId in this.renames) {
            newId = this.renames[oldId];
        }
        // If this newId has already been used, it must have been with the same oldId
        if (newId in this.reverse && this.reverse[newId] !== oldId) {
            // tslint:disable-next-line:max-line-length
            throw new Error(`Two objects have been assigned the same Logical ID: '${this.reverse[newId]}' and '${oldId}' are now both named '${newId}'.`);
        }
        this.reverse[newId] = oldId;
        validateLogicalId(newId);
        return newId;
    }
    /**
     * Throw an error if not all renames have been used
     *
     * This is to assure that users didn't make typoes when registering renames.
     */
    assertAllRenamesApplied() {
        const keys = new Set();
        Object.keys(this.renames).forEach(keys.add.bind(keys));
        Object.keys(this.reverse).map((newId) => {
            keys.delete(this.reverse[newId]);
        });
        if (keys.size !== 0) {
            const unusedRenames = Array.from(keys.values());
            throw new Error(`The following Logical IDs were attempted to be renamed, but not found: ${unusedRenames.join(", ")}`);
        }
    }
}
exports.LogicalIDs = LogicalIDs;
const VALID_LOGICALID_REGEX = /^[A-Za-z][A-Za-z0-9]{1,254}$/;
/**
 * Validate logical ID is valid for ROS
 */
function validateLogicalId(logicalId) {
    if (!VALID_LOGICALID_REGEX.test(logicalId)) {
        throw new Error(`Logical ID must adhere to the regular expression: ${VALID_LOGICALID_REGEX.toString()}, got '${logicalId}'`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWNhbC1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2ljYWwtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7R0FJRztBQUNILE1BQWEsVUFBVTtJQUF2QjtRQUNFOztXQUVHO1FBQ2MsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFFekQ7Ozs7Ozs7V0FPRztRQUNjLFlBQU8sR0FBNkIsRUFBRSxDQUFDO0lBd0QxRCxDQUFDO0lBdERDOztPQUVHO0lBQ0ksU0FBUyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQzNDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVcsQ0FBQyxLQUFhO1FBQzlCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3pCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsNkVBQTZFO1FBQzdFLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDMUQsMkNBQTJDO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0RBQXdELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyx5QkFBeUIsS0FBSyxJQUFJLENBQzdILENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRTVCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBdUI7UUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxhQUFhLENBQUMsSUFBSSxDQUMxRixJQUFJLENBQ0wsRUFBRSxDQUNKLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRjtBQXRFRCxnQ0FzRUM7QUFFRCxNQUFNLHFCQUFxQixHQUFHLDhCQUE4QixDQUFDO0FBRTdEOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxTQUFpQjtJQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFDLE1BQU0sSUFBSSxLQUFLLENBQ2IscURBQXFELHFCQUFxQixDQUFDLFFBQVEsRUFBRSxVQUFVLFNBQVMsR0FBRyxDQUM1RyxDQUFDO0tBQ0g7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDbGFzcyB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2dpY2FsIElEcyB0aGF0IGFyZSBhc3NpZ25lZCB0byByZXNvdXJjZXNcbiAqXG4gKiBTdXBwb3J0cyByZW5hbWluZyB0aGUgZ2VuZXJhdGVkIElEcy5cbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2ljYWxJRHMge1xuICAvKipcbiAgICogVGhlIHJlbmFtZSB0YWJsZSAob2xkIHRvIG5ldylcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuYW1lczogeyBbb2xkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKlxuICAgKiBBbGwgYXNzaWduZWQgbmFtZXMgKG5ldyB0byBvbGQsIG1heSBiZSBpZGVudGljYWwpXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdDpcbiAgICpcbiAgICogLSBObyAyIHJlc291cmNlcyBlbmQgdXAgd2l0aCB0aGUgc2FtZSBmaW5hbCBsb2dpY2FsIElELCB1bmxlc3MgdGhleSB3ZXJlIHRoZSBzYW1lIHRvIGJlZ2luIHdpdGguXG4gICAqIC0gQWxsIHJlbmFtZXMgaGF2ZSBiZWVuIHVzZWQgYXQgdGhlIGVuZCBvZiByZW5hbWluZy5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmV2ZXJzZTogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgLyoqXG4gICAqIFJlbmFtZSBhIGxvZ2ljYWwgSUQgZnJvbSBhbiBvbGQgSUQgdG8gYSBuZXcgSURcbiAgICovXG4gIHB1YmxpYyBhZGRSZW5hbWUob2xkSWQ6IHN0cmluZywgbmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChvbGRJZCBpbiB0aGlzLnJlbmFtZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQSByZW5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIGZvciAnJHtvbGRJZH0nYCk7XG4gICAgfVxuICAgIHRoaXMucmVuYW1lc1tvbGRJZF0gPSBuZXdJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlbmFtZWQgdmVyc2lvbiBvZiBhbiBJRCBvciB0aGUgb3JpZ2luYWwgSUQuXG4gICAqL1xuICBwdWJsaWMgYXBwbHlSZW5hbWUob2xkSWQ6IHN0cmluZykge1xuICAgIGxldCBuZXdJZCA9IG9sZElkO1xuICAgIGlmIChvbGRJZCBpbiB0aGlzLnJlbmFtZXMpIHtcbiAgICAgIG5ld0lkID0gdGhpcy5yZW5hbWVzW29sZElkXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIG5ld0lkIGhhcyBhbHJlYWR5IGJlZW4gdXNlZCwgaXQgbXVzdCBoYXZlIGJlZW4gd2l0aCB0aGUgc2FtZSBvbGRJZFxuICAgIGlmIChuZXdJZCBpbiB0aGlzLnJldmVyc2UgJiYgdGhpcy5yZXZlcnNlW25ld0lkXSAhPT0gb2xkSWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFR3byBvYmplY3RzIGhhdmUgYmVlbiBhc3NpZ25lZCB0aGUgc2FtZSBMb2dpY2FsIElEOiAnJHt0aGlzLnJldmVyc2VbbmV3SWRdfScgYW5kICcke29sZElkfScgYXJlIG5vdyBib3RoIG5hbWVkICcke25ld0lkfScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5yZXZlcnNlW25ld0lkXSA9IG9sZElkO1xuXG4gICAgdmFsaWRhdGVMb2dpY2FsSWQobmV3SWQpO1xuICAgIHJldHVybiBuZXdJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdyBhbiBlcnJvciBpZiBub3QgYWxsIHJlbmFtZXMgaGF2ZSBiZWVuIHVzZWRcbiAgICpcbiAgICogVGhpcyBpcyB0byBhc3N1cmUgdGhhdCB1c2VycyBkaWRuJ3QgbWFrZSB0eXBvZXMgd2hlbiByZWdpc3RlcmluZyByZW5hbWVzLlxuICAgKi9cbiAgcHVibGljIGFzc2VydEFsbFJlbmFtZXNBcHBsaWVkKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlbmFtZXMpLmZvckVhY2goa2V5cy5hZGQuYmluZChrZXlzKSk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnJldmVyc2UpLm1hcCgobmV3SWQpID0+IHtcbiAgICAgIGtleXMuZGVsZXRlKHRoaXMucmV2ZXJzZVtuZXdJZF0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGtleXMuc2l6ZSAhPT0gMCkge1xuICAgICAgY29uc3QgdW51c2VkUmVuYW1lcyA9IEFycmF5LmZyb20oa2V5cy52YWx1ZXMoKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgZm9sbG93aW5nIExvZ2ljYWwgSURzIHdlcmUgYXR0ZW1wdGVkIHRvIGJlIHJlbmFtZWQsIGJ1dCBub3QgZm91bmQ6ICR7dW51c2VkUmVuYW1lcy5qb2luKFxuICAgICAgICAgIFwiLCBcIlxuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFZBTElEX0xPR0lDQUxJRF9SRUdFWCA9IC9eW0EtWmEtel1bQS1aYS16MC05XXsxLDI1NH0kLztcblxuLyoqXG4gKiBWYWxpZGF0ZSBsb2dpY2FsIElEIGlzIHZhbGlkIGZvciBST1NcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVMb2dpY2FsSWQobG9naWNhbElkOiBzdHJpbmcpIHtcbiAgaWYgKCFWQUxJRF9MT0dJQ0FMSURfUkVHRVgudGVzdChsb2dpY2FsSWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYExvZ2ljYWwgSUQgbXVzdCBhZGhlcmUgdG8gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtWQUxJRF9MT0dJQ0FMSURfUkVHRVgudG9TdHJpbmcoKX0sIGdvdCAnJHtsb2dpY2FsSWR9J2BcbiAgICApO1xuICB9XG59XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUniqueId = void 0;
// tslint:disable-next-line:no-var-requires
const crypto = require("crypto");
const encoding_1 = require("./encoding");
/**
 * Resources with this ID are hidden from humans
 *
 * They do not appear in the human-readable part of the logical ID,
 * but they are included in the hash calculation.
 */
const HIDDEN_FROM_HUMAN_ID = "Resource";
/**
 * Resources with this ID are complete hidden from the logical ID calculation.
 */
const HIDDEN_ID = "Default";
const PATH_SEP = "/";
const HASH_LEN = 8;
const MAX_HUMAN_LEN = 240; // max ID len is 255
const MAX_ID_LEN = 255;
/**
 * Calculates a unique ID for a set of textual components.
 *
 * This is done by calculating a hash on the full path and using it as a suffix
 * of a length-limited "human" rendition of the path components.
 *
 * @param components The path components
 * @returns a unique alpha-numeric identifier with a maximum length of 255
 */
function makeUniqueId(components) {
    components = components.filter((x) => x !== HIDDEN_ID);
    if (components.length === 0) {
        throw new Error("Unable to calculate a unique id for an empty set of components");
    }
    // Lazy require in order to break a module dependency cycle
    const unresolvedTokens = components.filter((c) => encoding_1.unresolved(c));
    if (unresolvedTokens.length > 0) {
        throw new Error(`ID components may not include unresolved tokens: ${unresolvedTokens.join(",")}`);
    }
    // top-level resources will simply use the `name` as-is in order to support
    // transparent migration of ROS templates to the CDK without the
    // need to rename all resources.
    if (components.length === 1) {
        // we filter out non-alpha characters but that is actually a bad idea
        // because it could create conflicts ("A-B" and "AB" will render the same
        // logical ID). sadly, changing it in the 1.x version line is impossible
        // because it will be a breaking change. we should consider for v2.0.
        const candidate = removeNonAlphanumeric(components[0]);
        // if our candidate is short enough, use it as is. otherwise, fall back to
        // the normal mode.
        if (candidate.length <= MAX_ID_LEN) {
            return candidate;
        }
    }
    const hash = pathHash(components);
    const human = removeDupes(components)
        .filter((x) => x !== HIDDEN_FROM_HUMAN_ID)
        .map(removeNonAlphanumeric)
        .join("")
        .slice(0, MAX_HUMAN_LEN);
    return human + hash;
}
exports.makeUniqueId = makeUniqueId;
/**
 * Take a hash of the given path.
 *
 * The hash is limited in size.
 */
function pathHash(path) {
    const md5 = crypto
        .createHash("md5")
        .update(path.join(PATH_SEP))
        .digest("hex");
    return md5.slice(0, HASH_LEN).toUpperCase();
}
/**
 * Removes all non-alphanumeric characters in a string.
 */
function removeNonAlphanumeric(s) {
    return s.replace(/[^A-Za-z0-9]/g, "");
}
/**
 * Remove duplicate "terms" from the path list
 *
 * If the previous path component name ends with this component name, skip the
 * current component.
 */
function removeDupes(path) {
    const ret = new Array();
    for (const component of path) {
        if (ret.length === 0 || !ret[ret.length - 1].endsWith(component)) {
            ret.push(component);
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmlxdWVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBQ2pDLHlDQUF3QztBQUV4Qzs7Ozs7R0FLRztBQUNILE1BQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDO0FBRXhDOztHQUVHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBRTVCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUVyQixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbkIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsb0JBQW9CO0FBQy9DLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUV2Qjs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLFlBQVksQ0FBQyxVQUFvQjtJQUMvQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBRXZELElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FDakUsQ0FBQztLQUNIO0lBRUQsMkRBQTJEO0lBQzNELE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMscUJBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQixNQUFNLElBQUksS0FBSyxDQUNiLG9EQUFvRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQ3ZFLEdBQUcsQ0FDSixFQUFFLENBQ0osQ0FBQztLQUNIO0lBRUQsMkVBQTJFO0lBQzNFLGdFQUFnRTtJQUNoRSxnQ0FBZ0M7SUFDaEMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQixxRUFBcUU7UUFDckUseUVBQXlFO1FBQ3pFLHdFQUF3RTtRQUN4RSxxRUFBcUU7UUFDckUsTUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsMEVBQTBFO1FBQzFFLG1CQUFtQjtRQUNuQixJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksVUFBVSxFQUFFO1lBQ2xDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztTQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxvQkFBb0IsQ0FBQztTQUN6QyxHQUFHLENBQUMscUJBQXFCLENBQUM7U0FDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNSLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFM0IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLENBQUM7QUE1Q0Qsb0NBNENDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsUUFBUSxDQUFDLElBQWM7SUFDOUIsTUFBTSxHQUFHLEdBQUcsTUFBTTtTQUNmLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBQyxDQUFTO0lBQ3RDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxXQUFXLENBQUMsSUFBYztJQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBRWhDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXZhci1yZXF1aXJlc1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IHVucmVzb2x2ZWQgfSBmcm9tIFwiLi9lbmNvZGluZ1wiO1xuXG4vKipcbiAqIFJlc291cmNlcyB3aXRoIHRoaXMgSUQgYXJlIGhpZGRlbiBmcm9tIGh1bWFuc1xuICpcbiAqIFRoZXkgZG8gbm90IGFwcGVhciBpbiB0aGUgaHVtYW4tcmVhZGFibGUgcGFydCBvZiB0aGUgbG9naWNhbCBJRCxcbiAqIGJ1dCB0aGV5IGFyZSBpbmNsdWRlZCBpbiB0aGUgaGFzaCBjYWxjdWxhdGlvbi5cbiAqL1xuY29uc3QgSElEREVOX0ZST01fSFVNQU5fSUQgPSBcIlJlc291cmNlXCI7XG5cbi8qKlxuICogUmVzb3VyY2VzIHdpdGggdGhpcyBJRCBhcmUgY29tcGxldGUgaGlkZGVuIGZyb20gdGhlIGxvZ2ljYWwgSUQgY2FsY3VsYXRpb24uXG4gKi9cbmNvbnN0IEhJRERFTl9JRCA9IFwiRGVmYXVsdFwiO1xuXG5jb25zdCBQQVRIX1NFUCA9IFwiL1wiO1xuXG5jb25zdCBIQVNIX0xFTiA9IDg7XG5jb25zdCBNQVhfSFVNQU5fTEVOID0gMjQwOyAvLyBtYXggSUQgbGVuIGlzIDI1NVxuY29uc3QgTUFYX0lEX0xFTiA9IDI1NTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgdW5pcXVlIElEIGZvciBhIHNldCBvZiB0ZXh0dWFsIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IGNhbGN1bGF0aW5nIGEgaGFzaCBvbiB0aGUgZnVsbCBwYXRoIGFuZCB1c2luZyBpdCBhcyBhIHN1ZmZpeFxuICogb2YgYSBsZW5ndGgtbGltaXRlZCBcImh1bWFuXCIgcmVuZGl0aW9uIG9mIHRoZSBwYXRoIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudHMgVGhlIHBhdGggY29tcG9uZW50c1xuICogQHJldHVybnMgYSB1bmlxdWUgYWxwaGEtbnVtZXJpYyBpZGVudGlmaWVyIHdpdGggYSBtYXhpbXVtIGxlbmd0aCBvZiAyNTVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmlxdWVJZChjb21wb25lbnRzOiBzdHJpbmdbXSkge1xuICBjb21wb25lbnRzID0gY29tcG9uZW50cy5maWx0ZXIoKHgpID0+IHggIT09IEhJRERFTl9JRCk7XG5cbiAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJVbmFibGUgdG8gY2FsY3VsYXRlIGEgdW5pcXVlIGlkIGZvciBhbiBlbXB0eSBzZXQgb2YgY29tcG9uZW50c1wiXG4gICAgKTtcbiAgfVxuXG4gIC8vIExhenkgcmVxdWlyZSBpbiBvcmRlciB0byBicmVhayBhIG1vZHVsZSBkZXBlbmRlbmN5IGN5Y2xlXG4gIGNvbnN0IHVucmVzb2x2ZWRUb2tlbnMgPSBjb21wb25lbnRzLmZpbHRlcigoYykgPT4gdW5yZXNvbHZlZChjKSk7XG4gIGlmICh1bnJlc29sdmVkVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSUQgY29tcG9uZW50cyBtYXkgbm90IGluY2x1ZGUgdW5yZXNvbHZlZCB0b2tlbnM6ICR7dW5yZXNvbHZlZFRva2Vucy5qb2luKFxuICAgICAgICBcIixcIlxuICAgICAgKX1gXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRvcC1sZXZlbCByZXNvdXJjZXMgd2lsbCBzaW1wbHkgdXNlIHRoZSBgbmFtZWAgYXMtaXMgaW4gb3JkZXIgdG8gc3VwcG9ydFxuICAvLyB0cmFuc3BhcmVudCBtaWdyYXRpb24gb2YgUk9TIHRlbXBsYXRlcyB0byB0aGUgQ0RLIHdpdGhvdXQgdGhlXG4gIC8vIG5lZWQgdG8gcmVuYW1lIGFsbCByZXNvdXJjZXMuXG4gIGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIHdlIGZpbHRlciBvdXQgbm9uLWFscGhhIGNoYXJhY3RlcnMgYnV0IHRoYXQgaXMgYWN0dWFsbHkgYSBiYWQgaWRlYVxuICAgIC8vIGJlY2F1c2UgaXQgY291bGQgY3JlYXRlIGNvbmZsaWN0cyAoXCJBLUJcIiBhbmQgXCJBQlwiIHdpbGwgcmVuZGVyIHRoZSBzYW1lXG4gICAgLy8gbG9naWNhbCBJRCkuIHNhZGx5LCBjaGFuZ2luZyBpdCBpbiB0aGUgMS54IHZlcnNpb24gbGluZSBpcyBpbXBvc3NpYmxlXG4gICAgLy8gYmVjYXVzZSBpdCB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlLiB3ZSBzaG91bGQgY29uc2lkZXIgZm9yIHYyLjAuXG4gICAgY29uc3QgY2FuZGlkYXRlID0gcmVtb3ZlTm9uQWxwaGFudW1lcmljKGNvbXBvbmVudHNbMF0pO1xuXG4gICAgLy8gaWYgb3VyIGNhbmRpZGF0ZSBpcyBzaG9ydCBlbm91Z2gsIHVzZSBpdCBhcyBpcy4gb3RoZXJ3aXNlLCBmYWxsIGJhY2sgdG9cbiAgICAvLyB0aGUgbm9ybWFsIG1vZGUuXG4gICAgaWYgKGNhbmRpZGF0ZS5sZW5ndGggPD0gTUFYX0lEX0xFTikge1xuICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYXNoID0gcGF0aEhhc2goY29tcG9uZW50cyk7XG4gIGNvbnN0IGh1bWFuID0gcmVtb3ZlRHVwZXMoY29tcG9uZW50cylcbiAgICAuZmlsdGVyKCh4KSA9PiB4ICE9PSBISURERU5fRlJPTV9IVU1BTl9JRClcbiAgICAubWFwKHJlbW92ZU5vbkFscGhhbnVtZXJpYylcbiAgICAuam9pbihcIlwiKVxuICAgIC5zbGljZSgwLCBNQVhfSFVNQU5fTEVOKTtcblxuICByZXR1cm4gaHVtYW4gKyBoYXNoO1xufVxuXG4vKipcbiAqIFRha2UgYSBoYXNoIG9mIHRoZSBnaXZlbiBwYXRoLlxuICpcbiAqIFRoZSBoYXNoIGlzIGxpbWl0ZWQgaW4gc2l6ZS5cbiAqL1xuZnVuY3Rpb24gcGF0aEhhc2gocGF0aDogc3RyaW5nW10pOiBzdHJpbmcge1xuICBjb25zdCBtZDUgPSBjcnlwdG9cbiAgICAuY3JlYXRlSGFzaChcIm1kNVwiKVxuICAgIC51cGRhdGUocGF0aC5qb2luKFBBVEhfU0VQKSlcbiAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICByZXR1cm4gbWQ1LnNsaWNlKDAsIEhBU0hfTEVOKS50b1VwcGVyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTm9uQWxwaGFudW1lcmljKHM6IHN0cmluZykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgXCJcIik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSBcInRlcm1zXCIgZnJvbSB0aGUgcGF0aCBsaXN0XG4gKlxuICogSWYgdGhlIHByZXZpb3VzIHBhdGggY29tcG9uZW50IG5hbWUgZW5kcyB3aXRoIHRoaXMgY29tcG9uZW50IG5hbWUsIHNraXAgdGhlXG4gKiBjdXJyZW50IGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRHVwZXMocGF0aDogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgcGF0aCkge1xuICAgIGlmIChyZXQubGVuZ3RoID09PSAwIHx8ICFyZXRbcmV0Lmxlbmd0aCAtIDFdLmVuZHNXaXRoKGNvbXBvbmVudCkpIHtcbiAgICAgIHJldC5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==
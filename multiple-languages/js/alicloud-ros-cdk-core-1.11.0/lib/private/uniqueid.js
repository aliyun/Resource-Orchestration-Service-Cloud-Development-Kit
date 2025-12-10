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
    const unresolvedTokens = components.filter((c) => (0, encoding_1.unresolved)(c));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmlxdWVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBQ2pDLHlDQUF3QztBQUV4Qzs7Ozs7R0FLRztBQUNILE1BQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDO0FBRXhDOztHQUVHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBRTVCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUVyQixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbkIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsb0JBQW9CO0FBQy9DLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUV2Qjs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLFlBQVksQ0FBQyxVQUFvQjtJQUMvQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBRXZELElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FDakUsQ0FBQztLQUNIO0lBRUQsMkRBQTJEO0lBQzNELE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxxQkFBVSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0RBQW9ELGdCQUFnQixDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUNKLEVBQUUsQ0FDSixDQUFDO0tBQ0g7SUFFRCwyRUFBMkU7SUFDM0UsZ0VBQWdFO0lBQ2hFLGdDQUFnQztJQUNoQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLHFFQUFxRTtRQUNyRSx5RUFBeUU7UUFDekUsd0VBQXdFO1FBQ3hFLHFFQUFxRTtRQUNyRSxNQUFNLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCwwRUFBMEU7UUFDMUUsbUJBQW1CO1FBQ25CLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDbEMsT0FBTyxTQUFTLENBQUM7U0FDbEI7S0FDRjtJQUVELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1NBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLG9CQUFvQixDQUFDO1NBQ3pDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztTQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1IsS0FBSyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUUzQixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdEIsQ0FBQztBQTVDRCxvQ0E0Q0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM5QixNQUFNLEdBQUcsR0FBRyxNQUFNO1NBQ2YsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFDLENBQVM7SUFDdEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLFdBQVcsQ0FBQyxJQUFjO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7SUFFaEMsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDNUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHsgdW5yZXNvbHZlZCB9IGZyb20gXCIuL2VuY29kaW5nXCI7XG5cbi8qKlxuICogUmVzb3VyY2VzIHdpdGggdGhpcyBJRCBhcmUgaGlkZGVuIGZyb20gaHVtYW5zXG4gKlxuICogVGhleSBkbyBub3QgYXBwZWFyIGluIHRoZSBodW1hbi1yZWFkYWJsZSBwYXJ0IG9mIHRoZSBsb2dpY2FsIElELFxuICogYnV0IHRoZXkgYXJlIGluY2x1ZGVkIGluIHRoZSBoYXNoIGNhbGN1bGF0aW9uLlxuICovXG5jb25zdCBISURERU5fRlJPTV9IVU1BTl9JRCA9IFwiUmVzb3VyY2VcIjtcblxuLyoqXG4gKiBSZXNvdXJjZXMgd2l0aCB0aGlzIElEIGFyZSBjb21wbGV0ZSBoaWRkZW4gZnJvbSB0aGUgbG9naWNhbCBJRCBjYWxjdWxhdGlvbi5cbiAqL1xuY29uc3QgSElEREVOX0lEID0gXCJEZWZhdWx0XCI7XG5cbmNvbnN0IFBBVEhfU0VQID0gXCIvXCI7XG5cbmNvbnN0IEhBU0hfTEVOID0gODtcbmNvbnN0IE1BWF9IVU1BTl9MRU4gPSAyNDA7IC8vIG1heCBJRCBsZW4gaXMgMjU1XG5jb25zdCBNQVhfSURfTEVOID0gMjU1O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSB1bmlxdWUgSUQgZm9yIGEgc2V0IG9mIHRleHR1YWwgY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgY2FsY3VsYXRpbmcgYSBoYXNoIG9uIHRoZSBmdWxsIHBhdGggYW5kIHVzaW5nIGl0IGFzIGEgc3VmZml4XG4gKiBvZiBhIGxlbmd0aC1saW1pdGVkIFwiaHVtYW5cIiByZW5kaXRpb24gb2YgdGhlIHBhdGggY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50cyBUaGUgcGF0aCBjb21wb25lbnRzXG4gKiBAcmV0dXJucyBhIHVuaXF1ZSBhbHBoYS1udW1lcmljIGlkZW50aWZpZXIgd2l0aCBhIG1heGltdW0gbGVuZ3RoIG9mIDI1NVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVuaXF1ZUlkKGNvbXBvbmVudHM6IHN0cmluZ1tdKSB7XG4gIGNvbXBvbmVudHMgPSBjb21wb25lbnRzLmZpbHRlcigoeCkgPT4geCAhPT0gSElEREVOX0lEKTtcblxuICBpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlVuYWJsZSB0byBjYWxjdWxhdGUgYSB1bmlxdWUgaWQgZm9yIGFuIGVtcHR5IHNldCBvZiBjb21wb25lbnRzXCJcbiAgICApO1xuICB9XG5cbiAgLy8gTGF6eSByZXF1aXJlIGluIG9yZGVyIHRvIGJyZWFrIGEgbW9kdWxlIGRlcGVuZGVuY3kgY3ljbGVcbiAgY29uc3QgdW5yZXNvbHZlZFRva2VucyA9IGNvbXBvbmVudHMuZmlsdGVyKChjKSA9PiB1bnJlc29sdmVkKGMpKTtcbiAgaWYgKHVucmVzb2x2ZWRUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJRCBjb21wb25lbnRzIG1heSBub3QgaW5jbHVkZSB1bnJlc29sdmVkIHRva2VuczogJHt1bnJlc29sdmVkVG9rZW5zLmpvaW4oXG4gICAgICAgIFwiLFwiXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgLy8gdG9wLWxldmVsIHJlc291cmNlcyB3aWxsIHNpbXBseSB1c2UgdGhlIGBuYW1lYCBhcy1pcyBpbiBvcmRlciB0byBzdXBwb3J0XG4gIC8vIHRyYW5zcGFyZW50IG1pZ3JhdGlvbiBvZiBST1MgdGVtcGxhdGVzIHRvIHRoZSBDREsgd2l0aG91dCB0aGVcbiAgLy8gbmVlZCB0byByZW5hbWUgYWxsIHJlc291cmNlcy5cbiAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gd2UgZmlsdGVyIG91dCBub24tYWxwaGEgY2hhcmFjdGVycyBidXQgdGhhdCBpcyBhY3R1YWxseSBhIGJhZCBpZGVhXG4gICAgLy8gYmVjYXVzZSBpdCBjb3VsZCBjcmVhdGUgY29uZmxpY3RzIChcIkEtQlwiIGFuZCBcIkFCXCIgd2lsbCByZW5kZXIgdGhlIHNhbWVcbiAgICAvLyBsb2dpY2FsIElEKS4gc2FkbHksIGNoYW5naW5nIGl0IGluIHRoZSAxLnggdmVyc2lvbiBsaW5lIGlzIGltcG9zc2libGVcbiAgICAvLyBiZWNhdXNlIGl0IHdpbGwgYmUgYSBicmVha2luZyBjaGFuZ2UuIHdlIHNob3VsZCBjb25zaWRlciBmb3IgdjIuMC5cbiAgICBjb25zdCBjYW5kaWRhdGUgPSByZW1vdmVOb25BbHBoYW51bWVyaWMoY29tcG9uZW50c1swXSk7XG5cbiAgICAvLyBpZiBvdXIgY2FuZGlkYXRlIGlzIHNob3J0IGVub3VnaCwgdXNlIGl0IGFzIGlzLiBvdGhlcndpc2UsIGZhbGwgYmFjayB0b1xuICAgIC8vIHRoZSBub3JtYWwgbW9kZS5cbiAgICBpZiAoY2FuZGlkYXRlLmxlbmd0aCA8PSBNQVhfSURfTEVOKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc2ggPSBwYXRoSGFzaChjb21wb25lbnRzKTtcbiAgY29uc3QgaHVtYW4gPSByZW1vdmVEdXBlcyhjb21wb25lbnRzKVxuICAgIC5maWx0ZXIoKHgpID0+IHggIT09IEhJRERFTl9GUk9NX0hVTUFOX0lEKVxuICAgIC5tYXAocmVtb3ZlTm9uQWxwaGFudW1lcmljKVxuICAgIC5qb2luKFwiXCIpXG4gICAgLnNsaWNlKDAsIE1BWF9IVU1BTl9MRU4pO1xuXG4gIHJldHVybiBodW1hbiArIGhhc2g7XG59XG5cbi8qKlxuICogVGFrZSBhIGhhc2ggb2YgdGhlIGdpdmVuIHBhdGguXG4gKlxuICogVGhlIGhhc2ggaXMgbGltaXRlZCBpbiBzaXplLlxuICovXG5mdW5jdGlvbiBwYXRoSGFzaChwYXRoOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIGNvbnN0IG1kNSA9IGNyeXB0b1xuICAgIC5jcmVhdGVIYXNoKFwibWQ1XCIpXG4gICAgLnVwZGF0ZShwYXRoLmpvaW4oUEFUSF9TRVApKVxuICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gIHJldHVybiBtZDUuc2xpY2UoMCwgSEFTSF9MRU4pLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLlxuICovXG5mdW5jdGlvbiByZW1vdmVOb25BbHBoYW51bWVyaWMoczogc3RyaW5nKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCBcIlwiKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIFwidGVybXNcIiBmcm9tIHRoZSBwYXRoIGxpc3RcbiAqXG4gKiBJZiB0aGUgcHJldmlvdXMgcGF0aCBjb21wb25lbnQgbmFtZSBlbmRzIHdpdGggdGhpcyBjb21wb25lbnQgbmFtZSwgc2tpcCB0aGVcbiAqIGN1cnJlbnQgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiByZW1vdmVEdXBlcyhwYXRoOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYXRoKSB7XG4gICAgaWYgKHJldC5sZW5ndGggPT09IDAgfHwgIXJldFtyZXQubGVuZ3RoIC0gMV0uZW5kc1dpdGgoY29tcG9uZW50KSkge1xuICAgICAgcmV0LnB1c2goY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuIl19
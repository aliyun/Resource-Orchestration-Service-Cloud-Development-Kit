"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgnoreMode = exports.SymlinkFollowMode = void 0;
/**
 * Determines how symlinks are followed.
 */
var SymlinkFollowMode;
(function (SymlinkFollowMode) {
    /**
     * Never follow symlinks.
     */
    SymlinkFollowMode["NEVER"] = "never";
    /**
     * Materialize all symlinks, whether they are internal or external to the source directory.
     */
    SymlinkFollowMode["ALWAYS"] = "always";
    /**
     * Only follows symlinks that are external to the source directory.
     */
    SymlinkFollowMode["EXTERNAL"] = "external";
    /**
     * Forbids source from having any symlinks pointing outside of the source
     * tree.
     *
     * This is the safest mode of operation as it ensures that copy operations
     * won't materialize files from the user's file system. Internal symlinks are
     * not followed.
     *
     * If the copy operation runs into an external symlink, it will fail.
     */
    SymlinkFollowMode["BLOCK_EXTERNAL"] = "internal-only";
})(SymlinkFollowMode = exports.SymlinkFollowMode || (exports.SymlinkFollowMode = {}));
/**
 * Determines the ignore behavior to use.
 */
var IgnoreMode;
(function (IgnoreMode) {
    /**
     * Ignores file paths based on simple glob patterns.
     *
     * This is the default for file assets.
     *
     * It is also the default for Docker image assets, unless the 'ros-cdk:dockerIgnoreSupport'
     * context flag is set.
     */
    IgnoreMode["GLOB"] = "glob";
    /**
     * Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).
     */
    IgnoreMode["GIT"] = "git";
    /**
     * Ignores file paths based on the [`.dockerignore specification`](https://docs.docker.com/engine/reference/builder/#dockerignore-file).
     *
     * This is the default for Docker image assets if the 'ros-cdk:dockerIgnoreSupport'
     * context flag is set.
     */
    IgnoreMode["DOCKER"] = "docker";
})(IgnoreMode = exports.IgnoreMode || (exports.IgnoreMode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0dBRUc7QUFDSCxJQUFZLGlCQTJCWDtBQTNCRCxXQUFZLGlCQUFpQjtJQUMzQjs7T0FFRztJQUNILG9DQUFlLENBQUE7SUFFZjs7T0FFRztJQUNILHNDQUFpQixDQUFBO0lBRWpCOztPQUVHO0lBQ0gsMENBQXFCLENBQUE7SUFFckI7Ozs7Ozs7OztPQVNHO0lBQ0gscURBQWdDLENBQUE7QUFDbEMsQ0FBQyxFQTNCVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQTJCNUI7QUFFRDs7R0FFRztBQUNILElBQVksVUF1Qlg7QUF2QkQsV0FBWSxVQUFVO0lBQ3BCOzs7Ozs7O09BT0c7SUFDSCwyQkFBYSxDQUFBO0lBRWI7O09BRUc7SUFDSCx5QkFBVyxDQUFBO0lBRVg7Ozs7O09BS0c7SUFDSCwrQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBdkJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBdUJyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGV0ZXJtaW5lcyBob3cgc3ltbGlua3MgYXJlIGZvbGxvd2VkLlxuICovXG5leHBvcnQgZW51bSBTeW1saW5rRm9sbG93TW9kZSB7XG4gIC8qKlxuICAgKiBOZXZlciBmb2xsb3cgc3ltbGlua3MuXG4gICAqL1xuICBORVZFUiA9ICduZXZlcicsXG5cbiAgLyoqXG4gICAqIE1hdGVyaWFsaXplIGFsbCBzeW1saW5rcywgd2hldGhlciB0aGV5IGFyZSBpbnRlcm5hbCBvciBleHRlcm5hbCB0byB0aGUgc291cmNlIGRpcmVjdG9yeS5cbiAgICovXG4gIEFMV0FZUyA9ICdhbHdheXMnLFxuXG4gIC8qKlxuICAgKiBPbmx5IGZvbGxvd3Mgc3ltbGlua3MgdGhhdCBhcmUgZXh0ZXJuYWwgdG8gdGhlIHNvdXJjZSBkaXJlY3RvcnkuXG4gICAqL1xuICBFWFRFUk5BTCA9ICdleHRlcm5hbCcsXG5cbiAgLyoqXG4gICAqIEZvcmJpZHMgc291cmNlIGZyb20gaGF2aW5nIGFueSBzeW1saW5rcyBwb2ludGluZyBvdXRzaWRlIG9mIHRoZSBzb3VyY2VcbiAgICogdHJlZS5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgc2FmZXN0IG1vZGUgb2Ygb3BlcmF0aW9uIGFzIGl0IGVuc3VyZXMgdGhhdCBjb3B5IG9wZXJhdGlvbnNcbiAgICogd29uJ3QgbWF0ZXJpYWxpemUgZmlsZXMgZnJvbSB0aGUgdXNlcidzIGZpbGUgc3lzdGVtLiBJbnRlcm5hbCBzeW1saW5rcyBhcmVcbiAgICogbm90IGZvbGxvd2VkLlxuICAgKlxuICAgKiBJZiB0aGUgY29weSBvcGVyYXRpb24gcnVucyBpbnRvIGFuIGV4dGVybmFsIHN5bWxpbmssIGl0IHdpbGwgZmFpbC5cbiAgICovXG4gIEJMT0NLX0VYVEVSTkFMID0gJ2ludGVybmFsLW9ubHknLFxufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIGlnbm9yZSBiZWhhdmlvciB0byB1c2UuXG4gKi9cbmV4cG9ydCBlbnVtIElnbm9yZU1vZGUge1xuICAvKipcbiAgICogSWdub3JlcyBmaWxlIHBhdGhzIGJhc2VkIG9uIHNpbXBsZSBnbG9iIHBhdHRlcm5zLlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGZvciBmaWxlIGFzc2V0cy5cbiAgICpcbiAgICogSXQgaXMgYWxzbyB0aGUgZGVmYXVsdCBmb3IgRG9ja2VyIGltYWdlIGFzc2V0cywgdW5sZXNzIHRoZSAncm9zLWNkazpkb2NrZXJJZ25vcmVTdXBwb3J0J1xuICAgKiBjb250ZXh0IGZsYWcgaXMgc2V0LlxuICAgKi9cbiAgR0xPQiA9ICdnbG9iJyxcblxuICAvKipcbiAgICogSWdub3JlcyBmaWxlIHBhdGhzIGJhc2VkIG9uIHRoZSBbYC5naXRpZ25vcmUgc3BlY2lmaWNhdGlvbmBdKGh0dHBzOi8vZ2l0LXNjbS5jb20vZG9jcy9naXRpZ25vcmUpLlxuICAgKi9cbiAgR0lUID0gJ2dpdCcsXG5cbiAgLyoqXG4gICAqIElnbm9yZXMgZmlsZSBwYXRocyBiYXNlZCBvbiB0aGUgW2AuZG9ja2VyaWdub3JlIHNwZWNpZmljYXRpb25gXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2J1aWxkZXIvI2RvY2tlcmlnbm9yZS1maWxlKS5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBmb3IgRG9ja2VyIGltYWdlIGFzc2V0cyBpZiB0aGUgJ3Jvcy1jZGs6ZG9ja2VySWdub3JlU3VwcG9ydCdcbiAgICogY29udGV4dCBmbGFnIGlzIHNldC5cbiAgICovXG4gIERPQ0tFUiA9ICdkb2NrZXInLFxufVxuXG5pbnRlcmZhY2UgRmlsZU9wdGlvbnMge1xuICAvKipcbiAgICogRmlsZSBwYXRocyBtYXRjaGluZyB0aGUgcGF0dGVybnMgd2lsbCBiZSBleGNsdWRlZC4gU2VlIGBpZ25vcmVNb2RlYCB0byBzZXQgdGhlIG1hdGNoaW5nIGJlaGF2aW9yLlxuICAgKiBIYXMgbm8gZWZmZWN0IG9uIEFzc2V0cyBidW5kbGVkIHVzaW5nIHRoZSBgYnVuZGxpbmdgIHByb3BlcnR5LlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vdGhpbmcgaXMgZXhjbHVkZWRcbiAgICovXG4gIHJlYWRvbmx5IGV4Y2x1ZGU/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIGlnbm9yZSBiZWhhdmlvciB0byB1c2UgZm9yIGBleGNsdWRlYCBwYXR0ZXJucy5cbiAgICpcbiAgICogQGRlZmF1bHQgSWdub3JlTW9kZS5HTE9CXG4gICAqL1xuICByZWFkb25seSBpZ25vcmVNb2RlPzogSWdub3JlTW9kZTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGFwcGxpZWQgd2hlbiBjb3B5aW5nIGRpcmVjdG9yaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29weU9wdGlvbnMgZXh0ZW5kcyBGaWxlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmF0ZWd5IGZvciBob3cgdG8gaGFuZGxlIHN5bWxpbmtzLlxuICAgKlxuICAgKiBAZGVmYXVsdCBTeW1saW5rRm9sbG93TW9kZS5ORVZFUlxuICAgKi9cbiAgcmVhZG9ubHkgZm9sbG93PzogU3ltbGlua0ZvbGxvd01vZGU7XG59XG5cbi8qKlxuICogT3B0aW9ucyBhcHBsaWVkIHdoZW4gY29weWluZyBkaXJlY3RvcmllcyBpbnRvIHRoZSBzdGFnaW5nIGxvY2F0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVDb3B5T3B0aW9ucyBleHRlbmRzIEZpbGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgc3RyYXRlZ3kgZm9yIGhvdyB0byBoYW5kbGUgc3ltbGlua3MuXG4gICAqXG4gICAqIEBkZWZhdWx0IFN5bWxpbmtGb2xsb3dNb2RlLk5FVkVSXG4gICAqL1xuICByZWFkb25seSBmb2xsb3dTeW1saW5rcz86IFN5bWxpbmtGb2xsb3dNb2RlO1xufVxuXG5pbnRlcmZhY2UgRXh0cmFIYXNoT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBFeHRyYSBpbmZvcm1hdGlvbiB0byBlbmNvZGUgaW50byB0aGUgZmluZ2VycHJpbnQgKGUuZy4gYnVpbGQgaW5zdHJ1Y3Rpb25zXG4gICAqIGFuZCBvdGhlciBpbnB1dHMpXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gaGFzaCBpcyBvbmx5IGJhc2VkIG9uIHNvdXJjZSBjb250ZW50XG4gICAqL1xuICByZWFkb25seSBleHRyYUhhc2g/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogT3B0aW9ucyByZWxhdGVkIHRvIGNhbGN1bGF0aW5nIHNvdXJjZSBoYXNoLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyBleHRlbmRzIENvcHlPcHRpb25zLCBFeHRyYUhhc2hPcHRpb25zIHtcbn1cblxuLyoqXG4gKiBPcHRpb25zIHJlbGF0ZWQgdG8gY2FsY3VsYXRpbmcgc291cmNlIGhhc2guXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUZpbmdlcnByaW50T3B0aW9ucyBleHRlbmRzIEZpbGVDb3B5T3B0aW9ucywgRXh0cmFIYXNoT3B0aW9ucyB7XG59XG4iXX0=
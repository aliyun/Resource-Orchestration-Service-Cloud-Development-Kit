"use strict";
// --------------------------------------------------------------------------------
// This file declares context keys that are used by the CLI to control the
// behavior of CDK apps. Contrary to feature flags (which are defined under
// `features.ts`) these options are not bound to be removed in the next major
// version.
// --------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISABLE_ASSET_STAGING_CONTEXT = exports.BUNDLING_STACKS = exports.DISABLE_METADATA_STACK_TRACE = void 0;
/**
 * If this context key is set, the CDK will stage assets under the specified
 * directory. Otherwise, assets will not be staged.
 * Omits stack traces from construct metadata entries.
 */
exports.DISABLE_METADATA_STACK_TRACE = "aliyun:ros:disable-stack-trace";
/**
 * Run bundling for stacks specified in this context key
 */
exports.BUNDLING_STACKS = 'aliyun:ros:bundling-stacks';
/**
 * Disable asset staging.
 *
 */
exports.DISABLE_ASSET_STAGING_CONTEXT = 'aliyun:ros:disable-asset-staging';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtRkFBbUY7QUFDbkYsMEVBQTBFO0FBQzFFLDJFQUEyRTtBQUMzRSw2RUFBNkU7QUFDN0UsV0FBVztBQUNYLG1GQUFtRjs7O0FBRW5GOzs7O0dBSUc7QUFDVSxRQUFBLDRCQUE0QixHQUFHLGdDQUFnQyxDQUFDO0FBRTdFOztHQUVHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsNEJBQTRCLENBQUM7QUFFNUQ7OztHQUdHO0FBQ1UsUUFBQSw2QkFBNkIsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgZGVjbGFyZXMgY29udGV4dCBrZXlzIHRoYXQgYXJlIHVzZWQgYnkgdGhlIENMSSB0byBjb250cm9sIHRoZVxuLy8gYmVoYXZpb3Igb2YgQ0RLIGFwcHMuIENvbnRyYXJ5IHRvIGZlYXR1cmUgZmxhZ3MgKHdoaWNoIGFyZSBkZWZpbmVkIHVuZGVyXG4vLyBgZmVhdHVyZXMudHNgKSB0aGVzZSBvcHRpb25zIGFyZSBub3QgYm91bmQgdG8gYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvclxuLy8gdmVyc2lvbi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSWYgdGhpcyBjb250ZXh0IGtleSBpcyBzZXQsIHRoZSBDREsgd2lsbCBzdGFnZSBhc3NldHMgdW5kZXIgdGhlIHNwZWNpZmllZFxuICogZGlyZWN0b3J5LiBPdGhlcndpc2UsIGFzc2V0cyB3aWxsIG5vdCBiZSBzdGFnZWQuXG4gKiBPbWl0cyBzdGFjayB0cmFjZXMgZnJvbSBjb25zdHJ1Y3QgbWV0YWRhdGEgZW50cmllcy5cbiAqL1xuZXhwb3J0IGNvbnN0IERJU0FCTEVfTUVUQURBVEFfU1RBQ0tfVFJBQ0UgPSBcImFsaXl1bjpyb3M6ZGlzYWJsZS1zdGFjay10cmFjZVwiO1xuXG4vKipcbiAqIFJ1biBidW5kbGluZyBmb3Igc3RhY2tzIHNwZWNpZmllZCBpbiB0aGlzIGNvbnRleHQga2V5XG4gKi9cbmV4cG9ydCBjb25zdCBCVU5ETElOR19TVEFDS1MgPSAnYWxpeXVuOnJvczpidW5kbGluZy1zdGFja3MnO1xuXG4vKipcbiAqIERpc2FibGUgYXNzZXQgc3RhZ2luZy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBESVNBQkxFX0FTU0VUX1NUQUdJTkdfQ09OVEVYVCA9ICdhbGl5dW46cm9zOmRpc2FibGUtYXNzZXQtc3RhZ2luZyc7XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASSET_PREFIX_SEPARATOR = exports.ASSET_RESOURCE_METADATA_IS_BUNDLED_KEY = exports.ASSET_RESOURCE_METADATA_PROPERTY_KEY = exports.ASSET_RESOURCE_METADATA_PATH_KEY = exports.ASSET_RESOURCE_METADATA_ENABLED_CONTEXT = void 0;
/**
 * If this is set in the context, the ros:asset:xxx metadata entries will not be
 * added to the template. This is used, for example, when we run integrationt
 * tests.
 */
exports.ASSET_RESOURCE_METADATA_ENABLED_CONTEXT = 'ros:cdk:enable-asset-metadata';
/**
 * Metadata added to the ROS template entries that map local assets
 * to resources.
 */
exports.ASSET_RESOURCE_METADATA_PATH_KEY = 'ros:asset:path';
exports.ASSET_RESOURCE_METADATA_PROPERTY_KEY = 'ros:asset:property';
exports.ASSET_RESOURCE_METADATA_IS_BUNDLED_KEY = 'ros:asset:is-bundled';
/**
 * Separator string that separates the prefix separator from the object key separator.
 *
 * Asset keys will look like:
 *
 *    /assets/MyConstruct12345678/||abcdef12345.zip
 *
 * This allows us to encode both the prefix and the full location in a single
 * ROS Template Parameter.
 */
exports.ASSET_PREFIX_SEPARATOR = '||';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7O0dBSUc7QUFDVSxRQUFBLHVDQUF1QyxHQUFHLCtCQUErQixDQUFDO0FBRXZGOzs7R0FHRztBQUNVLFFBQUEsZ0NBQWdDLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsUUFBQSxvQ0FBb0MsR0FBRyxvQkFBb0IsQ0FBQztBQUM1RCxRQUFBLHNDQUFzQyxHQUFHLHNCQUFzQixDQUFDO0FBRTdFOzs7Ozs7Ozs7R0FTRztBQUNVLFFBQUEsc0JBQXNCLEdBQUcsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJZiB0aGlzIGlzIHNldCBpbiB0aGUgY29udGV4dCwgdGhlIHJvczphc3NldDp4eHggbWV0YWRhdGEgZW50cmllcyB3aWxsIG5vdCBiZVxuICogYWRkZWQgdG8gdGhlIHRlbXBsYXRlLiBUaGlzIGlzIHVzZWQsIGZvciBleGFtcGxlLCB3aGVuIHdlIHJ1biBpbnRlZ3JhdGlvbnRcbiAqIHRlc3RzLlxuICovXG5leHBvcnQgY29uc3QgQVNTRVRfUkVTT1VSQ0VfTUVUQURBVEFfRU5BQkxFRF9DT05URVhUID0gJ3JvczpjZGs6ZW5hYmxlLWFzc2V0LW1ldGFkYXRhJztcblxuLyoqXG4gKiBNZXRhZGF0YSBhZGRlZCB0byB0aGUgUk9TIHRlbXBsYXRlIGVudHJpZXMgdGhhdCBtYXAgbG9jYWwgYXNzZXRzXG4gKiB0byByZXNvdXJjZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBBU1NFVF9SRVNPVVJDRV9NRVRBREFUQV9QQVRIX0tFWSA9ICdyb3M6YXNzZXQ6cGF0aCc7XG5leHBvcnQgY29uc3QgQVNTRVRfUkVTT1VSQ0VfTUVUQURBVEFfUFJPUEVSVFlfS0VZID0gJ3Jvczphc3NldDpwcm9wZXJ0eSc7XG5leHBvcnQgY29uc3QgQVNTRVRfUkVTT1VSQ0VfTUVUQURBVEFfSVNfQlVORExFRF9LRVkgPSAncm9zOmFzc2V0OmlzLWJ1bmRsZWQnO1xuXG4vKipcbiAqIFNlcGFyYXRvciBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIHByZWZpeCBzZXBhcmF0b3IgZnJvbSB0aGUgb2JqZWN0IGtleSBzZXBhcmF0b3IuXG4gKlxuICogQXNzZXQga2V5cyB3aWxsIGxvb2sgbGlrZTpcbiAqXG4gKiAgICAvYXNzZXRzL015Q29uc3RydWN0MTIzNDU2NzgvfHxhYmNkZWYxMjM0NS56aXBcbiAqXG4gKiBUaGlzIGFsbG93cyB1cyB0byBlbmNvZGUgYm90aCB0aGUgcHJlZml4IGFuZCB0aGUgZnVsbCBsb2NhdGlvbiBpbiBhIHNpbmdsZVxuICogUk9TIFRlbXBsYXRlIFBhcmFtZXRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IEFTU0VUX1BSRUZJWF9TRVBBUkFUT1IgPSAnfHwnO1xuIl19
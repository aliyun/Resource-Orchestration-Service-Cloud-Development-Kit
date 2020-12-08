"use strict";
// --------------------------------------------------------------------------------
// This file declares context keys that are used by the CLI to control the
// behavior of CDK apps. Contrary to feature flags (which are defined under
// `features.ts`) these options are not bound to be removed in the next major
// version.
// --------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISABLE_METADATA_STACK_TRACE = void 0;
/**
 * If this context key is set, the CDK will stage assets under the specified
 * directory. Otherwise, assets will not be staged.
 * Omits stack traces from construct metadata entries.
 */
exports.DISABLE_METADATA_STACK_TRACE = "aliyun:ros:disable-stack-trace";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtRkFBbUY7QUFDbkYsMEVBQTBFO0FBQzFFLDJFQUEyRTtBQUMzRSw2RUFBNkU7QUFDN0UsV0FBVztBQUNYLG1GQUFtRjs7O0FBRW5GOzs7O0dBSUc7QUFDVSxRQUFBLDRCQUE0QixHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBkZWNsYXJlcyBjb250ZXh0IGtleXMgdGhhdCBhcmUgdXNlZCBieSB0aGUgQ0xJIHRvIGNvbnRyb2wgdGhlXG4vLyBiZWhhdmlvciBvZiBDREsgYXBwcy4gQ29udHJhcnkgdG8gZmVhdHVyZSBmbGFncyAod2hpY2ggYXJlIGRlZmluZWQgdW5kZXJcbi8vIGBmZWF0dXJlcy50c2ApIHRoZXNlIG9wdGlvbnMgYXJlIG5vdCBib3VuZCB0byBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yXG4vLyB2ZXJzaW9uLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBJZiB0aGlzIGNvbnRleHQga2V5IGlzIHNldCwgdGhlIENESyB3aWxsIHN0YWdlIGFzc2V0cyB1bmRlciB0aGUgc3BlY2lmaWVkXG4gKiBkaXJlY3RvcnkuIE90aGVyd2lzZSwgYXNzZXRzIHdpbGwgbm90IGJlIHN0YWdlZC5cbiAqIE9taXRzIHN0YWNrIHRyYWNlcyBmcm9tIGNvbnN0cnVjdCBtZXRhZGF0YSBlbnRyaWVzLlxuICovXG5leHBvcnQgY29uc3QgRElTQUJMRV9NRVRBREFUQV9TVEFDS19UUkFDRSA9IFwiYWxpeXVuOnJvczpkaXNhYmxlLXN0YWNrLXRyYWNlXCI7XG4iXX0=
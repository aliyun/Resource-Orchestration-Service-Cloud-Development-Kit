"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReusableStackSynthesizer = void 0;
/**
 * Whether the given Stack Synthesizer is reusable or not
 */
function isReusableStackSynthesizer(x) {
    return !!x.reusableBind;
}
exports.isReusableStackSynthesizer = isReusableStackSynthesizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF5REE7O0dBRUc7QUFDSCxTQUFnQiwwQkFBMEIsQ0FBQyxDQUFvQjtJQUM3RCxPQUFPLENBQUMsQ0FBRSxDQUFTLENBQUMsWUFBWSxDQUFDO0FBQ25DLENBQUM7QUFGRCxnRUFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTeW50aGVzaXNTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4uL3N0YWNrXCI7XG5pbXBvcnQge0ZpbGVBc3NldExvY2F0aW9uLCBGaWxlQXNzZXRTb3VyY2V9IGZyb20gXCIuLi9hc3NldHNcIjtcblxuLyoqXG4gKiBFbmNvZGVzIGluZm9ybWF0aW9uIGhvdyBhIGNlcnRhaW4gU3RhY2sgc2hvdWxkIGJlIGRlcGxveWVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YWNrU3ludGhlc2l6ZXIge1xuICAvKipcbiAgICogQmluZCB0byB0aGUgc3RhY2sgdGhpcyBlbnZpcm9ubWVudCBpcyBnb2luZyB0byBiZSB1c2VkIG9uXG4gICAqXG4gICAqIE11c3QgYmUgY2FsbGVkIGJlZm9yZSBhbnkgb2YgdGhlIG90aGVyIG1ldGhvZHMgYXJlIGNhbGxlZC5cbiAgICovXG4gIGJpbmQoc3RhY2s6IFN0YWNrKTogdm9pZDtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBGaWxlIEFzc2V0XG4gICAqXG4gICAqIFJldHVybnMgdGhlIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlciB0byB0aGUgYXNzZXQgaW5zaWRlIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIGFkZEZpbGVBc3NldChhc3NldDogRmlsZUFzc2V0U291cmNlKTogRmlsZUFzc2V0TG9jYXRpb247XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhlIGFzc29jaWF0ZWQgc3RhY2sgdG8gdGhlIHNlc3Npb25cbiAgICovXG4gIHN5bnRoZXNpemUoc2Vzc2lvbjogSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU3RhY2sgU3ludGhlc2l6ZXJzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIG1vcmUgdGhhbiBvbmUgc3RhY2suXG4gKlxuICogUmVndWxhciBgSVN0YWNrU3ludGhlc2l6ZXJgIGluc3RhbmNlcyBjYW4gb25seSBiZSBib3VuZCB0byBhIFN0YWNrIG9uY2UuXG4gKiBgSVJldXNhYmxlU3RhY2tTeW50aGVzaXplcmAgaW5zdGFuY2VzLlxuICpcbiAqIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLCB0aGlzIGNsYXNzIGluaGVyaXRzIGZyb21cbiAqIGBJU3RhY2tTeW50aGVzaXplcmAsIGJ1dCBpZiBhbiBvYmplY3QgaW1wbGVtZW50cyBgSVJldXNhYmxlU3RhY2tTeW50aGVzaXplcmAsXG4gKiBubyBvdGhlciBtZXRob2RzIHRoYW4gYHJldXNhYmxlQmluZCgpYCB3aWxsIGJlIGNhbGxlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmV1c2FibGVTdGFja1N5bnRoZXNpemVyIGV4dGVuZHMgSVN0YWNrU3ludGhlc2l6ZXIge1xuICAvKipcbiAgICogUHJvZHVjZSBhIGJvdW5kIFN0YWNrIFN5bnRoZXNpemVyIGZvciB0aGUgZ2l2ZW4gc3RhY2suXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIG1heSBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2Ugb24gdGhlIHNhbWUgb2JqZWN0LlxuICAgKi9cbiAgcmV1c2FibGVCaW5kKHN0YWNrOiBTdGFjayk6IElCb3VuZFN0YWNrU3ludGhlc2l6ZXI7XG59XG5cblxuLyoqXG4gKiBBIFN0YWNrIFN5bnRoZXNpemVyLCBvYnRhaW5lZCBmcm9tIGBJUmV1c2FibGVTdGFja1N5bnRoZXNpemVyLmBcbiAqXG4gKiBKdXN0IGEgdHlwZSBhbGlhcyB3aXRoIGEgdmVyeSBjb25jcmV0ZSBjb250cmFjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQm91bmRTdGFja1N5bnRoZXNpemVyIGV4dGVuZHMgSVN0YWNrU3ludGhlc2l6ZXIge1xufVxuXG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gU3RhY2sgU3ludGhlc2l6ZXIgaXMgcmV1c2FibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JldXNhYmxlU3RhY2tTeW50aGVzaXplcih4OiBJU3RhY2tTeW50aGVzaXplcik6IHggaXMgSVJldXNhYmxlU3RhY2tTeW50aGVzaXplciB7XG4gIHJldHVybiAhISh4IGFzIGFueSkucmV1c2FibGVCaW5kO1xufVxuIl19
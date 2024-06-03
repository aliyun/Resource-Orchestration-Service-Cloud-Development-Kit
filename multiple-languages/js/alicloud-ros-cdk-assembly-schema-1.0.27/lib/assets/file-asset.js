"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAssetPackaging = void 0;
/**
 * Packaging strategy for file assets
 */
var FileAssetPackaging;
(function (FileAssetPackaging) {
    /**
     * Upload the given path as a file
     */
    FileAssetPackaging["FILE"] = "file";
    /**
     * The given path is a directory, zip it and upload
     */
    FileAssetPackaging["ZIP_DIRECTORY"] = "zip";
})(FileAssetPackaging || (exports.FileAssetPackaging = FileAssetPackaging = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1hc3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGUtYXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBaUJBOztHQUVHO0FBQ0gsSUFBWSxrQkFVWDtBQVZELFdBQVksa0JBQWtCO0lBQzVCOztPQUVHO0lBQ0gsbUNBQWEsQ0FBQTtJQUViOztPQUVHO0lBQ0gsMkNBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQVZXLGtCQUFrQixrQ0FBbEIsa0JBQWtCLFFBVTdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxpQ2xvdWREZXN0aW5hdGlvbiB9IGZyb20gJy4vYWxpY2xvdWQtZGVzdGluYXRpb24nO1xuXG4vKipcbiAqIEEgZmlsZSBhc3NldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVBc3NldCB7XG4gIC8qKlxuICAgKiBTb3VyY2UgZGVzY3JpcHRpb24gZm9yIGZpbGUgYXNzZXRzXG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IEZpbGVTb3VyY2U7XG5cbiAgLyoqXG4gICAqIERlc3RpbmF0aW9ucyBmb3IgdGhpcyBmaWxlIGFzc2V0XG4gICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbnM6IHsgW2lkOiBzdHJpbmddOiBGaWxlRGVzdGluYXRpb24gfTtcbn1cblxuLyoqXG4gKiBQYWNrYWdpbmcgc3RyYXRlZ3kgZm9yIGZpbGUgYXNzZXRzXG4gKi9cbmV4cG9ydCBlbnVtIEZpbGVBc3NldFBhY2thZ2luZyB7XG4gIC8qKlxuICAgKiBVcGxvYWQgdGhlIGdpdmVuIHBhdGggYXMgYSBmaWxlXG4gICAqL1xuICBGSUxFID0gJ2ZpbGUnLFxuXG4gIC8qKlxuICAgKiBUaGUgZ2l2ZW4gcGF0aCBpcyBhIGRpcmVjdG9yeSwgemlwIGl0IGFuZCB1cGxvYWRcbiAgICovXG4gIFpJUF9ESVJFQ1RPUlkgPSAnemlwJyxcbn1cblxuLyoqXG4gKiBEZXNjcmliZSB0aGUgc291cmNlIG9mIGEgZmlsZSBhc3NldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTb3VyY2Uge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY29tbWFuZCB3aGljaCB3aWxsIHByb2R1Y2UgdGhlIGZpbGUgYXNzZXQgdG8gdXBsb2FkLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIEV4YWN0bHkgb25lIG9mIGBleGVjdXRhYmxlYCBhbmQgYHBhdGhgIGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgZXhlY3V0YWJsZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZXN5c3RlbSBvYmplY3QgdG8gdXBsb2FkXG4gICAqXG4gICAqIFRoaXMgcGF0aCBpcyByZWxhdGl2ZSB0byB0aGUgYXNzZXQgbWFuaWZlc3QgbG9jYXRpb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gRXhhY3RseSBvbmUgb2YgYGV4ZWN1dGFibGVgIGFuZCBgcGF0aGAgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQYWNrYWdpbmcgbWV0aG9kXG4gICAqXG4gICAqIE9ubHkgYWxsb3dlZCB3aGVuIGBwYXRoYCBpcyBzcGVjaWZpZWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IEZJTEVcbiAgICovXG4gIHJlYWRvbmx5IHBhY2thZ2luZz86IEZpbGVBc3NldFBhY2thZ2luZztcbn1cblxuLyoqXG4gKiBXaGVyZSBpbiBPU1MgYnVja2V0IGEgZmlsZSBhc3NldCBuZWVkcyB0byBiZSBwdWJsaXNoZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlRGVzdGluYXRpb24gZXh0ZW5kcyBBbGlDbG91ZERlc3RpbmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBidWNrZXRcbiAgICovXG4gIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRlc3RpbmF0aW9uIG9iamVjdCBrZXlcbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdEtleTogc3RyaW5nO1xufVxuIl19
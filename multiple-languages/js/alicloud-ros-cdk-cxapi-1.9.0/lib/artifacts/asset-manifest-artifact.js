"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetManifestArtifact = void 0;
const fs = require("fs");
const path = require("path");
const cloud_artifact_1 = require("../cloud-artifact");
const ASSET_MANIFEST_ARTIFACT_SYM = Symbol.for('@ros-cdk/cx-api.AssetManifestArtifact');
/**
 * Asset manifest is a description of a set of assets which need to be built and published
 */
class AssetManifestArtifact extends cloud_artifact_1.CloudArtifact {
    /**
     * Checks if `art` is an instance of this class.
     *
     * Use this method instead of `instanceof` to properly detect `AssetManifestArtifact`
     * instances, even when the construct library is symlinked.
     *
     * Explanation: in JavaScript, multiple copies of the `cx-api` library on
     * disk are seen as independent, completely different libraries. As a
     * consequence, the class `AssetManifestArtifact` in each copy of the `cx-api` library
     * is seen as a different class, and an instance of one class will not test as
     * `instanceof` the other class. `npm install` will not create installations
     * like this, but users may manually symlink construct libraries together or
     * use a monorepo tool: in those cases, multiple copies of the `cx-api`
     * library can be accidentally installed, and `instanceof` will behave
     * unpredictably. It is safest to avoid using `instanceof`, and using
     * this type-testing method instead.
     */
    static isAssetManifestArtifact(art) {
        return art && typeof art === 'object' && art[ASSET_MANIFEST_ARTIFACT_SYM];
    }
    constructor(assembly, name, artifact) {
        super(assembly, name, artifact);
        const properties = (this.manifest.properties || {});
        if (!properties.file) {
            throw new Error('Invalid AssetManifestArtifact. Missing "file" property');
        }
        this.file = path.resolve(this.assembly.directory, properties.file);
    }
    /**
     * The Asset Manifest contents
     */
    get contents() {
        if (this._contents !== undefined) {
            return this._contents;
        }
        const contents = this._contents = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
        return contents;
    }
}
exports.AssetManifestArtifact = AssetManifestArtifact;
/**
 * Mark all instances of 'AssetManifestArtifact'
 *
 * Why not put this in the constructor? Because this is a class property,
 * not an instance property. It applies to all instances of the class.
 */
Object.defineProperty(AssetManifestArtifact.prototype, ASSET_MANIFEST_ARTIFACT_SYM, {
    value: true,
    enumerable: false,
    writable: false,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtbWFuaWZlc3QtYXJ0aWZhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3NldC1tYW5pZmVzdC1hcnRpZmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLHNEQUFrRDtBQUdsRCxNQUFNLDJCQUEyQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUV4Rjs7R0FFRztBQUNILE1BQWEscUJBQXNCLFNBQVEsOEJBQWE7SUFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQkc7SUFDSSxNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBUTtRQUM1QyxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQVNELFlBQVksUUFBdUIsRUFBRSxJQUFZLEVBQUUsUUFBbUM7UUFDcEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQXFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFFBQVE7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUVGO0FBbkRELHNEQW1EQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLEVBQUU7SUFDbEYsS0FBSyxFQUFFLElBQUk7SUFDWCxVQUFVLEVBQUUsS0FBSztJQUNqQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hJztcbmltcG9ydCB7IENsb3VkQXJ0aWZhY3QgfSBmcm9tICcuLi9jbG91ZC1hcnRpZmFjdCc7XG5pbXBvcnQgeyBDbG91ZEFzc2VtYmx5IH0gZnJvbSAnLi4vY2xvdWQtYXNzZW1ibHknO1xuXG5jb25zdCBBU1NFVF9NQU5JRkVTVF9BUlRJRkFDVF9TWU0gPSBTeW1ib2wuZm9yKCdAcm9zLWNkay9jeC1hcGkuQXNzZXRNYW5pZmVzdEFydGlmYWN0Jyk7XG5cbi8qKlxuICogQXNzZXQgbWFuaWZlc3QgaXMgYSBkZXNjcmlwdGlvbiBvZiBhIHNldCBvZiBhc3NldHMgd2hpY2ggbmVlZCB0byBiZSBidWlsdCBhbmQgcHVibGlzaGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3NldE1hbmlmZXN0QXJ0aWZhY3QgZXh0ZW5kcyBDbG91ZEFydGlmYWN0IHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgYXJ0YCBpcyBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiBgaW5zdGFuY2VvZmAgdG8gcHJvcGVybHkgZGV0ZWN0IGBBc3NldE1hbmlmZXN0QXJ0aWZhY3RgXG4gICAqIGluc3RhbmNlcywgZXZlbiB3aGVuIHRoZSBjb25zdHJ1Y3QgbGlicmFyeSBpcyBzeW1saW5rZWQuXG4gICAqXG4gICAqIEV4cGxhbmF0aW9uOiBpbiBKYXZhU2NyaXB0LCBtdWx0aXBsZSBjb3BpZXMgb2YgdGhlIGBjeC1hcGlgIGxpYnJhcnkgb25cbiAgICogZGlzayBhcmUgc2VlbiBhcyBpbmRlcGVuZGVudCwgY29tcGxldGVseSBkaWZmZXJlbnQgbGlicmFyaWVzLiBBcyBhXG4gICAqIGNvbnNlcXVlbmNlLCB0aGUgY2xhc3MgYEFzc2V0TWFuaWZlc3RBcnRpZmFjdGAgaW4gZWFjaCBjb3B5IG9mIHRoZSBgY3gtYXBpYCBsaWJyYXJ5XG4gICAqIGlzIHNlZW4gYXMgYSBkaWZmZXJlbnQgY2xhc3MsIGFuZCBhbiBpbnN0YW5jZSBvZiBvbmUgY2xhc3Mgd2lsbCBub3QgdGVzdCBhc1xuICAgKiBgaW5zdGFuY2VvZmAgdGhlIG90aGVyIGNsYXNzLiBgbnBtIGluc3RhbGxgIHdpbGwgbm90IGNyZWF0ZSBpbnN0YWxsYXRpb25zXG4gICAqIGxpa2UgdGhpcywgYnV0IHVzZXJzIG1heSBtYW51YWxseSBzeW1saW5rIGNvbnN0cnVjdCBsaWJyYXJpZXMgdG9nZXRoZXIgb3JcbiAgICogdXNlIGEgbW9ub3JlcG8gdG9vbDogaW4gdGhvc2UgY2FzZXMsIG11bHRpcGxlIGNvcGllcyBvZiB0aGUgYGN4LWFwaWBcbiAgICogbGlicmFyeSBjYW4gYmUgYWNjaWRlbnRhbGx5IGluc3RhbGxlZCwgYW5kIGBpbnN0YW5jZW9mYCB3aWxsIGJlaGF2ZVxuICAgKiB1bnByZWRpY3RhYmx5LiBJdCBpcyBzYWZlc3QgdG8gYXZvaWQgdXNpbmcgYGluc3RhbmNlb2ZgLCBhbmQgdXNpbmdcbiAgICogdGhpcyB0eXBlLXRlc3RpbmcgbWV0aG9kIGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRNYW5pZmVzdEFydGlmYWN0KGFydDogYW55KTogYXJ0IGlzIEFzc2V0TWFuaWZlc3RBcnRpZmFjdCB7XG4gICAgcmV0dXJuIGFydCAmJiB0eXBlb2YgYXJ0ID09PSAnb2JqZWN0JyAmJiBhcnRbQVNTRVRfTUFOSUZFU1RfQVJUSUZBQ1RfU1lNXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIG9mIHRoZSBhc3NldCBtYW5pZmVzdFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGZpbGU6IHN0cmluZztcblxuICBwcml2YXRlIF9jb250ZW50cz86IGN4c2NoZW1hLkFzc2V0TWFuaWZlc3Q7XG5cbiAgY29uc3RydWN0b3IoYXNzZW1ibHk6IENsb3VkQXNzZW1ibHksIG5hbWU6IHN0cmluZywgYXJ0aWZhY3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3QpIHtcbiAgICBzdXBlcihhc3NlbWJseSwgbmFtZSwgYXJ0aWZhY3QpO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9ICh0aGlzLm1hbmlmZXN0LnByb3BlcnRpZXMgfHwge30pIGFzIGN4c2NoZW1hLkFzc2V0TWFuaWZlc3RQcm9wZXJ0aWVzO1xuICAgIGlmICghcHJvcGVydGllcy5maWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXNzZXRNYW5pZmVzdEFydGlmYWN0LiBNaXNzaW5nIFwiZmlsZVwiIHByb3BlcnR5Jyk7XG4gICAgfVxuICAgIHRoaXMuZmlsZSA9IHBhdGgucmVzb2x2ZSh0aGlzLmFzc2VtYmx5LmRpcmVjdG9yeSwgcHJvcGVydGllcy5maWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgQXNzZXQgTWFuaWZlc3QgY29udGVudHNcbiAgICovXG4gIHB1YmxpYyBnZXQgY29udGVudHMoKTogY3hzY2hlbWEuQXNzZXRNYW5pZmVzdCB7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZW50cztcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50cyA9IHRoaXMuX2NvbnRlbnRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmModGhpcy5maWxlLCAndXRmLTgnKSk7XG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbn1cblxuLyoqXG4gKiBNYXJrIGFsbCBpbnN0YW5jZXMgb2YgJ0Fzc2V0TWFuaWZlc3RBcnRpZmFjdCdcbiAqXG4gKiBXaHkgbm90IHB1dCB0aGlzIGluIHRoZSBjb25zdHJ1Y3Rvcj8gQmVjYXVzZSB0aGlzIGlzIGEgY2xhc3MgcHJvcGVydHksXG4gKiBub3QgYW4gaW5zdGFuY2UgcHJvcGVydHkuIEl0IGFwcGxpZXMgdG8gYWxsIGluc3RhbmNlcyBvZiB0aGUgY2xhc3MuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBc3NldE1hbmlmZXN0QXJ0aWZhY3QucHJvdG90eXBlLCBBU1NFVF9NQU5JRkVTVF9BUlRJRkFDVF9TWU0sIHtcbiAgdmFsdWU6IHRydWUsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG59KTtcbiJdfQ==
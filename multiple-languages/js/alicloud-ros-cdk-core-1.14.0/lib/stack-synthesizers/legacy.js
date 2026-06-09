"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyStackSynthesizer = void 0;
const construct_compat_1 = require("../construct-compat");
const _shared_1 = require("./_shared");
const stack_synthesizer_1 = require("./stack-synthesizer");
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const cxapi = require("@alicloud/ros-cdk-cxapi");
const ros_fn_1 = require("../ros-fn");
const asset_parameters_1 = require("../private/asset-parameters");
/**
 * Use the CDK classic way of referencing assets
 *
 * This synthesizer will generate ROS parameters for every referenced
 * asset, and use the CLI's current credentials to deploy the stack.
 *
 * - It does not support cross-account deployment (the CLI must have credentials
 *   to the account you are trying to deploy to).
 * - It cannot be used with **CDK Pipelines**. To deploy using CDK Pipelines,
 *   you must use the `DefaultStackSynthesizer`.
 * - Each asset will take up a ROS Parameter in your template. Keep in
 *   mind that there is a maximum of 200 parameters in a ROS template.
 *   To use deterministic asset locations instead, use `CliCredentialsStackSynthesizer`.
 *
 * Be aware that your CLI credentials must be valid for the duration of the
 * entire deployment. If you are using session credentials, make sure the
 * session lifetime is long enough.
 */
class LegacyStackSynthesizer extends stack_synthesizer_1.StackSynthesizer {
    constructor() {
        super(...arguments);
        this.cycle = false;
    }
    addFileAsset(asset) {
        // Backwards compatibility hack. We have a number of conflicting goals here:
        if (this.cycle) {
            return this.doAddFileAsset(asset);
        }
        this.cycle = true;
        try {
            const stack = this.boundStack;
            return withoutDeprecationWarnings(() => stack.synthesizer.addFileAsset(asset));
        }
        finally {
            this.cycle = false;
        }
    }
    /**
     * Synthesize the associated stack to the session
     */
    synthesize(session) {
        this.synthesizeTemplate(session);
        // Just do the default stuff, nothing special
        this.emitArtifact(session);
    }
    /**
     * Produce a bound Stack Synthesizer for the given stack.
     *
     * This method may be called more than once on the same object.
     */
    reusableBind(stack) {
        // Create a copy of the current object and bind that
        const copy = Object.create(this);
        copy.bind(stack);
        return copy;
    }
    doAddFileAsset(asset) {
        let params = this.assetParameters.node.tryFindChild(asset.sourceHash);
        if (!params) {
            params = new asset_parameters_1.FileAssetParameters(this.assetParameters, asset.sourceHash);
            if (!asset.fileName || !asset.packaging) {
                throw new Error(`LegacyStackSynthesizer does not support this type of file asset: ${JSON.stringify(asset)}`);
            }
            const metadata = {
                path: asset.fileName,
                id: asset.sourceHash,
                packaging: asset.packaging,
                sourceHash: asset.sourceHash,
                ossBucketParameter: params.bucketNameParameter.logicalId,
                ossKeyParameter: params.objectKeyParameter.logicalId,
                artifactHashParameter: params.artifactHashParameter.logicalId,
            };
            this.boundStack.node.addMetadata(cxschema.ArtifactMetadataEntryType.ASSET, metadata);
        }
        const bucketName = params.bucketNameParameter.valueAsString;
        // key is prefix|postfix
        const encodedKey = params.objectKeyParameter.valueAsString;
        const ossPrefix = ros_fn_1.Fn.select(0, ros_fn_1.Fn.split(cxapi.ASSET_PREFIX_SEPARATOR, encodedKey));
        const ossFilename = ros_fn_1.Fn.select(1, ros_fn_1.Fn.split(cxapi.ASSET_PREFIX_SEPARATOR, encodedKey));
        const objectKey = `${ossPrefix}${ossFilename}`;
        const httpUrl = `https://${bucketName}.oss-${this.boundStack.region}.aliyuncs.com/${objectKey}`;
        return { bucketName, objectKey, httpUrl, region: this.boundStack.region };
    }
    get assetParameters() {
        (0, _shared_1.assertBound)(this.boundStack);
        if (!this._assetParameters) {
            this._assetParameters = new construct_compat_1.Construct(this.boundStack, 'AssetParameters');
        }
        return this._assetParameters;
    }
}
exports.LegacyStackSynthesizer = LegacyStackSynthesizer;
function withoutDeprecationWarnings(block) {
    const orig = process.env.JSII_DEPRECATED;
    process.env.JSII_DEPRECATED = 'quiet';
    try {
        return block();
    }
    finally {
        process.env.JSII_DEPRECATED = orig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVnYWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFnRDtBQUNoRCx1Q0FBd0M7QUFDeEMsMkRBQXVEO0FBR3ZELDhEQUE4RDtBQUM5RCxpREFBaUQ7QUFFakQsc0NBQStCO0FBQy9CLGtFQUFrRTtBQUdsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLG9DQUFnQjtJQUE1RDs7UUFDVSxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBd0Z4QixDQUFDO0lBakZRLFlBQVksQ0FBQyxLQUFzQjtRQUN4Qyw0RUFBNEU7UUFDNUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUIsT0FBTywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO2dCQUFTO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVLENBQUMsT0FBMEI7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLEtBQVk7UUFDOUIsb0RBQW9EO1FBQ3BELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFD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QjtZQUFTO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJy4uL2NvbnN0cnVjdC1jb21wYXQnO1xuaW1wb3J0IHsgYXNzZXJ0Qm91bmQgfSBmcm9tICcuL19zaGFyZWQnO1xuaW1wb3J0IHsgU3RhY2tTeW50aGVzaXplciB9IGZyb20gJy4vc3RhY2stc3ludGhlc2l6ZXInO1xuaW1wb3J0IHsgSVN5bnRoZXNpc1Nlc3Npb24gfSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgSVJldXNhYmxlU3RhY2tTeW50aGVzaXplciwgSUJvdW5kU3RhY2tTeW50aGVzaXplciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0IHsgRmlsZUFzc2V0TG9jYXRpb24sIEZpbGVBc3NldFNvdXJjZSB9IGZyb20gJy4uL2Fzc2V0cyc7XG5pbXBvcnQgeyBGbiB9IGZyb20gJy4uL3Jvcy1mbic7XG5pbXBvcnQgeyBGaWxlQXNzZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vcHJpdmF0ZS9hc3NldC1wYXJhbWV0ZXJzJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vc3RhY2snO1xuXG4vKipcbiAqIFVzZSB0aGUgQ0RLIGNsYXNzaWMgd2F5IG9mIHJlZmVyZW5jaW5nIGFzc2V0c1xuICpcbiAqIFRoaXMgc3ludGhlc2l6ZXIgd2lsbCBnZW5lcmF0ZSBST1MgcGFyYW1ldGVycyBmb3IgZXZlcnkgcmVmZXJlbmNlZFxuICogYXNzZXQsIGFuZCB1c2UgdGhlIENMSSdzIGN1cnJlbnQgY3JlZGVudGlhbHMgdG8gZGVwbG95IHRoZSBzdGFjay5cbiAqXG4gKiAtIEl0IGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MtYWNjb3VudCBkZXBsb3ltZW50ICh0aGUgQ0xJIG11c3QgaGF2ZSBjcmVkZW50aWFsc1xuICogICB0byB0aGUgYWNjb3VudCB5b3UgYXJlIHRyeWluZyB0byBkZXBsb3kgdG8pLlxuICogLSBJdCBjYW5ub3QgYmUgdXNlZCB3aXRoICoqQ0RLIFBpcGVsaW5lcyoqLiBUbyBkZXBsb3kgdXNpbmcgQ0RLIFBpcGVsaW5lcyxcbiAqICAgeW91IG11c3QgdXNlIHRoZSBgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXJgLlxuICogLSBFYWNoIGFzc2V0IHdpbGwgdGFrZSB1cCBhIFJPUyBQYXJhbWV0ZXIgaW4geW91ciB0ZW1wbGF0ZS4gS2VlcCBpblxuICogICBtaW5kIHRoYXQgdGhlcmUgaXMgYSBtYXhpbXVtIG9mIDIwMCBwYXJhbWV0ZXJzIGluIGEgUk9TIHRlbXBsYXRlLlxuICogICBUbyB1c2UgZGV0ZXJtaW5pc3RpYyBhc3NldCBsb2NhdGlvbnMgaW5zdGVhZCwgdXNlIGBDbGlDcmVkZW50aWFsc1N0YWNrU3ludGhlc2l6ZXJgLlxuICpcbiAqIEJlIGF3YXJlIHRoYXQgeW91ciBDTEkgY3JlZGVudGlhbHMgbXVzdCBiZSB2YWxpZCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxuICogZW50aXJlIGRlcGxveW1lbnQuIElmIHlvdSBhcmUgdXNpbmcgc2Vzc2lvbiBjcmVkZW50aWFscywgbWFrZSBzdXJlIHRoZVxuICogc2Vzc2lvbiBsaWZldGltZSBpcyBsb25nIGVub3VnaC5cbiAqL1xuZXhwb3J0IGNsYXNzIExlZ2FjeVN0YWNrU3ludGhlc2l6ZXIgZXh0ZW5kcyBTdGFja1N5bnRoZXNpemVyIGltcGxlbWVudHMgSVJldXNhYmxlU3RhY2tTeW50aGVzaXplciwgSUJvdW5kU3RhY2tTeW50aGVzaXplciB7XG4gIHByaXZhdGUgY3ljbGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5jbHVkZXMgYWxsIHBhcmFtZXRlcnMgc3ludGhlc2l6ZWQgZm9yIGFzc2V0cyAobGF6eSkuXG4gICAqL1xuICBwcml2YXRlIF9hc3NldFBhcmFtZXRlcnM/OiBDb25zdHJ1Y3Q7XG5cbiAgcHVibGljIGFkZEZpbGVBc3NldChhc3NldDogRmlsZUFzc2V0U291cmNlKTogRmlsZUFzc2V0TG9jYXRpb24ge1xuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGhhY2suIFdlIGhhdmUgYSBudW1iZXIgb2YgY29uZmxpY3RpbmcgZ29hbHMgaGVyZTpcbiAgICBpZiAodGhpcy5jeWNsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9BZGRGaWxlQXNzZXQoYXNzZXQpO1xuICAgIH1cbiAgICB0aGlzLmN5Y2xlID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLmJvdW5kU3RhY2s7XG4gICAgICByZXR1cm4gd2l0aG91dERlcHJlY2F0aW9uV2FybmluZ3MoKCkgPT4gc3RhY2suc3ludGhlc2l6ZXIuYWRkRmlsZUFzc2V0KGFzc2V0KSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuY3ljbGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3ludGhlc2l6ZSB0aGUgYXNzb2NpYXRlZCBzdGFjayB0byB0aGUgc2Vzc2lvblxuICAgKi9cbiAgcHVibGljIHN5bnRoZXNpemUoc2Vzc2lvbjogSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnN5bnRoZXNpemVUZW1wbGF0ZShzZXNzaW9uKTtcblxuICAgIC8vIEp1c3QgZG8gdGhlIGRlZmF1bHQgc3R1ZmYsIG5vdGhpbmcgc3BlY2lhbFxuICAgIHRoaXMuZW1pdEFydGlmYWN0KHNlc3Npb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgYSBib3VuZCBTdGFjayBTeW50aGVzaXplciBmb3IgdGhlIGdpdmVuIHN0YWNrLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlIG9uIHRoZSBzYW1lIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyByZXVzYWJsZUJpbmQoc3RhY2s6IFN0YWNrKTogSUJvdW5kU3RhY2tTeW50aGVzaXplciB7XG4gICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgY3VycmVudCBvYmplY3QgYW5kIGJpbmQgdGhhdFxuICAgIGNvbnN0IGNvcHkgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgIGNvcHkuYmluZChzdGFjayk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cblxuICBwcml2YXRlIGRvQWRkRmlsZUFzc2V0KGFzc2V0OiBGaWxlQXNzZXRTb3VyY2UpOiBGaWxlQXNzZXRMb2NhdGlvbiB7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuYXNzZXRQYXJhbWV0ZXJzLm5vZGUudHJ5RmluZENoaWxkKGFzc2V0LnNvdXJjZUhhc2gpIGFzIEZpbGVBc3NldFBhcmFtZXRlcnM7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IG5ldyBGaWxlQXNzZXRQYXJhbWV0ZXJzKHRoaXMuYXNzZXRQYXJhbWV0ZXJzLCBhc3NldC5zb3VyY2VIYXNoKTtcblxuICAgICAgaWYgKCFhc3NldC5maWxlTmFtZSB8fCAhYXNzZXQucGFja2FnaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTGVnYWN5U3RhY2tTeW50aGVzaXplciBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBmaWxlIGFzc2V0OiAke0pTT04uc3RyaW5naWZ5KGFzc2V0KX1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0YWRhdGE6IGN4c2NoZW1hLkZpbGVBc3NldE1ldGFkYXRhRW50cnkgPSB7XG4gICAgICAgIHBhdGg6IGFzc2V0LmZpbGVOYW1lLFxuICAgICAgICBpZDogYXNzZXQuc291cmNlSGFzaCxcbiAgICAgICAgcGFja2FnaW5nOiBhc3NldC5wYWNrYWdpbmcsXG4gICAgICAgIHNvdXJjZUhhc2g6IGFzc2V0LnNvdXJjZUhhc2gsXG5cbiAgICAgICAgb3NzQnVja2V0UGFyYW1ldGVyOiBwYXJhbXMuYnVja2V0TmFtZVBhcmFtZXRlci5sb2dpY2FsSWQsXG4gICAgICAgIG9zc0tleVBhcmFtZXRlcjogcGFyYW1zLm9iamVjdEtleVBhcmFtZXRlci5sb2dpY2FsSWQsXG4gICAgICAgIGFydGlmYWN0SGFzaFBhcmFtZXRlcjogcGFyYW1zLmFydGlmYWN0SGFzaFBhcmFtZXRlci5sb2dpY2FsSWQsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmJvdW5kU3RhY2subm9kZS5hZGRNZXRhZGF0YShjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkFTU0VULCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IHBhcmFtcy5idWNrZXROYW1lUGFyYW1ldGVyLnZhbHVlQXNTdHJpbmc7XG5cbiAgICAvLyBrZXkgaXMgcHJlZml4fHBvc3RmaXhcbiAgICBjb25zdCBlbmNvZGVkS2V5ID0gcGFyYW1zLm9iamVjdEtleVBhcmFtZXRlci52YWx1ZUFzU3RyaW5nO1xuXG4gICAgY29uc3Qgb3NzUHJlZml4ID0gRm4uc2VsZWN0KDAsIEZuLnNwbGl0KGN4YXBpLkFTU0VUX1BSRUZJWF9TRVBBUkFUT1IsIGVuY29kZWRLZXkpKTtcbiAgICBjb25zdCBvc3NGaWxlbmFtZSA9IEZuLnNlbGVjdCgxLCBGbi5zcGxpdChjeGFwaS5BU1NFVF9QUkVGSVhfU0VQQVJBVE9SLCBlbmNvZGVkS2V5KSk7XG4gICAgY29uc3Qgb2JqZWN0S2V5ID0gYCR7b3NzUHJlZml4fSR7b3NzRmlsZW5hbWV9YDtcblxuICAgIGNvbnN0IGh0dHBVcmwgPSBgaHR0cHM6Ly8ke2J1Y2tldE5hbWV9Lm9zcy0ke3RoaXMuYm91bmRTdGFjay5yZWdpb259LmFsaXl1bmNzLmNvbS8ke29iamVjdEtleX1gO1xuXG4gICAgcmV0dXJuIHsgYnVja2V0TmFtZSwgb2JqZWN0S2V5LCBodHRwVXJsLCByZWdpb246IHRoaXMuYm91bmRTdGFjay5yZWdpb24gfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGFzc2V0UGFyYW1ldGVycygpIHtcbiAgICBhc3NlcnRCb3VuZCh0aGlzLmJvdW5kU3RhY2spO1xuXG4gICAgaWYgKCF0aGlzLl9hc3NldFBhcmFtZXRlcnMpIHtcbiAgICAgIHRoaXMuX2Fzc2V0UGFyYW1ldGVycyA9IG5ldyBDb25zdHJ1Y3QodGhpcy5ib3VuZFN0YWNrLCAnQXNzZXRQYXJhbWV0ZXJzJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hc3NldFBhcmFtZXRlcnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2l0aG91dERlcHJlY2F0aW9uV2FybmluZ3M8QT4oYmxvY2s6ICgpID0+IEEpOiBBIHtcbiAgY29uc3Qgb3JpZyA9IHByb2Nlc3MuZW52LkpTSUlfREVQUkVDQVRFRDtcbiAgcHJvY2Vzcy5lbnYuSlNJSV9ERVBSRUNBVEVEID0gJ3F1aWV0JztcbiAgdHJ5IHtcbiAgICByZXR1cm4gYmxvY2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwcm9jZXNzLmVudi5KU0lJX0RFUFJFQ0FURUQgPSBvcmlnO1xuICB9XG59XG4iXX0=
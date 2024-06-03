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
        _shared_1.assertBound(this.boundStack);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVnYWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFnRDtBQUNoRCx1Q0FBd0M7QUFDeEMsMkRBQXVEO0FBR3ZELDhEQUE4RDtBQUM5RCxpREFBaUQ7QUFFakQsc0NBQStCO0FBQy9CLGtFQUFrRTtBQUdsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLG9DQUFnQjtJQUE1RDs7UUFDVSxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBd0Z4QixDQUFDO0lBakZRLFlBQVksQ0FBQyxLQUFzQjtRQUN4Qyw0RUFBNEU7UUFDNUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUIsT0FBTywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO2dCQUFTO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVLENBQUMsT0FBMEI7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLEtBQVk7UUFDOUIsb0RBQW9EO1FBQ3BELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFD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UztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztLQUNwQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICcuLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IGFzc2VydEJvdW5kIH0gZnJvbSAnLi9fc2hhcmVkJztcbmltcG9ydCB7IFN0YWNrU3ludGhlc2l6ZXIgfSBmcm9tICcuL3N0YWNrLXN5bnRoZXNpemVyJztcbmltcG9ydCB7IElTeW50aGVzaXNTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IElSZXVzYWJsZVN0YWNrU3ludGhlc2l6ZXIsIElCb3VuZFN0YWNrU3ludGhlc2l6ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCB7IEZpbGVBc3NldExvY2F0aW9uLCBGaWxlQXNzZXRTb3VyY2UgfSBmcm9tICcuLi9hc3NldHMnO1xuaW1wb3J0IHsgRm4gfSBmcm9tICcuLi9yb3MtZm4nO1xuaW1wb3J0IHsgRmlsZUFzc2V0UGFyYW1ldGVycyB9IGZyb20gJy4uL3ByaXZhdGUvYXNzZXQtcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uL3N0YWNrJztcblxuLyoqXG4gKiBVc2UgdGhlIENESyBjbGFzc2ljIHdheSBvZiByZWZlcmVuY2luZyBhc3NldHNcbiAqXG4gKiBUaGlzIHN5bnRoZXNpemVyIHdpbGwgZ2VuZXJhdGUgUk9TIHBhcmFtZXRlcnMgZm9yIGV2ZXJ5IHJlZmVyZW5jZWRcbiAqIGFzc2V0LCBhbmQgdXNlIHRoZSBDTEkncyBjdXJyZW50IGNyZWRlbnRpYWxzIHRvIGRlcGxveSB0aGUgc3RhY2suXG4gKlxuICogLSBJdCBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzLWFjY291bnQgZGVwbG95bWVudCAodGhlIENMSSBtdXN0IGhhdmUgY3JlZGVudGlhbHNcbiAqICAgdG8gdGhlIGFjY291bnQgeW91IGFyZSB0cnlpbmcgdG8gZGVwbG95IHRvKS5cbiAqIC0gSXQgY2Fubm90IGJlIHVzZWQgd2l0aCAqKkNESyBQaXBlbGluZXMqKi4gVG8gZGVwbG95IHVzaW5nIENESyBQaXBlbGluZXMsXG4gKiAgIHlvdSBtdXN0IHVzZSB0aGUgYERlZmF1bHRTdGFja1N5bnRoZXNpemVyYC5cbiAqIC0gRWFjaCBhc3NldCB3aWxsIHRha2UgdXAgYSBST1MgUGFyYW1ldGVyIGluIHlvdXIgdGVtcGxhdGUuIEtlZXAgaW5cbiAqICAgbWluZCB0aGF0IHRoZXJlIGlzIGEgbWF4aW11bSBvZiAyMDAgcGFyYW1ldGVycyBpbiBhIFJPUyB0ZW1wbGF0ZS5cbiAqICAgVG8gdXNlIGRldGVybWluaXN0aWMgYXNzZXQgbG9jYXRpb25zIGluc3RlYWQsIHVzZSBgQ2xpQ3JlZGVudGlhbHNTdGFja1N5bnRoZXNpemVyYC5cbiAqXG4gKiBCZSBhd2FyZSB0aGF0IHlvdXIgQ0xJIGNyZWRlbnRpYWxzIG11c3QgYmUgdmFsaWQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGVcbiAqIGVudGlyZSBkZXBsb3ltZW50LiBJZiB5b3UgYXJlIHVzaW5nIHNlc3Npb24gY3JlZGVudGlhbHMsIG1ha2Ugc3VyZSB0aGVcbiAqIHNlc3Npb24gbGlmZXRpbWUgaXMgbG9uZyBlbm91Z2guXG4gKi9cbmV4cG9ydCBjbGFzcyBMZWdhY3lTdGFja1N5bnRoZXNpemVyIGV4dGVuZHMgU3RhY2tTeW50aGVzaXplciBpbXBsZW1lbnRzIElSZXVzYWJsZVN0YWNrU3ludGhlc2l6ZXIsIElCb3VuZFN0YWNrU3ludGhlc2l6ZXIge1xuICBwcml2YXRlIGN5Y2xlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEluY2x1ZGVzIGFsbCBwYXJhbWV0ZXJzIHN5bnRoZXNpemVkIGZvciBhc3NldHMgKGxhenkpLlxuICAgKi9cbiAgcHJpdmF0ZSBfYXNzZXRQYXJhbWV0ZXJzPzogQ29uc3RydWN0O1xuXG4gIHB1YmxpYyBhZGRGaWxlQXNzZXQoYXNzZXQ6IEZpbGVBc3NldFNvdXJjZSk6IEZpbGVBc3NldExvY2F0aW9uIHtcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBoYWNrLiBXZSBoYXZlIGEgbnVtYmVyIG9mIGNvbmZsaWN0aW5nIGdvYWxzIGhlcmU6XG4gICAgaWYgKHRoaXMuY3ljbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvQWRkRmlsZUFzc2V0KGFzc2V0KTtcbiAgICB9XG4gICAgdGhpcy5jeWNsZSA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5ib3VuZFN0YWNrO1xuICAgICAgcmV0dXJuIHdpdGhvdXREZXByZWNhdGlvbldhcm5pbmdzKCgpID0+IHN0YWNrLnN5bnRoZXNpemVyLmFkZEZpbGVBc3NldChhc3NldCkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmN5Y2xlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhlIGFzc29jaWF0ZWQgc3RhY2sgdG8gdGhlIHNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBzeW50aGVzaXplKHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zeW50aGVzaXplVGVtcGxhdGUoc2Vzc2lvbik7XG5cbiAgICAvLyBKdXN0IGRvIHRoZSBkZWZhdWx0IHN0dWZmLCBub3RoaW5nIHNwZWNpYWxcbiAgICB0aGlzLmVtaXRBcnRpZmFjdChzZXNzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIGEgYm91bmQgU3RhY2sgU3ludGhlc2l6ZXIgZm9yIHRoZSBnaXZlbiBzdGFjay5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgbWF5IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZSBvbiB0aGUgc2FtZSBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgcmV1c2FibGVCaW5kKHN0YWNrOiBTdGFjayk6IElCb3VuZFN0YWNrU3ludGhlc2l6ZXIge1xuICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGFuZCBiaW5kIHRoYXRcbiAgICBjb25zdCBjb3B5ID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICBjb3B5LmJpbmQoc3RhY2spO1xuICAgIHJldHVybiBjb3B5O1xuICB9XG5cbiAgcHJpdmF0ZSBkb0FkZEZpbGVBc3NldChhc3NldDogRmlsZUFzc2V0U291cmNlKTogRmlsZUFzc2V0TG9jYXRpb24ge1xuICAgIGxldCBwYXJhbXMgPSB0aGlzLmFzc2V0UGFyYW1ldGVycy5ub2RlLnRyeUZpbmRDaGlsZChhc3NldC5zb3VyY2VIYXNoKSBhcyBGaWxlQXNzZXRQYXJhbWV0ZXJzO1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICBwYXJhbXMgPSBuZXcgRmlsZUFzc2V0UGFyYW1ldGVycyh0aGlzLmFzc2V0UGFyYW1ldGVycywgYXNzZXQuc291cmNlSGFzaCk7XG5cbiAgICAgIGlmICghYXNzZXQuZmlsZU5hbWUgfHwgIWFzc2V0LnBhY2thZ2luZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExlZ2FjeVN0YWNrU3ludGhlc2l6ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgZmlsZSBhc3NldDogJHtKU09OLnN0cmluZ2lmeShhc3NldCl9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGFkYXRhOiBjeHNjaGVtYS5GaWxlQXNzZXRNZXRhZGF0YUVudHJ5ID0ge1xuICAgICAgICBwYXRoOiBhc3NldC5maWxlTmFtZSxcbiAgICAgICAgaWQ6IGFzc2V0LnNvdXJjZUhhc2gsXG4gICAgICAgIHBhY2thZ2luZzogYXNzZXQucGFja2FnaW5nLFxuICAgICAgICBzb3VyY2VIYXNoOiBhc3NldC5zb3VyY2VIYXNoLFxuXG4gICAgICAgIG9zc0J1Y2tldFBhcmFtZXRlcjogcGFyYW1zLmJ1Y2tldE5hbWVQYXJhbWV0ZXIubG9naWNhbElkLFxuICAgICAgICBvc3NLZXlQYXJhbWV0ZXI6IHBhcmFtcy5vYmplY3RLZXlQYXJhbWV0ZXIubG9naWNhbElkLFxuICAgICAgICBhcnRpZmFjdEhhc2hQYXJhbWV0ZXI6IHBhcmFtcy5hcnRpZmFjdEhhc2hQYXJhbWV0ZXIubG9naWNhbElkLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5ib3VuZFN0YWNrLm5vZGUuYWRkTWV0YWRhdGEoY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5BU1NFVCwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1Y2tldE5hbWUgPSBwYXJhbXMuYnVja2V0TmFtZVBhcmFtZXRlci52YWx1ZUFzU3RyaW5nO1xuXG4gICAgLy8ga2V5IGlzIHByZWZpeHxwb3N0Zml4XG4gICAgY29uc3QgZW5jb2RlZEtleSA9IHBhcmFtcy5vYmplY3RLZXlQYXJhbWV0ZXIudmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0IG9zc1ByZWZpeCA9IEZuLnNlbGVjdCgwLCBGbi5zcGxpdChjeGFwaS5BU1NFVF9QUkVGSVhfU0VQQVJBVE9SLCBlbmNvZGVkS2V5KSk7XG4gICAgY29uc3Qgb3NzRmlsZW5hbWUgPSBGbi5zZWxlY3QoMSwgRm4uc3BsaXQoY3hhcGkuQVNTRVRfUFJFRklYX1NFUEFSQVRPUiwgZW5jb2RlZEtleSkpO1xuICAgIGNvbnN0IG9iamVjdEtleSA9IGAke29zc1ByZWZpeH0ke29zc0ZpbGVuYW1lfWA7XG5cbiAgICBjb25zdCBodHRwVXJsID0gYGh0dHBzOi8vJHtidWNrZXROYW1lfS5vc3MtJHt0aGlzLmJvdW5kU3RhY2sucmVnaW9ufS5hbGl5dW5jcy5jb20vJHtvYmplY3RLZXl9YDtcblxuICAgIHJldHVybiB7IGJ1Y2tldE5hbWUsIG9iamVjdEtleSwgaHR0cFVybCwgcmVnaW9uOiB0aGlzLmJvdW5kU3RhY2sucmVnaW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldCBhc3NldFBhcmFtZXRlcnMoKSB7XG4gICAgYXNzZXJ0Qm91bmQodGhpcy5ib3VuZFN0YWNrKTtcblxuICAgIGlmICghdGhpcy5fYXNzZXRQYXJhbWV0ZXJzKSB7XG4gICAgICB0aGlzLl9hc3NldFBhcmFtZXRlcnMgPSBuZXcgQ29uc3RydWN0KHRoaXMuYm91bmRTdGFjaywgJ0Fzc2V0UGFyYW1ldGVycycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXNzZXRQYXJhbWV0ZXJzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpdGhvdXREZXByZWNhdGlvbldhcm5pbmdzPEE+KGJsb2NrOiAoKSA9PiBBKTogQSB7XG4gIGNvbnN0IG9yaWcgPSBwcm9jZXNzLmVudi5KU0lJX0RFUFJFQ0FURUQ7XG4gIHByb2Nlc3MuZW52LkpTSUlfREVQUkVDQVRFRCA9ICdxdWlldCc7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGJsb2NrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgcHJvY2Vzcy5lbnYuSlNJSV9ERVBSRUNBVEVEID0gb3JpZztcbiAgfVxufVxuIl19
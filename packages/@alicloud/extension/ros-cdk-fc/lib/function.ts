import * as ros from "@alicloud/ros-cdk-core";
import { Function, RosFunction } from "@alicloud/ros-cdk-fc";
import { Bucket } from "@alicloud/ros-cdk-oss";
import { Asset } from "@alicloud/ros-cdk-ossassets";

export class ExtensionFunction extends Function {
    /**
     * Function handler code as an OSS object.
     * @param bucket The OSS bucket
     * @param key The object key
     */
    public codeFromBucket(bucket: Bucket, key: string) {
        let fcFunction= this.resource as RosFunction;
        if (fcFunction.code !== undefined) {
            throw new Error("Function code already set");
        }
        fcFunction.code = {
            ossBucketName: bucket.attrName,
            ossObjectName: key
        };
    }

    /**
     * Inline code for FC fcFunction handler
     * @param code The actual handler code (limited to 4KiB)
     */
    public codeFromInline(code: string) {
        let fcFunction= this.resource as RosFunction;
        if (fcFunction.code !== undefined) {
            throw new Error("Function code already set");
        }
        fcFunction.code = {
            sourceCode: code
        };
    }

    /**
     * Loads the fcFunction code from a local disk path.
     *
     * @param path Either a directory with the Lambda code bundle or a .zip file
     */
    public codeFromAsset(path: string) {
        let fcFunction= this.resource as RosFunction;
        if (fcFunction.code !== undefined) {
            throw new Error("Function code already set");
        }

        const suffix = ros.generateRandomString(5);
        const asset = new Asset(this.scope, `CodeAsset${suffix}`, {
            path
        });
        if (!asset.isZipArchive) {
            throw new Error(`Asset must be a .zip file or a directory (${path})`);
        }
        fcFunction.code = {
            ossBucketName: asset.bucketName,
            ossObjectName: asset.objectKey
        };
    }
}
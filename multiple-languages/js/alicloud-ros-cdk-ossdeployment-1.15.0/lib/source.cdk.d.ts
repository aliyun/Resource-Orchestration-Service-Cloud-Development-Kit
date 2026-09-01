import * as ros from '@alicloud/ros-cdk-core';
import { Bucket } from '@alicloud/ros-cdk-oss';
import { AssetOptions } from '@alicloud/ros-cdk-ossassets';
/**
 * Source information.
 */
export interface SourceConfig {
    /**
     * The name of source bucket to deploy from.
     */
    readonly bucket: string | ros.IResolvable;
    /**
     * An object key in the source bucket to deploy from.
     */
    readonly objectKey: string | ros.IResolvable;
    /**
     * The name of source local file to deploy from.
     */
    readonly fileName?: string;
}
/**
* Represents a source for bucket deployments.
*/
export interface ISource {
    /**
     * Binds the source to a bucket deployment.
     * @param scope The construct tree context.
     */
    bind(scope: ros.Construct): SourceConfig;
}
/**
 * Specifies bucket deployment source.
 *
 * Usage:
 *
 *     Source.bucket(bucketName, objectKey)
 *     Source.asset('/local/path/to/directory')
 *     Source.asset('/local/path/to/a/file.zip')
 *     Source.data('hello/world/file.txt', 'Hello, world!')
 *     Source.jsonData('config.json', { key: value })
 *
 */
export declare class Source {
    /**
     * Uses a file stored in an OSS bucket as the source for the destination bucket contents.
     *
     * Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.
     *
     * @param bucket The OSS Bucket
     * @param objectKey The path of
     */
    static bucket(bucket: Bucket | string | ros.IResolvable, objectKey: string | ros.IResolvable): ISource;
    /**
     * Uses a local file path as the source of the target bucket contents.
     *
     * ROS CDK will create a temporary bucket and upload the files you want to upload to it.
     * Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
     *
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     *
     * @param path The path to a local file or a directory.
     * @param options Options for the Asset.
     * @param objectPrefix The prefix of object key. You can use it to specify the location of the object in the target bucket.
     */
    static asset(path: string, options?: AssetOptions, objectPrefix?: string): ISource;
    /**
     * Deploys an object with the specified string contents into the bucket.
     *
     * To store a JSON object use `Source.jsonData()`.
     *
     * @param objectKey The destination OSS object key (relative to the root of the
     * OSS deployment).
     * @param data The data to be stored in the object.
     */
    static data(objectKey: string, data: string): ISource;
    /**
     * Deploys an object with the specified JSON object into the bucket.
     *
     * @param objectKey The destination OSS object key (relative to the root of the
     * OSS deployment).
     * @param obj A JSON object.
     */
    static jsonData(objectKey: string, obj: any): ISource;
}

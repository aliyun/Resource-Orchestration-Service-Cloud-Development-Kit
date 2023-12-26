import * as ros from '@alicloud/ros-cdk-core';
import { RosDirectory } from './oss.generated';
export { RosDirectory as DirectoryProperty };
/**
 * Properties for defining a `Directory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export interface DirectoryProps {
    /**
     * Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * Property directoryName: Directory name
     */
    readonly directoryName: string | ros.IResolvable;
    /**
     * Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Directory`DATASOURCE::OSS::Buckets is used to query an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDirectory`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export declare class Directory extends ros.Resource {
    /**
     * Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable;
    /**
     * Attribute DirectoryName: The name of Directory
     */
    readonly attrDirectoryName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DirectoryProps, enableResourcePropertyConstraint?: boolean);
}

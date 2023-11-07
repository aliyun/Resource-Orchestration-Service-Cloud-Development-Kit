import * as ros from '@alicloud/ros-cdk-core';
import { RosDirectory } from './oss.generated';
export { RosDirectory as DirectoryProperty };
/**
 * Properties for defining a `ALIYUN::OSS::Directory`
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
 * A ROS resource type:  `ALIYUN::OSS::Directory`
 */
export declare class Directory extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable;
    /**
     * Attribute DirectoryName: The name of Directory
     */
    readonly attrDirectoryName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OSS::Directory`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DirectoryProps, enableResourcePropertyConstraint?: boolean);
}

import * as ros from '@alicloud/ros-cdk-core';
import { RosDirectory } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Directory`, which is used to create a directory for a specified bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDirectory`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export class Directory extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DirectoryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BucketName: The name of Bucket
     */
    public readonly attrBucketName: ros.IResolvable;

    /**
     * Attribute DirectoryName: The name of Directory
     */
    public readonly attrDirectoryName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DirectoryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDirectory = new RosDirectory(this, id,  {
            bucketName: props.bucketName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            directoryName: props.directoryName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDirectory;
        this.attrBucketName = rosDirectory.attrBucketName;
        this.attrDirectoryName = rosDirectory.attrDirectoryName;
    }
}

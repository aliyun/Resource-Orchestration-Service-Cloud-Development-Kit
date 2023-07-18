import * as ros from '@alicloud/ros-cdk-core';
import { RosFileset } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileset as FilesetProperty };

/**
 * Properties for defining a `ALIYUN::NAS::Fileset`
 */
export interface FilesetProps {

    /**
     * Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * Property fileSystemPath: The absolute path of Fileset to be created.
     * The parent catalog of specified the directory must be a directory in the file system.
     * The length is 2 to 1024 characters.
     * Specify the directory must start with positive (/).
     */
    readonly fileSystemPath: string | ros.IResolvable;

    /**
     * Property description: Fileset description information.
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NAS::Fileset`
 */
export class Fileset extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * Attribute FileSystemPath: File system path.
     */
    public readonly attrFileSystemPath: ros.IResolvable;

    /**
     * Attribute FsetId: Fileset ID.
     */
    public readonly attrFsetId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NAS::Fileset`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FilesetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFileset = new RosFileset(this, id,  {
            fileSystemPath: props.fileSystemPath,
            description: props.description,
            fileSystemId: props.fileSystemId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileset;
        this.attrFileSystemId = rosFileset.attrFileSystemId;
        this.attrFileSystemPath = rosFileset.attrFileSystemPath;
        this.attrFsetId = rosFileset.attrFsetId;
    }
}

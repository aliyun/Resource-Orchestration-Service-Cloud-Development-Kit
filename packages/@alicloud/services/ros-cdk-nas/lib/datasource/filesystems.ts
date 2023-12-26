import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystems } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileSystems as FileSystemsProperty };

/**
 * Properties for defining a `FileSystems`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export interface FileSystemsProps {

    /**
     * Property fileSystemId: The ID of the file system to be created.
     */
    readonly fileSystemId?: string | ros.IResolvable;

    /**
     * Property fileSystemType: File system type.
     * Value:
     * -standard (default): Universal NAS
     * -extreme: extreme NAS
     * -cpfs: file storage CPFS
     */
    readonly fileSystemType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::FileSystems`, which is used to query the details of file systems.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystems`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export class FileSystems extends ros.Resource {

    /**
     * Attribute FileSystemIds: The list of file system IDs.
     */
    public readonly attrFileSystemIds: ros.IResolvable;

    /**
     * Attribute FileSystems: The list of file systems.
     */
    public readonly attrFileSystems: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFileSystems = new RosFileSystems(this, id,  {
            fileSystemType: props.fileSystemType,
            fileSystemId: props.fileSystemId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileSystems;
        this.attrFileSystemIds = rosFileSystems.attrFileSystemIds;
        this.attrFileSystems = rosFileSystems.attrFileSystems;
    }
}

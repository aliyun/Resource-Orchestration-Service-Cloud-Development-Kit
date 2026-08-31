import * as ros from '@alicloud/ros-cdk-core';
import { RosFileset } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileset as FilesetProperty };

/**
 * Properties for defining a `Fileset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export interface FilesetProps {

    /**
     * Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-099394bd928c\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-290w65p03ok64ya\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * Property fileSystemPath: The absolute path of the fileset.
     * *   CPFS path limits.
     * *   The parent directory of the path that you specify must be an existing
     * directory in the file system.
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   Path limit of CPFS for Lingjun
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.
     * *   The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
     * has three levels.
     * *   If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.
     * *   Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.
     * *   The path cannot exceed 990 characters in length.
     */
    readonly fileSystemPath: string | ros.IResolvable;

    /**
     * Property description: The description of the fileset.
     * *   The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     * *   The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `Fileset`.
 */
export interface IFileset extends ros.IResource {
    readonly props: FilesetProps;

    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;

    /**
     * Attribute FileSystemPath: File system path.
     */
    readonly attrFileSystemPath: ros.IResolvable | string;

    /**
     * Attribute FsetId: Fileset ID.
     */
    readonly attrFsetId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::Fileset`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export class Fileset extends ros.Resource implements IFileset {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FilesetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable | string;

    /**
     * Attribute FileSystemPath: File system path.
     */
    public readonly attrFileSystemPath: ros.IResolvable | string;

    /**
     * Attribute FsetId: Fileset ID.
     */
    public readonly attrFsetId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FilesetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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

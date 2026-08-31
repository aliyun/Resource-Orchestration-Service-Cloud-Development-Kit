import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './dfs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileSystem as FileSystemProperty };

/**
 * Properties for defining a `FileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export interface FileSystemProps {

    /**
     * Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * Property spaceCapacity: Capacity of the file system.
     * When the actual storage data size reaches the file system capacity, no further
     * data can be written.
     * Unit: GiB
     */
    readonly spaceCapacity: number | ros.IResolvable;

    /**
     * Property storageType: Type of storage media.
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * Property zoneId: zone id
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property dataRedundancyType: Data redundancy mode of the file system.
     * Valid values:
     * - LRS (default): locally redundant storage
     * - ZRS: zone-redundant storage. When ZRS is selected, the zoneId parameter must be
     * a string containing a list of multiple zone IDs for zone-redundant deployment,
     * for example, <codeph>`zoneId1,zoneId2`.
     */
    readonly dataRedundancyType?: string | ros.IResolvable;

    /**
     * Property description: The description of the file system.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property fileSystemName: File system name. The naming convention is as follows:
     * - Length must be 6 to 64 characters.
     * - Must be globally unique and cannot be an empty string.
     * - Supports English letters and can contain digits, underscores (_), and hyphens
     * (-).
     */
    readonly fileSystemName?: string | ros.IResolvable;

    /**
     * Property partitionNumber: The reserved parameters
     */
    readonly partitionNumber?: number | ros.IResolvable;

    /**
     * Property provisionedThroughputInMiBps: Preset throughput. This parameter is required when the ThroughputMode parameter
     * is set to Provisioned.
     * Unit: MB\/s
     * Valid values: 1 to 5120
     */
    readonly provisionedThroughputInMiBps?: number | ros.IResolvable;

    /**
     * Property storageSetName: The reserved parameters.
     */
    readonly storageSetName?: string | ros.IResolvable;

    /**
     * Property throughputMode: Throughput mode
     * Values:
     * Standard（default）: standard throughputProvisioned: preset throughput
     */
    readonly throughputMode?: string | ros.IResolvable;
}

/**
 * Represents a `FileSystem`.
 */
export interface IFileSystem extends ros.IResource {
    readonly props: FileSystemProps;

    /**
     * Attribute FileSystemId: The ID of the file system.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DFS::FileSystem`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export class FileSystem extends ros.Resource implements IFileSystem {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FileSystemProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FileSystemId: The ID of the file system.
     */
    public readonly attrFileSystemId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFileSystem = new RosFileSystem(this, id,  {
            spaceCapacity: props.spaceCapacity,
            description: props.description,
            storageType: props.storageType === undefined || props.storageType === null ? 'STANDARD' : props.storageType,
            zoneId: props.zoneId,
            partitionNumber: props.partitionNumber,
            protocolType: props.protocolType,
            dataRedundancyType: props.dataRedundancyType === undefined || props.dataRedundancyType === null ? 'LRS' : props.dataRedundancyType,
            fileSystemName: props.fileSystemName,
            provisionedThroughputInMiBps: props.provisionedThroughputInMiBps,
            throughputMode: props.throughputMode === undefined || props.throughputMode === null ? 'Standard' : props.throughputMode,
            storageSetName: props.storageSetName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileSystem;
        this.attrFileSystemId = rosFileSystem.attrFileSystemId;
    }
}

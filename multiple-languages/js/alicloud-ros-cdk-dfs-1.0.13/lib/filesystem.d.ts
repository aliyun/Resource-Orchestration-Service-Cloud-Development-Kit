import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './dfs.generated';
export { RosFileSystem as FileSystemProperty };
/**
 * Properties for defining a `ALIYUN::DFS::FileSystem`
 */
export interface FileSystemProps {
    /**
     * Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * Property spaceCapacity: Capacity of the file system.
     * When the actual data volume reaches the file system capacity, data cannot be written.
     * Unit: GB
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
     * Property dataRedundancyType: Redundancy mode of the file system.
     * Values:
     * LRS (default) : local redundancy.
     * ZRS: in-city redundancy.
     */
    readonly dataRedundancyType?: string | ros.IResolvable;
    /**
     * Property description: The description of the file system.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property fileSystemName: Name of the file system. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     * The value can contain letters and digits and underscores (_).
     */
    readonly fileSystemName?: string | ros.IResolvable;
    /**
     * Property partitionNumber: The reserved parameters
     */
    readonly partitionNumber?: number | ros.IResolvable;
    /**
     * Property provisionedThroughputInMiBps: Preset handling capacity.
     * Unit: MB/sdata range: 1-5120
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
 * A ROS resource type:  `ALIYUN::DFS::FileSystem`
 */
export declare class FileSystem extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute FileSystemId: The ID of the file system.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DFS::FileSystem`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint?: boolean);
}

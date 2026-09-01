import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export interface RosAccessGroupProps {
    /**
     * @Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    readonly networkType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
export declare class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessGroup";
    /**
     * @Attribute AccessGroupId: The ID of the access_group.
     */
    readonly attrAccessGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    accessGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosAccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
export interface RosAccessRuleProps {
    /**
     * @Property accessGroupId: The resource ID of Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;
    /**
     * @Property networkSegment: The NetworkSegment of the Access Rule.
     */
    readonly networkSegment: string | ros.IResolvable;
    /**
     * @Property rwAccessType: The read\/write permission of the authorized object on the file system.
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    readonly rwAccessType: string | ros.IResolvable;
    /**
     * @Property description: The Description of the Access Rule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property priority: The Priority of the Access Rule. Valid values: 1 to 100.
     * NOTE: When multiple rules are matched by the same authorized object,
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    readonly priority?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::AccessRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
export declare class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::AccessRule";
    /**
     * @Attribute AccessRuleId: The ID of the access_rule.
     */
    readonly attrAccessRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupId: The resource ID of Access Group.
     */
    accessGroupId: string | ros.IResolvable;
    /**
     * @Property networkSegment: The NetworkSegment of the Access Rule.
     */
    networkSegment: string | ros.IResolvable;
    /**
     * @Property rwAccessType: The read\/write permission of the authorized object on the file system.
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    rwAccessType: string | ros.IResolvable;
    /**
     * @Property description: The Description of the Access Rule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property priority: The Priority of the Access Rule. Valid values: 1 to 100.
     * NOTE: When multiple rules are matched by the same authorized object,
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosFileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export interface RosFileSystemProps {
    /**
     * @Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property spaceCapacity: Capacity of the file system.
     * When the actual storage data size reaches the file system capacity, no further
     * data can be written.
     * Unit: GiB
     */
    readonly spaceCapacity: number | ros.IResolvable;
    /**
     * @Property storageType: Type of storage media.
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    readonly storageType: string | ros.IResolvable;
    /**
     * @Property zoneId: zone id
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property dataRedundancyType: Data redundancy mode of the file system.
     * Valid values:
     * - LRS (default): locally redundant storage
     * - ZRS: zone-redundant storage. When ZRS is selected, the zoneId parameter must be
     * a string containing a list of multiple zone IDs for zone-redundant deployment,
     * for example, <codeph>`zoneId1,zoneId2`.
     */
    readonly dataRedundancyType?: string | ros.IResolvable;
    /**
     * @Property description: The description of the file system.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property fileSystemName: File system name. The naming convention is as follows:
     * - Length must be 6 to 64 characters.
     * - Must be globally unique and cannot be an empty string.
     * - Supports English letters and can contain digits, underscores (_), and hyphens
     * (-).
     */
    readonly fileSystemName?: string | ros.IResolvable;
    /**
     * @Property partitionNumber: The reserved parameters
     */
    readonly partitionNumber?: number | ros.IResolvable;
    /**
     * @Property provisionedThroughputInMiBps: Preset throughput. This parameter is required when the ThroughputMode parameter
     * is set to Provisioned.
     * Unit: MB\/s
     * Valid values: 1 to 5120
     */
    readonly provisionedThroughputInMiBps?: number | ros.IResolvable;
    /**
     * @Property storageSetName: The reserved parameters.
     */
    readonly storageSetName?: string | ros.IResolvable;
    /**
     * @Property throughputMode: Throughput mode
     * Values:
     * Standard（default）: standard throughputProvisioned: preset throughput
     */
    readonly throughputMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::FileSystem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
export declare class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::FileSystem";
    /**
     * @Attribute FileSystemId: The ID of the file system.
     */
    readonly attrFileSystemId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）
     */
    protocolType: string | ros.IResolvable;
    /**
     * @Property spaceCapacity: Capacity of the file system.
     * When the actual storage data size reaches the file system capacity, no further
     * data can be written.
     * Unit: GiB
     */
    spaceCapacity: number | ros.IResolvable;
    /**
     * @Property storageType: Type of storage media.
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    storageType: string | ros.IResolvable;
    /**
     * @Property zoneId: zone id
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property dataRedundancyType: Data redundancy mode of the file system.
     * Valid values:
     * - LRS (default): locally redundant storage
     * - ZRS: zone-redundant storage. When ZRS is selected, the zoneId parameter must be
     * a string containing a list of multiple zone IDs for zone-redundant deployment,
     * for example, <codeph>`zoneId1,zoneId2`.
     */
    dataRedundancyType: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the file system.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property fileSystemName: File system name. The naming convention is as follows:
     * - Length must be 6 to 64 characters.
     * - Must be globally unique and cannot be an empty string.
     * - Supports English letters and can contain digits, underscores (_), and hyphens
     * (-).
     */
    fileSystemName: string | ros.IResolvable | undefined;
    /**
     * @Property partitionNumber: The reserved parameters
     */
    partitionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property provisionedThroughputInMiBps: Preset throughput. This parameter is required when the ThroughputMode parameter
     * is set to Provisioned.
     * Unit: MB\/s
     * Valid values: 1 to 5120
     */
    provisionedThroughputInMiBps: number | ros.IResolvable | undefined;
    /**
     * @Property storageSetName: The reserved parameters.
     */
    storageSetName: string | ros.IResolvable | undefined;
    /**
     * @Property throughputMode: Throughput mode
     * Values:
     * Standard（default）: standard throughputProvisioned: preset throughput
     */
    throughputMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosMountPoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export interface RosMountPointProps {
    /**
     * @Property accessGroupId: The ID of the Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;
    /**
     * @Property fileSystemId: The ID of the File System.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the Mount Point. Valid values: VPC.
     */
    readonly networkType: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc id.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswitch id.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: Description of the mount target.
     * The length cannot exceed 32 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property status: The status of the Mount Point.
     * Valid values: Active, Inactive
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DFS::MountPoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MountPoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export declare class RosMountPoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DFS::MountPoint";
    /**
     * @Attribute MountPointId: The ID of the mount point.
     */
    readonly attrMountPointId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupId: The ID of the Access Group.
     */
    accessGroupId: string | ros.IResolvable;
    /**
     * @Property fileSystemId: The ID of the File System.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the Mount Point. Valid values: VPC.
     */
    networkType: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc id.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswitch id.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: Description of the mount target.
     * The length cannot exceed 32 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the Mount Point.
     * Valid values: Active, Inactive
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMountPointProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

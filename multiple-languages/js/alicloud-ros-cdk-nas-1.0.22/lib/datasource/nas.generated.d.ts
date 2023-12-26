import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export interface RosAccessGroupsProps {
    /**
     * @Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::AccessGroups`, which is used to query the details of permission groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export declare class RosAccessGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::AccessGroups";
    /**
     * @Attribute AccessGroupNames: The list of access group names.
     */
    readonly attrAccessGroupNames: ros.IResolvable;
    /**
     * @Attribute AccessGroups: The list of access groups.
     */
    readonly attrAccessGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: The name of the permission group.
     */
    accessGroupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosFileSystems`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export interface RosFileSystemsProps {
    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    readonly fileSystemId?: string | ros.IResolvable;
    /**
     * @Property fileSystemType: File system type.
     * Value:
     * -standard (default): Universal NAS
     * -extreme: extreme NAS
     * -cpfs: file storage CPFS
     */
    readonly fileSystemType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::FileSystems`, which is used to query the details of file systems.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystems` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export declare class RosFileSystems extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::FileSystems";
    /**
     * @Attribute FileSystemIds: The list of file system IDs.
     */
    readonly attrFileSystemIds: ros.IResolvable;
    /**
     * @Attribute FileSystems: The list of file systems.
     */
    readonly attrFileSystems: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    fileSystemId: string | ros.IResolvable | undefined;
    /**
     * @Property fileSystemType: File system type.
     * Value:
     * -standard (default): Universal NAS
     * -extreme: extreme NAS
     * -cpfs: file storage CPFS
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export interface RosZonesProps {
    /**
     * @Property fileSystemType: The type of the file system. Default value: all. Valid values:
     * standard: General-purpose NAS file system
     * extreme: Extreme NAS file system
     * cpfs: CPFS file system
     */
    readonly fileSystemType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::Zones`, which is used to query zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::Zones";
    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemType: The type of the file system. Default value: all. Valid values:
     * standard: General-purpose NAS file system
     * extreme: Extreme NAS file system
     * cpfs: CPFS file system
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

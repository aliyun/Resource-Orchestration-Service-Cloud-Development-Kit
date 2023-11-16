import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::NAS::AccessGroups`
 */
export interface RosAccessGroupsProps {
    /**
     * @Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::NAS::AccessGroups`
 */
export declare class RosAccessGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::AccessGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::NAS::AccessGroups`.
     *
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
 * Properties for defining a `DATASOURCE::NAS::FileSystems`
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
 * A ROS template type:  `DATASOURCE::NAS::FileSystems`
 */
export declare class RosFileSystems extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::FileSystems";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::NAS::FileSystems`.
     *
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
 * Properties for defining a `DATASOURCE::NAS::Zones`
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
 * A ROS template type:  `DATASOURCE::NAS::Zones`
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::Zones";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::NAS::Zones`.
     *
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

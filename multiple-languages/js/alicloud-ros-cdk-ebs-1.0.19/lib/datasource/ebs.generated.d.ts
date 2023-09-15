import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`
 */
export interface RosDiskReplicaGroupsProps {
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EBS::DiskReplicaGroups`
 */
export declare class RosDiskReplicaGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    readonly attrDiskReplicaGroups: ros.IResolvable;
    /**
     * @Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    readonly attrReplicaGroupIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    site: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`
 */
export interface RosDiskReplicaPairsProps {
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EBS::DiskReplicaPairs`
 */
export declare class RosDiskReplicaPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPairs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    readonly attrDiskReplicaPairs: ros.IResolvable;
    /**
     * @Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    readonly attrReplicaPairIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaPairs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

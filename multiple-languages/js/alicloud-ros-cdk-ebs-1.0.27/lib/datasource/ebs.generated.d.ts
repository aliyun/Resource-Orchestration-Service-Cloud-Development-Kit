import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDiskReplicaGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaGroups`, which is used to query the information about one or more replication pair-consistent groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export declare class RosDiskReplicaGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroups";
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
 * Properties for defining a `RosDiskReplicaPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export interface RosDiskReplicaPairsProps {
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaPairs`, which is used to query the information about one or more replication pairs.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export declare class RosDiskReplicaPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPairs";
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

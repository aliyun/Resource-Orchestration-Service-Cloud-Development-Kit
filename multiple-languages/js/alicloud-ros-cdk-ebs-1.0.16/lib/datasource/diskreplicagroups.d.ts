import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaGroups } from './ebs.generated';
export { RosDiskReplicaGroups as DiskReplicaGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`
 */
export interface DiskReplicaGroupsProps {
    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::EBS::DiskReplicaGroups`
 */
export declare class DiskReplicaGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    readonly attrDiskReplicaGroups: ros.IResolvable;
    /**
     * Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    readonly attrReplicaGroupIds: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DiskReplicaGroupsProps, enableResourcePropertyConstraint?: boolean);
}

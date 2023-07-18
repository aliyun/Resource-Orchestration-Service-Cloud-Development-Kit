import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoSnapshotPolicies } from './ecs.generated';
export { RosAutoSnapshotPolicies as AutoSnapshotPoliciesProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::AutoSnapshotPolicies`
 */
export interface AutoSnapshotPoliciesProps {
    /**
     * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of snapshotpolicy.
     */
    readonly tags?: RosAutoSnapshotPolicies.TagsProperty[];
}
/**
 * A ROS resource type:  `DATASOURCE::ECS::AutoSnapshotPolicies`
 */
export declare class AutoSnapshotPolicies extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    readonly attrAutoSnapshotPolicies: ros.IResolvable;
    /**
     * Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    readonly attrAutoSnapshotPolicyIds: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::AutoSnapshotPolicies`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AutoSnapshotPoliciesProps, enableResourcePropertyConstraint?: boolean);
}

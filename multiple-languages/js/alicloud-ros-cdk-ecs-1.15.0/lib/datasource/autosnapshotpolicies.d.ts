import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoSnapshotPolicies } from './ecs.generated';
export { RosAutoSnapshotPolicies as AutoSnapshotPoliciesProperty };
/**
 * Properties for defining a `AutoSnapshotPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export interface AutoSnapshotPoliciesProps {
    /**
     * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * Represents a `AutoSnapshotPolicies`.
 */
export interface IAutoSnapshotPolicies extends ros.IResource {
    readonly props: AutoSnapshotPoliciesProps;
    /**
     * Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    readonly attrAutoSnapshotPolicies: ros.IResolvable | string;
    /**
     * Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    readonly attrAutoSnapshotPolicyIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicies`, which is used to query automatic snapshot policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoSnapshotPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export declare class AutoSnapshotPolicies extends ros.Resource implements IAutoSnapshotPolicies {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AutoSnapshotPoliciesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    readonly attrAutoSnapshotPolicies: ros.IResolvable | string;
    /**
     * Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    readonly attrAutoSnapshotPolicyIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AutoSnapshotPoliciesProps, enableResourcePropertyConstraint?: boolean);
}

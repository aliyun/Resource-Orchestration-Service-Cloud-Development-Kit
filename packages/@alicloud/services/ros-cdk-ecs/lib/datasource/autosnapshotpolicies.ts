import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoSnapshotPolicies } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of snapshotpolicy.
     */
    readonly tags?: RosAutoSnapshotPolicies.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicies`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoSnapshotPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export class AutoSnapshotPolicies extends ros.Resource {

    /**
     * Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    public readonly attrAutoSnapshotPolicies: ros.IResolvable;

    /**
     * Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    public readonly attrAutoSnapshotPolicyIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoSnapshotPoliciesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAutoSnapshotPolicies = new RosAutoSnapshotPolicies(this, id,  {
            resourceGroupId: props.resourceGroupId,
            autoSnapshotPolicyId: props.autoSnapshotPolicyId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoSnapshotPolicies;
        this.attrAutoSnapshotPolicies = rosAutoSnapshotPolicies.attrAutoSnapshotPolicies;
        this.attrAutoSnapshotPolicyIds = rosAutoSnapshotPolicies.attrAutoSnapshotPolicyIds;
    }
}

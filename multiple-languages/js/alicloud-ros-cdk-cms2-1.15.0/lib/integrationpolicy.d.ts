import * as ros from '@alicloud/ros-cdk-core';
import { RosIntegrationPolicy } from './cms2.generated';
export { RosIntegrationPolicy as IntegrationPolicyProperty };
/**
 * Properties for defining a `IntegrationPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export interface IntegrationPolicyProps {
    /**
     * Property policyType: The type of the integration policy.
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property entityGroup: The entity group information.
     */
    readonly entityGroup?: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable;
    /**
     * Property policyName: The name of the integration policy.
     */
    readonly policyName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIntegrationPolicy.TagsProperty[];
    /**
     * Property workspace: The workspace of the integration policy.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * Represents a `IntegrationPolicy`.
 */
export interface IIntegrationPolicy extends ros.IResource {
    readonly props: IntegrationPolicyProps;
    /**
     * Attribute PolicyId: The ID of the integration policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::IntegrationPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIntegrationPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export declare class IntegrationPolicy extends ros.Resource implements IIntegrationPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IntegrationPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PolicyId: The ID of the integration policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IntegrationPolicyProps, enableResourcePropertyConstraint?: boolean);
}

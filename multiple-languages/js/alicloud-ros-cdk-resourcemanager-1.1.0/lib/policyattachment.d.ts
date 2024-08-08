import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicyAttachment } from './resourcemanager.generated';
export { RosPolicyAttachment as PolicyAttachmentProperty };
/**
 * Properties for defining a `PolicyAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export interface PolicyAttachmentProps {
    /**
     * Property policyName: The name of the policy
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: The type of the policy
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property principalName: The name of the object to which you want to attach the policy
     */
    readonly principalName: string | ros.IResolvable;
    /**
     * Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    readonly principalType: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::PolicyAttachment`, which is used to attach a policy to an object. After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicyAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export declare class PolicyAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PolicyAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachDate: Authorization time
     */
    readonly attrAttachDate: ros.IResolvable;
    /**
     * Attribute Description: Policy description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute PolicyName: The name of the policy
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * Attribute PolicyType: The type of the policy
     */
    readonly attrPolicyType: ros.IResolvable;
    /**
     * Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    readonly attrPrincipalName: ros.IResolvable;
    /**
     * Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    readonly attrPrincipalType: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyAttachmentProps, enableResourcePropertyConstraint?: boolean);
}

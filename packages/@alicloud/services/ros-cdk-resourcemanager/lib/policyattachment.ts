import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicyAttachment } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class PolicyAttachment extends ros.Resource {

    /**
     * Attribute AttachDate: Authorization time
     */
    public readonly attrAttachDate: ros.IResolvable;

    /**
     * Attribute Description: Policy description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute PolicyName: The name of the policy
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * Attribute PolicyType: The type of the policy
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    public readonly attrPrincipalName: ros.IResolvable;

    /**
     * Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    public readonly attrPrincipalType: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPolicyAttachment = new RosPolicyAttachment(this, id,  {
            policyType: props.policyType,
            resourceGroupId: props.resourceGroupId,
            policyName: props.policyName,
            principalName: props.principalName,
            principalType: props.principalType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPolicyAttachment;
        this.attrAttachDate = rosPolicyAttachment.attrAttachDate;
        this.attrDescription = rosPolicyAttachment.attrDescription;
        this.attrPolicyName = rosPolicyAttachment.attrPolicyName;
        this.attrPolicyType = rosPolicyAttachment.attrPolicyType;
        this.attrPrincipalName = rosPolicyAttachment.attrPrincipalName;
        this.attrPrincipalType = rosPolicyAttachment.attrPrincipalType;
        this.attrResourceGroupId = rosPolicyAttachment.attrResourceGroupId;
    }
}

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
 * Represents a `PolicyAttachment`.
 */
export interface IPolicyAttachment extends ros.IResource {
    readonly props: PolicyAttachmentProps;

    /**
     * Attribute AttachDate: Authorization time
     */
    readonly attrAttachDate: ros.IResolvable | string;

    /**
     * Attribute Description: Policy description
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute PolicyName: The name of the policy
     */
    readonly attrPolicyName: ros.IResolvable | string;

    /**
     * Attribute PolicyType: The type of the policy
     */
    readonly attrPolicyType: ros.IResolvable | string;

    /**
     * Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    readonly attrPrincipalName: ros.IResolvable | string;

    /**
     * Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    readonly attrPrincipalType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::PolicyAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicyAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export class PolicyAttachment extends ros.Resource implements IPolicyAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PolicyAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AttachDate: Authorization time
     */
    public readonly attrAttachDate: ros.IResolvable | string;

    /**
     * Attribute Description: Policy description
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute PolicyName: The name of the policy
     */
    public readonly attrPolicyName: ros.IResolvable | string;

    /**
     * Attribute PolicyType: The type of the policy
     */
    public readonly attrPolicyType: ros.IResolvable | string;

    /**
     * Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    public readonly attrPrincipalName: ros.IResolvable | string;

    /**
     * Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    public readonly attrPrincipalType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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

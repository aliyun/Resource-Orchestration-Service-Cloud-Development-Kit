import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicyAttachment } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosControlPolicyAttachment as ControlPolicyAttachmentProperty };

/**
 * Properties for defining a `ControlPolicyAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export interface ControlPolicyAttachmentProps {

    /**
     * Property policyId: PolicyId
     */
    readonly policyId: string | ros.IResolvable;

    /**
     * Property targetId: TargetId
     */
    readonly targetId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ControlPolicyAttachment`, which is used to attach a custom control policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosControlPolicyAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export class ControlPolicyAttachment extends ros.Resource {

    /**
     * Attribute AttachDate: AttachDate
     */
    public readonly attrAttachDate: ros.IResolvable;

    /**
     * Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute PolicyId: PolicyId
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * Attribute PolicyName: PolicyName
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * Attribute PolicyType: PolicyType
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * Attribute TargetId: TargetId
     */
    public readonly attrTargetId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosControlPolicyAttachment = new RosControlPolicyAttachment(this, id,  {
            targetId: props.targetId,
            policyId: props.policyId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosControlPolicyAttachment;
        this.attrAttachDate = rosControlPolicyAttachment.attrAttachDate;
        this.attrDescription = rosControlPolicyAttachment.attrDescription;
        this.attrPolicyId = rosControlPolicyAttachment.attrPolicyId;
        this.attrPolicyName = rosControlPolicyAttachment.attrPolicyName;
        this.attrPolicyType = rosControlPolicyAttachment.attrPolicyType;
        this.attrTargetId = rosControlPolicyAttachment.attrTargetId;
    }
}

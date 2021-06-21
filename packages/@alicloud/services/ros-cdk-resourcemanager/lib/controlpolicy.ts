import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicy } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosControlPolicy as ControlPolicyProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::ControlPolicy`
 */
export interface ControlPolicyProps {

    /**
     * Property controlPolicyName: PolicyName
     */
    readonly controlPolicyName: string | ros.IResolvable;

    /**
     * Property effectScope: EffectScope
     */
    readonly effectScope: string | ros.IResolvable;

    /**
     * Property policyDocument: PolicyDocument
     */
    readonly policyDocument: string | ros.IResolvable;

    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ControlPolicy`
 */
export class ControlPolicy extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AttachmentCount: AttachmentCount
     */
    public readonly attrAttachmentCount: ros.IResolvable;

    /**
     * Attribute ControlPolicyName: PolicyName
     */
    public readonly attrControlPolicyName: ros.IResolvable;

    /**
     * Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EffectScope: EffectScope
     */
    public readonly attrEffectScope: ros.IResolvable;

    /**
     * Attribute PolicyDocument: PolicyDocument
     */
    public readonly attrPolicyDocument: ros.IResolvable;

    /**
     * Attribute PolicyId: PolicyId
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * Attribute PolicyType: PolicyType
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ResourceManager::ControlPolicy`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosControlPolicy = new RosControlPolicy(this, id,  {
            description: props.description,
            policyDocument: props.policyDocument,
            controlPolicyName: props.controlPolicyName,
            effectScope: props.effectScope,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosControlPolicy;
        this.attrAttachmentCount = rosControlPolicy.attrAttachmentCount;
        this.attrControlPolicyName = rosControlPolicy.attrControlPolicyName;
        this.attrDescription = rosControlPolicy.attrDescription;
        this.attrEffectScope = rosControlPolicy.attrEffectScope;
        this.attrPolicyDocument = rosControlPolicy.attrPolicyDocument;
        this.attrPolicyId = rosControlPolicy.attrPolicyId;
        this.attrPolicyType = rosControlPolicy.attrPolicyType;
    }
}

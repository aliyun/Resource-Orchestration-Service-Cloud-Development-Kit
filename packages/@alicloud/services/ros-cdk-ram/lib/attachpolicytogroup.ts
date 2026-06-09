import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToGroup } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAttachPolicyToGroup as AttachPolicyToGroupProperty };

/**
 * Properties for defining a `AttachPolicyToGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
export interface AttachPolicyToGroupProps {

    /**
     * Property groupName: User group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
}

/**
 * Represents a `AttachPolicyToGroup`.
 */
export interface IAttachPolicyToGroup extends ros.IResource {
    readonly props: AttachPolicyToGroupProps;

    /**
     * Attribute GroupName: User group name.
     */
    readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute PolicyName: Authorization policy name.
     */
    readonly attrPolicyName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AttachPolicyToGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAttachPolicyToGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
export class AttachPolicyToGroup extends ros.Resource implements IAttachPolicyToGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AttachPolicyToGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupName: User group name.
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute PolicyName: Authorization policy name.
     */
    public readonly attrPolicyName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAttachPolicyToGroup = new RosAttachPolicyToGroup(this, id,  {
            groupName: props.groupName,
            policyType: props.policyType,
            policyName: props.policyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAttachPolicyToGroup;
        this.attrGroupName = rosAttachPolicyToGroup.attrGroupName;
        this.attrPolicyName = rosAttachPolicyToGroup.attrPolicyName;
    }
}

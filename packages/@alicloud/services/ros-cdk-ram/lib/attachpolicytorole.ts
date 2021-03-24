import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToRole } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAttachPolicyToRole as AttachPolicyToRoleProperty };

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`
 */
export interface AttachPolicyToRoleProps {

    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string;

    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;

    /**
     * Property roleName: Role name.Example: dev.
     */
    readonly roleName: string;
}

/**
 * A ROS resource type:  `ALIYUN::RAM::AttachPolicyToRole`
 */
export class AttachPolicyToRole extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToRole`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToRoleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAttachPolicyToRole = new RosAttachPolicyToRole(this, id,  {
            policyType: props.policyType,
            roleName: props.roleName,
            policyName: props.policyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAttachPolicyToRole;
    }
}

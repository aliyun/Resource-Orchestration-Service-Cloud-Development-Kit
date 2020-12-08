import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToUser } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAttachPolicyToUser as AttachPolicyToUserProperty };

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`
 */
export interface AttachPolicyToUserProps {

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;

    /**
     * @Property userName: User name.Example: dev.
     */
    readonly userName: string;
}

/**
 * A ROS resource type:  `ALIYUN::RAM::AttachPolicyToUser`
 */
export class AttachPolicyToUser extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToUser`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToUserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAttachPolicyToUser = new RosAttachPolicyToUser(this, id,  {
            policyType: props.policyType,
            userName: props.userName,
            policyName: props.policyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAttachPolicyToUser;
    }
}

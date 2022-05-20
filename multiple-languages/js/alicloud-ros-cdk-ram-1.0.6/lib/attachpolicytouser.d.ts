import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToUser } from './ram.generated';
export { RosAttachPolicyToUser as AttachPolicyToUserProperty };
/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`
 */
export interface AttachPolicyToUserProps {
    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property userName: User name.Example: dev.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::AttachPolicyToUser`
 */
export declare class AttachPolicyToUser extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToUser`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToUserProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=attachpolicytouser.d.ts.map
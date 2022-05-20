import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToRole } from './ram.generated';
export { RosAttachPolicyToRole as AttachPolicyToRoleProperty };
/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`
 */
export interface AttachPolicyToRoleProps {
    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property roleName: Role name.Example: dev.
     */
    readonly roleName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::AttachPolicyToRole`
 */
export declare class AttachPolicyToRole extends ros.Resource {
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
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToRoleProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=attachpolicytorole.d.ts.map
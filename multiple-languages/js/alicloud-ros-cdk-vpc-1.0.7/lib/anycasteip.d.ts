import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIP } from './vpc.generated';
export { RosAnycastEIP as AnycastEIPProperty };
/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIP`
 */
export interface AnycastEIPProps {
    /**
     * Property bandwidth: Anycast EIP instance bandwidth
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * Property description: Anycast EIP instance description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property instanceChargeType: Anycast EIP instance charge type
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property internetChargeType: Anycast EIP instance access public network billing method
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property name: Anycast EIP instance name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property serviceLocation: Anycast EIP instance access area
     */
    readonly serviceLocation?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::AnycastEIP`
 */
export declare class AnycastEIP extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AnycastId: Anycast EIP instance ID
     */
    readonly attrAnycastId: ros.IResolvable;
    /**
     * Attribute IpAddress: Anycase IP address
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute Name: Anycast EIP instance name
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute OrderId: Order ID
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AnycastEIPProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=anycasteip.d.ts.map
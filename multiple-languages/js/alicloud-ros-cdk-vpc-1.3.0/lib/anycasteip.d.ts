import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIP } from './vpc.generated';
export { RosAnycastEIP as AnycastEIPProperty };
/**
 * Properties for defining a `AnycastEIP`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::AnycastEIP`, which is used to create an Anycast elastic IP address (Anycast EIP).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEIP`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
export declare class AnycastEIP extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AnycastEIPProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AnycastEIPProps, enableResourcePropertyConstraint?: boolean);
}

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
 * Represents a `AnycastEIP`.
 */
export interface IAnycastEIP extends ros.IResource {
    readonly props: AnycastEIPProps;
    /**
     * Attribute AnycastId: Anycast EIP instance ID
     */
    readonly attrAnycastId: ros.IResolvable | string;
    /**
     * Attribute IpAddress: Anycase IP address
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute Name: Anycast EIP instance name
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order ID
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::AnycastEIP`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEIP`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
export declare class AnycastEIP extends ros.Resource implements IAnycastEIP {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AnycastEIPProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AnycastId: Anycast EIP instance ID
     */
    readonly attrAnycastId: ros.IResolvable | string;
    /**
     * Attribute IpAddress: Anycase IP address
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute Name: Anycast EIP instance name
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order ID
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AnycastEIPProps, enableResourcePropertyConstraint?: boolean);
}

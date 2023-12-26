import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIP } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::AnycastEIP`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEIP`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
export class AnycastEIP extends ros.Resource {

    /**
     * Attribute AnycastId: Anycast EIP instance ID
     */
    public readonly attrAnycastId: ros.IResolvable;

    /**
     * Attribute IpAddress: Anycase IP address
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * Attribute Name: Anycast EIP instance name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute OrderId: Order ID
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEIPProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAnycastEIP = new RosAnycastEIP(this, id,  {
            description: props.description,
            serviceLocation: props.serviceLocation === undefined || props.serviceLocation === null ? 'international' : props.serviceLocation,
            instanceChargeType: props.instanceChargeType,
            bandwidth: props.bandwidth,
            name: props.name,
            internetChargeType: props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEIP;
        this.attrAnycastId = rosAnycastEIP.attrAnycastId;
        this.attrIpAddress = rosAnycastEIP.attrIpAddress;
        this.attrName = rosAnycastEIP.attrName;
        this.attrOrderId = rosAnycastEIP.attrOrderId;
    }
}

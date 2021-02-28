import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIP } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnycastEIP as AnycastEIPProperty };

/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIP`
 */
export interface AnycastEIPProps {

    /**
     * Property description: Anycast EIP instance description
     */
    readonly description?: string;

    /**
     * Property instanceChargeType: Anycast EIP instance charge type
     */
    readonly instanceChargeType?: string;

    /**
     * Property internetChargeType: Anycast EIP instance access public network billing method
     */
    readonly internetChargeType?: string;

    /**
     * Property name: Anycast EIP instance name
     */
    readonly name?: string;

    /**
     * Property serviceLocation: Anycast EIP instance access area
     */
    readonly serviceLocation?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::AnycastEIP`
 */
export class AnycastEIP extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AnycastId: Anycast EIP instance ID
     */
    public readonly attrAnycastId: any;

    /**
     * Attribute IpAddress: Anycase IP address
     */
    public readonly attrIpAddress: any;

    /**
     * Attribute Name: Anycast EIP instance name
     */
    public readonly attrName: any;

    /**
     * Attribute OrderId: Order ID
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEIPProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAnycastEIP = new RosAnycastEIP(this, id,  {
            description: props.description,
            serviceLocation: props.serviceLocation ? props.serviceLocation : 'international',
            instanceChargeType: props.instanceChargeType,
            internetChargeType: props.internetChargeType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEIP;
        this.attrAnycastId = rosAnycastEIP.attrAnycastId;
        this.attrIpAddress = rosAnycastEIP.attrIpAddress;
        this.attrName = rosAnycastEIP.attrName;
        this.attrOrderId = rosAnycastEIP.attrOrderId;
    }
}

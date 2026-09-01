import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomerGateway as CustomerGatewayProperty };

/**
 * Properties for defining a `CustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export interface CustomerGatewayProps {

    /**
     * Property ipAddress: The static IP address of the gateway device in the data center.
     * *   If you want to create a public IPsec-VPN connection, enter a public IP
     * address.
     * *   If you want to create a private IPsec-VPN connection, enter a private IP
     * address.
     * You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
     * cannot be established:
     * *   100.64.0.0~100.127.255.255
     * *   127.0.0.0~127.255.255.255
     * *   169.254.0.0~169.254.255.255
     * *   224.0.0.0~239.255.255.255
     * *   255.0.0.0~255.255.255.255
     */
    readonly ipAddress: string | ros.IResolvable;

    /**
     * Property asn: The autonomous system number (ASN) of the gateway device in your data center.
     * This parameter is required If you want to use Border Gateway Protocol (BGP) for
     * the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
     * Asn is a 4-byte number. You can enter it in two segments and separate the first
     * 16 bits from the following 16 bits with a period (.). Enter the number in each
     * segment in decimal format.
     * For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
     * using the following formula: 123 × 65536 + 456 = 8061384.
     * > - We recommend that you use a private ASN to establish BGP connections to
     * the cloud platform. For information about the range of private ASNs, see the relevant
     * documentation.
     * > - 45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
     * identify the cloud platform during route selection and data transmission over the
     * Internet.
     */
    readonly asn?: number | ros.IResolvable;

    /**
     * Property description: The description of the customer gateway.
     * The description must be 1 to 100 characters in length, and cannot start with
     * `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the customer gateway.
     * The name must be 1 to 100 characters in length, and cannot start with `http:\/\/`
     * or `https:\/\/`.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
     * 
     * - You can call the ListResourceGroups interface to query the resource group ID.
     * - If you do not specify a resource group, the user gateway will belong to the default resource group after creation.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `CustomerGateway`.
 */
export interface ICustomerGateway extends ros.IResource {
    readonly props: CustomerGatewayProps;

    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CustomerGateway`, which is used to create a customer gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export class CustomerGateway extends ros.Resource implements ICustomerGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomerGatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    public readonly attrCustomerGatewayId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomerGateway = new RosCustomerGateway(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            ipAddress: props.ipAddress,
            asn: props.asn,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomerGateway;
        this.attrCustomerGatewayId = rosCustomerGateway.attrCustomerGatewayId;
    }
}

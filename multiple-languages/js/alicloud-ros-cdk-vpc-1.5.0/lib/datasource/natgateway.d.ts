import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateway } from './vpc.generated';
export { RosNatGateway as NatGatewayProperty };
/**
 * Properties for defining a `NatGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export interface NatGatewayProps {
    /**
     * Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatGateway`, which is used to query the information about a NAT gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export declare class NatGateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NatGatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoPay: Indicates whether automatic payment is enabled. Valid values:
* false: no
true: yes
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * Attribute BusinessStatus: The status of the NAT gateway. Valid values:
* Normal: normal
* FinancialLocked: locked due to overdue payments
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the NAT gateway was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * Attribute Description: The description of the NAT gateway.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
* MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    readonly attrEipBindMode: ros.IResolvable;
    /**
     * Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    readonly attrForwardTableIds: ros.IResolvable;
    /**
     * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrIcmpReplyEnabled: ros.IResolvable;
    /**
     * Attribute InternetChargeType: The metering method of the NAT gateway. Valid values:
* PayBySpec: pay-by-specification
* PayByLcu: pay-by-CU
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    readonly attrIpLists: ros.IResolvable;
    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable;
    /**
     * Attribute NatGatewayName: The name of the NAT gateway. The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    readonly attrNatGatewayName: ros.IResolvable;
    /**
     * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    readonly attrNatGatewayPrivateInfo: ros.IResolvable;
    /**
     * Attribute NatType: The type of the NAT gateway. The value is set to Enhanced (enhanced NAT gateway).
     */
    readonly attrNatType: ros.IResolvable;
    /**
     * Attribute NetworkType: The type of NAT gateway. Valid values:
* internet: an Internet NAT gateway
* intranet: a VPC NAT gateway
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * Attribute PaymentType: The billing method of the NAT gateway. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled. Valid values:
false: no
true: yes
     */
    readonly attrSecurityProtectionEnabled: ros.IResolvable;
    /**
     * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    readonly attrSnatTableIds: ros.IResolvable;
    /**
     * Attribute Spec: The size of the NAT gateway. An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint?: boolean);
}

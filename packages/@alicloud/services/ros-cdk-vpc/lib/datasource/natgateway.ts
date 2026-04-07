import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `NatGateway`.
 */
export interface INatGateway extends ros.IResource {
    readonly props: NatGatewayProps;

    /**
     * Attribute AutoPay: Indicates whether automatic payment is enabled. Valid values:
* false: no
true: yes
     */
    readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute BusinessStatus: The status of the NAT gateway. Valid values:
* Normal: normal
* FinancialLocked: locked due to overdue payments
     */
    readonly attrBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the NAT gateway was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the NAT gateway.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
* MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    readonly attrEipBindMode: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    readonly attrForwardTableIds: ros.IResolvable | string;

    /**
     * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrIcmpReplyEnabled: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The metering method of the NAT gateway. Valid values:
* PayBySpec: pay-by-specification
* PayByLcu: pay-by-CU
     */
    readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    readonly attrIpLists: ros.IResolvable | string;

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable | string;

    /**
     * Attribute NatGatewayName: The name of the NAT gateway. The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    readonly attrNatGatewayName: ros.IResolvable | string;

    /**
     * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    readonly attrNatGatewayPrivateInfo: ros.IResolvable | string;

    /**
     * Attribute NatType: The type of the NAT gateway. The value is set to Enhanced (enhanced NAT gateway).
     */
    readonly attrNatType: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The type of NAT gateway. Valid values:
* internet: an Internet NAT gateway
* intranet: a VPC NAT gateway
     */
    readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the NAT gateway. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled. Valid values:
false: no
true: yes
     */
    readonly attrSecurityProtectionEnabled: ros.IResolvable | string;

    /**
     * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    readonly attrSnatTableIds: ros.IResolvable | string;

    /**
     * Attribute Spec: The size of the NAT gateway. An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatGateway`, which is used to query the information about a NAT gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export class NatGateway extends ros.Resource implements INatGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NatGatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoPay: Indicates whether automatic payment is enabled. Valid values:
* false: no
true: yes
     */
    public readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute BusinessStatus: The status of the NAT gateway. Valid values:
* Normal: normal
* FinancialLocked: locked due to overdue payments
     */
    public readonly attrBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the NAT gateway was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled. Valid values:
* true: yes
* false: no
     */
    public readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the NAT gateway.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
* MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    public readonly attrEipBindMode: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    public readonly attrForwardTableIds: ros.IResolvable | string;

    /**
     * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
* true: yes
* false: no
     */
    public readonly attrIcmpReplyEnabled: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The metering method of the NAT gateway. Valid values:
* PayBySpec: pay-by-specification
* PayByLcu: pay-by-CU
     */
    public readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    public readonly attrIpLists: ros.IResolvable | string;

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable | string;

    /**
     * Attribute NatGatewayName: The name of the NAT gateway. The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    public readonly attrNatGatewayName: ros.IResolvable | string;

    /**
     * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    public readonly attrNatGatewayPrivateInfo: ros.IResolvable | string;

    /**
     * Attribute NatType: The type of the NAT gateway. The value is set to Enhanced (enhanced NAT gateway).
     */
    public readonly attrNatType: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The type of NAT gateway. Valid values:
* internet: an Internet NAT gateway
* intranet: a VPC NAT gateway
     */
    public readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the NAT gateway. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled. Valid values:
false: no
true: yes
     */
    public readonly attrSecurityProtectionEnabled: ros.IResolvable | string;

    /**
     * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    public readonly attrSnatTableIds: ros.IResolvable | string;

    /**
     * Attribute Spec: The size of the NAT gateway. An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNatGateway = new RosNatGateway(this, id,  {
            natGatewayId: props.natGatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatGateway;
        this.attrAutoPay = rosNatGateway.attrAutoPay;
        this.attrBusinessStatus = rosNatGateway.attrBusinessStatus;
        this.attrCreateTime = rosNatGateway.attrCreateTime;
        this.attrDeletionProtection = rosNatGateway.attrDeletionProtection;
        this.attrDescription = rosNatGateway.attrDescription;
        this.attrEipBindMode = rosNatGateway.attrEipBindMode;
        this.attrExpiredTime = rosNatGateway.attrExpiredTime;
        this.attrForwardTableIds = rosNatGateway.attrForwardTableIds;
        this.attrIcmpReplyEnabled = rosNatGateway.attrIcmpReplyEnabled;
        this.attrInternetChargeType = rosNatGateway.attrInternetChargeType;
        this.attrIpLists = rosNatGateway.attrIpLists;
        this.attrNatGatewayId = rosNatGateway.attrNatGatewayId;
        this.attrNatGatewayName = rosNatGateway.attrNatGatewayName;
        this.attrNatGatewayPrivateInfo = rosNatGateway.attrNatGatewayPrivateInfo;
        this.attrNatType = rosNatGateway.attrNatType;
        this.attrNetworkType = rosNatGateway.attrNetworkType;
        this.attrPaymentType = rosNatGateway.attrPaymentType;
        this.attrSecurityProtectionEnabled = rosNatGateway.attrSecurityProtectionEnabled;
        this.attrSnatTableIds = rosNatGateway.attrSnatTableIds;
        this.attrSpec = rosNatGateway.attrSpec;
        this.attrVpcId = rosNatGateway.attrVpcId;
    }
}

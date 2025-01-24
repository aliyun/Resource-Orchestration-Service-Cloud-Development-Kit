import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEipAddress } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnycastEipAddress as AnycastEipAddressProperty };

/**
 * Properties for defining a `AnycastEipAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export interface AnycastEipAddressProps {

    /**
     * Property anycastId: The ID of the Anycast EIP.
     */
    readonly anycastId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `AnycastEipAddress`.
 */
export interface IAnycastEipAddress extends ros.IResource {
    readonly props: AnycastEipAddressProps;

    /**
     * Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
     */
    readonly attrAliUid: ros.IResolvable | string;

    /**
     * Attribute AnycastEipAddressName: The name of the Anycast EIP.
     */
    readonly attrAnycastEipAddressName: ros.IResolvable | string;

    /**
     * Attribute AnycastId: The ID of the Anycast EIP.
     */
    readonly attrAnycastId: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute Bid: The BID of the account to which the Anycast EIP belongs.
     */
    readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The point in time at which the Anycast EIP was created. The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The billing method of the Anycast EIP. Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The IP address of the Anycast EIP.
     */
    readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the Anycast EIP.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ServiceLocation: The access area of the Anycast EIP. Only international may be returned, which indicates the areas outside the Chinese mainland.
     */
    readonly attrServiceLocation: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the Anycast EIP. Valid values:
* Associating
* Unassociating
* Allocated
* Associated
* Modifying
* Releasing
* Released
     */
    readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the EIP.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::Eipanycast::AnycastEipAddress`, which is used to query the information about an Anycast elastic IP address (Anycast EIP).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEipAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export class AnycastEipAddress extends ros.Resource implements IAnycastEipAddress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AnycastEipAddressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
     */
    public readonly attrAliUid: ros.IResolvable | string;

    /**
     * Attribute AnycastEipAddressName: The name of the Anycast EIP.
     */
    public readonly attrAnycastEipAddressName: ros.IResolvable | string;

    /**
     * Attribute AnycastId: The ID of the Anycast EIP.
     */
    public readonly attrAnycastId: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute Bid: The BID of the account to which the Anycast EIP belongs.
     */
    public readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The point in time at which the Anycast EIP was created. The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The billing method of the Anycast EIP. Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
     */
    public readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The IP address of the Anycast EIP.
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the Anycast EIP.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ServiceLocation: The access area of the Anycast EIP. Only international may be returned, which indicates the areas outside the Chinese mainland.
     */
    public readonly attrServiceLocation: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the Anycast EIP. Valid values:
* Associating
* Unassociating
* Allocated
* Associated
* Modifying
* Releasing
* Released
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the EIP.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEipAddressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAnycastEipAddress = new RosAnycastEipAddress(this, id,  {
            anycastId: props.anycastId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEipAddress;
        this.attrAliUid = rosAnycastEipAddress.attrAliUid;
        this.attrAnycastEipAddressName = rosAnycastEipAddress.attrAnycastEipAddressName;
        this.attrAnycastId = rosAnycastEipAddress.attrAnycastId;
        this.attrBandwidth = rosAnycastEipAddress.attrBandwidth;
        this.attrBid = rosAnycastEipAddress.attrBid;
        this.attrCreateTime = rosAnycastEipAddress.attrCreateTime;
        this.attrInternetChargeType = rosAnycastEipAddress.attrInternetChargeType;
        this.attrIpAddress = rosAnycastEipAddress.attrIpAddress;
        this.attrPaymentType = rosAnycastEipAddress.attrPaymentType;
        this.attrServiceLocation = rosAnycastEipAddress.attrServiceLocation;
        this.attrStatus = rosAnycastEipAddress.attrStatus;
        this.attrTags = rosAnycastEipAddress.attrTags;
    }
}

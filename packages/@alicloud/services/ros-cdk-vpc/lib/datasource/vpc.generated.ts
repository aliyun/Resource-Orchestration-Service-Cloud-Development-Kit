// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export interface RosAddressProps {

    /**
     * @Property allocationId: The ID of the EIP instance.
     */
    readonly allocationId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressProps`
 *
 * @returns the result of the validation.
 */
function RosAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EIP::Address` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EIP::Address` resource.
 */
// @ts-ignore TS6133
function rosAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'AllocationId': ros.stringToRosTemplate(properties.allocationId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EIP::Address`, which is used to query the information about a created elastic IP address (EIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `Address` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export class RosAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Address";

    /**
     * @Attribute AddressName: The name of the EIP.
     */
    public readonly attrAddressName: ros.IResolvable;

    /**
     * @Attribute AllocationId: The ID of the EIP instance.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    public readonly attrBandwidthPackageBandwidth: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    public readonly attrBandwidthPackageType: ros.IResolvable;

    /**
     * @Attribute BusinessStatus: The business status of the EIP instance.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the EIP was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute Description: The description of the EIP instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    public readonly attrEipBandwidth: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute HasReservationData: Whether there is renewal data.
     */
    public readonly attrHasReservationData: ros.IResolvable;

    /**
     * @Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    public readonly attrHdMonitorStatus: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the current bound instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    public readonly attrInstanceRegionId: ros.IResolvable;

    /**
     * @Attribute InstanceType: The type of the current bound instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute IpAddress: The IP address of the EIP.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute Isp: Service providers.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * @Attribute Netmode: Network type.
     */
    public readonly attrNetmode: ros.IResolvable;

    /**
     * @Attribute OperationLocks: Lock details.
     */
    public readonly attrOperationLocks: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the EIP.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    public readonly attrPublicIpAddressPoolId: ros.IResolvable;

    /**
     * @Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    public readonly attrReservationActiveTime: ros.IResolvable;

    /**
     * @Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    public readonly attrReservationBandwidth: ros.IResolvable;

    /**
     * @Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    public readonly attrReservationInternetChargeType: ros.IResolvable;

    /**
     * @Attribute ReservationOrderType: Renewal order type.
     */
    public readonly attrReservationOrderType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    public readonly attrSecondLimited: ros.IResolvable;

    /**
     * @Attribute SecurityProtectionTypes: Security protection level.
     */
    public readonly attrSecurityProtectionTypes: ros.IResolvable;

    /**
     * @Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    public readonly attrSegmentInstanceId: ros.IResolvable;

    /**
     * @Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    public readonly attrServiceManaged: ros.IResolvable;

    /**
     * @Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property allocationId: The ID of the EIP instance.
     */
    public allocationId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressName = this.getAtt('AddressName');
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBandwidthPackageBandwidth = this.getAtt('BandwidthPackageBandwidth');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.attrBandwidthPackageType = this.getAtt('BandwidthPackageType');
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDescription = this.getAtt('Description');
        this.attrEipBandwidth = this.getAtt('EipBandwidth');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrHasReservationData = this.getAtt('HasReservationData');
        this.attrHdMonitorStatus = this.getAtt('HdMonitorStatus');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceRegionId = this.getAtt('InstanceRegionId');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrIsp = this.getAtt('Isp');
        this.attrNetmode = this.getAtt('Netmode');
        this.attrOperationLocks = this.getAtt('OperationLocks');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPublicIpAddressPoolId = this.getAtt('PublicIpAddressPoolId');
        this.attrReservationActiveTime = this.getAtt('ReservationActiveTime');
        this.attrReservationBandwidth = this.getAtt('ReservationBandwidth');
        this.attrReservationInternetChargeType = this.getAtt('ReservationInternetChargeType');
        this.attrReservationOrderType = this.getAtt('ReservationOrderType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecondLimited = this.getAtt('SecondLimited');
        this.attrSecurityProtectionTypes = this.getAtt('SecurityProtectionTypes');
        this.attrSegmentInstanceId = this.getAtt('SegmentInstanceId');
        this.attrServiceManaged = this.getAtt('ServiceManaged');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.allocationId = props.allocationId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            allocationId: this.allocationId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAddresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
export interface RosAddressesProps {

    /**
     * @Property addressName: The name of the EIP.
     */
    readonly addressName?: string | ros.IResolvable;

    /**
     * @Property allocationId: The ID of the EIP that you want to query.
     */
    readonly allocationId?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the cloud resource.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the current bound instance.
     * - **EcsInstance**: an ECS instance of the VPC type.
     * - **SlbInstance**: an SLB instance of the VPC type.
     * - **Nat**:NAT gateway.
     * - **HaVip**: a highly available virtual IP address.
     * - **NetworkInterface**: Secondary ENI.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
     */
    readonly ipAddress?: string | ros.IResolvable;

    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. 
     * Only the following regions support BGP (Multi-ISP) Pro lines: 
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * @Property paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property segmentInstanceId: The ID of the consecutive EIPs.
     * This parameter value is returned only if the EIP is a continuous EIP.
     */
    readonly segmentInstanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAddressesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('segmentInstanceId', ros.validateString)(properties.segmentInstanceId));
    errors.collect(ros.propertyValidator('addressName', ros.validateString)(properties.addressName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.isp && (typeof properties.isp) !== 'object') {
        errors.collect(ros.propertyValidator('isp', ros.validateAllowedValues)({
          data: properties.isp,
          allowedValues: ["BGP","BGP_PRO","RunShellScript","ChinaTelecom","ChinaUnicom","ChinaMobile","ChinaTelecom_L2","ChinaUnicom_L2","ChinaMobile_L2"],
        }));
    }
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAddressesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EIP::Addresses` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EIP::Addresses` resource.
 */
// @ts-ignore TS6133
function rosAddressesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddressesPropsValidator(properties).assertSuccess();
    }
    return {
      'AddressName': ros.stringToRosTemplate(properties.addressName),
      'AllocationId': ros.stringToRosTemplate(properties.allocationId),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'IpAddress': ros.stringToRosTemplate(properties.ipAddress),
      'Isp': ros.stringToRosTemplate(properties.isp),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SegmentInstanceId': ros.stringToRosTemplate(properties.segmentInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EIP::Addresses`, which is used to query the information about elastic IP addresses (EIPs).
 * @Note This class does not contain additional functions, so it is recommended to use the `Addresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
export class RosAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Addresses";

    /**
     * @Attribute Addresses: The details about the EIP
     */
    public readonly attrAddresses: ros.IResolvable;

    /**
     * @Attribute AllocationIds: The list of allocation IDs.
     */
    public readonly attrAllocationIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressName: The name of the EIP.
     */
    public addressName: string | ros.IResolvable | undefined;

    /**
     * @Property allocationId: The ID of the EIP that you want to query.
     */
    public allocationId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the cloud resource.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The type of the current bound instance.
     * - **EcsInstance**: an ECS instance of the VPC type.
     * - **SlbInstance**: an SLB instance of the VPC type.
     * - **Nat**:NAT gateway.
     * - **HaVip**: a highly available virtual IP address.
     * - **NetworkInterface**: Secondary ENI.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
     */
    public ipAddress: string | ros.IResolvable | undefined;

    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. 
     * Only the following regions support BGP (Multi-ISP) Pro lines: 
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property segmentInstanceId: The ID of the consecutive EIPs.
     * This parameter value is returned only if the EIP is a continuous EIP.
     */
    public segmentInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddresses = this.getAtt('Addresses');
        this.attrAllocationIds = this.getAtt('AllocationIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressName = props.addressName;
        this.allocationId = props.allocationId;
        this.instanceId = props.instanceId;
        this.instanceType = props.instanceType;
        this.ipAddress = props.ipAddress;
        this.isp = props.isp;
        this.paymentType = props.paymentType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.segmentInstanceId = props.segmentInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressName: this.addressName,
            allocationId: this.allocationId,
            instanceId: this.instanceId,
            instanceType: this.instanceType,
            ipAddress: this.ipAddress,
            isp: this.isp,
            paymentType: this.paymentType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            segmentInstanceId: this.segmentInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAnycastEipAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export interface RosAnycastEipAddressProps {

    /**
     * @Property anycastId: The ID of the Anycast EIP.
     */
    readonly anycastId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnycastEipAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosAnycastEipAddressProps`
 *
 * @returns the result of the validation.
 */
function RosAnycastEipAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('anycastId', ros.requiredValidator)(properties.anycastId));
    errors.collect(ros.propertyValidator('anycastId', ros.validateString)(properties.anycastId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAnycastEipAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::Eipanycast::AnycastEipAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosAnycastEipAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::Eipanycast::AnycastEipAddress` resource.
 */
// @ts-ignore TS6133
function rosAnycastEipAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnycastEipAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'AnycastId': ros.stringToRosTemplate(properties.anycastId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::Eipanycast::AnycastEipAddress`, which is used to query the information about an Anycast elastic IP address (Anycast EIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEipAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export class RosAnycastEipAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::Eipanycast::AnycastEipAddress";

    /**
     * @Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * @Attribute AnycastEipAddressName: The name of the Anycast EIP.
     */
    public readonly attrAnycastEipAddressName: ros.IResolvable;

    /**
     * @Attribute AnycastId: The ID of the Anycast EIP.
     */
    public readonly attrAnycastId: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute Bid: The BID of the account to which the Anycast EIP belongs.
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * @Attribute CreateTime: The point in time at which the Anycast EIP was created. The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: The billing method of the Anycast EIP. Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute IpAddress: The IP address of the Anycast EIP.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the Anycast EIP.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ServiceLocation: The access area of the Anycast EIP. Only international may be returned, which indicates the areas outside the Chinese mainland.
     */
    public readonly attrServiceLocation: ros.IResolvable;

    /**
     * @Attribute Status: The status of the Anycast EIP. Valid values:
* Associating
* Unassociating
* Allocated
* Associated
* Modifying
* Releasing
* Released
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the EIP.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property anycastId: The ID of the Anycast EIP.
     */
    public anycastId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnycastEipAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnycastEipAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliUid = this.getAtt('AliUid');
        this.attrAnycastEipAddressName = this.getAtt('AnycastEipAddressName');
        this.attrAnycastId = this.getAtt('AnycastId');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBid = this.getAtt('Bid');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrServiceLocation = this.getAtt('ServiceLocation');
        this.attrStatus = this.getAtt('Status');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.anycastId = props.anycastId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            anycastId: this.anycastId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnycastEipAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBgpPeer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export interface RosBgpPeerProps {

    /**
     * @Property bgpPeerId: The ID of the BGP peer.
     */
    readonly bgpPeerId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBgpPeerProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the result of the validation.
 */
function RosBgpPeerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bgpPeerId', ros.validateString)(properties.bgpPeerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBgpPeerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::BgpPeer` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::BgpPeer` resource.
 */
// @ts-ignore TS6133
function rosBgpPeerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBgpPeerPropsValidator(properties).assertSuccess();
    }
    return {
      'BgpPeerId': ros.stringToRosTemplate(properties.bgpPeerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::BgpPeer`, which is used to query the information about a Border Gateway Protocol (BGP) peer in a region.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export class RosBgpPeer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::BgpPeer";

    /**
     * @Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    public readonly attrAdvertisedRouteCount: ros.IResolvable;

    /**
     * @Attribute AuthKey: The authentication key of the BGP group.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * @Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    public readonly attrBfdMultiHop: ros.IResolvable;

    /**
     * @Attribute BgpGroupId: The ID of the BGP group.
     */
    public readonly attrBgpGroupId: ros.IResolvable;

    /**
     * @Attribute BgpPeerId: The ID of the BGP peer.
     */
    public readonly attrBgpPeerId: ros.IResolvable;

    /**
     * @Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    public readonly attrBgpStatus: ros.IResolvable;

    /**
     * @Attribute Description: The description of the BGP group.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    public readonly attrEnableBfd: ros.IResolvable;

    /**
     * @Attribute GmtModified: The time when the BGP peer is modified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * @Attribute Hold: The hold time.
     */
    public readonly attrHold: ros.IResolvable;

    /**
     * @Attribute IpVersion: The version of the IP address.
     */
    public readonly attrIpVersion: ros.IResolvable;

    /**
     * @Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    public readonly attrIsFake: ros.IResolvable;

    /**
     * @Attribute Keepalive: The Keepalive interval.
     */
    public readonly attrKeepalive: ros.IResolvable;

    /**
     * @Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    public readonly attrLocalAsn: ros.IResolvable;

    /**
     * @Attribute Name: The name of the BGP peer.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    public readonly attrPeerAsn: ros.IResolvable;

    /**
     * @Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    public readonly attrPeerIpAddress: ros.IResolvable;

    /**
     * @Attribute ReceivedRouteCount: The number of received routes.
     */
    public readonly attrReceivedRouteCount: ros.IResolvable;

    /**
     * @Attribute RouteLimit: The maximum number of routes.
     */
    public readonly attrRouteLimit: ros.IResolvable;

    /**
     * @Attribute RouterId: The Router ID.
     */
    public readonly attrRouterId: ros.IResolvable;

    /**
     * @Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bgpPeerId: The ID of the BGP peer.
     */
    public bgpPeerId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpPeerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBgpPeer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAdvertisedRouteCount = this.getAtt('AdvertisedRouteCount');
        this.attrAuthKey = this.getAtt('AuthKey');
        this.attrBfdMultiHop = this.getAtt('BfdMultiHop');
        this.attrBgpGroupId = this.getAtt('BgpGroupId');
        this.attrBgpPeerId = this.getAtt('BgpPeerId');
        this.attrBgpStatus = this.getAtt('BgpStatus');
        this.attrDescription = this.getAtt('Description');
        this.attrEnableBfd = this.getAtt('EnableBfd');
        this.attrGmtModified = this.getAtt('GmtModified');
        this.attrHold = this.getAtt('Hold');
        this.attrIpVersion = this.getAtt('IpVersion');
        this.attrIsFake = this.getAtt('IsFake');
        this.attrKeepalive = this.getAtt('Keepalive');
        this.attrLocalAsn = this.getAtt('LocalAsn');
        this.attrName = this.getAtt('Name');
        this.attrPeerAsn = this.getAtt('PeerAsn');
        this.attrPeerIpAddress = this.getAtt('PeerIpAddress');
        this.attrReceivedRouteCount = this.getAtt('ReceivedRouteCount');
        this.attrRouteLimit = this.getAtt('RouteLimit');
        this.attrRouterId = this.getAtt('RouterId');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bgpPeerId = props.bgpPeerId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bgpPeerId: this.bgpPeerId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBgpPeerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBgpPeers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export interface RosBgpPeersProps {

    /**
     * @Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
     */
    readonly bgpGroupId?: string | ros.IResolvable;

    /**
     * @Property bgpPeerId: The ID of the BGP peer that you want to query.
     */
    readonly bgpPeerId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
     */
    readonly routerId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBgpPeersProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpPeersProps`
 *
 * @returns the result of the validation.
 */
function RosBgpPeersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bgpPeerId', ros.validateString)(properties.bgpPeerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('bgpGroupId', ros.validateString)(properties.bgpGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBgpPeersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::BgpPeers` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpPeersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::BgpPeers` resource.
 */
// @ts-ignore TS6133
function rosBgpPeersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBgpPeersPropsValidator(properties).assertSuccess();
    }
    return {
      'BgpGroupId': ros.stringToRosTemplate(properties.bgpGroupId),
      'BgpPeerId': ros.stringToRosTemplate(properties.bgpPeerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'RouterId': ros.stringToRosTemplate(properties.routerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::BgpPeers`, which is used to query Border Gateway Protocol (BGP) peers in a region.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export class RosBgpPeers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::BgpPeers";

    /**
     * @Attribute BgpPeerIds: The list of The BGP peer ids.
     */
    public readonly attrBgpPeerIds: ros.IResolvable;

    /**
     * @Attribute BgpPeers: The list of The BGP peers.
     */
    public readonly attrBgpPeers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
     */
    public bgpGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property bgpPeerId: The ID of the BGP peer that you want to query.
     */
    public bgpPeerId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
     */
    public routerId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpPeersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBgpPeers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBgpPeerIds = this.getAtt('BgpPeerIds');
        this.attrBgpPeers = this.getAtt('BgpPeers');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bgpGroupId = props.bgpGroupId;
        this.bgpPeerId = props.bgpPeerId;
        this.refreshOptions = props.refreshOptions;
        this.routerId = props.routerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bgpGroupId: this.bgpGroupId,
            bgpPeerId: this.bgpPeerId,
            refreshOptions: this.refreshOptions,
            routerId: this.routerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBgpPeersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export interface RosCommonBandwidthPackageProps {

    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('commonBandwidthPackageName', ros.validateString)(properties.commonBandwidthPackageName));
    errors.collect(ros.propertyValidator('commonBandwidthPackageId', ros.validateString)(properties.commonBandwidthPackageId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CommonBandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CommonBandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommonBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'CommonBandwidthPackageId': ros.stringToRosTemplate(properties.commonBandwidthPackageId),
      'CommonBandwidthPackageName': ros.stringToRosTemplate(properties.commonBandwidthPackageName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackage`, which is used to query the information about an Internet Shared Bandwidth instance in a region.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackage";

    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance. Valid values:
* Normal: The Internet Shared Bandwidth instance runs as expected.
* FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
* Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    public readonly attrCommonBandwidthPackageId: ros.IResolvable;

    /**
     * @Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    public readonly attrCommonBandwidthPackageName: ros.IResolvable;

    /**
     * @Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public readonly attrCreationTime: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Indicates whether deletion protection is enabled. Valid values:
* false
* true
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute HasReservationData: Indicates whether the information about pending orders is returned. Valid values:
* false
* true
     */
    public readonly attrHasReservationData: ros.IResolvable;

    /**
     * @Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance. Valid value:
* PostPaid: pay-as-you-go
* PrePaid: subscription
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute Isp: The line type. Valid values:
BGP (default): BGP (Multi-ISP) lines.
BGP_PRO: BGP (Multi-ISP) Pro lines.
Valid values if you are allowed to use single-ISP bandwidth:
ChinaTelecom
ChinaUnicom
ChinaMobile
ChinaTelecom_L2
ChinaUnicom_L2
ChinaMobile_L2
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * @Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    public readonly attrPublicIpAddresses: ros.IResolvable;

    /**
     * @Attribute Ratio: The percentage of the minimum bandwidth commitment. Only 20 is returned.
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * @Attribute ReservationActiveTime: The time when the renewal took effect. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public readonly attrReservationActiveTime: ros.IResolvable;

    /**
     * @Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.
     */
    public readonly attrReservationBandwidth: ros.IResolvable;

    /**
     * @Attribute ReservationInternetChargeType: The metering method after the configurations are changed. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    public readonly attrReservationInternetChargeType: ros.IResolvable;

    /**
     * @Attribute ReservationOrderType: The renewal method. Valid values:
* RENEWCHANGE: renewal with a specification change
* TEMP_UPGRADE: renewal with a temporary upgrade
* UPGRADE: renewal with an upgrade
     */
    public readonly attrReservationOrderType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ServiceManaged: Indicates whether the resource is created by the service account. Valid values:
* 0: The resource is not created by the service account.
* 1: The resource is created by the service account.
     */
    public readonly attrServiceManaged: ros.IResolvable;

    /**
     * @Attribute Status: The status of the Internet Shared Bandwidth instance. Valid values:
* Available: The Internet Shared Bandwidth instance is available.
* Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    public commonBandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    public commonBandwidthPackageName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommonBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrCommonBandwidthPackageId = this.getAtt('CommonBandwidthPackageId');
        this.attrCommonBandwidthPackageName = this.getAtt('CommonBandwidthPackageName');
        this.attrCreationTime = this.getAtt('CreationTime');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDescription = this.getAtt('Description');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrHasReservationData = this.getAtt('HasReservationData');
        this.attrInstanceChargeType = this.getAtt('InstanceChargeType');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrIsp = this.getAtt('Isp');
        this.attrPublicIpAddresses = this.getAtt('PublicIpAddresses');
        this.attrRatio = this.getAtt('Ratio');
        this.attrReservationActiveTime = this.getAtt('ReservationActiveTime');
        this.attrReservationBandwidth = this.getAtt('ReservationBandwidth');
        this.attrReservationInternetChargeType = this.getAtt('ReservationInternetChargeType');
        this.attrReservationOrderType = this.getAtt('ReservationOrderType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrServiceManaged = this.getAtt('ServiceManaged');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commonBandwidthPackageId = props.commonBandwidthPackageId;
        this.commonBandwidthPackageName = props.commonBandwidthPackageName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commonBandwidthPackageId: this.commonBandwidthPackageId,
            commonBandwidthPackageName: this.commonBandwidthPackageName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommonBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCommonBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export interface RosCommonBandwidthPackagesProps {

    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackagesProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackagesProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackagesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('commonBandwidthPackageName', ros.validateString)(properties.commonBandwidthPackageName));
    errors.collect(ros.propertyValidator('commonBandwidthPackageId', ros.validateString)(properties.commonBandwidthPackageId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackagesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CommonBandwidthPackages` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackagesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CommonBandwidthPackages` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackagesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommonBandwidthPackagesPropsValidator(properties).assertSuccess();
    }
    return {
      'CommonBandwidthPackageId': ros.stringToRosTemplate(properties.commonBandwidthPackageId),
      'CommonBandwidthPackageName': ros.stringToRosTemplate(properties.commonBandwidthPackageName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackages`, which is used to query the Internet Shared Bandwidth instances in a region.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export class RosCommonBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackages";

    /**
     * @Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    public readonly attrCommonBandwidthPackageIds: ros.IResolvable;

    /**
     * @Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    public readonly attrCommonBandwidthPackages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    public commonBandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    public commonBandwidthPackageName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackagesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommonBandwidthPackages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommonBandwidthPackageIds = this.getAtt('CommonBandwidthPackageIds');
        this.attrCommonBandwidthPackages = this.getAtt('CommonBandwidthPackages');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commonBandwidthPackageId = props.commonBandwidthPackageId;
        this.commonBandwidthPackageName = props.commonBandwidthPackageName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commonBandwidthPackageId: this.commonBandwidthPackageId,
            commonBandwidthPackageName: this.commonBandwidthPackageName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommonBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export interface RosCustomerGatewayProps {

    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomerGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosCustomerGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customerGatewayId', ros.requiredValidator)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCustomerGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CustomerGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CustomerGateway` resource.
 */
// @ts-ignore TS6133
function rosCustomerGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomerGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'CustomerGatewayId': ros.stringToRosTemplate(properties.customerGatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CustomerGateway`, which is used to query the information about a customer gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export class RosCustomerGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateway";

    /**
     * @Attribute Asn: Asn.
     */
    public readonly attrAsn: ros.IResolvable;

    /**
     * @Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the customer gateway was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CustomerGatewayId: The ID of the customer gateway.
     */
    public readonly attrCustomerGatewayId: ros.IResolvable;

    /**
     * @Attribute CustomerGatewayName: The name of the customer gateway.
     */
    public readonly attrCustomerGatewayName: ros.IResolvable;

    /**
     * @Attribute Description: The description of the customer gateway.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IpAddress: The IP address of the customer gateway.
     */
    public readonly attrIpAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    public customerGatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomerGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomerGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAsn = this.getAtt('Asn');
        this.attrAuthKey = this.getAtt('AuthKey');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCustomerGatewayId = this.getAtt('CustomerGatewayId');
        this.attrCustomerGatewayName = this.getAtt('CustomerGatewayName');
        this.attrDescription = this.getAtt('Description');
        this.attrIpAddress = this.getAtt('IpAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            customerGatewayId: this.customerGatewayId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomerGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomerGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export interface RosCustomerGatewaysProps {

    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomerGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosCustomerGatewaysPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCustomerGatewaysProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CustomerGateways` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewaysProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::CustomerGateways` resource.
 */
// @ts-ignore TS6133
function rosCustomerGatewaysPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomerGatewaysPropsValidator(properties).assertSuccess();
    }
    return {
      'CustomerGatewayId': ros.stringToRosTemplate(properties.customerGatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CustomerGateways`, which is used to query customer gateways.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export class RosCustomerGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateways";

    /**
     * @Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    public readonly attrCustomerGatewayIds: ros.IResolvable;

    /**
     * @Attribute CustomerGateways: The list of customer gateways.
     */
    public readonly attrCustomerGateways: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    public customerGatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomerGatewaysProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomerGateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomerGatewayIds = this.getAtt('CustomerGatewayIds');
        this.attrCustomerGateways = this.getAtt('CustomerGateways');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            customerGatewayId: this.customerGatewayId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomerGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFlowLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export interface RosFlowLogProps {

    /**
     * @Property flowLogId: The flow log ID.
     */
    readonly flowLogId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowLogProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the result of the validation.
 */
function RosFlowLogPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowLogId', ros.requiredValidator)(properties.flowLogId));
    errors.collect(ros.propertyValidator('flowLogId', ros.validateString)(properties.flowLogId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosFlowLogProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::FlowLog` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::FlowLog` resource.
 */
// @ts-ignore TS6133
function rosFlowLogPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowLogPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowLogId': ros.stringToRosTemplate(properties.flowLogId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::FlowLog`, which is used to query a flow log by log ID.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export class RosFlowLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLog";

    /**
     * @Attribute AggregationInterval: Data aggregation interval.
     */
    public readonly attrAggregationInterval: ros.IResolvable;

    /**
     * @Attribute BusinessStatus: Business status.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: the time of creation.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The Description of flow log.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute FlowLogId: The flow log ID.
     */
    public readonly attrFlowLogId: ros.IResolvable;

    /**
     * @Attribute FlowLogName: The flow log name.
     */
    public readonly attrFlowLogName: ros.IResolvable;

    /**
     * @Attribute LogStoreName: The log store name.
     */
    public readonly attrLogStoreName: ros.IResolvable;

    /**
     * @Attribute ProjectName: The project name.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * @Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * @Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TrafficType: The traffic type.
     */
    public readonly attrTrafficType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowLogId: The flow log ID.
     */
    public flowLogId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowLogProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowLog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAggregationInterval = this.getAtt('AggregationInterval');
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrFlowLogId = this.getAtt('FlowLogId');
        this.attrFlowLogName = this.getAtt('FlowLogName');
        this.attrLogStoreName = this.getAtt('LogStoreName');
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTrafficType = this.getAtt('TrafficType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowLogId = props.flowLogId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowLogId: this.flowLogId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowLogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFlowLogs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
 */
export interface RosFlowLogsProps {

    /**
     * @Property description: The description of the flow log.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property flowLogId: The ID of a flow log.
     */
    readonly flowLogId?: string | ros.IResolvable;

    /**
     * @Property flowLogName: The name of the flow log.
     */
    readonly flowLogName?: string | ros.IResolvable;

    /**
     * @Property logStoreName: A LogStore that stores captured traffic.
     */
    readonly logStoreName?: string | ros.IResolvable;

    /**
     * @Property projectName: Manage the captured traffic of the Project.
     */
    readonly projectName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceId: The ID of the resource group to which the flow log belongs.
     */
    readonly resourceId?: string | ros.IResolvable;

    /**
     * @Property resourceType: The resource type of traffic to capture. Value:
     * NetworkInterface: Elastic NIC.
     * VSwitch: All ENIs within the VSwitch.
     * VPC: All ENIs in a VPC.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * @Property trafficType: The type of traffic collected. Value:
     * All: All traffic.
     * Allow: Traffic allowed by access control.
     * Drop: Traffic denied by access control.
     */
    readonly trafficType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowLogsProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowLogsProps`
 *
 * @returns the result of the validation.
 */
function RosFlowLogsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowLogName', ros.validateString)(properties.flowLogName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('logStoreName', ros.validateString)(properties.logStoreName));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["NetworkInterface","VSwitch","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('flowLogId', ros.validateString)(properties.flowLogId));
    if(properties.trafficType && (typeof properties.trafficType) !== 'object') {
        errors.collect(ros.propertyValidator('trafficType', ros.validateAllowedValues)({
          data: properties.trafficType,
          allowedValues: ["All","Allow","Drop"],
        }));
    }
    errors.collect(ros.propertyValidator('trafficType', ros.validateString)(properties.trafficType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosFlowLogsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::FlowLogs` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowLogsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::FlowLogs` resource.
 */
// @ts-ignore TS6133
function rosFlowLogsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowLogsPropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'FlowLogId': ros.stringToRosTemplate(properties.flowLogId),
      'FlowLogName': ros.stringToRosTemplate(properties.flowLogName),
      'LogStoreName': ros.stringToRosTemplate(properties.logStoreName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'TrafficType': ros.stringToRosTemplate(properties.trafficType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::FlowLogs`, which is used to query flow logs.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLogs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
 */
export class RosFlowLogs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLogs";

    /**
     * @Attribute FlowLogIds: The list of flow log IDs.
     */
    public readonly attrFlowLogIds: ros.IResolvable;

    /**
     * @Attribute FlowLogs: The list of flow logs.
     */
    public readonly attrFlowLogs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the flow log.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property flowLogId: The ID of a flow log.
     */
    public flowLogId: string | ros.IResolvable | undefined;

    /**
     * @Property flowLogName: The name of the flow log.
     */
    public flowLogName: string | ros.IResolvable | undefined;

    /**
     * @Property logStoreName: A LogStore that stores captured traffic.
     */
    public logStoreName: string | ros.IResolvable | undefined;

    /**
     * @Property projectName: Manage the captured traffic of the Project.
     */
    public projectName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceId: The ID of the resource group to which the flow log belongs.
     */
    public resourceId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceType: The resource type of traffic to capture. Value:
     * NetworkInterface: Elastic NIC.
     * VSwitch: All ENIs within the VSwitch.
     * VPC: All ENIs in a VPC.
     */
    public resourceType: string | ros.IResolvable | undefined;

    /**
     * @Property trafficType: The type of traffic collected. Value:
     * All: All traffic.
     * Allow: Traffic allowed by access control.
     * Drop: Traffic denied by access control.
     */
    public trafficType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowLogsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowLogs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowLogIds = this.getAtt('FlowLogIds');
        this.attrFlowLogs = this.getAtt('FlowLogs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.flowLogId = props.flowLogId;
        this.flowLogName = props.flowLogName;
        this.logStoreName = props.logStoreName;
        this.projectName = props.projectName;
        this.refreshOptions = props.refreshOptions;
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.trafficType = props.trafficType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            flowLogId: this.flowLogId,
            flowLogName: this.flowLogName,
            logStoreName: this.logStoreName,
            projectName: this.projectName,
            refreshOptions: this.refreshOptions,
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            trafficType: this.trafficType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowLogsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHaVip`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export interface RosHaVipProps {

    /**
     * @Property haVipId: The  ID of the resource.
     */
    readonly haVipId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHaVipProps`
 *
 * @param properties - the TypeScript properties of a `RosHaVipProps`
 *
 * @returns the result of the validation.
 */
function RosHaVipPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('haVipId', ros.requiredValidator)(properties.haVipId));
    errors.collect(ros.propertyValidator('haVipId', ros.validateString)(properties.haVipId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHaVipProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::HaVip` resource
 *
 * @param properties - the TypeScript properties of a `RosHaVipProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::HaVip` resource.
 */
// @ts-ignore TS6133
function rosHaVipPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHaVipPropsValidator(properties).assertSuccess();
    }
    return {
      'HaVipId': ros.stringToRosTemplate(properties.haVipId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::HaVip`, which is used to query a high-availability virtual IP address (HAVIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVip` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export class RosHaVip extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVip";

    /**
     * @Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    public readonly attrAssociatedEipAddresses: ros.IResolvable;

    /**
     * @Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    public readonly attrAssociatedInstanceType: ros.IResolvable;

    /**
     * @Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    public readonly attrAssociatedInstances: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the  resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Dependence of a HaVip instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HaVipId: The  ID of the resource.
     */
    public readonly attrHaVipId: ros.IResolvable;

    /**
     * @Attribute HaVipName: The name of the HaVip instance.
     */
    public readonly attrHaVipName: ros.IResolvable;

    /**
     * @Attribute IpAddress: IP address of private network.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    public readonly attrMasterInstanceId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property haVipId: The  ID of the resource.
     */
    public haVipId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHaVipProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHaVip.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAssociatedEipAddresses = this.getAtt('AssociatedEipAddresses');
        this.attrAssociatedInstanceType = this.getAtt('AssociatedInstanceType');
        this.attrAssociatedInstances = this.getAtt('AssociatedInstances');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrHaVipId = this.getAtt('HaVipId');
        this.attrHaVipName = this.getAtt('HaVipName');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrMasterInstanceId = this.getAtt('MasterInstanceId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.haVipId = props.haVipId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            haVipId: this.haVipId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHaVipPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHaVips`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export interface RosHaVipsProps {

    /**
     * @Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHaVipsProps`
 *
 * @param properties - the TypeScript properties of a `RosHaVipsProps`
 *
 * @returns the result of the validation.
 */
function RosHaVipsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('haVipId', ros.validateString)(properties.haVipId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHaVipsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::HaVips` resource
 *
 * @param properties - the TypeScript properties of a `RosHaVipsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::HaVips` resource.
 */
// @ts-ignore TS6133
function rosHaVipsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHaVipsPropsValidator(properties).assertSuccess();
    }
    return {
      'HaVipId': ros.stringToRosTemplate(properties.haVipId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::HaVips`, which is used to query the high-availability virtual IP addresses (HAVIPs) in a specific region.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVips` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export class RosHaVips extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVips";

    /**
     * @Attribute HaVipIds: The list of ha vip IDs.
     */
    public readonly attrHaVipIds: ros.IResolvable;

    /**
     * @Attribute HaVips: The list of ha vips.
     */
    public readonly attrHaVips: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property haVipId: The  ID of the resource
     */
    public haVipId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHaVipsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHaVips.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHaVipIds = this.getAtt('HaVipIds');
        this.attrHaVips = this.getAtt('HaVips');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.haVipId = props.haVipId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            haVipId: this.haVipId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHaVipsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosIpv4Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export interface RosIpv4GatewayProps {

    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIpv4GatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewayProps`
 *
 * @returns the result of the validation.
 */
function RosIpv4GatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipv4GatewayId', ros.requiredValidator)(properties.ipv4GatewayId));
    errors.collect(ros.propertyValidator('ipv4GatewayId', ros.validateString)(properties.ipv4GatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosIpv4GatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Ipv4Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Ipv4Gateway` resource.
 */
// @ts-ignore TS6133
function rosIpv4GatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpv4GatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'Ipv4GatewayId': ros.stringToRosTemplate(properties.ipv4GatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Ipv4Gateway`, which is used to query the information about an IPv4 gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export class RosIpv4Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateway";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Enabled: Enabled.
     */
    public readonly attrEnabled: ros.IResolvable;

    /**
     * @Attribute Ipv4GatewayDescription: Description information.
     */
    public readonly attrIpv4GatewayDescription: ros.IResolvable;

    /**
     * @Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public readonly attrIpv4GatewayId: ros.IResolvable;

    /**
     * @Attribute Ipv4GatewayName: Resource name.
     */
    public readonly attrIpv4GatewayName: ros.IResolvable;

    /**
     * @Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    public readonly attrIpv4GatewayRouteTableId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public ipv4GatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv4GatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpv4Gateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEnabled = this.getAtt('Enabled');
        this.attrIpv4GatewayDescription = this.getAtt('Ipv4GatewayDescription');
        this.attrIpv4GatewayId = this.getAtt('Ipv4GatewayId');
        this.attrIpv4GatewayName = this.getAtt('Ipv4GatewayName');
        this.attrIpv4GatewayRouteTableId = this.getAtt('Ipv4GatewayRouteTableId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipv4GatewayId = props.ipv4GatewayId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipv4GatewayId: this.ipv4GatewayId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpv4GatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosIpv4Gateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export interface RosIpv4GatewaysProps {

    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId?: string | ros.IResolvable;

    /**
     * @Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIpv4GatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosIpv4GatewaysPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipv4GatewayName', ros.validateString)(properties.ipv4GatewayName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('ipv4GatewayId', ros.validateString)(properties.ipv4GatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosIpv4GatewaysProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Ipv4Gateways` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewaysProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Ipv4Gateways` resource.
 */
// @ts-ignore TS6133
function rosIpv4GatewaysPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpv4GatewaysPropsValidator(properties).assertSuccess();
    }
    return {
      'Ipv4GatewayId': ros.stringToRosTemplate(properties.ipv4GatewayId),
      'Ipv4GatewayName': ros.stringToRosTemplate(properties.ipv4GatewayName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`, which is used to query the details of IPv4 gateways.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export class RosIpv4Gateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateways";

    /**
     * @Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    public readonly attrIpv4GatewayIds: ros.IResolvable;

    /**
     * @Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    public readonly attrIpv4Gateways: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public ipv4GatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property ipv4GatewayName: Resource name.
     */
    public ipv4GatewayName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv4GatewaysProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpv4Gateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv4GatewayIds = this.getAtt('Ipv4GatewayIds');
        this.attrIpv4Gateways = this.getAtt('Ipv4Gateways');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipv4GatewayId = props.ipv4GatewayId;
        this.ipv4GatewayName = props.ipv4GatewayName;
        this.refreshOptions = props.refreshOptions;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipv4GatewayId: this.ipv4GatewayId,
            ipv4GatewayName: this.ipv4GatewayName,
            refreshOptions: this.refreshOptions,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpv4GatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export interface RosNatGatewayProps {

    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNatGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGateway` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'NatGatewayId': ros.stringToRosTemplate(properties.natGatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGateway`, which is used to query the information about a NAT gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateway";

    /**
     * @Attribute AutoPay: Indicates whether automatic payment is enabled. Valid values:
* false: no
true: yes
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * @Attribute BusinessStatus: The status of the NAT gateway. Valid values:
* Normal: normal
* FinancialLocked: locked due to overdue payments
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the NAT gateway was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled. Valid values:
* true: yes
* false: no
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute Description: The description of the NAT gateway.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
* MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    public readonly attrEipBindMode: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    public readonly attrForwardTableIds: ros.IResolvable;

    /**
     * @Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
* true: yes
* false: no
     */
    public readonly attrIcmpReplyEnabled: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: The metering method of the NAT gateway. Valid values:
* PayBySpec: pay-by-specification
* PayByLcu: pay-by-CU
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    public readonly attrIpLists: ros.IResolvable;

    /**
     * @Attribute NatGatewayId: The ID of the NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable;

    /**
     * @Attribute NatGatewayName: The name of the NAT gateway. The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    public readonly attrNatGatewayName: ros.IResolvable;

    /**
     * @Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    public readonly attrNatGatewayPrivateInfo: ros.IResolvable;

    /**
     * @Attribute NatType: The type of the NAT gateway. The value is set to Enhanced (enhanced NAT gateway).
     */
    public readonly attrNatType: ros.IResolvable;

    /**
     * @Attribute NetworkType: The type of NAT gateway. Valid values:
* internet: an Internet NAT gateway
* intranet: a VPC NAT gateway
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the NAT gateway. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled. Valid values:
false: no
true: yes
     */
    public readonly attrSecurityProtectionEnabled: ros.IResolvable;

    /**
     * @Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    public readonly attrSnatTableIds: ros.IResolvable;

    /**
     * @Attribute Spec: The size of the NAT gateway. An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    public natGatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoPay = this.getAtt('AutoPay');
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDescription = this.getAtt('Description');
        this.attrEipBindMode = this.getAtt('EipBindMode');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrForwardTableIds = this.getAtt('ForwardTableIds');
        this.attrIcmpReplyEnabled = this.getAtt('IcmpReplyEnabled');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrIpLists = this.getAtt('IpLists');
        this.attrNatGatewayId = this.getAtt('NatGatewayId');
        this.attrNatGatewayName = this.getAtt('NatGatewayName');
        this.attrNatGatewayPrivateInfo = this.getAtt('NatGatewayPrivateInfo');
        this.attrNatType = this.getAtt('NatType');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrSecurityProtectionEnabled = this.getAtt('SecurityProtectionEnabled');
        this.attrSnatTableIds = this.getAtt('SnatTableIds');
        this.attrSpec = this.getAtt('Spec');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            natGatewayId: this.natGatewayId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatGatewayZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export interface RosNatGatewayZonesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatGatewayZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayZonesProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNatGatewayZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGatewayZones` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGatewayZones` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatGatewayZonesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGatewayZones`, which is used to query the zones of a NAT gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGatewayZones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export class RosNatGatewayZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGatewayZones";

    /**
     * @Attribute ZoneIds: The list of The Zone Ids.
     */
    public readonly attrZoneIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGatewayZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatGatewayZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
 */
export interface RosNatGatewaysProps {

    /**
     * @Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property name: The name of the NAT gateway.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId?: string | ros.IResolvable;

    /**
     * @Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
     */
    readonly natType?: string | ros.IResolvable;

    /**
     * @Property networkType: The type of the NAT gateway. Valid values:
     * internet: an Internet NAT gateway
     *  intranet: a VPC NAT gateway
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property status: The status of the NAT gateway. Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     *  Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     *  Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     *  Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     *  Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewaysPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('natType', ros.validateString)(properties.natType));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNatGatewaysProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGateways` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewaysProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatGateways` resource.
 */
// @ts-ignore TS6133
function rosNatGatewaysPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatGatewaysPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'Name': ros.stringToRosTemplate(properties.name),
      'NatGatewayId': ros.stringToRosTemplate(properties.natGatewayId),
      'NatType': ros.stringToRosTemplate(properties.natType),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGateways`, which is used to query NAT gateways.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
 */
export class RosNatGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateways";

    /**
     * @Attribute NatGatewayIds: The list of The nat gateway ids.
     */
    public readonly attrNatGatewayIds: ros.IResolvable;

    /**
     * @Attribute NatGateways: The list of The nat gateways.
     */
    public readonly attrNatGateways: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the NAT gateway.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    public natGatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
     */
    public natType: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The type of the NAT gateway. Valid values:
     * internet: an Internet NAT gateway
     *  intranet: a VPC NAT gateway
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the NAT gateway. Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     *  Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     *  Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     *  Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     *  Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewaysProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatGatewayIds = this.getAtt('NatGatewayIds');
        this.attrNatGateways = this.getAtt('NatGateways');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.natGatewayId = props.natGatewayId;
        this.natType = props.natType;
        this.networkType = props.networkType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.status = props.status;
        this.vpcId = props.vpcId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            natGatewayId: this.natGatewayId,
            natType: this.natType,
            networkType: this.networkType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            status: this.status,
            vpcId: this.vpcId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatIpCidrs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export interface RosNatIpCidrsProps {

    /**
     * @Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    readonly natIpCidr?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatIpCidrsProps`
 *
 * @param properties - the TypeScript properties of a `RosNatIpCidrsProps`
 *
 * @returns the result of the validation.
 */
function RosNatIpCidrsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natIpCidr', ros.validateString)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNatIpCidrsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatIpCidrs` resource
 *
 * @param properties - the TypeScript properties of a `RosNatIpCidrsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NatIpCidrs` resource.
 */
// @ts-ignore TS6133
function rosNatIpCidrsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatIpCidrsPropsValidator(properties).assertSuccess();
    }
    return {
      'NatGatewayId': ros.stringToRosTemplate(properties.natGatewayId),
      'NatIpCidr': ros.stringToRosTemplate(properties.natIpCidr),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatIpCidrs`, which is used to query the CIDR blocks of a NAT gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIpCidrs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export class RosNatIpCidrs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatIpCidrs";

    /**
     * @Attribute NatIpCidrIds: The list of nat ip cidr IDs.
     */
    public readonly attrNatIpCidrIds: ros.IResolvable;

    /**
     * @Attribute NatIpCidrs: The list of nat ip cidrs.
     */
    public readonly attrNatIpCidrs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    public natGatewayId: string | ros.IResolvable;

    /**
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    public natIpCidr: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatIpCidrsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatIpCidrs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatIpCidrIds = this.getAtt('NatIpCidrIds');
        this.attrNatIpCidrs = this.getAtt('NatIpCidrs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.natIpCidr = props.natIpCidr;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatIpCidrsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNetworkAcls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export interface RosNetworkAclsProps {

    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId?: string | ros.IResolvable;

    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceId?: string | ros.IResolvable;

    /**
     * @Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkAclsProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclsProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkAclId', ros.validateString)(properties.networkAclId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('networkAclName', ros.validateString)(properties.networkAclName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNetworkAclsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NetworkAcls` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::NetworkAcls` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkAclsPropsValidator(properties).assertSuccess();
    }
    return {
      'NetworkAclId': ros.stringToRosTemplate(properties.networkAclId),
      'NetworkAclName': ros.stringToRosTemplate(properties.networkAclName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NetworkAcls`, which is used to query created network access control lists (ACLs).
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export class RosNetworkAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NetworkAcls";

    /**
     * @Attribute NetworkAclIds: The list of The network acl ids.
     */
    public readonly attrNetworkAclIds: ros.IResolvable;

    /**
     * @Attribute NetworkAcls: The list of The network acls.
     */
    public readonly attrNetworkAcls: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    public networkAclId: string | ros.IResolvable | undefined;

    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public networkAclName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    public resourceId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    public resourceType: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkAcls.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclIds = this.getAtt('NetworkAclIds');
        this.attrNetworkAcls = this.getAtt('NetworkAcls');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkAclId = props.networkAclId;
        this.networkAclName = props.networkAclName;
        this.refreshOptions = props.refreshOptions;
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkAclId: this.networkAclId,
            networkAclName: this.networkAclName,
            refreshOptions: this.refreshOptions,
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkAclsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export interface RosPrefixListProps {

    /**
     * @Property prefixListId: The ID of the query Prefix List.
     */
    readonly prefixListId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrefixListProps`
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the result of the validation.
 */
function RosPrefixListPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefixListId', ros.requiredValidator)(properties.prefixListId));
    errors.collect(ros.propertyValidator('prefixListId', ros.validateString)(properties.prefixListId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrefixListProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PrefixList` resource
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PrefixList` resource.
 */
// @ts-ignore TS6133
function rosPrefixListPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrefixListPropsValidator(properties).assertSuccess();
    }
    return {
      'PrefixListId': ros.stringToRosTemplate(properties.prefixListId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PrefixList`, which is used to query the information about a prefix list.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export class RosPrefixList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixList";

    /**
     * @Attribute CreateTime: The time when the prefix list was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Entries: The CIDR address block list of the prefix list.
     */
    public readonly attrEntries: ros.IResolvable;

    /**
     * @Attribute IpVersion: The IP version of the prefix list.
     */
    public readonly attrIpVersion: ros.IResolvable;

    /**
     * @Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    public readonly attrMaxEntries: ros.IResolvable;

    /**
     * @Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * @Attribute PrefixListDescription: The description of the prefix list.
     */
    public readonly attrPrefixListDescription: ros.IResolvable;

    /**
     * @Attribute PrefixListId: The ID of the query Prefix List.
     */
    public readonly attrPrefixListId: ros.IResolvable;

    /**
     * @Attribute PrefixListName: The name of the prefix list.
     */
    public readonly attrPrefixListName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the prefix list.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of PrefixList.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property prefixListId: The ID of the query Prefix List.
     */
    public prefixListId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrefixListProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrefixList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEntries = this.getAtt('Entries');
        this.attrIpVersion = this.getAtt('IpVersion');
        this.attrMaxEntries = this.getAtt('MaxEntries');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrPrefixListDescription = this.getAtt('PrefixListDescription');
        this.attrPrefixListId = this.getAtt('PrefixListId');
        this.attrPrefixListName = this.getAtt('PrefixListName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrShareType = this.getAtt('ShareType');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefixListId = props.prefixListId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prefixListId: this.prefixListId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrefixListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrefixLists`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export interface RosPrefixListsProps {

    /**
     * @Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrefixListsProps`
 *
 * @param properties - the TypeScript properties of a `RosPrefixListsProps`
 *
 * @returns the result of the validation.
 */
function RosPrefixListsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('prefixListName', ros.validateString)(properties.prefixListName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrefixListsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PrefixLists` resource
 *
 * @param properties - the TypeScript properties of a `RosPrefixListsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PrefixLists` resource.
 */
// @ts-ignore TS6133
function rosPrefixListsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrefixListsPropsValidator(properties).assertSuccess();
    }
    return {
      'PrefixListName': ros.stringToRosTemplate(properties.prefixListName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PrefixLists`, which is used to query prefix lists.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixLists` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export class RosPrefixLists extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixLists";

    /**
     * @Attribute PrefixListIds: The list of prefix list IDs.
     */
    public readonly attrPrefixListIds: ros.IResolvable;

    /**
     * @Attribute PrefixLists: The list of prefix lists.
     */
    public readonly attrPrefixLists: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property prefixListName: The name of the prefix list.
     */
    public prefixListName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrefixListsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrefixLists.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrefixListIds = this.getAtt('PrefixListIds');
        this.attrPrefixLists = this.getAtt('PrefixLists');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefixListName = props.prefixListName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prefixListName: this.prefixListName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrefixListsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPublicIpAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export interface RosPublicIpAddressPoolProps {

    /**
     * @Property publicIpAddressPoolId: The first ID of the resource.
     */
    readonly publicIpAddressPoolId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPublicIpAddressPoolProps`
 *
 * @param properties - the TypeScript properties of a `RosPublicIpAddressPoolProps`
 *
 * @returns the result of the validation.
 */
function RosPublicIpAddressPoolPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('publicIpAddressPoolId', ros.requiredValidator)(properties.publicIpAddressPoolId));
    errors.collect(ros.propertyValidator('publicIpAddressPoolId', ros.validateString)(properties.publicIpAddressPoolId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPublicIpAddressPoolProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PublicIpAddressPool` resource
 *
 * @param properties - the TypeScript properties of a `RosPublicIpAddressPoolProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PublicIpAddressPool` resource.
 */
// @ts-ignore TS6133
function rosPublicIpAddressPoolPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPublicIpAddressPoolPropsValidator(properties).assertSuccess();
    }
    return {
      'PublicIpAddressPoolId': ros.stringToRosTemplate(properties.publicIpAddressPoolId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PublicIpAddressPool`, which is used to query the basic information about an available IP address pool.
 * @Note This class does not contain additional functions, so it is recommended to use the `PublicIpAddressPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export class RosPublicIpAddressPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPool";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IpAddressRemaining: Whether there is a free IP address.
     */
    public readonly attrIpAddressRemaining: ros.IResolvable;

    /**
     * @Attribute Isp: Service providers.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * @Attribute PublicIpAddressPoolId: The first ID of the resource.
     */
    public readonly attrPublicIpAddressPoolId: ros.IResolvable;

    /**
     * @Attribute PublicIpAddressPoolName: The name of the resource.
     */
    public readonly attrPublicIpAddressPoolName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of PrefixList.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TotalIpNum: Total ip number of PublicIpAddressPool.
     */
    public readonly attrTotalIpNum: ros.IResolvable;

    /**
     * @Attribute UsedIpNum: Used ip number of PublicIpAddressPool.
     */
    public readonly attrUsedIpNum: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property publicIpAddressPoolId: The first ID of the resource.
     */
    public publicIpAddressPoolId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPublicIpAddressPoolProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPublicIpAddressPool.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrIpAddressRemaining = this.getAtt('IpAddressRemaining');
        this.attrIsp = this.getAtt('Isp');
        this.attrPublicIpAddressPoolId = this.getAtt('PublicIpAddressPoolId');
        this.attrPublicIpAddressPoolName = this.getAtt('PublicIpAddressPoolName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrTotalIpNum = this.getAtt('TotalIpNum');
        this.attrUsedIpNum = this.getAtt('UsedIpNum');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.publicIpAddressPoolId = props.publicIpAddressPoolId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            publicIpAddressPoolId: this.publicIpAddressPoolId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPublicIpAddressPoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPublicIpAddressPools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
export interface RosPublicIpAddressPoolsProps {

    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, 
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * @Property publicIpAddressPoolName: The name of the IP address pool.
     * This parameter is optional. The name must be 1 to 128 characters in length, 
     * and can contain digits, periods (.), underscores (_), and hyphens (-). 
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly publicIpAddressPoolName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPublicIpAddressPoolsProps`
 *
 * @param properties - the TypeScript properties of a `RosPublicIpAddressPoolsProps`
 *
 * @returns the result of the validation.
 */
function RosPublicIpAddressPoolsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('publicIpAddressPoolName', ros.validateString)(properties.publicIpAddressPoolName));
    if(properties.isp && (typeof properties.isp) !== 'object') {
        errors.collect(ros.propertyValidator('isp', ros.validateAllowedValues)({
          data: properties.isp,
          allowedValues: ["BGP","BGP_PRO","ChinaTelecom","ChinaUnicom","ChinaMobile","ChinaTelecom_L2","ChinaUnicom_L2","ChinaMobile_L2"],
        }));
    }
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPublicIpAddressPoolsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PublicIpAddressPools` resource
 *
 * @param properties - the TypeScript properties of a `RosPublicIpAddressPoolsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::PublicIpAddressPools` resource.
 */
// @ts-ignore TS6133
function rosPublicIpAddressPoolsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPublicIpAddressPoolsPropsValidator(properties).assertSuccess();
    }
    return {
      'Isp': ros.stringToRosTemplate(properties.isp),
      'PublicIpAddressPoolName': ros.stringToRosTemplate(properties.publicIpAddressPoolName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PublicIpAddressPools`, which is used to query available IP address pools.
 * @Note This class does not contain additional functions, so it is recommended to use the `PublicIpAddressPools` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
export class RosPublicIpAddressPools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPools";

    /**
     * @Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    public readonly attrPublicIpAddressPoolIds: ros.IResolvable;

    /**
     * @Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    public readonly attrPublicIpAddressPools: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, 
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @Property publicIpAddressPoolName: The name of the IP address pool.
     * This parameter is optional. The name must be 1 to 128 characters in length, 
     * and can contain digits, periods (.), underscores (_), and hyphens (-). 
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    public publicIpAddressPoolName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPublicIpAddressPoolsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPublicIpAddressPools.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPublicIpAddressPoolIds = this.getAtt('PublicIpAddressPoolIds');
        this.attrPublicIpAddressPools = this.getAtt('PublicIpAddressPools');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.isp = props.isp;
        this.publicIpAddressPoolName = props.publicIpAddressPoolName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            isp: this.isp,
            publicIpAddressPoolName: this.publicIpAddressPoolName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPublicIpAddressPoolsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRouteEntries`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
export interface RosRouteEntriesProps {

    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
     */
    readonly destinationCidrBlock?: string | ros.IResolvable;

    /**
     * @Property ipVersion: The IP version. Valid values:
     * IPv4: IPv4
     * IPv6: IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * @Property nextHopId: The ID of the next hop.
     */
    readonly nextHopId?: string | ros.IResolvable;

    /**
     * @Property nextHopType: The type of the next hop. Valid values:
     * Instance (default): an Elastic Compute Service (ECS) instance
     * HaVip: a high-availability virtual IP address (HAVIP)
     * VpnGateway: a VPN gateway
     * NatGateway: a NAT gateway
     * NetworkInterface: a secondary elastic network interface (ENI)
     * RouterInterface: a router interface
     * IPv6Gateway: an IPv6 gateway
     * Attachment: a transit router
     */
    readonly nextHopType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property routeEntryId: The ID of the route.
     */
    readonly routeEntryId?: string | ros.IResolvable;

    /**
     * @Property routeEntryName: The name of the route.
     */
    readonly routeEntryName?: string | ros.IResolvable;

    /**
     * @Property routeEntryType: The type of the route. Valid values:
     * Custom: a custom route
     * System: a system route
     * BGP: a Border Gateway Protocol (BGP) route
     * CEN: a Cloud Enterprise Network (CEN) route
     */
    readonly routeEntryType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteEntriesProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteEntriesProps`
 *
 * @returns the result of the validation.
 */
function RosRouteEntriesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('routeEntryId', ros.validateString)(properties.routeEntryId));
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('routeEntryName', ros.validateString)(properties.routeEntryName));
    errors.collect(ros.propertyValidator('routeEntryType', ros.validateString)(properties.routeEntryType));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRouteEntriesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteEntries` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteEntriesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteEntries` resource.
 */
// @ts-ignore TS6133
function rosRouteEntriesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteEntriesPropsValidator(properties).assertSuccess();
    }
    return {
      'RouteTableId': ros.stringToRosTemplate(properties.routeTableId),
      'DestinationCidrBlock': ros.stringToRosTemplate(properties.destinationCidrBlock),
      'IpVersion': ros.stringToRosTemplate(properties.ipVersion),
      'NextHopId': ros.stringToRosTemplate(properties.nextHopId),
      'NextHopType': ros.stringToRosTemplate(properties.nextHopType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'RouteEntryId': ros.stringToRosTemplate(properties.routeEntryId),
      'RouteEntryName': ros.stringToRosTemplate(properties.routeEntryName),
      'RouteEntryType': ros.stringToRosTemplate(properties.routeEntryType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteEntries`, which is used to query routes.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteEntries` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
export class RosRouteEntries extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteEntries";

    /**
     * @Attribute RouteEntries: The list of The route entries.
     */
    public readonly attrRouteEntries: ros.IResolvable;

    /**
     * @Attribute RouteEntryIds: the list of the route entry ids.
     */
    public readonly attrRouteEntryIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property routeTableId: The ID of the route table.
     */
    public routeTableId: string | ros.IResolvable;

    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
     */
    public destinationCidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property ipVersion: The IP version. Valid values:
     * IPv4: IPv4
     * IPv6: IPv6
     */
    public ipVersion: string | ros.IResolvable | undefined;

    /**
     * @Property nextHopId: The ID of the next hop.
     */
    public nextHopId: string | ros.IResolvable | undefined;

    /**
     * @Property nextHopType: The type of the next hop. Valid values:
     * Instance (default): an Elastic Compute Service (ECS) instance
     * HaVip: a high-availability virtual IP address (HAVIP)
     * VpnGateway: a VPN gateway
     * NatGateway: a NAT gateway
     * NetworkInterface: a secondary elastic network interface (ENI)
     * RouterInterface: a router interface
     * IPv6Gateway: an IPv6 gateway
     * Attachment: a transit router
     */
    public nextHopType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property routeEntryId: The ID of the route.
     */
    public routeEntryId: string | ros.IResolvable | undefined;

    /**
     * @Property routeEntryName: The name of the route.
     */
    public routeEntryName: string | ros.IResolvable | undefined;

    /**
     * @Property routeEntryType: The type of the route. Valid values:
     * Custom: a custom route
     * System: a system route
     * BGP: a Border Gateway Protocol (BGP) route
     * CEN: a Cloud Enterprise Network (CEN) route
     */
    public routeEntryType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteEntriesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteEntries.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteEntries = this.getAtt('RouteEntries');
        this.attrRouteEntryIds = this.getAtt('RouteEntryIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.routeTableId = props.routeTableId;
        this.destinationCidrBlock = props.destinationCidrBlock;
        this.ipVersion = props.ipVersion;
        this.nextHopId = props.nextHopId;
        this.nextHopType = props.nextHopType;
        this.refreshOptions = props.refreshOptions;
        this.routeEntryId = props.routeEntryId;
        this.routeEntryName = props.routeEntryName;
        this.routeEntryType = props.routeEntryType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            routeTableId: this.routeTableId,
            destinationCidrBlock: this.destinationCidrBlock,
            ipVersion: this.ipVersion,
            nextHopId: this.nextHopId,
            nextHopType: this.nextHopType,
            refreshOptions: this.refreshOptions,
            routeEntryId: this.routeEntryId,
            routeEntryName: this.routeEntryName,
            routeEntryType: this.routeEntryType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteEntriesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export interface RosRouteTableProps {

    /**
     * @Property routeTableId: The ID of the routing table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteTableProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRouteTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteTable` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteTable` resource.
 */
// @ts-ignore TS6133
function rosRouteTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteTablePropsValidator(properties).assertSuccess();
    }
    return {
      'RouteTableId': ros.stringToRosTemplate(properties.routeTableId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteTable`, which is used to query the information about a route table.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export class RosRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTable";

    /**
     * @Attribute CreateTime: The creation time of the routing table.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Description of the routing table.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute RouteTableId: The ID of the routing table.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute RouteTableName: The name of the routing table.
     */
    public readonly attrRouteTableName: ros.IResolvable;

    /**
     * @Attribute RouteTableType: The type of routing table.
     */
    public readonly attrRouteTableType: ros.IResolvable;

    /**
     * @Attribute RouterId: The router ID to which the routing table belongs.
     */
    public readonly attrRouterId: ros.IResolvable;

    /**
     * @Attribute RouterType: The router type to which the routing table belongs.
     */
    public readonly attrRouterType: ros.IResolvable;

    /**
     * @Attribute Tags: The tag.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchIds: The ID of the switch.
     */
    public readonly attrVSwitchIds: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property routeTableId: The ID of the routing table.
     */
    public routeTableId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrRouteTableName = this.getAtt('RouteTableName');
        this.attrRouteTableType = this.getAtt('RouteTableType');
        this.attrRouterId = this.getAtt('RouterId');
        this.attrRouterType = this.getAtt('RouterType');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchIds = this.getAtt('VSwitchIds');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.routeTableId = props.routeTableId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            routeTableId: this.routeTableId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export interface RosRouteTablesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property routerId: The ID of the VRouter to which the route table belongs.
     */
    readonly routerId?: string | ros.IResolvable;

    /**
     * @Property routerType: The type of the VRouter to which the route table belongs. Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    readonly routerType?: string | ros.IResolvable;

    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;

    /**
     * @Property routeTableName: The name of the route table.
     */
    readonly routeTableName?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VRouter to which the route table belongs.
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteTablesProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTablesProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTablesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('routerType', ros.validateString)(properties.routerType));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('routeTableName', ros.validateString)(properties.routeTableName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRouteTablesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteTables` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTablesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::RouteTables` resource.
 */
// @ts-ignore TS6133
function rosRouteTablesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteTablesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RouterId': ros.stringToRosTemplate(properties.routerId),
      'RouterType': ros.stringToRosTemplate(properties.routerType),
      'RouteTableId': ros.stringToRosTemplate(properties.routeTableId),
      'RouteTableName': ros.stringToRosTemplate(properties.routeTableName),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteTables`, which is used to query route tables.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTables` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export class RosRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTables";

    /**
     * @Attribute RouteTableIds: the list of the route table ids.
     */
    public readonly attrRouteTableIds: ros.IResolvable;

    /**
     * @Attribute RouteTables: The list of The route tables.
     */
    public readonly attrRouteTables: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property routerId: The ID of the VRouter to which the route table belongs.
     */
    public routerId: string | ros.IResolvable | undefined;

    /**
     * @Property routerType: The type of the VRouter to which the route table belongs. Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    public routerType: string | ros.IResolvable | undefined;

    /**
     * @Property routeTableId: The ID of the route table.
     */
    public routeTableId: string | ros.IResolvable | undefined;

    /**
     * @Property routeTableName: The name of the route table.
     */
    public routeTableName: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VRouter to which the route table belongs.
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTablesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteTables.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableIds = this.getAtt('RouteTableIds');
        this.attrRouteTables = this.getAtt('RouteTables');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.routerId = props.routerId;
        this.routerType = props.routerType;
        this.routeTableId = props.routeTableId;
        this.routeTableName = props.routeTableName;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            routerId: this.routerId,
            routerType: this.routerType,
            routeTableId: this.routeTableId,
            routeTableName: this.routeTableName,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteTablesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTrafficMirrorFilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export interface RosTrafficMirrorFilterProps {

    /**
     * @Property trafficMirrorFilterId: The first ID of the resource.
     */
    readonly trafficMirrorFilterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTrafficMirrorFilterProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFilterProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFilterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trafficMirrorFilterId', ros.requiredValidator)(properties.trafficMirrorFilterId));
    errors.collect(ros.propertyValidator('trafficMirrorFilterId', ros.validateString)(properties.trafficMirrorFilterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTrafficMirrorFilterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::TrafficMirrorFilter` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFilterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::TrafficMirrorFilter` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorFilterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrafficMirrorFilterPropsValidator(properties).assertSuccess();
    }
    return {
      'TrafficMirrorFilterId': ros.stringToRosTemplate(properties.trafficMirrorFilterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilter`, which is used to query a filter for traffic mirroring.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export class RosTrafficMirrorFilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilter";

    /**
     * @Attribute EgressRules: EgressRules.
     */
    public readonly attrEgressRules: ros.IResolvable;

    /**
     * @Attribute IngressRules: IngressRules.
     */
    public readonly attrIngressRules: ros.IResolvable;

    /**
     * @Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    public readonly attrTrafficMirrorFilterDescription: ros.IResolvable;

    /**
     * @Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    public readonly attrTrafficMirrorFilterId: ros.IResolvable;

    /**
     * @Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    public readonly attrTrafficMirrorFilterName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property trafficMirrorFilterId: The first ID of the resource.
     */
    public trafficMirrorFilterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorFilterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrafficMirrorFilter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEgressRules = this.getAtt('EgressRules');
        this.attrIngressRules = this.getAtt('IngressRules');
        this.attrTrafficMirrorFilterDescription = this.getAtt('TrafficMirrorFilterDescription');
        this.attrTrafficMirrorFilterId = this.getAtt('TrafficMirrorFilterId');
        this.attrTrafficMirrorFilterName = this.getAtt('TrafficMirrorFilterName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.trafficMirrorFilterId = props.trafficMirrorFilterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            trafficMirrorFilterId: this.trafficMirrorFilterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrafficMirrorFilterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTrafficMirrorFilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export interface RosTrafficMirrorFiltersProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTrafficMirrorFiltersProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFiltersProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFiltersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trafficMirrorFilterName', ros.validateString)(properties.trafficMirrorFilterName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTrafficMirrorFiltersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::TrafficMirrorFilters` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFiltersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::TrafficMirrorFilters` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorFiltersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrafficMirrorFiltersPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'TrafficMirrorFilterName': ros.stringToRosTemplate(properties.trafficMirrorFilterName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilters`, which is used to query filters for traffic mirroring.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export class RosTrafficMirrorFilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilters";

    /**
     * @Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
     */
    public readonly attrTrafficMirrorFilterIds: ros.IResolvable;

    /**
     * @Attribute TrafficMirrorFilters: The list of traffic mirror filters.
     */
    public readonly attrTrafficMirrorFilters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    public trafficMirrorFilterName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorFiltersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrafficMirrorFilters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrafficMirrorFilterIds = this.getAtt('TrafficMirrorFilterIds');
        this.attrTrafficMirrorFilters = this.getAtt('TrafficMirrorFilters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.trafficMirrorFilterName = props.trafficMirrorFilterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            trafficMirrorFilterName: this.trafficMirrorFilterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrafficMirrorFiltersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export interface RosVSwitchProps {

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::VSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::VSwitch` resource.
 */
// @ts-ignore TS6133
function rosVSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::VSwitch`, which is used to query the information about a vSwitch.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitch";

    /**
     * @Attribute AvailableIpAddressCount: The number of available IP addresses.
     */
    public readonly attrAvailableIpAddressCount: ros.IResolvable;

    /**
     * @Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
     */
    public readonly attrCidrBlock: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the VSwitch.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of VSwitch.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
     */
    public readonly attrIpv6CidrBlock: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group id of VSwitch.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute RouteTableId: The route table id.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of VSwitch.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VSwitchName: The name of the VSwitch.
     */
    public readonly attrVSwitchName: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID  of the resource.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAvailableIpAddressCount = this.getAtt('AvailableIpAddressCount');
        this.attrCidrBlock = this.getAtt('CidrBlock');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrIpv6CidrBlock = this.getAtt('Ipv6CidrBlock');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVSwitchName = this.getAtt('VSwitchName');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vSwitchId: this.vSwitchId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVSwitches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
 */
export interface RosVSwitchesProps {

    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;

    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The list of The vSwitch IDs.
     * You can specify up to 20 vSwitch IDs.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vSwitchName: The name of the vSwitch.
     */
    readonly vSwitchName?: string | ros.IResolvable;

    /**
     * @Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    readonly vSwitchOwnerId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVSwitchesProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchesProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchOwnerId', ros.validateString)(properties.vSwitchOwnerId));
    errors.collect(ros.propertyValidator('vSwitchName', ros.validateString)(properties.vSwitchName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVSwitchesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::VSwitches` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::VSwitches` resource.
 */
// @ts-ignore TS6133
function rosVSwitchesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVSwitchesPropsValidator(properties).assertSuccess();
    }
    return {
      'DhcpOptionsSetId': ros.stringToRosTemplate(properties.dhcpOptionsSetId),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RouteTableId': ros.stringToRosTemplate(properties.routeTableId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'VSwitchName': ros.stringToRosTemplate(properties.vSwitchName),
      'VSwitchOwnerId': ros.stringToRosTemplate(properties.vSwitchOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::VSwitches`, which is used to query created vSwitches.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitches` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
 */
export class RosVSwitches extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitches";

    /**
     * @Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    public readonly attrVSwitchIds: ros.IResolvable;

    /**
     * @Attribute VSwitches: The detailed information about the vSwitches.
     */
    public readonly attrVSwitches: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    public dhcpOptionsSetId: string | ros.IResolvable | undefined;

    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property routeTableId: The ID of the route table.
     */
    public routeTableId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The list of The vSwitch IDs.
     * You can specify up to 20 vSwitch IDs.
     */
    public vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vSwitchName: The name of the vSwitch.
     */
    public vSwitchName: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    public vSwitchOwnerId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVSwitches.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVSwitchIds = this.getAtt('VSwitchIds');
        this.attrVSwitches = this.getAtt('VSwitches');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetId = props.dhcpOptionsSetId;
        this.isDefault = props.isDefault;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.routeTableId = props.routeTableId;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.vSwitchName = props.vSwitchName;
        this.vSwitchOwnerId = props.vSwitchOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            isDefault: this.isDefault,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            routeTableId: this.routeTableId,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            vSwitchName: this.vSwitchName,
            vSwitchOwnerId: this.vSwitchOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVSwitchesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export interface RosVpcProps {

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcProps`
 *
 * @returns the result of the validation.
 */
function RosVpcPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVpcProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Vpc` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Vpc` resource.
 */
// @ts-ignore TS6133
function rosVpcPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcPropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Vpc`, which is used to query the information about a virtual private cloud (VPC).
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export class RosVpc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpc";

    /**
     * @Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    public readonly attrCidrBlock: ros.IResolvable;

    /**
     * @Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    public readonly attrClassicLinkEnabled: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time at which the VPC was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the VPC.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable;

    /**
     * @Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    public readonly attrIpv6CidrBlock: ros.IResolvable;

    /**
     * @Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    public readonly attrIpv6CidrBlocks: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values: 
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute RouterId: The ID of the VRouter.
     */
    public readonly attrRouterId: ros.IResolvable;

    /**
     * @Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    public readonly attrSecondaryCidrBlocks: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of Vpc.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UserCidrs: A list of user CIDRs.
     */
    public readonly attrUserCidrs: ros.IResolvable;

    /**
     * @Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    public readonly attrVSwitchIds: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcName: The name of the VPC.
     */
    public readonly attrVpcName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpc.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCidrBlock = this.getAtt('CidrBlock');
        this.attrClassicLinkEnabled = this.getAtt('ClassicLinkEnabled');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrDhcpOptionsSetId = this.getAtt('DhcpOptionsSetId');
        this.attrIpv6CidrBlock = this.getAtt('Ipv6CidrBlock');
        this.attrIpv6CidrBlocks = this.getAtt('Ipv6CidrBlocks');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRouterId = this.getAtt('RouterId');
        this.attrSecondaryCidrBlocks = this.getAtt('SecondaryCidrBlocks');
        this.attrTags = this.getAtt('Tags');
        this.attrUserCidrs = this.getAtt('UserCidrs');
        this.attrVSwitchIds = this.getAtt('VSwitchIds');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcName = this.getAtt('VpcName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVpcs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
 */
export interface RosVpcsProps {

    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;

    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property vpcIds: The list of The VPC IDs.
     * You can specify up to 20 VPC IDs.
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcName: The name of the VPC.
     */
    readonly vpcName?: string | ros.IResolvable;

    /**
     * @Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
     */
    readonly vpcOwnerId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcsProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcsProps`
 *
 * @returns the result of the validation.
 */
function RosVpcsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.vpcIds && (Array.isArray(properties.vpcIds) || (typeof properties.vpcIds) === 'string')) {
        errors.collect(ros.propertyValidator('vpcIds', ros.validateLength)({
            data: properties.vpcIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('vpcIds', ros.listValidator(ros.validateString))(properties.vpcIds));
    errors.collect(ros.propertyValidator('vpcName', ros.validateString)(properties.vpcName));
    errors.collect(ros.propertyValidator('vpcOwnerId', ros.validateString)(properties.vpcOwnerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVpcsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Vpcs` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VPC::Vpcs` resource.
 */
// @ts-ignore TS6133
function rosVpcsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcsPropsValidator(properties).assertSuccess();
    }
    return {
      'DhcpOptionsSetId': ros.stringToRosTemplate(properties.dhcpOptionsSetId),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'VpcIds': ros.listMapper(ros.stringToRosTemplate)(properties.vpcIds),
      'VpcName': ros.stringToRosTemplate(properties.vpcName),
      'VpcOwnerId': ros.stringToRosTemplate(properties.vpcOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Vpcs`, which is used to query created virtual private clouds (VPCs).
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpcs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
 */
export class RosVpcs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpcs";

    /**
     * @Attribute VpcIds: The list of The VPC IDs.
     */
    public readonly attrVpcIds: ros.IResolvable;

    /**
     * @Attribute Vpcs: The detailed information about the VPCs.
     */
    public readonly attrVpcs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    public dhcpOptionsSetId: string | ros.IResolvable | undefined;

    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcIds: The list of The VPC IDs.
     * You can specify up to 20 VPC IDs.
     */
    public vpcIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vpcName: The name of the VPC.
     */
    public vpcName: string | ros.IResolvable | undefined;

    /**
     * @Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
     */
    public vpcOwnerId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVpcIds = this.getAtt('VpcIds');
        this.attrVpcs = this.getAtt('Vpcs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetId = props.dhcpOptionsSetId;
        this.isDefault = props.isDefault;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.vpcIds = props.vpcIds;
        this.vpcName = props.vpcName;
        this.vpcOwnerId = props.vpcOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            isDefault: this.isDefault,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            vpcIds: this.vpcIds,
            vpcName: this.vpcName,
            vpcOwnerId: this.vpcOwnerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

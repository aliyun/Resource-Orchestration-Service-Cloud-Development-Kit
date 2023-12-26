// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
      AddressName: ros.stringToRosTemplate(properties.addressName),
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      IpAddress: ros.stringToRosTemplate(properties.ipAddress),
      Isp: ros.stringToRosTemplate(properties.isp),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SegmentInstanceId: ros.stringToRosTemplate(properties.segmentInstanceId),
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
            resourceGroupId: this.resourceGroupId,
            segmentInstanceId: this.segmentInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      CommonBandwidthPackageId: ros.stringToRosTemplate(properties.commonBandwidthPackageId),
      CommonBandwidthPackageName: ros.stringToRosTemplate(properties.commonBandwidthPackageName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackages`.
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
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commonBandwidthPackageId: this.commonBandwidthPackageId,
            commonBandwidthPackageName: this.commonBandwidthPackageName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommonBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CustomerGateways`.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            customerGatewayId: this.customerGatewayId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomerGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      Description: ros.stringToRosTemplate(properties.description),
      FlowLogId: ros.stringToRosTemplate(properties.flowLogId),
      FlowLogName: ros.stringToRosTemplate(properties.flowLogName),
      LogStoreName: ros.stringToRosTemplate(properties.logStoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
      TrafficType: ros.stringToRosTemplate(properties.trafficType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::FlowLogs`.
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
 * Properties for defining a `RosHaVips`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export interface RosHaVipsProps {

    /**
     * @Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
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
      HaVipId: ros.stringToRosTemplate(properties.haVipId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::HaVips`.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            haVipId: this.haVipId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHaVipsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      Ipv4GatewayId: ros.stringToRosTemplate(properties.ipv4GatewayId),
      Ipv4GatewayName: ros.stringToRosTemplate(properties.ipv4GatewayName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`.
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
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipv4GatewayId: this.ipv4GatewayId,
            ipv4GatewayName: this.ipv4GatewayName,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpv4GatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatGatewayZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export interface RosNatGatewayZonesProps {
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
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGatewayZones`.
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
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGatewayZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
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
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      Name: ros.stringToRosTemplate(properties.name),
      NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
      NatType: ros.stringToRosTemplate(properties.natType),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Status: ros.stringToRosTemplate(properties.status),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGateways`.
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
      NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
      NatIpCidr: ros.stringToRosTemplate(properties.natIpCidr),
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
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
      NetworkAclId: ros.stringToRosTemplate(properties.networkAclId),
      NetworkAclName: ros.stringToRosTemplate(properties.networkAclName),
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
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
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkAclId: this.networkAclId,
            networkAclName: this.networkAclName,
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
 * Properties for defining a `RosPrefixLists`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export interface RosPrefixListsProps {

    /**
     * @Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;

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
      PrefixListName: ros.stringToRosTemplate(properties.prefixListName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PrefixLists`, which is used to query the details of prefix lists.
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
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prefixListName: this.prefixListName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrefixListsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      Isp: ros.stringToRosTemplate(properties.isp),
      PublicIpAddressPoolName: ros.stringToRosTemplate(properties.publicIpAddressPoolName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
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
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            isp: this.isp,
            publicIpAddressPoolName: this.publicIpAddressPoolName,
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
      RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
      DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
      IpVersion: ros.stringToRosTemplate(properties.ipVersion),
      NextHopId: ros.stringToRosTemplate(properties.nextHopId),
      NextHopType: ros.stringToRosTemplate(properties.nextHopType),
      RouteEntryId: ros.stringToRosTemplate(properties.routeEntryId),
      RouteEntryName: ros.stringToRosTemplate(properties.routeEntryName),
      RouteEntryType: ros.stringToRosTemplate(properties.routeEntryType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteEntries`.
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
 * Properties for defining a `RosRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export interface RosRouteTablesProps {

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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RouterId: ros.stringToRosTemplate(properties.routerId),
      RouterType: ros.stringToRosTemplate(properties.routerType),
      RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
      RouteTableName: ros.stringToRosTemplate(properties.routeTableName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteTables`.
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
        this.resourceGroupId = props.resourceGroupId;
        this.routerId = props.routerId;
        this.routerType = props.routerType;
        this.routeTableId = props.routeTableId;
        this.routeTableName = props.routeTableName;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
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
 * Properties for defining a `RosTrafficMirrorFilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export interface RosTrafficMirrorFiltersProps {

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
      TrafficMirrorFilterName: ros.stringToRosTemplate(properties.trafficMirrorFilterName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilters`.
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
        this.trafficMirrorFilterName = props.trafficMirrorFilterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            trafficMirrorFilterName: this.trafficMirrorFilterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrafficMirrorFiltersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      DhcpOptionsSetId: ros.stringToRosTemplate(properties.dhcpOptionsSetId),
      IsDefault: ros.booleanToRosTemplate(properties.isDefault),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      VSwitchName: ros.stringToRosTemplate(properties.vSwitchName),
      VSwitchOwnerId: ros.stringToRosTemplate(properties.vSwitchOwnerId),
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
      DhcpOptionsSetId: ros.stringToRosTemplate(properties.dhcpOptionsSetId),
      IsDefault: ros.booleanToRosTemplate(properties.isDefault),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      VpcIds: ros.listMapper(ros.stringToRosTemplate)(properties.vpcIds),
      VpcName: ros.stringToRosTemplate(properties.vpcName),
      VpcOwnerId: ros.stringToRosTemplate(properties.vpcOwnerId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Vpcs`.
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
        this.resourceGroupId = props.resourceGroupId;
        this.vpcIds = props.vpcIds;
        this.vpcName = props.vpcName;
        this.vpcOwnerId = props.vpcOwnerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            isDefault: this.isDefault,
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

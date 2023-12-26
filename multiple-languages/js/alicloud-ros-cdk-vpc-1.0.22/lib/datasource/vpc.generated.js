"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVpcs = exports.RosVSwitches = exports.RosTrafficMirrorFilters = exports.RosRouteTables = exports.RosRouteEntries = exports.RosPublicIpAddressPools = exports.RosPrefixLists = exports.RosNetworkAcls = exports.RosNatIpCidrs = exports.RosNatGateways = exports.RosNatGatewayZones = exports.RosIpv4Gateways = exports.RosHaVips = exports.RosFlowLogs = exports.RosCustomerGateways = exports.RosCommonBandwidthPackages = exports.RosAddresses = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAddressesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('segmentInstanceId', ros.validateString)(properties.segmentInstanceId));
    errors.collect(ros.propertyValidator('addressName', ros.validateString)(properties.addressName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if (properties.isp && (typeof properties.isp) !== 'object') {
        errors.collect(ros.propertyValidator('isp', ros.validateAllowedValues)({
            data: properties.isp,
            allowedValues: ["BGP", "BGP_PRO", "RunShellScript", "ChinaTelecom", "ChinaUnicom", "ChinaMobile", "ChinaTelecom_L2", "ChinaUnicom_L2", "ChinaMobile_L2"],
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
function rosAddressesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosAddresses extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosAddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAddresses = RosAddresses;
/**
 * The resource type name for this resource class.
 */
RosAddresses.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Addresses";
/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackagesProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackagesProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackagesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCommonBandwidthPackagesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCommonBandwidthPackages extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCommonBandwidthPackages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommonBandwidthPackageIds = this.getAtt('CommonBandwidthPackageIds');
        this.attrCommonBandwidthPackages = this.getAtt('CommonBandwidthPackages');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commonBandwidthPackageId = props.commonBandwidthPackageId;
        this.commonBandwidthPackageName = props.commonBandwidthPackageName;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            commonBandwidthPackageId: this.commonBandwidthPackageId,
            commonBandwidthPackageName: this.commonBandwidthPackageName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosCommonBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCommonBandwidthPackages = RosCommonBandwidthPackages;
/**
 * The resource type name for this resource class.
 */
RosCommonBandwidthPackages.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackages";
/**
 * Determine whether the given properties match those of a `RosCustomerGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosCustomerGatewaysPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomerGatewaysPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCustomerGateways extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomerGateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomerGatewayIds = this.getAtt('CustomerGatewayIds');
        this.attrCustomerGateways = this.getAtt('CustomerGateways');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
    }
    get rosProperties() {
        return {
            customerGatewayId: this.customerGatewayId,
        };
    }
    renderProperties(props) {
        return rosCustomerGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomerGateways = RosCustomerGateways;
/**
 * The resource type name for this resource class.
 */
RosCustomerGateways.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateways";
/**
 * Determine whether the given properties match those of a `RosFlowLogsProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowLogsProps`
 *
 * @returns the result of the validation.
 */
function RosFlowLogsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowLogName', ros.validateString)(properties.flowLogName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('logStoreName', ros.validateString)(properties.logStoreName));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if (properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
            data: properties.resourceType,
            allowedValues: ["NetworkInterface", "VSwitch", "VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('flowLogId', ros.validateString)(properties.flowLogId));
    if (properties.trafficType && (typeof properties.trafficType) !== 'object') {
        errors.collect(ros.propertyValidator('trafficType', ros.validateAllowedValues)({
            data: properties.trafficType,
            allowedValues: ["All", "Allow", "Drop"],
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
function rosFlowLogsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosFlowLogs extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosFlowLogsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFlowLogs = RosFlowLogs;
/**
 * The resource type name for this resource class.
 */
RosFlowLogs.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLogs";
/**
 * Determine whether the given properties match those of a `RosHaVipsProps`
 *
 * @param properties - the TypeScript properties of a `RosHaVipsProps`
 *
 * @returns the result of the validation.
 */
function RosHaVipsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosHaVipsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosHaVips extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosHaVips.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHaVipIds = this.getAtt('HaVipIds');
        this.attrHaVips = this.getAtt('HaVips');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.haVipId = props.haVipId;
    }
    get rosProperties() {
        return {
            haVipId: this.haVipId,
        };
    }
    renderProperties(props) {
        return rosHaVipsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHaVips = RosHaVips;
/**
 * The resource type name for this resource class.
 */
RosHaVips.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVips";
/**
 * Determine whether the given properties match those of a `RosIpv4GatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosIpv4GatewaysPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosIpv4GatewaysPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosIpv4Gateways extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIpv4Gateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv4GatewayIds = this.getAtt('Ipv4GatewayIds');
        this.attrIpv4Gateways = this.getAtt('Ipv4Gateways');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipv4GatewayId = props.ipv4GatewayId;
        this.ipv4GatewayName = props.ipv4GatewayName;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            ipv4GatewayId: this.ipv4GatewayId,
            ipv4GatewayName: this.ipv4GatewayName,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosIpv4GatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIpv4Gateways = RosIpv4Gateways;
/**
 * The resource type name for this resource class.
 */
RosIpv4Gateways.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateways";
/**
 * Determine whether the given properties match those of a `RosNatGatewayZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayZonesProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayZonesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosNatGatewayZonesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNatGatewayZonesPropsValidator(properties).assertSuccess();
    }
    return {};
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGatewayZones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGatewayZones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
class RosNatGatewayZones extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNatGatewayZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }
    get rosProperties() {
        return {};
    }
    renderProperties(props) {
        return rosNatGatewayZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatGatewayZones = RosNatGatewayZones;
/**
 * The resource type name for this resource class.
 */
RosNatGatewayZones.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGatewayZones";
/**
 * Determine whether the given properties match those of a `RosNatGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewaysPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosNatGatewaysPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosNatGateways extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosNatGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatGateways = RosNatGateways;
/**
 * The resource type name for this resource class.
 */
RosNatGateways.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateways";
/**
 * Determine whether the given properties match those of a `RosNatIpCidrsProps`
 *
 * @param properties - the TypeScript properties of a `RosNatIpCidrsProps`
 *
 * @returns the result of the validation.
 */
function RosNatIpCidrsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosNatIpCidrsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosNatIpCidrs extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNatIpCidrs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatIpCidrIds = this.getAtt('NatIpCidrIds');
        this.attrNatIpCidrs = this.getAtt('NatIpCidrs');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.natIpCidr = props.natIpCidr;
    }
    get rosProperties() {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
        };
    }
    renderProperties(props) {
        return rosNatIpCidrsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatIpCidrs = RosNatIpCidrs;
/**
 * The resource type name for this resource class.
 */
RosNatIpCidrs.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatIpCidrs";
/**
 * Determine whether the given properties match those of a `RosNetworkAclsProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclsProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosNetworkAclsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosNetworkAcls extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            networkAclId: this.networkAclId,
            networkAclName: this.networkAclName,
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosNetworkAclsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkAcls = RosNetworkAcls;
/**
 * The resource type name for this resource class.
 */
RosNetworkAcls.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NetworkAcls";
/**
 * Determine whether the given properties match those of a `RosPrefixListsProps`
 *
 * @param properties - the TypeScript properties of a `RosPrefixListsProps`
 *
 * @returns the result of the validation.
 */
function RosPrefixListsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosPrefixListsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosPrefixLists extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPrefixLists.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrefixListIds = this.getAtt('PrefixListIds');
        this.attrPrefixLists = this.getAtt('PrefixLists');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefixListName = props.prefixListName;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            prefixListName: this.prefixListName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosPrefixListsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPrefixLists = RosPrefixLists;
/**
 * The resource type name for this resource class.
 */
RosPrefixLists.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixLists";
/**
 * Determine whether the given properties match those of a `RosPublicIpAddressPoolsProps`
 *
 * @param properties - the TypeScript properties of a `RosPublicIpAddressPoolsProps`
 *
 * @returns the result of the validation.
 */
function RosPublicIpAddressPoolsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('publicIpAddressPoolName', ros.validateString)(properties.publicIpAddressPoolName));
    if (properties.isp && (typeof properties.isp) !== 'object') {
        errors.collect(ros.propertyValidator('isp', ros.validateAllowedValues)({
            data: properties.isp,
            allowedValues: ["BGP", "BGP_PRO", "ChinaTelecom", "ChinaUnicom", "ChinaMobile", "ChinaTelecom_L2", "ChinaUnicom_L2", "ChinaMobile_L2"],
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
function rosPublicIpAddressPoolsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosPublicIpAddressPools extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPublicIpAddressPools.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPublicIpAddressPoolIds = this.getAtt('PublicIpAddressPoolIds');
        this.attrPublicIpAddressPools = this.getAtt('PublicIpAddressPools');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.isp = props.isp;
        this.publicIpAddressPoolName = props.publicIpAddressPoolName;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            isp: this.isp,
            publicIpAddressPoolName: this.publicIpAddressPoolName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosPublicIpAddressPoolsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPublicIpAddressPools = RosPublicIpAddressPools;
/**
 * The resource type name for this resource class.
 */
RosPublicIpAddressPools.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPools";
/**
 * Determine whether the given properties match those of a `RosRouteEntriesProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteEntriesProps`
 *
 * @returns the result of the validation.
 */
function RosRouteEntriesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRouteEntriesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosRouteEntries extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosRouteEntriesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouteEntries = RosRouteEntries;
/**
 * The resource type name for this resource class.
 */
RosRouteEntries.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteEntries";
/**
 * Determine whether the given properties match those of a `RosRouteTablesProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTablesProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTablesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRouteTablesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosRouteTables extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            resourceGroupId: this.resourceGroupId,
            routerId: this.routerId,
            routerType: this.routerType,
            routeTableId: this.routeTableId,
            routeTableName: this.routeTableName,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosRouteTablesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouteTables = RosRouteTables;
/**
 * The resource type name for this resource class.
 */
RosRouteTables.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTables";
/**
 * Determine whether the given properties match those of a `RosTrafficMirrorFiltersProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFiltersProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFiltersPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosTrafficMirrorFiltersPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosTrafficMirrorFilters extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficMirrorFilters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrafficMirrorFilterIds = this.getAtt('TrafficMirrorFilterIds');
        this.attrTrafficMirrorFilters = this.getAtt('TrafficMirrorFilters');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.trafficMirrorFilterName = props.trafficMirrorFilterName;
    }
    get rosProperties() {
        return {
            trafficMirrorFilterName: this.trafficMirrorFilterName,
        };
    }
    renderProperties(props) {
        return rosTrafficMirrorFiltersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficMirrorFilters = RosTrafficMirrorFilters;
/**
 * The resource type name for this resource class.
 */
RosTrafficMirrorFilters.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilters";
/**
 * Determine whether the given properties match those of a `RosVSwitchesProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchesProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
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
function rosVSwitchesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosVSwitches extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosVSwitchesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVSwitches = RosVSwitches;
/**
 * The resource type name for this resource class.
 */
RosVSwitches.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitches";
/**
 * Determine whether the given properties match those of a `RosVpcsProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcsProps`
 *
 * @returns the result of the validation.
 */
function RosVpcsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.vpcIds && (Array.isArray(properties.vpcIds) || (typeof properties.vpcIds) === 'string')) {
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
function rosVpcsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosVpcs extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            isDefault: this.isDefault,
            resourceGroupId: this.resourceGroupId,
            vpcIds: this.vpcIds,
            vpcName: this.vpcName,
            vpcOwnerId: this.vpcOwnerId,
        };
    }
    renderProperties(props) {
        return rosVpcsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpcs = RosVpcs;
/**
 * The resource type name for this resource class.
 */
RosVpcs.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpcs";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZwYy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXlFOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUywwQkFBMEIsQ0FBQyxVQUFlO0lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzdHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsSUFBRyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNyRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDcEIsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsQ0FBQztTQUNqSixDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzlGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzFEO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFELFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM5RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEQsR0FBRyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQzVDLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDcEUsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztLQUN6RSxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsV0FBVztJQW1GN0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxnQ0FBeUM7UUFDN0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzVDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7QUF6SEwsb0NBMEhDO0FBekhHOztHQUVHO0FBQ29CLG1DQUFzQixHQUFHLDRCQUE0QixDQUFDO0FBOElqRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHdDQUF3QyxDQUFDLFVBQWU7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBQy9ILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQzNILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyw0Q0FBNEMsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzVHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHdDQUF3QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hFO0lBQ0QsT0FBTztRQUNMLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7UUFDdEYsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxRixlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7S0FDckUsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSxHQUFHLENBQUMsV0FBVztJQWtDM0Q7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0MsRUFBRSxnQ0FBeUM7UUFDM0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1FBQy9ELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILHdCQUF3QixFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDdkQsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQjtZQUMzRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDRDQUE0QyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RyxDQUFDOztBQTVETCxnRUE2REM7QUE1REc7O0dBRUc7QUFDb0IsaURBQXNCLEdBQUcsMENBQTBDLENBQUM7QUF1RS9GOzs7Ozs7R0FNRztBQUNILFNBQVMsaUNBQWlDLENBQUMsVUFBZTtJQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM3RyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMscUNBQXFDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNyRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNqRTtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO0tBQ3pFLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF3QnBEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQStCLEVBQUUsZ0NBQXlDO1FBQ3BILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUNyRCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzVDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7QUE5Q0wsa0RBK0NDO0FBOUNHOztHQUVHO0FBQ29CLDBDQUFzQixHQUFHLG1DQUFtQyxDQUFDO0FBa0d4Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHlCQUF5QixDQUFDLFVBQWU7SUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDOUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxZQUFZO1lBQzdCLGFBQWEsRUFBRSxDQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxLQUFLLENBQUM7U0FDcEQsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQztTQUN0QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUNqRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsNkJBQTZCLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUM3RixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6RDtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3hELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELFVBQVUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMxRCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0tBQzdELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBaUU1Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLGdDQUF5QztRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7QUFyR0wsa0NBc0dDO0FBckdHOztHQUVHO0FBQ29CLGtDQUFzQixHQUFHLDJCQUEyQixDQUFDO0FBZ0hoRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHVCQUF1QixDQUFDLFVBQWU7SUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsMkJBQTJCLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUMzRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN2RDtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDckQsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF3QjFDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsZ0NBQXlDO1FBQzFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3hCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7QUE5Q0wsOEJBK0NDO0FBOUNHOztHQUVHO0FBQ29CLGdDQUFzQixHQUFHLHlCQUF5QixDQUFDO0FBbUU5RTs7Ozs7O0dBTUc7QUFDSCxTQUFTLDZCQUE2QixDQUFDLFVBQWU7SUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsaUNBQWlDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNqRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3RDtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3BFLEtBQUssRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztLQUNqRCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUFrQ2hEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTJCLEVBQUUsZ0NBQXlDO1FBQ2hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8saUNBQWlDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzNGLENBQUM7O0FBNURMLDBDQTZEQztBQTVERzs7R0FFRztBQUNvQixzQ0FBc0IsR0FBRywrQkFBK0IsQ0FBQztBQWtFcEY7Ozs7OztHQU1HO0FBQ0gsU0FBUyxnQ0FBZ0MsQ0FBQyxVQUFlO0lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxvQ0FBb0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3BHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ2hFO0lBQ0QsT0FBTyxFQUNOLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUFjbkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxnQ0FBeUM7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztJQUM3RSxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU8sRUFDTixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sb0NBQW9DLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O0FBakNMLGdEQWtDQztBQWpDRzs7R0FFRztBQUNvQix5Q0FBc0IsR0FBRyxrQ0FBa0MsQ0FBQztBQTJGdkY7Ozs7OztHQU1HO0FBQ0gsU0FBUyw0QkFBNEIsQ0FBQyxVQUFlO0lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMvRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxnQ0FBZ0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzVEO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlDLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM5RCxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDcEQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRSxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztLQUNuRCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsV0FBVztJQXVFL0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxnQ0FBeUM7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxnQ0FBZ0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7QUE3R0wsd0NBOEdDO0FBN0dHOztHQUVHO0FBQ29CLHFDQUFzQixHQUFHLDhCQUE4QixDQUFDO0FBNkhuRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLDJCQUEyQixDQUFDLFVBQWU7SUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsK0JBQStCLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUMvRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMzRDtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0tBQ3pELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBNkI5Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF5QixFQUFFLGdDQUF5QztRQUM5RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDNUIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLCtCQUErQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RixDQUFDOztBQXJETCxzQ0FzREM7QUFyREc7O0dBRUc7QUFDb0Isb0NBQXNCLEdBQUcsNkJBQTZCLENBQUM7QUFzRmxGOzs7Ozs7R0FNRztBQUNILFNBQVMsNEJBQTRCLENBQUMsVUFBZTtJQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkRBQTJELENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsZ0NBQWdDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM1RDtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2xFLFVBQVUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMxRCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQ2pELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsY0FBZSxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBOEMvQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLGdDQUF5QztRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLGdDQUFnQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMxRixDQUFDOztBQTVFTCx3Q0E2RUM7QUE1RUc7O0dBRUc7QUFDb0IscUNBQXNCLEdBQUcsOEJBQThCLENBQUM7QUE0Rm5GOzs7Ozs7R0FNRztBQUNILFNBQVMsNEJBQTRCLENBQUMsVUFBZTtJQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxnQ0FBZ0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzVEO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUNsRSxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7S0FDckUsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE2Qi9DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTBCLEVBQUUsZ0NBQXlDO1FBQy9HLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sZ0NBQWdDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O0FBckRMLHdDQXNEQztBQXJERzs7R0FFRztBQUNvQixxQ0FBc0IsR0FBRyw4QkFBOEIsQ0FBQztBQXlGbkY7Ozs7OztHQU1HO0FBQ0gsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUN6SCxJQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JFLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRztZQUNwQixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixDQUFDO1NBQ2hJLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0FBQzdGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyx5Q0FBeUMsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3pHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHFDQUFxQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3JFO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUM1Qyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1FBQ3BGLGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztLQUNyRSxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLHVCQUF3QixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBaUR4RDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQyxFQUFFLGdDQUF5QztRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYix1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ3JELGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8seUNBQXlDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O0FBM0VMLDBEQTRFQztBQTNFRzs7R0FFRztBQUNvQiw4Q0FBc0IsR0FBRyx1Q0FBdUMsQ0FBQztBQXVJNUY7Ozs7OztHQU1HO0FBQ0gsU0FBUyw2QkFBNkIsQ0FBQyxVQUFlO0lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNuSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsaUNBQWlDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNqRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3RDtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RSxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3hELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2xFLGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztLQUNuRSxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF5RWhEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTJCLEVBQUUsZ0NBQXlDO1FBQ2hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDdEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLGlDQUFpQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMzRixDQUFDOztBQTdHTCwwQ0E4R0M7QUE3R0c7O0dBRUc7QUFDb0Isc0NBQXNCLEdBQUcsK0JBQStCLENBQUM7QUFvSnBGOzs7Ozs7R0FNRztBQUNILFNBQVMsNEJBQTRCLENBQUMsVUFBZTtJQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLGdDQUFnQyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDNUQ7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3BFLFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDMUQsWUFBWSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzlELGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUNsRSxLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7S0FDakQsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUFvRC9DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTBCLEVBQUUsZ0NBQXlDO1FBQy9HLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxnQ0FBZ0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7QUFwRkwsd0NBcUZDO0FBcEZHOztHQUVHO0FBQ29CLHFDQUFzQixHQUFHLDhCQUE4QixDQUFDO0FBK0ZuRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHFDQUFxQyxDQUFDLFVBQWU7SUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDekgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHlDQUF5QyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDekcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMscUNBQXFDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDckU7SUFDRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztLQUNyRixDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLHVCQUF3QixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBd0J4RDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQyxFQUFFLGdDQUF5QztRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7SUFDakUsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtTQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8seUNBQXlDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O0FBOUNMLDBEQStDQztBQTlDRzs7R0FFRztBQUNvQiw4Q0FBc0IsR0FBRyx1Q0FBdUMsQ0FBQztBQStGNUY7Ozs7OztHQU1HO0FBQ0gsU0FBUywwQkFBMEIsQ0FBQyxVQUFlO0lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxJQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQy9HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNsQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzlGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzFEO0lBQ0QsT0FBTztRQUNMLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDdEUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3pELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRSxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDOUQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2hELFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDMUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztLQUNuRSxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsV0FBVztJQThEN0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxnQ0FBeUM7UUFDN0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3RDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7QUFsR0wsb0NBbUdDO0FBbEdHOztHQUVHO0FBQ29CLG1DQUFzQixHQUFHLDRCQUE0QixDQUFDO0FBeUlqRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHFCQUFxQixDQUFDLFVBQWU7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9ELElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDOUIsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHlCQUF5QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDekYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDckQ7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0RSxTQUFTLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDekQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3BFLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3BELFVBQVUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztLQUMzRCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsV0FBVztJQW9EeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBbUIsRUFBRSxnQ0FBeUM7UUFDeEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDOUIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLHlCQUF5QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRixDQUFDOztBQXBGTCwwQkFxRkM7QUFwRkc7O0dBRUc7QUFDb0IsOEJBQXNCLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0FkZHJlc3Nlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZWlwLWFkZHJlc3Nlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FkZHJlc3Nlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRyZXNzTmFtZTogVGhlIG5hbWUgb2YgdGhlIEVJUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyZXNzTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvY2F0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgRUlQIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsb2NhdGlvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgY2xvdWQgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjdXJyZW50IGJvdW5kIGluc3RhbmNlLlxuICAgICAqIC0gKipFY3NJbnN0YW5jZSoqOiBhbiBFQ1MgaW5zdGFuY2Ugb2YgdGhlIFZQQyB0eXBlLlxuICAgICAqIC0gKipTbGJJbnN0YW5jZSoqOiBhbiBTTEIgaW5zdGFuY2Ugb2YgdGhlIFZQQyB0eXBlLlxuICAgICAqIC0gKipOYXQqKjpOQVQgZ2F0ZXdheS5cbiAgICAgKiAtICoqSGFWaXAqKjogYSBoaWdobHkgYXZhaWxhYmxlIHZpcnR1YWwgSVAgYWRkcmVzcy5cbiAgICAgKiAtICoqTmV0d29ya0ludGVyZmFjZSoqOiBTZWNvbmRhcnkgRU5JLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcEFkZHJlc3M6IFRoZSBJUCBhZGRyZXNzIHBvb2wgdG8gd2hpY2ggdGhlIEVJUCB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBBZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcDogVGhlIGxpbmUgdHlwZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEJHUCAoZGVmYXVsdCk6IEJHUCAoTXVsdGktSVNQKSBsaW5lcy4gQWxsIHJlZ2lvbnMgc3VwcG9ydCBCR1AgKE11bHRpLUlTUCkgRUlQcy5cbiAgICAgKiBCR1BfUFJPOiBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzLiBcbiAgICAgKiBPbmx5IHRoZSBmb2xsb3dpbmcgcmVnaW9ucyBzdXBwb3J0IEJHUCAoTXVsdGktSVNQKSBQcm8gbGluZXM6IFxuICAgICAqIENoaW5hIChIb25nIEtvbmcpLCBTaW5nYXBvcmUsIE1hbGF5c2lhIChLdWFsYSBMdW1wdXIpLCBQaGlsaXBwaW5lcyAoTWFuaWxhKSwgSW5kb25lc2lhIChKYWthcnRhKSwgYW5kIFRoYWlsYW5kIChCYW5na29rKS5cbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBCR1AgKE11bHRpLUlTUCkgYW5kIEJHUCAoTXVsdGktSVNQKSBQcm8sIHNlZSBFSVAgbGluZSB0eXBlcy5cbiAgICAgKiBJZiB5b3UgYXJlIGFsbG93ZWQgdG8gdXNlIHNpbmdsZS1JU1AgYmFuZHdpZHRoLCB5b3UgY2FuIGFsc28gY2hvb3NlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICAgKiBDaGluYVRlbGVjb206IENoaW5hIFRlbGVjb21cbiAgICAgKiBDaGluYVVuaWNvbTogQ2hpbmEgVW5pY29tXG4gICAgICogQ2hpbmFNb2JpbGU6IENoaW5hIE1vYmlsZVxuICAgICAqIENoaW5hVGVsZWNvbV9MMjogQ2hpbmEgVGVsZWNvbSBMMlxuICAgICAqIENoaW5hVW5pY29tX0wyOiBDaGluYSBVbmljb20gTDJcbiAgICAgKiBDaGluYU1vYmlsZV9MMjogQ2hpbmEgTW9iaWxlIEwyXG4gICAgICogSWYgeW91ciBzZXJ2aWNlcyBhcmUgZGVwbG95ZWQgaW4gQ2hpbmEgRWFzdCAxIEZpbmFuY2UsIHlvdSBtdXN0IHNldCB0aGlzIHBhcmFtZXRlciB0byBCR1BfRmluYW5jZUNsb3VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXltZW50VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBFSVAuIFZhbGlkIHZhbHVlczogIFByZVBhaWQ6IHN1YnNjcmlwdGlvbiBQb3N0UGFpZDogcGF5LWFzLXlvdS1nby5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXltZW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIEVJUHMgYmVsb25nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWdtZW50SW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBjb25zZWN1dGl2ZSBFSVBzLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIHJldHVybmVkIG9ubHkgaWYgdGhlIEVJUCBpcyBhIGNvbnRpbnVvdXMgRUlQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlZ21lbnRJbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FkZHJlc3Nlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBZGRyZXNzZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBZGRyZXNzZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlZ21lbnRJbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlZ21lbnRJbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRyZXNzTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hZGRyZXNzTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5pc3AgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmlzcCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNwJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXNwLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkJHUFwiLFwiQkdQX1BST1wiLFwiUnVuU2hlbGxTY3JpcHRcIixcIkNoaW5hVGVsZWNvbVwiLFwiQ2hpbmFVbmljb21cIixcIkNoaW5hTW9iaWxlXCIsXCJDaGluYVRlbGVjb21fTDJcIixcIkNoaW5hVW5pY29tX0wyXCIsXCJDaGluYU1vYmlsZV9MMlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3ApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG9jYXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGxvY2F0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BheW1lbnRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBheW1lbnRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcEFkZHJlc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBBZGRyZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FkZHJlc3Nlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RUlQOjpBZGRyZXNzZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FkZHJlc3Nlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RUlQOjpBZGRyZXNzZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWRkcmVzc2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBZGRyZXNzZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBZGRyZXNzTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hZGRyZXNzTmFtZSksXG4gICAgICBBbGxvY2F0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb2NhdGlvbklkKSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICBJbnN0YW5jZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSxcbiAgICAgIElwQWRkcmVzczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcEFkZHJlc3MpLFxuICAgICAgSXNwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzcCksXG4gICAgICBQYXltZW50VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXltZW50VHlwZSksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICAgIFNlZ21lbnRJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlZ21lbnRJbnN0YW5jZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RUlQOjpBZGRyZXNzZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBpbmZvcm1hdGlvbiBhYm91dCBlbGFzdGljIElQIGFkZHJlc3NlcyAoRUlQcykuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFkZHJlc3Nlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVpcC1hZGRyZXNzZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FkZHJlc3NlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkVJUDo6QWRkcmVzc2VzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFkZHJlc3NlczogVGhlIGRldGFpbHMgYWJvdXQgdGhlIEVJUFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWRkcmVzc2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsbG9jYXRpb25JZHM6IFRoZSBsaXN0IG9mIGFsbG9jYXRpb24gSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb2NhdGlvbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkcmVzc05hbWU6IFRoZSBuYW1lIG9mIHRoZSBFSVAuXG4gICAgICovXG4gICAgcHVibGljIGFkZHJlc3NOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb2NhdGlvbklkOiBUaGUgSUQgb2YgdGhlIEVJUCB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGxvY2F0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGNsb3VkIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY3VycmVudCBib3VuZCBpbnN0YW5jZS5cbiAgICAgKiAtICoqRWNzSW5zdGFuY2UqKjogYW4gRUNTIGluc3RhbmNlIG9mIHRoZSBWUEMgdHlwZS5cbiAgICAgKiAtICoqU2xiSW5zdGFuY2UqKjogYW4gU0xCIGluc3RhbmNlIG9mIHRoZSBWUEMgdHlwZS5cbiAgICAgKiAtICoqTmF0Kio6TkFUIGdhdGV3YXkuXG4gICAgICogLSAqKkhhVmlwKio6IGEgaGlnaGx5IGF2YWlsYWJsZSB2aXJ0dWFsIElQIGFkZHJlc3MuXG4gICAgICogLSAqKk5ldHdvcmtJbnRlcmZhY2UqKjogU2Vjb25kYXJ5IEVOSS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBBZGRyZXNzOiBUaGUgSVAgYWRkcmVzcyBwb29sIHRvIHdoaWNoIHRoZSBFSVAgdGhhdCB5b3Ugd2FudCB0byBxdWVyeSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpcEFkZHJlc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1AgKGRlZmF1bHQpOiBCR1AgKE11bHRpLUlTUCkgbGluZXMuIEFsbCByZWdpb25zIHN1cHBvcnQgQkdQIChNdWx0aS1JU1ApIEVJUHMuXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcy4gXG4gICAgICogT25seSB0aGUgZm9sbG93aW5nIHJlZ2lvbnMgc3VwcG9ydCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzOiBcbiAgICAgKiBDaGluYSAoSG9uZyBLb25nKSwgU2luZ2Fwb3JlLCBNYWxheXNpYSAoS3VhbGEgTHVtcHVyKSwgUGhpbGlwcGluZXMgKE1hbmlsYSksIEluZG9uZXNpYSAoSmFrYXJ0YSksIGFuZCBUaGFpbGFuZCAoQmFuZ2tvaykuXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgQkdQIChNdWx0aS1JU1ApIGFuZCBCR1AgKE11bHRpLUlTUCkgUHJvLCBzZWUgRUlQIGxpbmUgdHlwZXMuXG4gICAgICogSWYgeW91IGFyZSBhbGxvd2VkIHRvIHVzZSBzaW5nbGUtSVNQIGJhbmR3aWR0aCwgeW91IGNhbiBhbHNvIGNob29zZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAgICogQ2hpbmFUZWxlY29tOiBDaGluYSBUZWxlY29tXG4gICAgICogQ2hpbmFVbmljb206IENoaW5hIFVuaWNvbVxuICAgICAqIENoaW5hTW9iaWxlOiBDaGluYSBNb2JpbGVcbiAgICAgKiBDaGluYVRlbGVjb21fTDI6IENoaW5hIFRlbGVjb20gTDJcbiAgICAgKiBDaGluYVVuaWNvbV9MMjogQ2hpbmEgVW5pY29tIEwyXG4gICAgICogQ2hpbmFNb2JpbGVfTDI6IENoaW5hIE1vYmlsZSBMMlxuICAgICAqIElmIHlvdXIgc2VydmljZXMgYXJlIGRlcGxveWVkIGluIENoaW5hIEVhc3QgMSBGaW5hbmNlLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gQkdQX0ZpbmFuY2VDbG91ZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5bWVudFR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgRUlQLiBWYWxpZCB2YWx1ZXM6ICBQcmVQYWlkOiBzdWJzY3JpcHRpb24gUG9zdFBhaWQ6IHBheS1hcy15b3UtZ28uXG4gICAgICovXG4gICAgcHVibGljIHBheW1lbnRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBFSVBzIGJlbG9uZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VnbWVudEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgY29uc2VjdXRpdmUgRUlQcy5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciB2YWx1ZSBpcyByZXR1cm5lZCBvbmx5IGlmIHRoZSBFSVAgaXMgYSBjb250aW51b3VzIEVJUC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VnbWVudEluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBZGRyZXNzZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FkZHJlc3Nlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWRkcmVzc2VzID0gdGhpcy5nZXRBdHQoJ0FkZHJlc3NlcycpO1xuICAgICAgICB0aGlzLmF0dHJBbGxvY2F0aW9uSWRzID0gdGhpcy5nZXRBdHQoJ0FsbG9jYXRpb25JZHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWRkcmVzc05hbWUgPSBwcm9wcy5hZGRyZXNzTmFtZTtcbiAgICAgICAgdGhpcy5hbGxvY2F0aW9uSWQgPSBwcm9wcy5hbGxvY2F0aW9uSWQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VUeXBlID0gcHJvcHMuaW5zdGFuY2VUeXBlO1xuICAgICAgICB0aGlzLmlwQWRkcmVzcyA9IHByb3BzLmlwQWRkcmVzcztcbiAgICAgICAgdGhpcy5pc3AgPSBwcm9wcy5pc3A7XG4gICAgICAgIHRoaXMucGF5bWVudFR5cGUgPSBwcm9wcy5wYXltZW50VHlwZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMuc2VnbWVudEluc3RhbmNlSWQgPSBwcm9wcy5zZWdtZW50SW5zdGFuY2VJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzTmFtZTogdGhpcy5hZGRyZXNzTmFtZSxcbiAgICAgICAgICAgIGFsbG9jYXRpb25JZDogdGhpcy5hbGxvY2F0aW9uSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHRoaXMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgaXBBZGRyZXNzOiB0aGlzLmlwQWRkcmVzcyxcbiAgICAgICAgICAgIGlzcDogdGhpcy5pc3AsXG4gICAgICAgICAgICBwYXltZW50VHlwZTogdGhpcy5wYXltZW50VHlwZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzZWdtZW50SW5zdGFuY2VJZDogdGhpcy5zZWdtZW50SW5zdGFuY2VJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWRkcmVzc2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1jb21tb25iYW5kd2lkdGhwYWNrYWdlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZDogVGhlIElEIG9mIHRoZSBJbnRlcm5ldCBzaGFyZWQgYmFuZHdpZHRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZTogVGhlIG5hbWUgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbW9uQmFuZHdpZHRoUGFja2FnZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbW9uQmFuZHdpZHRoUGFja2FnZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZCksXG4gICAgICBDb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZSksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlc2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYENvbW1vbkJhbmR3aWR0aFBhY2thZ2VzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLWNvbW1vbmJhbmR3aWR0aHBhY2thZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlkczogVGhlIGxpc3Qgb2YgY29tbW9uIGJhbmR3aWR0aCBwYWNrYWdlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ29tbW9uQmFuZHdpZHRoUGFja2FnZXM6IFRoZSBsaXN0IG9mIGNvbW1vbiBiYW5kd2lkdGggcGFja2FnZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb21tb25CYW5kd2lkdGhQYWNrYWdlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbW9uQmFuZHdpZHRoUGFja2FnZUlkOiBUaGUgSUQgb2YgdGhlIEludGVybmV0IHNoYXJlZCBiYW5kd2lkdGguXG4gICAgICovXG4gICAgcHVibGljIGNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1vbkJhbmR3aWR0aFBhY2thZ2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbW9uQmFuZHdpZHRoUGFja2FnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlkcyA9IHRoaXMuZ2V0QXR0KCdDb21tb25CYW5kd2lkdGhQYWNrYWdlSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckNvbW1vbkJhbmR3aWR0aFBhY2thZ2VzID0gdGhpcy5nZXRBdHQoJ0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZCA9IHByb3BzLmNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJZDtcbiAgICAgICAgdGhpcy5jb21tb25CYW5kd2lkdGhQYWNrYWdlTmFtZSA9IHByb3BzLmNvbW1vbkJhbmR3aWR0aFBhY2thZ2VOYW1lO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb21tb25CYW5kd2lkdGhQYWNrYWdlSWQ6IHRoaXMuY29tbW9uQmFuZHdpZHRoUGFja2FnZUlkLFxuICAgICAgICAgICAgY29tbW9uQmFuZHdpZHRoUGFja2FnZU5hbWU6IHRoaXMuY29tbW9uQmFuZHdpZHRoUGFja2FnZU5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0N1c3RvbWVyR2F0ZXdheXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1jdXN0b21lcmdhdGV3YXlzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tZXJHYXRld2F5c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21lckdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBjdXN0b21lciBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbWVyR2F0ZXdheUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0N1c3RvbWVyR2F0ZXdheXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tZXJHYXRld2F5c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbWVyR2F0ZXdheXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbWVyR2F0ZXdheUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmN1c3RvbWVyR2F0ZXdheUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0N1c3RvbWVyR2F0ZXdheXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6Q3VzdG9tZXJHYXRld2F5c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tZXJHYXRld2F5c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpDdXN0b21lckdhdGV3YXlzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbWVyR2F0ZXdheXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0N1c3RvbWVyR2F0ZXdheXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDdXN0b21lckdhdGV3YXlJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jdXN0b21lckdhdGV3YXlJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6Q3VzdG9tZXJHYXRld2F5c2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEN1c3RvbWVyR2F0ZXdheXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtY3VzdG9tZXJnYXRld2F5c1xuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tZXJHYXRld2F5cyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlZQQzo6Q3VzdG9tZXJHYXRld2F5c1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDdXN0b21lckdhdGV3YXlJZHM6IFRoZSBsaXN0IG9mIGN1c3RvbWVyIGdhdGV3YXkgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VzdG9tZXJHYXRld2F5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEN1c3RvbWVyR2F0ZXdheXM6IFRoZSBsaXN0IG9mIGN1c3RvbWVyIGdhdGV3YXlzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VzdG9tZXJHYXRld2F5czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VzdG9tZXJHYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgY3VzdG9tZXIgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3VzdG9tZXJHYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21lckdhdGV3YXlzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21lckdhdGV3YXlzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDdXN0b21lckdhdGV3YXlJZHMgPSB0aGlzLmdldEF0dCgnQ3VzdG9tZXJHYXRld2F5SWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckN1c3RvbWVyR2F0ZXdheXMgPSB0aGlzLmdldEF0dCgnQ3VzdG9tZXJHYXRld2F5cycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jdXN0b21lckdhdGV3YXlJZCA9IHByb3BzLmN1c3RvbWVyR2F0ZXdheUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1c3RvbWVyR2F0ZXdheUlkOiB0aGlzLmN1c3RvbWVyR2F0ZXdheUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDdXN0b21lckdhdGV3YXlzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRmxvd0xvZ3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1mbG93bG9nc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Zsb3dMb2dzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGZsb3cgbG9nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZsb3dMb2dJZDogVGhlIElEIG9mIGEgZmxvdyBsb2cuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmxvd0xvZ0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZsb3dMb2dOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZmxvdyBsb2cuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmxvd0xvZ05hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nU3RvcmVOYW1lOiBBIExvZ1N0b3JlIHRoYXQgc3RvcmVzIGNhcHR1cmVkIHRyYWZmaWMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nU3RvcmVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBNYW5hZ2UgdGhlIGNhcHR1cmVkIHRyYWZmaWMgb2YgdGhlIFByb2plY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgZmxvdyBsb2cgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlVHlwZTogVGhlIHJlc291cmNlIHR5cGUgb2YgdHJhZmZpYyB0byBjYXB0dXJlLiBWYWx1ZTpcbiAgICAgKiBOZXR3b3JrSW50ZXJmYWNlOiBFbGFzdGljIE5JQy5cbiAgICAgKiBWU3dpdGNoOiBBbGwgRU5JcyB3aXRoaW4gdGhlIFZTd2l0Y2guXG4gICAgICogVlBDOiBBbGwgRU5JcyBpbiBhIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhZmZpY1R5cGU6IFRoZSB0eXBlIG9mIHRyYWZmaWMgY29sbGVjdGVkLiBWYWx1ZTpcbiAgICAgKiBBbGw6IEFsbCB0cmFmZmljLlxuICAgICAqIEFsbG93OiBUcmFmZmljIGFsbG93ZWQgYnkgYWNjZXNzIGNvbnRyb2wuXG4gICAgICogRHJvcDogVHJhZmZpYyBkZW5pZWQgYnkgYWNjZXNzIGNvbnRyb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhZmZpY1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRmxvd0xvZ3NQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRmxvd0xvZ3NQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGbG93TG9nc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmxvd0xvZ05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmxvd0xvZ05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dTdG9yZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nU3RvcmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXNvdXJjZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzb3VyY2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk5ldHdvcmtJbnRlcmZhY2VcIixcIlZTd2l0Y2hcIixcIlZQQ1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Zsb3dMb2dJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mbG93TG9nSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRyYWZmaWNUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50cmFmZmljVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50cmFmZmljVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbGxcIixcIkFsbG93XCIsXCJEcm9wXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY1R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhZmZpY1R5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRmxvd0xvZ3NQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6Rmxvd0xvZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Zsb3dMb2dzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OkZsb3dMb2dzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Zsb3dMb2dzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGbG93TG9nc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEZsb3dMb2dJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mbG93TG9nSWQpLFxuICAgICAgRmxvd0xvZ05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmxvd0xvZ05hbWUpLFxuICAgICAgTG9nU3RvcmVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ1N0b3JlTmFtZSksXG4gICAgICBQcm9qZWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0TmFtZSksXG4gICAgICBSZXNvdXJjZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlSWQpLFxuICAgICAgUmVzb3VyY2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSksXG4gICAgICBUcmFmZmljVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFmZmljVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6Rmxvd0xvZ3NgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBGbG93TG9nc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1mbG93bG9nc1xuICovXG5leHBvcnQgY2xhc3MgUm9zRmxvd0xvZ3MgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OkZsb3dMb2dzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZsb3dMb2dJZHM6IFRoZSBsaXN0IG9mIGZsb3cgbG9nIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZsb3dMb2dJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRmxvd0xvZ3M6IFRoZSBsaXN0IG9mIGZsb3cgbG9ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZsb3dMb2dzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBmbG93IGxvZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmbG93TG9nSWQ6IFRoZSBJRCBvZiBhIGZsb3cgbG9nLlxuICAgICAqL1xuICAgIHB1YmxpYyBmbG93TG9nSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmbG93TG9nTmFtZTogVGhlIG5hbWUgb2YgdGhlIGZsb3cgbG9nLlxuICAgICAqL1xuICAgIHB1YmxpYyBmbG93TG9nTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ1N0b3JlTmFtZTogQSBMb2dTdG9yZSB0aGF0IHN0b3JlcyBjYXB0dXJlZCB0cmFmZmljLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dTdG9yZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogTWFuYWdlIHRoZSBjYXB0dXJlZCB0cmFmZmljIG9mIHRoZSBQcm9qZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIGZsb3cgbG9nIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVR5cGU6IFRoZSByZXNvdXJjZSB0eXBlIG9mIHRyYWZmaWMgdG8gY2FwdHVyZS4gVmFsdWU6XG4gICAgICogTmV0d29ya0ludGVyZmFjZTogRWxhc3RpYyBOSUMuXG4gICAgICogVlN3aXRjaDogQWxsIEVOSXMgd2l0aGluIHRoZSBWU3dpdGNoLlxuICAgICAqIFZQQzogQWxsIEVOSXMgaW4gYSBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNUeXBlOiBUaGUgdHlwZSBvZiB0cmFmZmljIGNvbGxlY3RlZC4gVmFsdWU6XG4gICAgICogQWxsOiBBbGwgdHJhZmZpYy5cbiAgICAgKiBBbGxvdzogVHJhZmZpYyBhbGxvd2VkIGJ5IGFjY2VzcyBjb250cm9sLlxuICAgICAqIERyb3A6IFRyYWZmaWMgZGVuaWVkIGJ5IGFjY2VzcyBjb250cm9sLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFmZmljVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Zsb3dMb2dzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGbG93TG9ncy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRmxvd0xvZ0lkcyA9IHRoaXMuZ2V0QXR0KCdGbG93TG9nSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckZsb3dMb2dzID0gdGhpcy5nZXRBdHQoJ0Zsb3dMb2dzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZmxvd0xvZ0lkID0gcHJvcHMuZmxvd0xvZ0lkO1xuICAgICAgICB0aGlzLmZsb3dMb2dOYW1lID0gcHJvcHMuZmxvd0xvZ05hbWU7XG4gICAgICAgIHRoaXMubG9nU3RvcmVOYW1lID0gcHJvcHMubG9nU3RvcmVOYW1lO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvcHMucHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VJZCA9IHByb3BzLnJlc291cmNlSWQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2VUeXBlID0gcHJvcHMucmVzb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLnRyYWZmaWNUeXBlID0gcHJvcHMudHJhZmZpY1R5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmbG93TG9nSWQ6IHRoaXMuZmxvd0xvZ0lkLFxuICAgICAgICAgICAgZmxvd0xvZ05hbWU6IHRoaXMuZmxvd0xvZ05hbWUsXG4gICAgICAgICAgICBsb2dTdG9yZU5hbWU6IHRoaXMubG9nU3RvcmVOYW1lLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUlkOiB0aGlzLnJlc291cmNlSWQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdHJhZmZpY1R5cGU6IHRoaXMudHJhZmZpY1R5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0Zsb3dMb2dzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zSGFWaXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtaGF2aXBzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSGFWaXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhVmlwSWQ6IFRoZSAgSUQgb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFWaXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NIYVZpcHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSGFWaXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSGFWaXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYVZpcElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhVmlwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSGFWaXBzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OkhhVmlwc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSGFWaXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OkhhVmlwc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NIYVZpcHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0hhVmlwc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEhhVmlwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFWaXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6SGFWaXBzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSGFWaXBzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLWhhdmlwc1xuICovXG5leHBvcnQgY2xhc3MgUm9zSGFWaXBzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpIYVZpcHNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSGFWaXBJZHM6IFRoZSBsaXN0IG9mIGhhIHZpcCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIYVZpcElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBIYVZpcHM6IFRoZSBsaXN0IG9mIGhhIHZpcHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIYVZpcHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhVmlwSWQ6IFRoZSAgSUQgb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIGhhVmlwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NIYVZpcHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0hhVmlwcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySGFWaXBJZHMgPSB0aGlzLmdldEF0dCgnSGFWaXBJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRySGFWaXBzID0gdGhpcy5nZXRBdHQoJ0hhVmlwcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5oYVZpcElkID0gcHJvcHMuaGFWaXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYVZpcElkOiB0aGlzLmhhVmlwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0hhVmlwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0lwdjRHYXRld2F5c2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLWlwdjRnYXRld2F5c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0lwdjRHYXRld2F5c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcHY0R2F0ZXdheUlkOiBUaGUgcmVzb3VyY2UgYXR0cmlidXRlIGZpZWxkIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVzb3VyY2UgbGV2ZWwgMSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY0R2F0ZXdheUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwdjRHYXRld2F5TmFtZTogUmVzb3VyY2UgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY0R2F0ZXdheU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDIGFzc29jaWF0ZWQgd2l0aCB0aGUgSVB2NCBHYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0lwdjRHYXRld2F5c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJcHY0R2F0ZXdheXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHY0R2F0ZXdheXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwdjRHYXRld2F5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pcHY0R2F0ZXdheU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHY0R2F0ZXdheUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlwdjRHYXRld2F5SWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSXB2NEdhdGV3YXlzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OklwdjRHYXRld2F5c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSXB2NEdhdGV3YXlzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OklwdjRHYXRld2F5c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJcHY0R2F0ZXdheXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0lwdjRHYXRld2F5c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIElwdjRHYXRld2F5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXB2NEdhdGV3YXlJZCksXG4gICAgICBJcHY0R2F0ZXdheU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXB2NEdhdGV3YXlOYW1lKSxcbiAgICAgIFZwY0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpJcHY0R2F0ZXdheXNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBJcHY0R2F0ZXdheXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtaXB2NGdhdGV3YXlzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJcHY0R2F0ZXdheXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OklwdjRHYXRld2F5c1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJcHY0R2F0ZXdheUlkczogVGhlIGxpc3Qgb2YgaXB2NCBnYXRld2F5IElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwdjRHYXRld2F5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElwdjRHYXRld2F5czogVGhlIGxpc3Qgb2YgaXB2NCBnYXRld2F5cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwdjRHYXRld2F5czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXB2NEdhdGV3YXlJZDogVGhlIHJlc291cmNlIGF0dHJpYnV0ZSBmaWVsZCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc291cmNlIGxldmVsIDEgSUQuXG4gICAgICovXG4gICAgcHVibGljIGlwdjRHYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcHY0R2F0ZXdheU5hbWU6IFJlc291cmNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGlwdjRHYXRld2F5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyBhc3NvY2lhdGVkIHdpdGggdGhlIElQdjQgR2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJcHY0R2F0ZXdheXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0lwdjRHYXRld2F5cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySXB2NEdhdGV3YXlJZHMgPSB0aGlzLmdldEF0dCgnSXB2NEdhdGV3YXlJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRySXB2NEdhdGV3YXlzID0gdGhpcy5nZXRBdHQoJ0lwdjRHYXRld2F5cycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pcHY0R2F0ZXdheUlkID0gcHJvcHMuaXB2NEdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy5pcHY0R2F0ZXdheU5hbWUgPSBwcm9wcy5pcHY0R2F0ZXdheU5hbWU7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpcHY0R2F0ZXdheUlkOiB0aGlzLmlwdjRHYXRld2F5SWQsXG4gICAgICAgICAgICBpcHY0R2F0ZXdheU5hbWU6IHRoaXMuaXB2NEdhdGV3YXlOYW1lLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0lwdjRHYXRld2F5c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05hdEdhdGV3YXlab25lc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLW5hdGdhdGV3YXl6b25lc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc05hdEdhdGV3YXlab25lc1Byb3BzIHtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NOYXRHYXRld2F5Wm9uZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmF0R2F0ZXdheVpvbmVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmF0R2F0ZXdheVpvbmVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc05hdEdhdGV3YXlab25lc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpOYXRHYXRld2F5Wm9uZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hdEdhdGV3YXlab25lc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpOYXRHYXRld2F5Wm9uZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTmF0R2F0ZXdheVpvbmVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOYXRHYXRld2F5Wm9uZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6TmF0R2F0ZXdheVpvbmVzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTmF0R2F0ZXdheVpvbmVzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLW5hdGdhdGV3YXl6b25lc1xuICovXG5leHBvcnQgY2xhc3MgUm9zTmF0R2F0ZXdheVpvbmVzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpOYXRHYXRld2F5Wm9uZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgWm9uZUlkczogVGhlIGxpc3Qgb2YgVGhlIFpvbmUgSWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTmF0R2F0ZXdheVpvbmVzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NOYXRHYXRld2F5Wm9uZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZHMgPSB0aGlzLmdldEF0dCgnWm9uZUlkcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05hdEdhdGV3YXlab25lc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05hdEdhdGV3YXlzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtbmF0Z2F0ZXdheXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NOYXRHYXRld2F5c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgTkFUIGdhdGV3YXkuIFNldCB0aGUgdmFsdWUgdG8gUG9zdFBhaWQsIHdoaWNoIHNwZWNpZmllcyB0aGUgcGF5LWFzLXlvdS1nbyBiaWxsaW5nIG1ldGhvZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0R2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdEdhdGV3YXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRUeXBlOiBUaGUgdHlwZSBvZiBOQVQgZ2F0ZXdheS4gU2V0IHRoZSB2YWx1ZSB0byBFbmhhbmNlZCAoZW5oYW5jZWQgTkFUIGdhdGV3YXkpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSB0eXBlIG9mIHRoZSBOQVQgZ2F0ZXdheS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGludGVybmV0OiBhbiBJbnRlcm5ldCBOQVQgZ2F0ZXdheVxuICAgICAqICBpbnRyYW5ldDogYSBWUEMgTkFUIGdhdGV3YXlcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIE5BVCBnYXRld2F5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgTkFUIGdhdGV3YXkuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGluZzogQWZ0ZXIgeW91IHNlbmQgYSByZXF1ZXN0IHRvIGNyZWF0ZSBhIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIGNyZWF0ZXMgdGhlIE5BVCBnYXRld2F5IGluIHRoZSBiYWNrZ3JvdW5kLiBUaGUgTkFUIGdhdGV3YXkgcmVtYWlucyBpbiB0aGUgQ3JlYXRpbmcgc3RhdGUgdW50aWwgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICogIEF2YWlsYWJsZTogVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhlIE5BVCBnYXRld2F5IGlzIGNyZWF0ZWQuXG4gICAgICogIE1vZGlmeWluZzogQWZ0ZXIgeW91IHNlbmQgYSByZXF1ZXN0IHRvIG1vZGlmeSBhIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIG1vZGlmaWVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIE1vZGlmeWluZyBzdGF0ZSB1bnRpbCB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICAgKiAgRGVsZXRpbmc6IEFmdGVyIHlvdSBzZW5kIGEgcmVxdWVzdCB0byBkZWxldGUgYSBOQVQgZ2F0ZXdheSwgdGhlIHN5c3RlbSBkZWxldGVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIERlbGV0aW5nIHN0YXRlIHVudGlsIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGVkLlxuICAgICAqICBDb252ZXJ0aW5nOiBBZnRlciB5b3Ugc2VuZCBhIHJlcXVlc3QgdG8gdXBncmFkZSBhIHN0YW5kYXJkIE5BVCBnYXRld2F5IHRvIGFuIGVuaGFuY2VkIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIHVwZ3JhZGVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIENvbnZlcnRpbmcgc3RhdGUgdW50aWwgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgTkFUIGdhdGV3YXkgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB0byB3aGljaCB0aGUgTkFUIGdhdGV3YXkgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTmF0R2F0ZXdheXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmF0R2F0ZXdheXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NOYXRHYXRld2F5c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hdEdhdGV3YXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYXRHYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOYXRHYXRld2F5c1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpOYXRHYXRld2F5c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmF0R2F0ZXdheXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6TmF0R2F0ZXdheXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTmF0R2F0ZXdheXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc05hdEdhdGV3YXlzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgTmF0R2F0ZXdheUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCksXG4gICAgICBOYXRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdFR5cGUpLFxuICAgICAgTmV0d29ya1R5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya1R5cGUpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBTdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdHVzKSxcbiAgICAgIFZwY0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgIFpvbmVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56b25lSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6Ok5hdEdhdGV3YXlzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTmF0R2F0ZXdheXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtbmF0Z2F0ZXdheXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc05hdEdhdGV3YXlzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpOYXRHYXRld2F5c1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOYXRHYXRld2F5SWRzOiBUaGUgbGlzdCBvZiBUaGUgbmF0IGdhdGV3YXkgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmF0R2F0ZXdheUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOYXRHYXRld2F5czogVGhlIGxpc3Qgb2YgVGhlIG5hdCBnYXRld2F5cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hdEdhdGV3YXlzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgTkFUIGdhdGV3YXkuIFNldCB0aGUgdmFsdWUgdG8gUG9zdFBhaWQsIHdoaWNoIHNwZWNpZmllcyB0aGUgcGF5LWFzLXlvdS1nbyBiaWxsaW5nIG1ldGhvZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0R2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyBuYXRHYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRUeXBlOiBUaGUgdHlwZSBvZiBOQVQgZ2F0ZXdheS4gU2V0IHRoZSB2YWx1ZSB0byBFbmhhbmNlZCAoZW5oYW5jZWQgTkFUIGdhdGV3YXkpLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSB0eXBlIG9mIHRoZSBOQVQgZ2F0ZXdheS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGludGVybmV0OiBhbiBJbnRlcm5ldCBOQVQgZ2F0ZXdheVxuICAgICAqICBpbnRyYW5ldDogYSBWUEMgTkFUIGdhdGV3YXlcbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIE5BVCBnYXRld2F5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgTkFUIGdhdGV3YXkuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGluZzogQWZ0ZXIgeW91IHNlbmQgYSByZXF1ZXN0IHRvIGNyZWF0ZSBhIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIGNyZWF0ZXMgdGhlIE5BVCBnYXRld2F5IGluIHRoZSBiYWNrZ3JvdW5kLiBUaGUgTkFUIGdhdGV3YXkgcmVtYWlucyBpbiB0aGUgQ3JlYXRpbmcgc3RhdGUgdW50aWwgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICogIEF2YWlsYWJsZTogVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhlIE5BVCBnYXRld2F5IGlzIGNyZWF0ZWQuXG4gICAgICogIE1vZGlmeWluZzogQWZ0ZXIgeW91IHNlbmQgYSByZXF1ZXN0IHRvIG1vZGlmeSBhIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIG1vZGlmaWVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIE1vZGlmeWluZyBzdGF0ZSB1bnRpbCB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICAgKiAgRGVsZXRpbmc6IEFmdGVyIHlvdSBzZW5kIGEgcmVxdWVzdCB0byBkZWxldGUgYSBOQVQgZ2F0ZXdheSwgdGhlIHN5c3RlbSBkZWxldGVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIERlbGV0aW5nIHN0YXRlIHVudGlsIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGVkLlxuICAgICAqICBDb252ZXJ0aW5nOiBBZnRlciB5b3Ugc2VuZCBhIHJlcXVlc3QgdG8gdXBncmFkZSBhIHN0YW5kYXJkIE5BVCBnYXRld2F5IHRvIGFuIGVuaGFuY2VkIE5BVCBnYXRld2F5LCB0aGUgc3lzdGVtIHVwZ3JhZGVzIHRoZSBOQVQgZ2F0ZXdheSBpbiB0aGUgYmFja2dyb3VuZC4gVGhlIE5BVCBnYXRld2F5IHJlbWFpbnMgaW4gdGhlIENvbnZlcnRpbmcgc3RhdGUgdW50aWwgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgTkFUIGdhdGV3YXkgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB0byB3aGljaCB0aGUgTkFUIGdhdGV3YXkgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgem9uZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTmF0R2F0ZXdheXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc05hdEdhdGV3YXlzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJOYXRHYXRld2F5SWRzID0gdGhpcy5nZXRBdHQoJ05hdEdhdGV3YXlJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyTmF0R2F0ZXdheXMgPSB0aGlzLmdldEF0dCgnTmF0R2F0ZXdheXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlID0gcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLm5hdEdhdGV3YXlJZCA9IHByb3BzLm5hdEdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy5uYXRUeXBlID0gcHJvcHMubmF0VHlwZTtcbiAgICAgICAgdGhpcy5uZXR3b3JrVHlwZSA9IHByb3BzLm5ldHdvcmtUeXBlO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICAgICAgdGhpcy56b25lSWQgPSBwcm9wcy56b25lSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VDaGFyZ2VUeXBlOiB0aGlzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG5hdEdhdGV3YXlJZDogdGhpcy5uYXRHYXRld2F5SWQsXG4gICAgICAgICAgICBuYXRUeXBlOiB0aGlzLm5hdFR5cGUsXG4gICAgICAgICAgICBuZXR3b3JrVHlwZTogdGhpcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgICAgICB6b25lSWQ6IHRoaXMuem9uZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NOYXRHYXRld2F5c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05hdElwQ2lkcnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1uYXRpcGNpZHJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTmF0SXBDaWRyc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRHYXRld2F5SWQ6IE5BVCBJUCBBRERSRVNTIHJhbmdlIHRvIHRoZSBzZWN1cml0eSBncm91cCBvZiB0aGUgS2Fma2EgVlBDIE5BVCBnYXRld2F5IGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdEdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdElwQ2lkcjogQ3JlYXRlIGEgTkFUIElQIEFERFJFU1MuIFRoZSBuZXcgYWRkcmVzcyBzZWdtZW50IG11c3QgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6IGJlbG9uZyB0byAxMC4wLjAuMFxcLzgsIDE3Mi4xNi4wLjBcXC8xMiBvciAxOTIuMTY4LjAuMFxcLzE2IG5ldHdvcmsgc2VnbWVudCBhbmQgaXRzIHN1Ym5ldC4gU3VwcG9ydCB0aGUgc3VibmV0IG1hc2sgb2YgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSByYW5nZSBvZiAxNiB0byAzMi1iaXQuIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgSVAgYWRkcmVzcyBvZiBhIHB1YmxpYyBuZXR3b3JrIHNlZ21lbnQgYXMgdGhlIE5BVCBJUCBBRERSRVNTLCB0aGUgVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMgTkFUIGlzIGFscmVhZHkgdXNpbmcgdGhlIElQIGFkZHJlc3Mgb2YgYSBwdWJsaWMgbmV0d29yayBvZiBwZXJtaXNzaW9ucy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBjcmVhdGUgYSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQyBOQVQgZ2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXRJcENpZHI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTmF0SXBDaWRyc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOYXRJcENpZHJzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmF0SXBDaWRyc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0SXBDaWRyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdElwQ2lkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0R2F0ZXdheUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0R2F0ZXdheUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOYXRJcENpZHJzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6Ok5hdElwQ2lkcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hdElwQ2lkcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6TmF0SXBDaWRyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOYXRJcENpZHJzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOYXRJcENpZHJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTmF0R2F0ZXdheUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCksXG4gICAgICBOYXRJcENpZHI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmF0SXBDaWRyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpOYXRJcENpZHJzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgQ0lEUiBibG9ja3Mgb2YgYSBOQVQgZ2F0ZXdheS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTmF0SXBDaWRyc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1uYXRpcGNpZHJzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NOYXRJcENpZHJzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpOYXRJcENpZHJzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hdElwQ2lkcklkczogVGhlIGxpc3Qgb2YgbmF0IGlwIGNpZHIgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmF0SXBDaWRySWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hdElwQ2lkcnM6IFRoZSBsaXN0IG9mIG5hdCBpcCBjaWRycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hdElwQ2lkcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdEdhdGV3YXlJZDogTkFUIElQIEFERFJFU1MgcmFuZ2UgdG8gdGhlIHNlY3VyaXR5IGdyb3VwIG9mIHRoZSBLYWZrYSBWUEMgTkFUIGdhdGV3YXkgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIG5hdEdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdElwQ2lkcjogQ3JlYXRlIGEgTkFUIElQIEFERFJFU1MuIFRoZSBuZXcgYWRkcmVzcyBzZWdtZW50IG11c3QgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6IGJlbG9uZyB0byAxMC4wLjAuMFxcLzgsIDE3Mi4xNi4wLjBcXC8xMiBvciAxOTIuMTY4LjAuMFxcLzE2IG5ldHdvcmsgc2VnbWVudCBhbmQgaXRzIHN1Ym5ldC4gU3VwcG9ydCB0aGUgc3VibmV0IG1hc2sgb2YgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSByYW5nZSBvZiAxNiB0byAzMi1iaXQuIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgSVAgYWRkcmVzcyBvZiBhIHB1YmxpYyBuZXR3b3JrIHNlZ21lbnQgYXMgdGhlIE5BVCBJUCBBRERSRVNTLCB0aGUgVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMgTkFUIGlzIGFscmVhZHkgdXNpbmcgdGhlIElQIGFkZHJlc3Mgb2YgYSBwdWJsaWMgbmV0d29yayBvZiBwZXJtaXNzaW9ucy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBjcmVhdGUgYSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQyBOQVQgZ2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0SXBDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTmF0SXBDaWRyc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTmF0SXBDaWRycy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmF0SXBDaWRySWRzID0gdGhpcy5nZXRBdHQoJ05hdElwQ2lkcklkcycpO1xuICAgICAgICB0aGlzLmF0dHJOYXRJcENpZHJzID0gdGhpcy5nZXRBdHQoJ05hdElwQ2lkcnMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmF0R2F0ZXdheUlkID0gcHJvcHMubmF0R2F0ZXdheUlkO1xuICAgICAgICB0aGlzLm5hdElwQ2lkciA9IHByb3BzLm5hdElwQ2lkcjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYXRHYXRld2F5SWQ6IHRoaXMubmF0R2F0ZXdheUlkLFxuICAgICAgICAgICAgbmF0SXBDaWRyOiB0aGlzLm5hdElwQ2lkcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTmF0SXBDaWRyc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05ldHdvcmtBY2xzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtbmV0d29ya2FjbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NOZXR3b3JrQWNsc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrQWNsSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBBQ0wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya0FjbElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtBY2xOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbmV0d29yayBBQ0wuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtBY2xOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlSWQ6IFRoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBpbnN0YW5jZS5UaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IGlmIFJlc291cmNlVHlwZSBhbmQgUmVzb3VyY2VJZCBhcmUgYm90aCBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBhc3NvY2lhdGVkIGluc3RhbmNlLiBTZXQgdGhlIHZhbHVlIHRvIFZTd2l0Y2guXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSBpZiBSZXNvdXJjZVR5cGUgYW5kIFJlc291cmNlSWQgYXJlIGJvdGggc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgdG8gd2hpY2ggdGhlIG5ldHdvcmsgQUNMIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTmV0d29ya0FjbHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmV0d29ya0FjbHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NOZXR3b3JrQWNsc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya0FjbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmtBY2xJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya0FjbE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0d29ya0FjbE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTmV0d29ya0FjbHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6TmV0d29ya0FjbHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05ldHdvcmtBY2xzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6Ok5ldHdvcmtBY2xzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc05ldHdvcmtBY2xzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOZXR3b3JrQWNsc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5ldHdvcmtBY2xJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrQWNsSWQpLFxuICAgICAgTmV0d29ya0FjbE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29ya0FjbE5hbWUpLFxuICAgICAgUmVzb3VyY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUlkKSxcbiAgICAgIFJlc291cmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6Ok5ldHdvcmtBY2xzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSBjcmVhdGVkIG5ldHdvcmsgYWNjZXNzIGNvbnRyb2wgbGlzdHMgKEFDTHMpLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBOZXR3b3JrQWNsc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1uZXR3b3JrYWNsc1xuICovXG5leHBvcnQgY2xhc3MgUm9zTmV0d29ya0FjbHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6Ok5ldHdvcmtBY2xzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5ldHdvcmtBY2xJZHM6IFRoZSBsaXN0IG9mIFRoZSBuZXR3b3JrIGFjbCBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrQWNsSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5ldHdvcmtBY2xzOiBUaGUgbGlzdCBvZiBUaGUgbmV0d29yayBhY2xzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV0d29ya0FjbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtBY2xJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya0FjbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya0FjbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcHVibGljIG5ldHdvcmtBY2xOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VJZDogVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGluc3RhbmNlLlRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgaWYgUmVzb3VyY2VUeXBlIGFuZCBSZXNvdXJjZUlkIGFyZSBib3RoIHNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlVHlwZTogVGhlIHR5cGUgb2YgdGhlIGFzc29jaWF0ZWQgaW5zdGFuY2UuIFNldCB0aGUgdmFsdWUgdG8gVlN3aXRjaC5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IGlmIFJlc291cmNlVHlwZSBhbmQgUmVzb3VyY2VJZCBhcmUgYm90aCBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB0byB3aGljaCB0aGUgbmV0d29yayBBQ0wgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOZXR3b3JrQWNsc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTmV0d29ya0FjbHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtBY2xJZHMgPSB0aGlzLmdldEF0dCgnTmV0d29ya0FjbElkcycpO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrQWNscyA9IHRoaXMuZ2V0QXR0KCdOZXR3b3JrQWNscycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uZXR3b3JrQWNsSWQgPSBwcm9wcy5uZXR3b3JrQWNsSWQ7XG4gICAgICAgIHRoaXMubmV0d29ya0FjbE5hbWUgPSBwcm9wcy5uZXR3b3JrQWNsTmFtZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUlkID0gcHJvcHMucmVzb3VyY2VJZDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVR5cGUgPSBwcm9wcy5yZXNvdXJjZVR5cGU7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXR3b3JrQWNsSWQ6IHRoaXMubmV0d29ya0FjbElkLFxuICAgICAgICAgICAgbmV0d29ya0FjbE5hbWU6IHRoaXMubmV0d29ya0FjbE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUlkOiB0aGlzLnJlc291cmNlSWQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05ldHdvcmtBY2xzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUHJlZml4TGlzdHNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1wcmVmaXhsaXN0c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ByZWZpeExpc3RzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWZpeExpc3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJlZml4IGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZml4TGlzdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUHJlZml4TGlzdHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJlZml4TGlzdHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQcmVmaXhMaXN0c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZml4TGlzdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJlZml4TGlzdE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUHJlZml4TGlzdHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6UHJlZml4TGlzdHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ByZWZpeExpc3RzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OlByZWZpeExpc3RzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ByZWZpeExpc3RzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcmVmaXhMaXN0c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFByZWZpeExpc3ROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZWZpeExpc3ROYW1lKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6OlByZWZpeExpc3RzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiBwcmVmaXggbGlzdHMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFByZWZpeExpc3RzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLXByZWZpeGxpc3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQcmVmaXhMaXN0cyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlZQQzo6UHJlZml4TGlzdHNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJlZml4TGlzdElkczogVGhlIGxpc3Qgb2YgcHJlZml4IGxpc3QgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcmVmaXhMaXN0czogVGhlIGxpc3Qgb2YgcHJlZml4IGxpc3RzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWZpeExpc3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJlZml4IGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHByZWZpeExpc3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUHJlZml4TGlzdHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ByZWZpeExpc3RzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQcmVmaXhMaXN0SWRzID0gdGhpcy5nZXRBdHQoJ1ByZWZpeExpc3RJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyUHJlZml4TGlzdHMgPSB0aGlzLmdldEF0dCgnUHJlZml4TGlzdHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucHJlZml4TGlzdE5hbWUgPSBwcm9wcy5wcmVmaXhMaXN0TmFtZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJlZml4TGlzdE5hbWU6IHRoaXMucHJlZml4TGlzdE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQcmVmaXhMaXN0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcHVibGljaXBhZGRyZXNzcG9vbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQdWJsaWNJcEFkZHJlc3NQb29sc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1AgKGRlZmF1bHQpOiBCR1AgKE11bHRpLUlTUCkgbGluZXNcbiAgICAgKiBCR1BfUFJPOiBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgQkdQIChNdWx0aS1JU1ApIGFuZCBCR1AgKE11bHRpLUlTUCkgUHJvLCBzZWUgRUlQIGxpbmUgdHlwZXMuXG4gICAgICogSWYgeW91IGFyZSBhbGxvd2VkIHRvIHVzZSBzaW5nbGUtSVNQIGJhbmR3aWR0aCwgeW91IGNhbiBhbHNvIGNob29zZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAgICogQ2hpbmFUZWxlY29tOiBDaGluYSBUZWxlY29tXG4gICAgICogQ2hpbmFVbmljb206IENoaW5hIFVuaWNvbVxuICAgICAqIENoaW5hTW9iaWxlOiBDaGluYSBNb2JpbGVcbiAgICAgKiBDaGluYVRlbGVjb21fTDI6IENoaW5hIFRlbGVjb20gTDJcbiAgICAgKiBDaGluYVVuaWNvbV9MMjogQ2hpbmEgVW5pY29tIEwyXG4gICAgICogQ2hpbmFNb2JpbGVfTDI6IENoaW5hIE1vYmlsZSBMMlxuICAgICAqIElmIHlvdXIgc2VydmljZXMgYXJlIGRlcGxveWVkIGluIENoaW5hIEVhc3QgMSBGaW5hbmNlLCBcbiAgICAgKiB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBhbmQgeW91IG11c3Qgc2V0IHRoZSB2YWx1ZSB0byBCR1BfRmluYW5jZUNsb3VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwdWJsaWNJcEFkZHJlc3NQb29sTmFtZTogVGhlIG5hbWUgb2YgdGhlIElQIGFkZHJlc3MgcG9vbC5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC4gVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgXG4gICAgICogYW5kIGNhbiBjb250YWluIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBcbiAgICAgKiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaWNJcEFkZHJlc3NQb29sTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIElQIGFkZHJlc3MgcG9vbCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQdWJsaWNJcEFkZHJlc3NQb29sc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQdWJsaWNJcEFkZHJlc3NQb29sc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwdWJsaWNJcEFkZHJlc3NQb29sTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wdWJsaWNJcEFkZHJlc3NQb29sTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaXNwICYmICh0eXBlb2YgcHJvcGVydGllcy5pc3ApICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzcCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmlzcCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJCR1BcIixcIkJHUF9QUk9cIixcIkNoaW5hVGVsZWNvbVwiLFwiQ2hpbmFVbmljb21cIixcIkNoaW5hTW9iaWxlXCIsXCJDaGluYVRlbGVjb21fTDJcIixcIkNoaW5hVW5pY29tX0wyXCIsXCJDaGluYU1vYmlsZV9MMlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3ApKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUHVibGljSXBBZGRyZXNzUG9vbHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6UHVibGljSXBBZGRyZXNzUG9vbHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpWUEM6OlB1YmxpY0lwQWRkcmVzc1Bvb2xzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQdWJsaWNJcEFkZHJlc3NQb29sc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIElzcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3ApLFxuICAgICAgUHVibGljSXBBZGRyZXNzUG9vbE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHVibGljSXBBZGRyZXNzUG9vbE5hbWUpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6UHVibGljSXBBZGRyZXNzUG9vbHNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGF2YWlsYWJsZSBJUCBhZGRyZXNzIHBvb2xzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBQdWJsaWNJcEFkZHJlc3NQb29sc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1wdWJsaWNpcGFkZHJlc3Nwb29sc1xuICovXG5leHBvcnQgY2xhc3MgUm9zUHVibGljSXBBZGRyZXNzUG9vbHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OlB1YmxpY0lwQWRkcmVzc1Bvb2xzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFB1YmxpY0lwQWRkcmVzc1Bvb2xJZHM6IFRoZSBsaXN0IG9mIHB1YmxpYyBpcCBhZGRyZXNzIHBvb2wgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljSXBBZGRyZXNzUG9vbElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNJcEFkZHJlc3NQb29sczogVGhlIGxpc3Qgb2YgcHVibGljIGlwIGFkZHJlc3MgcG9vbHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNJcEFkZHJlc3NQb29sczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNwOiBUaGUgbGluZSB0eXBlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQkdQIChkZWZhdWx0KTogQkdQIChNdWx0aS1JU1ApIGxpbmVzXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lc1xuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IEJHUCAoTXVsdGktSVNQKSBhbmQgQkdQIChNdWx0aS1JU1ApIFBybywgc2VlIEVJUCBsaW5lIHR5cGVzLlxuICAgICAqIElmIHlvdSBhcmUgYWxsb3dlZCB0byB1c2Ugc2luZ2xlLUlTUCBiYW5kd2lkdGgsIHlvdSBjYW4gYWxzbyBjaG9vc2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgICAqIENoaW5hVGVsZWNvbTogQ2hpbmEgVGVsZWNvbVxuICAgICAqIENoaW5hVW5pY29tOiBDaGluYSBVbmljb21cbiAgICAgKiBDaGluYU1vYmlsZTogQ2hpbmEgTW9iaWxlXG4gICAgICogQ2hpbmFUZWxlY29tX0wyOiBDaGluYSBUZWxlY29tIEwyXG4gICAgICogQ2hpbmFVbmljb21fTDI6IENoaW5hIFVuaWNvbSBMMlxuICAgICAqIENoaW5hTW9iaWxlX0wyOiBDaGluYSBNb2JpbGUgTDJcbiAgICAgKiBJZiB5b3VyIHNlcnZpY2VzIGFyZSBkZXBsb3llZCBpbiBDaGluYSBFYXN0IDEgRmluYW5jZSwgXG4gICAgICogdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgYW5kIHlvdSBtdXN0IHNldCB0aGUgdmFsdWUgdG8gQkdQX0ZpbmFuY2VDbG91ZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHVibGljSXBBZGRyZXNzUG9vbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBJUCBhZGRyZXNzIHBvb2wuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuIFRoZSBuYW1lIG11c3QgYmUgMSB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIFxuICAgICAqIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gXG4gICAgICogVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcHVibGljIHB1YmxpY0lwQWRkcmVzc1Bvb2xOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBJUCBhZGRyZXNzIHBvb2wgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUHVibGljSXBBZGRyZXNzUG9vbHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNJcEFkZHJlc3NQb29sSWRzID0gdGhpcy5nZXRBdHQoJ1B1YmxpY0lwQWRkcmVzc1Bvb2xJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljSXBBZGRyZXNzUG9vbHMgPSB0aGlzLmdldEF0dCgnUHVibGljSXBBZGRyZXNzUG9vbHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaXNwID0gcHJvcHMuaXNwO1xuICAgICAgICB0aGlzLnB1YmxpY0lwQWRkcmVzc1Bvb2xOYW1lID0gcHJvcHMucHVibGljSXBBZGRyZXNzUG9vbE5hbWU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzcDogdGhpcy5pc3AsXG4gICAgICAgICAgICBwdWJsaWNJcEFkZHJlc3NQb29sTmFtZTogdGhpcy5wdWJsaWNJcEFkZHJlc3NQb29sTmFtZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUm91dGVFbnRyaWVzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcm91dGVlbnRyaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUm91dGVFbnRyaWVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXN0aW5hdGlvbkNpZHJCbG9jazogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIHJvdXRlLiBJUHY0IGFuZCBJUHY2IENJRFIgYmxvY2tzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25DaWRyQmxvY2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBWZXJzaW9uOiBUaGUgSVAgdmVyc2lvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIElQdjQ6IElQdjRcbiAgICAgKiBJUHY2OiBJUHY2XG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5leHRIb3BJZDogVGhlIElEIG9mIHRoZSBuZXh0IGhvcC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXh0SG9wSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV4dEhvcFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBuZXh0IGhvcC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEluc3RhbmNlIChkZWZhdWx0KTogYW4gRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUykgaW5zdGFuY2VcbiAgICAgKiBIYVZpcDogYSBoaWdoLWF2YWlsYWJpbGl0eSB2aXJ0dWFsIElQIGFkZHJlc3MgKEhBVklQKVxuICAgICAqIFZwbkdhdGV3YXk6IGEgVlBOIGdhdGV3YXlcbiAgICAgKiBOYXRHYXRld2F5OiBhIE5BVCBnYXRld2F5XG4gICAgICogTmV0d29ya0ludGVyZmFjZTogYSBzZWNvbmRhcnkgZWxhc3RpYyBuZXR3b3JrIGludGVyZmFjZSAoRU5JKVxuICAgICAqIFJvdXRlckludGVyZmFjZTogYSByb3V0ZXIgaW50ZXJmYWNlXG4gICAgICogSVB2NkdhdGV3YXk6IGFuIElQdjYgZ2F0ZXdheVxuICAgICAqIEF0dGFjaG1lbnQ6IGEgdHJhbnNpdCByb3V0ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXh0SG9wVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZUVudHJ5SWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVFbnRyeUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlRW50cnlOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcm91dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVFbnRyeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVFbnRyeVR5cGU6IFRoZSB0eXBlIG9mIHRoZSByb3V0ZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEN1c3RvbTogYSBjdXN0b20gcm91dGVcbiAgICAgKiBTeXN0ZW06IGEgc3lzdGVtIHJvdXRlXG4gICAgICogQkdQOiBhIEJvcmRlciBHYXRld2F5IFByb3RvY29sIChCR1ApIHJvdXRlXG4gICAgICogQ0VOOiBhIENsb3VkIEVudGVycHJpc2UgTmV0d29yayAoQ0VOKSByb3V0ZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlRW50cnlUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1JvdXRlRW50cmllc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb3V0ZUVudHJpZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb3V0ZUVudHJpZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25leHRIb3BUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5leHRIb3BUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZUVudHJ5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVFbnRyeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZVRhYmxlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucm91dGVUYWJsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZVRhYmxlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVUYWJsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZUVudHJ5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZUVudHJ5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVFbnRyeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVFbnRyeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25leHRIb3BJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXh0SG9wSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RpbmF0aW9uQ2lkckJsb2NrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uQ2lkckJsb2NrKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JvdXRlRW50cmllc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpSb3V0ZUVudHJpZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvdXRlRW50cmllc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpSb3V0ZUVudHJpZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUm91dGVFbnRyaWVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSb3V0ZUVudHJpZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSb3V0ZVRhYmxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVUYWJsZUlkKSxcbiAgICAgIERlc3RpbmF0aW9uQ2lkckJsb2NrOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uQ2lkckJsb2NrKSxcbiAgICAgIElwVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcFZlcnNpb24pLFxuICAgICAgTmV4dEhvcElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5leHRIb3BJZCksXG4gICAgICBOZXh0SG9wVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXh0SG9wVHlwZSksXG4gICAgICBSb3V0ZUVudHJ5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVFbnRyeUlkKSxcbiAgICAgIFJvdXRlRW50cnlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlRW50cnlOYW1lKSxcbiAgICAgIFJvdXRlRW50cnlUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlRW50cnlUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpSb3V0ZUVudHJpZXNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSb3V0ZUVudHJpZXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcm91dGVlbnRyaWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSb3V0ZUVudHJpZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OlJvdXRlRW50cmllc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZUVudHJpZXM6IFRoZSBsaXN0IG9mIFRoZSByb3V0ZSBlbnRyaWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVFbnRyaWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlRW50cnlJZHM6IHRoZSBsaXN0IG9mIHRoZSByb3V0ZSBlbnRyeSBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZUVudHJ5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZVRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlVGFibGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgcm91dGUuIElQdjQgYW5kIElQdjYgQ0lEUiBibG9ja3MgYXJlIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdGluYXRpb25DaWRyQmxvY2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcFZlcnNpb246IFRoZSBJUCB2ZXJzaW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSVB2NDogSVB2NFxuICAgICAqIElQdjY6IElQdjZcbiAgICAgKi9cbiAgICBwdWJsaWMgaXBWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV4dEhvcElkOiBUaGUgSUQgb2YgdGhlIG5leHQgaG9wLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0SG9wSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXh0SG9wVHlwZTogVGhlIHR5cGUgb2YgdGhlIG5leHQgaG9wLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSW5zdGFuY2UgKGRlZmF1bHQpOiBhbiBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZVxuICAgICAqIEhhVmlwOiBhIGhpZ2gtYXZhaWxhYmlsaXR5IHZpcnR1YWwgSVAgYWRkcmVzcyAoSEFWSVApXG4gICAgICogVnBuR2F0ZXdheTogYSBWUE4gZ2F0ZXdheVxuICAgICAqIE5hdEdhdGV3YXk6IGEgTkFUIGdhdGV3YXlcbiAgICAgKiBOZXR3b3JrSW50ZXJmYWNlOiBhIHNlY29uZGFyeSBlbGFzdGljIG5ldHdvcmsgaW50ZXJmYWNlIChFTkkpXG4gICAgICogUm91dGVySW50ZXJmYWNlOiBhIHJvdXRlciBpbnRlcmZhY2VcbiAgICAgKiBJUHY2R2F0ZXdheTogYW4gSVB2NiBnYXRld2F5XG4gICAgICogQXR0YWNobWVudDogYSB0cmFuc2l0IHJvdXRlclxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0SG9wVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlRW50cnlJZDogVGhlIElEIG9mIHRoZSByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVFbnRyeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVFbnRyeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVFbnRyeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZUVudHJ5VHlwZTogVGhlIHR5cGUgb2YgdGhlIHJvdXRlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQ3VzdG9tOiBhIGN1c3RvbSByb3V0ZVxuICAgICAqIFN5c3RlbTogYSBzeXN0ZW0gcm91dGVcbiAgICAgKiBCR1A6IGEgQm9yZGVyIEdhdGV3YXkgUHJvdG9jb2wgKEJHUCkgcm91dGVcbiAgICAgKiBDRU46IGEgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIHJvdXRlXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlRW50cnlUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUm91dGVFbnRyaWVzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSb3V0ZUVudHJpZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlRW50cmllcyA9IHRoaXMuZ2V0QXR0KCdSb3V0ZUVudHJpZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVFbnRyeUlkcyA9IHRoaXMuZ2V0QXR0KCdSb3V0ZUVudHJ5SWRzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJvdXRlVGFibGVJZCA9IHByb3BzLnJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkNpZHJCbG9jayA9IHByb3BzLmRlc3RpbmF0aW9uQ2lkckJsb2NrO1xuICAgICAgICB0aGlzLmlwVmVyc2lvbiA9IHByb3BzLmlwVmVyc2lvbjtcbiAgICAgICAgdGhpcy5uZXh0SG9wSWQgPSBwcm9wcy5uZXh0SG9wSWQ7XG4gICAgICAgIHRoaXMubmV4dEhvcFR5cGUgPSBwcm9wcy5uZXh0SG9wVHlwZTtcbiAgICAgICAgdGhpcy5yb3V0ZUVudHJ5SWQgPSBwcm9wcy5yb3V0ZUVudHJ5SWQ7XG4gICAgICAgIHRoaXMucm91dGVFbnRyeU5hbWUgPSBwcm9wcy5yb3V0ZUVudHJ5TmFtZTtcbiAgICAgICAgdGhpcy5yb3V0ZUVudHJ5VHlwZSA9IHByb3BzLnJvdXRlRW50cnlUeXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdXRlVGFibGVJZDogdGhpcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkNpZHJCbG9jazogdGhpcy5kZXN0aW5hdGlvbkNpZHJCbG9jayxcbiAgICAgICAgICAgIGlwVmVyc2lvbjogdGhpcy5pcFZlcnNpb24sXG4gICAgICAgICAgICBuZXh0SG9wSWQ6IHRoaXMubmV4dEhvcElkLFxuICAgICAgICAgICAgbmV4dEhvcFR5cGU6IHRoaXMubmV4dEhvcFR5cGUsXG4gICAgICAgICAgICByb3V0ZUVudHJ5SWQ6IHRoaXMucm91dGVFbnRyeUlkLFxuICAgICAgICAgICAgcm91dGVFbnRyeU5hbWU6IHRoaXMucm91dGVFbnRyeU5hbWUsXG4gICAgICAgICAgICByb3V0ZUVudHJ5VHlwZTogdGhpcy5yb3V0ZUVudHJ5VHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUm91dGVFbnRyaWVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUm91dGVUYWJsZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1yb3V0ZXRhYmxlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1JvdXRlVGFibGVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVySWQ6IFRoZSBJRCBvZiB0aGUgVlJvdXRlciB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgVlJvdXRlciB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFZSb3V0ZXIgKGRlZmF1bHQpOiBWUm91dGVyLlxuICAgICAqIFZCUjogVmlydHVhbCBCb3JkZXIgUm91dGVyIChWQlIpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlVGFibGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZVRhYmxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlVGFibGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZSb3V0ZXIgdG8gd2hpY2ggdGhlIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBSb3V0ZXJUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gVlJvdXRlciBhdXRvbWF0aWNhbGx5IHdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1JvdXRlVGFibGVzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvdXRlVGFibGVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm91dGVUYWJsZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlVGFibGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZVRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlclR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZVRhYmxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZVRhYmxlTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NSb3V0ZVRhYmxlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpSb3V0ZVRhYmxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUm91dGVUYWJsZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6Um91dGVUYWJsZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUm91dGVUYWJsZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1JvdXRlVGFibGVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBSb3V0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZXJJZCksXG4gICAgICBSb3V0ZXJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlclR5cGUpLFxuICAgICAgUm91dGVUYWJsZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlVGFibGVJZCksXG4gICAgICBSb3V0ZVRhYmxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZVRhYmxlTmFtZSksXG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6Um91dGVUYWJsZXNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSb3V0ZVRhYmxlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1yb3V0ZXRhYmxlc1xuICovXG5leHBvcnQgY2xhc3MgUm9zUm91dGVUYWJsZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OlJvdXRlVGFibGVzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlVGFibGVJZHM6IHRoZSBsaXN0IG9mIHRoZSByb3V0ZSB0YWJsZSBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZVRhYmxlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlVGFibGVzOiBUaGUgbGlzdCBvZiBUaGUgcm91dGUgdGFibGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVySWQ6IFRoZSBJRCBvZiB0aGUgVlJvdXRlciB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgVlJvdXRlciB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFZSb3V0ZXIgKGRlZmF1bHQpOiBWUm91dGVyLlxuICAgICAqIFZCUjogVmlydHVhbCBCb3JkZXIgUm91dGVyIChWQlIpLlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZVRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZVRhYmxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZVRhYmxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZSb3V0ZXIgdG8gd2hpY2ggdGhlIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBSb3V0ZXJUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gVlJvdXRlciBhdXRvbWF0aWNhbGx5IHdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JvdXRlVGFibGVzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSb3V0ZVRhYmxlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVUYWJsZUlkcyA9IHRoaXMuZ2V0QXR0KCdSb3V0ZVRhYmxlSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVzID0gdGhpcy5nZXRBdHQoJ1JvdXRlVGFibGVzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5yb3V0ZXJJZCA9IHByb3BzLnJvdXRlcklkO1xuICAgICAgICB0aGlzLnJvdXRlclR5cGUgPSBwcm9wcy5yb3V0ZXJUeXBlO1xuICAgICAgICB0aGlzLnJvdXRlVGFibGVJZCA9IHByb3BzLnJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy5yb3V0ZVRhYmxlTmFtZSA9IHByb3BzLnJvdXRlVGFibGVOYW1lO1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHJvdXRlcklkOiB0aGlzLnJvdXRlcklkLFxuICAgICAgICAgICAgcm91dGVyVHlwZTogdGhpcy5yb3V0ZXJUeXBlLFxuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiB0aGlzLnJvdXRlVGFibGVJZCxcbiAgICAgICAgICAgIHJvdXRlVGFibGVOYW1lOiB0aGlzLnJvdXRlVGFibGVOYW1lLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvdXRlVGFibGVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVHJhZmZpY01pcnJvckZpbHRlcnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy10cmFmZmljbWlycm9yZmlsdGVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RyYWZmaWNNaXJyb3JGaWx0ZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNNaXJyb3JGaWx0ZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgVHJhZmZpY01pcnJvckZpbHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFmZmljTWlycm9yRmlsdGVyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUcmFmZmljTWlycm9yRmlsdGVyc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUcmFmZmljTWlycm9yRmlsdGVyc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RyYWZmaWNNaXJyb3JGaWx0ZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFmZmljTWlycm9yRmlsdGVyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFmZmljTWlycm9yRmlsdGVyTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUcmFmZmljTWlycm9yRmlsdGVyc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpUcmFmZmljTWlycm9yRmlsdGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJhZmZpY01pcnJvckZpbHRlcnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6VHJhZmZpY01pcnJvckZpbHRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJhZmZpY01pcnJvckZpbHRlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RyYWZmaWNNaXJyb3JGaWx0ZXJzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgVHJhZmZpY01pcnJvckZpbHRlck5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhZmZpY01pcnJvckZpbHRlck5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6OlRyYWZmaWNNaXJyb3JGaWx0ZXJzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVHJhZmZpY01pcnJvckZpbHRlcnNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtdHJhZmZpY21pcnJvcmZpbHRlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1RyYWZmaWNNaXJyb3JGaWx0ZXJzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpUcmFmZmljTWlycm9yRmlsdGVyc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmFmZmljTWlycm9yRmlsdGVySWRzOiBUaGUgbGlzdCBvZiB0cmFmZmljIG1pcnJvciBmaWx0ZXIgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhZmZpY01pcnJvckZpbHRlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmFmZmljTWlycm9yRmlsdGVyczogVGhlIGxpc3Qgb2YgdHJhZmZpYyBtaXJyb3IgZmlsdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYWZmaWNNaXJyb3JGaWx0ZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFmZmljTWlycm9yRmlsdGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIFRyYWZmaWNNaXJyb3JGaWx0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHRyYWZmaWNNaXJyb3JGaWx0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJhZmZpY01pcnJvckZpbHRlcnNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyYWZmaWNNaXJyb3JGaWx0ZXJzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJUcmFmZmljTWlycm9yRmlsdGVySWRzID0gdGhpcy5nZXRBdHQoJ1RyYWZmaWNNaXJyb3JGaWx0ZXJJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyVHJhZmZpY01pcnJvckZpbHRlcnMgPSB0aGlzLmdldEF0dCgnVHJhZmZpY01pcnJvckZpbHRlcnMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudHJhZmZpY01pcnJvckZpbHRlck5hbWUgPSBwcm9wcy50cmFmZmljTWlycm9yRmlsdGVyTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFmZmljTWlycm9yRmlsdGVyTmFtZTogdGhpcy50cmFmZmljTWlycm9yRmlsdGVyTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVHJhZmZpY01pcnJvckZpbHRlcnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NWU3dpdGNoZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy12c3dpdGNoZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWU3dpdGNoZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGhjcE9wdGlvbnNTZXRJZDogVGhlIElEIG9mIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRoY3BPcHRpb25zU2V0SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNEZWZhdWx0OiBTcGVjaWZpZXMgd2hldGhlciB0byBxdWVyeSB0aGUgZGVmYXVsdCBWUEMgaW4gdGhlIHNwZWNpZmllZCByZWdpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlKGRlZmF1bHQpOiBxdWVyaWVzIGFsbCBWUENzIGluIHRoZSBzcGVjaWZpZWQgcmVnaW9uLlxuICAgICAqIGZhbHNlOiBkb2VzIG5vdCBxdWVyeSB0aGUgZGVmYXVsdCBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNEZWZhdWx0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIFZQQyB0byBiZSBxdWVyaWVkIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDIHRvIHdoaWNoIHRoZSB2U3dpdGNoIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkczogVGhlIGxpc3Qgb2YgVGhlIHZTd2l0Y2ggSURzLlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSB1cCB0byAyMCB2U3dpdGNoIElEcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoTmFtZTogVGhlIG5hbWUgb2YgdGhlIHZTd2l0Y2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaE93bmVySWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSB2U3dpdGNoIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaE93bmVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVlN3aXRjaGVzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZTd2l0Y2hlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZTd2l0Y2hlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNEZWZhdWx0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc0RlZmF1bHQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RoY3BPcHRpb25zU2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGhjcE9wdGlvbnNTZXRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVUYWJsZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlVGFibGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52U3dpdGNoSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudlN3aXRjaElkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudlN3aXRjaElkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hPd25lcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZTd2l0Y2hPd25lcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NWU3dpdGNoZXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6VlN3aXRjaGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NWU3dpdGNoZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6VlN3aXRjaGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZTd2l0Y2hlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVlN3aXRjaGVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGhjcE9wdGlvbnNTZXRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaGNwT3B0aW9uc1NldElkKSxcbiAgICAgIElzRGVmYXVsdDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNEZWZhdWx0KSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgUm91dGVUYWJsZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlVGFibGVJZCksXG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICBWU3dpdGNoSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52U3dpdGNoSWRzKSxcbiAgICAgIFZTd2l0Y2hOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTd2l0Y2hOYW1lKSxcbiAgICAgIFZTd2l0Y2hPd25lcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTd2l0Y2hPd25lcklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpWU3dpdGNoZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGNyZWF0ZWQgdlN3aXRjaGVzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBWU3dpdGNoZXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtdnN3aXRjaGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWU3dpdGNoZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpWUEM6OlZTd2l0Y2hlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU3dpdGNoSWRzOiBUaGUgbGlzdCBvZiBUaGUgdlN3aXRjaCBJZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZTd2l0Y2hlczogVGhlIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IHRoZSB2U3dpdGNoZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRoY3BPcHRpb25zU2V0SWQ6IFRoZSBJRCBvZiB0aGUgREhDUCBvcHRpb25zIHNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGhjcE9wdGlvbnNTZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzRGVmYXVsdDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcXVlcnkgdGhlIGRlZmF1bHQgVlBDIGluIHRoZSBzcGVjaWZpZWQgcmVnaW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZShkZWZhdWx0KTogcXVlcmllcyBhbGwgVlBDcyBpbiB0aGUgc3BlY2lmaWVkIHJlZ2lvbi5cbiAgICAgKiBmYWxzZTogZG9lcyBub3QgcXVlcnkgdGhlIGRlZmF1bHQgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0RlZmF1bHQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgdG8gYmUgcXVlcmllZCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZVRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlVGFibGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgdlN3aXRjaCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZHM6IFRoZSBsaXN0IG9mIFRoZSB2U3dpdGNoIElEcy5cbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdXAgdG8gMjAgdlN3aXRjaCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaE5hbWU6IFRoZSBuYW1lIG9mIHRoZSB2U3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyB2U3dpdGNoTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hPd25lcklkOiBUaGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCB0byB3aGljaCB0aGUgdlN3aXRjaCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB2U3dpdGNoT3duZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZTd2l0Y2hlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVlN3aXRjaGVzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJWU3dpdGNoSWRzID0gdGhpcy5nZXRBdHQoJ1ZTd2l0Y2hJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaGVzID0gdGhpcy5nZXRBdHQoJ1ZTd2l0Y2hlcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaGNwT3B0aW9uc1NldElkID0gcHJvcHMuZGhjcE9wdGlvbnNTZXRJZDtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBwcm9wcy5pc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLnJvdXRlVGFibGVJZCA9IHByb3BzLnJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgICAgICB0aGlzLnZTd2l0Y2hJZHMgPSBwcm9wcy52U3dpdGNoSWRzO1xuICAgICAgICB0aGlzLnZTd2l0Y2hOYW1lID0gcHJvcHMudlN3aXRjaE5hbWU7XG4gICAgICAgIHRoaXMudlN3aXRjaE93bmVySWQgPSBwcm9wcy52U3dpdGNoT3duZXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaGNwT3B0aW9uc1NldElkOiB0aGlzLmRoY3BPcHRpb25zU2V0SWQsXG4gICAgICAgICAgICBpc0RlZmF1bHQ6IHRoaXMuaXNEZWZhdWx0LFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHJvdXRlVGFibGVJZDogdGhpcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZHM6IHRoaXMudlN3aXRjaElkcyxcbiAgICAgICAgICAgIHZTd2l0Y2hOYW1lOiB0aGlzLnZTd2l0Y2hOYW1lLFxuICAgICAgICAgICAgdlN3aXRjaE93bmVySWQ6IHRoaXMudlN3aXRjaE93bmVySWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1ZTd2l0Y2hlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1ZwY3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy12cGNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVnBjc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaGNwT3B0aW9uc1NldElkOiBUaGUgSUQgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGhjcE9wdGlvbnNTZXRJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc0RlZmF1bHQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHF1ZXJ5IHRoZSBkZWZhdWx0IFZQQyBpbiB0aGUgc3BlY2lmaWVkIHJlZ2lvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWUoZGVmYXVsdCk6IHF1ZXJpZXMgYWxsIFZQQ3MgaW4gdGhlIHNwZWNpZmllZCByZWdpb24uXG4gICAgICogZmFsc2U6IGRvZXMgbm90IHF1ZXJ5IHRoZSBkZWZhdWx0IFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc0RlZmF1bHQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgVlBDIHRvIGJlIHF1ZXJpZWQgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWRzOiBUaGUgbGlzdCBvZiBUaGUgVlBDIElEcy5cbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdXAgdG8gMjAgVlBDIElEcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY05hbWU6IFRoZSBuYW1lIG9mIHRoZSBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNPd25lcklkOiBUaGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCB0byB3aGljaCB0aGUgVlBDIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjT3duZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWcGNzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwY3NQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcGNzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc0RlZmF1bHQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzRGVmYXVsdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGhjcE9wdGlvbnNTZXRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaGNwT3B0aW9uc1NldElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgaWYocHJvcGVydGllcy52cGNJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52cGNJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy52cGNJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudnBjSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy52cGNJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjT3duZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNPd25lcklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZwY3NQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlZQQzo6VnBjc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBjc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6VlBDOjpWcGNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwY3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwY3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEaGNwT3B0aW9uc1NldElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRoY3BPcHRpb25zU2V0SWQpLFxuICAgICAgSXNEZWZhdWx0OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc0RlZmF1bHQpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBWcGNJZHM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZwY0lkcyksXG4gICAgICBWcGNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY05hbWUpLFxuICAgICAgVnBjT3duZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNPd25lcklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpWcGNzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVnBjc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy12cGNzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWcGNzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6VlBDOjpWcGNzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0lkczogVGhlIGxpc3Qgb2YgVGhlIFZQQyBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjczogVGhlIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IHRoZSBWUENzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGhjcE9wdGlvbnNTZXRJZDogVGhlIElEIG9mIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaGNwT3B0aW9uc1NldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNEZWZhdWx0OiBTcGVjaWZpZXMgd2hldGhlciB0byBxdWVyeSB0aGUgZGVmYXVsdCBWUEMgaW4gdGhlIHNwZWNpZmllZCByZWdpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlKGRlZmF1bHQpOiBxdWVyaWVzIGFsbCBWUENzIGluIHRoZSBzcGVjaWZpZWQgcmVnaW9uLlxuICAgICAqIGZhbHNlOiBkb2VzIG5vdCBxdWVyeSB0aGUgZGVmYXVsdCBWUEMuXG4gICAgICovXG4gICAgcHVibGljIGlzRGVmYXVsdDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIFZQQyB0byBiZSBxdWVyaWVkIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkczogVGhlIGxpc3Qgb2YgVGhlIFZQQyBJRHMuXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IHVwIHRvIDIwIFZQQyBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjT3duZXJJZDogVGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgdG8gd2hpY2ggdGhlIFZQQyBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNPd25lcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVnBjc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVnBjcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWRzID0gdGhpcy5nZXRBdHQoJ1ZwY0lkcycpO1xuICAgICAgICB0aGlzLmF0dHJWcGNzID0gdGhpcy5nZXRBdHQoJ1ZwY3MnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGhjcE9wdGlvbnNTZXRJZCA9IHByb3BzLmRoY3BPcHRpb25zU2V0SWQ7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0ID0gcHJvcHMuaXNEZWZhdWx0O1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy52cGNJZHMgPSBwcm9wcy52cGNJZHM7XG4gICAgICAgIHRoaXMudnBjTmFtZSA9IHByb3BzLnZwY05hbWU7XG4gICAgICAgIHRoaXMudnBjT3duZXJJZCA9IHByb3BzLnZwY093bmVySWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGhjcE9wdGlvbnNTZXRJZDogdGhpcy5kaGNwT3B0aW9uc1NldElkLFxuICAgICAgICAgICAgaXNEZWZhdWx0OiB0aGlzLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB2cGNJZHM6IHRoaXMudnBjSWRzLFxuICAgICAgICAgICAgdnBjTmFtZTogdGhpcy52cGNOYW1lLFxuICAgICAgICAgICAgdnBjT3duZXJJZDogdGhpcy52cGNPd25lcklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWcGNzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=
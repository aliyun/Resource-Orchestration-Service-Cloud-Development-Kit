// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::GWS::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property name: Cluster name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property policy: Cluster policy
     */
    readonly policy?: RosCluster.PolicyProperty | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', RosCluster_PolicyPropertyValidator)(properties.policy));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Name: ros.stringToRosTemplate(properties.name),
      Policy: rosClusterPolicyPropertyToRosTemplate(properties.policy),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GWS::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWS::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute Name: Cluster name
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property name: Cluster name
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property policy: Cluster policy
     */
    public policy: RosCluster.PolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: VSwitch id
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GWS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.vpcId = props.vpcId;
        this.name = props.name;
        this.policy = props.policy;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            vpcId: this.vpcId,
            name: this.name,
            policy: this.policy,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface PolicyProperty {
        /**
         * @Property localDrive: Local drive
         */
        readonly localDrive: string | ros.IResolvable;
        /**
         * @Property usbRedirect: USB redirect
         */
        readonly usbRedirect: string | ros.IResolvable;
        /**
         * @Property clipboard: Clipboard
         */
        readonly clipboard: string | ros.IResolvable;
        /**
         * @Property watermark: Watermark
         */
        readonly watermark: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_PolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localDrive', ros.requiredValidator)(properties.localDrive));
    if(properties.localDrive && (typeof properties.localDrive) !== 'object') {
        errors.collect(ros.propertyValidator('localDrive', ros.validateAllowedValues)({
          data: properties.localDrive,
          allowedValues: ["off","read","readwrite"],
        }));
    }
    errors.collect(ros.propertyValidator('localDrive', ros.validateString)(properties.localDrive));
    errors.collect(ros.propertyValidator('usbRedirect', ros.requiredValidator)(properties.usbRedirect));
    if(properties.usbRedirect && (typeof properties.usbRedirect) !== 'object') {
        errors.collect(ros.propertyValidator('usbRedirect', ros.validateAllowedValues)({
          data: properties.usbRedirect,
          allowedValues: ["off","on"],
        }));
    }
    errors.collect(ros.propertyValidator('usbRedirect', ros.validateString)(properties.usbRedirect));
    errors.collect(ros.propertyValidator('clipboard', ros.requiredValidator)(properties.clipboard));
    if(properties.clipboard && (typeof properties.clipboard) !== 'object') {
        errors.collect(ros.propertyValidator('clipboard', ros.validateAllowedValues)({
          data: properties.clipboard,
          allowedValues: ["off","read","readwrite"],
        }));
    }
    errors.collect(ros.propertyValidator('clipboard', ros.validateString)(properties.clipboard));
    errors.collect(ros.propertyValidator('watermark', ros.requiredValidator)(properties.watermark));
    if(properties.watermark && (typeof properties.watermark) !== 'object') {
        errors.collect(ros.propertyValidator('watermark', ros.validateAllowedValues)({
          data: properties.watermark,
          allowedValues: ["off","on"],
        }));
    }
    errors.collect(ros.propertyValidator('watermark', ros.validateString)(properties.watermark));
    return errors.wrap('supplied properties not correct for "PolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWS::Cluster.Policy` resource
 *
 * @param properties - the TypeScript properties of a `PolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWS::Cluster.Policy` resource.
 */
// @ts-ignore TS6133
function rosClusterPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_PolicyPropertyValidator(properties).assertSuccess();
    return {
      LocalDrive: ros.stringToRosTemplate(properties.localDrive),
      UsbRedirect: ros.stringToRosTemplate(properties.usbRedirect),
      Clipboard: ros.stringToRosTemplate(properties.clipboard),
      Watermark: ros.stringToRosTemplate(properties.watermark),
    };
}

/**
 * Properties for defining a `ALIYUN::GWS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property clusterId: Cluster id
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property imageId: Mirror id
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    readonly systemDiskCategory: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: System disk size
     */
    readonly systemDiskSize: number | ros.IResolvable;

    /**
     * @Property workMode: Work mode:
     * Desktop
     * Application
     */
    readonly workMode: string | ros.IResolvable;

    /**
     * @Property allocatePublicAddress: Whether to allocate a public network address
     */
    readonly allocatePublicAddress?: boolean | ros.IResolvable;

    /**
     * @Property appList: App list. This value is only valid when WorkMode is Application.
     */
    readonly appList?: Array<RosInstance.AppListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: Whether auto renew
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance charge type:
     * PostPaid (default): Pay-As-You-Go
     * PrePaid: Subscription
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Network charge type:
     * PayByTraffic (default): Flow-per-use billing
     * PayByBandwidth: fixed-bandwidth billing
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property name: Instance name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property period: Period of subscription.
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of period. Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PostPaid","PrePaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('allocatePublicAddress', ros.validateBoolean)(properties.allocatePublicAddress));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.requiredValidator)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByTraffic","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.appList && (Array.isArray(properties.appList) || (typeof properties.appList) === 'string')) {
        errors.collect(ros.propertyValidator('appList', ros.validateLength)({
            data: properties.appList.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('appList', ros.listValidator(RosInstance_AppListPropertyValidator))(properties.appList));
    errors.collect(ros.propertyValidator('workMode', ros.requiredValidator)(properties.workMode));
    if(properties.workMode && (typeof properties.workMode) !== 'object') {
        errors.collect(ros.propertyValidator('workMode', ros.validateAllowedValues)({
          data: properties.workMode,
          allowedValues: ["Desktop","Application"],
        }));
    }
    errors.collect(ros.propertyValidator('workMode', ros.validateString)(properties.workMode));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      WorkMode: ros.stringToRosTemplate(properties.workMode),
      AllocatePublicAddress: ros.booleanToRosTemplate(properties.allocatePublicAddress),
      AppList: ros.listMapper(rosInstanceAppListPropertyToRosTemplate)(properties.appList),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      Name: ros.stringToRosTemplate(properties.name),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GWS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute InstanceChargeType: Instance charge type
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
     */
    public readonly attrMaxBandwidthIn: ros.IResolvable;

    /**
     * @Attribute MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
     */
    public readonly attrMaxBandwidthOut: ros.IResolvable;

    /**
     * @Attribute Name: Instance name
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster id
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property imageId: Mirror id
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    public systemDiskCategory: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: System disk size
     */
    public systemDiskSize: number | ros.IResolvable;

    /**
     * @Property workMode: Work mode:
     * Desktop
     * Application
     */
    public workMode: string | ros.IResolvable;

    /**
     * @Property allocatePublicAddress: Whether to allocate a public network address
     */
    public allocatePublicAddress: boolean | ros.IResolvable | undefined;

    /**
     * @Property appList: App list. This value is only valid when WorkMode is Application.
     */
    public appList: Array<RosInstance.AppListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether auto renew
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance charge type:
     * PostPaid (default): Pay-As-You-Go
     * PrePaid: Subscription
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Network charge type:
     * PayByTraffic (default): Flow-per-use billing
     * PayByBandwidth: fixed-bandwidth billing
     * This value is only valid when AllocatePublicAddress is true.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property name: Instance name
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property period: Period of subscription.
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of period. Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: VSwitch id
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GWS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrInstanceChargeType = this.getAtt('InstanceChargeType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrMaxBandwidthIn = this.getAtt('MaxBandwidthIn');
        this.attrMaxBandwidthOut = this.getAtt('MaxBandwidthOut');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskSize = props.systemDiskSize;
        this.workMode = props.workMode;
        this.allocatePublicAddress = props.allocatePublicAddress;
        this.appList = props.appList;
        this.autoRenew = props.autoRenew;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.name = props.name;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            imageId: this.imageId,
            instanceType: this.instanceType,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskSize: this.systemDiskSize,
            workMode: this.workMode,
            allocatePublicAddress: this.allocatePublicAddress,
            appList: this.appList,
            autoRenew: this.autoRenew,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            name: this.name,
            period: this.period,
            periodUnit: this.periodUnit,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface AppListProperty {
        /**
         * @Property appArgs: The running parameters of the application.
         */
        readonly appArgs?: string | ros.IResolvable;
        /**
         * @Property appPath: The running path of the application.
         */
        readonly appPath?: string | ros.IResolvable;
        /**
         * @Property appName: The name of the application.
         */
        readonly appName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AppListProperty`
 *
 * @param properties - the TypeScript properties of a `AppListProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_AppListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appArgs', ros.validateString)(properties.appArgs));
    errors.collect(ros.propertyValidator('appPath', ros.validateString)(properties.appPath));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "AppListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWS::Instance.AppList` resource
 *
 * @param properties - the TypeScript properties of a `AppListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWS::Instance.AppList` resource.
 */
// @ts-ignore TS6133
function rosInstanceAppListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_AppListPropertyValidator(properties).assertSuccess();
    return {
      AppArgs: ros.stringToRosTemplate(properties.appArgs),
      AppPath: ros.stringToRosTemplate(properties.appPath),
      AppName: ros.stringToRosTemplate(properties.appName),
    };
}

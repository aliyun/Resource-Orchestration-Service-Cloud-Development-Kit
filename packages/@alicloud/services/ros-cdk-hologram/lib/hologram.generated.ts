// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
 */
export interface RosInstanceProps {

    /**
     * @Property endpoints: List of domain names.
     */
    readonly endpoints: Array<RosInstance.EndpointsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: The name of the resource.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type. Value:
     * - Standard: Universal.
     * - Follower: Read-only slave instance.
     * - Warehouse: calculation group type.
     * - Shared: Shared.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone Id.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to pay automatically. The default value is true. Value:
     * - true: automatic payment
     * - false: only generate orders, not pay
     * > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property coldStorageSize: Instance low-frequency storage space. Unit: GB.
     * > Pay-As-You-Go (PostPaid) instances ignore this parameter.
     */
    readonly coldStorageSize?: number | ros.IResolvable;

    /**
     * @Property cpu: Instance specifications. Value:
     * - 8 cores 32 GB (number of compute nodes: 1)
     * - 16 cores 64 GB (number of compute nodes: 1)
     * - 32 core 128 GB (number of compute nodes: 2)
     * - 64 core 256 GB (number of compute nodes: 4)
     * - 96 core 384 GB (number of computing nodes: 6)
     * - 128 core 512 GB (number of compute nodes: 8)
     * - Wait
     * >>
     * >- just fill in the audit number.
     * >- Please submit a work order application for purchasing 1024 or above specifications.
     * >- Shared instance types do not need to specify specifications.
     * > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * @Property duration: The buying cycle. Buy for 2 months.
     * > If the Payment type is PostPaid, you do not need to specify it.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property gatewayCount: Number of gateway nodes.
     */
    readonly gatewayCount?: number | ros.IResolvable;

    /**
     * @Property initialDatabases: Initialize the database and split multiple database names ",".
     */
    readonly initialDatabases?: string | ros.IResolvable;

    /**
     * @Property leaderInstanceId: The id of leader instance.
     */
    readonly leaderInstanceId?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: Billing cycle. Value:
     * - Month: monthly billing
     * - Hour: hourly billing
     * >>
     * > - PrePaid only supports Month
     * > - PostPaid only supports Hour
     * >- The Shared type is automatically set to Hour without specifying it.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property productCode: product code.
     */
    readonly productCode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scaleType: Change matching type. Value:
     * - UPGRADE: UPGRADE
     * - DOWNGRADE: Downgrading
     * >>
     * >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
     * >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
     */
    readonly scaleType?: string | ros.IResolvable;

    /**
     * @Property storageSize: The standard storage space of the instance. Unit: GB.
     * > Pay-As-You-Go instances (PostPaid) ignore this parameter.
     */
    readonly storageSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstance.TagsProperty[];
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
    errors.collect(ros.propertyValidator('coldStorageSize', ros.validateNumber)(properties.coldStorageSize));
    errors.collect(ros.propertyValidator('leaderInstanceId', ros.validateString)(properties.leaderInstanceId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('productCode', ros.validateString)(properties.productCode));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Hour"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    if(properties.scaleType && (typeof properties.scaleType) !== 'object') {
        errors.collect(ros.propertyValidator('scaleType', ros.validateAllowedValues)({
          data: properties.scaleType,
          allowedValues: ["DOWNGRADE","UPGRADE"],
        }));
    }
    errors.collect(ros.propertyValidator('scaleType', ros.validateString)(properties.scaleType));
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('storageSize', ros.validateNumber)(properties.storageSize));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,60],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('endpoints', ros.requiredValidator)(properties.endpoints));
    errors.collect(ros.propertyValidator('endpoints', ros.listValidator(RosInstance_EndpointsPropertyValidator))(properties.endpoints));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('gatewayCount', ros.validateNumber)(properties.gatewayCount));
    errors.collect(ros.propertyValidator('initialDatabases', ros.validateString)(properties.initialDatabases));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","Subscription","PrePaid","PrePay","Prepaid","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["Standard","Follower","Warehouse","Shared"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      Endpoints: ros.listMapper(rosInstanceEndpointsPropertyToRosTemplate)(properties.endpoints),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      ColdStorageSize: ros.numberToRosTemplate(properties.coldStorageSize),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      Duration: ros.numberToRosTemplate(properties.duration),
      GatewayCount: ros.numberToRosTemplate(properties.gatewayCount),
      InitialDatabases: ros.stringToRosTemplate(properties.initialDatabases),
      LeaderInstanceId: ros.stringToRosTemplate(properties.leaderInstanceId),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      ProductCode: ros.stringToRosTemplate(properties.productCode),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ScaleType: ros.stringToRosTemplate(properties.scaleType),
      StorageSize: ros.numberToRosTemplate(properties.storageSize),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Hologram::Instance`ALIYUN::IMM::Project is used to create an Intelligent Media Management (IMM) project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Hologram::Instance";

    /**
     * @Attribute AutoRenewal: Whether automatic renewal is enabled.
     */
    public readonly attrAutoRenewal: ros.IResolvable;

    /**
     * @Attribute ColdStorageSize: Instance low-frequency storage space. Unit: GB.
     */
    public readonly attrColdStorageSize: ros.IResolvable;

    /**
     * @Attribute CommodityCode: The commodity code.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * @Attribute ComputeNodeCount: Number of compute nodes.
     */
    public readonly attrComputeNodeCount: ros.IResolvable;

    /**
     * @Attribute Cpu: Instance specifications.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
     */
    public readonly attrEnableHiveAccess: ros.IResolvable;

    /**
     * @Attribute Endpoints: List of domain names.
     */
    public readonly attrEndpoints: ros.IResolvable;

    /**
     * @Attribute ExpirationTime: Expiration time.
     */
    public readonly attrExpirationTime: ros.IResolvable;

    /**
     * @Attribute GatewayCount: Number of gateway nodes.
     */
    public readonly attrGatewayCount: ros.IResolvable;

    /**
     * @Attribute GatewayCpu: Cpu resources of the Gateway.
     */
    public readonly attrGatewayCpu: ros.IResolvable;

    /**
     * @Attribute GatewayMemory: Gateway memory resources.
     */
    public readonly attrGatewayMemory: ros.IResolvable;

    /**
     * @Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the resource.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceOwner: The instance owner.
     */
    public readonly attrInstanceOwner: ros.IResolvable;

    /**
     * @Attribute InstanceType: The instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute Memory: Memory.
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute StorageSize: The standard storage space of the instance. Unit: GB.
     */
    public readonly attrStorageSize: ros.IResolvable;

    /**
     * @Attribute SuspendReason: Reason for suspension.
     */
    public readonly attrSuspendReason: ros.IResolvable;

    /**
     * @Attribute Tags: Instance tag.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Version: The instance version.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone Id.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpoints: List of domain names.
     */
    public endpoints: Array<RosInstance.EndpointsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: The name of the resource.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type. Value:
     * - Standard: Universal.
     * - Follower: Read-only slave instance.
     * - Warehouse: calculation group type.
     * - Shared: Shared.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the resource.
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone Id.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to pay automatically. The default value is true. Value:
     * - true: automatic payment
     * - false: only generate orders, not pay
     * > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property coldStorageSize: Instance low-frequency storage space. Unit: GB.
     * > Pay-As-You-Go (PostPaid) instances ignore this parameter.
     */
    public coldStorageSize: number | ros.IResolvable | undefined;

    /**
     * @Property cpu: Instance specifications. Value:
     * - 8 cores 32 GB (number of compute nodes: 1)
     * - 16 cores 64 GB (number of compute nodes: 1)
     * - 32 core 128 GB (number of compute nodes: 2)
     * - 64 core 256 GB (number of compute nodes: 4)
     * - 96 core 384 GB (number of computing nodes: 6)
     * - 128 core 512 GB (number of compute nodes: 8)
     * - Wait
     * >>
     * >- just fill in the audit number.
     * >- Please submit a work order application for purchasing 1024 or above specifications.
     * >- Shared instance types do not need to specify specifications.
     * > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
     */
    public cpu: number | ros.IResolvable | undefined;

    /**
     * @Property duration: The buying cycle. Buy for 2 months.
     * > If the Payment type is PostPaid, you do not need to specify it.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property gatewayCount: Number of gateway nodes.
     */
    public gatewayCount: number | ros.IResolvable | undefined;

    /**
     * @Property initialDatabases: Initialize the database and split multiple database names ",".
     */
    public initialDatabases: string | ros.IResolvable | undefined;

    /**
     * @Property leaderInstanceId: The id of leader instance.
     */
    public leaderInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Billing cycle. Value:
     * - Month: monthly billing
     * - Hour: hourly billing
     * >>
     * > - PrePaid only supports Month
     * > - PostPaid only supports Hour
     * >- The Shared type is automatically set to Hour without specifying it.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property productCode: product code.
     */
    public productCode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scaleType: Change matching type. Value:
     * - UPGRADE: UPGRADE
     * - DOWNGRADE: Downgrading
     * >>
     * >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
     * >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
     */
    public scaleType: string | ros.IResolvable | undefined;

    /**
     * @Property storageSize: The standard storage space of the instance. Unit: GB.
     * > Pay-As-You-Go instances (PostPaid) ignore this parameter.
     */
    public storageSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of instance.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoRenewal = this.getAtt('AutoRenewal');
        this.attrColdStorageSize = this.getAtt('ColdStorageSize');
        this.attrCommodityCode = this.getAtt('CommodityCode');
        this.attrComputeNodeCount = this.getAtt('ComputeNodeCount');
        this.attrCpu = this.getAtt('Cpu');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEnableHiveAccess = this.getAtt('EnableHiveAccess');
        this.attrEndpoints = this.getAtt('Endpoints');
        this.attrExpirationTime = this.getAtt('ExpirationTime');
        this.attrGatewayCount = this.getAtt('GatewayCount');
        this.attrGatewayCpu = this.getAtt('GatewayCpu');
        this.attrGatewayMemory = this.getAtt('GatewayMemory');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceOwner = this.getAtt('InstanceOwner');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrMemory = this.getAtt('Memory');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStorageSize = this.getAtt('StorageSize');
        this.attrSuspendReason = this.getAtt('SuspendReason');
        this.attrTags = this.getAtt('Tags');
        this.attrVersion = this.getAtt('Version');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpoints = props.endpoints;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.paymentType = props.paymentType;
        this.zoneId = props.zoneId;
        this.autoPay = props.autoPay;
        this.coldStorageSize = props.coldStorageSize;
        this.cpu = props.cpu;
        this.duration = props.duration;
        this.gatewayCount = props.gatewayCount;
        this.initialDatabases = props.initialDatabases;
        this.leaderInstanceId = props.leaderInstanceId;
        this.pricingCycle = props.pricingCycle;
        this.productCode = props.productCode;
        this.resourceGroupId = props.resourceGroupId;
        this.scaleType = props.scaleType;
        this.storageSize = props.storageSize;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpoints: this.endpoints,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            paymentType: this.paymentType,
            zoneId: this.zoneId,
            autoPay: this.autoPay,
            coldStorageSize: this.coldStorageSize,
            cpu: this.cpu,
            duration: this.duration,
            gatewayCount: this.gatewayCount,
            initialDatabases: this.initialDatabases,
            leaderInstanceId: this.leaderInstanceId,
            pricingCycle: this.pricingCycle,
            productCode: this.productCode,
            resourceGroupId: this.resourceGroupId,
            scaleType: this.scaleType,
            storageSize: this.storageSize,
            tags: this.tags,
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
    export interface EndpointsProperty {
        /**
         * @Property type: The network type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property endpoint: Domain name.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property vpcId: VPC primary key.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the virtual switch.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to turn on the network.
         */
        readonly enabled?: boolean | ros.IResolvable;
        /**
         * @Property vpcInstanceId: The vpc instance ID.
         */
        readonly vpcInstanceId?: string | ros.IResolvable;
        /**
         * @Property alternativeEndpoints: Some old instances have both AnyTunnel and SingleTunnel enabled. When switching from AnyTunnel to SingleTunnel, the endpoints of both are retained. Therefore, one more field is required to store the Endpoint.
         */
        readonly alternativeEndpoints?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_EndpointsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('vpcInstanceId', ros.validateString)(properties.vpcInstanceId));
    errors.collect(ros.propertyValidator('alternativeEndpoints', ros.validateString)(properties.alternativeEndpoints));
    return errors.wrap('supplied properties not correct for "EndpointsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance.Endpoints` resource
 *
 * @param properties - the TypeScript properties of a `EndpointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance.Endpoints` resource.
 */
// @ts-ignore TS6133
function rosInstanceEndpointsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_EndpointsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Enabled: ros.booleanToRosTemplate(properties.enabled),
      VpcInstanceId: ros.stringToRosTemplate(properties.vpcInstanceId),
      AlternativeEndpoints: ros.stringToRosTemplate(properties.alternativeEndpoints),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Hologram::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

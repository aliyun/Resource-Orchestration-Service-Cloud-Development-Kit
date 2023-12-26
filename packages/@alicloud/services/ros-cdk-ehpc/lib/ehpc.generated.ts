// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAutoScaleConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
export interface RosAutoScaleConfigProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    readonly enableAutoGrow?: boolean | ros.IResolvable;

    /**
     * @Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    readonly enableAutoShrink?: boolean | ros.IResolvable;

    /**
     * @Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    readonly excludeNodes?: string | ros.IResolvable;

    /**
     * @Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * Default value: 0
     */
    readonly extraNodesGrowRatio?: number | ros.IResolvable;

    /**
     * @Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
     * Default value: 2
     */
    readonly growIntervalInMinutes?: number | ros.IResolvable;

    /**
     * @Property growRatio: The percentage of each round of scale-out.
     * Default value: 100
     */
    readonly growRatio?: number | ros.IResolvable;

    /**
     * @Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
     * Default value: 20
     */
    readonly growTimeoutInMinutes?: number | ros.IResolvable;

    /**
     * @Property imageId: The ID of the image.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * Default value: 100
     */
    readonly maxNodesInCluster?: number | ros.IResolvable;

    /**
     * @Property queues:
     */
    readonly queues?: Array<RosAutoScaleConfig.QueuesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * Default value: 3
     */
    readonly shrinkIdleTimes?: number | ros.IResolvable;

    /**
     * @Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
     * Default value: 2
     */
    readonly shrinkIntervalInMinutes?: number | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;

    /**
     * @Property spotStrategy: The preemption policy of the compute nodes. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    readonly spotStrategy?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAutoScaleConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoScaleConfigProps`
 *
 * @returns the result of the validation.
 */
function RosAutoScaleConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.extraNodesGrowRatio && (typeof properties.extraNodesGrowRatio) !== 'object') {
        errors.collect(ros.propertyValidator('extraNodesGrowRatio', ros.validateRange)({
            data: properties.extraNodesGrowRatio,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('extraNodesGrowRatio', ros.validateNumber)(properties.extraNodesGrowRatio));
    errors.collect(ros.propertyValidator('enableAutoGrow', ros.validateBoolean)(properties.enableAutoGrow));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.shrinkIdleTimes && (typeof properties.shrinkIdleTimes) !== 'object') {
        errors.collect(ros.propertyValidator('shrinkIdleTimes', ros.validateRange)({
            data: properties.shrinkIdleTimes,
            min: 2,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('shrinkIdleTimes', ros.validateNumber)(properties.shrinkIdleTimes));
    if(properties.maxNodesInCluster && (typeof properties.maxNodesInCluster) !== 'object') {
        errors.collect(ros.propertyValidator('maxNodesInCluster', ros.validateRange)({
            data: properties.maxNodesInCluster,
            min: 1,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('maxNodesInCluster', ros.validateNumber)(properties.maxNodesInCluster));
    errors.collect(ros.propertyValidator('enableAutoShrink', ros.validateBoolean)(properties.enableAutoShrink));
    if(properties.growRatio && (typeof properties.growRatio) !== 'object') {
        errors.collect(ros.propertyValidator('growRatio', ros.validateRange)({
            data: properties.growRatio,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('growRatio', ros.validateNumber)(properties.growRatio));
    if(properties.growIntervalInMinutes && (typeof properties.growIntervalInMinutes) !== 'object') {
        errors.collect(ros.propertyValidator('growIntervalInMinutes', ros.validateRange)({
            data: properties.growIntervalInMinutes,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('growIntervalInMinutes', ros.validateNumber)(properties.growIntervalInMinutes));
    if(properties.growTimeoutInMinutes && (typeof properties.growTimeoutInMinutes) !== 'object') {
        errors.collect(ros.propertyValidator('growTimeoutInMinutes', ros.validateRange)({
            data: properties.growTimeoutInMinutes,
            min: 10,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('growTimeoutInMinutes', ros.validateNumber)(properties.growTimeoutInMinutes));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.shrinkIntervalInMinutes && (typeof properties.shrinkIntervalInMinutes) !== 'object') {
        errors.collect(ros.propertyValidator('shrinkIntervalInMinutes', ros.validateRange)({
            data: properties.shrinkIntervalInMinutes,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('shrinkIntervalInMinutes', ros.validateNumber)(properties.shrinkIntervalInMinutes));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    if(properties.queues && (Array.isArray(properties.queues) || (typeof properties.queues) === 'string')) {
        errors.collect(ros.propertyValidator('queues', ros.validateLength)({
            data: properties.queues.length,
            min: undefined,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('queues', ros.listValidator(RosAutoScaleConfig_QueuesPropertyValidator))(properties.queues));
    errors.collect(ros.propertyValidator('excludeNodes', ros.validateString)(properties.excludeNodes));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "RosAutoScaleConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoScaleConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig` resource.
 */
// @ts-ignore TS6133
function rosAutoScaleConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoScaleConfigPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      EnableAutoGrow: ros.booleanToRosTemplate(properties.enableAutoGrow),
      EnableAutoShrink: ros.booleanToRosTemplate(properties.enableAutoShrink),
      ExcludeNodes: ros.stringToRosTemplate(properties.excludeNodes),
      ExtraNodesGrowRatio: ros.numberToRosTemplate(properties.extraNodesGrowRatio),
      GrowIntervalInMinutes: ros.numberToRosTemplate(properties.growIntervalInMinutes),
      GrowRatio: ros.numberToRosTemplate(properties.growRatio),
      GrowTimeoutInMinutes: ros.numberToRosTemplate(properties.growTimeoutInMinutes),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      MaxNodesInCluster: ros.numberToRosTemplate(properties.maxNodesInCluster),
      Queues: ros.listMapper(rosAutoScaleConfigQueuesPropertyToRosTemplate)(properties.queues),
      ShrinkIdleTimes: ros.numberToRosTemplate(properties.shrinkIdleTimes),
      ShrinkIntervalInMinutes: ros.numberToRosTemplate(properties.shrinkIntervalInMinutes),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::AutoScaleConfig`, which is used to configure the auto scaling settings of a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoScaleConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
export class RosAutoScaleConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::AutoScaleConfig";

    /**
     * @Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    public enableAutoGrow: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    public enableAutoShrink: boolean | ros.IResolvable | undefined;

    /**
     * @Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    public excludeNodes: string | ros.IResolvable | undefined;

    /**
     * @Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * Default value: 0
     */
    public extraNodesGrowRatio: number | ros.IResolvable | undefined;

    /**
     * @Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
     * Default value: 2
     */
    public growIntervalInMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property growRatio: The percentage of each round of scale-out.
     * Default value: 100
     */
    public growRatio: number | ros.IResolvable | undefined;

    /**
     * @Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
     * Default value: 20
     */
    public growTimeoutInMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property imageId: The ID of the image.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * Default value: 100
     */
    public maxNodesInCluster: number | ros.IResolvable | undefined;

    /**
     * @Property queues:
     */
    public queues: Array<RosAutoScaleConfig.QueuesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * Default value: 3
     */
    public shrinkIdleTimes: number | ros.IResolvable | undefined;

    /**
     * @Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
     * Default value: 2
     */
    public shrinkIntervalInMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    public spotPriceLimit: number | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The preemption policy of the compute nodes. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoScaleConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoScaleConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.enableAutoGrow = props.enableAutoGrow;
        this.enableAutoShrink = props.enableAutoShrink;
        this.excludeNodes = props.excludeNodes;
        this.extraNodesGrowRatio = props.extraNodesGrowRatio;
        this.growIntervalInMinutes = props.growIntervalInMinutes;
        this.growRatio = props.growRatio;
        this.growTimeoutInMinutes = props.growTimeoutInMinutes;
        this.imageId = props.imageId;
        this.maxNodesInCluster = props.maxNodesInCluster;
        this.queues = props.queues;
        this.shrinkIdleTimes = props.shrinkIdleTimes;
        this.shrinkIntervalInMinutes = props.shrinkIntervalInMinutes;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            enableAutoGrow: this.enableAutoGrow,
            enableAutoShrink: this.enableAutoShrink,
            excludeNodes: this.excludeNodes,
            extraNodesGrowRatio: this.extraNodesGrowRatio,
            growIntervalInMinutes: this.growIntervalInMinutes,
            growRatio: this.growRatio,
            growTimeoutInMinutes: this.growTimeoutInMinutes,
            imageId: this.imageId,
            maxNodesInCluster: this.maxNodesInCluster,
            queues: this.queues,
            shrinkIdleTimes: this.shrinkIdleTimes,
            shrinkIntervalInMinutes: this.shrinkIntervalInMinutes,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoScaleConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property dataDiskKmsKeyId: The KMS key ID of the data disk.
         */
        readonly dataDiskKmsKeyId?: string | ros.IResolvable;
        /**
         * @Property dataDiskPerformanceLevel: The performance level of the ESSD used as the data disk. The parameter takes effect only when the Queues.N.DataDisks.M.DataDiskCategory parameter is set to cloud_essd. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     * Default value: PL1
         */
        readonly dataDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property dataDiskEncrypted: Specifies whether to encrypt the data disk.
         */
        readonly dataDiskEncrypted?: boolean | ros.IResolvable;
        /**
         * @Property dataDiskDeleteWithInstance: Specifies whether the data disk is released when the node is released.
         */
        readonly dataDiskDeleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property dataDiskSize: The size of the data disk. Unit: GB.
     * Default value: 40
         */
        readonly dataDiskSize?: number | ros.IResolvable;
        /**
         * @Property dataDiskCategory: The type of the data disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_efficiency
         */
        readonly dataDiskCategory?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoScaleConfig_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dataDiskKmsKeyId', ros.validateString)(properties.dataDiskKmsKeyId));
    errors.collect(ros.propertyValidator('dataDiskPerformanceLevel', ros.validateString)(properties.dataDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('dataDiskEncrypted', ros.validateBoolean)(properties.dataDiskEncrypted));
    errors.collect(ros.propertyValidator('dataDiskDeleteWithInstance', ros.validateBoolean)(properties.dataDiskDeleteWithInstance));
    if(properties.dataDiskSize && (typeof properties.dataDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('dataDiskSize', ros.validateRange)({
            data: properties.dataDiskSize,
            min: 40,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    errors.collect(ros.propertyValidator('dataDiskCategory', ros.validateString)(properties.dataDiskCategory));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosAutoScaleConfigDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoScaleConfig_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      DataDiskKMSKeyId: ros.stringToRosTemplate(properties.dataDiskKmsKeyId),
      DataDiskPerformanceLevel: ros.stringToRosTemplate(properties.dataDiskPerformanceLevel),
      DataDiskEncrypted: ros.booleanToRosTemplate(properties.dataDiskEncrypted),
      DataDiskDeleteWithInstance: ros.booleanToRosTemplate(properties.dataDiskDeleteWithInstance),
      DataDiskSize: ros.numberToRosTemplate(properties.dataDiskSize),
      DataDiskCategory: ros.stringToRosTemplate(properties.dataDiskCategory),
    };
}

export namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    export interface InstanceTypesProperty {
        /**
         * @Property zoneId: The zone ID of the compute nodes that are automatically added in the queue belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The vSwitch ID of the compute nodes that are automatically added in the queue.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.InstanceTypes.M.SpotStrategy is set to SpotWithPriceLimit
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the compute nodes that are automatically added in the queue.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceTypesProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceTypesProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoScaleConfig_InstanceTypesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "InstanceTypesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.InstanceTypes` resource
 *
 * @param properties - the TypeScript properties of a `InstanceTypesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.InstanceTypes` resource.
 */
// @ts-ignore TS6133
function rosAutoScaleConfigInstanceTypesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoScaleConfig_InstanceTypesPropertyValidator(properties).assertSuccess();
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
    };
}

export namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    export interface QueuesProperty {
        /**
         * @Property hostNameSuffix: The hostname suffix of the host that is used to perform scale-out for the queue. You can manage nodes that have a specified hostname suffix.
         */
        readonly hostNameSuffix?: string | ros.IResolvable;
        /**
         * @Property minNodesInQueue: The minimum number of the compute nodes that can be removed in the queue.
     * Default value: 0
         */
        readonly minNodesInQueue?: number | ros.IResolvable;
        /**
         * @Property maxNodesInQueue: The maximum number of the compute nodes that can be added in the queue.
     * Default value: 100
         */
        readonly maxNodesInQueue?: number | ros.IResolvable;
        /**
         * @Property enableAutoGrow: Specifies whether the queue enables auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
         */
        readonly enableAutoGrow?: boolean | ros.IResolvable;
        /**
         * @Property dataDisks: undefined
         */
        readonly dataDisks?: Array<RosAutoScaleConfig.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The size of the system disk specified for the compute nodes that are added in the queue. Unit: GB.
     * Default value: 40
         */
        readonly systemDiskSize?: number | ros.IResolvable;
        /**
         * @Property systemDiskLevel: The performance level of the system disk specified for the compute nodes that are added in the queue. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     * Default value: PL1
         */
        readonly systemDiskLevel?: string | ros.IResolvable;
        /**
         * @Property queueImageId: The image ID of the queue where scale-out is performed.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         */
        readonly queueImageId?: string | ros.IResolvable;
        /**
         * @Property minNodesPerCycle: The minimum number of compute nodes that can be added in each round of scale-out.
     * Default value: 1
         */
        readonly minNodesPerCycle?: number | ros.IResolvable;
        /**
         * @Property maxNodesPerCycle: The maximum number of compute nodes that can be added in each round of scale-out.
     * Default value: 0
         */
        readonly maxNodesPerCycle?: number | ros.IResolvable;
        /**
         * @Property enableAutoShrink: Specifies whether the queue enables auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
         */
        readonly enableAutoShrink?: boolean | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of the system disk specified for the compute nodes that are added in the queue. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_efficiency
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property hostNamePrefix: The hostname prefix of the host that is used to perform scale-out for the queue. You can manage compute nodes that have a specified hostname prefix.
         */
        readonly hostNamePrefix?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.SpotStrategy is set to SpotWithPriceLimit.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceTypes: undefined
         */
        readonly instanceTypes?: Array<RosAutoScaleConfig.InstanceTypesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the compute nodes that are automatically added in the queue.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property queueName: The name of the queue.
         */
        readonly queueName?: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueuesProperty`
 *
 * @param properties - the TypeScript properties of a `QueuesProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoScaleConfig_QueuesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hostNameSuffix', ros.validateString)(properties.hostNameSuffix));
    if(properties.minNodesInQueue && (typeof properties.minNodesInQueue) !== 'object') {
        errors.collect(ros.propertyValidator('minNodesInQueue', ros.validateRange)({
            data: properties.minNodesInQueue,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('minNodesInQueue', ros.validateNumber)(properties.minNodesInQueue));
    if(properties.maxNodesInQueue && (typeof properties.maxNodesInQueue) !== 'object') {
        errors.collect(ros.propertyValidator('maxNodesInQueue', ros.validateRange)({
            data: properties.maxNodesInQueue,
            min: 0,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('maxNodesInQueue', ros.validateNumber)(properties.maxNodesInQueue));
    errors.collect(ros.propertyValidator('enableAutoGrow', ros.validateBoolean)(properties.enableAutoGrow));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosAutoScaleConfig_DataDisksPropertyValidator))(properties.dataDisks));
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 40,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskLevel', ros.validateString)(properties.systemDiskLevel));
    errors.collect(ros.propertyValidator('queueImageId', ros.validateString)(properties.queueImageId));
    if(properties.minNodesPerCycle && (typeof properties.minNodesPerCycle) !== 'object') {
        errors.collect(ros.propertyValidator('minNodesPerCycle', ros.validateRange)({
            data: properties.minNodesPerCycle,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('minNodesPerCycle', ros.validateNumber)(properties.minNodesPerCycle));
    if(properties.maxNodesPerCycle && (typeof properties.maxNodesPerCycle) !== 'object') {
        errors.collect(ros.propertyValidator('maxNodesPerCycle', ros.validateRange)({
            data: properties.maxNodesPerCycle,
            min: 0,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('maxNodesPerCycle', ros.validateNumber)(properties.maxNodesPerCycle));
    errors.collect(ros.propertyValidator('enableAutoShrink', ros.validateBoolean)(properties.enableAutoShrink));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('hostNamePrefix', ros.validateString)(properties.hostNamePrefix));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: undefined,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(RosAutoScaleConfig_InstanceTypesPropertyValidator))(properties.instanceTypes));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "QueuesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.Queues` resource
 *
 * @param properties - the TypeScript properties of a `QueuesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::AutoScaleConfig.Queues` resource.
 */
// @ts-ignore TS6133
function rosAutoScaleConfigQueuesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoScaleConfig_QueuesPropertyValidator(properties).assertSuccess();
    return {
      HostNameSuffix: ros.stringToRosTemplate(properties.hostNameSuffix),
      MinNodesInQueue: ros.numberToRosTemplate(properties.minNodesInQueue),
      MaxNodesInQueue: ros.numberToRosTemplate(properties.maxNodesInQueue),
      EnableAutoGrow: ros.booleanToRosTemplate(properties.enableAutoGrow),
      DataDisks: ros.listMapper(rosAutoScaleConfigDataDisksPropertyToRosTemplate)(properties.dataDisks),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      SystemDiskLevel: ros.stringToRosTemplate(properties.systemDiskLevel),
      QueueImageId: ros.stringToRosTemplate(properties.queueImageId),
      MinNodesPerCycle: ros.numberToRosTemplate(properties.minNodesPerCycle),
      MaxNodesPerCycle: ros.numberToRosTemplate(properties.maxNodesPerCycle),
      EnableAutoShrink: ros.booleanToRosTemplate(properties.enableAutoShrink),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      HostNamePrefix: ros.stringToRosTemplate(properties.hostNamePrefix),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      InstanceTypes: ros.listMapper(rosAutoScaleConfigInstanceTypesPropertyToRosTemplate)(properties.instanceTypes),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      QueueName: ros.stringToRosTemplate(properties.queueName),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
    };
}

/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export interface RosClusterProps {

    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
     */
    readonly ecsOrderComputeCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    readonly ecsOrderLoginCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string | ros.IResolvable;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    readonly accountType?: string | ros.IResolvable;

    /**
     * @Property additionalVolumes:
     */
    readonly additionalVolumes?: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    readonly application?: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    readonly clientVersion?: string | ros.IResolvable;

    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    readonly computeEnableHt?: boolean | ros.IResolvable;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string | ros.IResolvable;

    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    readonly deployMode?: string | ros.IResolvable;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    readonly ecsOrderManagerCount?: number | ros.IResolvable;

    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    readonly ehpcVersion?: string | ros.IResolvable;

    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    readonly haEnable?: boolean | ros.IResolvable;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;

    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    readonly inputFileUrl?: string | ros.IResolvable;

    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    readonly isComputeEss?: boolean | ros.IResolvable;

    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    readonly jobQueue?: string | ros.IResolvable;

    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:
     * - **Standard**: The TCP communication mode is used.
     * - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
     */
    readonly networkInterfaceTrafficMode?: string | ros.IResolvable;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, \/ Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: The purchase of long resources, units: week \/ month \/ year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week \/ Month \/ year.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
     * When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
     * When the value of DeployMode is Simple, the value range: manager, login, compute.
     * When the value of DeployMode is Tiny, the value range: manager, compute.
     */
    readonly ramNodeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role.
     * You can call the ListRoles operation provided by RAM to query the created RAM roles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory
     */
    readonly remoteDirectory?: string | ros.IResolvable;

    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    readonly remoteVisEnable?: boolean | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string | ros.IResolvable;

    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    readonly schedulerType?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
     * Default value: PL1
     */
    readonly systemDiskLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    readonly systemDiskType?: string | ros.IResolvable;

    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    readonly volumeId?: string | ros.IResolvable;

    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    readonly volumeMountpoint?: string | ros.IResolvable;

    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    readonly volumeProtocol?: string | ros.IResolvable;

    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    readonly volumeType?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    readonly withoutElasticIp?: boolean | ros.IResolvable;

    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('volumeProtocol', ros.validateString)(properties.volumeProtocol));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('computeEnableHt', ros.validateBoolean)(properties.computeEnableHt));
    errors.collect(ros.propertyValidator('withoutElasticIp', ros.validateBoolean)(properties.withoutElasticIp));
    errors.collect(ros.propertyValidator('systemDiskType', ros.validateString)(properties.systemDiskType));
    errors.collect(ros.propertyValidator('remoteVisEnable', ros.validateBoolean)(properties.remoteVisEnable));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('volumeId', ros.validateString)(properties.volumeId));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('deployMode', ros.validateString)(properties.deployMode));
    if(properties.postInstallScript && (Array.isArray(properties.postInstallScript) || (typeof properties.postInstallScript) === 'string')) {
        errors.collect(ros.propertyValidator('postInstallScript', ros.validateLength)({
            data: properties.postInstallScript.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('postInstallScript', ros.listValidator(RosCluster_PostInstallScriptPropertyValidator))(properties.postInstallScript));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('isComputeEss', ros.validateBoolean)(properties.isComputeEss));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.requiredValidator)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.validateString)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('jobQueue', ros.validateString)(properties.jobQueue));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.computeSpotStrategy && (typeof properties.computeSpotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateAllowedValues)({
          data: properties.computeSpotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateString)(properties.computeSpotStrategy));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.requiredValidator)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.validateString)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ehpcVersion', ros.validateString)(properties.ehpcVersion));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.validateString)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('ecsOrderManagerCount', ros.validateNumber)(properties.ecsOrderManagerCount));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.requiredValidator)(properties.ecsOrderComputeInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.validateString)(properties.ecsOrderComputeInstanceType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.application && (Array.isArray(properties.application) || (typeof properties.application) === 'string')) {
        errors.collect(ros.propertyValidator('application', ros.validateLength)({
            data: properties.application.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('application', ros.listValidator(RosCluster_ApplicationPropertyValidator))(properties.application));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.imageOwnerAlias && (typeof properties.imageOwnerAlias) !== 'object') {
        errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateAllowedValues)({
          data: properties.imageOwnerAlias,
          allowedValues: ["system","self","others","marketplace"],
        }));
    }
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
    errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.requiredValidator)(properties.ecsOrderComputeCount));
    if(properties.ecsOrderComputeCount && (typeof properties.ecsOrderComputeCount) !== 'object') {
        errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.validateRange)({
            data: properties.ecsOrderComputeCount,
            min: 0,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.validateNumber)(properties.ecsOrderComputeCount));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    if(properties.additionalVolumes && (Array.isArray(properties.additionalVolumes) || (typeof properties.additionalVolumes) === 'string')) {
        errors.collect(ros.propertyValidator('additionalVolumes', ros.validateLength)({
            data: properties.additionalVolumes.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('additionalVolumes', ros.listValidator(RosCluster_AdditionalVolumesPropertyValidator))(properties.additionalVolumes));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('computeSpotPriceLimit', ros.validateString)(properties.computeSpotPriceLimit));
    if(properties.ramNodeTypes && (Array.isArray(properties.ramNodeTypes) || (typeof properties.ramNodeTypes) === 'string')) {
        errors.collect(ros.propertyValidator('ramNodeTypes', ros.validateLength)({
            data: properties.ramNodeTypes.length,
            min: undefined,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('ramNodeTypes', ros.listValidator(ros.validateString))(properties.ramNodeTypes));
    errors.collect(ros.propertyValidator('clientVersion', ros.validateString)(properties.clientVersion));
    errors.collect(ros.propertyValidator('volumeType', ros.validateString)(properties.volumeType));
    errors.collect(ros.propertyValidator('inputFileUrl', ros.validateString)(properties.inputFileUrl));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('remoteDirectory', ros.validateString)(properties.remoteDirectory));
    errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateString)(properties.networkInterfaceTrafficMode));
    errors.collect(ros.propertyValidator('sccClusterId', ros.validateString)(properties.sccClusterId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('systemDiskLevel', ros.validateString)(properties.systemDiskLevel));
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.requiredValidator)(properties.ecsOrderLoginCount));
    if(properties.ecsOrderLoginCount && (typeof properties.ecsOrderLoginCount) !== 'object') {
        errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateRange)({
            data: properties.ecsOrderLoginCount,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateNumber)(properties.ecsOrderLoginCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('schedulerType', ros.validateString)(properties.schedulerType));
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('haEnable', ros.validateBoolean)(properties.haEnable));
    errors.collect(ros.propertyValidator('osTag', ros.requiredValidator)(properties.osTag));
    errors.collect(ros.propertyValidator('osTag', ros.validateString)(properties.osTag));
    if(properties.ecsChargeType && (typeof properties.ecsChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('ecsChargeType', ros.validateAllowedValues)({
          data: properties.ecsChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('ecsChargeType', ros.validateString)(properties.ecsChargeType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      EcsOrderComputeCount: ros.numberToRosTemplate(properties.ecsOrderComputeCount),
      EcsOrderComputeInstanceType: ros.stringToRosTemplate(properties.ecsOrderComputeInstanceType),
      EcsOrderLoginCount: ros.numberToRosTemplate(properties.ecsOrderLoginCount),
      EcsOrderLoginInstanceType: ros.stringToRosTemplate(properties.ecsOrderLoginInstanceType),
      EcsOrderManagerInstanceType: ros.stringToRosTemplate(properties.ecsOrderManagerInstanceType),
      Name: ros.stringToRosTemplate(properties.name),
      OsTag: ros.stringToRosTemplate(properties.osTag),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AccountType: ros.stringToRosTemplate(properties.accountType),
      AdditionalVolumes: ros.listMapper(rosClusterAdditionalVolumesPropertyToRosTemplate)(properties.additionalVolumes),
      Application: ros.listMapper(rosClusterApplicationPropertyToRosTemplate)(properties.application),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      ClientVersion: ros.stringToRosTemplate(properties.clientVersion),
      ComputeEnableHt: ros.booleanToRosTemplate(properties.computeEnableHt),
      ComputeSpotPriceLimit: ros.stringToRosTemplate(properties.computeSpotPriceLimit),
      ComputeSpotStrategy: ros.stringToRosTemplate(properties.computeSpotStrategy),
      DeployMode: ros.stringToRosTemplate(properties.deployMode),
      Description: ros.stringToRosTemplate(properties.description),
      EcsChargeType: ros.stringToRosTemplate(properties.ecsChargeType),
      EcsOrderManagerCount: ros.numberToRosTemplate(properties.ecsOrderManagerCount),
      EhpcVersion: ros.stringToRosTemplate(properties.ehpcVersion),
      HaEnable: ros.booleanToRosTemplate(properties.haEnable),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      ImageOwnerAlias: ros.stringToRosTemplate(properties.imageOwnerAlias),
      InputFileUrl: ros.stringToRosTemplate(properties.inputFileUrl),
      IsComputeEss: ros.booleanToRosTemplate(properties.isComputeEss),
      JobQueue: ros.stringToRosTemplate(properties.jobQueue),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      NetworkInterfaceTrafficMode: ros.stringToRosTemplate(properties.networkInterfaceTrafficMode),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PostInstallScript: ros.listMapper(rosClusterPostInstallScriptPropertyToRosTemplate)(properties.postInstallScript),
      RamNodeTypes: ros.listMapper(ros.stringToRosTemplate)(properties.ramNodeTypes),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      RemoteDirectory: ros.stringToRosTemplate(properties.remoteDirectory),
      RemoteVisEnable: ros.booleanToRosTemplate(properties.remoteVisEnable),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SccClusterId: ros.stringToRosTemplate(properties.sccClusterId),
      SchedulerType: ros.stringToRosTemplate(properties.schedulerType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SystemDiskLevel: ros.stringToRosTemplate(properties.systemDiskLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      SystemDiskType: ros.stringToRosTemplate(properties.systemDiskType),
      VolumeId: ros.stringToRosTemplate(properties.volumeId),
      VolumeMountpoint: ros.stringToRosTemplate(properties.volumeMountpoint),
      VolumeProtocol: ros.stringToRosTemplate(properties.volumeProtocol),
      VolumeType: ros.stringToRosTemplate(properties.volumeType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      WithoutElasticIp: ros.booleanToRosTemplate(properties.withoutElasticIp),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Cluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Cluster";

    /**
     * @Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public readonly attrEcsInfo: ros.IResolvable;

    /**
     * @Attribute Name: Cluster name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
     */
    public ecsOrderComputeCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    public ecsOrderComputeInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    public ecsOrderLoginCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    public ecsOrderLoginInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    public ecsOrderManagerInstanceType: string | ros.IResolvable;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    public osTag: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    public accountType: string | ros.IResolvable | undefined;

    /**
     * @Property additionalVolumes:
     */
    public additionalVolumes: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    public application: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    public clientVersion: string | ros.IResolvable | undefined;

    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    public computeEnableHt: boolean | ros.IResolvable | undefined;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    public computeSpotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    public computeSpotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    public deployMode: string | ros.IResolvable | undefined;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    public ecsChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    public ecsOrderManagerCount: number | ros.IResolvable | undefined;

    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    public ehpcVersion: string | ros.IResolvable | undefined;

    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    public haEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    public imageOwnerAlias: string | ros.IResolvable | undefined;

    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    public inputFileUrl: string | ros.IResolvable | undefined;

    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    public isComputeEss: boolean | ros.IResolvable | undefined;

    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    public jobQueue: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: Key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:
     * - **Standard**: The TCP communication mode is used.
     * - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
     */
    public networkInterfaceTrafficMode: string | ros.IResolvable | undefined;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, \/ Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: The purchase of long resources, units: week \/ month \/ year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week \/ Month \/ year.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property postInstallScript:
     */
    public postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
     * When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
     * When the value of DeployMode is Simple, the value range: manager, login, compute.
     * When the value of DeployMode is Tiny, the value range: manager, compute.
     */
    public ramNodeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role.
     * You can call the ListRoles operation provided by RAM to query the created RAM roles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory
     */
    public remoteDirectory: string | ros.IResolvable | undefined;

    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    public remoteVisEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    public sccClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    public schedulerType: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
     * Default value: PL1
     */
    public systemDiskLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    public systemDiskType: string | ros.IResolvable | undefined;

    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    public volumeId: string | ros.IResolvable | undefined;

    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    public volumeMountpoint: string | ros.IResolvable | undefined;

    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    public volumeProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    public volumeType: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    public withoutElasticIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property zoneId: Available area ID.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrEcsInfo = this.getAtt('EcsInfo');
        this.attrName = this.getAtt('Name');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ecsOrderComputeCount = props.ecsOrderComputeCount;
        this.ecsOrderComputeInstanceType = props.ecsOrderComputeInstanceType;
        this.ecsOrderLoginCount = props.ecsOrderLoginCount;
        this.ecsOrderLoginInstanceType = props.ecsOrderLoginInstanceType;
        this.ecsOrderManagerInstanceType = props.ecsOrderManagerInstanceType;
        this.name = props.name;
        this.osTag = props.osTag;
        this.vSwitchId = props.vSwitchId;
        this.accountType = props.accountType;
        this.additionalVolumes = props.additionalVolumes;
        this.application = props.application;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.clientVersion = props.clientVersion;
        this.computeEnableHt = props.computeEnableHt;
        this.computeSpotPriceLimit = props.computeSpotPriceLimit;
        this.computeSpotStrategy = props.computeSpotStrategy;
        this.deployMode = props.deployMode;
        this.description = props.description;
        this.ecsChargeType = props.ecsChargeType;
        this.ecsOrderManagerCount = props.ecsOrderManagerCount;
        this.ehpcVersion = props.ehpcVersion;
        this.haEnable = props.haEnable;
        this.imageId = props.imageId;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.inputFileUrl = props.inputFileUrl;
        this.isComputeEss = props.isComputeEss;
        this.jobQueue = props.jobQueue;
        this.keyPairName = props.keyPairName;
        this.networkInterfaceTrafficMode = props.networkInterfaceTrafficMode;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.postInstallScript = props.postInstallScript;
        this.ramNodeTypes = props.ramNodeTypes;
        this.ramRoleName = props.ramRoleName;
        this.remoteDirectory = props.remoteDirectory;
        this.remoteVisEnable = props.remoteVisEnable;
        this.resourceGroupId = props.resourceGroupId;
        this.sccClusterId = props.sccClusterId;
        this.schedulerType = props.schedulerType;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupName = props.securityGroupName;
        this.systemDiskLevel = props.systemDiskLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.systemDiskType = props.systemDiskType;
        this.volumeId = props.volumeId;
        this.volumeMountpoint = props.volumeMountpoint;
        this.volumeProtocol = props.volumeProtocol;
        this.volumeType = props.volumeType;
        this.vpcId = props.vpcId;
        this.withoutElasticIp = props.withoutElasticIp;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ecsOrderComputeCount: this.ecsOrderComputeCount,
            ecsOrderComputeInstanceType: this.ecsOrderComputeInstanceType,
            ecsOrderLoginCount: this.ecsOrderLoginCount,
            ecsOrderLoginInstanceType: this.ecsOrderLoginInstanceType,
            ecsOrderManagerInstanceType: this.ecsOrderManagerInstanceType,
            name: this.name,
            osTag: this.osTag,
            vSwitchId: this.vSwitchId,
            accountType: this.accountType,
            additionalVolumes: this.additionalVolumes,
            application: this.application,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            clientVersion: this.clientVersion,
            computeEnableHt: this.computeEnableHt,
            computeSpotPriceLimit: this.computeSpotPriceLimit,
            computeSpotStrategy: this.computeSpotStrategy,
            deployMode: this.deployMode,
            description: this.description,
            ecsChargeType: this.ecsChargeType,
            ecsOrderManagerCount: this.ecsOrderManagerCount,
            ehpcVersion: this.ehpcVersion,
            haEnable: this.haEnable,
            imageId: this.imageId,
            imageOwnerAlias: this.imageOwnerAlias,
            inputFileUrl: this.inputFileUrl,
            isComputeEss: this.isComputeEss,
            jobQueue: this.jobQueue,
            keyPairName: this.keyPairName,
            networkInterfaceTrafficMode: this.networkInterfaceTrafficMode,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            postInstallScript: this.postInstallScript,
            ramNodeTypes: this.ramNodeTypes,
            ramRoleName: this.ramRoleName,
            remoteDirectory: this.remoteDirectory,
            remoteVisEnable: this.remoteVisEnable,
            resourceGroupId: this.resourceGroupId,
            sccClusterId: this.sccClusterId,
            schedulerType: this.schedulerType,
            securityGroupId: this.securityGroupId,
            securityGroupName: this.securityGroupName,
            systemDiskLevel: this.systemDiskLevel,
            systemDiskSize: this.systemDiskSize,
            systemDiskType: this.systemDiskType,
            volumeId: this.volumeId,
            volumeMountpoint: this.volumeMountpoint,
            volumeProtocol: this.volumeProtocol,
            volumeType: this.volumeType,
            vpcId: this.vpcId,
            withoutElasticIp: this.withoutElasticIp,
            zoneId: this.zoneId,
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
    export interface AdditionalVolumesProperty {
        /**
         * @Property volumeProtocol: The type of the protocol that is used by the additional file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
         */
        readonly volumeProtocol?: string | ros.IResolvable;
        /**
         * @Property localDirectory: The local directory to which the additional file system is mounted.
         */
        readonly localDirectory: string | ros.IResolvable;
        /**
         * @Property volumeId: The ID of the additional file system.
         */
        readonly volumeId: string | ros.IResolvable;
        /**
         * @Property remoteDirectory: The remote directory to which the additional file system is mounted.
         */
        readonly remoteDirectory?: string | ros.IResolvable;
        /**
         * @Property volumeType: The type of the additional shared storage. Only nas file systems are supported.
         */
        readonly volumeType?: string | ros.IResolvable;
        /**
         * @Property jobQueue: The queue of the nodes to which the additional file system is attached.
         */
        readonly jobQueue?: string | ros.IResolvable;
        /**
         * @Property volumeMountpoint: The mount target of the additional file system.
         */
        readonly volumeMountpoint: string | ros.IResolvable;
        /**
         * @Property location: The type of the cluster. Valid value: PublicCloud.
         */
        readonly location?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AdditionalVolumesProperty`
 *
 * @param properties - the TypeScript properties of a `AdditionalVolumesProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_AdditionalVolumesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('volumeProtocol', ros.validateString)(properties.volumeProtocol));
    errors.collect(ros.propertyValidator('localDirectory', ros.requiredValidator)(properties.localDirectory));
    errors.collect(ros.propertyValidator('localDirectory', ros.validateString)(properties.localDirectory));
    errors.collect(ros.propertyValidator('volumeId', ros.requiredValidator)(properties.volumeId));
    errors.collect(ros.propertyValidator('volumeId', ros.validateString)(properties.volumeId));
    errors.collect(ros.propertyValidator('remoteDirectory', ros.validateString)(properties.remoteDirectory));
    errors.collect(ros.propertyValidator('volumeType', ros.validateString)(properties.volumeType));
    errors.collect(ros.propertyValidator('jobQueue', ros.validateString)(properties.jobQueue));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.requiredValidator)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.validateString)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "AdditionalVolumesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.AdditionalVolumes` resource
 *
 * @param properties - the TypeScript properties of a `AdditionalVolumesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.AdditionalVolumes` resource.
 */
// @ts-ignore TS6133
function rosClusterAdditionalVolumesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_AdditionalVolumesPropertyValidator(properties).assertSuccess();
    return {
      VolumeProtocol: ros.stringToRosTemplate(properties.volumeProtocol),
      LocalDirectory: ros.stringToRosTemplate(properties.localDirectory),
      VolumeId: ros.stringToRosTemplate(properties.volumeId),
      RemoteDirectory: ros.stringToRosTemplate(properties.remoteDirectory),
      VolumeType: ros.stringToRosTemplate(properties.volumeType),
      JobQueue: ros.stringToRosTemplate(properties.jobQueue),
      VolumeMountpoint: ros.stringToRosTemplate(properties.volumeMountpoint),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface ApplicationProperty {
        /**
         * @Property tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
         */
        readonly tag: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ApplicationProperty`
 *
 * @param properties - the TypeScript properties of a `ApplicationProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_ApplicationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tag', ros.requiredValidator)(properties.tag));
    errors.collect(ros.propertyValidator('tag', ros.validateString)(properties.tag));
    return errors.wrap('supplied properties not correct for "ApplicationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.Application` resource
 *
 * @param properties - the TypeScript properties of a `ApplicationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.Application` resource.
 */
// @ts-ignore TS6133
function rosClusterApplicationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_ApplicationPropertyValidator(properties).assertSuccess();
    return {
      Tag: ros.stringToRosTemplate(properties.tag),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface PostInstallScriptProperty {
        /**
         * @Property args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
         */
        readonly args?: string | ros.IResolvable;
        /**
         * @Property url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
         */
        readonly url?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PostInstallScriptProperty`
 *
 * @param properties - the TypeScript properties of a `PostInstallScriptProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_PostInstallScriptPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    return errors.wrap('supplied properties not correct for "PostInstallScriptProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.PostInstallScript` resource
 *
 * @param properties - the TypeScript properties of a `PostInstallScriptProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.PostInstallScript` resource.
 */
// @ts-ignore TS6133
function rosClusterPostInstallScriptPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_PostInstallScriptPropertyValidator(properties).assertSuccess();
    return {
      Args: ros.stringToRosTemplate(properties.args),
      Url: ros.stringToRosTemplate(properties.url),
    };
}

/**
 * Properties for defining a `RosUsers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export interface RosUsersProps {

    /**
     * @Property clusterId: The cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property users: The information about the users.
     */
    readonly users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUsersProps`
 *
 * @param properties - the TypeScript properties of a `RosUsersProps`
 *
 * @returns the result of the validation.
 */
function RosUsersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('users', ros.requiredValidator)(properties.users));
    if(properties.users && (Array.isArray(properties.users) || (typeof properties.users) === 'string')) {
        errors.collect(ros.propertyValidator('users', ros.validateLength)({
            data: properties.users.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('users', ros.listValidator(RosUsers_UsersPropertyValidator))(properties.users));
    return errors.wrap('supplied properties not correct for "RosUsersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Users` resource
 *
 * @param properties - the TypeScript properties of a `RosUsersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Users` resource.
 */
// @ts-ignore TS6133
function rosUsersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUsersPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      Users: ros.listMapper(rosUsersUsersPropertyToRosTemplate)(properties.users),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Users`DATASOURCE::EHPC::Nodes is used to query nodes in an Elastic High Performance Computing (E-HPC) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Users` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export class RosUsers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Users";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property users: The information about the users.
     */
    public users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUsersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUsers.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.users = props.users;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            users: this.users,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUsersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUsers {
    /**
     * @stability external
     */
    export interface UsersProperty {
        /**
         * @Property group: The permission group to which the user N belongs. Valid values:
     * - **users**: an ordinary permission group. It is applicable to ordinary users that need only to submit and debug jobs.
     * - **wheel**: a sudo permission group. It is applicable to the administrator who needs to manage the cluster. In addition to submitting and debugging jobs, users who have sudo permissions can run sudo commands to install software and restart nodes.
     * Valid values of N: 1 to 100.
         */
        readonly group: string | ros.IResolvable;
        /**
         * @Property password: The password of the Nth user. The password must be 8 to 30 characters in length and contain three of the following items:
     * - Uppercase letter
     * - Lowercase letter
     * - Digit
     * - Special character: ()~!@#$%^&*-_+=|{}[]:;'\/<>,.?\/
     * Valid values of N: 1 to 100.
         */
        readonly password: string | ros.IResolvable;
        /**
         * @Property name: The name of the user that you want to add. The name must be 6 to 30 characters in length and can contain letters, digits, and periods (.). It must start with a letter. 
     * Valid values of N: 1 to 100.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UsersProperty`
 *
 * @param properties - the TypeScript properties of a `UsersProperty`
 *
 * @returns the result of the validation.
 */
function RosUsers_UsersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('group', ros.requiredValidator)(properties.group));
    errors.collect(ros.propertyValidator('group', ros.validateString)(properties.group));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "UsersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Users.Users` resource
 *
 * @param properties - the TypeScript properties of a `UsersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Users.Users` resource.
 */
// @ts-ignore TS6133
function rosUsersUsersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUsers_UsersPropertyValidator(properties).assertSuccess();
    return {
      Group: ros.stringToRosTemplate(properties.group),
      Password: ros.stringToRosTemplate(properties.password),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

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
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'EnableAutoGrow': ros.booleanToRosTemplate(properties.enableAutoGrow),
      'EnableAutoShrink': ros.booleanToRosTemplate(properties.enableAutoShrink),
      'ExcludeNodes': ros.stringToRosTemplate(properties.excludeNodes),
      'ExtraNodesGrowRatio': ros.numberToRosTemplate(properties.extraNodesGrowRatio),
      'GrowIntervalInMinutes': ros.numberToRosTemplate(properties.growIntervalInMinutes),
      'GrowRatio': ros.numberToRosTemplate(properties.growRatio),
      'GrowTimeoutInMinutes': ros.numberToRosTemplate(properties.growTimeoutInMinutes),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'MaxNodesInCluster': ros.numberToRosTemplate(properties.maxNodesInCluster),
      'Queues': ros.listMapper(rosAutoScaleConfigQueuesPropertyToRosTemplate)(properties.queues),
      'ShrinkIdleTimes': ros.numberToRosTemplate(properties.shrinkIdleTimes),
      'ShrinkIntervalInMinutes': ros.numberToRosTemplate(properties.shrinkIntervalInMinutes),
      'SpotPriceLimit': ros.numberToRosTemplate(properties.spotPriceLimit),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
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
      'DataDiskKMSKeyId': ros.stringToRosTemplate(properties.dataDiskKmsKeyId),
      'DataDiskPerformanceLevel': ros.stringToRosTemplate(properties.dataDiskPerformanceLevel),
      'DataDiskEncrypted': ros.booleanToRosTemplate(properties.dataDiskEncrypted),
      'DataDiskDeleteWithInstance': ros.booleanToRosTemplate(properties.dataDiskDeleteWithInstance),
      'DataDiskSize': ros.numberToRosTemplate(properties.dataDiskSize),
      'DataDiskCategory': ros.stringToRosTemplate(properties.dataDiskCategory),
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
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'SpotPriceLimit': ros.numberToRosTemplate(properties.spotPriceLimit),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
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
      'HostNameSuffix': ros.stringToRosTemplate(properties.hostNameSuffix),
      'MinNodesInQueue': ros.numberToRosTemplate(properties.minNodesInQueue),
      'MaxNodesInQueue': ros.numberToRosTemplate(properties.maxNodesInQueue),
      'EnableAutoGrow': ros.booleanToRosTemplate(properties.enableAutoGrow),
      'DataDisks': ros.listMapper(rosAutoScaleConfigDataDisksPropertyToRosTemplate)(properties.dataDisks),
      'SystemDiskSize': ros.numberToRosTemplate(properties.systemDiskSize),
      'SystemDiskLevel': ros.stringToRosTemplate(properties.systemDiskLevel),
      'QueueImageId': ros.stringToRosTemplate(properties.queueImageId),
      'MinNodesPerCycle': ros.numberToRosTemplate(properties.minNodesPerCycle),
      'MaxNodesPerCycle': ros.numberToRosTemplate(properties.maxNodesPerCycle),
      'EnableAutoShrink': ros.booleanToRosTemplate(properties.enableAutoShrink),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
      'HostNamePrefix': ros.stringToRosTemplate(properties.hostNamePrefix),
      'SpotPriceLimit': ros.numberToRosTemplate(properties.spotPriceLimit),
      'InstanceTypes': ros.listMapper(rosAutoScaleConfigInstanceTypesPropertyToRosTemplate)(properties.instanceTypes),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'QueueName': ros.stringToRosTemplate(properties.queueName),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
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
      'EcsOrderComputeCount': ros.numberToRosTemplate(properties.ecsOrderComputeCount),
      'EcsOrderComputeInstanceType': ros.stringToRosTemplate(properties.ecsOrderComputeInstanceType),
      'EcsOrderLoginCount': ros.numberToRosTemplate(properties.ecsOrderLoginCount),
      'EcsOrderLoginInstanceType': ros.stringToRosTemplate(properties.ecsOrderLoginInstanceType),
      'EcsOrderManagerInstanceType': ros.stringToRosTemplate(properties.ecsOrderManagerInstanceType),
      'Name': ros.stringToRosTemplate(properties.name),
      'OsTag': ros.stringToRosTemplate(properties.osTag),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'AccountType': ros.stringToRosTemplate(properties.accountType),
      'AdditionalVolumes': ros.listMapper(rosClusterAdditionalVolumesPropertyToRosTemplate)(properties.additionalVolumes),
      'Application': ros.listMapper(rosClusterApplicationPropertyToRosTemplate)(properties.application),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ClientVersion': ros.stringToRosTemplate(properties.clientVersion),
      'ComputeEnableHt': ros.booleanToRosTemplate(properties.computeEnableHt),
      'ComputeSpotPriceLimit': ros.stringToRosTemplate(properties.computeSpotPriceLimit),
      'ComputeSpotStrategy': ros.stringToRosTemplate(properties.computeSpotStrategy),
      'DeployMode': ros.stringToRosTemplate(properties.deployMode),
      'Description': ros.stringToRosTemplate(properties.description),
      'EcsChargeType': ros.stringToRosTemplate(properties.ecsChargeType),
      'EcsOrderManagerCount': ros.numberToRosTemplate(properties.ecsOrderManagerCount),
      'EhpcVersion': ros.stringToRosTemplate(properties.ehpcVersion),
      'HaEnable': ros.booleanToRosTemplate(properties.haEnable),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'ImageOwnerAlias': ros.stringToRosTemplate(properties.imageOwnerAlias),
      'InputFileUrl': ros.stringToRosTemplate(properties.inputFileUrl),
      'IsComputeEss': ros.booleanToRosTemplate(properties.isComputeEss),
      'JobQueue': ros.stringToRosTemplate(properties.jobQueue),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'NetworkInterfaceTrafficMode': ros.stringToRosTemplate(properties.networkInterfaceTrafficMode),
      'Password': ros.stringToRosTemplate(properties.password),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PostInstallScript': ros.listMapper(rosClusterPostInstallScriptPropertyToRosTemplate)(properties.postInstallScript),
      'RamNodeTypes': ros.listMapper(ros.stringToRosTemplate)(properties.ramNodeTypes),
      'RamRoleName': ros.stringToRosTemplate(properties.ramRoleName),
      'RemoteDirectory': ros.stringToRosTemplate(properties.remoteDirectory),
      'RemoteVisEnable': ros.booleanToRosTemplate(properties.remoteVisEnable),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SccClusterId': ros.stringToRosTemplate(properties.sccClusterId),
      'SchedulerType': ros.stringToRosTemplate(properties.schedulerType),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SecurityGroupName': ros.stringToRosTemplate(properties.securityGroupName),
      'SystemDiskLevel': ros.stringToRosTemplate(properties.systemDiskLevel),
      'SystemDiskSize': ros.numberToRosTemplate(properties.systemDiskSize),
      'SystemDiskType': ros.stringToRosTemplate(properties.systemDiskType),
      'VolumeId': ros.stringToRosTemplate(properties.volumeId),
      'VolumeMountpoint': ros.stringToRosTemplate(properties.volumeMountpoint),
      'VolumeProtocol': ros.stringToRosTemplate(properties.volumeProtocol),
      'VolumeType': ros.stringToRosTemplate(properties.volumeType),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'WithoutElasticIp': ros.booleanToRosTemplate(properties.withoutElasticIp),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Cluster`, which is used to create an Elastic High Performance Computing (E-HPC) cluster.
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
      'VolumeProtocol': ros.stringToRosTemplate(properties.volumeProtocol),
      'LocalDirectory': ros.stringToRosTemplate(properties.localDirectory),
      'VolumeId': ros.stringToRosTemplate(properties.volumeId),
      'RemoteDirectory': ros.stringToRosTemplate(properties.remoteDirectory),
      'VolumeType': ros.stringToRosTemplate(properties.volumeType),
      'JobQueue': ros.stringToRosTemplate(properties.jobQueue),
      'VolumeMountpoint': ros.stringToRosTemplate(properties.volumeMountpoint),
      'Location': ros.stringToRosTemplate(properties.location),
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
      'Tag': ros.stringToRosTemplate(properties.tag),
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
      'Args': ros.stringToRosTemplate(properties.args),
      'Url': ros.stringToRosTemplate(properties.url),
    };
}

/**
 * Properties for defining a `RosClusterV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
export interface RosClusterV2Props {

    /**
     * @Property clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    readonly clusterName: string | ros.IResolvable;

    /**
     * @Property sharedStorages: The list of shared storage configurations.
     */
    readonly sharedStorages: Array<RosClusterV2.SharedStoragesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC used by the cluster.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch used by the cluster
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
     */
    readonly additionalPackages?: Array<RosClusterV2.AdditionalPackagesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: Cluster custom service component configuration to support only one component.
     */
    readonly addons?: Array<RosClusterV2.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clientVersion: Cluster client version. By default, the latest version is used.
     */
    readonly clientVersion?: string | ros.IResolvable;

    /**
     * @Property clusterCategory: Cluster series. Valid values:
     * - Standard: The standard version.
     * - Serverless: Hosted version
     */
    readonly clusterCategory?: string | ros.IResolvable;

    /**
     * @Property clusterCredentials: Security credentials for the cluster.
     */
    readonly clusterCredentials?: RosClusterV2.ClusterCredentialsProperty | ros.IResolvable;

    /**
     * @Property clusterCustomConfiguration: Cluster post-processing scripts.
     */
    readonly clusterCustomConfiguration?: RosClusterV2.ClusterCustomConfigurationProperty | ros.IResolvable;

    /**
     * @Property clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    readonly clusterDescription?: string | ros.IResolvable;

    /**
     * @Property clusterMode: Cluster deployment type. Valid values:
     * - Integrated: Public cloud clustering.
     * - Hybrid: Hybrid cloud cluster.
     * - Custom: The cluster is customized
     */
    readonly clusterMode?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
     * - true: Cluster deletion protection is enabled.
     * - false: This turns off cluster deletion protection.
     * Default value: false
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values:
     * - true: Enterprise security groups are automatically created and used.
     * - false: Normal security groups are automatically created and used instead of enterprise security groups.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * @Property manager: The cluster manages node configuration.
     */
    readonly manager?: RosClusterV2.ManagerProperty | ros.IResolvable;

    /**
     * @Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
     */
    readonly maxCoreCount?: number | ros.IResolvable;

    /**
     * @Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
     */
    readonly maxCount?: number | ros.IResolvable;

    /**
     * @Property queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
     */
    readonly queues?: Array<RosClusterV2.QueuesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosClusterV2.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosClusterV2Props`
 *
 * @param properties - the TypeScript properties of a `RosClusterV2Props`
 *
 * @returns the result of the validation.
 */
function RosClusterV2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterCredentials', RosClusterV2_ClusterCredentialsPropertyValidator)(properties.clusterCredentials));
    if(properties.additionalPackages && (Array.isArray(properties.additionalPackages) || (typeof properties.additionalPackages) === 'string')) {
        errors.collect(ros.propertyValidator('additionalPackages', ros.validateLength)({
            data: properties.additionalPackages.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('additionalPackages', ros.listValidator(RosClusterV2_AdditionalPackagesPropertyValidator))(properties.additionalPackages));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.clusterMode && (typeof properties.clusterMode) !== 'object') {
        errors.collect(ros.propertyValidator('clusterMode', ros.validateAllowedValues)({
          data: properties.clusterMode,
          allowedValues: ["Integrated","Hybrid","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterMode', ros.validateString)(properties.clusterMode));
    if(properties.clusterCategory && (typeof properties.clusterCategory) !== 'object') {
        errors.collect(ros.propertyValidator('clusterCategory', ros.validateAllowedValues)({
          data: properties.clusterCategory,
          allowedValues: ["Standard","Serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterCategory', ros.validateString)(properties.clusterCategory));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.addons && (Array.isArray(properties.addons) || (typeof properties.addons) === 'string')) {
        errors.collect(ros.propertyValidator('addons', ros.validateLength)({
            data: properties.addons.length,
            min: 0,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosClusterV2_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    if(properties.maxCount && (typeof properties.maxCount) !== 'object') {
        errors.collect(ros.propertyValidator('maxCount', ros.validateRange)({
            data: properties.maxCount,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('maxCount', ros.validateNumber)(properties.maxCount));
    errors.collect(ros.propertyValidator('clientVersion', ros.validateString)(properties.clientVersion));
    errors.collect(ros.propertyValidator('manager', RosClusterV2_ManagerPropertyValidator)(properties.manager));
    errors.collect(ros.propertyValidator('sharedStorages', ros.requiredValidator)(properties.sharedStorages));
    errors.collect(ros.propertyValidator('sharedStorages', ros.listValidator(RosClusterV2_SharedStoragesPropertyValidator))(properties.sharedStorages));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    if(properties.clusterName && (Array.isArray(properties.clusterName) || (typeof properties.clusterName) === 'string')) {
        errors.collect(ros.propertyValidator('clusterName', ros.validateLength)({
            data: properties.clusterName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterCustomConfiguration', RosClusterV2_ClusterCustomConfigurationPropertyValidator)(properties.clusterCustomConfiguration));
    if(properties.queues && (Array.isArray(properties.queues) || (typeof properties.queues) === 'string')) {
        errors.collect(ros.propertyValidator('queues', ros.validateLength)({
            data: properties.queues.length,
            min: undefined,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('queues', ros.listValidator(RosClusterV2_QueuesPropertyValidator))(properties.queues));
    if(properties.clusterDescription && (Array.isArray(properties.clusterDescription) || (typeof properties.clusterDescription) === 'string')) {
        errors.collect(ros.propertyValidator('clusterDescription', ros.validateLength)({
            data: properties.clusterDescription.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('clusterDescription', ros.validateString)(properties.clusterDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosClusterV2_TagsPropertyValidator))(properties.tags));
    if(properties.maxCoreCount && (typeof properties.maxCoreCount) !== 'object') {
        errors.collect(ros.propertyValidator('maxCoreCount', ros.validateRange)({
            data: properties.maxCoreCount,
            min: 0,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('maxCoreCount', ros.validateNumber)(properties.maxCoreCount));
    return errors.wrap('supplied properties not correct for "RosClusterV2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterV2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2` resource.
 */
// @ts-ignore TS6133
function rosClusterV2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterV2PropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'SharedStorages': ros.listMapper(rosClusterV2SharedStoragesPropertyToRosTemplate)(properties.sharedStorages),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'AdditionalPackages': ros.listMapper(rosClusterV2AdditionalPackagesPropertyToRosTemplate)(properties.additionalPackages),
      'Addons': ros.listMapper(rosClusterV2AddonsPropertyToRosTemplate)(properties.addons),
      'ClientVersion': ros.stringToRosTemplate(properties.clientVersion),
      'ClusterCategory': ros.stringToRosTemplate(properties.clusterCategory),
      'ClusterCredentials': rosClusterV2ClusterCredentialsPropertyToRosTemplate(properties.clusterCredentials),
      'ClusterCustomConfiguration': rosClusterV2ClusterCustomConfigurationPropertyToRosTemplate(properties.clusterCustomConfiguration),
      'ClusterDescription': ros.stringToRosTemplate(properties.clusterDescription),
      'ClusterMode': ros.stringToRosTemplate(properties.clusterMode),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'Manager': rosClusterV2ManagerPropertyToRosTemplate(properties.manager),
      'MaxCoreCount': ros.numberToRosTemplate(properties.maxCoreCount),
      'MaxCount': ros.numberToRosTemplate(properties.maxCount),
      'Queues': ros.listMapper(rosClusterV2QueuesPropertyToRosTemplate)(properties.queues),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'Tags': ros.listMapper(rosClusterV2TagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::ClusterV2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterV2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
export class RosClusterV2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::ClusterV2";

    /**
     * @Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    public clusterName: string | ros.IResolvable;

    /**
     * @Property sharedStorages: The list of shared storage configurations.
     */
    public sharedStorages: Array<RosClusterV2.SharedStoragesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC used by the cluster.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch used by the cluster
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
     */
    public additionalPackages: Array<RosClusterV2.AdditionalPackagesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property addons: Cluster custom service component configuration to support only one component.
     */
    public addons: Array<RosClusterV2.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clientVersion: Cluster client version. By default, the latest version is used.
     */
    public clientVersion: string | ros.IResolvable | undefined;

    /**
     * @Property clusterCategory: Cluster series. Valid values:
     * - Standard: The standard version.
     * - Serverless: Hosted version
     */
    public clusterCategory: string | ros.IResolvable | undefined;

    /**
     * @Property clusterCredentials: Security credentials for the cluster.
     */
    public clusterCredentials: RosClusterV2.ClusterCredentialsProperty | ros.IResolvable | undefined;

    /**
     * @Property clusterCustomConfiguration: Cluster post-processing scripts.
     */
    public clusterCustomConfiguration: RosClusterV2.ClusterCustomConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    public clusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property clusterMode: Cluster deployment type. Valid values:
     * - Integrated: Public cloud clustering.
     * - Hybrid: Hybrid cloud cluster.
     * - Custom: The cluster is customized
     */
    public clusterMode: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
     * - true: Cluster deletion protection is enabled.
     * - false: This turns off cluster deletion protection.
     * Default value: false
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values:
     * - true: Enterprise security groups are automatically created and used.
     * - false: Normal security groups are automatically created and used instead of enterprise security groups.
     */
    public isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;

    /**
     * @Property manager: The cluster manages node configuration.
     */
    public manager: RosClusterV2.ManagerProperty | ros.IResolvable | undefined;

    /**
     * @Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
     */
    public maxCoreCount: number | ros.IResolvable | undefined;

    /**
     * @Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
     */
    public maxCount: number | ros.IResolvable | undefined;

    /**
     * @Property queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
     */
    public queues: Array<RosClusterV2.QueuesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosClusterV2.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterV2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterV2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.sharedStorages = props.sharedStorages;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.additionalPackages = props.additionalPackages;
        this.addons = props.addons;
        this.clientVersion = props.clientVersion;
        this.clusterCategory = props.clusterCategory;
        this.clusterCredentials = props.clusterCredentials;
        this.clusterCustomConfiguration = props.clusterCustomConfiguration;
        this.clusterDescription = props.clusterDescription;
        this.clusterMode = props.clusterMode;
        this.deletionProtection = props.deletionProtection;
        this.isEnterpriseSecurityGroup = props.isEnterpriseSecurityGroup;
        this.manager = props.manager;
        this.maxCoreCount = props.maxCoreCount;
        this.maxCount = props.maxCount;
        this.queues = props.queues;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterName: this.clusterName,
            sharedStorages: this.sharedStorages,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            additionalPackages: this.additionalPackages,
            addons: this.addons,
            clientVersion: this.clientVersion,
            clusterCategory: this.clusterCategory,
            clusterCredentials: this.clusterCredentials,
            clusterCustomConfiguration: this.clusterCustomConfiguration,
            clusterDescription: this.clusterDescription,
            clusterMode: this.clusterMode,
            deletionProtection: this.deletionProtection,
            isEnterpriseSecurityGroup: this.isEnterpriseSecurityGroup,
            manager: this.manager,
            maxCoreCount: this.maxCoreCount,
            maxCount: this.maxCount,
            queues: this.queues,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterV2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface AdditionalPackagesProperty {
        /**
         * @Property version: The version of the software package.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property name: The name of the software package.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AdditionalPackagesProperty`
 *
 * @param properties - the TypeScript properties of a `AdditionalPackagesProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_AdditionalPackagesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AdditionalPackagesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.AdditionalPackages` resource
 *
 * @param properties - the TypeScript properties of a `AdditionalPackagesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.AdditionalPackages` resource.
 */
// @ts-ignore TS6133
function rosClusterV2AdditionalPackagesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_AdditionalPackagesPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property version: The version of the custom service component.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property servicesSpec: The configuration of the custom service component.
         */
        readonly servicesSpec?: string | ros.IResolvable;
        /**
         * @Property resourcesSpec: The resource configuration of the custom service component.
         */
        readonly resourcesSpec?: string | ros.IResolvable;
        /**
         * @Property name: The name of the custom service component.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('servicesSpec', ros.validateString)(properties.servicesSpec));
    errors.collect(ros.propertyValidator('resourcesSpec', ros.validateString)(properties.resourcesSpec));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Addons` resource.
 */
// @ts-ignore TS6133
function rosClusterV2AddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'ServicesSpec': ros.stringToRosTemplate(properties.servicesSpec),
      'ResourcesSpec': ros.stringToRosTemplate(properties.resourcesSpec),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ClusterCredentialsProperty {
        /**
         * @Property keyPairName: Key pair name. The length is 2~128 English or Chinese characters. Must begin with a lowercase letter or Chinese, not http:\/\/ or https:\/\/. You can include a number, a semi-colon (:), an underscore (_), or a dash (-).
         */
        readonly keyPairName?: string | ros.IResolvable;
        /**
         * @Property password: The root password of the login node. The length is 8 to 20 characters and must contain all three types of characters: uppercase and lowercase letters, numbers and special symbols. Special symbols can be: () ~! @ # $% ^ & * - = + {} [] :; '< >,.? \/
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ClusterCredentialsProperty`
 *
 * @param properties - the TypeScript properties of a `ClusterCredentialsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ClusterCredentialsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.keyPairName && (Array.isArray(properties.keyPairName) || (typeof properties.keyPairName) === 'string')) {
        errors.collect(ros.propertyValidator('keyPairName', ros.validateLength)({
            data: properties.keyPairName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "ClusterCredentialsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ClusterCredentials` resource
 *
 * @param properties - the TypeScript properties of a `ClusterCredentialsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ClusterCredentials` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ClusterCredentialsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ClusterCredentialsPropertyValidator(properties).assertSuccess();
    return {
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ClusterCustomConfigurationProperty {
        /**
         * @Property script: Where to download the post-processing script.
         */
        readonly script?: string | ros.IResolvable;
        /**
         * @Property args: Execution parameters for the script after installation.
         */
        readonly args?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ClusterCustomConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ClusterCustomConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ClusterCustomConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('script', ros.validateString)(properties.script));
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    return errors.wrap('supplied properties not correct for "ClusterCustomConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ClusterCustomConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `ClusterCustomConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ClusterCustomConfiguration` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ClusterCustomConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ClusterCustomConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'Script': ros.stringToRosTemplate(properties.script),
      'Args': ros.stringToRosTemplate(properties.args),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ComputeNodesProperty {
        /**
         * @Property systemDisk: Node system disk configuration details.
         */
        readonly systemDisk: RosClusterV2.SystemDiskProperty | ros.IResolvable;
        /**
         * @Property enableHt: Whether to enable the hyper-threading feature. Valid values:
     * - true: Enable the hyper-threading feature.
     * - false: Disable the hyper-threading feature.
         */
        readonly enableHt?: boolean | ros.IResolvable;
        /**
         * @Property dataDisks: Data disk information collection list.
         */
        readonly dataDisks?: Array<RosClusterV2.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property imageId: ECS image ID.
         */
        readonly imageId: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: Sets the maximum hourly price for the instance. Up to three decimal places are supported, and the parameter SpotStrategy takes effect with a value of SpotWithPriceLimit.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property duration: Retention time, in hours, for a preemptive instance. Default value: 1. Valid values:
     * - 1: Aliyun will ensure that the instance will run for 1 hour after creation and will not be released automatically; After more than one hour, the system automatically compares the bid with the market price and checks the resource inventory to decide whether to hold or reclaim the instance.
     * - 0: After the creation, Aliyun does not guarantee that the instance will run for 1 hour. The system will automatically compare the bid price with the market price and check the resource inventory to determine the holding and recycling of the instance.
     * Aliyun will send you a notification through ECS system event 5 minutes before instance collection. Preemptive instances are charged per second, and it is recommended that you choose the appropriate retention time based on the specific task execution time.
         */
        readonly duration?: number | ros.IResolvable;
        /**
         * @Property instanceType: ECS instance type.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The bidding strategy for pay-as-you-go instances. Applies when the parameter InstanceChargeType is PostPaid. Valid values:
     * - NoSpot: Normal pay-as-you-go instance
     * - SpotWithPriceLimit: A preemptive instance of setting a cap price.
     * - SpotAsPriceGo: The system automatically bids, following the current market actual price.
     * Default value: NoSpot
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ComputeNodesProperty`
 *
 * @param properties - the TypeScript properties of a `ComputeNodesProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ComputeNodesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('systemDisk', ros.requiredValidator)(properties.systemDisk));
    errors.collect(ros.propertyValidator('systemDisk', RosClusterV2_SystemDiskPropertyValidator)(properties.systemDisk));
    errors.collect(ros.propertyValidator('enableHt', ros.validateBoolean)(properties.enableHt));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosClusterV2_DataDisksPropertyValidator))(properties.dataDisks));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "ComputeNodesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ComputeNodes` resource
 *
 * @param properties - the TypeScript properties of a `ComputeNodesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ComputeNodes` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ComputeNodesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ComputeNodesPropertyValidator(properties).assertSuccess();
    return {
      'SystemDisk': rosClusterV2SystemDiskPropertyToRosTemplate(properties.systemDisk),
      'EnableHT': ros.booleanToRosTemplate(properties.enableHt),
      'DataDisks': ros.listMapper(rosClusterV2DataDisksPropertyToRosTemplate)(properties.dataDisks),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'SpotPriceLimit': ros.numberToRosTemplate(properties.spotPriceLimit),
      'Duration': ros.numberToRosTemplate(properties.duration),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface DNSProperty {
        /**
         * @Property type: DNS type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property version: DNS version.
         */
        readonly version?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DNSProperty`
 *
 * @param properties - the TypeScript properties of a `DNSProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_DNSPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    return errors.wrap('supplied properties not correct for "DNSProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DNS` resource
 *
 * @param properties - the TypeScript properties of a `DNSProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DNS` resource.
 */
// @ts-ignore TS6133
function rosClusterV2DNSPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_DNSPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Version': ros.stringToRosTemplate(properties.version),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: The size of the data disk, in GiB. Valid values:
     * - cloud_efficiency: 40 ~ 32768.
     * - cloud_ssd: 40 ~ 32768.
     * - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Specifies whether to release the data disk when the instance is released. Valid values: 
     * - true (default): The data disk is released when the instance is released. - false: The data disk is retained when the instance is released.
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property level: When creating ESSD cloud disk as data disk, set the performance level of cloud disk. Valid values:
     * - PL0: The highest random read and write IOPS of a single disk is 10,000.
     * - PL1 (default) : The maximum random read\/write IOPS of a single disk is 50,000.
     * - PL2: The highest random read and write IOPS of a single disk is 100,000.
     * - PL3: The highest random read\/write IOPS of a single disk is 1 million.
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the data disk. The value must start with a forward slash (\/).
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 40,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosClusterV2DataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
      'DeleteWithInstance': ros.booleanToRosTemplate(properties.deleteWithInstance),
      'Level': ros.stringToRosTemplate(properties.level),
      'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface DirectoryServiceProperty {
        /**
         * @Property type: Domain account type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property version: Domain account version.
         */
        readonly version?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DirectoryServiceProperty`
 *
 * @param properties - the TypeScript properties of a `DirectoryServiceProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_DirectoryServicePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    return errors.wrap('supplied properties not correct for "DirectoryServiceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DirectoryService` resource
 *
 * @param properties - the TypeScript properties of a `DirectoryServiceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.DirectoryService` resource.
 */
// @ts-ignore TS6133
function rosClusterV2DirectoryServicePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_DirectoryServicePropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Version': ros.stringToRosTemplate(properties.version),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ManagerProperty {
        /**
         * @Property managerNode: Public description of ECS resources with parameters such as payment type, instance specification, image, system disk, and data disk
         */
        readonly managerNode?: RosClusterV2.ManagerNodeProperty | ros.IResolvable;
        /**
         * @Property scheduler: Scheduler service configuration information.
         */
        readonly scheduler?: RosClusterV2.SchedulerProperty | ros.IResolvable;
        /**
         * @Property dns: DNS service configuration information.
         */
        readonly dns?: RosClusterV2.DNSProperty | ros.IResolvable;
        /**
         * @Property directoryService: Domain account service configuration information.
         */
        readonly directoryService?: RosClusterV2.DirectoryServiceProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagerProperty`
 *
 * @param properties - the TypeScript properties of a `ManagerProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ManagerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('managerNode', RosClusterV2_ManagerNodePropertyValidator)(properties.managerNode));
    errors.collect(ros.propertyValidator('scheduler', RosClusterV2_SchedulerPropertyValidator)(properties.scheduler));
    errors.collect(ros.propertyValidator('dns', RosClusterV2_DNSPropertyValidator)(properties.dns));
    errors.collect(ros.propertyValidator('directoryService', RosClusterV2_DirectoryServicePropertyValidator)(properties.directoryService));
    return errors.wrap('supplied properties not correct for "ManagerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Manager` resource
 *
 * @param properties - the TypeScript properties of a `ManagerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Manager` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ManagerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ManagerPropertyValidator(properties).assertSuccess();
    return {
      'ManagerNode': rosClusterV2ManagerNodePropertyToRosTemplate(properties.managerNode),
      'Scheduler': rosClusterV2SchedulerPropertyToRosTemplate(properties.scheduler),
      'DNS': rosClusterV2DNSPropertyToRosTemplate(properties.dns),
      'DirectoryService': rosClusterV2DirectoryServicePropertyToRosTemplate(properties.directoryService),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ManagerNodeProperty {
        /**
         * @Property systemDisk: Node system disk configuration details.
         */
        readonly systemDisk: RosClusterV2.ManagerNodeSystemDiskProperty | ros.IResolvable;
        /**
         * @Property autoRenewPeriod: Length of renewal for a single automatic renewal. Valid values:
     * - When PeriodUnit=Week: 1, 2, 3.
     * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
     * Default value: 1
         */
        readonly autoRenewPeriod?: number | ros.IResolvable;
        /**
         * @Property enableHt: Whether to enable the hyper-threading feature. Valid values:
     * - true: Enable the hyper-threading feature.
     * - false: Disable the hyper-threading feature.
         */
        readonly enableHt?: boolean | ros.IResolvable;
        /**
         * @Property dataDisks: Data disk information collection list.
         */
        readonly dataDisks?: Array<RosClusterV2.ManagerNodeDataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceChargeType: How the instance is paid. Valid values:
     * - PrePaid: A year and a month.
     * - PostPaid: pay-as-you-go
     * Default value: PostPaid
     * You must confirm that your account supports balance payment or credit payment, otherwise an error message with InvalidPayMethod will be returned.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property autoRenew: Whether to automatically renew. The InstanceChargeType parameter takes effect when it has a value of PrePaid. Valid values:
     * - true: Automatic renewal.
     * - false: No automatic renewal.
     * Default value: false
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property imageId: ECS image ID.
         */
        readonly imageId: string | ros.IResolvable;
        /**
         * @Property period: The duration of the purchase of the resource in units specified by PeriodUnit. It is required when InstanceChargeType is set to PrePaid. Once DedicatedHostId is specified, the value cannot exceed the subscription duration of the dedicated host. Valid values:
     * - When PeriodUnit=Week, Period value: 1, 2, 3, 4.
     * - When PeriodUnit=Month, Period value: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property instanceType: ECS instance type.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property periodUnit: A unit of time for annual and monthly billing. Valid values: Week, Month (default).
         */
        readonly periodUnit?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagerNodeProperty`
 *
 * @param properties - the TypeScript properties of a `ManagerNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ManagerNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('systemDisk', ros.requiredValidator)(properties.systemDisk));
    errors.collect(ros.propertyValidator('systemDisk', RosClusterV2_ManagerNodeSystemDiskPropertyValidator)(properties.systemDisk));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('enableHt', ros.validateBoolean)(properties.enableHt));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosClusterV2_ManagerNodeDataDisksPropertyValidator))(properties.dataDisks));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "ManagerNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNode` resource
 *
 * @param properties - the TypeScript properties of a `ManagerNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNode` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ManagerNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ManagerNodePropertyValidator(properties).assertSuccess();
    return {
      'SystemDisk': rosClusterV2ManagerNodeSystemDiskPropertyToRosTemplate(properties.systemDisk),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'EnableHT': ros.booleanToRosTemplate(properties.enableHt),
      'DataDisks': ros.listMapper(rosClusterV2ManagerNodeDataDisksPropertyToRosTemplate)(properties.dataDisks),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'Period': ros.numberToRosTemplate(properties.period),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ManagerNodeDataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: The size of the data disk, in GiB. Valid values:
     * - cloud_efficiency: 40 ~ 32768.
     * - cloud_ssd: 40 ~ 32768.
     * - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Specifies whether to release the data disk when the instance is released. Valid values: 
     * - true (default): The data disk is released when the instance is released. - false: The data disk is retained when the instance is released.
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property level: When creating ESSD cloud disk as data disk, set the performance level of cloud disk. Valid values:
     * - PL0: The highest random read and write IOPS of a single disk is 10,000.
     * - PL1 (default) : The maximum random read\/write IOPS of a single disk is 50,000.
     * - PL2: The highest random read and write IOPS of a single disk is 100,000.
     * - PL3: The highest random read\/write IOPS of a single disk is 1 million.
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the data disk. The value must start with a forward slash (\/).
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagerNodeDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `ManagerNodeDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ManagerNodeDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 40,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "ManagerNodeDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNodeDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `ManagerNodeDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNodeDataDisks` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ManagerNodeDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ManagerNodeDataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
      'DeleteWithInstance': ros.booleanToRosTemplate(properties.deleteWithInstance),
      'Level': ros.stringToRosTemplate(properties.level),
      'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface ManagerNodeSystemDiskProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: The size of the system disk, in GiB. Valid values:
     * - cloud_efficiency: 40 ~ 32768.
     * - cloud_ssd: 40 ~ 32768
     * - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
     * - cloud: 40 ~ 500.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property level: When creating ESSD cloud disk as system disk, set the performance level of cloud disk. Valid values:
     * - PL0: The highest random read and write IOPS of a single disk is 10,000.
     * - PL1 (default) : The maximum random read\/write IOPS of a single disk is 50,000.
     * - PL2: The highest random read and write IOPS of a single disk is 100,000.
     * - PL3: The highest random read\/write IOPS of a single disk is 1 million.
         */
        readonly level?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagerNodeSystemDiskProperty`
 *
 * @param properties - the TypeScript properties of a `ManagerNodeSystemDiskProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_ManagerNodeSystemDiskPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 40,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    if(properties.level && (typeof properties.level) !== 'object') {
        errors.collect(ros.propertyValidator('level', ros.validateAllowedValues)({
          data: properties.level,
          allowedValues: ["PL0","PL1","PL2","PL3"],
        }));
    }
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    return errors.wrap('supplied properties not correct for "ManagerNodeSystemDiskProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNodeSystemDisk` resource
 *
 * @param properties - the TypeScript properties of a `ManagerNodeSystemDiskProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.ManagerNodeSystemDisk` resource.
 */
// @ts-ignore TS6133
function rosClusterV2ManagerNodeSystemDiskPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_ManagerNodeSystemDiskPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
      'Level': ros.stringToRosTemplate(properties.level),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface QueuesProperty {
        /**
         * @Property vSwitchIds: List of virtual switches available to compute nodes in the queue. Range from 1 to 5.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property computeNodes: List of compute nodes in the queue. Range from 0 to 10.
         */
        readonly computeNodes?: Array<RosClusterV2.ComputeNodesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property interConnect: Type of network between nodes in the queue. Valid values: vpc, eRDMA.
         */
        readonly interConnect?: string | ros.IResolvable;
        /**
         * @Property maxCount: The maximum number of nodes in the queue.
         */
        readonly maxCount?: number | ros.IResolvable;
        /**
         * @Property keepAliveNodes: List of nodes in the queue with deletion protection enabled.
         */
        readonly keepAliveNodes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property hostnamePrefix: The hostname prefix of the compute nodes in the queue.
         */
        readonly hostnamePrefix?: string | ros.IResolvable;
        /**
         * @Property allocationStrategy: The allocation strategy of the queue.
         */
        readonly allocationStrategy?: string | ros.IResolvable;
        /**
         * @Property enableScaleIn: Whether to enable automatic shrinkage. Valid values: 
     * - true: enables automatic shrinkage. 
     * - false: disables automatic shrinkage.
         */
        readonly enableScaleIn?: boolean | ros.IResolvable;
        /**
         * @Property maxCountPerCycle: The number of computing nodes that the queue can maximally expand in each scaling round.
         */
        readonly maxCountPerCycle?: number | ros.IResolvable;
        /**
         * @Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
         */
        readonly hostnameSuffix?: string | ros.IResolvable;
        /**
         * @Property ramRole: The RAM role name attached to the compute nodes of the queue.
         */
        readonly ramRole?: string | ros.IResolvable;
        /**
         * @Property enableScaleOut: Whether to enable automatic scaling. Valid values: 
     * - true: enables automatic scaling. 
     * - false: disables automatic scaling.
         */
        readonly enableScaleOut?: boolean | ros.IResolvable;
        /**
         * @Property queueName: Queue name. The length is from 1 to 15 characters. It supports characters in the Unicode letter class (including English and numbers), and can include half-angular periods (.).
         */
        readonly queueName: string | ros.IResolvable;
        /**
         * @Property initialCount: The initial number of nodes in the queue.
         */
        readonly initialCount?: number | ros.IResolvable;
        /**
         * @Property minCount: The minimum number of nodes in the queue.
         */
        readonly minCount?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueuesProperty`
 *
 * @param properties - the TypeScript properties of a `QueuesProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_QueuesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    if(properties.computeNodes && (Array.isArray(properties.computeNodes) || (typeof properties.computeNodes) === 'string')) {
        errors.collect(ros.propertyValidator('computeNodes', ros.validateLength)({
            data: properties.computeNodes.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('computeNodes', ros.listValidator(RosClusterV2_ComputeNodesPropertyValidator))(properties.computeNodes));
    if(properties.interConnect && (typeof properties.interConnect) !== 'object') {
        errors.collect(ros.propertyValidator('interConnect', ros.validateAllowedValues)({
          data: properties.interConnect,
          allowedValues: ["vpc","eRDMA"],
        }));
    }
    errors.collect(ros.propertyValidator('interConnect', ros.validateString)(properties.interConnect));
    if(properties.maxCount && (typeof properties.maxCount) !== 'object') {
        errors.collect(ros.propertyValidator('maxCount', ros.validateRange)({
            data: properties.maxCount,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('maxCount', ros.validateNumber)(properties.maxCount));
    if(properties.keepAliveNodes && (Array.isArray(properties.keepAliveNodes) || (typeof properties.keepAliveNodes) === 'string')) {
        errors.collect(ros.propertyValidator('keepAliveNodes', ros.validateLength)({
            data: properties.keepAliveNodes.length,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('keepAliveNodes', ros.listValidator(ros.validateString))(properties.keepAliveNodes));
    errors.collect(ros.propertyValidator('hostnamePrefix', ros.validateString)(properties.hostnamePrefix));
    errors.collect(ros.propertyValidator('allocationStrategy', ros.validateString)(properties.allocationStrategy));
    errors.collect(ros.propertyValidator('enableScaleIn', ros.validateBoolean)(properties.enableScaleIn));
    if(properties.maxCountPerCycle && (typeof properties.maxCountPerCycle) !== 'object') {
        errors.collect(ros.propertyValidator('maxCountPerCycle', ros.validateRange)({
            data: properties.maxCountPerCycle,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('maxCountPerCycle', ros.validateNumber)(properties.maxCountPerCycle));
    errors.collect(ros.propertyValidator('hostnameSuffix', ros.validateString)(properties.hostnameSuffix));
    errors.collect(ros.propertyValidator('ramRole', ros.validateString)(properties.ramRole));
    errors.collect(ros.propertyValidator('enableScaleOut', ros.validateBoolean)(properties.enableScaleOut));
    errors.collect(ros.propertyValidator('queueName', ros.requiredValidator)(properties.queueName));
    if(properties.queueName && (Array.isArray(properties.queueName) || (typeof properties.queueName) === 'string')) {
        errors.collect(ros.propertyValidator('queueName', ros.validateLength)({
            data: properties.queueName.length,
            min: 1,
            max: 15,
          }));
    }
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    if(properties.initialCount && (typeof properties.initialCount) !== 'object') {
        errors.collect(ros.propertyValidator('initialCount', ros.validateRange)({
            data: properties.initialCount,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('initialCount', ros.validateNumber)(properties.initialCount));
    if(properties.minCount && (typeof properties.minCount) !== 'object') {
        errors.collect(ros.propertyValidator('minCount', ros.validateRange)({
            data: properties.minCount,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('minCount', ros.validateNumber)(properties.minCount));
    return errors.wrap('supplied properties not correct for "QueuesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Queues` resource
 *
 * @param properties - the TypeScript properties of a `QueuesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Queues` resource.
 */
// @ts-ignore TS6133
function rosClusterV2QueuesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_QueuesPropertyValidator(properties).assertSuccess();
    return {
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'ComputeNodes': ros.listMapper(rosClusterV2ComputeNodesPropertyToRosTemplate)(properties.computeNodes),
      'InterConnect': ros.stringToRosTemplate(properties.interConnect),
      'MaxCount': ros.numberToRosTemplate(properties.maxCount),
      'KeepAliveNodes': ros.listMapper(ros.stringToRosTemplate)(properties.keepAliveNodes),
      'HostnamePrefix': ros.stringToRosTemplate(properties.hostnamePrefix),
      'AllocationStrategy': ros.stringToRosTemplate(properties.allocationStrategy),
      'EnableScaleIn': ros.booleanToRosTemplate(properties.enableScaleIn),
      'MaxCountPerCycle': ros.numberToRosTemplate(properties.maxCountPerCycle),
      'HostnameSuffix': ros.stringToRosTemplate(properties.hostnameSuffix),
      'RamRole': ros.stringToRosTemplate(properties.ramRole),
      'EnableScaleOut': ros.booleanToRosTemplate(properties.enableScaleOut),
      'QueueName': ros.stringToRosTemplate(properties.queueName),
      'InitialCount': ros.numberToRosTemplate(properties.initialCount),
      'MinCount': ros.numberToRosTemplate(properties.minCount),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface SchedulerProperty {
        /**
         * @Property type: Scheduler type. Valid values:
     * - SLURM
     * - PBS
     * - OPENGRIDSCHEDULER
     * - LSF_PLUGIN
     * - PBS_PLUGIN
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property version: Scheduler version.
         */
        readonly version?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SchedulerProperty`
 *
 * @param properties - the TypeScript properties of a `SchedulerProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_SchedulerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["SLURM","PBS","OPENGRIDSCHEDULER","LSF_PLUGIN","PBS_PLUGIN"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    return errors.wrap('supplied properties not correct for "SchedulerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Scheduler` resource
 *
 * @param properties - the TypeScript properties of a `SchedulerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Scheduler` resource.
 */
// @ts-ignore TS6133
function rosClusterV2SchedulerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_SchedulerPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Version': ros.stringToRosTemplate(properties.version),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface SharedStoragesProperty {
        /**
         * @Property mountDirectory: The local mount directory to mount the file system.
         */
        readonly mountDirectory?: string | ros.IResolvable;
        /**
         * @Property mountTargetDomain: The mount target domain of the file system.
         */
        readonly mountTargetDomain: string | ros.IResolvable;
        /**
         * @Property protocolType: The protocol type of the file system. Valid values: NFS, SMB.
         */
        readonly protocolType?: string | ros.IResolvable;
        /**
         * @Property fileSystemId: The ID of the file system.
         */
        readonly fileSystemId: string | ros.IResolvable;
        /**
         * @Property mountOptions: The mount options of the file system.
         */
        readonly mountOptions?: string | ros.IResolvable;
        /**
         * @Property nasDirectory: Mounted filesystems require mounted remote directories.
         */
        readonly nasDirectory?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SharedStoragesProperty`
 *
 * @param properties - the TypeScript properties of a `SharedStoragesProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_SharedStoragesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountDirectory', ros.validateString)(properties.mountDirectory));
    errors.collect(ros.propertyValidator('mountTargetDomain', ros.requiredValidator)(properties.mountTargetDomain));
    errors.collect(ros.propertyValidator('mountTargetDomain', ros.validateString)(properties.mountTargetDomain));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["NFS","SMB"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('mountOptions', ros.validateString)(properties.mountOptions));
    errors.collect(ros.propertyValidator('nasDirectory', ros.validateString)(properties.nasDirectory));
    return errors.wrap('supplied properties not correct for "SharedStoragesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.SharedStorages` resource
 *
 * @param properties - the TypeScript properties of a `SharedStoragesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.SharedStorages` resource.
 */
// @ts-ignore TS6133
function rosClusterV2SharedStoragesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_SharedStoragesPropertyValidator(properties).assertSuccess();
    return {
      'MountDirectory': ros.stringToRosTemplate(properties.mountDirectory),
      'MountTargetDomain': ros.stringToRosTemplate(properties.mountTargetDomain),
      'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'MountOptions': ros.stringToRosTemplate(properties.mountOptions),
      'NASDirectory': ros.stringToRosTemplate(properties.nasDirectory),
    };
}

export namespace RosClusterV2 {
    /**
     * @stability external
     */
    export interface SystemDiskProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: The size of the system disk, in GiB. Valid values:
     * - cloud_efficiency: 40 ~ 32768.
     * - cloud_ssd: 40 ~ 32768
     * - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
     * - cloud: 40 ~ 500.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property level: When creating ESSD cloud disk as system disk, set the performance level of cloud disk. Valid values:
     * - PL0: The highest random read and write IOPS of a single disk is 10,000.
     * - PL1 (default) : The maximum random read\/write IOPS of a single disk is 50,000.
     * - PL2: The highest random read and write IOPS of a single disk is 100,000.
     * - PL3: The highest random read\/write IOPS of a single disk is 1 million.
         */
        readonly level?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SystemDiskProperty`
 *
 * @param properties - the TypeScript properties of a `SystemDiskProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterV2_SystemDiskPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 40,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    if(properties.level && (typeof properties.level) !== 'object') {
        errors.collect(ros.propertyValidator('level', ros.validateAllowedValues)({
          data: properties.level,
          allowedValues: ["PL0","PL1","PL2","PL3"],
        }));
    }
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    return errors.wrap('supplied properties not correct for "SystemDiskProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.SystemDisk` resource
 *
 * @param properties - the TypeScript properties of a `SystemDiskProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.SystemDisk` resource.
 */
// @ts-ignore TS6133
function rosClusterV2SystemDiskPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_SystemDiskPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
      'Level': ros.stringToRosTemplate(properties.level),
    };
}

export namespace RosClusterV2 {
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
function RosClusterV2_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::ClusterV2.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterV2TagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterV2_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
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
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'Users': ros.listMapper(rosUsersUsersPropertyToRosTemplate)(properties.users),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Users`, which is used to add one or more users to a specified cluster.
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
      'Group': ros.stringToRosTemplate(properties.group),
      'Password': ros.stringToRosTemplate(properties.password),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

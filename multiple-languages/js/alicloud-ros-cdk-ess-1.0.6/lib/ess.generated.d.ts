import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ESS::AlarmTask`
 */
export interface RosAlarmTaskProps {
    /**
     * @Property alarmAction: Alarm Actions
     */
    readonly alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property metricName: Metric Name
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property threshold: Threshold
     */
    readonly threshold: number | ros.IResolvable;
    /**
     * @Property comparisonOperator: Comparison Operator
     */
    readonly comparisonOperator?: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property evaluationCount: Evaluation Count
     */
    readonly evaluationCount?: number | ros.IResolvable;
    /**
     * @Property groupId: Group Id
     */
    readonly groupId?: number | ros.IResolvable;
    /**
     * @Property metricType: Metric Type
     */
    readonly metricType?: string | ros.IResolvable;
    /**
     * @Property name: Name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property period: Period
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property statistics: Statistics
     */
    readonly statistics?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::AlarmTask`
 */
export declare class RosAlarmTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTask";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmAction: Alarm Actions
     */
    alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property metricName: Metric Name
     */
    metricName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property threshold: Threshold
     */
    threshold: number | ros.IResolvable;
    /**
     * @Property comparisonOperator: Comparison Operator
     */
    comparisonOperator: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dimensions: Dimensions
     */
    dimensions: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property evaluationCount: Evaluation Count
     */
    evaluationCount: number | ros.IResolvable | undefined;
    /**
     * @Property groupId: Group Id
     */
    groupId: number | ros.IResolvable | undefined;
    /**
     * @Property metricType: Metric Type
     */
    metricType: string | ros.IResolvable | undefined;
    /**
     * @Property name: Name
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property period: Period
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property statistics: Statistics
     */
    statistics: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAlarmTask {
    /**
     * @stability external
     */
    interface DimensionsProperty {
        /**
         * @Property dimensionValue: DimensionValue
         */
        readonly dimensionValue: string | ros.IResolvable;
        /**
         * @Property dimensionKey: DimensionKey
         */
        readonly dimensionKey: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`
 */
export interface RosAlarmTaskEnableProps {
    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    readonly alarmTaskId: string | ros.IResolvable;
    /**
     * @Property enable: Enable alarm task or not
     */
    readonly enable: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::AlarmTaskEnable`
 */
export declare class RosAlarmTaskEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTaskEnable";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    alarmTaskId: string | ros.IResolvable;
    /**
     * @Property enable: Enable alarm task or not
     */
    enable: boolean | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ESS::AlarmTaskEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskEnableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ESS::LifecycleHook`
 */
export interface RosLifecycleHookProps {
    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    readonly lifecycleTransition: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    readonly defaultResult?: string | ros.IResolvable;
    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    readonly heartbeatTimeout?: number | ros.IResolvable;
    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    readonly lifecycleHookName?: string | ros.IResolvable;
    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
     */
    readonly notificationArn?: string | ros.IResolvable;
    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    readonly notificationMetadata?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::LifecycleHook`
 */
export declare class RosLifecycleHook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::LifecycleHook";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LifecycleHookId: The lifecycle hook ID
     */
    readonly attrLifecycleHookId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    lifecycleTransition: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    defaultResult: string | ros.IResolvable | undefined;
    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    heartbeatTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    lifecycleHookName: string | ros.IResolvable | undefined;
    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
     */
    notificationArn: string | ros.IResolvable | undefined;
    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    notificationMetadata: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::LifecycleHook`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLifecycleHookProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ESS::ScalingConfiguration`
 */
export interface RosScalingConfigurationProps {
    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;
    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    readonly instanceTypes?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;
    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    readonly scalingConfigurationName?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    readonly spotPriceLimitForInstanceType?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    readonly tagList?: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::ScalingConfiguration`
 */
export declare class RosScalingConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingConfiguration";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScalingConfigurationId: The scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    creditSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    diskMappings: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: ecs supported instance type.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    instanceTypes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    internetMaxBandwidthIn: number | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    loadBalancerWeight: number | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    scalingConfigurationName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    spotPriceLimit: number | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    spotPriceLimitForInstanceType: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    systemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    tagList: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type to create.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssdDefault is cloud.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: A device name where the volume will be attached in the system at /dev/xvd[id]. Range from '/dev/xvdb' to '/dev/xvdz'.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of an ESSD.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, in GB. Must be equal or greater than the size of the snapshot. It is safe to leave this blank and have the Compute service infer the size.
         */
        readonly size?: string | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface TagListProperty {
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
 * Properties for defining a `ALIYUN::ESS::ScalingGroup`
 */
export interface RosScalingGroupProps {
    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly maxSize: number | ros.IResolvable;
    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly minSize: number | ros.IResolvable;
    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    readonly compensateWithOnDemand?: boolean | ros.IResolvable;
    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    readonly containerGroupId?: string | ros.IResolvable;
    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    readonly dbInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    readonly defaultCooldown?: number | ros.IResolvable;
    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    readonly desiredCapacity?: number | ros.IResolvable;
    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    readonly groupDeletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    readonly healthCheckType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    readonly launchTemplateId?: string | ros.IResolvable;
    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    readonly loadBalancerIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     */
    readonly multiAzPolicy?: string | ros.IResolvable;
    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    readonly notificationConfigurations?: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     */
    readonly onDemandBaseCapacity?: number | ros.IResolvable;
    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     */
    readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    readonly protectedInstances?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * OldestInstance: removes the first ECS instance attached to the scaling group.
     * NewestInstance: removes the first ECS instance attached to the scaling group.
     * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
     */
    readonly removalPolicys?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    readonly scalingGroupName?: string | ros.IResolvable;
    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    readonly scalingPolicy?: string | ros.IResolvable;
    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     */
    readonly spotInstancePools?: number | ros.IResolvable;
    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    readonly spotInstanceRemedy?: boolean | ros.IResolvable;
    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    readonly standbyInstances?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosScalingGroup.TagsProperty[];
    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::ScalingGroup`
 */
export declare class RosScalingGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScalingGroupId: Scaling group Id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupName: Scaling group name
     */
    readonly attrScalingGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    maxSize: number | ros.IResolvable;
    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    minSize: number | ros.IResolvable;
    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    compensateWithOnDemand: boolean | ros.IResolvable | undefined;
    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    containerGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    dbInstanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    defaultCooldown: number | ros.IResolvable | undefined;
    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    desiredCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    groupDeletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    healthCheckType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    loadBalancerIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     */
    multiAzPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    notificationConfigurations: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     */
    onDemandBaseCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     */
    onDemandPercentageAboveBaseCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    protectedInstances: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * OldestInstance: removes the first ECS instance attached to the scaling group.
     * NewestInstance: removes the first ECS instance attached to the scaling group.
     * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
     */
    removalPolicys: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    scalingGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    scalingPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     */
    spotInstancePools: number | ros.IResolvable | undefined;
    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    spotInstanceRemedy: boolean | ros.IResolvable | undefined;
    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    standbyInstances: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosScalingGroup.TagsProperty[] | undefined;
    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingGroup {
    /**
     * @stability external
     */
    interface NotificationConfigurationsProperty {
        /**
         * @Property notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
         */
        readonly notificationArn: string | ros.IResolvable;
        /**
         * @Property notificationTypes: Ess events and resource change notification types. Possible values:
     * AUTOSCALING:SCALE_OUT_SUCCESS
     * AUTOSCALING:SCALE_IN_SUCCESS
     * AUTOSCALING:SCALE_OUT_ERROR
     * AUTOSCALING:SCALE_IN_ERROR
     * AUTOSCALING:SCALE_REJECT
     * AUTOSCALING:SCALE_OUT_START
     * AUTOSCALING:SCALE_IN_START
     * AUTOSCALING:SCHEDULE_TASK_EXPIRING
         */
        readonly notificationTypes: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosScalingGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`
 */
export interface RosScalingGroupEnableProps {
    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    readonly removeInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    readonly scalingConfigurationId?: string | ros.IResolvable;
    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    readonly scalingRuleAris?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    readonly scalingRuleArisExecuteVersion?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::ScalingGroupEnable`
 */
export declare class RosScalingGroupEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroupEnable";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LifecycleState: The scaling group status
     */
    readonly attrLifecycleState: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: The scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    readonly attrScalingInstanceDetails: ros.IResolvable;
    /**
     * @Attribute ScalingInstances: The auto created scaling instances
     */
    readonly attrScalingInstances: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteErrorInfo: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesAdded: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesRemoved: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    removeInstanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    scalingConfigurationId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    scalingRuleAris: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    scalingRuleArisExecuteVersion: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupEnableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ESS::ScalingRule`
 */
export interface RosScalingRuleProps {
    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    readonly adjustmentType?: string | ros.IResolvable;
    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    readonly adjustmentValue?: number | ros.IResolvable;
    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    readonly cooldown?: number | ros.IResolvable;
    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    readonly disableScaleIn?: boolean | ros.IResolvable;
    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    readonly estimatedInstanceWarmup?: number | ros.IResolvable;
    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    readonly initialMaxSize?: number | ros.IResolvable;
    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    readonly metricName?: string | ros.IResolvable;
    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    readonly minAdjustmentMagnitude?: number | ros.IResolvable;
    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    readonly predictiveScalingMode?: string | ros.IResolvable;
    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    readonly predictiveTaskBufferTime?: number | ros.IResolvable;
    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    readonly predictiveValueBehavior?: string | ros.IResolvable;
    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    readonly predictiveValueBuffer?: number | ros.IResolvable;
    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    readonly scalingRuleName?: string | ros.IResolvable;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    readonly scalingRuleType?: string | ros.IResolvable;
    /**
     * @Property stepAdjustment:
     */
    readonly stepAdjustment?: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    readonly targetValue?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::ScalingRule`
 */
export declare class RosScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    readonly attrScalingRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    adjustmentType: string | ros.IResolvable | undefined;
    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    adjustmentValue: number | ros.IResolvable | undefined;
    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    cooldown: number | ros.IResolvable | undefined;
    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    disableScaleIn: boolean | ros.IResolvable | undefined;
    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    estimatedInstanceWarmup: number | ros.IResolvable | undefined;
    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    initialMaxSize: number | ros.IResolvable | undefined;
    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    metricName: string | ros.IResolvable | undefined;
    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    minAdjustmentMagnitude: number | ros.IResolvable | undefined;
    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    predictiveScalingMode: string | ros.IResolvable | undefined;
    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    predictiveTaskBufferTime: number | ros.IResolvable | undefined;
    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    predictiveValueBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    predictiveValueBuffer: number | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    scalingRuleName: string | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    scalingRuleType: string | ros.IResolvable | undefined;
    /**
     * @Property stepAdjustment:
     */
    stepAdjustment: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    targetValue: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingRule {
    /**
     * @stability external
     */
    interface StepAdjustmentProperty {
        /**
         * @Property metricIntervalUpperBound: The upper limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalUpperBound?: number | ros.IResolvable;
        /**
         * @Property metricIntervalLowerBound: The lower limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalLowerBound?: number | ros.IResolvable;
        /**
         * @Property scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
         */
        readonly scalingAdjustment?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ESS::ScheduledTask`
 */
export interface RosScheduledTaskProps {
    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    readonly launchTime: string | ros.IResolvable;
    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     */
    readonly scheduledAction: string | ros.IResolvable;
    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    readonly launchExpirationTime?: number | ros.IResolvable;
    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceEndTime?: string | ros.IResolvable;
    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceType?: string | ros.IResolvable;
    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceValue?: string | ros.IResolvable;
    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    readonly scheduledTaskName?: string | ros.IResolvable;
    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    readonly taskEnabled?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ESS::ScheduledTask`
 */
export declare class RosScheduledTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScheduledTask";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
     */
    readonly attrScheduledTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    launchTime: string | ros.IResolvable;
    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     */
    scheduledAction: string | ros.IResolvable;
    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    launchExpirationTime: number | ros.IResolvable | undefined;
    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceEndTime: string | ros.IResolvable | undefined;
    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceType: string | ros.IResolvable | undefined;
    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceValue: string | ros.IResolvable | undefined;
    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    scheduledTaskName: string | ros.IResolvable | undefined;
    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    taskEnabled: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduledTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=ess.generated.d.ts.map
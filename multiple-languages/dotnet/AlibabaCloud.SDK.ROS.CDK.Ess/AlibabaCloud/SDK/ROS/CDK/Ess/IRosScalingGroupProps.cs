using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosScalingGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupProps")]
    public interface IRosScalingGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: maxSize: The maximum number of ECS instances that can be contained in the scaling group.
        /// If the number of ECS instances in the scaling group is greater than the value of
        /// the `MaxSize` parameter, Auto Scaling automatically removes ECS instances until
        /// the number of instances in the scaling group is equal to the maximum number.
        /// The value range of the MaxSize parameter varies based on the instance quota. You
        /// can go to Quota Center to check the maximum number of instances that a scaling
        /// group can contain.
        /// For example, if a scaling group can contain up to 2,000 instances, the value
        /// range of the `MaxSize` parameter is 0 to 2000.
        /// </remarks>
        [JsiiProperty(name: "maxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MaxSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 2000].
        /// </remarks>
        [JsiiProperty(name: "minSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MinSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        /// - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
        /// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
        /// Default value: priority.
        /// </remarks>
        [JsiiProperty(name: "allocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        /// - true
        /// - false
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "azBalance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AzBalance
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
        /// Default value: true.
        /// </remarks>
        [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompensateWithOnDemand
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: containerGroupId: The ID of the elastic container instance.
        /// </remarks>
        [JsiiProperty(name: "containerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
        /// </remarks>
        [JsiiProperty(name: "customPolicyArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomPolicyArn
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIds: The IDs of the ApsaraDB RDS instances that you want to associate with the scaling
        /// group. The value can be a JSON array that contains multiple ApsaraDB RDS instance
        /// IDs. Separate multiple IDs with commas (,).
        /// You can associate only a limited number of ApsaraDB RDS instances with a scaling
        /// group. Go to Quota Center to check the maximum number of ApsaraDB RDS instances
        /// that you can associate with a scaling group.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        /// The default value is 300s.
        /// </remarks>
        [JsiiProperty(name: "defaultCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultCooldown
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        /// </remarks>
        [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesiredCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupDeletionProtection: Whether to enable deletion protection for scaling group.
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupDeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: The type of instances that are managed by the scaling group. Valid values:
        /// ECS
        /// ECI
        /// Default value: ECS.
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        /// </remarks>
        [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckTypes: The health check method for the scaling group.
        /// > You can specify multiple values for this parameter to enable multiple health
        /// check options. If the `HealthCheckType` parameter is set, this parameter is
        /// ignored.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckTypes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateOverrides: You can specify up to 10 overrides.
        /// Note: This parameter takes effect only if you specify LaunchTemplateId.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.LaunchTemplateOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateOverrides
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template. Valid values:
        /// A fixed template version numbe.
        /// Default: The default template version is always used.
        /// Latest: The latest template version is always used.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerIds: The IDs of the CLB instances that you want to associate with the scaling group.
        /// The value can be a JSON array that contains multiple CLB instance IDs. Separate
        /// multiple IDs with commas (,).
        /// You can associate only a limited number of CLB instances with a scaling group. Go
        /// to Quota Center to check the maximum number of CLB instances that you can
        /// associate with a scaling group.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
        /// Valid values: 86400 to the value of Integer.maxValue.
        /// Default value: null.
        /// Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
        /// </remarks>
        [JsiiProperty(name: "maxInstanceLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxInstanceLifetime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAzPolicy: The scaling policy for the multi-zone scaling group that contains ECS instances.
        /// Valid values:
        /// *   PRIORITY: Auto Scaling scales ECS instances based on the priority of the
        /// vSwitch that is specified by the VSwitchIds.N parameter. Auto Scaling
        /// preferentially scales instances in the zone where the vSwitch that has the
        /// highest priority resides. If the scaling fails, Auto Scaling scales instances in
        /// the zone where the vSwitch that has the next highest priority resides.
        /// *   COST_OPTIMIZED: Auto Scaling preferentially creates ECS instances whose vCPUs
        /// are provided at the lowest price and removes ECS instances whose vCPUs are
        /// provided at the highest price. If preemptible instance types are specified in the
        /// scaling configuration, Auto Scaling preferentially creates preemptible instances.
        /// You can use the CompensateWithOnDemand parameter to specify whether to
        /// automatically create pay-as-you-go instances when preemptible instances cannot be
        /// created due to insufficient resources.
        /// Note The COST_OPTIMIZED **setting takes effect only when you specify multiple
        /// instance types or when you specify at least one preemptible instance type.
        /// *   BALANCE: Auto Scaling evenly distributes ECS instances across zones that are
        /// specified for the scaling group. If ECS instances are unevenly distributed across
        /// zones due to insufficient resources, you can call the [RebalanceInstance]()
        /// operation to evenly distribute the instances across the zones.
        /// *   COMPOSABLE: You can combine the preceding policies based on your business
        /// requirements.
        /// Default value: PRIORITY.
        /// </remarks>
        [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAzPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        /// </remarks>
        [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationConfigurations
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
        /// If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
        /// </remarks>
        [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OnDemandBaseCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
        /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
        /// </remarks>
        [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OnDemandPercentageAboveBaseCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: protectedInstances: ECS instances of protected mode in the scaling group.
        /// </remarks>
        [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectedInstances
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: removalPolicys: Policy for removing ECS instances from the scaling group.
        /// Optional values:
        /// - OldestInstance: removes the first ECS instance attached to the scaling group.
        /// - NewestInstance: removes the first ECS instance attached to the scaling group.
        /// - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        /// - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
        /// You can enter up to three removal policies.
        /// You cannot set any item of RemovalPolicys to the same value.
        /// The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
        /// Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
        /// </remarks>
        [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemovalPolicys
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupName: The name of the scaling group. The name of each scaling group must be unique in a
        /// region. The name must be 2 to 64 characters in length, and can contain letters,
        /// digits, underscores (_), hyphens (-), and periods (.). The name must start with a
        /// letter or a digit.
        /// If you do not specify this parameter, the value of the ScalingGroupId parameter
        /// is used.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingPolicy: The reclaim mode of the scaling group. Valid values:
        /// recycle
        /// release
        /// forcerelease
        /// ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
        /// </remarks>
        [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroups: The config of server group.
        /// </remarks>
        [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerGroups
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        /// - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
        /// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
        /// Default value: priority.
        /// </remarks>
        [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotAllocationStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
        /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
        /// </remarks>
        [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotInstancePools
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
        /// </remarks>
        [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotInstanceRemedy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: standbyInstances: ECS instances of standby mode in the scaling group.
        /// </remarks>
        [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyInstances
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch. If you specify the VSwitchId parameter, the network type
        /// of the scaling group is VPC.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: The IDs of vSwitches. If you specify the VSwitchIds.N parameter, the VSwitchId
        /// parameter is ignored. If you specify the VSwitchIds.N parameter, the network type
        /// of the scaling group is VPC.
        /// If you specify multiple vSwitches, take note of the following items:
        /// *   The vSwitches must belong to the same VPC.
        /// *   The vSwitches can belong to different zones.
        /// *   The vSwitches are sorted in ascending order of priority. The first vSwitch
        /// that is specified by the VSwitchIds.N parameter has the highest priority. If Auto
        /// Scaling fails to create ECS instances in the zone where the vSwitch that has the
        /// highest priority resides, Auto Scaling creates ECS instances in the zone where
        /// the vSwitch that has the next highest priority resides.
        /// </remarks>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScalingGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: maxSize: The maximum number of ECS instances that can be contained in the scaling group.
            /// If the number of ECS instances in the scaling group is greater than the value of
            /// the `MaxSize` parameter, Auto Scaling automatically removes ECS instances until
            /// the number of instances in the scaling group is equal to the maximum number.
            /// The value range of the MaxSize parameter varies based on the instance quota. You
            /// can go to Quota Center to check the maximum number of instances that a scaling
            /// group can contain.
            /// For example, if a scaling group can contain up to 2,000 instances, the value
            /// range of the `MaxSize` parameter is 0 to 2000.
            /// </remarks>
            [JsiiProperty(name: "maxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 2000].
            /// </remarks>
            [JsiiProperty(name: "minSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MinSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            /// - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
            /// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
            /// Default value: priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            /// - true
            /// - false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "azBalance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AzBalance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompensateWithOnDemand
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: containerGroupId: The ID of the elastic container instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customPolicyArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomPolicyArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceIds: The IDs of the ApsaraDB RDS instances that you want to associate with the scaling
            /// group. The value can be a JSON array that contains multiple ApsaraDB RDS instance
            /// IDs. Separate multiple IDs with commas (,).
            /// You can associate only a limited number of ApsaraDB RDS instances with a scaling
            /// group. Go to Quota Center to check the maximum number of ApsaraDB RDS instances
            /// that you can associate with a scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DbInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
            /// The default value is 300s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultCooldown
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesiredCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupDeletionProtection: Whether to enable deletion protection for scaling group.
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupDeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupType: The type of instances that are managed by the scaling group. Valid values:
            /// ECS
            /// ECI
            /// Default value: ECS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTypes: The health check method for the scaling group.
            /// > You can specify multiple values for this parameter to enable multiple health
            /// check options. If the `HealthCheckType` parameter is set, this parameter is
            /// ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HealthCheckTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateOverrides: You can specify up to 10 overrides.
            /// Note: This parameter takes effect only if you specify LaunchTemplateId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.LaunchTemplateOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LaunchTemplateOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template. Valid values:
            /// A fixed template version numbe.
            /// Default: The default template version is always used.
            /// Latest: The latest template version is always used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerIds: The IDs of the CLB instances that you want to associate with the scaling group.
            /// The value can be a JSON array that contains multiple CLB instance IDs. Separate
            /// multiple IDs with commas (,).
            /// You can associate only a limited number of CLB instances with a scaling group. Go
            /// to Quota Center to check the maximum number of CLB instances that you can
            /// associate with a scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
            /// Valid values: 86400 to the value of Integer.maxValue.
            /// Default value: null.
            /// Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxInstanceLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxInstanceLifetime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAzPolicy: The scaling policy for the multi-zone scaling group that contains ECS instances.
            /// Valid values:
            /// *   PRIORITY: Auto Scaling scales ECS instances based on the priority of the
            /// vSwitch that is specified by the VSwitchIds.N parameter. Auto Scaling
            /// preferentially scales instances in the zone where the vSwitch that has the
            /// highest priority resides. If the scaling fails, Auto Scaling scales instances in
            /// the zone where the vSwitch that has the next highest priority resides.
            /// *   COST_OPTIMIZED: Auto Scaling preferentially creates ECS instances whose vCPUs
            /// are provided at the lowest price and removes ECS instances whose vCPUs are
            /// provided at the highest price. If preemptible instance types are specified in the
            /// scaling configuration, Auto Scaling preferentially creates preemptible instances.
            /// You can use the CompensateWithOnDemand parameter to specify whether to
            /// automatically create pay-as-you-go instances when preemptible instances cannot be
            /// created due to insufficient resources.
            /// Note The COST_OPTIMIZED **setting takes effect only when you specify multiple
            /// instance types or when you specify at least one preemptible instance type.
            /// *   BALANCE: Auto Scaling evenly distributes ECS instances across zones that are
            /// specified for the scaling group. If ECS instances are unevenly distributed across
            /// zones due to insufficient resources, you can call the [RebalanceInstance]()
            /// operation to evenly distribute the instances across the zones.
            /// *   COMPOSABLE: You can combine the preceding policies based on your business
            /// requirements.
            /// Default value: PRIORITY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAzPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NotificationConfigurations
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
            /// If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnDemandBaseCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
            /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnDemandPercentageAboveBaseCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: protectedInstances: ECS instances of protected mode in the scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ProtectedInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: removalPolicys: Policy for removing ECS instances from the scaling group.
            /// Optional values:
            /// - OldestInstance: removes the first ECS instance attached to the scaling group.
            /// - NewestInstance: removes the first ECS instance attached to the scaling group.
            /// - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
            /// - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
            /// You can enter up to three removal policies.
            /// You cannot set any item of RemovalPolicys to the same value.
            /// The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
            /// Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RemovalPolicys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupName: The name of the scaling group. The name of each scaling group must be unique in a
            /// region. The name must be 2 to 64 characters in length, and can contain letters,
            /// digits, underscores (_), hyphens (-), and periods (.). The name must start with a
            /// letter or a digit.
            /// If you do not specify this parameter, the value of the ScalingGroupId parameter
            /// is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingPolicy: The reclaim mode of the scaling group. Valid values:
            /// recycle
            /// release
            /// forcerelease
            /// ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroups: The config of server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServerGroups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            /// - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
            /// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
            /// Default value: priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
            /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstancePools
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstanceRemedy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: standbyInstances: ECS instances of standby mode in the scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? StandbyInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch. If you specify the VSwitchId parameter, the network type
            /// of the scaling group is VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: The IDs of vSwitches. If you specify the VSwitchIds.N parameter, the VSwitchId
            /// parameter is ignored. If you specify the VSwitchIds.N parameter, the network type
            /// of the scaling group is VPC.
            /// If you specify multiple vSwitches, take note of the following items:
            /// *   The vSwitches must belong to the same VPC.
            /// *   The vSwitches can belong to different zones.
            /// *   The vSwitches are sorted in ascending order of priority. The first vSwitch
            /// that is specified by the VSwitchIds.N parameter has the highest priority. If Auto
            /// Scaling fails to create ECS instances in the zone where the vSwitch that has the
            /// highest priority resides, Auto Scaling creates ECS instances in the zone where
            /// the vSwitch that has the next highest priority resides.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

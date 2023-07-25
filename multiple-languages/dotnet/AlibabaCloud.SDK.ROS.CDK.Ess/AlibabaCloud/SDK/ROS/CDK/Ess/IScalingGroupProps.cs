using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupProps")]
    public interface IScalingGroupProps
    {
        /// <summary>Property maxSize: Maximum number of ECS instances in the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "maxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MaxSize
        {
            get;
        }

        /// <summary>Property minSize: Minimum number of ECS instances in the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "minSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MinSize
        {
            get;
        }

        /// <summary>Property allocationStrategy: The allocation policy of instances.</summary>
        /// <remarks>
        /// Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        ///
        /// <list type="bullet">
        /// <description>priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.</description>
        /// <description>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
        /// Default value: priority.</description>
        /// </list>
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

        /// <summary>Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones.</summary>
        /// <remarks>
        /// This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true</description>
        /// <description>false
        /// Default value: false.</description>
        /// </list>
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

        /// <summary>Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.</summary>
        /// <remarks>
        /// This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
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

        /// <summary>Property containerGroupId: The ID of the elastic container instance.</summary>
        [JsiiProperty(name: "containerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function).</summary>
        /// <remarks>
        /// This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
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

        /// <summary>Property dbInstanceIds: ID list of an RDS instance.</summary>
        /// <remarks>
        /// A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 86400].
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

        /// <summary>Property desiredCapacity: The expected number of ECS instances in a scaling group.</summary>
        /// <remarks>
        /// The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
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

        /// <summary>Property groupDeletionProtection: Whether to enable deletion protection for scaling group.</summary>
        /// <remarks>
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

        /// <summary>Property groupType: The type of instances that are managed by the scaling group.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property healthCheckType: The health check type.</summary>
        /// <remarks>
        /// Allow values is "ECS" and "NONE", default to "ECS".
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

        /// <summary>Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.</summary>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateOverrides: You can specify up to 10 overrides.</summary>
        /// <remarks>
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

        /// <summary>Property launchTemplateVersion: The version of the instance launch template.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property loadBalancerIds: ID list of a Server Load Balancer instance.</summary>
        /// <remarks>
        /// A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group.</summary>
        /// <remarks>
        /// Unit: seconds.
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

        /// <summary>Property multiAzPolicy: ECS scaling strategy for multi availability zone.</summary>
        /// <remarks>
        /// Allow value:
        ///
        /// <list type="number">
        /// <description>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</description>
        /// <description>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</description>
        /// <description>COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
        /// Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.</description>
        /// <description>COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.</description>
        /// </list>
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

        /// <summary>Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.</summary>
        [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationConfigurations
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.</summary>
        /// <remarks>
        /// Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
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

        /// <summary>Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.</summary>
        /// <remarks>
        /// This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
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

        /// <summary>Property protectedInstances: ECS instances of protected mode in the scaling group.</summary>
        [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectedInstances
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property removalPolicys: Policy for removing ECS instances from the scaling group.</summary>
        /// <remarks>
        /// Optional values:
        ///
        /// <list type="bullet">
        /// <description>OldestInstance: removes the first ECS instance attached to the scaling group.</description>
        /// <description>NewestInstance: removes the first ECS instance attached to the scaling group.</description>
        /// <description>OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.</description>
        /// <description>CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
        /// You can enter up to three removal policies.
        /// You cannot set any item of RemovalPolicys to the same value.
        /// The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
        /// Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemovalPolicys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).</summary>
        /// <remarks>
        /// The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        /// If this parameter is not specified, the default value is ScalingGroupId.
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

        /// <summary>Property scalingPolicy: The reclaim mode of the scaling group.</summary>
        /// <remarks>
        /// Valid values:
        /// recycle
        /// release
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

        /// <summary>Property spotAllocationStrategy: The allocation policy of preemptible instances.</summary>
        /// <remarks>
        /// You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
        ///
        /// <list type="bullet">
        /// <description>priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.</description>
        /// <description>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
        /// Default value: priority.</description>
        /// </list>
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

        /// <summary>Property spotInstancePools: The number of instance types that are available.</summary>
        /// <remarks>
        /// The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
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

        /// <summary>Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.</summary>
        /// <remarks>
        /// If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
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

        /// <summary>Property standbyInstances: ECS instances of standby mode in the scaling group.</summary>
        [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyInstances
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.</summary>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property maxSize: Maximum number of ECS instances in the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 1000].
            /// </remarks>
            [JsiiProperty(name: "maxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property minSize: Minimum number of ECS instances in the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 1000].
            /// </remarks>
            [JsiiProperty(name: "minSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MinSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocationStrategy: The allocation policy of instances.</summary>
            /// <remarks>
            /// Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            ///
            /// <list type="bullet">
            /// <description>priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.</description>
            /// <description>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
            /// Default value: priority.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones.</summary>
            /// <remarks>
            /// This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            ///
            /// <list type="bullet">
            /// <description>true</description>
            /// <description>false
            /// Default value: false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "azBalance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AzBalance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.</summary>
            /// <remarks>
            /// This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompensateWithOnDemand
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerGroupId: The ID of the elastic container instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "containerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function).</summary>
            /// <remarks>
            /// This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customPolicyArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomPolicyArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceIds: ID list of an RDS instance.</summary>
            /// <remarks>
            /// A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 86400].
            /// The default value is 300s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultCooldown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultCooldown
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property desiredCapacity: The expected number of ECS instances in a scaling group.</summary>
            /// <remarks>
            /// The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesiredCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupDeletionProtection: Whether to enable deletion protection for scaling group.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupDeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupType: The type of instances that are managed by the scaling group.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property healthCheckType: The health check type.</summary>
            /// <remarks>
            /// Allow values is "ECS" and "NONE", default to "ECS".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateOverrides: You can specify up to 10 overrides.</summary>
            /// <remarks>
            /// Note: This parameter takes effect only if you specify LaunchTemplateId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.LaunchTemplateOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LaunchTemplateOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateVersion: The version of the instance launch template.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property loadBalancerIds: ID list of a Server Load Balancer instance.</summary>
            /// <remarks>
            /// A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group.</summary>
            /// <remarks>
            /// Unit: seconds.
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

            /// <summary>Property multiAzPolicy: ECS scaling strategy for multi availability zone.</summary>
            /// <remarks>
            /// Allow value:
            ///
            /// <list type="number">
            /// <description>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</description>
            /// <description>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</description>
            /// <description>COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
            /// Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.</description>
            /// <description>COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAzPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NotificationConfigurations
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.</summary>
            /// <remarks>
            /// Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
            /// If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnDemandBaseCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.</summary>
            /// <remarks>
            /// This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
            /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnDemandPercentageAboveBaseCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protectedInstances: ECS instances of protected mode in the scaling group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectedInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property removalPolicys: Policy for removing ECS instances from the scaling group.</summary>
            /// <remarks>
            /// Optional values:
            ///
            /// <list type="bullet">
            /// <description>OldestInstance: removes the first ECS instance attached to the scaling group.</description>
            /// <description>NewestInstance: removes the first ECS instance attached to the scaling group.</description>
            /// <description>OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.</description>
            /// <description>CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
            /// You can enter up to three removal policies.
            /// You cannot set any item of RemovalPolicys to the same value.
            /// The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
            /// Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemovalPolicys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).</summary>
            /// <remarks>
            /// The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
            /// If this parameter is not specified, the default value is ScalingGroupId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingPolicy: The reclaim mode of the scaling group.</summary>
            /// <remarks>
            /// Valid values:
            /// recycle
            /// release
            /// ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotAllocationStrategy: The allocation policy of preemptible instances.</summary>
            /// <remarks>
            /// You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
            ///
            /// <list type="bullet">
            /// <description>priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.</description>
            /// <description>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
            /// Default value: priority.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstancePools: The number of instance types that are available.</summary>
            /// <remarks>
            /// The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
            /// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstancePools
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.</summary>
            /// <remarks>
            /// If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstanceRemedy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property standbyInstances: ECS instances of standby mode in the scaling group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.ITagsProperty[]?>();
            }

            /// <summary>Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

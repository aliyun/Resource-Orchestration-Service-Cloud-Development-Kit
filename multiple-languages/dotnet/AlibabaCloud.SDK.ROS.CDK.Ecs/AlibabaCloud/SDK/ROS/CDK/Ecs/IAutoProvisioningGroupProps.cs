using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `AutoProvisioningGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAutoProvisioningGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AutoProvisioningGroupProps")]
    public interface IAutoProvisioningGroupProps
    {
        /// <summary>Property totalTargetCapacity: The total target capacity of the auto provisioning group.</summary>
        /// <remarks>
        /// The target capacity consists
        /// of the following three parts:
        /// The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
        /// The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
        /// The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
        /// </remarks>
        [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalTargetCapacity
        {
            get;
        }

        /// <summary>Property autoProvisioningGroupName: The name of the auto provisioning group to be created.</summary>
        /// <remarks>
        /// It must be 2 to 128 characters
        /// in length. It must start with a letter but cannot start with http:// or https://.
        /// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "autoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoProvisioningGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoProvisioningGroupType: The type of the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values:
        /// request: One-time delivery. After the auto provisioning group is started, it only attempts
        /// to create an instance cluster once. If the cluster fails to be created, the group
        /// does not try again.
        /// maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
        /// is started, it continuously attempts to create and maintain the instance cluster.
        /// The auto provisioning group compares the real-time and target capacity of the cluster.
        /// If the cluster does not meet the target capacity, the group will create instances
        /// until the cluster meets the target capacity.
        /// Default value: maintain
        /// </remarks>
        [JsiiProperty(name: "autoProvisioningGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoProvisioningGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property checkExecutionStatus: Whether check execution status.</summary>
        /// <remarks>
        /// If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
        /// </remarks>
        [JsiiProperty(name: "checkExecutionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckExecutionStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultTargetCapacityType: The type of supplemental instances.</summary>
        /// <remarks>
        /// When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
        /// the capacity requirements. Valid values:
        /// PayAsYouGo: Pay-as-you-go instances.
        /// Spot: Preemptible instances.
        /// Default value: Spot
        /// </remarks>
        [JsiiProperty(name: "defaultTargetCapacityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultTargetCapacityType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the auto provisioning group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity.</summary>
        /// <remarks>
        /// Valid values:
        /// no-termination: Excess preemptible instances are not shut down.
        /// termination: Excess preemptible instances are to be shut down. The action to be performed on these
        /// shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
        /// Default value: no-termination
        /// </remarks>
        [JsiiProperty(name: "excessCapacityTerminationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcessCapacityTerminationPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchConfiguration:.</summary>
        [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateConfig:.</summary>
        [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.</summary>
        /// <remarks>
        /// You can call the DescribeLaunchTemplates operation to query available instance launch templates.
        /// An auto provisioning group can be associated with only one instance launch template.
        /// But you can configure multiple extended configurations for the launch template through
        /// the LaunchTemplateConfig parameter.
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

        /// <summary>Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group.</summary>
        /// <remarks>
        /// You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
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

        /// <summary>Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.</summary>
        /// <remarks>
        /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
        /// </remarks>
        [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxSpotPrice
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.</summary>
        /// <remarks>
        /// Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// prioritized: The priority-based policy the auto provisioning group follows to create instances.
        /// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
        /// Default value: lowest-price
        /// </remarks>
        [JsiiProperty(name: "payAsYouGoAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayAsYouGoAllocationStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.</summary>
        [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayAsYouGoTargetCapacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotAllocationStrategy: The scale-out policy for preemptible instances.</summary>
        /// <remarks>
        /// Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// diversified: The distribution balancing policy the auto provisioning group follows to evenly create
        /// instances across zones specified in multiple extended template configurations.
        /// Default value: lowest-price
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

        /// <summary>Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down.</summary>
        /// <remarks>
        /// Value values:
        /// stop: stops preemptible instances.
        /// terminate: releases preemptible instances.
        /// Default value: stop
        /// </remarks>
        [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotInstanceInterruptionBehavior
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price.</summary>
        /// <remarks>
        /// The auto provisioning group selects instance types of the lowest cost to create
        /// instances.
        /// </remarks>
        [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotInstancePoolsToUseCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.</summary>
        [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotTargetCapacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property terminateInstances: Specifies whether to release instances of the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default: false
        /// </remarks>
        [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TerminateInstances
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.</summary>
        /// <remarks>
        /// Valid values:
        /// true: shuts down preemptible instances. The action to be performed on these shutdown instances
        /// is specified by the SpotInstanceInterruptionBehavior parameter.
        /// false: does not shut down preemptible instances.
        /// Default: false
        /// </remarks>
        [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TerminateInstancesWithExpiration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validFrom: The time when the auto provisioning group is started.</summary>
        /// <remarks>
        /// The period of time between this
        /// point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group is immediately started after creation.
        /// </remarks>
        [JsiiProperty(name: "validFrom", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidFrom
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validUntil: The time when the auto provisioning group expires.</summary>
        /// <remarks>
        /// The period of time between this
        /// point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group never expires.
        /// </remarks>
        [JsiiProperty(name: "validUntil", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidUntil
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AutoProvisioningGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAutoProvisioningGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AutoProvisioningGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property totalTargetCapacity: The total target capacity of the auto provisioning group.</summary>
            /// <remarks>
            /// The target capacity consists
            /// of the following three parts:
            /// The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
            /// The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
            /// The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
            /// </remarks>
            [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalTargetCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoProvisioningGroupName: The name of the auto provisioning group to be created.</summary>
            /// <remarks>
            /// It must be 2 to 128 characters
            /// in length. It must start with a letter but cannot start with http:// or https://.
            /// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoProvisioningGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoProvisioningGroupType: The type of the auto provisioning group.</summary>
            /// <remarks>
            /// Valid values:
            /// request: One-time delivery. After the auto provisioning group is started, it only attempts
            /// to create an instance cluster once. If the cluster fails to be created, the group
            /// does not try again.
            /// maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
            /// is started, it continuously attempts to create and maintain the instance cluster.
            /// The auto provisioning group compares the real-time and target capacity of the cluster.
            /// If the cluster does not meet the target capacity, the group will create instances
            /// until the cluster meets the target capacity.
            /// Default value: maintain
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoProvisioningGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoProvisioningGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property checkExecutionStatus: Whether check execution status.</summary>
            /// <remarks>
            /// If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkExecutionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckExecutionStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultTargetCapacityType: The type of supplemental instances.</summary>
            /// <remarks>
            /// When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
            /// the capacity requirements. Valid values:
            /// PayAsYouGo: Pay-as-you-go instances.
            /// Spot: Preemptible instances.
            /// Default value: Spot
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultTargetCapacityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultTargetCapacityType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the auto provisioning group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity.</summary>
            /// <remarks>
            /// Valid values:
            /// no-termination: Excess preemptible instances are not shut down.
            /// termination: Excess preemptible instances are to be shut down. The action to be performed on these
            /// shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
            /// Default value: no-termination
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excessCapacityTerminationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcessCapacityTerminationPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchConfiguration:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
            public object? LaunchConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateConfig:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LaunchTemplateConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.</summary>
            /// <remarks>
            /// You can call the DescribeLaunchTemplates operation to query available instance launch templates.
            /// An auto provisioning group can be associated with only one instance launch template.
            /// But you can configure multiple extended configurations for the launch template through
            /// the LaunchTemplateConfig parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group.</summary>
            /// <remarks>
            /// You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.</summary>
            /// <remarks>
            /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxSpotPrice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.</summary>
            /// <remarks>
            /// Valid values:
            /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
            /// types of the lowest cost to create instances.
            /// prioritized: The priority-based policy the auto provisioning group follows to create instances.
            /// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
            /// Default value: lowest-price
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payAsYouGoAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayAsYouGoAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayAsYouGoTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotAllocationStrategy: The scale-out policy for preemptible instances.</summary>
            /// <remarks>
            /// Valid values:
            /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
            /// types of the lowest cost to create instances.
            /// diversified: The distribution balancing policy the auto provisioning group follows to evenly create
            /// instances across zones specified in multiple extended template configurations.
            /// Default value: lowest-price
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down.</summary>
            /// <remarks>
            /// Value values:
            /// stop: stops preemptible instances.
            /// terminate: releases preemptible instances.
            /// Default value: stop
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstanceInterruptionBehavior
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price.</summary>
            /// <remarks>
            /// The auto provisioning group selects instance types of the lowest cost to create
            /// instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstancePoolsToUseCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property terminateInstances: Specifies whether to release instances of the auto provisioning group.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.</summary>
            /// <remarks>
            /// Valid values:
            /// true: shuts down preemptible instances. The action to be performed on these shutdown instances
            /// is specified by the SpotInstanceInterruptionBehavior parameter.
            /// false: does not shut down preemptible instances.
            /// Default: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstancesWithExpiration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validFrom: The time when the auto provisioning group is started.</summary>
            /// <remarks>
            /// The period of time between this
            /// point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
            /// By default, an auto provisioning group is immediately started after creation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validFrom", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidFrom
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validUntil: The time when the auto provisioning group expires.</summary>
            /// <remarks>
            /// The period of time between this
            /// point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
            /// By default, an auto provisioning group never expires.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validUntil", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidUntil
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

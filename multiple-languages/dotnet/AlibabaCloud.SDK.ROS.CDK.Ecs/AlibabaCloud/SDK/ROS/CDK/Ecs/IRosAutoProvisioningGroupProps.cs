using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosAutoProvisioningGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAutoProvisioningGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps")]
    public interface IRosAutoProvisioningGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: totalTargetCapacity: The total target capacity of the auto provisioning group. Valid values: Positive
        /// integers.
        /// The total capacity must be greater than or equal to the sum of
        /// `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
        /// `SpotTargetCapacity` (target capacity for spot instances).
        /// </remarks>
        [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalTargetCapacity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
        /// in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
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

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupType: The delivery type of the auto provisioning group. Valid values:
        /// - request: One-time asynchronous delivery. The group delivers the instance
        /// cluster only at startup. If scheduling fails, no retry occurs.
        /// - instant: One-time synchronous delivery. The group creates instances
        /// synchronously at startup and returns the list of successfully created instances
        /// and reasons for failures in the response.
        /// - maintain: Continuous provisioning. The group attempts to deliver the instance
        /// cluster at startup and monitors real-time capacity. If the target capacity is not
        /// met, it continues creating ECS instances.
        /// Default value: maintain.
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

        /// <remarks>
        /// <strong>Property</strong>: checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
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

        /// <remarks>
        /// <strong>Property</strong>: dataDiskConfig: List of instance data disk information.
        /// </remarks>
        [JsiiProperty(name: "dataDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataDiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of
        /// `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than
        /// `TotalTargetCapacity`. Valid values:
        /// - PayAsYouGo: Pay-as-you-go instances.
        /// - Spot: Spot instances.
        /// Default value: Spot.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the auto provisioning group.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto
        /// provisioning group exceeds the target capacity and scale-in is triggered. Valid
        /// values:
        /// - termination: Releases scaled-in instances.
        /// - no-termination: Only removes scaled-in instances from the auto provisioning
        /// group.
        /// Default value: no-termination.
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

        /// <remarks>
        /// <strong>Property</strong>: launchConfiguration:
        /// </remarks>
        [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateConfig:
        /// </remarks>
        [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
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

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
        /// Call [DescribeLaunchTemplateVersions]() to query available launch template
        /// versions.
        /// Default value: The default version of the launch template.
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
        /// <strong>Property</strong>: maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
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

        /// <remarks>
        /// <strong>Property</strong>: minTargetCapacity: The target minimum capacity of the elastic supply group. Value range: Positive integer.
        /// Once you have set this parameter, note that:
        /// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
        /// If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
        /// If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
        /// </remarks>
        [JsiiProperty(name: "minTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinTargetCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
        /// Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
        /// </remarks>
        [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayAsYouGoTargetCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The resource group ID.
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
        /// <strong>Property</strong>: resourcePoolOptions: Resource pooling policy to use when creating an instance. Once you have set this parameter, note that:
        /// This parameter only applies if a pay-as-you-go instance is created.
        /// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
        /// </remarks>
        [JsiiProperty(name: "resourcePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.ResourcePoolOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourcePoolOptions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotAllocationStrategy: The strategy for creating spot instances. Valid values:
        /// - lowest-price: Cost optimization strategy. Selects the instance type with the
        /// lowest price.
        /// - diversified: Balanced zone distribution strategy. Creates instances across the
        /// zones specified in the launch template configurations and distributes them
        /// evenly.
        /// - capacity-optimized: Capacity optimization strategy. Selects the optimal
        /// instance type and zone based on inventory availability.
        /// Default value: lowest-price.
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
        /// <strong>Property</strong>: spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted. Valid values:
        /// - stop: Stops the instance.
        /// - terminate: Releases the instance.
        /// Default value: terminate.
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

        /// <remarks>
        /// <strong>Property</strong>: spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
        /// Specifies the number of lowest-priced instance types from which the auto
        /// provisioning group creates instances.
        /// Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
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

        /// <remarks>
        /// <strong>Property</strong>: spotTargetCapacity: The target capacity for spot instances in the auto provisioning group. Valid
        /// values: Integers less than or equal to the value of `TotalTargetCapacity`.
        /// </remarks>
        [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotTargetCapacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskConfig: List of instance system disk information.
        /// </remarks>
        [JsiiProperty(name: "systemDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.SystemDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: terminateInstances: Specifies whether to release instances in the group when you delete the auto
        /// provisioning group. Valid values:
        /// - true: Releases instances in the group.
        /// - false: Retains instances in the group.
        /// Default value: false.
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

        /// <remarks>
        /// <strong>Property</strong>: terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning
        /// group expires. Valid values:
        /// - true: Releases instances in the group.
        /// - false: Only removes instances from the auto provisioning group.
        /// Default value: false.
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

        /// <remarks>
        /// <strong>Property</strong>: validFrom: The start time of the auto provisioning group. Used together with `ValidUntil` to
        /// define the validity period.
        /// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
        /// yyyy-MM-ddTHH:mm:ssZ.
        /// Default value: The timestamp when the API call takes effect immediately.
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

        /// <remarks>
        /// <strong>Property</strong>: validUntil: The expiration time of the auto provisioning group. Used together with
        /// `ValidFrom` to define the validity period.
        /// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
        /// yyyy-MM-ddTHH:mm:ssZ.
        /// Default value: 2099-12-31T23:59:59Z.
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

        /// <summary>Properties for defining a `RosAutoProvisioningGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAutoProvisioningGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAutoProvisioningGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: totalTargetCapacity: The total target capacity of the auto provisioning group. Valid values: Positive
            /// integers.
            /// The total capacity must be greater than or equal to the sum of
            /// `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
            /// `SpotTargetCapacity` (target capacity for spot instances).
            /// </remarks>
            [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalTargetCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
            /// in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoProvisioningGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoProvisioningGroupType: The delivery type of the auto provisioning group. Valid values:
            /// - request: One-time asynchronous delivery. The group delivers the instance
            /// cluster only at startup. If scheduling fails, no retry occurs.
            /// - instant: One-time synchronous delivery. The group creates instances
            /// synchronously at startup and returns the list of successfully created instances
            /// and reasons for failures in the response.
            /// - maintain: Continuous provisioning. The group attempts to deliver the instance
            /// cluster at startup and monitors real-time capacity. If the target capacity is not
            /// met, it continues creating ECS instances.
            /// Default value: maintain.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoProvisioningGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoProvisioningGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkExecutionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckExecutionStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDiskConfig: List of instance data disk information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DataDiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of
            /// `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than
            /// `TotalTargetCapacity`. Valid values:
            /// - PayAsYouGo: Pay-as-you-go instances.
            /// - Spot: Spot instances.
            /// Default value: Spot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultTargetCapacityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultTargetCapacityType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the auto provisioning group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto
            /// provisioning group exceeds the target capacity and scale-in is triggered. Valid
            /// values:
            /// - termination: Releases scaled-in instances.
            /// - no-termination: Only removes scaled-in instances from the auto provisioning
            /// group.
            /// Default value: no-termination.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excessCapacityTerminationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcessCapacityTerminationPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchConfiguration:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
            public object? LaunchConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateConfig:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LaunchTemplateConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
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

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
            /// Call [DescribeLaunchTemplateVersions]() to query available launch template
            /// versions.
            /// Default value: The default version of the launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
            /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxSpotPrice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minTargetCapacity: The target minimum capacity of the elastic supply group. Value range: Positive integer.
            /// Once you have set this parameter, note that:
            /// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
            /// If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
            /// If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
            /// Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayAsYouGoTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The resource group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourcePoolOptions: Resource pooling policy to use when creating an instance. Once you have set this parameter, note that:
            /// This parameter only applies if a pay-as-you-go instance is created.
            /// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourcePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.ResourcePoolOptionsProperty\"}]}}", isOptional: true)]
            public object? ResourcePoolOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotAllocationStrategy: The strategy for creating spot instances. Valid values:
            /// - lowest-price: Cost optimization strategy. Selects the instance type with the
            /// lowest price.
            /// - diversified: Balanced zone distribution strategy. Creates instances across the
            /// zones specified in the launch template configurations and distributes them
            /// evenly.
            /// - capacity-optimized: Capacity optimization strategy. Selects the optimal
            /// instance type and zone based on inventory availability.
            /// Default value: lowest-price.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted. Valid values:
            /// - stop: Stops the instance.
            /// - terminate: Releases the instance.
            /// Default value: terminate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstanceInterruptionBehavior
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
            /// Specifies the number of lowest-priced instance types from which the auto
            /// provisioning group creates instances.
            /// Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstancePoolsToUseCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotTargetCapacity: The target capacity for spot instances in the auto provisioning group. Valid
            /// values: Integers less than or equal to the value of `TotalTargetCapacity`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskConfig: List of instance system disk information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.SystemDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SystemDiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: terminateInstances: Specifies whether to release instances in the group when you delete the auto
            /// provisioning group. Valid values:
            /// - true: Releases instances in the group.
            /// - false: Retains instances in the group.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning
            /// group expires. Valid values:
            /// - true: Releases instances in the group.
            /// - false: Only removes instances from the auto provisioning group.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstancesWithExpiration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: validFrom: The start time of the auto provisioning group. Used together with `ValidUntil` to
            /// define the validity period.
            /// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
            /// yyyy-MM-ddTHH:mm:ssZ.
            /// Default value: The timestamp when the API call takes effect immediately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validFrom", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidFrom
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: validUntil: The expiration time of the auto provisioning group. Used together with
            /// `ValidFrom` to define the validity period.
            /// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
            /// yyyy-MM-ddTHH:mm:ssZ.
            /// Default value: 2099-12-31T23:59:59Z.
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

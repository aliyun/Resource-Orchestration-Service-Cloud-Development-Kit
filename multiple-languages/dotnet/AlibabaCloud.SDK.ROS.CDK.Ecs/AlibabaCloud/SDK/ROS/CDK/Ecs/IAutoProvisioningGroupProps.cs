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
        /// Valid values: Positive
        /// integers.
        /// The total capacity must be greater than or equal to the sum of
        /// <c>PayAsYouGoTargetCapacity</c> (target capacity for pay-as-you-go instances) and
        /// <c>SpotTargetCapacity</c> (target capacity for spot instances).
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

        /// <summary>Property autoProvisioningGroupType: The delivery type of the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>request: One-time asynchronous delivery. The group delivers the instance
        /// cluster only at startup. If scheduling fails, no retry occurs.</description>
        /// <description>instant: One-time synchronous delivery. The group creates instances
        /// synchronously at startup and returns the list of successfully created instances
        /// and reasons for failures in the response.</description>
        /// <description>maintain: Continuous provisioning. The group attempts to deliver the instance
        /// cluster at startup and monitors real-time capacity. If the target capacity is not
        /// met, it continues creating ECS instances.
        /// Default value: maintain.</description>
        /// </list>
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

        /// <summary>Property dataDiskConfig: List of instance data disk information.</summary>
        [JsiiProperty(name: "dataDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataDiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than `TotalTargetCapacity`.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>PayAsYouGo: Pay-as-you-go instances.</description>
        /// <description>Spot: Spot instances.
        /// Default value: Spot.</description>
        /// </list>
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

        /// <summary>Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and scale-in is triggered.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>termination: Releases scaled-in instances.</description>
        /// <description>no-termination: Only removes scaled-in instances from the auto provisioning
        /// group.
        /// Default value: no-termination.</description>
        /// </list>
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

        /// <summary>Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.</summary>
        /// <remarks>
        /// Call <a href="">DescribeLaunchTemplateVersions</a> to query available launch template
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

        /// <summary>Property minTargetCapacity: The target minimum capacity of the elastic supply group.</summary>
        /// <remarks>
        /// Value range: Positive integer.
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

        /// <summary>Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
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

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourcePoolOptions: Resource pooling policy to use when creating an instance.</summary>
        /// <remarks>
        /// Once you have set this parameter, note that:
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

        /// <summary>Property spotAllocationStrategy: The strategy for creating spot instances.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>lowest-price: Cost optimization strategy. Selects the instance type with the
        /// lowest price.</description>
        /// <description>diversified: Balanced zone distribution strategy. Creates instances across the
        /// zones specified in the launch template configurations and distributes them
        /// evenly.</description>
        /// <description>capacity-optimized: Capacity optimization strategy. Selects the optimal
        /// instance type and zone based on inventory availability.
        /// Default value: lowest-price.</description>
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

        /// <summary>Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>stop: Stops the instance.</description>
        /// <description>terminate: Releases the instance.
        /// Default value: terminate.</description>
        /// </list>
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

        /// <summary>Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.</summary>
        /// <remarks>
        /// Specifies the number of lowest-priced instance types from which the auto
        /// provisioning group creates instances.
        /// Valid values: Less than the value of N in <c>LaunchTemplateConfig.N</c>.
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

        /// <summary>Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group.</summary>
        /// <remarks>
        /// Valid
        /// values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
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

        /// <summary>Property systemDiskConfig: List of instance system disk information.</summary>
        [JsiiProperty(name: "systemDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.SystemDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property terminateInstances: Specifies whether to release instances in the group when you delete the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Releases instances in the group.</description>
        /// <description>false: Retains instances in the group.
        /// Default value: false.</description>
        /// </list>
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

        /// <summary>Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning group expires.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Releases instances in the group.</description>
        /// <description>false: Only removes instances from the auto provisioning group.
        /// Default value: false.</description>
        /// </list>
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

        /// <summary>Property validFrom: The start time of the auto provisioning group.</summary>
        /// <remarks>
        /// Used together with <c>ValidUntil</c> to
        /// define the validity period.
        /// Specify the time in <a href="">ISO 8601</a> format using UTC+0 time. Format:
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

        /// <summary>Property validUntil: The expiration time of the auto provisioning group.</summary>
        /// <remarks>
        /// Used together with
        /// <c>ValidFrom</c> to define the validity period.
        /// Specify the time in <a href="">ISO 8601</a> format using UTC+0 time. Format:
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
            /// Valid values: Positive
            /// integers.
            /// The total capacity must be greater than or equal to the sum of
            /// <c>PayAsYouGoTargetCapacity</c> (target capacity for pay-as-you-go instances) and
            /// <c>SpotTargetCapacity</c> (target capacity for spot instances).
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

            /// <summary>Property autoProvisioningGroupType: The delivery type of the auto provisioning group.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>request: One-time asynchronous delivery. The group delivers the instance
            /// cluster only at startup. If scheduling fails, no retry occurs.</description>
            /// <description>instant: One-time synchronous delivery. The group creates instances
            /// synchronously at startup and returns the list of successfully created instances
            /// and reasons for failures in the response.</description>
            /// <description>maintain: Continuous provisioning. The group attempts to deliver the instance
            /// cluster at startup and monitors real-time capacity. If the target capacity is not
            /// met, it continues creating ECS instances.
            /// Default value: maintain.</description>
            /// </list>
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

            /// <summary>Property dataDiskConfig: List of instance data disk information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DataDiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than `TotalTargetCapacity`.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>PayAsYouGo: Pay-as-you-go instances.</description>
            /// <description>Spot: Spot instances.
            /// Default value: Spot.</description>
            /// </list>
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

            /// <summary>Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and scale-in is triggered.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>termination: Releases scaled-in instances.</description>
            /// <description>no-termination: Only removes scaled-in instances from the auto provisioning
            /// group.
            /// Default value: no-termination.</description>
            /// </list>
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

            /// <summary>Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.</summary>
            /// <remarks>
            /// Call <a href="">DescribeLaunchTemplateVersions</a> to query available launch template
            /// versions.
            /// Default value: The default version of the launch template.
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

            /// <summary>Property minTargetCapacity: The target minimum capacity of the elastic supply group.</summary>
            /// <remarks>
            /// Value range: Positive integer.
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

            /// <summary>Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.</summary>
            /// <remarks>
            /// Valid values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayAsYouGoTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourcePoolOptions: Resource pooling policy to use when creating an instance.</summary>
            /// <remarks>
            /// Once you have set this parameter, note that:
            /// This parameter only applies if a pay-as-you-go instance is created.
            /// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourcePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.ResourcePoolOptionsProperty\"}]}}", isOptional: true)]
            public object? ResourcePoolOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotAllocationStrategy: The strategy for creating spot instances.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>lowest-price: Cost optimization strategy. Selects the instance type with the
            /// lowest price.</description>
            /// <description>diversified: Balanced zone distribution strategy. Creates instances across the
            /// zones specified in the launch template configurations and distributes them
            /// evenly.</description>
            /// <description>capacity-optimized: Capacity optimization strategy. Selects the optimal
            /// instance type and zone based on inventory availability.
            /// Default value: lowest-price.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotAllocationStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>stop: Stops the instance.</description>
            /// <description>terminate: Releases the instance.
            /// Default value: terminate.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstanceInterruptionBehavior
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.</summary>
            /// <remarks>
            /// Specifies the number of lowest-priced instance types from which the auto
            /// provisioning group creates instances.
            /// Valid values: Less than the value of N in <c>LaunchTemplateConfig.N</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInstancePoolsToUseCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group.</summary>
            /// <remarks>
            /// Valid
            /// values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotTargetCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemDiskConfig: List of instance system disk information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.SystemDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SystemDiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property terminateInstances: Specifies whether to release instances in the group when you delete the auto provisioning group.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Releases instances in the group.</description>
            /// <description>false: Retains instances in the group.
            /// Default value: false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning group expires.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Releases instances in the group.</description>
            /// <description>false: Only removes instances from the auto provisioning group.
            /// Default value: false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminateInstancesWithExpiration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validFrom: The start time of the auto provisioning group.</summary>
            /// <remarks>
            /// Used together with <c>ValidUntil</c> to
            /// define the validity period.
            /// Specify the time in <a href="">ISO 8601</a> format using UTC+0 time. Format:
            /// yyyy-MM-ddTHH:mm:ssZ.
            /// Default value: The timestamp when the API call takes effect immediately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validFrom", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidFrom
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validUntil: The expiration time of the auto provisioning group.</summary>
            /// <remarks>
            /// Used together with
            /// <c>ValidFrom</c> to define the validity period.
            /// Specify the time in <a href="">ISO 8601</a> format using UTC+0 time. Format:
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

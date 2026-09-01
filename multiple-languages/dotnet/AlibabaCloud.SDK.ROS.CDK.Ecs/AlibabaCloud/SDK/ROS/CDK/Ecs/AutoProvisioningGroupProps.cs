using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `AutoProvisioningGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.AutoProvisioningGroupProps")]
    public class AutoProvisioningGroupProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroupProps
    {
        private object _totalTargetCapacity;

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
            get => _totalTargetCapacity;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _totalTargetCapacity = value;
            }
        }

        private object? _autoProvisioningGroupName;

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
            get => _autoProvisioningGroupName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoProvisioningGroupName = value;
            }
        }

        private object? _autoProvisioningGroupType;

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
            get => _autoProvisioningGroupType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoProvisioningGroupType = value;
            }
        }

        private object? _checkExecutionStatus;

        /// <summary>Property checkExecutionStatus: Whether check execution status.</summary>
        /// <remarks>
        /// If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "checkExecutionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CheckExecutionStatus
        {
            get => _checkExecutionStatus;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _checkExecutionStatus = value;
            }
        }

        private object? _dataDiskConfig;

        /// <summary>Property dataDiskConfig: List of instance data disk information.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dataDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DataDiskConfig
        {
            get => _dataDiskConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IDataDiskConfigProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IDataDiskConfigProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IDataDiskConfigProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dataDiskConfig = value;
            }
        }

        private object? _defaultTargetCapacityType;

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
            get => _defaultTargetCapacityType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _defaultTargetCapacityType = value;
            }
        }

        private object? _description;

        /// <summary>Property description: The description of the auto provisioning group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get => _description;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _description = value;
            }
        }

        private object? _excessCapacityTerminationPolicy;

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
            get => _excessCapacityTerminationPolicy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _excessCapacityTerminationPolicy = value;
            }
        }

        private object? _launchConfiguration;

        /// <summary>Property launchConfiguration:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
        public object? LaunchConfiguration
        {
            get => _launchConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _launchConfiguration = value;
            }
        }

        private object? _launchTemplateConfig;

        /// <summary>Property launchTemplateConfig:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? LaunchTemplateConfig
        {
            get => _launchTemplateConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchTemplateConfigProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchTemplateConfigProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchTemplateConfigProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _launchTemplateConfig = value;
            }
        }

        private object? _launchTemplateId;

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
            get => _launchTemplateId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _launchTemplateId = value;
            }
        }

        private object? _launchTemplateVersion;

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
            get => _launchTemplateVersion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _launchTemplateVersion = value;
            }
        }

        private object? _maxSpotPrice;

        /// <summary>Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.</summary>
        /// <remarks>
        /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MaxSpotPrice
        {
            get => _maxSpotPrice;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _maxSpotPrice = value;
            }
        }

        private object? _minTargetCapacity;

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
            get => _minTargetCapacity;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _minTargetCapacity = value;
            }
        }

        private object? _payAsYouGoAllocationStrategy;

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
            get => _payAsYouGoAllocationStrategy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _payAsYouGoAllocationStrategy = value;
            }
        }

        private object? _payAsYouGoTargetCapacity;

        /// <summary>Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.</summary>
        /// <remarks>
        /// Valid values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayAsYouGoTargetCapacity
        {
            get => _payAsYouGoTargetCapacity;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _payAsYouGoTargetCapacity = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        private object? _resourcePoolOptions;

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
            get => _resourcePoolOptions;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IResourcePoolOptionsProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IResourcePoolOptionsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourcePoolOptions = value;
            }
        }

        private object? _spotAllocationStrategy;

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
            get => _spotAllocationStrategy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _spotAllocationStrategy = value;
            }
        }

        private object? _spotInstanceInterruptionBehavior;

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
            get => _spotInstanceInterruptionBehavior;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _spotInstanceInterruptionBehavior = value;
            }
        }

        private object? _spotInstancePoolsToUseCount;

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
            get => _spotInstancePoolsToUseCount;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _spotInstancePoolsToUseCount = value;
            }
        }

        private object? _spotTargetCapacity;

        /// <summary>Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group.</summary>
        /// <remarks>
        /// Valid
        /// values: Integers less than or equal to the value of <c>TotalTargetCapacity</c>.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotTargetCapacity
        {
            get => _spotTargetCapacity;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _spotTargetCapacity = value;
            }
        }

        private object? _systemDiskConfig;

        /// <summary>Property systemDiskConfig: List of instance system disk information.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.SystemDiskConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SystemDiskConfig
        {
            get => _systemDiskConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ISystemDiskConfigProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ISystemDiskConfigProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ISystemDiskConfigProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _systemDiskConfig = value;
            }
        }

        private object? _terminateInstances;

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
            get => _terminateInstances;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _terminateInstances = value;
            }
        }

        private object? _terminateInstancesWithExpiration;

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
            get => _terminateInstancesWithExpiration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _terminateInstancesWithExpiration = value;
            }
        }

        private object? _validFrom;

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
            get => _validFrom;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _validFrom = value;
            }
        }

        private object? _validUntil;

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
            get => _validUntil;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _validUntil = value;
            }
        }
    }
}

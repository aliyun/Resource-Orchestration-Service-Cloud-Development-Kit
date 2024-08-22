using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosRecommendInstanceTypes`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRecommendInstanceTypesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypesProps")]
    public interface IRosRecommendInstanceTypesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cores: The number of vCPUs of the instance.
        /// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        /// </remarks>
        [JsiiProperty(name: "cores", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cores
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: The billing method of the instances of the instance type. Valid values:
        /// PrePaid: subscription
        /// PostPaid: pay-as-you-go
        /// Default value: PostPaid.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
        /// </remarks>
        [JsiiProperty(name: "instanceFamilyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceFamilyLevel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
        /// Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
        /// </remarks>
        [JsiiProperty(name: "instanceTypeFamilies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypeFamilies
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
        /// optimized: matches I\/O optimized instances.
        /// none: matches non-I\/O optimized instances.
        /// Default value: optimized.
        /// If you query alternative instance types for retired instance types, this parameter is set to none by default.
        /// Default value: none.
        /// </remarks>
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoOptimized
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
        /// Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "maxPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxPrice
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: The memory size of the instance. Unit: GiB.
        /// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: priorityStrategy: The policy for recommending instance types. Valid values:
        /// InventoryFirst: Instance types are recommended in descending order based on resource availability.
        /// PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
        /// NewProductFirst: The latest instance types are recommended first.
        /// Default value: InventoryFirst.
        /// </remarks>
        [JsiiProperty(name: "priorityStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PriorityStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scene: Specifies the scenario in which the instance type is recommended. Valid values:
        /// UPGRADE: instance type upgrade or downgrade
        /// CREATE: instance creation
        /// Default value: CREATE.
        /// </remarks>
        [JsiiProperty(name: "scene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scene
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: The bidding policy of preemptible instances. Valid values:
        /// NoSpot: applies to regular pay-as-you-go instances.
        /// SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
        /// SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
        /// Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
        /// Default value: NoSpot.
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// cloud_essd: enhanced SSD (ESSD)
        /// cloud: basic disk
        /// For non-I\/O optimized instances, the default value is cloud.
        /// For I\/O optimized instances, the default value is cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
        /// Strict: recommends only alternative instance types in the zone specified by ZoneId.
        /// Include: recommends all instance types in all the zones in the same region as the specified instance type.
        /// When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
        /// </remarks>
        [JsiiProperty(name: "zoneMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneMatchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRecommendInstanceTypes`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRecommendInstanceTypesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosRecommendInstanceTypesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cores: The number of vCPUs of the instance.
            /// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cores", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cores
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: The billing method of the instances of the instance type. Valid values:
            /// PrePaid: subscription
            /// PostPaid: pay-as-you-go
            /// Default value: PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceFamilyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceFamilyLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
            /// Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypeFamilies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceTypeFamilies
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
            /// optimized: matches I\/O optimized instances.
            /// none: matches non-I\/O optimized instances.
            /// Default value: optimized.
            /// If you query alternative instance types for retired instance types, this parameter is set to none by default.
            /// Default value: none.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
            /// Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxPrice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory size of the instance. Unit: GiB.
            /// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priorityStrategy: The policy for recommending instance types. Valid values:
            /// InventoryFirst: Instance types are recommended in descending order based on resource availability.
            /// PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
            /// NewProductFirst: The latest instance types are recommended first.
            /// Default value: InventoryFirst.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priorityStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PriorityStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scene: Specifies the scenario in which the instance type is recommended. Valid values:
            /// UPGRADE: instance type upgrade or downgrade
            /// CREATE: instance creation
            /// Default value: CREATE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scene
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: The bidding policy of preemptible instances. Valid values:
            /// NoSpot: applies to regular pay-as-you-go instances.
            /// SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
            /// SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
            /// Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
            /// Default value: NoSpot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// cloud_essd: enhanced SSD (ESSD)
            /// cloud: basic disk
            /// For non-I\/O optimized instances, the default value is cloud.
            /// For I\/O optimized instances, the default value is cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
            /// Strict: recommends only alternative instance types in the zone specified by ZoneId.
            /// Include: recommends all instance types in all the zones in the same region as the specified instance type.
            /// When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneMatchMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

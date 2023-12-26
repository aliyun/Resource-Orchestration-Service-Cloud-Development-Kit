using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Zones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ZonesProps")]
    public interface IZonesProps
    {
        /// <summary>Property dataDiskCategory: The category of the data disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud: basic disk
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// ephemeral_ssd: local SSD
        /// cloud_essd: enhanced SSD (ESSD)
        /// </remarks>
        [JsiiProperty(name: "dataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method of the resource.</summary>
        /// <remarks>
        /// For more information, see Billing overview. Valid values:
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

        /// <summary>Property instanceType: The instance type.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ioOptimized: Specifies whether the instance is I\/O optimized.</summary>
        /// <remarks>
        /// Valid values:
        /// none: non-I/O optimized
        /// optimized: I/O optimized
        /// Default value: optimized.
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

        /// <summary>Property resourceType: The type of the resource.</summary>
        /// <remarks>
        /// Valid values:
        /// instance: ECS instance
        /// disk: cloud disk
        /// reservedinstance: reserved instance
        /// ddh: dedicated host
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskCategory: The category of the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud: basic disk
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// ephemeral_ssd: local SSD
        /// cloud_essd: enhanced SSD (ESSD)
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

        /// <summary>Properties for defining a `Zones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dataDiskCategory: The category of the data disk.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud: basic disk
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// ephemeral_ssd: local SSD
            /// cloud_essd: enhanced SSD (ESSD)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the resource.</summary>
            /// <remarks>
            /// For more information, see Billing overview. Valid values:
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

            /// <summary>Property instanceType: The instance type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ioOptimized: Specifies whether the instance is I\/O optimized.</summary>
            /// <remarks>
            /// Valid values:
            /// none: non-I/O optimized
            /// optimized: I/O optimized
            /// Default value: optimized.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceType: The type of the resource.</summary>
            /// <remarks>
            /// Valid values:
            /// instance: ECS instance
            /// disk: cloud disk
            /// reservedinstance: reserved instance
            /// ddh: dedicated host
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemDiskCategory: The category of the system disk.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud: basic disk
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// ephemeral_ssd: local SSD
            /// cloud_essd: enhanced SSD (ESSD)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

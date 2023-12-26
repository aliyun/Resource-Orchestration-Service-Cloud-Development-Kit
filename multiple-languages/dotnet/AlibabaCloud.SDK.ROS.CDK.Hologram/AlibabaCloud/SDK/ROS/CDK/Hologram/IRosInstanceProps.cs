using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hologram
{
    /// <summary>Properties for defining a `RosInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-hologram.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endpoints: List of domain names.
        /// </remarks>
        [JsiiProperty(name: "endpoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.EndpointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Endpoints
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the resource.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The instance type. Value:
        /// - Standard: Universal.
        /// - Follower: Read-only slave instance.
        /// - Warehouse: calculation group type.
        /// - Shared: Shared.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: paymentType: The payment type of the resource.
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone Id.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Whether to pay automatically. The default value is true. Value:
        /// - true: automatic payment
        /// - false: only generate orders, not pay
        /// > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: coldStorageSize: Instance low-frequency storage space. Unit: GB.
        /// > Pay-As-You-Go (PostPaid) instances ignore this parameter.
        /// </remarks>
        [JsiiProperty(name: "coldStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ColdStorageSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: Instance specifications. Value:
        /// - 8 cores 32 GB (number of compute nodes: 1)
        /// - 16 cores 64 GB (number of compute nodes: 1)
        /// - 32 core 128 GB (number of compute nodes: 2)
        /// - 64 core 256 GB (number of compute nodes: 4)
        /// - 96 core 384 GB (number of computing nodes: 6)
        /// - 128 core 512 GB (number of compute nodes: 8)
        /// - Wait
        /// >>
        /// >- just fill in the audit number.
        /// >- Please submit a work order application for purchasing 1024 or above specifications.
        /// >- Shared instance types do not need to specify specifications.
        /// > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: The buying cycle. Buy for 2 months.
        /// > If the Payment type is PostPaid, you do not need to specify it.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gatewayCount: Number of gateway nodes.
        /// </remarks>
        [JsiiProperty(name: "gatewayCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: initialDatabases: Initialize the database and split multiple database names ",".
        /// </remarks>
        [JsiiProperty(name: "initialDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitialDatabases
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: leaderInstanceId: The id of leader instance.
        /// </remarks>
        [JsiiProperty(name: "leaderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LeaderInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: Billing cycle. Value:
        /// - Month: monthly billing
        /// - Hour: hourly billing
        /// >>
        /// > - PrePaid only supports Month
        /// > - PostPaid only supports Hour
        /// >- The Shared type is automatically set to Hour without specifying it.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: productCode: product code.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductCode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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
        /// <strong>Property</strong>: scaleType: Change matching type. Value:
        /// - UPGRADE: UPGRADE
        /// - DOWNGRADE: Downgrading
        /// >>
        /// >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
        /// >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
        /// </remarks>
        [JsiiProperty(name: "scaleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScaleType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: storageSize: The standard storage space of the instance. Unit: GB.
        /// > Pay-As-You-Go instances (PostPaid) ignore this parameter.
        /// </remarks>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of instance.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-hologram.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hologram.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endpoints: List of domain names.
            /// </remarks>
            [JsiiProperty(name: "endpoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.EndpointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Endpoints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the resource.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type. Value:
            /// - Standard: Universal.
            /// - Follower: Read-only slave instance.
            /// - Warehouse: calculation group type.
            /// - Shared: Shared.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: paymentType: The payment type of the resource.
            /// </remarks>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone Id.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Whether to pay automatically. The default value is true. Value:
            /// - true: automatic payment
            /// - false: only generate orders, not pay
            /// > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: coldStorageSize: Instance low-frequency storage space. Unit: GB.
            /// > Pay-As-You-Go (PostPaid) instances ignore this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdStorageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: Instance specifications. Value:
            /// - 8 cores 32 GB (number of compute nodes: 1)
            /// - 16 cores 64 GB (number of compute nodes: 1)
            /// - 32 core 128 GB (number of compute nodes: 2)
            /// - 64 core 256 GB (number of compute nodes: 4)
            /// - 96 core 384 GB (number of computing nodes: 6)
            /// - 128 core 512 GB (number of compute nodes: 8)
            /// - Wait
            /// >>
            /// >- just fill in the audit number.
            /// >- Please submit a work order application for purchasing 1024 or above specifications.
            /// >- Shared instance types do not need to specify specifications.
            /// > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: The buying cycle. Buy for 2 months.
            /// > If the Payment type is PostPaid, you do not need to specify it.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayCount: Number of gateway nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDatabases: Initialize the database and split multiple database names ",".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialDatabases
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: leaderInstanceId: The id of leader instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "leaderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LeaderInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle: Billing cycle. Value:
            /// - Month: monthly billing
            /// - Hour: hourly billing
            /// >>
            /// > - PrePaid only supports Month
            /// > - PostPaid only supports Hour
            /// >- The Shared type is automatically set to Hour without specifying it.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: productCode: product code.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scaleType: Change matching type. Value:
            /// - UPGRADE: UPGRADE
            /// - DOWNGRADE: Downgrading
            /// >>
            /// >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
            /// >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageSize: The standard storage space of the instance. Unit: GB.
            /// > Pay-As-You-Go instances (PostPaid) ignore this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]?>();
            }
        }
    }
}

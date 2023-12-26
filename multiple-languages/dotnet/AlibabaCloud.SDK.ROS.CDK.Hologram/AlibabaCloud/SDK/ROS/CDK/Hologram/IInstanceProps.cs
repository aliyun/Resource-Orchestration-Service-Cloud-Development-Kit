using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hologram
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-hologram.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property endpoints: List of domain names.</summary>
        [JsiiProperty(name: "endpoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.EndpointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Endpoints
        {
            get;
        }

        /// <summary>Property instanceName: The name of the resource.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property instanceType: The instance type.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>Standard: Universal.</description>
        /// <description>Follower: Read-only slave instance.</description>
        /// <description>Warehouse: calculation group type.</description>
        /// <description>Shared: Shared.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property paymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property zoneId: The zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property autoPay: Whether to pay automatically.</summary>
        /// <remarks>
        /// The default value is true. Value:
        ///
        /// <list type="bullet">
        /// <description>true: automatic payment</description>
        /// <description>false: only generate orders, not pay</description>
        /// </list>
        ///
        ///     The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
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

        /// <summary>Property coldStorageSize: Instance low-frequency storage space.</summary>
        /// <remarks>
        /// Unit: GB.
        ///
        ///     Pay-As-You-Go (PostPaid) instances ignore this parameter.
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

        /// <summary>Property cpu: Instance specifications.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>8 cores 32 GB (number of compute nodes: 1)</description>
        /// <description>16 cores 64 GB (number of compute nodes: 1)</description>
        /// <description>32 core 128 GB (number of compute nodes: 2)</description>
        /// <description>64 core 256 GB (number of compute nodes: 4)</description>
        /// <description>96 core 384 GB (number of computing nodes: 6)</description>
        /// <description>128 core 512 GB (number of compute nodes: 8)</description>
        /// <description>Wait</description>
        /// </list>
        ///
        ///
        ///
        /// <list type="bullet">
        ///     <description>just fill in the audit number.</description>
        ///     <description>Please submit a work order application for purchasing 1024 or above specifications.</description>
        ///     <description>Shared instance types do not need to specify specifications.
        ///     The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</description>
        ///     </list>
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

        /// <summary>Property duration: The buying cycle.</summary>
        /// <remarks>
        /// Buy for 2 months.
        ///
        ///     If the Payment type is PostPaid, you do not need to specify it.
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

        /// <summary>Property gatewayCount: Number of gateway nodes.</summary>
        [JsiiProperty(name: "gatewayCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initialDatabases: Initialize the database and split multiple database names ",".</summary>
        [JsiiProperty(name: "initialDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitialDatabases
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property leaderInstanceId: The id of leader instance.</summary>
        [JsiiProperty(name: "leaderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LeaderInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Billing cycle.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>Month: monthly billing</description>
        /// <description>Hour: hourly billing</description>
        /// </list>
        ///
        ///
        ///
        /// <list type="bullet">
        ///     <description>PrePaid only supports Month</description>
        ///     <description>PostPaid only supports Hour</description>
        ///     <description>The Shared type is automatically set to Hour without specifying it.</description>
        ///     </list>
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

        /// <summary>Property productCode: product code.</summary>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scaleType: Change matching type.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>UPGRADE: UPGRADE</description>
        /// <description>DOWNGRADE: Downgrading</description>
        /// </list>
        ///
        ///
        ///
        /// <list type="bullet">
        ///     <description>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</description>
        ///     <description>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</description>
        ///     </list>
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

        /// <summary>Property storageSize: The standard storage space of the instance.</summary>
        /// <remarks>
        /// Unit: GB.
        ///
        ///     Pay-As-You-Go instances (PostPaid) ignore this parameter.
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

        /// <summary>Property tags: Tags of instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-hologram.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hologram.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpoints: List of domain names.</summary>
            [JsiiProperty(name: "endpoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.EndpointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Endpoints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The name of the resource.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: The instance type.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>Standard: Universal.</description>
            /// <description>Follower: Read-only slave instance.</description>
            /// <description>Warehouse: calculation group type.</description>
            /// <description>Shared: Shared.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property paymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone Id.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoPay: Whether to pay automatically.</summary>
            /// <remarks>
            /// The default value is true. Value:
            ///
            /// <list type="bullet">
            /// <description>true: automatic payment</description>
            /// <description>false: only generate orders, not pay</description>
            /// </list>
            ///
            ///     The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coldStorageSize: Instance low-frequency storage space.</summary>
            /// <remarks>
            /// Unit: GB.
            ///
            ///     Pay-As-You-Go (PostPaid) instances ignore this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdStorageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: Instance specifications.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>8 cores 32 GB (number of compute nodes: 1)</description>
            /// <description>16 cores 64 GB (number of compute nodes: 1)</description>
            /// <description>32 core 128 GB (number of compute nodes: 2)</description>
            /// <description>64 core 256 GB (number of compute nodes: 4)</description>
            /// <description>96 core 384 GB (number of computing nodes: 6)</description>
            /// <description>128 core 512 GB (number of compute nodes: 8)</description>
            /// <description>Wait</description>
            /// </list>
            ///
            ///
            ///
            /// <list type="bullet">
            ///     <description>just fill in the audit number.</description>
            ///     <description>Please submit a work order application for purchasing 1024 or above specifications.</description>
            ///     <description>Shared instance types do not need to specify specifications.
            ///     The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: The buying cycle.</summary>
            /// <remarks>
            /// Buy for 2 months.
            ///
            ///     If the Payment type is PostPaid, you do not need to specify it.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gatewayCount: Number of gateway nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initialDatabases: Initialize the database and split multiple database names ",".</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initialDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialDatabases
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property leaderInstanceId: The id of leader instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "leaderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LeaderInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: Billing cycle.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>Month: monthly billing</description>
            /// <description>Hour: hourly billing</description>
            /// </list>
            ///
            ///
            ///
            /// <list type="bullet">
            ///     <description>PrePaid only supports Month</description>
            ///     <description>PostPaid only supports Hour</description>
            ///     <description>The Shared type is automatically set to Hour without specifying it.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productCode: product code.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scaleType: Change matching type.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>UPGRADE: UPGRADE</description>
            /// <description>DOWNGRADE: Downgrading</description>
            /// </list>
            ///
            ///
            ///
            /// <list type="bullet">
            ///     <description>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</description>
            ///     <description>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScaleType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSize: The standard storage space of the instance.</summary>
            /// <remarks>
            /// Unit: GB.
            ///
            ///     Pay-As-You-Go instances (PostPaid) ignore this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hologram.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hologram.RosInstance.ITagsProperty[]?>();
            }
        }
    }
}

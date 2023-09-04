using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Swas
{
    /// <summary>Properties for defining a `ALIYUN::SWAS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property imageId: The image ID.</summary>
        /// <remarks>
        /// You can call the ListImages operation to query the available images in the specified region.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageId
        {
            get;
        }

        /// <summary>Property period: The subscription period of the servers.</summary>
        /// <remarks>
        /// Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property planId: The plan ID.</summary>
        /// <remarks>
        /// You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        /// </remarks>
        [JsiiProperty(name: "planId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PlanId
        {
            get;
        }

        /// <summary>Property autoRenew: Specifies whether to enable auto-renewal.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
        /// <remarks>
        /// This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataDiskSize: The size of the data disk that is attached to the server.</summary>
        /// <remarks>
        /// Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        /// A value of 0 indicates that no data disk is attached.
        /// If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        /// Default value: 0.
        /// </remarks>
        [JsiiProperty(name: "dataDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SWAS::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Swas.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageId: The image ID.</summary>
            /// <remarks>
            /// You can call the ListImages operation to query the available images in the specified region.
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period: The subscription period of the servers.</summary>
            /// <remarks>
            /// Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property planId: The plan ID.</summary>
            /// <remarks>
            /// You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
            /// </remarks>
            [JsiiProperty(name: "planId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto-renewal.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
            /// <remarks>
            /// This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataDiskSize: The size of the data disk that is attached to the server.</summary>
            /// <remarks>
            /// Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
            /// A value of 0 indicates that no data disk is attached.
            /// If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
            /// Default value: 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataDiskSize
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

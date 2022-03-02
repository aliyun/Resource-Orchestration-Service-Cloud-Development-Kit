using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    /// <summary>Properties for defining a `ALIYUN::TSDB::HiTSDBInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IHiTSDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.HiTSDBInstanceProps")]
    public interface IHiTSDBInstanceProps
    {
        /// <summary>Property instanceClass: The type of the instance.</summary>
        /// <remarks>
        /// For more information, see Instance types:
        /// tsdb.1x.basic: Basic Edition I
        /// tsdb.3x.basic: Basic Edition II
        /// tsdb.4x.basic: Basic Edition III
        /// tsdb.12x.standard: Standard Edition I
        /// tsdb.24x.standard: Standard Edition II
        /// tsdb.48x.large: Ultimate Edition I
        /// tsdb.96x.large: Ultimate Edition II and so on.
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceClass
        {
            get;
        }

        /// <summary>Property instanceStorage: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: GB. For example, the value 50 indicates 50 GB.
        /// </remarks>
        [JsiiProperty(name: "instanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceStorage
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch in the specified VPC.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: The zone ID of the instance.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property diskCategory: The category of disk.</summary>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: The validity period of the instance.</summary>
        /// <remarks>
        /// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
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

        /// <summary>Property instanceAlias: The alias of the instance.</summary>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method.</summary>
        /// <remarks>
        /// Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: The unit of the validity period.</summary>
        /// <remarks>
        /// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
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

        /// <summary>Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::TSDB::HiTSDBInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHiTSDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.HiTSDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Tsdb.IHiTSDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceClass: The type of the instance.</summary>
            /// <remarks>
            /// For more information, see Instance types:
            /// tsdb.1x.basic: Basic Edition I
            /// tsdb.3x.basic: Basic Edition II
            /// tsdb.4x.basic: Basic Edition III
            /// tsdb.12x.standard: Standard Edition I
            /// tsdb.24x.standard: Standard Edition II
            /// tsdb.48x.large: Ultimate Edition I
            /// tsdb.96x.large: Ultimate Edition II and so on.
            /// </remarks>
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceStorage: The storage capacity of the instance.</summary>
            /// <remarks>
            /// Unit: GB. For example, the value 50 indicates 50 GB.
            /// </remarks>
            [JsiiProperty(name: "instanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch in the specified VPC.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone ID of the instance.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property diskCategory: The category of disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: The validity period of the instance.</summary>
            /// <remarks>
            /// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceAlias: The alias of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceAlias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method.</summary>
            /// <remarks>
            /// Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The unit of the validity period.</summary>
            /// <remarks>
            /// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

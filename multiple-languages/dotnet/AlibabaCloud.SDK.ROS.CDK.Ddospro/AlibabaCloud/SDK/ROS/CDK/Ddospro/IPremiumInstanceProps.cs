using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `PremiumInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPremiumInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.PremiumInstanceProps")]
    public interface IPremiumInstanceProps
    {
        /// <summary>Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: disables the burstable clean bandwidth feature.
        /// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        /// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        /// </remarks>
        [JsiiProperty(name: "burstBandwidthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BurstBandwidthMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainCount: The number of domain names that you want to protect.</summary>
        /// <remarks>
        /// The value of DomainCount varies based on the value of ProductPlan.
        /// If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        /// If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        /// If you set ProductPlan to 2, you do not need to specify this parameter.
        /// If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        /// </remarks>
        [JsiiProperty(name: "domainCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property functionVersion: The function plan of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: the Standard function plan
        /// 1: the Enhanced function plan.
        /// </remarks>
        [JsiiProperty(name: "functionVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FunctionVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property normalBandwidth: The clean bandwidth provided by the instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// The value of NormalBandwidth varies based on the value of ProductPlan.
        /// If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        /// If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        /// If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
        /// If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
        /// </remarks>
        [JsiiProperty(name: "normalBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NormalBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property normalQps: The clean QPS provided by the instance.</summary>
        /// <remarks>
        /// The value of NormalQps varies based on the value of ProductPlan.
        /// If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        /// If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
        /// If you set ProductPlan to 2, you do not need to specify this parameter.
        /// If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        /// </remarks>
        [JsiiProperty(name: "normalQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NormalQps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// Default value: Month.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property portCount: The number of ports that you want to protect.</summary>
        /// <remarks>
        /// The value of PortCount varies based on the value of ProductPlan.
        /// If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        /// If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        /// If you set ProductPlan to 2, you do not need to specify this parameter.
        /// If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        /// </remarks>
        [JsiiProperty(name: "portCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property productPlan: The mitigation plan of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: the Insurance mitigation plan
        /// 1: the Unlimited mitigation plan
        /// 2: the Chinese Mainland Acceleration (CMA) mitigation plan
        /// 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
        /// </remarks>
        [JsiiProperty(name: "productPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductPlan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PremiumInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPremiumInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.PremiumInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.IPremiumInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: disables the burstable clean bandwidth feature.
            /// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
            /// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstBandwidthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstBandwidthMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainCount: The number of domain names that you want to protect.</summary>
            /// <remarks>
            /// The value of DomainCount varies based on the value of ProductPlan.
            /// If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
            /// If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
            /// If you set ProductPlan to 2, you do not need to specify this parameter.
            /// If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property functionVersion: The function plan of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: the Standard function plan
            /// 1: the Enhanced function plan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FunctionVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property normalBandwidth: The clean bandwidth provided by the instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// The value of NormalBandwidth varies based on the value of ProductPlan.
            /// If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
            /// If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
            /// If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
            /// If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "normalBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NormalBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property normalQps: The clean QPS provided by the instance.</summary>
            /// <remarks>
            /// The value of NormalQps varies based on the value of ProductPlan.
            /// If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
            /// If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
            /// If you set ProductPlan to 2, you do not need to specify this parameter.
            /// If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "normalQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NormalQps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property portCount: The number of ports that you want to protect.</summary>
            /// <remarks>
            /// The value of PortCount varies based on the value of ProductPlan.
            /// If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
            /// If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
            /// If you set ProductPlan to 2, you do not need to specify this parameter.
            /// If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "portCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PortCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productPlan: The mitigation plan of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: the Insurance mitigation plan
            /// 1: the Unlimited mitigation plan
            /// 2: the Chinese Mainland Acceleration (CMA) mitigation plan
            /// 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "productPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductPlan
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

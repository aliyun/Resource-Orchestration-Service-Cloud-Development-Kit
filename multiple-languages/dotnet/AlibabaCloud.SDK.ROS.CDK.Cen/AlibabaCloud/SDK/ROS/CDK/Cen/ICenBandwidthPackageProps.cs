using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(ICenBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthPackageProps")]
    public interface ICenBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The bandwidth in Mbps of the bandwidth package.</summary>
        /// <remarks>
        /// The bandwidth cannot be less than 2 Mbps.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property geographicRegionAId: The other area A to connect.</summary>
        /// <remarks>
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionAId", typeJson: "{\"primitive\":\"string\"}")]
        string GeographicRegionAId
        {
            get;
        }

        /// <summary>Property geographicRegionBId: The other area B to connect.</summary>
        /// <remarks>
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionBId", typeJson: "{\"primitive\":\"string\"}")]
        string GeographicRegionBId
        {
            get;
        }

        /// <summary>Property autoPay: Whether to automatically pay the bill.</summary>
        /// <remarks>
        /// Valid value:
        /// true
        /// false (Default)
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

        /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled.</summary>
        /// <remarks>
        /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
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

        /// <summary>Property autoRenewDuration: Duration of each automatic renewals.</summary>
        /// <remarks>
        /// It takes effect when AutoRenew is true.
        /// </remarks>
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? AutoRenewDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidthPackageChargeType: The billing method.</summary>
        /// <remarks>
        /// Valid value: PREPAY, POSTPAY (Default)
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BandwidthPackageChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the bandwidth package.</summary>
        /// <remarks>
        /// The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the bandwidth package.</summary>
        /// <remarks>
        /// The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The purchase period.</summary>
        /// <remarks>
        /// The default value is 1.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: The pricing cycle.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The bandwidth in Mbps of the bandwidth package.</summary>
            /// <remarks>
            /// The bandwidth cannot be less than 2 Mbps.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property geographicRegionAId: The other area A to connect.</summary>
            /// <remarks>
            /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
            /// </remarks>
            [JsiiProperty(name: "geographicRegionAId", typeJson: "{\"primitive\":\"string\"}")]
            public string GeographicRegionAId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property geographicRegionBId: The other area B to connect.</summary>
            /// <remarks>
            /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
            /// </remarks>
            [JsiiProperty(name: "geographicRegionBId", typeJson: "{\"primitive\":\"string\"}")]
            public string GeographicRegionBId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoPay: Whether to automatically pay the bill.</summary>
            /// <remarks>
            /// Valid value:
            /// true
            /// false (Default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled.</summary>
            /// <remarks>
            /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewDuration: Duration of each automatic renewals.</summary>
            /// <remarks>
            /// It takes effect when AutoRenew is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AutoRenewDuration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property bandwidthPackageChargeType: The billing method.</summary>
            /// <remarks>
            /// Valid value: PREPAY, POSTPAY (Default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BandwidthPackageChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: The description of the bandwidth package.</summary>
            /// <remarks>
            /// The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: The name of the bandwidth package.</summary>
            /// <remarks>
            /// The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: The purchase period.</summary>
            /// <remarks>
            /// The default value is 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property pricingCycle: The pricing cycle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

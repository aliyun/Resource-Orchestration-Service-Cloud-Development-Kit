using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageProps")]
    public interface IBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The bandwidth provided by the bandwidth plan.</summary>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property type: The type of the bandwidth plan.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>Property autoPay: The AutoPay of the bandwidth.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BandwidthType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property billingType: The BillingType of the bandwidth.</summary>
        [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BillingType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CbnGeographicRegionIdA
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CbnGeographicRegionIdB
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The ChargeType of the bandwidth.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration:.</summary>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle:.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ratio: The Ratio of the bandwidth.</summary>
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Ratio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The bandwidth provided by the bandwidth plan.</summary>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property type: The type of the bandwidth plan.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoPay: The AutoPay of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoPay
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoUseCoupon
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property bandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BandwidthType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property billingType: The BillingType of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BillingType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CbnGeographicRegionIdA
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CbnGeographicRegionIdB
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property chargeType: The ChargeType of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property duration:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Duration
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pricingCycle:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ratio: The Ratio of the bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ratio
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

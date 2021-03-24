using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBandwidthPackageProps")]
    public interface IRosBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth provided by the bandwidth plan.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the bandwidth plan
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthType: the bandwidth BandwidthType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BandwidthType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: billingType: The BillingType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BillingType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CbnGeographicRegionIdA
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CbnGeographicRegionIdB
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The ChargeType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: duration:
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Duration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle:
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The Ratio of the bandwidth
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth provided by the bandwidth plan.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the bandwidth plan
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: The AutoPay of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoPay
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon  of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoUseCoupon
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthType: the bandwidth BandwidthType of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BandwidthType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: billingType: The BillingType of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BillingType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CbnGeographicRegionIdA
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CbnGeographicRegionIdB
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The ChargeType of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duration:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Duration
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ratio: The Ratio of the bandwidth
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ratio
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

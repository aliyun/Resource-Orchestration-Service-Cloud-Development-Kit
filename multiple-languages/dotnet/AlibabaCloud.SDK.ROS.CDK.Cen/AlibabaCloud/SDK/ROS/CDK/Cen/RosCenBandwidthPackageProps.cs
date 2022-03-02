using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageProps")]
    public class RosCenBandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: geographicRegionAId: The other area A to connect.
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionAId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GeographicRegionAId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: geographicRegionBId: The other area B to connect.
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionBId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GeographicRegionBId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Whether to automatically pay the bill. Valid value:
        /// true
        /// false (Default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenewDuration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthPackageChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BandwidthPackageChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the bandwidth package.
        /// The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the bandwidth package.
        /// The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The purchase period. The default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The pricing cycle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }
    }
}

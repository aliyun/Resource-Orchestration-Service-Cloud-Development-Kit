using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Waf.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bigScreen:
        /// </remarks>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BigScreen
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveIpPackage:
        /// </remarks>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExclusiveIpPackage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: extBandwidth:
        /// </remarks>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExtBandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: extDomainPackage:
        /// </remarks>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExtDomainPackage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logStorage:
        /// </remarks>
        [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LogStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logTime:
        /// </remarks>
        [JsiiProperty(name: "logTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LogTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageCode:
        /// </remarks>
        [JsiiProperty(name: "packageCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PackageCode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: prefessionalService:
        /// </remarks>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PrefessionalService
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionType: Subscription type of the instance
        /// </remarks>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SubscriptionType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: wafLog:
        /// </remarks>
        [JsiiProperty(name: "wafLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object WafLog
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RenewalStatus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: renewPeriod:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RenewPeriod
        {
            get;
            set;
        }
    }
}

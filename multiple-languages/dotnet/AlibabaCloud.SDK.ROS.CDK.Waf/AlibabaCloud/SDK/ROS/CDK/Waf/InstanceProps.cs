using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::WAF::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-waf.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps
    {
        /// <summary>Property bigScreen:.</summary>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BigScreen
        {
            get;
            set;
        }

        /// <summary>Property exclusiveIpPackage:.</summary>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExclusiveIpPackage
        {
            get;
            set;
        }

        /// <summary>Property extBandwidth:.</summary>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExtBandwidth
        {
            get;
            set;
        }

        /// <summary>Property extDomainPackage:.</summary>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExtDomainPackage
        {
            get;
            set;
        }

        /// <summary>Property logStorage:.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LogStorage
        {
            get;
            set;
        }

        /// <summary>Property logTime:.</summary>
        [JsiiProperty(name: "logTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LogTime
        {
            get;
            set;
        }

        /// <summary>Property packageCode:.</summary>
        [JsiiProperty(name: "packageCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PackageCode
        {
            get;
            set;
        }

        /// <summary>Property prefessionalService:.</summary>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PrefessionalService
        {
            get;
            set;
        }

        /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SubscriptionType
        {
            get;
            set;
        }

        /// <summary>Property wafLog:.</summary>
        [JsiiProperty(name: "wafLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object WafLog
        {
            get;
            set;
        }

        /// <summary>Property period:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property renewalStatus:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RenewalStatus
        {
            get;
            set;
        }

        /// <summary>Property renewPeriod:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RenewPeriod
        {
            get;
            set;
        }
    }
}

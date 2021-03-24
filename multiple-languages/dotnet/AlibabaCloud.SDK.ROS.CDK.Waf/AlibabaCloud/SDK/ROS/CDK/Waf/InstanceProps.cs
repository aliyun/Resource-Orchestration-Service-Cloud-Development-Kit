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
        [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BigScreen
        {
            get;
            set;
        }

        /// <summary>Property exclusiveIpPackage:.</summary>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExclusiveIpPackage
        {
            get;
            set;
        }

        /// <summary>Property extBandwidth:.</summary>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExtBandwidth
        {
            get;
            set;
        }

        /// <summary>Property extDomainPackage:.</summary>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExtDomainPackage
        {
            get;
            set;
        }

        /// <summary>Property logStorage:.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogStorage
        {
            get;
            set;
        }

        /// <summary>Property logTime:.</summary>
        [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogTime
        {
            get;
            set;
        }

        /// <summary>Property packageCode:.</summary>
        [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PackageCode
        {
            get;
            set;
        }

        /// <summary>Property prefessionalService:.</summary>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PrefessionalService
        {
            get;
            set;
        }

        /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SubscriptionType
        {
            get;
            set;
        }

        /// <summary>Property wafLog:.</summary>
        [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string WafLog
        {
            get;
            set;
        }

        /// <summary>Property period:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Period
        {
            get;
            set;
        }

        /// <summary>Property renewalStatus:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RenewalStatus
        {
            get;
            set;
        }

        /// <summary>Property renewPeriod:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RenewPeriod
        {
            get;
            set;
        }
    }
}

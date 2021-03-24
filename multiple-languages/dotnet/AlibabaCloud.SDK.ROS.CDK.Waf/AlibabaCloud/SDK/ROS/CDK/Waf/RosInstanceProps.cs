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
        [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BigScreen
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveIpPackage:
        /// </remarks>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExclusiveIpPackage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: extBandwidth:
        /// </remarks>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExtBandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: extDomainPackage:
        /// </remarks>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExtDomainPackage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logStorage:
        /// </remarks>
        [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logTime:
        /// </remarks>
        [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageCode:
        /// </remarks>
        [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PackageCode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: prefessionalService:
        /// </remarks>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PrefessionalService
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionType: Subscription type of the instance
        /// </remarks>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SubscriptionType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: wafLog:
        /// </remarks>
        [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string WafLog
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RenewalStatus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: renewPeriod:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RenewPeriod
        {
            get;
            set;
        }
    }
}

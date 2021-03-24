using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property bigScreen:.</summary>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}")]
        string BigScreen
        {
            get;
        }

        /// <summary>Property exclusiveIpPackage:.</summary>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}")]
        string ExclusiveIpPackage
        {
            get;
        }

        /// <summary>Property extBandwidth:.</summary>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}")]
        string ExtBandwidth
        {
            get;
        }

        /// <summary>Property extDomainPackage:.</summary>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}")]
        string ExtDomainPackage
        {
            get;
        }

        /// <summary>Property logStorage:.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}")]
        string LogStorage
        {
            get;
        }

        /// <summary>Property logTime:.</summary>
        [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}")]
        string LogTime
        {
            get;
        }

        /// <summary>Property packageCode:.</summary>
        [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}")]
        string PackageCode
        {
            get;
        }

        /// <summary>Property prefessionalService:.</summary>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}")]
        string PrefessionalService
        {
            get;
        }

        /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionType
        {
            get;
        }

        /// <summary>Property wafLog:.</summary>
        [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}")]
        string WafLog
        {
            get;
        }

        /// <summary>Property period:.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewalStatus:.</summary>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewPeriod:.</summary>
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::WAF::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bigScreen:.</summary>
            [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}")]
            public string BigScreen
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property exclusiveIpPackage:.</summary>
            [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}")]
            public string ExclusiveIpPackage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property extBandwidth:.</summary>
            [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}")]
            public string ExtBandwidth
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property extDomainPackage:.</summary>
            [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}")]
            public string ExtDomainPackage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property logStorage:.</summary>
            [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}")]
            public string LogStorage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property logTime:.</summary>
            [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}")]
            public string LogTime
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property packageCode:.</summary>
            [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}")]
            public string PackageCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property prefessionalService:.</summary>
            [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}")]
            public string PrefessionalService
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
            [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property wafLog:.</summary>
            [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}")]
            public string WafLog
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property period:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Period
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property renewalStatus:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RenewalStatus
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property renewPeriod:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RenewPeriod
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bigScreen:
        /// </remarks>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}")]
        string BigScreen
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveIpPackage:
        /// </remarks>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}")]
        string ExclusiveIpPackage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: extBandwidth:
        /// </remarks>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}")]
        string ExtBandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: extDomainPackage:
        /// </remarks>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}")]
        string ExtDomainPackage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logStorage:
        /// </remarks>
        [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}")]
        string LogStorage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logTime:
        /// </remarks>
        [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}")]
        string LogTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageCode:
        /// </remarks>
        [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}")]
        string PackageCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: prefessionalService:
        /// </remarks>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}")]
        string PrefessionalService
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionType: Subscription type of the instance
        /// </remarks>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: wafLog:
        /// </remarks>
        [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}")]
        string WafLog
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: period:
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus:
        /// </remarks>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: renewPeriod:
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bigScreen:
            /// </remarks>
            [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}")]
            public string BigScreen
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: exclusiveIpPackage:
            /// </remarks>
            [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}")]
            public string ExclusiveIpPackage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: extBandwidth:
            /// </remarks>
            [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}")]
            public string ExtBandwidth
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: extDomainPackage:
            /// </remarks>
            [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}")]
            public string ExtDomainPackage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStorage:
            /// </remarks>
            [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}")]
            public string LogStorage
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logTime:
            /// </remarks>
            [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}")]
            public string LogTime
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: packageCode:
            /// </remarks>
            [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}")]
            public string PackageCode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: prefessionalService:
            /// </remarks>
            [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}")]
            public string PrefessionalService
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionType: Subscription type of the instance
            /// </remarks>
            [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafLog:
            /// </remarks>
            [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}")]
            public string WafLog
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: period:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Period
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: renewalStatus:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RenewalStatus
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: renewPeriod:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RenewPeriod
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

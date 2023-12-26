using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property bigScreen:.</summary>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BigScreen
        {
            get;
        }

        /// <summary>Property exclusiveIpPackage:.</summary>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExclusiveIpPackage
        {
            get;
        }

        /// <summary>Property extBandwidth:.</summary>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExtBandwidth
        {
            get;
        }

        /// <summary>Property extDomainPackage:.</summary>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExtDomainPackage
        {
            get;
        }

        /// <summary>Property logStorage:.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStorage
        {
            get;
        }

        /// <summary>Property logTime:.</summary>
        [JsiiProperty(name: "logTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogTime
        {
            get;
        }

        /// <summary>Property packageCode:.</summary>
        [JsiiProperty(name: "packageCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageCode
        {
            get;
        }

        /// <summary>Property prefessionalService:.</summary>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrefessionalService
        {
            get;
        }

        /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubscriptionType
        {
            get;
        }

        /// <summary>Property wafLog:.</summary>
        [JsiiProperty(name: "wafLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WafLog
        {
            get;
        }

        /// <summary>Property period:.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewalStatus:.</summary>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewPeriod:.</summary>
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bigScreen:.</summary>
            [JsiiProperty(name: "bigScreen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BigScreen
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exclusiveIpPackage:.</summary>
            [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExclusiveIpPackage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property extBandwidth:.</summary>
            [JsiiProperty(name: "extBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExtBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property extDomainPackage:.</summary>
            [JsiiProperty(name: "extDomainPackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExtDomainPackage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logStorage:.</summary>
            [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logTime:.</summary>
            [JsiiProperty(name: "logTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property packageCode:.</summary>
            [JsiiProperty(name: "packageCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property prefessionalService:.</summary>
            [JsiiProperty(name: "prefessionalService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrefessionalService
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subscriptionType: Subscription type of the instance.</summary>
            [JsiiProperty(name: "subscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubscriptionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property wafLog:.</summary>
            [JsiiProperty(name: "wafLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WafLog
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewalStatus:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewPeriod:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

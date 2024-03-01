using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property dnsSecurity: The DNS security policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>no: No protection against DNS attacks is provided.</description>
        /// <description>basic: Basic protection against DNS attacks is provided.</description>
        /// <description>advanced: Advanced protection against DNS attacks is provided.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dnsSecurity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DnsSecurity
        {
            get;
        }

        /// <summary>Property domainNumbers: The number of domain names.</summary>
        [JsiiProperty(name: "domainNumbers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainNumbers
        {
            get;
        }

        /// <summary>Property period: The subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>If unit is month: 1, 2, 3, 6</description>
        /// <description>If unit is year: 1, 2</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property periodUnit: The subscription duration unit.</summary>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodUnit
        {
            get;
        }

        /// <summary>Property version: The edition of Alibaba Cloud DNS.</summary>
        /// <remarks>
        /// Valid values:
        /// If create hosted public zone:
        ///
        /// <list type="bullet">
        /// <description>version_personal: Personal Edition.</description>
        /// <description>version_enterprise_basic: Enterprise Standard Edition.</description>
        /// <description>version_enterprise_advanced: Enterprise Ultimate Edition.
        /// If create cached public zone:</description>
        /// <description>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Version
        {
            get;
        }

        /// <summary>Property domain: The domain name that you want to bind to the instance.</summary>
        /// <remarks>
        /// If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Domain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>HostedPublicZone: Hosted Public Zone</description>
        /// <description>CachedPublicZone: Cached Public Zone.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewalStatus: The renewal method.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>AutoRenewal: The instance is automatically renewed.</description>
        /// <description>ManualRenewal: The instance is manually renewed.
        /// Default value: ManualRenewal.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dnsSecurity: The DNS security policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>no: No protection against DNS attacks is provided.</description>
            /// <description>basic: Basic protection against DNS attacks is provided.</description>
            /// <description>advanced: Advanced protection against DNS attacks is provided.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "dnsSecurity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DnsSecurity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainNumbers: The number of domain names.</summary>
            [JsiiProperty(name: "domainNumbers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainNumbers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period: The subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>If unit is month: 1, 2, 3, 6</description>
            /// <description>If unit is year: 1, 2</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property periodUnit: The subscription duration unit.</summary>
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property version: The edition of Alibaba Cloud DNS.</summary>
            /// <remarks>
            /// Valid values:
            /// If create hosted public zone:
            ///
            /// <list type="bullet">
            /// <description>version_personal: Personal Edition.</description>
            /// <description>version_enterprise_basic: Enterprise Standard Edition.</description>
            /// <description>version_enterprise_advanced: Enterprise Ultimate Edition.
            /// If create cached public zone:</description>
            /// <description>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Version
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domain: The domain name that you want to bind to the instance.</summary>
            /// <remarks>
            /// If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Domain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>HostedPublicZone: Hosted Public Zone</description>
            /// <description>CachedPublicZone: Cached Public Zone.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewalStatus: The renewal method.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>AutoRenewal: The instance is automatically renewed.</description>
            /// <description>ManualRenewal: The instance is manually renewed.
            /// Default value: ManualRenewal.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalStatus
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

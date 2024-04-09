using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddos
{
    /// <summary>Properties for defining a `OriginInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.OriginInstanceProps")]
    public interface IOriginInstanceProps
    {
        /// <summary>Property edition: Edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>enterprise: Enterprise Edition.</description>
        /// <description>smb: Affordable and general edition for small and medium-sized enterprises.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Edition
        {
            get;
        }

        /// <summary>Property protectionMode: The mode of the protection.</summary>
        /// <remarks>
        /// Valid values:
        /// unlimited: The Unlimited protection mode is intended for internal use within enterprises.
        /// </remarks>
        [JsiiProperty(name: "protectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtectionMode
        {
            get;
        }

        /// <summary>Property chargeType: The charge type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PostPaid: Pay-as-you-go.
        /// PrePaid: Subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.</summary>
        /// <remarks>
        /// When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "cleanBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CleanBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableLog: Whether to enable protection logs.</summary>
        [JsiiProperty(name: "enableLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableLog
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipAddresses: The number of ip addresses.</summary>
        /// <remarks>
        /// When Edition is smb， IP Addresses ranges from 1 to 29.
        /// When Edition is enterprise, The minimum number of IP Addresses is 30.
        /// </remarks>
        [JsiiProperty(name: "ipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkProtocol: The network protocol of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// v4: IPv4.
        /// v6: IPv6.
        /// v4_6: IPv4+IPv6.
        /// </remarks>
        [JsiiProperty(name: "networkProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The period of the instance.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The period unit of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Month: Month.
        /// Year: Year.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ddos.RosOriginInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ddos.RosOriginInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `OriginInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.OriginInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddos.IOriginInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property edition: Edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>enterprise: Enterprise Edition.</description>
            /// <description>smb: Affordable and general edition for small and medium-sized enterprises.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Edition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protectionMode: The mode of the protection.</summary>
            /// <remarks>
            /// Valid values:
            /// unlimited: The Unlimited protection mode is intended for internal use within enterprises.
            /// </remarks>
            [JsiiProperty(name: "protectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtectionMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property chargeType: The charge type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PostPaid: Pay-as-you-go.
            /// PrePaid: Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.</summary>
            /// <remarks>
            /// When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cleanBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CleanBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableLog: Whether to enable protection logs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipAddresses: The number of ip addresses.</summary>
            /// <remarks>
            /// When Edition is smb， IP Addresses ranges from 1 to 29.
            /// When Edition is enterprise, The minimum number of IP Addresses is 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkProtocol: The network protocol of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// v4: IPv4.
            /// v6: IPv6.
            /// v4_6: IPv4+IPv6.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The period of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The period unit of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Month: Month.
            /// Year: Year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ddos.RosOriginInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ddos.RosOriginInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ddos.RosOriginInstance.ITagsProperty[]?>();
            }
        }
    }
}

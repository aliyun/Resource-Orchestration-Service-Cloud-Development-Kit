using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `Rule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RuleProps")]
    public interface IRuleProps
    {
        /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property ruleList: The forwarding rules to add.</summary>
        /// <remarks>
        /// You can add up to 10 forwarding rules in a single
        /// request. Each forwarding rule consists of the following parameters:
        ///
        /// <list type="bullet">
        /// <description>RuleName (Required): String. The name of the forwarding rule. The name must be
        /// 1 to 40 characters in length and can contain letters, digits, hyphens (-),
        /// forward slashes (/), periods (.), and underscores (_). Rule names must be unique
        /// within the same listener.</description>
        /// <description>Domain (Optional): String. The domain name to associate with the forwarding
        /// rule. You must specify at least one of this parameter and the Url parameter.</description>
        /// <description>Url (Optional): String. The URL path. The path must be 1 to 80 characters in
        /// length. It can contain Chinese characters, letters, digits, and the following
        /// special characters: <c>- \/ . % ? # &amp;</c>. The URL path must start with a forward slash
        /// (/), but cannot be a single forward slash (/). You must specify at least one of
        /// this parameter and the Domain parameter.</description>
        /// <description>VServerGroupId (Required): String. The ID of the target vServer group for the
        /// forwarding rule.</description>
        /// </list>
        ///
        ///     You must specify the <c>Domain</c> parameter, the <c>Url</c> parameter, or both. The
        ///     combination of a <c>Domain</c> and a <c>Url</c> must be unique within the same listener.
        /// </remarks>
        [JsiiProperty(name: "ruleList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosRule.RuleListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object RuleList
        {
            get;
        }

        /// <summary>Property listenerProtocol: The frontend protocol of the listener.</summary>
        /// <remarks>
        ///     This parameter is required if you configure listeners that use different
        ///     protocols on the same port.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Rule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
            /// <remarks>
            /// Valid value:
            /// 1-65535
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleList: The forwarding rules to add.</summary>
            /// <remarks>
            /// You can add up to 10 forwarding rules in a single
            /// request. Each forwarding rule consists of the following parameters:
            ///
            /// <list type="bullet">
            /// <description>RuleName (Required): String. The name of the forwarding rule. The name must be
            /// 1 to 40 characters in length and can contain letters, digits, hyphens (-),
            /// forward slashes (/), periods (.), and underscores (_). Rule names must be unique
            /// within the same listener.</description>
            /// <description>Domain (Optional): String. The domain name to associate with the forwarding
            /// rule. You must specify at least one of this parameter and the Url parameter.</description>
            /// <description>Url (Optional): String. The URL path. The path must be 1 to 80 characters in
            /// length. It can contain Chinese characters, letters, digits, and the following
            /// special characters: <c>- \/ . % ? # &amp;</c>. The URL path must start with a forward slash
            /// (/), but cannot be a single forward slash (/). You must specify at least one of
            /// this parameter and the Domain parameter.</description>
            /// <description>VServerGroupId (Required): String. The ID of the target vServer group for the
            /// forwarding rule.</description>
            /// </list>
            ///
            ///     You must specify the <c>Domain</c> parameter, the <c>Url</c> parameter, or both. The
            ///     combination of a <c>Domain</c> and a <c>Url</c> must be unique within the same listener.
            /// </remarks>
            [JsiiProperty(name: "ruleList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosRule.RuleListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object RuleList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerProtocol: The frontend protocol of the listener.</summary>
            /// <remarks>
            ///     This parameter is required if you configure listeners that use different
            ///     protocols on the same port.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerProtocol
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddos
{
    /// <summary>Properties for defining a `Policy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.PolicyProps")]
    public interface IPolicyProps
    {
        /// <summary>Property policyName: The name of the policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property type: The type of the policy.</summary>
        /// <remarks>
        /// Values:
        ///
        /// <list type="bullet">
        /// <description>default: Indicates the default protection strategy.</description>
        /// <description>l3: Indicates the IP protection strategy.</description>
        /// <description>l4: Indicates the port protection strategy.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.</summary>
        [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property blackIpList: Blacklist list.</summary>
        [JsiiProperty(name: "blackIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BlackIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property content: Configuration Content.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Content
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property whiteIpList: Whitelist IP list.</summary>
        [JsiiProperty(name: "whiteIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WhiteIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Policy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.PolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddos.IPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyName: The name of the policy.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the policy.</summary>
            /// <remarks>
            /// Values:
            ///
            /// <list type="bullet">
            /// <description>default: Indicates the default protection strategy.</description>
            /// <description>l3: Indicates the IP protection strategy.</description>
            /// <description>l4: Indicates the port protection strategy.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property blackIpList: Blacklist list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "blackIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BlackIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property content: Configuration Content.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property whiteIpList: Whitelist IP list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "whiteIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WhiteIpList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

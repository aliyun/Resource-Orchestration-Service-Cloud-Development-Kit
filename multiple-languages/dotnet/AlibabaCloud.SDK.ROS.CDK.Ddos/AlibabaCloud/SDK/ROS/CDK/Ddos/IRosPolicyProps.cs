using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddos
{
    /// <summary>Properties for defining a `RosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.RosPolicyProps")]
    public interface IRosPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: The name of the policy.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the policy. Values:
        /// - default: Indicates the default protection strategy.
        /// - l3: Indicates the IP protection strategy.
        /// - l4: Indicates the port protection strategy.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: actionType: Operation type
        /// ActionType = 10 Modify policy name
        /// ActionType = 11 Modify whitelist and whitelist timeout
        /// ActionType = 12 modify add white high anti-back source network segment switch
        /// ActionType = 13 Modify the switch to discard ICMP
        /// ActionType = 20 Add black and white list
        /// ActionType = 21 Delete whitelist and whitelist
        /// ActionType = 22 Clear White List
        /// ActionType = 23 Clear the blacklist
        /// ActionType = 30 Modify Smart Switch
        /// ActionType = 31 Modify regional ban
        /// ActionType = 32 Modify Source Speed Limit Black
        /// ActionType = 34 Modifying Reflective Port Filtering
        /// ActionType = 40,41,42 Create, delete, and modify Port rules
        /// ActionType = 50,51,52 Create, delete, and modify fingerprint rules
        /// ActionType = 60 switch L4 protection
        /// ActionType = 61,62,63 Create, delete, and modify L4 rules.
        /// </remarks>
        [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActionType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: blackIpList: Blacklist list.
        /// </remarks>
        [JsiiProperty(name: "blackIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BlackIpList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: content: Configuration Content.
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Content
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: whiteIpList: Whitelist IP list.
        /// </remarks>
        [JsiiProperty(name: "whiteIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WhiteIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddos.RosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddos.IRosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: The name of the policy.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the policy. Values:
            /// - default: Indicates the default protection strategy.
            /// - l3: Indicates the IP protection strategy.
            /// - l4: Indicates the port protection strategy.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: actionType: Operation type
            /// ActionType = 10 Modify policy name
            /// ActionType = 11 Modify whitelist and whitelist timeout
            /// ActionType = 12 modify add white high anti-back source network segment switch
            /// ActionType = 13 Modify the switch to discard ICMP
            /// ActionType = 20 Add black and white list
            /// ActionType = 21 Delete whitelist and whitelist
            /// ActionType = 22 Clear White List
            /// ActionType = 23 Clear the blacklist
            /// ActionType = 30 Modify Smart Switch
            /// ActionType = 31 Modify regional ban
            /// ActionType = 32 Modify Source Speed Limit Black
            /// ActionType = 34 Modifying Reflective Port Filtering
            /// ActionType = 40,41,42 Create, delete, and modify Port rules
            /// ActionType = 50,51,52 Create, delete, and modify fingerprint rules
            /// ActionType = 60 switch L4 protection
            /// ActionType = 61,62,63 Create, delete, and modify L4 rules.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: blackIpList: Blacklist list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "blackIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BlackIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: content: Configuration Content.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: whiteIpList: Whitelist IP list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "whiteIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WhiteIpList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

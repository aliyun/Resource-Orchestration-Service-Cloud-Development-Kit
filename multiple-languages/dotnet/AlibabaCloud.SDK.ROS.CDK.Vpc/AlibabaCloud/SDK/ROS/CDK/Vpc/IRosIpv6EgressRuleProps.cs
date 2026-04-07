using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosIpv6EgressRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosIpv6EgressRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv6EgressRuleProps")]
    public interface IRosIpv6EgressRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6GatewayId: The ID of the IPv6 gateway.
        /// </remarks>
        [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Ipv6GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the egress-only rule.
        /// The description must be 0 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the instance to which you want to apply the egress-only rule. Valid values:
        /// *   IPv6Address (default)
        /// *   IPv6Prefix.
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

        /// <remarks>
        /// <strong>Property</strong>: ipv6EgressRuleName: The name of the egress-only rule.
        /// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
        /// </remarks>
        [JsiiProperty(name: "ipv6EgressRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6EgressRuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosIpv6EgressRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosIpv6EgressRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv6EgressRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosIpv6EgressRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6GatewayId: The ID of the IPv6 gateway.
            /// </remarks>
            [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Ipv6GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the egress-only rule.
            /// The description must be 0 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the instance to which you want to apply the egress-only rule. Valid values:
            /// *   IPv6Address (default)
            /// *   IPv6Prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6EgressRuleName: The name of the egress-only rule.
            /// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6EgressRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6EgressRuleName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

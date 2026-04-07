using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `Ipv6EgressRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpv6EgressRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps")]
    public interface IIpv6EgressRuleProps
    {
        /// <summary>Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property ipv6GatewayId: The ID of the IPv6 gateway.</summary>
        [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Ipv6GatewayId
        {
            get;
        }

        /// <summary>Property description: The description of the egress-only rule.</summary>
        /// <remarks>
        /// The description must be 0 to 256 characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
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

        /// <summary>Property instanceType: The type of the instance to which you want to apply the egress-only rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>IPv6Address (default)</description>
        /// <description>IPv6Prefix.</description>
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

        /// <summary>Property ipv6EgressRuleName: The name of the egress-only rule.</summary>
        /// <remarks>
        /// The name must be 0 to 128 characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
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

        /// <summary>Properties for defining a `Ipv6EgressRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpv6EgressRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6EgressRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipv6GatewayId: The ID of the IPv6 gateway.</summary>
            [JsiiProperty(name: "ipv6GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Ipv6GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the egress-only rule.</summary>
            /// <remarks>
            /// The description must be 0 to 256 characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The type of the instance to which you want to apply the egress-only rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>IPv6Address (default)</description>
            /// <description>IPv6Prefix.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6EgressRuleName: The name of the egress-only rule.</summary>
            /// <remarks>
            /// The name must be 0 to 128 characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
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

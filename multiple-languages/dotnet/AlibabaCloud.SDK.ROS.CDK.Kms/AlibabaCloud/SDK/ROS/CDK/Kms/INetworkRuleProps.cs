using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `NetworkRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.NetworkRuleProps")]
    public interface INetworkRuleProps
    {
        /// <summary>Property networkRuleName: The name of the access control rule.</summary>
        [JsiiProperty(name: "networkRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkRuleName
        {
            get;
        }

        /// <summary>Property description: The description of the network rule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.</summary>
        [JsiiProperty(name: "sourcePrivateIp", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourcePrivateIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NetworkRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.NetworkRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.INetworkRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkRuleName: The name of the access control rule.</summary>
            [JsiiProperty(name: "networkRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the network rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourcePrivateIp", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourcePrivateIp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

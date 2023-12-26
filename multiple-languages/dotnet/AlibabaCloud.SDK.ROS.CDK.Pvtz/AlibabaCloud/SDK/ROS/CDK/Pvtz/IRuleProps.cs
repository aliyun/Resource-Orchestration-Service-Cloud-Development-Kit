using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `Rule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RuleProps")]
    public interface IRuleProps
    {
        /// <summary>Property endpointId: The ID of the endpoint.</summary>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <summary>Property forwardIp: The destination external server.</summary>
        [JsiiProperty(name: "forwardIp", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosRule.ForwardIpProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ForwardIp
        {
            get;
        }

        /// <summary>Property ruleName: The name of the forwarding rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property type: The type of the forwarding rule.</summary>
        /// <remarks>
        /// Valid value:
        /// OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property zoneName: The domain name that requires DNS traffic forwarding.</summary>
        [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneName
        {
            get;
        }

        /// <summary>Properties for defining a `Rule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpointId: The ID of the endpoint.</summary>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forwardIp: The destination external server.</summary>
            [JsiiProperty(name: "forwardIp", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosRule.ForwardIpProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ForwardIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The name of the forwarding rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the forwarding rule.</summary>
            /// <remarks>
            /// Valid value:
            /// OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneName: The domain name that requires DNS traffic forwarding.</summary>
            [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

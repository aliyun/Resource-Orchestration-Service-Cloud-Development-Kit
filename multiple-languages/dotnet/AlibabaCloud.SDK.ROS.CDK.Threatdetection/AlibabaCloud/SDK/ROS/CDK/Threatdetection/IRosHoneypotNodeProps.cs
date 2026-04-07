using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosHoneypotNode`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHoneypotNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotNodeProps")]
    public interface IRosHoneypotNodeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: nodeName: The name of the management node.
        /// </remarks>
        [JsiiProperty(name: "nodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
        /// *   **true**: allows honeypots to access the Internet.
        /// *   **false**: does not allow honeypots to access the Internet.
        /// </remarks>
        [JsiiProperty(name: "allowHoneypotAccessInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowHoneypotAccessInternet
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: availableProbeNum: The number of available probes.
        /// </remarks>
        [JsiiProperty(name: "availableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AvailableProbeNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
        /// </remarks>
        [JsiiProperty(name: "securityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupProbeIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosHoneypotNode`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHoneypotNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotNodeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosHoneypotNodeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeName: The name of the management node.
            /// </remarks>
            [JsiiProperty(name: "nodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
            /// *   **true**: allows honeypots to access the Internet.
            /// *   **false**: does not allow honeypots to access the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowHoneypotAccessInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowHoneypotAccessInternet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: availableProbeNum: The number of available probes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "availableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AvailableProbeNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupProbeIpList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `HoneypotNode`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHoneypotNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotNodeProps")]
    public interface IHoneypotNodeProps
    {
        /// <summary>Property nodeName: The name of the management node.</summary>
        [JsiiProperty(name: "nodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeName
        {
            get;
        }

        /// <summary>Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: allows honeypots to access the Internet.</description>
        /// <description><strong>false</strong>: does not allow honeypots to access the Internet.</description>
        /// </list>
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

        /// <summary>Property availableProbeNum: The number of available probes.</summary>
        [JsiiProperty(name: "availableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AvailableProbeNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.</summary>
        [JsiiProperty(name: "securityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupProbeIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HoneypotNode`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotNodeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotNodeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property nodeName: The name of the management node.</summary>
            [JsiiProperty(name: "nodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: allows honeypots to access the Internet.</description>
            /// <description><strong>false</strong>: does not allow honeypots to access the Internet.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowHoneypotAccessInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowHoneypotAccessInternet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property availableProbeNum: The number of available probes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "availableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AvailableProbeNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupProbeIpList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

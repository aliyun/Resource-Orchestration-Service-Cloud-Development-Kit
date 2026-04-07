using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `HoneyPot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHoneyPotProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneyPotProps")]
    public interface IHoneyPotProps
    {
        /// <summary>Property honeypotImageId: The ID of the honeypot image.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageId
        {
            get;
        }

        /// <summary>Property honeypotImageName: The name of the honeypot image.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageName
        {
            get;
        }

        /// <summary>Property honeypotName: The custom name of the honeypot.</summary>
        [JsiiProperty(name: "honeypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotName
        {
            get;
        }

        /// <summary>Property nodeId: The ID of the management node.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <summary>Property meta: Honeypot custom configuration.</summary>
        /// <remarks>
        /// JSON format. Contains the following fields:
        ///
        /// <list type="bullet">
        /// <description><strong>trojan_git</strong>:Git counterplan. Value:</description>
        /// <description><strong>zip</strong>:Git source package</description>
        /// <description><strong>web</strong>:.git directory leak</description>
        /// <description><strong>close</strong>: close</description>
        /// <description><strong>trojan_git_addr</strong>:Git anti-control connection address</description>
        /// <description><strong>Trojan_git.zip</strong>:Git anti-Trojan package</description>
        /// <description><strong>burp</strong>:Burp counter. Value:</description>
        /// <description><strong>open</strong>: On</description>
        /// <description><strong>close</strong>: close</description>
        /// <description><strong>portrait_option</strong>: traceability configuration. Value:</description>
        /// <description><strong>false</strong>: Disabled</description>
        /// <description><strong>true</strong>: Enable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Meta
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HoneyPot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHoneyPotProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneyPotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property honeypotImageId: The ID of the honeypot image.</summary>
            /// <remarks>
            ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
            /// </remarks>
            [JsiiProperty(name: "honeypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property honeypotImageName: The name of the honeypot image.</summary>
            /// <remarks>
            ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
            /// </remarks>
            [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property honeypotName: The custom name of the honeypot.</summary>
            [JsiiProperty(name: "honeypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeId: The ID of the management node.</summary>
            /// <remarks>
            ///     You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
            /// </remarks>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property meta: Honeypot custom configuration.</summary>
            /// <remarks>
            /// JSON format. Contains the following fields:
            ///
            /// <list type="bullet">
            /// <description><strong>trojan_git</strong>:Git counterplan. Value:</description>
            /// <description><strong>zip</strong>:Git source package</description>
            /// <description><strong>web</strong>:.git directory leak</description>
            /// <description><strong>close</strong>: close</description>
            /// <description><strong>trojan_git_addr</strong>:Git anti-control connection address</description>
            /// <description><strong>Trojan_git.zip</strong>:Git anti-Trojan package</description>
            /// <description><strong>burp</strong>:Burp counter. Value:</description>
            /// <description><strong>open</strong>: On</description>
            /// <description><strong>close</strong>: close</description>
            /// <description><strong>portrait_option</strong>: traceability configuration. Value:</description>
            /// <description><strong>false</strong>: Disabled</description>
            /// <description><strong>true</strong>: Enable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Meta
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosHoneypotPreset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHoneypotPresetProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotPresetProps")]
    public interface IRosHoneypotPresetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: honeypotImageName: The name of the honeypot image.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
        /// *   **PortraitOption**: Social Source Tracing
        /// *   **Burp**: Burp-specific Defense
        /// *   **TrojanGit**: Git-specific Defense.
        /// </remarks>
        [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty\"}]}}")]
        object Meta
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeId: The ID of the management node.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: presetName: The custom name of the honeypot template.
        /// </remarks>
        [JsiiProperty(name: "presetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PresetName
        {
            get;
        }

        /// <summary>Properties for defining a `RosHoneypotPreset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHoneypotPresetProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotPresetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosHoneypotPresetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotImageName: The name of the honeypot image.
            /// </remarks>
            [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
            /// *   **PortraitOption**: Social Source Tracing
            /// *   **Burp**: Burp-specific Defense
            /// *   **TrojanGit**: Git-specific Defense.
            /// </remarks>
            [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty\"}]}}")]
            public object Meta
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeId: The ID of the management node.
            /// </remarks>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: presetName: The custom name of the honeypot template.
            /// </remarks>
            [JsiiProperty(name: "presetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PresetName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

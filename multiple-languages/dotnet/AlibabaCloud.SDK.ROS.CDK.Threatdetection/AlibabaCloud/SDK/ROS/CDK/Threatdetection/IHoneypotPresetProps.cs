using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `HoneypotPreset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHoneypotPresetProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotPresetProps")]
    public interface IHoneypotPresetProps
    {
        /// <summary>Property honeypotImageName: The name of the honeypot image.</summary>
        [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageName
        {
            get;
        }

        /// <summary>Property meta: The custom configurations of the honeypot template.</summary>
        /// <remarks>
        /// The value is a JSON string that contains the following fields:
        ///
        /// <list type="bullet">
        /// <description><strong>PortraitOption</strong>: Social Source Tracing</description>
        /// <description><strong>Burp</strong>: Burp-specific Defense</description>
        /// <description><strong>TrojanGit</strong>: Git-specific Defense.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty\"}]}}")]
        object Meta
        {
            get;
        }

        /// <summary>Property nodeId: The ID of the management node.</summary>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <summary>Property presetName: The custom name of the honeypot template.</summary>
        [JsiiProperty(name: "presetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PresetName
        {
            get;
        }

        /// <summary>Properties for defining a `HoneypotPreset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotPresetProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotPresetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotPresetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property honeypotImageName: The name of the honeypot image.</summary>
            [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property meta: The custom configurations of the honeypot template.</summary>
            /// <remarks>
            /// The value is a JSON string that contains the following fields:
            ///
            /// <list type="bullet">
            /// <description><strong>PortraitOption</strong>: Social Source Tracing</description>
            /// <description><strong>Burp</strong>: Burp-specific Defense</description>
            /// <description><strong>TrojanGit</strong>: Git-specific Defense.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty\"}]}}")]
            public object Meta
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeId: The ID of the management node.</summary>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property presetName: The custom name of the honeypot template.</summary>
            [JsiiProperty(name: "presetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PresetName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

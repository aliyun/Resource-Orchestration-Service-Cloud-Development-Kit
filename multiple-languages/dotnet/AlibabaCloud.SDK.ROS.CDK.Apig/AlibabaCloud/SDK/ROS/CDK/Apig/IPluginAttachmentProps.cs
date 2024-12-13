using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `PluginAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginAttachmentProps")]
    public interface IPluginAttachmentProps
    {
        /// <summary>Property pluginInfo: The information about the association of plugin with gateway instance.</summary>
        [JsiiProperty(name: "pluginInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosPluginAttachment.PluginInfoProperty\"}]}}")]
        object PluginInfo
        {
            get;
        }

        /// <summary>Property attachResourceId: The resource ID to be attached by the plugin.</summary>
        [JsiiProperty(name: "attachResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttachResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property attachResourceIds: The list of resource IDs to be attached by the plugin.</summary>
        [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttachResourceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property attachResourceType: The type of the resource to be attached by the plugin.</summary>
        [JsiiProperty(name: "attachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttachResourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Whether to enable this plugin, default value is false.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentId: The ID of the environment.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PluginAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPluginAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property pluginInfo: The information about the association of plugin with gateway instance.</summary>
            [JsiiProperty(name: "pluginInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosPluginAttachment.PluginInfoProperty\"}]}}")]
            public object PluginInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property attachResourceId: The resource ID to be attached by the plugin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attachResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttachResourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property attachResourceIds: The list of resource IDs to be attached by the plugin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AttachResourceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property attachResourceType: The type of the resource to be attached by the plugin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttachResourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enable: Whether to enable this plugin, default value is false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentId: The ID of the environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvironmentId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

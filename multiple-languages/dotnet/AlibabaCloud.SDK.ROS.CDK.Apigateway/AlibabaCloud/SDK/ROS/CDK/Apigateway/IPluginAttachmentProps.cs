using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `PluginAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.PluginAttachmentProps")]
    public interface IPluginAttachmentProps
    {
        /// <summary>Property apiId: The ID of the API to which you want to bind the plug-in.</summary>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiId
        {
            get;
        }

        /// <summary>Property pluginId: The ID of the plugin that you want to bind.</summary>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginId
        {
            get;
        }

        /// <summary>Property stageName: The name of the runtime environment.</summary>
        /// <remarks>
        /// Valid values:
        /// RELEASE: indicates the release environment.
        /// PRE: indicates the pre-release environment.
        /// TEST: indicates the test environment.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Properties for defining a `PluginAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.PluginAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiId: The ID of the API to which you want to bind the plug-in.</summary>
            [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginId: The ID of the plugin that you want to bind.</summary>
            [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stageName: The name of the runtime environment.</summary>
            /// <remarks>
            /// Valid values:
            /// RELEASE: indicates the release environment.
            /// PRE: indicates the pre-release environment.
            /// TEST: indicates the test environment.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

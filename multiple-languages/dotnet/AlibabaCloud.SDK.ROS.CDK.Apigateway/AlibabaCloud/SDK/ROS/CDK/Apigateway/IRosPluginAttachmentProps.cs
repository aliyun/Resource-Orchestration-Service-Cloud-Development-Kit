using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosPluginAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps")]
    public interface IRosPluginAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiId: The ID of the API to which you want to bind the plug-in.
        /// </remarks>
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pluginId: The ID of the plugin that you want to bind.
        /// </remarks>
        [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: The name of the runtime environment. Valid values:
        /// RELEASE: indicates the release environment.
        /// PRE: indicates the pre-release environment.
        /// TEST: indicates the test environment.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Properties for defining a `RosPluginAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPluginAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosPluginAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiId: The ID of the API to which you want to bind the plug-in.
            /// </remarks>
            [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pluginId: The ID of the plugin that you want to bind.
            /// </remarks>
            [JsiiProperty(name: "pluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: The name of the runtime environment. Valid values:
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

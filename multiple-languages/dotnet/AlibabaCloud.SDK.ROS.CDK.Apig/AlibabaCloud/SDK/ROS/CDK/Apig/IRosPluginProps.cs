using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `RosPlugin`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPluginProps")]
    public interface IRosPluginProps
    {
        /// <remarks>
        /// <strong>Property</strong>: gatewayId: The ID of the Gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pluginClassId: The ID of the plugin class.
        /// </remarks>
        [JsiiProperty(name: "pluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginClassId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPlugin`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPluginProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRosPluginProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayId: The ID of the Gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pluginClassId: The ID of the plugin class.
            /// </remarks>
            [JsiiProperty(name: "pluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginClassId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

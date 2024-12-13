using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Plugin`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginProps")]
    public interface IPluginProps
    {
        /// <summary>Property gatewayId: The ID of the Gateway.</summary>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <summary>Property pluginClassId: The ID of the plugin class.</summary>
        [JsiiProperty(name: "pluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PluginClassId
        {
            get;
        }

        /// <summary>Properties for defining a `Plugin`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPluginProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PluginProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPluginProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayId: The ID of the Gateway.</summary>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pluginClassId: The ID of the plugin class.</summary>
            [JsiiProperty(name: "pluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PluginClassId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

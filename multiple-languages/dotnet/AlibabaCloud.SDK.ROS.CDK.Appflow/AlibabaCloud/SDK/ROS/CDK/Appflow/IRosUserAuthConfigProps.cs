using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `RosUserAuthConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserAuthConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.RosUserAuthConfigProps")]
    public interface IRosUserAuthConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: authConfig: AuthConfig
        /// </remarks>
        [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object AuthConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authConfigName: The name of the config.
        /// </remarks>
        [JsiiProperty(name: "authConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthConfigName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectorId: The id of connector.
        /// </remarks>
        [JsiiProperty(name: "connectorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectorId
        {
            get;
        }

        /// <summary>Properties for defining a `RosUserAuthConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserAuthConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.RosUserAuthConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IRosUserAuthConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: authConfig: AuthConfig
            /// </remarks>
            [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object AuthConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authConfigName: The name of the config.
            /// </remarks>
            [JsiiProperty(name: "authConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthConfigName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectorId: The id of connector.
            /// </remarks>
            [JsiiProperty(name: "connectorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectorId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

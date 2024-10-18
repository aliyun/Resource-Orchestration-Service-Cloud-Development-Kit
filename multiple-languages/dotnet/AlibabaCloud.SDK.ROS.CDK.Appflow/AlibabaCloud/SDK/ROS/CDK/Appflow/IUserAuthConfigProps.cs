using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow
{
    /// <summary>Properties for defining a `UserAuthConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserAuthConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.UserAuthConfigProps")]
    public interface IUserAuthConfigProps
    {
        /// <summary>Property authConfig: AuthConfig.</summary>
        [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object AuthConfig
        {
            get;
        }

        /// <summary>Property authConfigName: The name of the config.</summary>
        [JsiiProperty(name: "authConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthConfigName
        {
            get;
        }

        /// <summary>Property connectorId: The id of connector.</summary>
        [JsiiProperty(name: "connectorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectorId
        {
            get;
        }

        /// <summary>Properties for defining a `UserAuthConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserAuthConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-appflow.UserAuthConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.IUserAuthConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property authConfig: AuthConfig.</summary>
            [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object AuthConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authConfigName: The name of the config.</summary>
            [JsiiProperty(name: "authConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthConfigName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectorId: The id of connector.</summary>
            [JsiiProperty(name: "connectorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectorId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

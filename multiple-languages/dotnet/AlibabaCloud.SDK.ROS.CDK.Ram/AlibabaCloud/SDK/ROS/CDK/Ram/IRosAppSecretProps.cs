using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosAppSecret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAppSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAppSecretProps")]
    public interface IRosAppSecretProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Properties for defining a `RosAppSecret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAppSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAppSecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAppSecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: The ID of the application.
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

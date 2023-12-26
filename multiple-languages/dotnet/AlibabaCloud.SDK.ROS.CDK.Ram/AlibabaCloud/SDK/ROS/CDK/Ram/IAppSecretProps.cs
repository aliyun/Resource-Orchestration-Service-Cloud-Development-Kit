using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `AppSecret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAppSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AppSecretProps")]
    public interface IAppSecretProps
    {
        /// <summary>Property appId: The ID of the application.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Properties for defining a `AppSecret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAppSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AppSecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAppSecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: The ID of the application.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

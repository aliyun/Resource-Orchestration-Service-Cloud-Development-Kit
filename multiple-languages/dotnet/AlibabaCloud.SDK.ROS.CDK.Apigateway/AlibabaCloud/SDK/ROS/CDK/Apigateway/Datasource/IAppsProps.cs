using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource
{
    /// <summary>Properties for defining a `Apps`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAppsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.AppsProps")]
    public interface IAppsProps
    {
        /// <summary>Property appId: Unique ID of the app.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appOwner: Alibaba Cloud account ID of the app owner.</summary>
        [JsiiProperty(name: "appOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppOwner
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Apps`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAppsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.AppsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource.IAppsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: Unique ID of the app.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appOwner: Alibaba Cloud account ID of the app owner.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppOwner
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless
{
    /// <summary>Properties for defining a `App`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.AppProps")]
    public interface IAppProps
    {
        /// <summary>Property appName: The name of the elastic search serverless version app.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <summary>Property authentication: The authentication of the app.</summary>
        /// <remarks>
        /// Currently only supports specifying passwords for initial users
        /// </remarks>
        [JsiiProperty(name: "authentication", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.AuthenticationProperty\"}]}}")]
        object Authentication
        {
            get;
        }

        /// <summary>Property quotaInfo: The quota info of the app.</summary>
        [JsiiProperty(name: "quotaInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.QuotaInfoProperty\"}]}}")]
        object QuotaInfo
        {
            get;
        }

        /// <summary>Property appVersion: The version of the app.</summary>
        [JsiiProperty(name: "appVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the app.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property network: The public network of the app.</summary>
        [JsiiProperty(name: "network", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.NetworkProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Network
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateNetwork: The private network of the app.</summary>
        [JsiiProperty(name: "privateNetwork", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateNetwork
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `App`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.AppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: The name of the elastic search serverless version app.</summary>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authentication: The authentication of the app.</summary>
            /// <remarks>
            /// Currently only supports specifying passwords for initial users
            /// </remarks>
            [JsiiProperty(name: "authentication", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.AuthenticationProperty\"}]}}")]
            public object Authentication
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property quotaInfo: The quota info of the app.</summary>
            [JsiiProperty(name: "quotaInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.QuotaInfoProperty\"}]}}")]
            public object QuotaInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appVersion: The version of the app.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the app.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property network: The public network of the app.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "network", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.NetworkProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Network
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateNetwork: The private network of the app.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateNetwork", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PrivateNetwork
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

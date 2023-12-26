using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosApp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAppProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosAppProps")]
    public interface IRosAppProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appName: The name of the App.Need [4, 26] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appCode: The app code of the APP.
        /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),and AppCode is globally unique.
        /// </remarks>
        [JsiiProperty(name: "appCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppCode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: appKey: The key of the APP.
        /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),
        /// and AppKey is globally unique.
        /// </remarks>
        [JsiiProperty(name: "appKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: appSecret: The secret of the APP.
        /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-).
        /// </remarks>
        [JsiiProperty(name: "appSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppSecret
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the App, less than 180 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApp.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApp.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAppProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosAppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appName: The name of the App.Need [4, 26] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
            /// </remarks>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appCode: The app code of the APP.
            /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),and AppCode is globally unique.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appKey: The key of the APP.
            /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),
            /// and AppKey is globally unique.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appSecret: The secret of the APP.
            /// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppSecret
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the App, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApp.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApp.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApp.ITagsProperty[]?>();
            }
        }
    }
}

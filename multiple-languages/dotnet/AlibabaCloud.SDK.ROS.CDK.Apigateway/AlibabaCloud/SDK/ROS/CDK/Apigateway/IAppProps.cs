using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::App`.</summary>
    [JsiiInterface(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AppProps")]
    public interface IAppProps
    {
        /// <summary>Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}")]
        string AppName
        {
            get;
        }

        /// <summary>Property description: Description of the App, less than 180 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to app.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::App`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}")]
            public string AppName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the App, less than 180 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to app.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}

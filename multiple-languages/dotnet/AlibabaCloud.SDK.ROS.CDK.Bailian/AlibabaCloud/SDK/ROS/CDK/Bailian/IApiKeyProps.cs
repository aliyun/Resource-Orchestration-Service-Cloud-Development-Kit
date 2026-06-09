using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bailian
{
    /// <summary>Properties for defining a `ApiKey`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApiKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.ApiKeyProps")]
    public interface IApiKeyProps
    {
        /// <summary>Property authSetModel: The model of the authentication.</summary>
        [JsiiProperty(name: "authSetModel", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthSetModel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the API key.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApiKey`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApiKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.ApiKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bailian.IApiKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property authSetModel: The model of the authentication.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authSetModel", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthSetModel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the API key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bailian
{
    /// <summary>Properties for defining a `RosApiKey`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApiKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.RosApiKeyProps")]
    public interface IRosApiKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: authSetModel: The model of the authentication.
        /// </remarks>
        [JsiiProperty(name: "authSetModel", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthSetModel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the API key.
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

        /// <summary>Properties for defining a `RosApiKey`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApiKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.RosApiKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bailian.IRosApiKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: authSetModel: The model of the authentication.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authSetModel", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthSetModel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the API key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

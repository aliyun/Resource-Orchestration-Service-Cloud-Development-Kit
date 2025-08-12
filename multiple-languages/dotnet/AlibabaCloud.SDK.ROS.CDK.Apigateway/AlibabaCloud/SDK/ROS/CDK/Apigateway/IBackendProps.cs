using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `Backend`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBackendProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.BackendProps")]
    public interface IBackendProps
    {
        /// <summary>Property backendName: The name of the backend service.</summary>
        [JsiiProperty(name: "backendName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackendName
        {
            get;
        }

        /// <summary>Property backendType: The type the backend service.</summary>
        /// <remarks>
        /// Allowed values: HTTP, VPC, FC_EVENT, FC_EVENT_V3, FC_HTTP, FC_HTTP_V3, OSS, MOCK
        /// </remarks>
        [JsiiProperty(name: "backendType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackendType
        {
            get;
        }

        /// <summary>Property description: The description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosBackend.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.RosBackend.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Backend`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBackendProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.BackendProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IBackendProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backendName: The name of the backend service.</summary>
            [JsiiProperty(name: "backendName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackendName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backendType: The type the backend service.</summary>
            /// <remarks>
            /// Allowed values: HTTP, VPC, FC_EVENT, FC_EVENT_V3, FC_HTTP, FC_HTTP_V3, OSS, MOCK
            /// </remarks>
            [JsiiProperty(name: "backendType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackendType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosBackend.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosBackend.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.RosBackend.ITagsProperty[]?>();
            }
        }
    }
}

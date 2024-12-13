using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `ApiAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApiAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ApiAttachmentProps")]
    public interface IApiAttachmentProps
    {
        /// <summary>Property backendScene: API release scenario.</summary>
        [JsiiProperty(name: "backendScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackendScene
        {
            get;
        }

        /// <summary>Property environmentId: The ID of the environment to which the API is to deploy.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <summary>Property httpApiId: The ID of the HTTP API.</summary>
        [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HttpApiId
        {
            get;
        }

        /// <summary>Property serviceConfigs: Services associated with API publishing and their configurations.</summary>
        [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosApiAttachment.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServiceConfigs
        {
            get;
        }

        /// <summary>Property description: The description of publication.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainIds: The list of user domain names associated with API publishing.</summary>
        [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeId: The route ID.</summary>
        /// <remarks>
        /// When publishing an HTTP API route, it must be passed in.
        /// </remarks>
        [JsiiProperty(name: "routeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApiAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApiAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ApiAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IApiAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backendScene: API release scenario.</summary>
            [JsiiProperty(name: "backendScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackendScene
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentId: The ID of the environment to which the API is to deploy.</summary>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property httpApiId: The ID of the HTTP API.</summary>
            [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HttpApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceConfigs: Services associated with API publishing and their configurations.</summary>
            [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosApiAttachment.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServiceConfigs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of publication.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainIds: The list of user domain names associated with API publishing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeId: The route ID.</summary>
            /// <remarks>
            /// When publishing an HTTP API route, it must be passed in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

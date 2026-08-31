using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ServiceLinkedRole`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceLinkedRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ServiceLinkedRoleProps")]
    public interface IServiceLinkedRoleProps
    {
        /// <summary>Property serviceName: The service identifier of the service-linked role.</summary>
        /// <remarks>
        /// For example: cloudmilvus.aliyuncs.com.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property customSuffix: The suffix of the service-linked role name.</summary>
        /// <remarks>
        /// Specify this property only if the service supports custom suffixes.
        /// </remarks>
        [JsiiProperty(name: "customSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the service-linked role.</summary>
        /// <remarks>
        /// The description must be 1 to 1,024 characters in length.
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

        /// <summary>Properties for defining a `ServiceLinkedRole`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceLinkedRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ServiceLinkedRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IServiceLinkedRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceName: The service identifier of the service-linked role.</summary>
            /// <remarks>
            /// For example: cloudmilvus.aliyuncs.com.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property customSuffix: The suffix of the service-linked role name.</summary>
            /// <remarks>
            /// Specify this property only if the service supports custom suffixes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the service-linked role.</summary>
            /// <remarks>
            /// The description must be 1 to 1,024 characters in length.
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

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosServiceLinkedRole`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServiceLinkedRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosServiceLinkedRoleProps")]
    public interface IRosServiceLinkedRoleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: The service identifier of the service-linked role. For example: cloudmilvus.aliyuncs.com.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: customSuffix: The suffix of the service-linked role name. Specify this property only if the service supports custom suffixes.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the service-linked role. The description must be 1 to 1,024 characters in length.
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

        /// <summary>Properties for defining a `RosServiceLinkedRole`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServiceLinkedRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosServiceLinkedRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosServiceLinkedRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The service identifier of the service-linked role. For example: cloudmilvus.aliyuncs.com.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: customSuffix: The suffix of the service-linked role name. Specify this property only if the service supports custom suffixes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the service-linked role. The description must be 1 to 1,024 characters in length.
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

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespace: The name of the namespace.
        /// The name can contain lowercase letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the namespace.
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
        /// <strong>Property</strong>: specification: The data retention period of the namespace. Valid values:
        /// - cms.s1.large: Data storage duration is 15 days.
        /// - cms.s1.xlarge: Data storage duration is 32 days.
        /// - cms.s1.2xlarge: Data storage duration 63 days.
        /// - cms.s1.3xlarge: Data storage duration 93 days.
        /// - cms.s1.6xlarge: Data storage duration 185 days.
        /// - cms.s1.12xlarge: Data storage duration 376 days.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Specification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The name of the namespace.
            /// The name can contain lowercase letters, digits, and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the namespace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: specification: The data retention period of the namespace. Valid values:
            /// - cms.s1.large: Data storage duration is 15 days.
            /// - cms.s1.xlarge: Data storage duration is 32 days.
            /// - cms.s1.2xlarge: Data storage duration 63 days.
            /// - cms.s1.3xlarge: Data storage duration 93 days.
            /// - cms.s1.6xlarge: Data storage duration 185 days.
            /// - cms.s1.12xlarge: Data storage duration 376 days.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Specification
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

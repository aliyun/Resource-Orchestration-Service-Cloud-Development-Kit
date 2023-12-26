using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `Namespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property namespace: The name of the namespace.</summary>
        /// <remarks>
        /// The name can contain lowercase letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property description: The description of the namespace.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property specification: The data retention period of the namespace.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>cms.s1.large: Data storage duration is 15 days.</description>
        /// <description>cms.s1.xlarge: Data storage duration is 32 days.</description>
        /// <description>cms.s1.2xlarge: Data storage duration 63 days.</description>
        /// <description>cms.s1.3xlarge: Data storage duration 93 days.</description>
        /// <description>cms.s1.6xlarge: Data storage duration 185 days.</description>
        /// <description>cms.s1.12xlarge: Data storage duration 376 days.</description>
        /// </list>
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

        /// <summary>Properties for defining a `Namespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespace: The name of the namespace.</summary>
            /// <remarks>
            /// The name can contain lowercase letters, digits, and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property specification: The data retention period of the namespace.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>cms.s1.large: Data storage duration is 15 days.</description>
            /// <description>cms.s1.xlarge: Data storage duration is 32 days.</description>
            /// <description>cms.s1.2xlarge: Data storage duration 63 days.</description>
            /// <description>cms.s1.3xlarge: Data storage duration 93 days.</description>
            /// <description>cms.s1.6xlarge: Data storage duration 185 days.</description>
            /// <description>cms.s1.12xlarge: Data storage duration 376 days.</description>
            /// </list>
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

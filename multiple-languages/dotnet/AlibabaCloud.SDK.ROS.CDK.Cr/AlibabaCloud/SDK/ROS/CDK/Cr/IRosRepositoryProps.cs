using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RosRepository`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepositoryProps")]
    public interface IRosRepositoryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: repoName: The name of the repository.
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: The name of the namespace to which the repository belongs.
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoNamespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: The summary of the repository.
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Summary
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: The description of the repository.
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Detail
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: repoSource: Code Source message.
        /// </remarks>
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoSource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        /// </remarks>
        [JsiiProperty(name: "tagImmutability", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagImmutability
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRepository`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepositoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosRepositoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: repoName: The name of the repository.
            /// </remarks>
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNamespace: The name of the namespace to which the repository belongs.
            /// </remarks>
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
            /// </remarks>
            [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: summary: The summary of the repository.
            /// </remarks>
            [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Summary
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: detail: The description of the repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Detail
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repoSource: Code Source message.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
            public object? RepoSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagImmutability", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagImmutability
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `Repository`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepositoryProps")]
    public interface IRepositoryProps
    {
        /// <summary>Property repoName: The name of the repository.</summary>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoName
        {
            get;
        }

        /// <summary>Property repoNamespace: The name of the namespace to which the repository belongs.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoNamespace
        {
            get;
        }

        /// <summary>Property repoType: The type of the repository.</summary>
        /// <remarks>
        /// Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoType
        {
            get;
        }

        /// <summary>Property summary: The summary of the repository.</summary>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Summary
        {
            get;
        }

        /// <summary>Property detail: The description of the repository.</summary>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Detail
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the enterprise edition instance which repository belongs to.</summary>
        /// <remarks>
        /// If not provided, will use personal edition instance as default.
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

        /// <summary>Property repoSource: Code Source message.</summary>
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagImmutability: Specifies whether the repository is immutable.</summary>
        /// <remarks>
        /// Only takes effect when InstanceId is specified.
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

        /// <summary>Properties for defining a `Repository`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepositoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property repoName: The name of the repository.</summary>
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property repoNamespace: The name of the namespace to which the repository belongs.</summary>
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property repoType: The type of the repository.</summary>
            /// <remarks>
            /// Valid values: PUBLIC, PRIVATE.
            /// </remarks>
            [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property summary: The summary of the repository.</summary>
            [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Summary
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property detail: The description of the repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Detail
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the enterprise edition instance which repository belongs to.</summary>
            /// <remarks>
            /// If not provided, will use personal edition instance as default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repoSource: Code Source message.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
            public object? RepoSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagImmutability: Specifies whether the repository is immutable.</summary>
            /// <remarks>
            /// Only takes effect when InstanceId is specified.
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

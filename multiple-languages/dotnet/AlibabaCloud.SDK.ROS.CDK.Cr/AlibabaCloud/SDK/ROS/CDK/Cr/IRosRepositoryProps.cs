using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepositoryProps")]
    public interface IRosRepositoryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: repoName: the name of the repo
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoNamespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: repository visibility, public or private
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: description or something alike
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Summary
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: detailed configuration in markdown format
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

        /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepositoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosRepositoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: repoName: the name of the repo
            /// </remarks>
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
            /// </remarks>
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoType: repository visibility, public or private
            /// </remarks>
            [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: summary: description or something alike
            /// </remarks>
            [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Summary
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: detail: detailed configuration in markdown format
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Detail
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
        }
    }
}

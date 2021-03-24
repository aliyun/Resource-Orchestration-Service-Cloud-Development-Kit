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
        [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}")]
        string RepoName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}")]
        string RepoNamespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: repository visibility, public or private
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}")]
        string RepoType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: description or something alike
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}")]
        string Summary
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: detailed configuration in markdown format
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Detail
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
            [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
            /// </remarks>
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoNamespace
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoType: repository visibility, public or private
            /// </remarks>
            [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: summary: description or something alike
            /// </remarks>
            [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}")]
            public string Summary
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: detail: detailed configuration in markdown format
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Detail
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
    [JsiiInterface(nativeType: typeof(IRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepositoryProps")]
    public interface IRepositoryProps
    {
        /// <summary>Property repoName: the name of the repo.</summary>
        [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}")]
        string RepoName
        {
            get;
        }

        /// <summary>Property repoNamespace: the namespace the repo belongs to.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}")]
        string RepoNamespace
        {
            get;
        }

        /// <summary>Property repoType: repository visibility, public or private.</summary>
        [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}")]
        string RepoType
        {
            get;
        }

        /// <summary>Property summary: description or something alike.</summary>
        [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}")]
        string Summary
        {
            get;
        }

        /// <summary>Property detail: detailed configuration in markdown format.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IRepositoryProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepositoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property repoName: the name of the repo.</summary>
            [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property repoNamespace: the namespace the repo belongs to.</summary>
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoNamespace
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property repoType: repository visibility, public or private.</summary>
            [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}")]
            public string RepoType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property summary: description or something alike.</summary>
            [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}")]
            public string Summary
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property detail: detailed configuration in markdown format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Detail
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

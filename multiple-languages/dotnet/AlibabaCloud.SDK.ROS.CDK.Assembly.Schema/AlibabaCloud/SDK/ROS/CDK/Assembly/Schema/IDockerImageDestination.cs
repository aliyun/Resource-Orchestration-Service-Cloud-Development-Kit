using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Where to publish docker images.</summary>
    [JsiiInterface(nativeType: typeof(IDockerImageDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerImageDestination")]
    public interface IDockerImageDestination : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliCloudDestination
    {
        /// <summary>Tag of the image to publish.</summary>
        [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}")]
        string ImageTag
        {
            get;
        }

        /// <summary>Name of the ECR repository to publish to.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        string RepositoryName
        {
            get;
        }

        /// <summary>Where to publish docker images.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDockerImageDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerImageDestination")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Tag of the image to publish.</summary>
            [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageTag
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Name of the ECR repository to publish to.</summary>
            [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
            public string RepositoryName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The region where this asset will need to be published.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Current region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

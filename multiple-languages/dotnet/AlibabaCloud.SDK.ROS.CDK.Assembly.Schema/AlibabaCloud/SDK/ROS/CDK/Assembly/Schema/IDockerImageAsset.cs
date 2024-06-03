using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>A file asset.</summary>
    [JsiiInterface(nativeType: typeof(IDockerImageAsset), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerImageAsset")]
    public interface IDockerImageAsset
    {
        /// <summary>Destinations for this file asset.</summary>
        [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"},\"kind\":\"map\"}}")]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination> Destinations
        {
            get;
        }

        /// <summary>Source description for file assets.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageSource\"}")]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource Source
        {
            get;
        }

        /// <summary>A file asset.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDockerImageAsset), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.DockerImageAsset")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Destinations for this file asset.</summary>
            [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"},\"kind\":\"map\"}}")]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination> Destinations
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination>>()!;
            }

            /// <summary>Source description for file assets.</summary>
            [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageSource\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource Source
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource>()!;
            }
        }
    }
}

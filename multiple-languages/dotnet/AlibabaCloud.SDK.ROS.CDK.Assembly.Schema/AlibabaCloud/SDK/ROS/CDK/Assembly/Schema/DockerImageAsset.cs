using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>A file asset.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.DockerImageAsset")]
    public class DockerImageAsset : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset
    {
        /// <summary>Destinations for this file asset.</summary>
        [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageDestination\"},\"kind\":\"map\"}}")]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination> Destinations
        {
            get;
            set;
        }

        /// <summary>Source description for file assets.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageSource\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageSource Source
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>A file asset.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.FileAsset")]
    public class FileAsset : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset
    {
        /// <summary>Destinations for this file asset.</summary>
        [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"},\"kind\":\"map\"}}")]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination> Destinations
        {
            get;
            set;
        }

        /// <summary>Source description for file assets.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileSource\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource Source
        {
            get;
            set;
        }
    }
}

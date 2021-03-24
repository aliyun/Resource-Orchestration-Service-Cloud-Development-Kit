using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Artifact properties for the Construct Tree Artifact.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties")]
    public class TreeArtifactProperties : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITreeArtifactProperties
    {
        /// <summary>Filename of the tree artifact.</summary>
        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string File
        {
            get;
            set;
        }
    }
}

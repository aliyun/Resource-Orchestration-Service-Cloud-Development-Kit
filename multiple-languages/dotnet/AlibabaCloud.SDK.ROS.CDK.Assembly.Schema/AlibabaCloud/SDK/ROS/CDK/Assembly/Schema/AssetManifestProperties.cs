using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Artifact properties for the Asset Manifest.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AssetManifestProperties")]
    public class AssetManifestProperties : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifestProperties
    {
        /// <summary>Filename of the asset manifest.</summary>
        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
        public string File
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Destination for assets that need to be uploaded to AliCloud.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AliCloudDestination")]
    public class AliCloudDestination : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliCloudDestination
    {
        /// <summary>The region where this asset will need to be published.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Current region
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Properties to string encodings.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.EncodingOptions")]
    public class EncodingOptions : AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions
    {
        /// <summary>A hint for the Token's purpose when stringifying it.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DisplayHint
        {
            get;
            set;
        }
    }
}

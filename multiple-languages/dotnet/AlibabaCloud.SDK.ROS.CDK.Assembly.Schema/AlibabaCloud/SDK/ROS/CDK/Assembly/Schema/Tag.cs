using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Metadata Entry spec for stack tag.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.Tag")]
    public class Tag : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITag
    {
        /// <summary>Tag key.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        public string Key
        {
            get;
            set;
        }

        /// <summary>Tag value.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
        public string Value
        {
            get;
            set;
        }
    }
}

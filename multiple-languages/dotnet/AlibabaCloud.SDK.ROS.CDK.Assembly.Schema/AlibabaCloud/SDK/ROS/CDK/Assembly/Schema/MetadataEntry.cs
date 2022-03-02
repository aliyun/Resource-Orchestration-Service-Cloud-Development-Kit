using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>A metadata entry in a cloud assembly artifact.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.MetadataEntry")]
    public class MetadataEntry : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry
    {
        /// <summary>The type of the metadata entry.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        public string Type
        {
            get;
            set;
        }

        /// <summary>The data.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no data.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.Tag\"},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Data
        {
            get;
            set;
        }

        /// <summary>A stack trace for when the entry was created.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no trace.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trace", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Trace
        {
            get;
            set;
        }
    }
}

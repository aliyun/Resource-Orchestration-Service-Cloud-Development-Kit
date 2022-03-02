using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>(deprecated) Backwards compatibility for when 'MetadataEntry' was defined here.</summary>
    /// <remarks>
    /// This is necessary because its used as an input in the stable
    ///
    /// <strong>Stability</strong>: Deprecated
    ///
    /// <strong>See</strong>: core.ConstructNode.metadata
    ///
    /// <strong>Alicloud</strong>: /ros-cdk-core library.
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.MetadataEntry")]
    public class MetadataEntry : AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntry
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

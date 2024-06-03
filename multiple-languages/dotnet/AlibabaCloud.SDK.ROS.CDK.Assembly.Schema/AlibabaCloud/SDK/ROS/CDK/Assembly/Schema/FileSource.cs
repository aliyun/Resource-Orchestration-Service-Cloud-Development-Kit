using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Describe the source of a file asset.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.FileSource")]
    public class FileSource : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource
    {
        /// <summary>External command which will produce the file asset to upload.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "executable", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Executable
        {
            get;
            set;
        }

        /// <summary>Packaging method.</summary>
        /// <remarks>
        /// Only allowed when <c>path</c> is specified.
        ///
        /// <strong>Default</strong>: FILE
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packaging", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAssetPackaging\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.FileAssetPackaging? Packaging
        {
            get;
            set;
        }

        /// <summary>The filesystem object to upload.</summary>
        /// <remarks>
        /// This path is relative to the asset manifest location.
        ///
        /// <strong>Default</strong>: - Exactly one of `executable` and `path` is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Path
        {
            get;
            set;
        }
    }
}

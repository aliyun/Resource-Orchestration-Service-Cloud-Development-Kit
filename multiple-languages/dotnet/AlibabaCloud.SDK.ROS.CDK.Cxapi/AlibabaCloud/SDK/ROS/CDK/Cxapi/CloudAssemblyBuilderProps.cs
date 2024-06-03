using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Construction properties for CloudAssemblyBuilder.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps")]
    public class CloudAssemblyBuilderProps : AlibabaCloud.SDK.ROS.CDK.Cxapi.ICloudAssemblyBuilderProps
    {
        /// <summary>Use the given asset output directory.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Same as the manifest outdir
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "assetOutdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? AssetOutdir
        {
            get;
            set;
        }

        /// <summary>If this builder is for a nested assembly, the parent assembly builder.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - This is a root assembly
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentBuilder", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder? ParentBuilder
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Artifact properties for nested cloud assemblies.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties")]
    public class NestedCloudAssemblyProperties : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.INestedCloudAssemblyProperties
    {
        /// <summary>Relative path to the nested cloud assembly.</summary>
        [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DirectoryName
        {
            get;
            set;
        }

        /// <summary>Display name for the cloud assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - The artifact ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DisplayName
        {
            get;
            set;
        }
    }
}

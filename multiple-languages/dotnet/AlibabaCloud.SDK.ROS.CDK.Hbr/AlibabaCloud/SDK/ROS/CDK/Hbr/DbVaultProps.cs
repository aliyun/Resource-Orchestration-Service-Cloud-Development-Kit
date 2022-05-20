using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::DbVault`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.DbVaultProps")]
    public class DbVaultProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IDbVaultProps
    {
        /// <summary>Property retentionDays: Data retention days of the vault.</summary>
        /// <remarks>
        /// Data will be deleted when it's older than this time.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RetentionDays
        {
            get;
            set;
        }

        /// <summary>Property vaultName: Display name of the vault.</summary>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultName
        {
            get;
            set;
        }

        /// <summary>Property vaultRegionId: The region ID to create the vault.</summary>
        [JsiiProperty(name: "vaultRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultRegionId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the vault.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbVault.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Hbr.RosDbVault.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}

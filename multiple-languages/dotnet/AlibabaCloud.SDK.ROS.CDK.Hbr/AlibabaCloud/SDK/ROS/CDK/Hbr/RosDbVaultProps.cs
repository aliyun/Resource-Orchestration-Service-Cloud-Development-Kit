using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::DbVault`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.RosDbVaultProps")]
    public class RosDbVaultProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IRosDbVaultProps
    {
        /// <remarks>
        /// <strong>Property</strong>: retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RetentionDays
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultName: Display name of the vault.
        /// </remarks>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultRegionId: The region ID to create the vault.
        /// </remarks>
        [JsiiProperty(name: "vaultRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the vault.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

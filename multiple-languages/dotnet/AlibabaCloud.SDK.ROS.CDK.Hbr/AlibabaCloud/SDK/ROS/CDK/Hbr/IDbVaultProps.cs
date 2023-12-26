using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `DbVault`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDbVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbVaultProps")]
    public interface IDbVaultProps
    {
        /// <summary>Property retentionDays: Data retention days of the vault.</summary>
        /// <remarks>
        /// Data will be deleted when it's older than this time.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetentionDays
        {
            get;
        }

        /// <summary>Property vaultName: Display name of the vault.</summary>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultName
        {
            get;
        }

        /// <summary>Property vaultRegionId: The region ID to create the vault.</summary>
        [JsiiProperty(name: "vaultRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultRegionId
        {
            get;
        }

        /// <summary>Property description: Description of the vault.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbVault.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Hbr.RosDbVault.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DbVault`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDbVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbVaultProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbVaultProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property retentionDays: Data retention days of the vault.</summary>
            /// <remarks>
            /// Data will be deleted when it's older than this time.
            /// </remarks>
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetentionDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultName: Display name of the vault.</summary>
            [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultRegionId: The region ID to create the vault.</summary>
            [JsiiProperty(name: "vaultRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description of the vault.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbVault.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.RosDbVault.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.RosDbVault.ITagsProperty[]?>();
            }
        }
    }
}

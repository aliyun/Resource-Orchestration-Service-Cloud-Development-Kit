using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::HBR::Vault`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVault`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Hbr.Vault), fullyQualifiedName: "@alicloud/ros-cdk-hbr.Vault", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-hbr.VaultProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Vault : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Hbr.IVault
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Vault(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Hbr.IVaultProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Hbr.IVaultProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Vault(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Vault(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.</summary>
        [JsiiProperty(name: "attrBackupPlanStatistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackupPlanStatistics
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BytesDone: The amount of data that is backed up.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrBytesDone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBytesDone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The time when the backup vault was created.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Dedup: Indicates whether the deduplication feature is enabled.</summary>
        [JsiiProperty(name: "attrDedup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDedup
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the backup vault.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IndexAvailable: Indicates whether indexes are available.</summary>
        /// <remarks>
        /// Indexes are available when they are not being updated.
        /// </remarks>
        [JsiiProperty(name: "attrIndexAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIndexAvailable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IndexLevel: The index level.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>OFF</strong>: No indexes are created.</description>
        /// <description><strong>META</strong>: Metadata indexes are created.</description>
        /// <description><strong>ALL</strong>: Full-text indexes are created.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrIndexLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIndexLevel
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IndexUpdateTime: The time when the index was updated.</summary>
        [JsiiProperty(name: "attrIndexUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIndexUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LatestReplicationTime: The time when the last remote backup was synchronized.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrLatestReplicationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLatestReplicationTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: PaymentType.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RedundancyType: The data redundancy type of the backup vault.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</description>
        /// <description><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrRedundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRedundancyType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Replication: Indicates whether the backup vault is a remote backup vault.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: The backup vault is a remote backup vault.</description>
        /// <description><strong>false</strong>: The backup vault is an on-premises backup vault.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrReplication", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplication
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.</summary>
        [JsiiProperty(name: "attrReplicationProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicationProgress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.</summary>
        [JsiiProperty(name: "attrReplicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicationSourceRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.</summary>
        [JsiiProperty(name: "attrReplicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicationSourceVaultId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Retention: The retention period of the backup vault.</summary>
        /// <remarks>
        /// Unit: days.
        /// </remarks>
        [JsiiProperty(name: "attrRetention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRetention
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SearchEnabled: Indicates whether the backup search feature is enabled.</summary>
        [JsiiProperty(name: "attrSearchEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSearchEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceTypes: The information about the data source.</summary>
        [JsiiProperty(name: "attrSourceTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceTypes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageSize: The usage of the backup vault.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags of the backup vault.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TrialInfo: The free trial information.</summary>
        [JsiiProperty(name: "attrTrialInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTrialInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdatedTime: The time when the backup vault was updated.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrUpdatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdatedTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultId: The ID of the backup vault.</summary>
        [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultName: The name of the backup vault.</summary>
        [JsiiProperty(name: "attrVaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.</summary>
        /// <remarks>
        /// This parameter is available only for remote backup vaults. Valid values:
        ///
        /// <list type="bullet">
        /// <description>*<em>UNKNOWN_ERROR</em>: An unknown error occurs.</description>
        /// <description><strong>SOURCE_VAULT_ALREADY_HAS_REPLICATION</strong>: A mirror vault is configured for the source vault.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrVaultStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultStatusMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultStorageClass: The storage type of the backup vault.</summary>
        /// <remarks>
        /// Valid value: <strong>STANDARD</strong>, which indicates standard storage.
        /// </remarks>
        [JsiiProperty(name: "attrVaultStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultStorageClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VaultType: The type of the backup vault.</summary>
        /// <remarks>
        /// Valid value: <strong>STANDARD</strong>, which indicates a standard backup vault.
        /// </remarks>
        [JsiiProperty(name: "attrVaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVaultType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.VaultProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Hbr.IVaultProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.IVaultProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}

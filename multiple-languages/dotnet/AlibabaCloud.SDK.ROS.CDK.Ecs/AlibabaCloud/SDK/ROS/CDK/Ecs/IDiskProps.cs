using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `Disk`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskProps")]
    public interface IDiskProps
    {
        /// <summary>Property autoSnapshotPolicyId: Auto snapshot policy ID.</summary>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property burstingEnabled: Specifies whether to enable performance bursting.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true</description>
        /// <description>false</description>
        /// </list>
        ///
        ///     This parameter is available only for ESSD AutoPL disks (<c>cloud_auto</c>). For more
        ///     information, see <a href="">ESSD AutoPL disks</a>.
        /// </remarks>
        [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BurstingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteAutoSnapshot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the disk, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.</summary>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskName: The name of the disk.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must
        /// start with a letter as defined by Unicode and can contain letters (including
        /// English and Chinese characters), digits (0-9), colons (:), underscores (_),
        /// periods (.), and hyphens (-).
        /// Default value: empty.
        /// </remarks>
        [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Whether disk is encrypted, default to false.</summary>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If you set this parameter, the <c>ResourceGroupId</c>, <c>Tag.N.Key</c>, <c>Tag.N.Value</c>,
        /// <c>ClientToken</c>, and <c>KMSKeyId</c> parameters are ignored.</description>
        /// <description>You cannot specify both <c>ZoneId</c> and <c>InstanceId</c>.
        /// Default value: empty. An empty value indicates that you are creating a
        /// pay-as-you-go disk. The disk's location is determined by <c>RegionId</c> and <c>ZoneId</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the KMS key to use for the disk.</summary>
        /// <remarks>
        ///     If <c>Encrypted</c> is set to true and you do not specify <c>KMSKeyId</c>, a default key
        ///     is used for encryption. The <c>KMSKeyId</c> is returned in the response after the
        ///     instance is created.
        ///
        /// <list type="bullet">
        ///     <description><list type="bullet">
        ///     <description>If the disk is created from an unshared encrypted snapshot, the encryption
        ///     key used by that snapshot is used by default.</description>
        ///     </list></description>
        ///     <description><list type="bullet">
        ///     <description>If the disk is created from a shared encrypted snapshot, the service key is
        ///     used by default.</description>
        ///     </list></description>
        ///     <description><list type="bullet">
        ///     <description>If the disk is created in a region with account-level default encryption
        ///     enabled, the specified account-level key is used by default.</description>
        ///     </list></description>
        ///     <description><list type="bullet">
        ///     <description>In other cases, the service key is used by default.</description>
        ///     </list></description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiAttach: Specifies whether to enable the multi-attach feature for the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// Disabled: disables the multi-attach feature.
        /// Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
        /// Default value: Disabled.
        /// </remarks>
        [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAttach
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.</summary>
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Capacity &lt;= 3 GiB: You cannot set provisioned performance.</description>
        /// <description>Capacity &gt;= 4 GiB: 0 to min(1,000 IOPS/GiB × Capacity - Baseline IOPS, 50,000).
        /// Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).</description>
        /// </list>
        ///
        ///     This parameter is available only for ESSD AutoPL disks (<c>cloud_auto</c>). For more
        ///     information, see <a href="">ESSD AutoPL disks</a>.
        /// </remarks>
        [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property size: The capacity of the disk, in GiB.</summary>
        /// <remarks>
        /// You must specify a value for this parameter.
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>cloud</c>: 5 to 2,000</description>
        /// <description><c>cloud_efficiency</c>: 20 to 32,768</description>
        /// <description><c>cloud_ssd</c>: 20 to 32,768</description>
        /// <description><c>PerformanceLevel</c></description>
        /// <description>PL0: 1 to 65,536</description>
        /// <description>PL1: 20 to 65,536</description>
        /// <description>PL2: 461 to 65,536</description>
        /// <description>PL3: 1,261 to 65,536</description>
        /// <description><c>cloud_auto</c>: 1 to 65,536</description>
        /// <description><c>cloud_essd_entry</c>: 10 to 32,768</description>
        /// <description><c>cloud_regional_disk_auto</c>: 10 to 65,536</description>
        /// <description><c>elastic_ephemeral_disk_standard</c>: 64 to 8,192</description>
        /// <description><c>elastic_ephemeral_disk_premium</c>: 64 to 8,192
        /// If you specify <c>SnapshotId</c>, the following limits apply to <c>SnapshotId</c> and
        /// <c>Size</c>:</description>
        /// <description>If the snapshot capacity is greater than the specified <c>Size</c>, the actual disk
        /// size is the snapshot capacity.</description>
        /// <description>If the snapshot capacity is smaller than the specified <c>Size</c>, the actual disk
        /// size is the specified <c>Size</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Size
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotId: The ID of the snapshot used to create the disk.</summary>
        /// <remarks>
        /// Snapshots created on or before
        /// July 15, 2013 cannot be used to create disks.
        /// The <c>SnapshotId</c> and <c>Size</c> parameters have the following limits:
        ///
        /// <list type="bullet">
        /// <description>If the snapshot capacity is greater than the specified <c>Size</c>, the actual disk
        /// size is the snapshot capacity.</description>
        /// <description>If the snapshot capacity is smaller than the specified <c>Size</c>, the actual disk
        /// size is the specified <c>Size</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSetId: The ID of the storage set.</summary>
        /// <remarks>
        ///     You can specify either storage set parameters (<c>StorageSetId</c> and
        ///     <c>StorageSetPartitionNumber</c>) or the dedicated block storage cluster parameter
        ///     (<c>StorageClusterId</c>), but not both. The request fails if you specify parameters
        ///     for both.
        /// </remarks>
        [JsiiProperty(name: "storageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSetPartitionNumber: The number of partitions in the storage set.</summary>
        /// <remarks>
        /// The value must be greater than or
        /// equal to 2 and cannot exceed the quota returned by the
        /// <a href="">DescribeAccountAttributes</a> operation.
        /// Default value: 2.
        /// </remarks>
        [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSetPartitionNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to disk.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosDisk.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosDisk.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If you do not set <c>InstanceId</c>, this parameter is required.</description>
        /// <description>You cannot specify both <c>ZoneId</c> and <c>InstanceId</c>.</description>
        /// </list>
        ///
        ///     ESSD zone-redundant disks (<c>cloud_regional_disk_auto</c>) do not require a zone
        ///     ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Disk`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoSnapshotPolicyId: Auto snapshot policy ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property burstingEnabled: Specifies whether to enable performance bursting.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true</description>
            /// <description>false</description>
            /// </list>
            ///
            ///     This parameter is available only for ESSD AutoPL disks (<c>cloud_auto</c>). For more
            ///     information, see <a href="">ESSD AutoPL disks</a>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
            /// <remarks>
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteAutoSnapshot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the disk, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskName: The name of the disk.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must
            /// start with a letter as defined by Unicode and can contain letters (including
            /// English and Chinese characters), digits (0-9), colons (:), underscores (_),
            /// periods (.), and hyphens (-).
            /// Default value: empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Whether disk is encrypted, default to false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If you set this parameter, the <c>ResourceGroupId</c>, <c>Tag.N.Key</c>, <c>Tag.N.Value</c>,
            /// <c>ClientToken</c>, and <c>KMSKeyId</c> parameters are ignored.</description>
            /// <description>You cannot specify both <c>ZoneId</c> and <c>InstanceId</c>.
            /// Default value: empty. An empty value indicates that you are creating a
            /// pay-as-you-go disk. The disk's location is determined by <c>RegionId</c> and <c>ZoneId</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the KMS key to use for the disk.</summary>
            /// <remarks>
            ///     If <c>Encrypted</c> is set to true and you do not specify <c>KMSKeyId</c>, a default key
            ///     is used for encryption. The <c>KMSKeyId</c> is returned in the response after the
            ///     instance is created.
            ///
            /// <list type="bullet">
            ///     <description><list type="bullet">
            ///     <description>If the disk is created from an unshared encrypted snapshot, the encryption
            ///     key used by that snapshot is used by default.</description>
            ///     </list></description>
            ///     <description><list type="bullet">
            ///     <description>If the disk is created from a shared encrypted snapshot, the service key is
            ///     used by default.</description>
            ///     </list></description>
            ///     <description><list type="bullet">
            ///     <description>If the disk is created in a region with account-level default encryption
            ///     enabled, the specified account-level key is used by default.</description>
            ///     </list></description>
            ///     <description><list type="bullet">
            ///     <description>In other cases, the service key is used by default.</description>
            ///     </list></description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiAttach: Specifies whether to enable the multi-attach feature for the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// Disabled: disables the multi-attach feature.
            /// Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
            /// Default value: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAttach
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Capacity &lt;= 3 GiB: You cannot set provisioned performance.</description>
            /// <description>Capacity &gt;= 4 GiB: 0 to min(1,000 IOPS/GiB × Capacity - Baseline IOPS, 50,000).
            /// Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).</description>
            /// </list>
            ///
            ///     This parameter is available only for ESSD AutoPL disks (<c>cloud_auto</c>). For more
            ///     information, see <a href="">ESSD AutoPL disks</a>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property size: The capacity of the disk, in GiB.</summary>
            /// <remarks>
            /// You must specify a value for this parameter.
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>cloud</c>: 5 to 2,000</description>
            /// <description><c>cloud_efficiency</c>: 20 to 32,768</description>
            /// <description><c>cloud_ssd</c>: 20 to 32,768</description>
            /// <description><c>PerformanceLevel</c></description>
            /// <description>PL0: 1 to 65,536</description>
            /// <description>PL1: 20 to 65,536</description>
            /// <description>PL2: 461 to 65,536</description>
            /// <description>PL3: 1,261 to 65,536</description>
            /// <description><c>cloud_auto</c>: 1 to 65,536</description>
            /// <description><c>cloud_essd_entry</c>: 10 to 32,768</description>
            /// <description><c>cloud_regional_disk_auto</c>: 10 to 65,536</description>
            /// <description><c>elastic_ephemeral_disk_standard</c>: 64 to 8,192</description>
            /// <description><c>elastic_ephemeral_disk_premium</c>: 64 to 8,192
            /// If you specify <c>SnapshotId</c>, the following limits apply to <c>SnapshotId</c> and
            /// <c>Size</c>:</description>
            /// <description>If the snapshot capacity is greater than the specified <c>Size</c>, the actual disk
            /// size is the snapshot capacity.</description>
            /// <description>If the snapshot capacity is smaller than the specified <c>Size</c>, the actual disk
            /// size is the specified <c>Size</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Size
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotId: The ID of the snapshot used to create the disk.</summary>
            /// <remarks>
            /// Snapshots created on or before
            /// July 15, 2013 cannot be used to create disks.
            /// The <c>SnapshotId</c> and <c>Size</c> parameters have the following limits:
            ///
            /// <list type="bullet">
            /// <description>If the snapshot capacity is greater than the specified <c>Size</c>, the actual disk
            /// size is the snapshot capacity.</description>
            /// <description>If the snapshot capacity is smaller than the specified <c>Size</c>, the actual disk
            /// size is the specified <c>Size</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSetId: The ID of the storage set.</summary>
            /// <remarks>
            ///     You can specify either storage set parameters (<c>StorageSetId</c> and
            ///     <c>StorageSetPartitionNumber</c>) or the dedicated block storage cluster parameter
            ///     (<c>StorageClusterId</c>), but not both. The request fails if you specify parameters
            ///     for both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSetPartitionNumber: The number of partitions in the storage set.</summary>
            /// <remarks>
            /// The value must be greater than or
            /// equal to 2 and cannot exceed the quota returned by the
            /// <a href="">DescribeAccountAttributes</a> operation.
            /// Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetPartitionNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to disk.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosDisk.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosDisk.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosDisk.ITagsProperty[]?>();
            }

            /// <summary>Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If you do not set <c>InstanceId</c>, this parameter is required.</description>
            /// <description>You cannot specify both <c>ZoneId</c> and <c>InstanceId</c>.</description>
            /// </list>
            ///
            ///     ESSD zone-redundant disks (<c>cloud_regional_disk_auto</c>) do not require a zone
            ///     ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

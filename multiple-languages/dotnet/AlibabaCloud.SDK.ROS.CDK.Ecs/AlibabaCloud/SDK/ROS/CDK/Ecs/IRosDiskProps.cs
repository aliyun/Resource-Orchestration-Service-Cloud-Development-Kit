using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosDisk`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosDiskProps")]
    public interface IRosDiskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
        /// </remarks>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: burstingEnabled: Specifies whether to enable performance bursting. Valid values:
        /// - true
        /// - false
        /// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
        /// information, see [ESSD AutoPL disks]().
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

        /// <remarks>
        /// <strong>Property</strong>: deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
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

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
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

        /// <remarks>
        /// <strong>Property</strong>: diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.
        /// </remarks>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskName: The name of the disk. The name must be 2 to 128 characters in length. It must
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

        /// <remarks>
        /// <strong>Property</strong>: encrypted: Whether disk is encrypted, default to false.
        /// </remarks>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Creates a subscription disk and automatically attaches it to the specified
        /// subscription instance.
        /// - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`,
        /// `ClientToken`, and `KMSKeyId` parameters are ignored.
        /// - You cannot specify both `ZoneId` and `InstanceId`.
        /// Default value: empty. An empty value indicates that you are creating a
        /// pay-as-you-go disk. The disk's location is determined by `RegionId` and `ZoneId`.
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

        /// <remarks>
        /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key to use for the disk.
        /// > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key
        /// is used for encryption. The `KMSKeyId` is returned in the response after the
        /// instance is created.
        /// >
        /// > - - If the disk is created from an unshared encrypted snapshot, the encryption
        /// key used by that snapshot is used by default.
        /// >
        /// > - - If the disk is created from a shared encrypted snapshot, the service key is
        /// used by default.
        /// >
        /// > - - If the disk is created in a region with account-level default encryption
        /// enabled, the specified account-level key is used by default.
        /// >
        /// > - - In other cases, the service key is used by default.
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

        /// <remarks>
        /// <strong>Property</strong>: multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
        /// </remarks>
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk. Valid values:
        /// - Capacity <= 3 GiB: You cannot set provisioned performance.
        /// - Capacity >= 4 GiB: 0 to min(1,000 IOPS\/GiB × Capacity - Baseline IOPS, 50,000).
        /// Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
        /// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
        /// information, see [ESSD AutoPL disks]().
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: size: The capacity of the disk, in GiB. You must specify a value for this parameter.
        /// Value range:
        /// - `cloud`: 5 to 2,000
        /// - `cloud_efficiency`: 20 to 32,768
        /// - `cloud_ssd`: 20 to 32,768
        /// - `PerformanceLevel`
        /// - PL0: 1 to 65,536
        /// - PL1: 20 to 65,536
        /// - PL2: 461 to 65,536
        /// - PL3: 1,261 to 65,536
        /// - `cloud_auto`: 1 to 65,536
        /// - `cloud_essd_entry`: 10 to 32,768
        /// - `cloud_regional_disk_auto`: 10 to 65,536
        /// - `elastic_ephemeral_disk_standard`: 64 to 8,192
        /// - `elastic_ephemeral_disk_premium`: 64 to 8,192
        /// If you specify `SnapshotId`, the following limits apply to `SnapshotId` and
        /// `Size`:
        /// - If the snapshot capacity is greater than the specified `Size`, the actual disk
        /// size is the snapshot capacity.
        /// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
        /// size is the specified `Size`.
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

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: The ID of the snapshot used to create the disk. Snapshots created on or before
        /// July 15, 2013 cannot be used to create disks.
        /// The `SnapshotId` and `Size` parameters have the following limits:
        /// - If the snapshot capacity is greater than the specified `Size`, the actual disk
        /// size is the snapshot capacity.
        /// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
        /// size is the specified `Size`.
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

        /// <remarks>
        /// <strong>Property</strong>: storageSetId: The ID of the storage set.
        /// > You can specify either storage set parameters (`StorageSetId` and
        /// `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter
        /// (`StorageClusterId`), but not both. The request fails if you specify parameters
        /// for both.
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

        /// <remarks>
        /// <strong>Property</strong>: storageSetPartitionNumber: The number of partitions in the storage set. The value must be greater than or
        /// equal to 2 and cannot exceed the quota returned by the
        /// [DescribeAccountAttributes]() operation.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
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

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which to create the pay-as-you-go disk.
        /// - If you do not set `InstanceId`, this parameter is required.
        /// - You cannot specify both `ZoneId` and `InstanceId`.
        /// > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone
        /// ID.
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

        /// <summary>Properties for defining a `RosDisk`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosDiskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosDiskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: burstingEnabled: Specifies whether to enable performance bursting. Valid values:
            /// - true
            /// - false
            /// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
            /// information, see [ESSD AutoPL disks]().
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteAutoSnapshot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: The name of the disk. The name must be 2 to 128 characters in length. It must
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

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Whether disk is encrypted, default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Creates a subscription disk and automatically attaches it to the specified
            /// subscription instance.
            /// - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`,
            /// `ClientToken`, and `KMSKeyId` parameters are ignored.
            /// - You cannot specify both `ZoneId` and `InstanceId`.
            /// Default value: empty. An empty value indicates that you are creating a
            /// pay-as-you-go disk. The disk's location is determined by `RegionId` and `ZoneId`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key to use for the disk.
            /// > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key
            /// is used for encryption. The `KMSKeyId` is returned in the response after the
            /// instance is created.
            /// >
            /// > - - If the disk is created from an unshared encrypted snapshot, the encryption
            /// key used by that snapshot is used by default.
            /// >
            /// > - - If the disk is created from a shared encrypted snapshot, the service key is
            /// used by default.
            /// >
            /// > - - If the disk is created in a region with account-level default encryption
            /// enabled, the specified account-level key is used by default.
            /// >
            /// > - - In other cases, the service key is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk. Valid values:
            /// - Capacity <= 3 GiB: You cannot set provisioned performance.
            /// - Capacity >= 4 GiB: 0 to min(1,000 IOPS\/GiB × Capacity - Baseline IOPS, 50,000).
            /// Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
            /// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
            /// information, see [ESSD AutoPL disks]().
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The capacity of the disk, in GiB. You must specify a value for this parameter.
            /// Value range:
            /// - `cloud`: 5 to 2,000
            /// - `cloud_efficiency`: 20 to 32,768
            /// - `cloud_ssd`: 20 to 32,768
            /// - `PerformanceLevel`
            /// - PL0: 1 to 65,536
            /// - PL1: 20 to 65,536
            /// - PL2: 461 to 65,536
            /// - PL3: 1,261 to 65,536
            /// - `cloud_auto`: 1 to 65,536
            /// - `cloud_essd_entry`: 10 to 32,768
            /// - `cloud_regional_disk_auto`: 10 to 65,536
            /// - `elastic_ephemeral_disk_standard`: 64 to 8,192
            /// - `elastic_ephemeral_disk_premium`: 64 to 8,192
            /// If you specify `SnapshotId`, the following limits apply to `SnapshotId` and
            /// `Size`:
            /// - If the snapshot capacity is greater than the specified `Size`, the actual disk
            /// size is the snapshot capacity.
            /// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
            /// size is the specified `Size`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Size
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: The ID of the snapshot used to create the disk. Snapshots created on or before
            /// July 15, 2013 cannot be used to create disks.
            /// The `SnapshotId` and `Size` parameters have the following limits:
            /// - If the snapshot capacity is greater than the specified `Size`, the actual disk
            /// size is the snapshot capacity.
            /// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
            /// size is the specified `Size`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageSetId: The ID of the storage set.
            /// > You can specify either storage set parameters (`StorageSetId` and
            /// `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter
            /// (`StorageClusterId`), but not both. The request fails if you specify parameters
            /// for both.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageSetPartitionNumber: The number of partitions in the storage set. The value must be greater than or
            /// equal to 2 and cannot exceed the quota returned by the
            /// [DescribeAccountAttributes]() operation.
            /// Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetPartitionNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosDisk.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosDisk.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosDisk.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone in which to create the pay-as-you-go disk.
            /// - If you do not set `InstanceId`, this parameter is required.
            /// - You cannot specify both `ZoneId` and `InstanceId`.
            /// > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone
            /// ID.
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

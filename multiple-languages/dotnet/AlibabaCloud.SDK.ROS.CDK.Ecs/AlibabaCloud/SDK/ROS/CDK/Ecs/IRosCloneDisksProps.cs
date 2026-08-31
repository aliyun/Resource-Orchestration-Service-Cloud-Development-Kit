using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosCloneDisks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCloneDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosCloneDisksProps")]
    public interface IRosCloneDisksProps
    {
        /// <remarks>
        /// <strong>Property</strong>: diskCategory: The type of the new disk. Valid values:
        /// - `cloud_essd`: ESSD cloud disk.
        /// - `cloud_auto`: ESSD AutoPL cloud disk.
        /// - `cloud_essd_entry`: ESSD Entry cloud disk.
        /// - `cloud_regional_disk_auto`: regional disk.
        /// > Disk type limits for cloning
        /// >
        /// > - A non-regional disk can be cloned only as a non-regional disk.
        /// >
        /// > - A regional disk can be cloned only as a regional disk.
        /// </remarks>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskCategory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAttach: Specifies whether to enable the multi-attach feature for the new disk. Valid
        /// values:
        /// - `Disabled`: Disables the multi-attach feature.
        /// - `Enabled`: Enables the multi-attach feature. You can set this parameter to
        /// `Enabled` only for ESSD cloud disks.
        /// </remarks>
        [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiAttach
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: size: The size of the new disk, in GiB. The value must be greater than or equal to the
        /// size of the source disk. The value range varies based on the `DiskCategory`
        /// value:
        /// - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
        /// - `PL0`: 1 to 65,536
        /// - `PL1`: 20 to 65,536
        /// - `PL2`: 461 to 65,536
        /// - `PL3`: 1,261 to 65,536
        /// - `cloud_auto`: 1 to 65,536
        /// - `cloud_essd_entry`: 10 to 32,768
        /// - `cloud_regional_disk_auto`: 10 to 65,536
        /// </remarks>
        [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Size
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceDiskId: The ID of the source disk.
        /// </remarks>
        [JsiiProperty(name: "sourceDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceDiskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: burstingEnabled: Specifies whether to enable performance bursting for the new disk. Valid values:
        /// - `true`: Enables performance bursting.
        /// - `false`: Disables performance bursting.
        /// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
        /// more information, see ESSD AutoPL cloud disks.
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
        /// <strong>Property</strong>: diskName: The name of the new disk. The name must be 2 to 128 characters in length. It must
        /// start with a letter and can contain letters, digits, colons (:), underscores (_),
        /// periods (.), and hyphens (-).
        /// Default value: none.
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
        /// <strong>Property</strong>: encrypted: Specifies whether to encrypt the new disk. Valid values:
        /// - `true`: The disk is encrypted.
        /// - `false`: The disk is not encrypted.
        /// Default value: false.
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
        /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key used to encrypt the disk.
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
        /// <strong>Property</strong>: performanceLevel: The performance level of the new ESSD cloud disk. Valid values:
        /// - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
        /// - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
        /// - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
        /// - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
        /// > This parameter is required when `DiskCategory` is set to `cloud_essd`.
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
        /// <strong>Property</strong>: provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values:
        /// - You cannot set this parameter for disks that are 3 GiB or smaller in size.
        /// - For disks that are 4 GiB or larger in size, the value must be in the range of
        /// `[0, min(1000 * Size - baseline performance, 50000)]`.
        /// baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
        /// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
        /// more information, see ESSD AutoPL cloud disks.
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
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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
        /// <strong>Property</strong>: tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCloneDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCloneDisks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCloneDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosCloneDisksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosCloneDisksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCategory: The type of the new disk. Valid values:
            /// - `cloud_essd`: ESSD cloud disk.
            /// - `cloud_auto`: ESSD AutoPL cloud disk.
            /// - `cloud_essd_entry`: ESSD Entry cloud disk.
            /// - `cloud_regional_disk_auto`: regional disk.
            /// > Disk type limits for cloning
            /// >
            /// > - A non-regional disk can be cloned only as a non-regional disk.
            /// >
            /// > - A regional disk can be cloned only as a regional disk.
            /// </remarks>
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAttach: Specifies whether to enable the multi-attach feature for the new disk. Valid
            /// values:
            /// - `Disabled`: Disables the multi-attach feature.
            /// - `Enabled`: Enables the multi-attach feature. You can set this parameter to
            /// `Enabled` only for ESSD cloud disks.
            /// </remarks>
            [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiAttach
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of the new disk, in GiB. The value must be greater than or equal to the
            /// size of the source disk. The value range varies based on the `DiskCategory`
            /// value:
            /// - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
            /// - `PL0`: 1 to 65,536
            /// - `PL1`: 20 to 65,536
            /// - `PL2`: 461 to 65,536
            /// - `PL3`: 1,261 to 65,536
            /// - `cloud_auto`: 1 to 65,536
            /// - `cloud_essd_entry`: 10 to 32,768
            /// - `cloud_regional_disk_auto`: 10 to 65,536
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Size
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceDiskId: The ID of the source disk.
            /// </remarks>
            [JsiiProperty(name: "sourceDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: burstingEnabled: Specifies whether to enable performance bursting for the new disk. Valid values:
            /// - `true`: Enables performance bursting.
            /// - `false`: Disables performance bursting.
            /// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
            /// more information, see ESSD AutoPL cloud disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: The name of the new disk. The name must be 2 to 128 characters in length. It must
            /// start with a letter and can contain letters, digits, colons (:), underscores (_),
            /// periods (.), and hyphens (-).
            /// Default value: none.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt the new disk. Valid values:
            /// - `true`: The disk is encrypted.
            /// - `false`: The disk is not encrypted.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key used to encrypt the disk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the new ESSD cloud disk. Valid values:
            /// - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
            /// - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
            /// - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
            /// - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
            /// > This parameter is required when `DiskCategory` is set to `cloud_essd`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values:
            /// - You cannot set this parameter for disks that are 3 GiB or smaller in size.
            /// - For disks that are 4 GiB or larger in size, the value must be in the range of
            /// `[0, min(1000 * Size - baseline performance, 50000)]`.
            /// baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
            /// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
            /// more information, see ESSD AutoPL cloud disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCloneDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Disk`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskProps")]
    public interface IDiskProps
    {
        /// <summary>Property zoneId: The availability zone in which the volume will be created.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property autoSnapshotPolicyId: Auto snapshot policy ID.</summary>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoSnapshotPolicyId
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
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.</summary>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DiskName
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

        /// <summary>Property kmsKeyId: KMS key ID used by the cloud disk.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.</summary>
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property size: The size of the disk unit in GB.</summary>
        [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Size
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotId: If specified, the backup used as the source to create disk.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSetId: Storage set ID.</summary>
        [JsiiProperty(name: "storageSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StorageSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSetPartitionNumber: The number of storage set partitions.</summary>
        [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? StorageSetPartitionNumber
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::Disk`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property zoneId: The availability zone in which the volume will be created.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoSnapshotPolicyId: Auto snapshot policy ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DiskCategory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DiskName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property encrypted: Whether disk is encrypted, default to false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: KMS key ID used by the cloud disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KmsKeyId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PerformanceLevel
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property size: The size of the disk unit in GB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Size
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property snapshotId: If specified, the backup used as the source to create disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnapshotId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property storageSetId: Storage set ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StorageSetId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property storageSetPartitionNumber: The number of storage set partitions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? StorageSetPartitionNumber
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property tags: Tags to attach to disk.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}

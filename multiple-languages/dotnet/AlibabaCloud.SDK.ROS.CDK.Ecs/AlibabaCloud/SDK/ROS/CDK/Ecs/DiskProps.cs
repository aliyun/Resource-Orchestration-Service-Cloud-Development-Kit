using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Disk`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.DiskProps")]
    public class DiskProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskProps
    {
        /// <summary>Property zoneId: The availability zone in which the volume will be created.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <summary>Property autoSnapshotPolicyId: Auto snapshot policy ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoSnapshotPolicyId
        {
            get;
            set;
        }

        /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteAutoSnapshot
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the disk, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskCategory
        {
            get;
            set;
        }

        /// <summary>Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskName
        {
            get;
            set;
        }

        /// <summary>Property encrypted: Whether disk is encrypted, default to false.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Encrypted
        {
            get;
            set;
        }

        /// <summary>Property kmsKeyId: KMS key ID used by the cloud disk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KmsKeyId
        {
            get;
            set;
        }

        /// <summary>Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PerformanceLevel
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property size: The size of the disk unit in GB.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Size
        {
            get;
            set;
        }

        /// <summary>Property snapshotId: If specified, the backup used as the source to create disk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnapshotId
        {
            get;
            set;
        }

        /// <summary>Property storageSetId: Storage set ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "storageSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StorageSetId
        {
            get;
            set;
        }

        /// <summary>Property storageSetPartitionNumber: The number of storage set partitions.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? StorageSetPartitionNumber
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to disk.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}

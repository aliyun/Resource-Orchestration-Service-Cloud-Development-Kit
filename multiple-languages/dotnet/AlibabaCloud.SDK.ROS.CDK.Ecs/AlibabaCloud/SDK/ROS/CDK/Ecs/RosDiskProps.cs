using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Disk`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosDiskProps")]
    public class RosDiskProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosDiskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: zoneId: The availability zone in which the volume will be created.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoSnapshotPolicyId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteAutoSnapshot
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DiskName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encrypted: Whether disk is encrypted, default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Encrypted
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: kmsKeyId: KMS key ID used by the cloud disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KmsKeyId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PerformanceLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: size: The size of the disk unit in GB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Size
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: If specified, the backup used as the source to create disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnapshotId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageSetId: Storage set ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StorageSetId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageSetPartitionNumber: The number of storage set partitions.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageSetPartitionNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? StorageSetPartitionNumber
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }
    }
}

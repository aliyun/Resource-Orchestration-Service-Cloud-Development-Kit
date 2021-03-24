using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::FileSystem`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.FileSystemProps")]
    public class FileSystemProps : AlibabaCloud.SDK.ROS.CDK.Nas.IFileSystemProps
    {
        /// <summary>Property protocolType: Type of protocol used.</summary>
        /// <remarks>
        /// Currently includes the NFS type and the SMB type
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProtocolType
        {
            get;
            set;
        }

        /// <summary>Property storageType: The file system type.</summary>
        /// <remarks>
        /// Currently includes the Performance type and the Capacity type
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StorageType
        {
            get;
            set;
        }

        /// <summary>Property bandwidth: Maximum file system throughput, unit is MB/s.</summary>
        /// <remarks>
        /// Required and valid only when FileSystemType=cpfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property capacity: File system capacity, the unit is GB.</summary>
        /// <remarks>
        /// Required and valid when FileSystemType=extreme or cpfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Capacity
        {
            get;
            set;
        }

        /// <summary>Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property deletionForce: Whether delete all mount targets on the file system and then delete file system.</summary>
        /// <remarks>
        /// Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <summary>Property description: File system description (space characters are not allowed).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property duration: The period of subscription in months.</summary>
        /// <remarks>
        /// Required and valid when ChargeType is Subscription.
        /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Duration
        {
            get;
            set;
        }

        /// <summary>Property encryptType: Specifies whether to encrypt data.</summary>
        /// <remarks>
        /// You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        /// 0: specifies that no encryption is applied to data on the file system.
        /// 1: specifies that encryption is applied to data on the file system.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptType", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EncryptType
        {
            get;
            set;
        }

        /// <summary>Property fileSystemType: File system type.</summary>
        /// <remarks>
        /// Allowed values: standard, extreme, cpfs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? FileSystemType
        {
            get;
            set;
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnapshotId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to filesystem.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vpcId: Vpc ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Zone ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}

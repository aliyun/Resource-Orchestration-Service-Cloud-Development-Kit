using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosFileSystem`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosFileSystemProps")]
    public interface IRosFileSystemProps
    {
        /// <remarks>
        /// <strong>Property</strong>: protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageType: The storage type of the file System.
        /// Valid values:
        /// Performance、Capacity、Premium(Available when the file_system_type is standard)
        /// standard、advance(Available when the file_system_type is extreme)
        /// advance_100、advance_200(Available when the file_system_type is cpfs)
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
        /// and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
        /// Specify a value based on the specifications on the following buy page:
        /// *   Extreme NAS (Pay-as-you-go)
        /// *   CPFS (Pay-as-you-go)
        /// </remarks>
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Capacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: Type of payment:
        /// PayAsYouGo (pay as you go)
        /// Subscription
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the file system.
        /// Limits:
        /// *   Must be 2 to 128 characters in length.
        /// *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
        /// *   Can contain digits, colons (:), underscores (_), and hyphens (-).
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
        /// <strong>Property</strong>: duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptType: Specifies whether to encrypt data in the file system.
        /// You can use the keys that are managed by Key Management Service (KMS) to encrypt
        /// data in a file system. When you read and write the encrypted data, the data is
        /// automatically decrypted.
        /// Valid values:
        /// *   0 (default): The data in the file system is not encrypted.
        /// *   1: A NAS-managed key is used to encrypt the data in the file system. This
        /// value is valid if FileSystemType is set to standard or extreme.
        /// *   2: A KMS-managed key is used to encrypt the data in the file system. This
        /// value is valid if the FileSystemType parameter is set to standard or extreme.
        /// >
        /// *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
        /// keys.
        /// *   General-purpose NAS: All regions support KMS-managed keys.
        /// </remarks>
        [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
        /// </remarks>
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemType
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
        /// <strong>Property</strong>: snapshotId: The snapshot ID.
        /// This parameter is available only for advanced Extreme NAS file systems.
        /// > You can create a file system from a snapshot. The version of the file system is
        /// the same as that of the source file system. For example, the source file system
        /// of the snapshot uses version 1. To create a file system of version 2, create File
        /// System A from the snapshot and create File System B of version 2. Then copy the
        /// data and migrate your business from File System A to File System B.
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
        /// <strong>Property</strong>: tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nas.RosFileSystem.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Nas.RosFileSystem.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC ID.
        /// *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
        /// *   This parameter is reserved and not required if FileSystemType is set to
        /// standard or extreme.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch ID.
        /// *   This parameter is required if FileSystemType is set to cpfs.
        /// *   If FileSystemType is not set to cpfs, this parameter is reserved and not
        /// required.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone.
        /// Each region has multiple isolated locations known as zones. Each zone has its own
        /// independent power supply and network.
        /// This parameter is not required if FileSystemType is set to standard. By default,
        /// a random zone is selected based on the protocol type and storage type.
        /// This parameter is required if FileSystemType is set to extreme or cpfs.
        /// >
        /// *   An Elastic Compute Service (ECS) instance and a file system that reside in
        /// different zones of the same region can access each other.
        /// *   We recommend that you select the zone where the ECS instance resides. This
        /// prevents cross-zone latency between the file system and the ECS instance.
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

        /// <summary>Properties for defining a `RosFileSystem`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosFileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storageType: The storage type of the file System.
            /// Valid values:
            /// Performance、Capacity、Premium(Available when the file_system_type is standard)
            /// standard、advance(Available when the file_system_type is extreme)
            /// advance_100、advance_200(Available when the file_system_type is cpfs)
            /// </remarks>
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
            /// and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
            /// Specify a value based on the specifications on the following buy page:
            /// *   Extreme NAS (Pay-as-you-go)
            /// *   CPFS (Pay-as-you-go)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Capacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: Type of payment:
            /// PayAsYouGo (pay as you go)
            /// Subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the file system.
            /// Limits:
            /// *   Must be 2 to 128 characters in length.
            /// *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
            /// *   Can contain digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
            /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptType: Specifies whether to encrypt data in the file system.
            /// You can use the keys that are managed by Key Management Service (KMS) to encrypt
            /// data in a file system. When you read and write the encrypted data, the data is
            /// automatically decrypted.
            /// Valid values:
            /// *   0 (default): The data in the file system is not encrypted.
            /// *   1: A NAS-managed key is used to encrypt the data in the file system. This
            /// value is valid if FileSystemType is set to standard or extreme.
            /// *   2: A KMS-managed key is used to encrypt the data in the file system. This
            /// value is valid if the FileSystemType parameter is set to standard or extreme.
            /// >
            /// *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
            /// keys.
            /// *   General-purpose NAS: All regions support KMS-managed keys.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
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
            /// <strong>Property</strong>: snapshotId: The snapshot ID.
            /// This parameter is available only for advanced Extreme NAS file systems.
            /// > You can create a file system from a snapshot. The version of the file system is
            /// the same as that of the source file system. For example, the source file system
            /// of the snapshot uses version 1. To create a file system of version 2, create File
            /// System A from the snapshot and create File System B of version 2. Then copy the
            /// data and migrate your business from File System A to File System B.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nas.RosFileSystem.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Nas.RosFileSystem.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nas.RosFileSystem.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The VPC ID.
            /// *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
            /// *   This parameter is reserved and not required if FileSystemType is set to
            /// standard or extreme.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The vSwitch ID.
            /// *   This parameter is required if FileSystemType is set to cpfs.
            /// *   If FileSystemType is not set to cpfs, this parameter is reserved and not
            /// required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone.
            /// Each region has multiple isolated locations known as zones. Each zone has its own
            /// independent power supply and network.
            /// This parameter is not required if FileSystemType is set to standard. By default,
            /// a random zone is selected based on the protocol type and storage type.
            /// This parameter is required if FileSystemType is set to extreme or cpfs.
            /// >
            /// *   An Elastic Compute Service (ECS) instance and a file system that reside in
            /// different zones of the same region can access each other.
            /// *   We recommend that you select the zone where the ECS instance resides. This
            /// prevents cross-zone latency between the file system and the ECS instance.
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

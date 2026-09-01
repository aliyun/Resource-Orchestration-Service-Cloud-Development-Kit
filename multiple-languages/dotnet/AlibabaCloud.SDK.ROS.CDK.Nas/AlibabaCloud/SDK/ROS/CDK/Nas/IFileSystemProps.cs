using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `FileSystem`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.FileSystemProps")]
    public interface IFileSystemProps
    {
        /// <summary>Property protocolType: Type of protocol used.</summary>
        /// <remarks>
        /// Valid values: NFS, SMB, cpfs.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <summary>Property storageType: The storage type of the file System.</summary>
        /// <remarks>
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

        /// <summary>Property bandwidth: Maximum file system throughput, unit is MB\/s.</summary>
        /// <remarks>
        /// Required and valid only when FileSystemType=cpfs.
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

        /// <summary>Property capacity: Specify the capacity of the file system.</summary>
        /// <remarks>
        /// Unit: GiB. This parameter is required
        /// and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
        /// Specify a value based on the specifications on the following buy page:
        ///
        /// <list type="bullet">
        /// <description>Extreme NAS (Pay-as-you-go)</description>
        /// <description>CPFS (Pay-as-you-go)</description>
        /// </list>
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

        /// <summary>Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether delete all mount targets on the file system and then delete file system.</summary>
        /// <remarks>
        /// Default is false
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

        /// <summary>Property description: The description of the file system.</summary>
        /// <remarks>
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>Must be 2 to 128 characters in length.</description>
        /// <description>Must start with a letter but cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.</description>
        /// <description>Can contain digits, colons (:), underscores (_), and hyphens (-).</description>
        /// </list>
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

        /// <summary>Property duration: The period of subscription in months.</summary>
        /// <remarks>
        /// Required and valid when ChargeType is Subscription.
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

        /// <summary>Property encryptType: Specifies whether to encrypt data in the file system.</summary>
        /// <remarks>
        /// You can use the keys that are managed by Key Management Service (KMS) to encrypt
        /// data in a file system. When you read and write the encrypted data, the data is
        /// automatically decrypted.
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>0 (default): The data in the file system is not encrypted.</description>
        /// <description>1: A NAS-managed key is used to encrypt the data in the file system. This
        /// value is valid if FileSystemType is set to standard or extreme.</description>
        /// <description>2: A KMS-managed key is used to encrypt the data in the file system. This
        /// value is valid if the FileSystemType parameter is set to standard or extreme.</description>
        /// </list>
        ///
        ///
        ///
        /// <list type="bullet">
        /// <description>Extreme NAS: All regions except China East 1 Finance support KMS-managed
        /// keys.</description>
        /// <description>General-purpose NAS: All regions support KMS-managed keys.</description>
        /// </list>
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

        /// <summary>Property fileSystemType: File system type.</summary>
        /// <remarks>
        /// Allowed values: standard(default), extreme, cpfs
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

        /// <summary>Property snapshotId: The snapshot ID.</summary>
        /// <remarks>
        /// This parameter is available only for advanced Extreme NAS file systems.
        ///
        ///     You can create a file system from a snapshot. The version of the file system is
        ///     the same as that of the source file system. For example, the source file system
        ///     of the snapshot uses version 1. To create a file system of version 2, create File
        ///     System A from the snapshot and create File System B of version 2. Then copy the
        ///     data and migrate your business from File System A to File System B.
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

        /// <summary>Property tags: Tags to attach to filesystem.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property vpcId: The VPC ID.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>This parameter is required if FileSystemType is set to cpfs or cpfsse.</description>
        /// <description>This parameter is reserved and not required if FileSystemType is set to
        /// standard or extreme.</description>
        /// </list>
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

        /// <summary>Property vSwitchId: The vSwitch ID.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>This parameter is required if FileSystemType is set to cpfs.</description>
        /// <description>If FileSystemType is not set to cpfs, this parameter is reserved and not
        /// required.</description>
        /// </list>
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

        /// <summary>Property zoneId: The ID of the zone.</summary>
        /// <remarks>
        /// Each region has multiple isolated locations known as zones. Each zone has its own
        /// independent power supply and network.
        /// This parameter is not required if FileSystemType is set to standard. By default,
        /// a random zone is selected based on the protocol type and storage type.
        /// This parameter is required if FileSystemType is set to extreme or cpfs.
        ///
        ///
        ///
        /// <list type="bullet">
        /// <description>An Elastic Compute Service (ECS) instance and a file system that reside in
        /// different zones of the same region can access each other.</description>
        /// <description>We recommend that you select the zone where the ECS instance resides. This
        /// prevents cross-zone latency between the file system and the ECS instance.</description>
        /// </list>
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

        /// <summary>Properties for defining a `FileSystem`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.FileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property protocolType: Type of protocol used.</summary>
            /// <remarks>
            /// Valid values: NFS, SMB, cpfs.
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageType: The storage type of the file System.</summary>
            /// <remarks>
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

            /// <summary>Property bandwidth: Maximum file system throughput, unit is MB\/s.</summary>
            /// <remarks>
            /// Required and valid only when FileSystemType=cpfs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property capacity: Specify the capacity of the file system.</summary>
            /// <remarks>
            /// Unit: GiB. This parameter is required
            /// and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
            /// Specify a value based on the specifications on the following buy page:
            ///
            /// <list type="bullet">
            /// <description>Extreme NAS (Pay-as-you-go)</description>
            /// <description>CPFS (Pay-as-you-go)</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Capacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether delete all mount targets on the file system and then delete file system.</summary>
            /// <remarks>
            /// Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the file system.</summary>
            /// <remarks>
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>Must be 2 to 128 characters in length.</description>
            /// <description>Must start with a letter but cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.</description>
            /// <description>Can contain digits, colons (:), underscores (_), and hyphens (-).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: The period of subscription in months.</summary>
            /// <remarks>
            /// Required and valid when ChargeType is Subscription.
            /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptType: Specifies whether to encrypt data in the file system.</summary>
            /// <remarks>
            /// You can use the keys that are managed by Key Management Service (KMS) to encrypt
            /// data in a file system. When you read and write the encrypted data, the data is
            /// automatically decrypted.
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>0 (default): The data in the file system is not encrypted.</description>
            /// <description>1: A NAS-managed key is used to encrypt the data in the file system. This
            /// value is valid if FileSystemType is set to standard or extreme.</description>
            /// <description>2: A KMS-managed key is used to encrypt the data in the file system. This
            /// value is valid if the FileSystemType parameter is set to standard or extreme.</description>
            /// </list>
            ///
            ///
            ///
            /// <list type="bullet">
            /// <description>Extreme NAS: All regions except China East 1 Finance support KMS-managed
            /// keys.</description>
            /// <description>General-purpose NAS: All regions support KMS-managed keys.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fileSystemType: File system type.</summary>
            /// <remarks>
            /// Allowed values: standard(default), extreme, cpfs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
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

            /// <summary>Property snapshotId: The snapshot ID.</summary>
            /// <remarks>
            /// This parameter is available only for advanced Extreme NAS file systems.
            ///
            ///     You can create a file system from a snapshot. The version of the file system is
            ///     the same as that of the source file system. For example, the source file system
            ///     of the snapshot uses version 1. To create a file system of version 2, create File
            ///     System A from the snapshot and create File System B of version 2. Then copy the
            ///     data and migrate your business from File System A to File System B.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to filesystem.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nas.RosFileSystem.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Nas.RosFileSystem.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nas.RosFileSystem.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The VPC ID.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>This parameter is required if FileSystemType is set to cpfs or cpfsse.</description>
            /// <description>This parameter is reserved and not required if FileSystemType is set to
            /// standard or extreme.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch ID.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>This parameter is required if FileSystemType is set to cpfs.</description>
            /// <description>If FileSystemType is not set to cpfs, this parameter is reserved and not
            /// required.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone.</summary>
            /// <remarks>
            /// Each region has multiple isolated locations known as zones. Each zone has its own
            /// independent power supply and network.
            /// This parameter is not required if FileSystemType is set to standard. By default,
            /// a random zone is selected based on the protocol type and storage type.
            /// This parameter is required if FileSystemType is set to extreme or cpfs.
            ///
            ///
            ///
            /// <list type="bullet">
            /// <description>An Elastic Compute Service (ECS) instance and a file system that reside in
            /// different zones of the same region can access each other.</description>
            /// <description>We recommend that you select the zone where the ECS instance resides. This
            /// prevents cross-zone latency between the file system and the ECS instance.</description>
            /// </list>
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

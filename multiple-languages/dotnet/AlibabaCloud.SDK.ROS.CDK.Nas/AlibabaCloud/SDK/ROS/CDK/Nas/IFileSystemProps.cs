using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::FileSystem`.</summary>
    [JsiiInterface(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.FileSystemProps")]
    public interface IFileSystemProps
    {
        /// <summary>Property protocolType: Type of protocol used.</summary>
        /// <remarks>
        /// Currently includes the NFS type and the SMB type
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}")]
        string ProtocolType
        {
            get;
        }

        /// <summary>Property storageType: The file system type.</summary>
        /// <remarks>
        /// Currently includes the Performance type and the Capacity type
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"primitive\":\"string\"}")]
        string StorageType
        {
            get;
        }

        /// <summary>Property bandwidth: Maximum file system throughput, unit is MB/s.</summary>
        /// <remarks>
        /// Required and valid only when FileSystemType=cpfs.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property capacity: File system capacity, the unit is GB.</summary>
        /// <remarks>
        /// Required and valid when FileSystemType=extreme or cpfs.
        /// </remarks>
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Capacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
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

        /// <summary>Property description: File system description (space characters are not allowed).</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptType: Specifies whether to encrypt data.</summary>
        /// <remarks>
        /// You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        /// 0: specifies that no encryption is applied to data on the file system.
        /// 1: specifies that encryption is applied to data on the file system.
        /// </remarks>
        [JsiiProperty(name: "encryptType", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? EncryptType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fileSystemType: File system type.</summary>
        /// <remarks>
        /// Allowed values: standard, extreme, cpfs
        /// </remarks>
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FileSystemType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnapshotId
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: Vpc ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: Zone ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::NAS::FileSystem`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.FileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property protocolType: Type of protocol used.</summary>
            /// <remarks>
            /// Currently includes the NFS type and the SMB type
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}")]
            public string ProtocolType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property storageType: The file system type.</summary>
            /// <remarks>
            /// Currently includes the Performance type and the Capacity type
            /// </remarks>
            [JsiiProperty(name: "storageType", typeJson: "{\"primitive\":\"string\"}")]
            public string StorageType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bandwidth: Maximum file system throughput, unit is MB/s.</summary>
            /// <remarks>
            /// Required and valid only when FileSystemType=cpfs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Bandwidth
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property capacity: File system capacity, the unit is GB.</summary>
            /// <remarks>
            /// Required and valid when FileSystemType=extreme or cpfs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Capacity
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
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

            /// <summary>Property description: File system description (space characters are not allowed).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property duration: The period of subscription in months.</summary>
            /// <remarks>
            /// Required and valid when ChargeType is Subscription.
            /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property encryptType: Specifies whether to encrypt data.</summary>
            /// <remarks>
            /// You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
            /// 0: specifies that no encryption is applied to data on the file system.
            /// 1: specifies that encryption is applied to data on the file system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptType", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EncryptType
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property fileSystemType: File system type.</summary>
            /// <remarks>
            /// Allowed values: standard, extreme, cpfs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FileSystemType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property snapshotId: Snapshot ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnapshotId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to filesystem.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: Vpc ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: Zone ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

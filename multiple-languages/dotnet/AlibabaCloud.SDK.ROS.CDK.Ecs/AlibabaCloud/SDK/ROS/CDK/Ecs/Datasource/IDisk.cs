using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `Disk`.</summary>
    [JsiiInterface(nativeType: typeof(IDisk), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDisk")]
    public interface IDisk : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AttachedTime: The attached time.</summary>
        [JsiiProperty(name: "attrAttachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachedTime
        {
            get;
        }

        /// <summary>Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.</summary>
        [JsiiProperty(name: "attrAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoSnapshotPolicyId
        {
            get;
        }

        /// <summary>Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).</summary>
        [JsiiProperty(name: "attrBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBurstingEnabled
        {
            get;
        }

        /// <summary>Attribute Category: Disk type.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.</summary>
        [JsiiProperty(name: "attrDeleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeleteAutoSnapshot
        {
            get;
        }

        /// <summary>Attribute DeleteWithInstance: Whether to release with the instance.</summary>
        [JsiiProperty(name: "attrDeleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeleteWithInstance
        {
            get;
        }

        /// <summary>Attribute Description: The description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DetachedTime: Unloading time.</summary>
        [JsiiProperty(name: "attrDetachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDetachedTime
        {
            get;
        }

        /// <summary>Attribute Device: Cloud disk or the device name of the mounted instance on the site.</summary>
        [JsiiProperty(name: "attrDevice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDevice
        {
            get;
        }

        /// <summary>Attribute DiskId: The disk id.</summary>
        [JsiiProperty(name: "attrDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskId
        {
            get;
        }

        /// <summary>Attribute DiskName: The disk name.</summary>
        [JsiiProperty(name: "attrDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskName
        {
            get;
        }

        /// <summary>Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrEnableAutomatedSnapshotPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableAutomatedSnapshotPolicy
        {
            get;
        }

        /// <summary>Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrEnableAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableAutoSnapshot
        {
            get;
        }

        /// <summary>Attribute Encrypted: Whether the disk is encrypted.</summary>
        [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncrypted
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The expiration time of a monthly disk.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute ImageId: The image id.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute InstanceId: The instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute Iops: Number of read/write (I/O) operations per second.</summary>
        [JsiiProperty(name: "attrIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIops
        {
            get;
        }

        /// <summary>Attribute IopsRead: Number of reads per second.</summary>
        [JsiiProperty(name: "attrIopsRead", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIopsRead
        {
            get;
        }

        /// <summary>Attribute IopsWrite: Number of writes per second.</summary>
        [JsiiProperty(name: "attrIopsWrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIopsWrite
        {
            get;
        }

        /// <summary>Attribute KmsKeyId: The KMS keyId.</summary>
        [JsiiProperty(name: "attrKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKmsKeyId
        {
            get;
        }

        /// <summary>Attribute MountInstanceNum: Number of instances mounted on shared storage.</summary>
        [JsiiProperty(name: "attrMountInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMountInstanceNum
        {
            get;
        }

        /// <summary>Attribute MountInstances: Disk mount instances.</summary>
        [JsiiProperty(name: "attrMountInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMountInstances
        {
            get;
        }

        /// <summary>Attribute MultiAttach: Whether to enable the multi-Mount feature.</summary>
        [JsiiProperty(name: "attrMultiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMultiAttach
        {
            get;
        }

        /// <summary>Attribute OperationLocks: Resource locking information.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationLocks
        {
            get;
        }

        /// <summary>Attribute PaymentType: Payment method for disk.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute PerformanceLevel: Performance levels of ESSD cloud disk.</summary>
        [JsiiProperty(name: "attrPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPerformanceLevel
        {
            get;
        }

        /// <summary>Attribute Portable: Whether the disk is unmountable.</summary>
        [JsiiProperty(name: "attrPortable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPortable
        {
            get;
        }

        /// <summary>Attribute ProductCode: The product logo of the cloud market.</summary>
        [JsiiProperty(name: "attrProductCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductCode
        {
            get;
        }

        /// <summary>Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.</summary>
        /// <remarks>
        /// Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
        /// </remarks>
        [JsiiProperty(name: "attrProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProvisionedIops
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The resource group id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Size: Disk size.</summary>
        [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSize
        {
            get;
        }

        /// <summary>Attribute SnapshotId: The source snapshot id.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotId
        {
            get;
        }

        /// <summary>Attribute StorageClusterId: The ID of the dedicated block storage cluster.</summary>
        /// <remarks>
        /// If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "attrStorageClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageClusterId
        {
            get;
        }

        /// <summary>Attribute StorageSetId: The ID of the Save set.</summary>
        [JsiiProperty(name: "attrStorageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageSetId
        {
            get;
        }

        /// <summary>Attribute StorageSetPartitionNumber: Number of Save set partitions.</summary>
        /// <remarks>
        /// Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageSetPartitionNumber
        {
            get;
        }

        /// <summary>Attribute Tags: The tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute ZoneId: ID of the free zone to which the disk belongs.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps Props
        {
            get;
        }

        /// <summary>Represents a `Disk`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDisk), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDisk")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDisk
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AttachedTime: The attached time.</summary>
            [JsiiProperty(name: "attrAttachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.</summary>
            [JsiiProperty(name: "attrAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).</summary>
            [JsiiProperty(name: "attrBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBurstingEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Category: Disk type.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.</summary>
            [JsiiProperty(name: "attrDeleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeleteAutoSnapshot
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeleteWithInstance: Whether to release with the instance.</summary>
            [JsiiProperty(name: "attrDeleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeleteWithInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DetachedTime: Unloading time.</summary>
            [JsiiProperty(name: "attrDetachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDetachedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Device: Cloud disk or the device name of the mounted instance on the site.</summary>
            [JsiiProperty(name: "attrDevice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDevice
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskId: The disk id.</summary>
            [JsiiProperty(name: "attrDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskName: The disk name.</summary>
            [JsiiProperty(name: "attrDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.</summary>
            [JsiiProperty(name: "attrEnableAutomatedSnapshotPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableAutomatedSnapshotPolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.</summary>
            [JsiiProperty(name: "attrEnableAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableAutoSnapshot
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Encrypted: Whether the disk is encrypted.</summary>
            [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncrypted
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The expiration time of a monthly disk.</summary>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The image id.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The instance id.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Iops: Number of read/write (I/O) operations per second.</summary>
            [JsiiProperty(name: "attrIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIops
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IopsRead: Number of reads per second.</summary>
            [JsiiProperty(name: "attrIopsRead", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIopsRead
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IopsWrite: Number of writes per second.</summary>
            [JsiiProperty(name: "attrIopsWrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIopsWrite
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KmsKeyId: The KMS keyId.</summary>
            [JsiiProperty(name: "attrKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKmsKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MountInstanceNum: Number of instances mounted on shared storage.</summary>
            [JsiiProperty(name: "attrMountInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMountInstanceNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MountInstances: Disk mount instances.</summary>
            [JsiiProperty(name: "attrMountInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMountInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MultiAttach: Whether to enable the multi-Mount feature.</summary>
            [JsiiProperty(name: "attrMultiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMultiAttach
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationLocks: Resource locking information.</summary>
            [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationLocks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: Payment method for disk.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PerformanceLevel: Performance levels of ESSD cloud disk.</summary>
            [JsiiProperty(name: "attrPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPerformanceLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Portable: Whether the disk is unmountable.</summary>
            [JsiiProperty(name: "attrPortable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPortable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductCode: The product logo of the cloud market.</summary>
            [JsiiProperty(name: "attrProductCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.</summary>
            /// <remarks>
            /// Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
            /// </remarks>
            [JsiiProperty(name: "attrProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProvisionedIops
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The resource group id.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Size: Disk size.</summary>
            [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotId: The source snapshot id.</summary>
            [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageClusterId: The ID of the dedicated block storage cluster.</summary>
            /// <remarks>
            /// If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
            /// </remarks>
            [JsiiProperty(name: "attrStorageClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageSetId: The ID of the Save set.</summary>
            [JsiiProperty(name: "attrStorageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageSetPartitionNumber: Number of Save set partitions.</summary>
            /// <remarks>
            /// Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
            /// </remarks>
            [JsiiProperty(name: "attrStorageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageSetPartitionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: ID of the free zone to which the disk belongs.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}

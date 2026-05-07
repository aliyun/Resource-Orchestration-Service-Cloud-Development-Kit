using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disk`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.Disk), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.Disk", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Disk : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDisk
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Disk(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Disk(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Disk(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AttachedTime: The attached time.</summary>
        [JsiiProperty(name: "attrAttachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAttachedTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.</summary>
        [JsiiProperty(name: "attrAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoSnapshotPolicyId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).</summary>
        [JsiiProperty(name: "attrBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBurstingEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Category: Disk type.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCategory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.</summary>
        [JsiiProperty(name: "attrDeleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeleteAutoSnapshot
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeleteWithInstance: Whether to release with the instance.</summary>
        [JsiiProperty(name: "attrDeleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeleteWithInstance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DetachedTime: Unloading time.</summary>
        [JsiiProperty(name: "attrDetachedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDetachedTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Device: Cloud disk or the device name of the mounted instance on the site.</summary>
        [JsiiProperty(name: "attrDevice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDevice
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskId: The disk id.</summary>
        [JsiiProperty(name: "attrDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskName: The disk name.</summary>
        [JsiiProperty(name: "attrDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrEnableAutomatedSnapshotPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableAutomatedSnapshotPolicy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrEnableAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableAutoSnapshot
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Encrypted: Whether the disk is encrypted.</summary>
        [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEncrypted
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpiredTime: The expiration time of a monthly disk.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpiredTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageId: The image id.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Iops: Number of read/write (I/O) operations per second.</summary>
        [JsiiProperty(name: "attrIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIops
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IopsRead: Number of reads per second.</summary>
        [JsiiProperty(name: "attrIopsRead", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIopsRead
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IopsWrite: Number of writes per second.</summary>
        [JsiiProperty(name: "attrIopsWrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIopsWrite
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute KmsKeyId: The KMS keyId.</summary>
        [JsiiProperty(name: "attrKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrKmsKeyId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MountInstanceNum: Number of instances mounted on shared storage.</summary>
        [JsiiProperty(name: "attrMountInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMountInstanceNum
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MountInstances: Disk mount instances.</summary>
        [JsiiProperty(name: "attrMountInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMountInstances
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MultiAttach: Whether to enable the multi-Mount feature.</summary>
        [JsiiProperty(name: "attrMultiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMultiAttach
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OperationLocks: Resource locking information.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOperationLocks
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: Payment method for disk.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PerformanceLevel: Performance levels of ESSD cloud disk.</summary>
        [JsiiProperty(name: "attrPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPerformanceLevel
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Portable: Whether the disk is unmountable.</summary>
        [JsiiProperty(name: "attrPortable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPortable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProductCode: The product logo of the cloud market.</summary>
        [JsiiProperty(name: "attrProductCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProductCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.</summary>
        /// <remarks>
        /// Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
        /// </remarks>
        [JsiiProperty(name: "attrProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProvisionedIops
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The resource group id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Size: Disk size.</summary>
        [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SnapshotId: The source snapshot id.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSnapshotId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageClusterId: The ID of the dedicated block storage cluster.</summary>
        /// <remarks>
        /// If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "attrStorageClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageSetId: The ID of the Save set.</summary>
        [JsiiProperty(name: "attrStorageSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageSetId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageSetPartitionNumber: Number of Save set partitions.</summary>
        /// <remarks>
        /// Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSetPartitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageSetPartitionNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: ID of the free zone to which the disk belongs.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}

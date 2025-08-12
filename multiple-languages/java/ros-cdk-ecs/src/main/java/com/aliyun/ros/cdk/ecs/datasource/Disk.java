package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Disk</code>, which is used to query the information about a cloud disk.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.676Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Disk")
public class Disk extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.datasource.IDisk {

    protected Disk(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Disk(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AttachedTime: The attached time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBurstingEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Category: Disk type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteAutoSnapshot() {
        return software.amazon.jsii.Kernel.get(this, "attrDeleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteWithInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DetachedTime: Unloading time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDetachedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrDetachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDevice() {
        return software.amazon.jsii.Kernel.get(this, "attrDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskId: The disk id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskName: The disk name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskName() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutomatedSnapshotPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableAutomatedSnapshotPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoSnapshot() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageId: The image id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIops() {
        return software.amazon.jsii.Kernel.get(this, "attrIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IopsRead: Number of reads per second.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsRead() {
        return software.amazon.jsii.Kernel.get(this, "attrIopsRead", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsWrite() {
        return software.amazon.jsii.Kernel.get(this, "attrIopsWrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstanceNum() {
        return software.amazon.jsii.Kernel.get(this, "attrMountInstanceNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MountInstances: Disk mount instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrMountInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAttach() {
        return software.amazon.jsii.Kernel.get(this, "attrMultiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperationLocks: Resource locking information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: Payment method for disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPortable() {
        return software.amazon.jsii.Kernel.get(this, "attrPortable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
        return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
     * <p>
     * Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProvisionedIops() {
        return software.amazon.jsii.Kernel.get(this, "attrProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Size: Disk size.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
        return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster.
     * <p>
     * If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions.
     * <p>
     * Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetPartitionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DiskProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Disk}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Disk> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.datasource.DiskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.DiskProps.Builder();
        }

        /**
         * Property diskId: The disk id.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The disk id. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * Property diskId: The disk id.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The disk id. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Disk}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Disk build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Disk(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

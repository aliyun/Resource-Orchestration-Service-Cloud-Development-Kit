package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::Disk`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.729Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDisk")
public class RosDisk extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDisk(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDisk(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosDisk.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::Disk`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDisk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosDiskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAutoSnapshotPolicyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoSnapshotPolicyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAutoSnapshot() {
        return software.amazon.jsii.Kernel.get(this, "deleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeleteAutoSnapshot(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deleteAutoSnapshot", value);
    }

    /**
     */
    public void setDeleteAutoSnapshot(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deleteAutoSnapshot", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDiskName() {
        return software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDiskName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncrypted(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "encrypted", value);
    }

    /**
     */
    public void setEncrypted(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encrypted", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPerformanceLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "performanceLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getSize() {
        return software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "size", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSnapshotId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snapshotId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getStorageSetId() {
        return software.amazon.jsii.Kernel.get(this, "storageSetId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setStorageSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getStorageSetPartitionNumber() {
        return software.amazon.jsii.Kernel.get(this, "storageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setStorageSetPartitionNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "storageSetPartitionNumber", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosDisk}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosDisk> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosDiskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosDiskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoSnapshotPolicyId This parameter is required.
         */
        public Builder autoSnapshotPolicyId(final java.lang.String autoSnapshotPolicyId) {
            this.props.autoSnapshotPolicyId(autoSnapshotPolicyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param deleteAutoSnapshot This parameter is required.
         */
        public Builder deleteAutoSnapshot(final java.lang.Boolean deleteAutoSnapshot) {
            this.props.deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }
        /**
         * @return {@code this}
         * @param deleteAutoSnapshot This parameter is required.
         */
        public Builder deleteAutoSnapshot(final com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.props.deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskCategory This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskName This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props.diskName(diskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param encrypted This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * @return {@code this}
         * @param encrypted This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * @return {@code this}
         * @param kmsKeyId This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param performanceLevel This parameter is required.
         */
        public Builder performanceLevel(final java.lang.String performanceLevel) {
            this.props.performanceLevel(performanceLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param size This parameter is required.
         */
        public Builder size(final java.lang.Number size) {
            this.props.size(size);
            return this;
        }

        /**
         * @return {@code this}
         * @param snapshotId This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageSetId This parameter is required.
         */
        public Builder storageSetId(final java.lang.String storageSetId) {
            this.props.storageSetId(storageSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageSetPartitionNumber This parameter is required.
         */
        public Builder storageSetPartitionNumber(final java.lang.Number storageSetPartitionNumber) {
            this.props.storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosDisk}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosDisk build() {
            return new com.aliyun.ros.cdk.ecs.RosDisk(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

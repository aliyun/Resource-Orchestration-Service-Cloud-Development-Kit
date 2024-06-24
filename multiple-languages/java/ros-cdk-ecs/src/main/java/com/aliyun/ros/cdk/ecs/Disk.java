package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Disk</code>, which is used to create a cloud disk for an Elastic Compute Service (ECS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.104Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Disk")
public class Disk extends com.aliyun.ros.cdk.core.Resource {

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
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.DiskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.DiskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DiskId: Id of created disk.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: Created disk status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.DiskProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Disk}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Disk> {
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
        private com.aliyun.ros.cdk.ecs.DiskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder autoSnapshotPolicyId(final java.lang.String autoSnapshotPolicyId) {
            this.props().autoSnapshotPolicyId(autoSnapshotPolicyId);
            return this;
        }
        /**
         * Property autoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder autoSnapshotPolicyId(final com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.props().autoSnapshotPolicyId(autoSnapshotPolicyId);
            return this;
        }

        /**
         * Property burstingEnabled: Whether enable bursting.
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Whether enable bursting. This parameter is required.
         */
        public Builder burstingEnabled(final java.lang.Boolean burstingEnabled) {
            this.props().burstingEnabled(burstingEnabled);
            return this;
        }
        /**
         * Property burstingEnabled: Whether enable bursting.
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Whether enable bursting. This parameter is required.
         */
        public Builder burstingEnabled(final com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
            this.props().burstingEnabled(burstingEnabled);
            return this;
        }

        /**
         * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final java.lang.Boolean deleteAutoSnapshot) {
            this.props().deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }
        /**
         * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.props().deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }

        /**
         * Property description: Description of the disk, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the disk, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Description of the disk, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the disk, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region. This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props().diskCategory(diskCategory);
            return this;
        }
        /**
         * Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region. This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props().diskCategory(diskCategory);
            return this;
        }

        /**
         * Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props().diskName(diskName);
            return this;
        }
        /**
         * Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder diskName(final com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.props().diskName(diskName);
            return this;
        }

        /**
         * Property encrypted: Whether disk is encrypted, default to false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether disk is encrypted, default to false. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Whether disk is encrypted, default to false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether disk is encrypted, default to false. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }

        /**
         * Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
         * <p>
         * <ul>
         * <li>Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.</li>
         * <li>You cannot specify both ZoneId and InstanceId.
         * Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
         * <p>
         * <ul>
         * <li>Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.</li>
         * <li>You cannot specify both ZoneId and InstanceId.
         * Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property kmsKeyId: KMS key ID used by the cloud disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: KMS key ID used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: KMS key ID used by the cloud disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: KMS key ID used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property multiAttach: Specifies whether to enable the multi-attach feature for the disk.
         * <p>
         * Valid values:
         * Disabled: disables the multi-attach feature.
         * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
         * Default value: Disabled.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. This parameter is required.
         */
        public Builder multiAttach(final java.lang.String multiAttach) {
            this.props().multiAttach(multiAttach);
            return this;
        }
        /**
         * Property multiAttach: Specifies whether to enable the multi-attach feature for the disk.
         * <p>
         * Valid values:
         * Disabled: disables the multi-attach feature.
         * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
         * Default value: Disabled.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. This parameter is required.
         */
        public Builder multiAttach(final com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.props().multiAttach(multiAttach);
            return this;
        }

        /**
         * Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param performanceLevel Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS. This parameter is required.
         */
        public Builder performanceLevel(final java.lang.String performanceLevel) {
            this.props().performanceLevel(performanceLevel);
            return this;
        }
        /**
         * Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param performanceLevel Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS. This parameter is required.
         */
        public Builder performanceLevel(final com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
            this.props().performanceLevel(performanceLevel);
            return this;
        }

        /**
         * Property provisionedIops: Provisioning IOPS.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: Provisioning IOPS. This parameter is required.
         */
        public Builder provisionedIops(final java.lang.Number provisionedIops) {
            this.props().provisionedIops(provisionedIops);
            return this;
        }
        /**
         * Property provisionedIops: Provisioning IOPS.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: Provisioning IOPS. This parameter is required.
         */
        public Builder provisionedIops(final com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.props().provisionedIops(provisionedIops);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property size: The size of the disk unit in GB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk unit in GB. This parameter is required.
         */
        public Builder size(final java.lang.Number size) {
            this.props().size(size);
            return this;
        }
        /**
         * Property size: The size of the disk unit in GB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk unit in GB. This parameter is required.
         */
        public Builder size(final com.aliyun.ros.cdk.core.IResolvable size) {
            this.props().size(size);
            return this;
        }

        /**
         * Property snapshotId: If specified, the backup used as the source to create disk.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: If specified, the backup used as the source to create disk. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: If specified, the backup used as the source to create disk.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: If specified, the backup used as the source to create disk. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * Property storageSetId: Storage set ID.
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: Storage set ID. This parameter is required.
         */
        public Builder storageSetId(final java.lang.String storageSetId) {
            this.props().storageSetId(storageSetId);
            return this;
        }
        /**
         * Property storageSetId: Storage set ID.
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: Storage set ID. This parameter is required.
         */
        public Builder storageSetId(final com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.props().storageSetId(storageSetId);
            return this;
        }

        /**
         * Property storageSetPartitionNumber: The number of storage set partitions.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The number of storage set partitions. This parameter is required.
         */
        public Builder storageSetPartitionNumber(final java.lang.Number storageSetPartitionNumber) {
            this.props().storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }
        /**
         * Property storageSetPartitionNumber: The number of storage set partitions.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The number of storage set partitions. This parameter is required.
         */
        public Builder storageSetPartitionNumber(final com.aliyun.ros.cdk.core.IResolvable storageSetPartitionNumber) {
            this.props().storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }

        /**
         * Property tags: Tags to attach to disk.
         * <p>
         * Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to disk. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
         * <p>
         * <ul>
         * <li>If you do not set InstanceId, ZoneId is required.</li>
         * <li>You cannot specify both ZoneId and InstanceId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
         * <p>
         * <ul>
         * <li>If you do not set InstanceId, ZoneId is required.</li>
         * <li>You cannot specify both ZoneId and InstanceId.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Disk}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Disk build() {
            return new com.aliyun.ros.cdk.ecs.Disk(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.DiskProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.DiskProps.Builder();
            }
            return this.props;
        }
    }
}

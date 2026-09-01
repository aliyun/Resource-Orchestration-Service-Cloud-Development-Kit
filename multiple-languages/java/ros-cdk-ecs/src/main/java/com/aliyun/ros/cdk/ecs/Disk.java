package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Disk</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:37:38.230Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Disk")
public class Disk extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IDisk {

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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: Created disk status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.DiskProps.class));
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
         * Property burstingEnabled: Specifies whether to enable performance bursting.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is available only for ESSD AutoPL disks (<code>cloud_auto</code>). For more
         * information, see <a href="">ESSD AutoPL disks</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Specifies whether to enable performance bursting. This parameter is required.
         */
        public Builder burstingEnabled(final java.lang.Boolean burstingEnabled) {
            this.props().burstingEnabled(burstingEnabled);
            return this;
        }
        /**
         * Property burstingEnabled: Specifies whether to enable performance bursting.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is available only for ESSD AutoPL disks (<code>cloud_auto</code>). For more
         * information, see <a href="">ESSD AutoPL disks</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Specifies whether to enable performance bursting. This parameter is required.
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
         * Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto/cloud_essd_entry/cloud_regional_disk_auto/elastic_ephemeral_disk_standard/elastic_ephemeral_disk_premium, depends the region.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto/cloud_essd_entry/cloud_regional_disk_auto/elastic_ephemeral_disk_standard/elastic_ephemeral_disk_premium, depends the region. This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props().diskCategory(diskCategory);
            return this;
        }
        /**
         * Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto/cloud_essd_entry/cloud_regional_disk_auto/elastic_ephemeral_disk_standard/elastic_ephemeral_disk_premium, depends the region.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto/cloud_essd_entry/cloud_regional_disk_auto/elastic_ephemeral_disk_standard/elastic_ephemeral_disk_premium, depends the region. This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props().diskCategory(diskCategory);
            return this;
        }

        /**
         * Property diskName: The name of the disk.
         * <p>
         * The name must be 2 to 128 characters in length. It must
         * start with a letter as defined by Unicode and can contain letters (including
         * English and Chinese characters), digits (0-9), colons (:), underscores (_),
         * periods (.), and hyphens (-).
         * Default value: empty.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props().diskName(diskName);
            return this;
        }
        /**
         * Property diskName: The name of the disk.
         * <p>
         * The name must be 2 to 128 characters in length. It must
         * start with a letter as defined by Unicode and can contain letters (including
         * English and Chinese characters), digits (0-9), colons (:), underscores (_),
         * periods (.), and hyphens (-).
         * Default value: empty.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
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
         * Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance.
         * <p>
         * <ul>
         * <li>If you set this parameter, the <code>ResourceGroupId</code>, <code>Tag.N.Key</code>, <code>Tag.N.Value</code>,
         * <code>ClientToken</code>, and <code>KMSKeyId</code> parameters are ignored.</li>
         * <li>You cannot specify both <code>ZoneId</code> and <code>InstanceId</code>.
         * Default value: empty. An empty value indicates that you are creating a
         * pay-as-you-go disk. The disk's location is determined by <code>RegionId</code> and <code>ZoneId</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance.
         * <p>
         * <ul>
         * <li>If you set this parameter, the <code>ResourceGroupId</code>, <code>Tag.N.Key</code>, <code>Tag.N.Value</code>,
         * <code>ClientToken</code>, and <code>KMSKeyId</code> parameters are ignored.</li>
         * <li>You cannot specify both <code>ZoneId</code> and <code>InstanceId</code>.
         * Default value: empty. An empty value indicates that you are creating a
         * pay-as-you-go disk. The disk's location is determined by <code>RegionId</code> and <code>ZoneId</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the KMS key to use for the disk.
         * <p>
         * <blockquote>
         * <p>
         * If <code>Encrypted</code> is set to true and you do not specify <code>KMSKeyId</code>, a default key
         * is used for encryption. The <code>KMSKeyId</code> is returned in the response after the
         * instance is created.
         * <p>
         * <ul>
         * <li><ul>
         * <li>If the disk is created from an unshared encrypted snapshot, the encryption
         * key used by that snapshot is used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>If the disk is created from a shared encrypted snapshot, the service key is
         * used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>If the disk is created in a region with account-level default encryption
         * enabled, the specified account-level key is used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>In other cases, the service key is used by default.</li>
         * </ul></li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key to use for the disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the KMS key to use for the disk.
         * <p>
         * <blockquote>
         * <p>
         * If <code>Encrypted</code> is set to true and you do not specify <code>KMSKeyId</code>, a default key
         * is used for encryption. The <code>KMSKeyId</code> is returned in the response after the
         * instance is created.
         * <p>
         * <ul>
         * <li><ul>
         * <li>If the disk is created from an unshared encrypted snapshot, the encryption
         * key used by that snapshot is used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>If the disk is created from a shared encrypted snapshot, the service key is
         * used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>If the disk is created in a region with account-level default encryption
         * enabled, the specified account-level key is used by default.</li>
         * </ul></li>
         * <li><ul>
         * <li>In other cases, the service key is used by default.</li>
         * </ul></li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key to use for the disk. This parameter is required.
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
         * Property provisionedIops: The provisioned read/write IOPS of a single ESSD AutoPL disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Capacity &lt;= 3 GiB: You cannot set provisioned performance.</li>
         * <li>Capacity &gt;= 4 GiB: 0 to min(1,000 IOPS/GiB × Capacity - Baseline IOPS, 50,000).
         * Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is available only for ESSD AutoPL disks (<code>cloud_auto</code>). For more
         * information, see <a href="">ESSD AutoPL disks</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned read/write IOPS of a single ESSD AutoPL disk. This parameter is required.
         */
        public Builder provisionedIops(final java.lang.Number provisionedIops) {
            this.props().provisionedIops(provisionedIops);
            return this;
        }
        /**
         * Property provisionedIops: The provisioned read/write IOPS of a single ESSD AutoPL disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Capacity &lt;= 3 GiB: You cannot set provisioned performance.</li>
         * <li>Capacity &gt;= 4 GiB: 0 to min(1,000 IOPS/GiB × Capacity - Baseline IOPS, 50,000).
         * Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is available only for ESSD AutoPL disks (<code>cloud_auto</code>). For more
         * information, see <a href="">ESSD AutoPL disks</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned read/write IOPS of a single ESSD AutoPL disk. This parameter is required.
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
         * Property size: The capacity of the disk, in GiB.
         * <p>
         * You must specify a value for this parameter.
         * Value range:
         * <p>
         * <ul>
         * <li><code>cloud</code>: 5 to 2,000</li>
         * <li><code>cloud_efficiency</code>: 20 to 32,768</li>
         * <li><code>cloud_ssd</code>: 20 to 32,768</li>
         * <li><code>PerformanceLevel</code></li>
         * <li>PL0: 1 to 65,536</li>
         * <li>PL1: 20 to 65,536</li>
         * <li>PL2: 461 to 65,536</li>
         * <li>PL3: 1,261 to 65,536</li>
         * <li><code>cloud_auto</code>: 1 to 65,536</li>
         * <li><code>cloud_essd_entry</code>: 10 to 32,768</li>
         * <li><code>cloud_regional_disk_auto</code>: 10 to 65,536</li>
         * <li><code>elastic_ephemeral_disk_standard</code>: 64 to 8,192</li>
         * <li><code>elastic_ephemeral_disk_premium</code>: 64 to 8,192
         * If you specify <code>SnapshotId</code>, the following limits apply to <code>SnapshotId</code> and
         * <code>Size</code>:</li>
         * <li>If the snapshot capacity is greater than the specified <code>Size</code>, the actual disk
         * size is the snapshot capacity.</li>
         * <li>If the snapshot capacity is smaller than the specified <code>Size</code>, the actual disk
         * size is the specified <code>Size</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param size Property size: The capacity of the disk, in GiB. This parameter is required.
         */
        public Builder size(final java.lang.Number size) {
            this.props().size(size);
            return this;
        }
        /**
         * Property size: The capacity of the disk, in GiB.
         * <p>
         * You must specify a value for this parameter.
         * Value range:
         * <p>
         * <ul>
         * <li><code>cloud</code>: 5 to 2,000</li>
         * <li><code>cloud_efficiency</code>: 20 to 32,768</li>
         * <li><code>cloud_ssd</code>: 20 to 32,768</li>
         * <li><code>PerformanceLevel</code></li>
         * <li>PL0: 1 to 65,536</li>
         * <li>PL1: 20 to 65,536</li>
         * <li>PL2: 461 to 65,536</li>
         * <li>PL3: 1,261 to 65,536</li>
         * <li><code>cloud_auto</code>: 1 to 65,536</li>
         * <li><code>cloud_essd_entry</code>: 10 to 32,768</li>
         * <li><code>cloud_regional_disk_auto</code>: 10 to 65,536</li>
         * <li><code>elastic_ephemeral_disk_standard</code>: 64 to 8,192</li>
         * <li><code>elastic_ephemeral_disk_premium</code>: 64 to 8,192
         * If you specify <code>SnapshotId</code>, the following limits apply to <code>SnapshotId</code> and
         * <code>Size</code>:</li>
         * <li>If the snapshot capacity is greater than the specified <code>Size</code>, the actual disk
         * size is the snapshot capacity.</li>
         * <li>If the snapshot capacity is smaller than the specified <code>Size</code>, the actual disk
         * size is the specified <code>Size</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param size Property size: The capacity of the disk, in GiB. This parameter is required.
         */
        public Builder size(final com.aliyun.ros.cdk.core.IResolvable size) {
            this.props().size(size);
            return this;
        }

        /**
         * Property snapshotId: The ID of the snapshot used to create the disk.
         * <p>
         * Snapshots created on or before
         * July 15, 2013 cannot be used to create disks.
         * The <code>SnapshotId</code> and <code>Size</code> parameters have the following limits:
         * <p>
         * <ul>
         * <li>If the snapshot capacity is greater than the specified <code>Size</code>, the actual disk
         * size is the snapshot capacity.</li>
         * <li>If the snapshot capacity is smaller than the specified <code>Size</code>, the actual disk
         * size is the specified <code>Size</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the disk. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The ID of the snapshot used to create the disk.
         * <p>
         * Snapshots created on or before
         * July 15, 2013 cannot be used to create disks.
         * The <code>SnapshotId</code> and <code>Size</code> parameters have the following limits:
         * <p>
         * <ul>
         * <li>If the snapshot capacity is greater than the specified <code>Size</code>, the actual disk
         * size is the snapshot capacity.</li>
         * <li>If the snapshot capacity is smaller than the specified <code>Size</code>, the actual disk
         * size is the specified <code>Size</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the disk. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * Property storageSetId: The ID of the storage set.
         * <p>
         * <blockquote>
         * <p>
         * You can specify either storage set parameters (<code>StorageSetId</code> and
         * <code>StorageSetPartitionNumber</code>) or the dedicated block storage cluster parameter
         * (<code>StorageClusterId</code>), but not both. The request fails if you specify parameters
         * for both.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: The ID of the storage set. This parameter is required.
         */
        public Builder storageSetId(final java.lang.String storageSetId) {
            this.props().storageSetId(storageSetId);
            return this;
        }
        /**
         * Property storageSetId: The ID of the storage set.
         * <p>
         * <blockquote>
         * <p>
         * You can specify either storage set parameters (<code>StorageSetId</code> and
         * <code>StorageSetPartitionNumber</code>) or the dedicated block storage cluster parameter
         * (<code>StorageClusterId</code>), but not both. The request fails if you specify parameters
         * for both.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: The ID of the storage set. This parameter is required.
         */
        public Builder storageSetId(final com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.props().storageSetId(storageSetId);
            return this;
        }

        /**
         * Property storageSetPartitionNumber: The number of partitions in the storage set.
         * <p>
         * The value must be greater than or
         * equal to 2 and cannot exceed the quota returned by the
         * <a href="">DescribeAccountAttributes</a> operation.
         * Default value: 2.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The number of partitions in the storage set. This parameter is required.
         */
        public Builder storageSetPartitionNumber(final java.lang.Number storageSetPartitionNumber) {
            this.props().storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }
        /**
         * Property storageSetPartitionNumber: The number of partitions in the storage set.
         * <p>
         * The value must be greater than or
         * equal to 2 and cannot exceed the quota returned by the
         * <a href="">DescribeAccountAttributes</a> operation.
         * Default value: 2.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The number of partitions in the storage set. This parameter is required.
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
         * Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.
         * <p>
         * <ul>
         * <li>If you do not set <code>InstanceId</code>, this parameter is required.</li>
         * <li>You cannot specify both <code>ZoneId</code> and <code>InstanceId</code>.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * ESSD zone-redundant disks (<code>cloud_regional_disk_auto</code>) do not require a zone
         * ID.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which to create the pay-as-you-go disk. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.
         * <p>
         * <ul>
         * <li>If you do not set <code>InstanceId</code>, this parameter is required.</li>
         * <li>You cannot specify both <code>ZoneId</code> and <code>InstanceId</code>.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * ESSD zone-redundant disks (<code>cloud_regional_disk_auto</code>) do not require a zone
         * ID.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which to create the pay-as-you-go disk. This parameter is required.
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

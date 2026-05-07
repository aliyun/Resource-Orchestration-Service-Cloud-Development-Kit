package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::CloneDisks</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:48.501Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CloneDisks")
public class CloneDisks extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.ICloneDisks {

    protected CloneDisks(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CloneDisks(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CloneDisks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CloneDisksProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CloneDisks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CloneDisksProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DiskIds: The IDS of the disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CloneDisksProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.CloneDisksProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.CloneDisks}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.CloneDisks> {
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
        private final com.aliyun.ros.cdk.ecs.CloneDisksProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.CloneDisksProps.Builder();
        }

        /**
         * Property diskCategory: The category of the disk.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The category of the disk. This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }
        /**
         * Property diskCategory: The category of the disk.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The category of the disk. This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }

        /**
         * Property multiAttach: Whether to enable multi-attach for the disk.
         * <p>
         * Valid values: Enabled, Disabled.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Whether to enable multi-attach for the disk. This parameter is required.
         */
        public Builder multiAttach(final java.lang.String multiAttach) {
            this.props.multiAttach(multiAttach);
            return this;
        }
        /**
         * Property multiAttach: Whether to enable multi-attach for the disk.
         * <p>
         * Valid values: Enabled, Disabled.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Whether to enable multi-attach for the disk. This parameter is required.
         */
        public Builder multiAttach(final com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.props.multiAttach(multiAttach);
            return this;
        }

        /**
         * Property size: The size of the disk in GiB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk in GiB. This parameter is required.
         */
        public Builder size(final java.lang.Number size) {
            this.props.size(size);
            return this;
        }
        /**
         * Property size: The size of the disk in GiB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk in GiB. This parameter is required.
         */
        public Builder size(final com.aliyun.ros.cdk.core.IResolvable size) {
            this.props.size(size);
            return this;
        }

        /**
         * Property sourceDiskId: The ID of the source disk.
         * <p>
         * @return {@code this}
         * @param sourceDiskId Property sourceDiskId: The ID of the source disk. This parameter is required.
         */
        public Builder sourceDiskId(final java.lang.String sourceDiskId) {
            this.props.sourceDiskId(sourceDiskId);
            return this;
        }
        /**
         * Property sourceDiskId: The ID of the source disk.
         * <p>
         * @return {@code this}
         * @param sourceDiskId Property sourceDiskId: The ID of the source disk. This parameter is required.
         */
        public Builder sourceDiskId(final com.aliyun.ros.cdk.core.IResolvable sourceDiskId) {
            this.props.sourceDiskId(sourceDiskId);
            return this;
        }

        /**
         * Property burstingEnabled: Whether to enable bursting for the disk.
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting for the disk. This parameter is required.
         */
        public Builder burstingEnabled(final java.lang.Boolean burstingEnabled) {
            this.props.burstingEnabled(burstingEnabled);
            return this;
        }
        /**
         * Property burstingEnabled: Whether to enable bursting for the disk.
         * <p>
         * @return {@code this}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting for the disk. This parameter is required.
         */
        public Builder burstingEnabled(final com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
            this.props.burstingEnabled(burstingEnabled);
            return this;
        }

        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props.diskName(diskName);
            return this;
        }
        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.props.diskName(diskName);
            return this;
        }

        /**
         * Property encrypted: Whether to encrypt the disk.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether to encrypt the disk. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Whether to encrypt the disk.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether to encrypt the disk. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used to encrypt the disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used to encrypt the disk. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property performanceLevel: The performance level of the disk.
         * <p>
         * @return {@code this}
         * @param performanceLevel Property performanceLevel: The performance level of the disk. This parameter is required.
         */
        public Builder performanceLevel(final java.lang.String performanceLevel) {
            this.props.performanceLevel(performanceLevel);
            return this;
        }
        /**
         * Property performanceLevel: The performance level of the disk.
         * <p>
         * @return {@code this}
         * @param performanceLevel Property performanceLevel: The performance level of the disk. This parameter is required.
         */
        public Builder performanceLevel(final com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
            this.props.performanceLevel(performanceLevel);
            return this;
        }

        /**
         * Property provisionedIops: The provisioned IOPS for the disk.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned IOPS for the disk. This parameter is required.
         */
        public Builder provisionedIops(final java.lang.Number provisionedIops) {
            this.props.provisionedIops(provisionedIops);
            return this;
        }
        /**
         * Property provisionedIops: The provisioned IOPS for the disk.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned IOPS for the disk. This parameter is required.
         */
        public Builder provisionedIops(final com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.props.provisionedIops(provisionedIops);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.CloneDisks}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.CloneDisks build() {
            return new com.aliyun.ros.cdk.ecs.CloneDisks(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

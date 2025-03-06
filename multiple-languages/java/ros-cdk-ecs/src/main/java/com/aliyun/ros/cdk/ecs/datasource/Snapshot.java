package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Snapshot</code>, which is used to query the information about a snapshot.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.826Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Snapshot")
public class Snapshot extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.datasource.ISnapshot {

    protected Snapshot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Snapshot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The create time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskId: The source disk id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Encrypted: Whether the snapshot is encrypted.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccess() {
        return software.amazon.jsii.Kernel.get(this, "attrInstantAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccessRetentionDays() {
        return software.amazon.jsii.Kernel.get(this, "attrInstantAccessRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductCode: The product number inherited from the mirror market.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
        return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Progress: Snapshot creation progress, in percentage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainTime() {
        return software.amazon.jsii.Kernel.get(this, "attrRemainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RetentionDays: Automatic snapshot retention days.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
        return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotId: The snapshot id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotName: Snapshot Display Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotName() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotSN: Snapshot serial number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotSn() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotSn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotType: Snapshot creation type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotType() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceDiskSize: Source disk capacity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceDiskType: Source disk attributes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceStorageType: Original disk type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Usage: A resource type that has a reference relationship.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage() {
        return software.amazon.jsii.Kernel.get(this, "attrUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.SnapshotProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Snapshot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Snapshot> {
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
        private final com.aliyun.ros.cdk.ecs.datasource.SnapshotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.SnapshotProps.Builder();
        }

        /**
         * Property snapshotId: The snapshot id.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot id. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The snapshot id.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot id. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props.snapshotId(snapshotId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Snapshot}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Snapshot build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Snapshot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

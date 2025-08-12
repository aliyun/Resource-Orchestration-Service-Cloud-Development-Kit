package com.aliyun.ros.cdk.ebs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::EBS::DiskReplicaGroup</code>, which is used to query the information about a replication pair-consistent group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.929Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroup")
public class DiskReplicaGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ebs.datasource.IDiskReplicaGroup {

    protected DiskReplicaGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskReplicaGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DiskReplicaGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DiskReplicaGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The description of the consistent replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskReplicaGroupName: The name of the consistent replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
     * <p>
     * This parameter provides the return value as a timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRecoverPoint() {
        return software.amazon.jsii.Kernel.get(this, "attrLastRecoverPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPairIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrPairNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryZone() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     * <p>
     * Currently only 900 seconds are supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRpo() {
        return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSite() {
        return software.amazon.jsii.Kernel.get(this, "attrSite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrStandbyRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyZone() {
        return software.amazon.jsii.Kernel.get(this, "attrStandbyZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the replication pair-consistent group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroup> {
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
        private final com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroupProps.Builder();
        }

        /**
         * Property replicaGroupId: The ID of the consistent replication group.
         * <p>
         * @return {@code this}
         * @param replicaGroupId Property replicaGroupId: The ID of the consistent replication group. This parameter is required.
         */
        public Builder replicaGroupId(final java.lang.String replicaGroupId) {
            this.props.replicaGroupId(replicaGroupId);
            return this;
        }
        /**
         * Property replicaGroupId: The ID of the consistent replication group.
         * <p>
         * @return {@code this}
         * @param replicaGroupId Property replicaGroupId: The ID of the consistent replication group. This parameter is required.
         */
        public Builder replicaGroupId(final com.aliyun.ros.cdk.core.IResolvable replicaGroupId) {
            this.props.replicaGroupId(replicaGroupId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroup build() {
            return new com.aliyun.ros.cdk.ebs.datasource.DiskReplicaGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

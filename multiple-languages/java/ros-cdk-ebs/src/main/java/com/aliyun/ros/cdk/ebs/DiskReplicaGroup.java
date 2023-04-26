package com.aliyun.ros.cdk.ebs;

/**
 * A ROS resource type:  `ALIYUN::EBS::DiskReplicaGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.134Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DiskReplicaGroup")
public class DiskReplicaGroup extends com.aliyun.ros.cdk.core.Resource {

    protected DiskReplicaGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskReplicaGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DiskReplicaGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DiskReplicaGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The description of the consistent replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskReplicaGroupName: Consistent replication group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskReplicaGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
     * <p>
     * This parameter provides the return value as a timestamp. Unit: seconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLastRecoverPoint() {
        return software.amazon.jsii.Kernel.get(this, "attrLastRecoverPoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPairIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPairIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPairNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrPairNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryRegion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryZone() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryZone", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: resource group ID of enterprise.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRpo() {
        return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups.
     * <p>
     * Possible values:
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSite() {
        return software.amazon.jsii.Kernel.get(this, "attrSite", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStandbyRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrStandbyRegion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStandbyZone() {
        return software.amazon.jsii.Kernel.get(this, "attrStandbyZone", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: The tags of the disk replica group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.DiskReplicaGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.DiskReplicaGroup> {
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
        private final com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps.Builder();
        }

        /**
         * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationRegionId(final java.lang.String destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }
        /**
         * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationRegionId(final com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }

        /**
         * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationZoneId(final java.lang.String destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }
        /**
         * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationZoneId(final com.aliyun.ros.cdk.core.IResolvable destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }

        /**
         * Property sourceRegionId: The ID of the region to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: The ID of the region to which the production site belongs. This parameter is required.
         */
        public Builder sourceRegionId(final java.lang.String sourceRegionId) {
            this.props.sourceRegionId(sourceRegionId);
            return this;
        }
        /**
         * Property sourceRegionId: The ID of the region to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: The ID of the region to which the production site belongs. This parameter is required.
         */
        public Builder sourceRegionId(final com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.props.sourceRegionId(sourceRegionId);
            return this;
        }

        /**
         * Property sourceZoneId: The ID of the zone to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         */
        public Builder sourceZoneId(final java.lang.String sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }
        /**
         * Property sourceZoneId: The ID of the zone to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         */
        public Builder sourceZoneId(final com.aliyun.ros.cdk.core.IResolvable sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }

        /**
         * Property description: The description of the consistent replication group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the consistent replication group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the consistent replication group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the consistent replication group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskReplicaGroupName: Consistent replication group name.
         * <p>
         * @return {@code this}
         * @param diskReplicaGroupName Property diskReplicaGroupName: Consistent replication group name. This parameter is required.
         */
        public Builder diskReplicaGroupName(final java.lang.String diskReplicaGroupName) {
            this.props.diskReplicaGroupName(diskReplicaGroupName);
            return this;
        }
        /**
         * Property diskReplicaGroupName: Consistent replication group name.
         * <p>
         * @return {@code this}
         * @param diskReplicaGroupName Property diskReplicaGroupName: Consistent replication group name. This parameter is required.
         */
        public Builder diskReplicaGroupName(final com.aliyun.ros.cdk.core.IResolvable diskReplicaGroupName) {
            this.props.diskReplicaGroupName(diskReplicaGroupName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property rpo: The RPO value set by the consistency group in seconds.
         * <p>
         * @return {@code this}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds. This parameter is required.
         */
        public Builder rpo(final java.lang.Number rpo) {
            this.props.rpo(rpo);
            return this;
        }
        /**
         * Property rpo: The RPO value set by the consistency group in seconds.
         * <p>
         * @return {@code this}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds. This parameter is required.
         */
        public Builder rpo(final com.aliyun.ros.cdk.core.IResolvable rpo) {
            this.props.rpo(rpo);
            return this;
        }

        /**
         * Property tags: Tags of disk replica group.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of disk replica group. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ebs.DiskReplicaGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.DiskReplicaGroup build() {
            return new com.aliyun.ros.cdk.ebs.DiskReplicaGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

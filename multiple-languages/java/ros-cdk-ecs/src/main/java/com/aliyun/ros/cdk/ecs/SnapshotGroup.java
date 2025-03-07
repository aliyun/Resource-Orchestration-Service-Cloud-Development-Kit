package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::SnapshotGroup</code>, which is used to create a snapshot-consistent group for cloud disks that are attached to an Elastic Compute Service (ECS) instance.
 * <p>
 * A snapshot-consistent group contains snapshots of one or more cloud disks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.356Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SnapshotGroup")
public class SnapshotGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.ISnapshotGroup {

    protected SnapshotGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SnapshotGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SnapshotGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.SnapshotGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SnapshotGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.SnapshotGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public SnapshotGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute SnapshotGroupId: The ID of the snapshot-consistent group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SnapshotGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SnapshotGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SnapshotGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SnapshotGroup> {
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
        private com.aliyun.ros.cdk.ecs.SnapshotGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: The description of the snapshot-consistent group.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the snapshot-consistent group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the snapshot-consistent group.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the snapshot-consistent group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property diskIds: The IDs of cloud disk for which you want to create snapshots.
         * <p>
         * You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
         * Take note of the following items:
         * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
         * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The IDs of cloud disk for which you want to create snapshots. This parameter is required.
         */
        public Builder diskIds(final com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.props().diskIds(diskIds);
            return this;
        }
        /**
         * Property diskIds: The IDs of cloud disk for which you want to create snapshots.
         * <p>
         * You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
         * Take note of the following items:
         * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
         * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The IDs of cloud disk for which you want to create snapshots. This parameter is required.
         */
        public Builder diskIds(final java.util.List<? extends java.lang.Object> diskIds) {
            this.props().diskIds(diskIds);
            return this;
        }

        /**
         * Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
         * <p>
         * If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
         * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
         * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
         * <p>
         * @return {@code this}
         * @param excludeDiskIds Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots. This parameter is required.
         */
        public Builder excludeDiskIds(final com.aliyun.ros.cdk.core.IResolvable excludeDiskIds) {
            this.props().excludeDiskIds(excludeDiskIds);
            return this;
        }
        /**
         * Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
         * <p>
         * If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
         * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
         * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
         * <p>
         * @return {@code this}
         * @param excludeDiskIds Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots. This parameter is required.
         */
        public Builder excludeDiskIds(final java.util.List<? extends java.lang.Object> excludeDiskIds) {
            this.props().excludeDiskIds(excludeDiskIds);
            return this;
        }

        /**
         * Property instanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property name: The name of the snapshot-consistent group.
         * <p>
         * The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the snapshot-consistent group. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of the snapshot-consistent group.
         * <p>
         * The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the snapshot-consistent group. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to snapshot-consistent group.
         * <p>
         * Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to snapshot-consistent group. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.SnapshotGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SnapshotGroup build() {
            return new com.aliyun.ros.cdk.ecs.SnapshotGroup(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.SnapshotGroupProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.SnapshotGroupProps.Builder();
            }
            return this.props;
        }
    }
}

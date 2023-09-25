package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::Snapshots</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.096Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Snapshots")
public class Snapshots extends com.aliyun.ros.cdk.core.Resource {

    protected Snapshots(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Snapshots(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Snapshots</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Snapshots(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.SnapshotsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Snapshots</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Snapshots(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.SnapshotsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Snapshots</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Snapshots(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute SnapshotIds: the list of snapshot ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSnapshotIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Snapshots: the list of snapshots.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSnapshots() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshots", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Snapshots}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Snapshots> {
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
        private com.aliyun.ros.cdk.ecs.datasource.SnapshotsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property category: The category of the snapshot.
         * <p>
         * Valid values:
         * Standard: normal snapshot
         * Flash: local snapshot
         * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
         * If you have used local snapshots before December 14, 2020, you can use this parameter.
         * If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
         * Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the snapshot. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props().category(category);
            return this;
        }
        /**
         * Property category: The category of the snapshot.
         * <p>
         * Valid values:
         * Standard: normal snapshot
         * Flash: local snapshot
         * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
         * If you have used local snapshots before December 14, 2020, you can use this parameter.
         * If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
         * Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the snapshot. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props().category(category);
            return this;
        }

        /**
         * Property diskId: The ID of the disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the disk. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props().diskId(diskId);
            return this;
        }
        /**
         * Property diskId: The ID of the disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the disk. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props().diskId(diskId);
            return this;
        }

        /**
         * Property encrypted: Specifies whether the snapshot is encrypted.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether the snapshot is encrypted. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Specifies whether the snapshot is encrypted.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether the snapshot is encrypted. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }

        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final com.aliyun.ros.cdk.core.IResolvable filters) {
            this.props().filters(filters);
            return this;
        }
        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final java.util.List<? extends java.lang.Object> filters) {
            this.props().filters(filters);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the snapshot belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the snapshot belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotIds: The IDs of snapshots.
         * <p>
         * The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param snapshotIds Property snapshotIds: The IDs of snapshots. This parameter is required.
         */
        public Builder snapshotIds(final com.aliyun.ros.cdk.core.IResolvable snapshotIds) {
            this.props().snapshotIds(snapshotIds);
            return this;
        }
        /**
         * Property snapshotIds: The IDs of snapshots.
         * <p>
         * The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param snapshotIds Property snapshotIds: The IDs of snapshots. This parameter is required.
         */
        public Builder snapshotIds(final java.util.List<? extends java.lang.Object> snapshotIds) {
            this.props().snapshotIds(snapshotIds);
            return this;
        }

        /**
         * Property snapshotLinkId: The ID of the snapshot chain.
         * <p>
         * @return {@code this}
         * @param snapshotLinkId Property snapshotLinkId: The ID of the snapshot chain. This parameter is required.
         */
        public Builder snapshotLinkId(final java.lang.String snapshotLinkId) {
            this.props().snapshotLinkId(snapshotLinkId);
            return this;
        }
        /**
         * Property snapshotLinkId: The ID of the snapshot chain.
         * <p>
         * @return {@code this}
         * @param snapshotLinkId Property snapshotLinkId: The ID of the snapshot chain. This parameter is required.
         */
        public Builder snapshotLinkId(final com.aliyun.ros.cdk.core.IResolvable snapshotLinkId) {
            this.props().snapshotLinkId(snapshotLinkId);
            return this;
        }

        /**
         * Property snapshotName: The name of the snapshot.
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot. This parameter is required.
         */
        public Builder snapshotName(final java.lang.String snapshotName) {
            this.props().snapshotName(snapshotName);
            return this;
        }
        /**
         * Property snapshotName: The name of the snapshot.
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot. This parameter is required.
         */
        public Builder snapshotName(final com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.props().snapshotName(snapshotName);
            return this;
        }

        /**
         * Property snapshotType: Specifies whether the snapshot has been used to create images or disks.
         * <p>
         * Valid values:
         * auto: automatic snapshot
         * user: manual snapshot
         * all: all snapshot types
         * <p>
         * @return {@code this}
         * @param snapshotType Property snapshotType: Specifies whether the snapshot has been used to create images or disks. This parameter is required.
         */
        public Builder snapshotType(final java.lang.String snapshotType) {
            this.props().snapshotType(snapshotType);
            return this;
        }
        /**
         * Property snapshotType: Specifies whether the snapshot has been used to create images or disks.
         * <p>
         * Valid values:
         * auto: automatic snapshot
         * user: manual snapshot
         * all: all snapshot types
         * <p>
         * @return {@code this}
         * @param snapshotType Property snapshotType: Specifies whether the snapshot has been used to create images or disks. This parameter is required.
         */
        public Builder snapshotType(final com.aliyun.ros.cdk.core.IResolvable snapshotType) {
            this.props().snapshotType(snapshotType);
            return this;
        }

        /**
         * Property sourceDiskType: The type of the source disk for which the snapshot was created.
         * <p>
         * Valid values:
         * System: system disk
         * Data: data disk
         * Note These values are case-insensitive.
         * <p>
         * @return {@code this}
         * @param sourceDiskType Property sourceDiskType: The type of the source disk for which the snapshot was created. This parameter is required.
         */
        public Builder sourceDiskType(final java.lang.String sourceDiskType) {
            this.props().sourceDiskType(sourceDiskType);
            return this;
        }
        /**
         * Property sourceDiskType: The type of the source disk for which the snapshot was created.
         * <p>
         * Valid values:
         * System: system disk
         * Data: data disk
         * Note These values are case-insensitive.
         * <p>
         * @return {@code this}
         * @param sourceDiskType Property sourceDiskType: The type of the source disk for which the snapshot was created. This parameter is required.
         */
        public Builder sourceDiskType(final com.aliyun.ros.cdk.core.IResolvable sourceDiskType) {
            this.props().sourceDiskType(sourceDiskType);
            return this;
        }

        /**
         * Property status: The status of the snapshot.
         * <p>
         * Default value: all. Valid values:
         * progressing: The snapshot is being created.
         * accomplished: The snapshot is created.
         * failed: The snapshot fails to be created.
         * all: all snapshot statuses.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the snapshot. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The status of the snapshot.
         * <p>
         * Default value: all. Valid values:
         * progressing: The snapshot is being created.
         * accomplished: The snapshot is created.
         * failed: The snapshot fails to be created.
         * all: all snapshot statuses.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the snapshot. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of snapshot.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of snapshot. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property usage: The type of the snapshot.
         * <p>
         * Default value: all. Valid values:
         * image: The snapshot has been used to create custom images.
         * disk: The snapshot has been used to create disks.
         * image_disk: The snapshot has been used to create custom images and data disks.
         * none: The snapshot has not been used to create custom images or disks.
         * <p>
         * @return {@code this}
         * @param usage Property usage: The type of the snapshot. This parameter is required.
         */
        public Builder usage(final java.lang.String usage) {
            this.props().usage(usage);
            return this;
        }
        /**
         * Property usage: The type of the snapshot.
         * <p>
         * Default value: all. Valid values:
         * image: The snapshot has been used to create custom images.
         * disk: The snapshot has been used to create disks.
         * image_disk: The snapshot has been used to create custom images and data disks.
         * none: The snapshot has not been used to create custom images or disks.
         * <p>
         * @return {@code this}
         * @param usage Property usage: The type of the snapshot. This parameter is required.
         */
        public Builder usage(final com.aliyun.ros.cdk.core.IResolvable usage) {
            this.props().usage(usage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Snapshots}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Snapshots build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Snapshots(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.SnapshotsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.SnapshotsProps.Builder();
            }
            return this.props;
        }
    }
}

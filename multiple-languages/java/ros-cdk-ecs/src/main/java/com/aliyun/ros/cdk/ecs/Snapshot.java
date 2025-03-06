package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Snapshot</code>, which is used to create a snapshot for a disk.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.352Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Snapshot")
public class Snapshot extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.ISnapshot {

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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SnapshotProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SnapshotProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotId: The snapshot ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SnapshotProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SnapshotProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Snapshot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Snapshot> {
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
        private final com.aliyun.ros.cdk.ecs.SnapshotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SnapshotProps.Builder();
        }

        /**
         * Property diskId: Indicates the ID of the specified disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: Indicates the ID of the specified disk. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * Property diskId: Indicates the ID of the specified disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: Indicates the ID of the specified disk. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://.
         * <p>
         * The description will appear on the console. By default, the value is zero.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://.
         * <p>
         * The description will appear on the console. By default, the value is zero.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instantAccess: Specifies whether to enable the instant access feature.
         * <p>
         * Valid values:
         * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
         * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
         * Default value: false.
         * Note This parameter and the Category parameter cannot be specified at the same time.
         * For more information, see the "Description" section in this topic.
         * <p>
         * @return {@code this}
         * @param instantAccess Property instantAccess: Specifies whether to enable the instant access feature. This parameter is required.
         */
        public Builder instantAccess(final java.lang.Boolean instantAccess) {
            this.props.instantAccess(instantAccess);
            return this;
        }
        /**
         * Property instantAccess: Specifies whether to enable the instant access feature.
         * <p>
         * Valid values:
         * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
         * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
         * Default value: false.
         * Note This parameter and the Category parameter cannot be specified at the same time.
         * For more information, see the "Description" section in this topic.
         * <p>
         * @return {@code this}
         * @param instantAccess Property instantAccess: Specifies whether to enable the instant access feature. This parameter is required.
         */
        public Builder instantAccess(final com.aliyun.ros.cdk.core.IResolvable instantAccess) {
            this.props.instantAccess(instantAccess);
            return this;
        }

        /**
         * Property instantAccessRetentionDays: Specifies the retention period of the instant access feature.
         * <p>
         * After the retention period ends,
         * the snapshot is automatically released. This parameter takes effect only when InstantAccess
         * is set to true. Unit: days.
         * Valid values: 1 to 65535. By default, the value of
         * this parameter is the same as that of RetentionDays.
         * <p>
         * @return {@code this}
         * @param instantAccessRetentionDays Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. This parameter is required.
         */
        public Builder instantAccessRetentionDays(final java.lang.Number instantAccessRetentionDays) {
            this.props.instantAccessRetentionDays(instantAccessRetentionDays);
            return this;
        }
        /**
         * Property instantAccessRetentionDays: Specifies the retention period of the instant access feature.
         * <p>
         * After the retention period ends,
         * the snapshot is automatically released. This parameter takes effect only when InstantAccess
         * is set to true. Unit: days.
         * Valid values: 1 to 65535. By default, the value of
         * this parameter is the same as that of RetentionDays.
         * <p>
         * @return {@code this}
         * @param instantAccessRetentionDays Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. This parameter is required.
         */
        public Builder instantAccessRetentionDays(final com.aliyun.ros.cdk.core.IResolvable instantAccessRetentionDays) {
            this.props.instantAccessRetentionDays(instantAccessRetentionDays);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property retentionDays: Set the retention period of a snapshot in days.
         * <p>
         * The snapshot will be automatically released after the retention period expires.
         * The value ranges from 1 to 65536.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: Set the retention period of a snapshot in days. This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }
        /**
         * Property retentionDays: Set the retention period of a snapshot in days.
         * <p>
         * The snapshot will be automatically released after the retention period expires.
         * The value ranges from 1 to 65536.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: Set the retention period of a snapshot in days. This parameter is required.
         */
        public Builder retentionDays(final com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters.
         * <p>
         * It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. This parameter is required.
         */
        public Builder snapshotName(final java.lang.String snapshotName) {
            this.props.snapshotName(snapshotName);
            return this;
        }
        /**
         * Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters.
         * <p>
         * It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. This parameter is required.
         */
        public Builder snapshotName(final com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.props.snapshotName(snapshotName);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property timeout: The number of minutes to wait for create snapshot.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The number of minutes to wait for create snapshot. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The number of minutes to wait for create snapshot.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The number of minutes to wait for create snapshot. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Snapshot}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Snapshot build() {
            return new com.aliyun.ros.cdk.ecs.Snapshot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

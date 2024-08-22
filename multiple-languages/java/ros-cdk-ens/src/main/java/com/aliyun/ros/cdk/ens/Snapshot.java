package com.aliyun.ros.cdk.ens;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ENS::Snapshot</code>, which is used to create a snapshot.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:21.362Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.Snapshot")
public class Snapshot extends com.aliyun.ros.cdk.core.Resource {

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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.SnapshotProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Snapshot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.SnapshotProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SnapShotId: The ID of the snapshot.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSnapShotId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapShotId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.SnapshotProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.SnapshotProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.SnapshotProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.Snapshot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.Snapshot> {
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
        private final com.aliyun.ros.cdk.ens.SnapshotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.SnapshotProps.Builder();
        }

        /**
         * Property diskId: The ID of the cloud disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the cloud disk. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * Property diskId: The ID of the cloud disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the cloud disk. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final java.lang.String ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }
        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }

        /**
         * Property description: The description of the snapshot.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * By default, this parameter is left empty.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the snapshot. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the snapshot.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * By default, this parameter is left empty.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the snapshot. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property snapshotName: The name of the snapshot.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot. This parameter is required.
         */
        public Builder snapshotName(final java.lang.String snapshotName) {
            this.props.snapshotName(snapshotName);
            return this;
        }
        /**
         * Property snapshotName: The name of the snapshot.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param snapshotName Property snapshotName: The name of the snapshot. This parameter is required.
         */
        public Builder snapshotName(final com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.props.snapshotName(snapshotName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.Snapshot}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.Snapshot build() {
            return new com.aliyun.ros.cdk.ens.Snapshot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

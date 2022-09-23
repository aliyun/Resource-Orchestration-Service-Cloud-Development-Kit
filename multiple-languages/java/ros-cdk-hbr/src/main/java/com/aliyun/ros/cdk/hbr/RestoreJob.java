package com.aliyun.ros.cdk.hbr;

/**
 * A ROS resource type:  `ALIYUN::HBR::RestoreJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RestoreJob")
public class RestoreJob extends com.aliyun.ros.cdk.core.Resource {

    protected RestoreJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RestoreJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
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
    public RestoreJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RestoreJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RestoreJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RestoreJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ErrorMessage: Error message of restore job.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrErrorMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrErrorMessage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RestoreId: Restore job ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRestoreId() {
        return software.amazon.jsii.Kernel.get(this, "attrRestoreId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RestoreType: Restore type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRestoreType() {
        return software.amazon.jsii.Kernel.get(this, "attrRestoreType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceType: Source type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: Restore job status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RestoreJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RestoreJob> {
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
        private final com.aliyun.ros.cdk.hbr.RestoreJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RestoreJobProps.Builder();
        }

        /**
         * Property restoreType: Restore type.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         */
        public Builder restoreType(final java.lang.String restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }
        /**
         * Property restoreType: Restore type.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         */
        public Builder restoreType(final com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }

        /**
         * Property snapshotId: Snapshot ID.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: Snapshot ID.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }

        /**
         * Property sourceClientId: Source client ID.
         * <p>
         * It should be provided when SourceType=FILE.
         * <p>
         * @return {@code this}
         * @param sourceClientId Property sourceClientId: Source client ID. This parameter is required.
         */
        public Builder sourceClientId(final java.lang.String sourceClientId) {
            this.props.sourceClientId(sourceClientId);
            return this;
        }
        /**
         * Property sourceClientId: Source client ID.
         * <p>
         * It should be provided when SourceType=FILE.
         * <p>
         * @return {@code this}
         * @param sourceClientId Property sourceClientId: Source client ID. This parameter is required.
         */
        public Builder sourceClientId(final com.aliyun.ros.cdk.core.IResolvable sourceClientId) {
            this.props.sourceClientId(sourceClientId);
            return this;
        }

        /**
         * Property sourceInstanceId: Source instance ID.
         * <p>
         * It should be provided when SourceType=ECS_FILE.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source instance ID. This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }
        /**
         * Property sourceInstanceId: Source instance ID.
         * <p>
         * It should be provided when SourceType=ECS_FILE.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source instance ID. This parameter is required.
         */
        public Builder sourceInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * Property sourceType: Source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property targetClientId: Target client ID.
         * <p>
         * It should be provided when RestoreType=FILE.
         * <p>
         * @return {@code this}
         * @param targetClientId Property targetClientId: Target client ID. This parameter is required.
         */
        public Builder targetClientId(final java.lang.String targetClientId) {
            this.props.targetClientId(targetClientId);
            return this;
        }
        /**
         * Property targetClientId: Target client ID.
         * <p>
         * It should be provided when RestoreType=FILE.
         * <p>
         * @return {@code this}
         * @param targetClientId Property targetClientId: Target client ID. This parameter is required.
         */
        public Builder targetClientId(final com.aliyun.ros.cdk.core.IResolvable targetClientId) {
            this.props.targetClientId(targetClientId);
            return this;
        }

        /**
         * Property targetInstanceId: Target instance ID.
         * <p>
         * It should be provided when RestoreType=ECS_FILE.
         * <p>
         * @return {@code this}
         * @param targetInstanceId Property targetInstanceId: Target instance ID. This parameter is required.
         */
        public Builder targetInstanceId(final java.lang.String targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }
        /**
         * Property targetInstanceId: Target instance ID.
         * <p>
         * It should be provided when RestoreType=ECS_FILE.
         * <p>
         * @return {@code this}
         * @param targetInstanceId Property targetInstanceId: Target instance ID. This parameter is required.
         */
        public Builder targetInstanceId(final com.aliyun.ros.cdk.core.IResolvable targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }

        /**
         * Property targetPath: Target path.
         * <p>
         * For instance, "/".
         * <p>
         * @return {@code this}
         * @param targetPath Property targetPath: Target path. This parameter is required.
         */
        public Builder targetPath(final java.lang.String targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }
        /**
         * Property targetPath: Target path.
         * <p>
         * For instance, "/".
         * <p>
         * @return {@code this}
         * @param targetPath Property targetPath: Target path. This parameter is required.
         */
        public Builder targetPath(final com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }

        /**
         * Property vaultId: Vault ID.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: Vault ID. This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * Property vaultId: Vault ID.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: Vault ID. This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.hbr.RestoreJob}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RestoreJob build() {
            return new com.aliyun.ros.cdk.hbr.RestoreJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

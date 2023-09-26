package com.aliyun.ros.cdk.rds;

/**
 * A ROS template type:  <code>ALIYUN::RDS::MigrateTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.284Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosMigrateTask")
public class RosMigrateTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMigrateTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMigrateTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.RosMigrateTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::RDS::MigrateTask</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMigrateTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.RosMigrateTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMigrateTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrMigrateTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBackupMode() {
        return software.amazon.jsii.Kernel.get(this, "backupMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupMode", java.util.Objects.requireNonNull(value, "backupMode is required"));
    }

    /**
     */
    public void setBackupMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupMode", java.util.Objects.requireNonNull(value, "backupMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbName() {
        return software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbName", java.util.Objects.requireNonNull(value, "dbName is required"));
    }

    /**
     */
    public void setDbName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbName", java.util.Objects.requireNonNull(value, "dbName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIsOnlineDb() {
        return software.amazon.jsii.Kernel.get(this, "isOnlineDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsOnlineDb(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isOnlineDb", java.util.Objects.requireNonNull(value, "isOnlineDb is required"));
    }

    /**
     */
    public void setIsOnlineDb(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isOnlineDb", java.util.Objects.requireNonNull(value, "isOnlineDb is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckDbMode() {
        return software.amazon.jsii.Kernel.get(this, "checkDbMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckDbMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "checkDbMode", value);
    }

    /**
     */
    public void setCheckDbMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkDbMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssObjectPositions() {
        return software.amazon.jsii.Kernel.get(this, "ossObjectPositions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssObjectPositions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossObjectPositions", value);
    }

    /**
     */
    public void setOssObjectPositions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossObjectPositions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssUrls() {
        return software.amazon.jsii.Kernel.get(this, "ossUrls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssUrls(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossUrls", value);
    }

    /**
     */
    public void setOssUrls(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossUrls", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.RosMigrateTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.RosMigrateTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.rds.RosMigrateTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.RosMigrateTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param backupMode This parameter is required.
         */
        public Builder backupMode(final java.lang.String backupMode) {
            this.props.backupMode(backupMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupMode This parameter is required.
         */
        public Builder backupMode(final com.aliyun.ros.cdk.core.IResolvable backupMode) {
            this.props.backupMode(backupMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbName This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbName This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * @return {@code this}
         * @param isOnlineDb This parameter is required.
         */
        public Builder isOnlineDb(final java.lang.Boolean isOnlineDb) {
            this.props.isOnlineDb(isOnlineDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param isOnlineDb This parameter is required.
         */
        public Builder isOnlineDb(final com.aliyun.ros.cdk.core.IResolvable isOnlineDb) {
            this.props.isOnlineDb(isOnlineDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkDbMode This parameter is required.
         */
        public Builder checkDbMode(final java.lang.String checkDbMode) {
            this.props.checkDbMode(checkDbMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkDbMode This parameter is required.
         */
        public Builder checkDbMode(final com.aliyun.ros.cdk.core.IResolvable checkDbMode) {
            this.props.checkDbMode(checkDbMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossObjectPositions This parameter is required.
         */
        public Builder ossObjectPositions(final java.lang.String ossObjectPositions) {
            this.props.ossObjectPositions(ossObjectPositions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossObjectPositions This parameter is required.
         */
        public Builder ossObjectPositions(final com.aliyun.ros.cdk.core.IResolvable ossObjectPositions) {
            this.props.ossObjectPositions(ossObjectPositions);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossUrls This parameter is required.
         */
        public Builder ossUrls(final java.lang.String ossUrls) {
            this.props.ossUrls(ossUrls);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossUrls This parameter is required.
         */
        public Builder ossUrls(final com.aliyun.ros.cdk.core.IResolvable ossUrls) {
            this.props.ossUrls(ossUrls);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.RosMigrateTask}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.RosMigrateTask build() {
            return new com.aliyun.ros.cdk.rds.RosMigrateTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

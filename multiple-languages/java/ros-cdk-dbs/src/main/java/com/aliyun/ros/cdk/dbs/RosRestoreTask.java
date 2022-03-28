package com.aliyun.ros.cdk.dbs;

/**
 * A ROS template type:  `ALIYUN::DBS::RestoreTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.965Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RosRestoreTask")
public class RosRestoreTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRestoreTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRestoreTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dbs.RosRestoreTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DBS::RestoreTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRestoreTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RosRestoreTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRestoreTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrRestoreTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBackupPlanId() {
        return software.amazon.jsii.Kernel.get(this, "backupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupPlanId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupPlanId", java.util.Objects.requireNonNull(value, "backupPlanId is required"));
    }

    /**
     */
    public void setBackupPlanId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupPlanId", java.util.Objects.requireNonNull(value, "backupPlanId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpointInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointInstanceType", java.util.Objects.requireNonNull(value, "destinationEndpointInstanceType is required"));
    }

    /**
     */
    public void setDestinationEndpointInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointInstanceType", java.util.Objects.requireNonNull(value, "destinationEndpointInstanceType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRestoreTaskName() {
        return software.amazon.jsii.Kernel.get(this, "restoreTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreTaskName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreTaskName", java.util.Objects.requireNonNull(value, "restoreTaskName is required"));
    }

    /**
     */
    public void setRestoreTaskName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreTaskName", java.util.Objects.requireNonNull(value, "restoreTaskName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "backupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupGatewayId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backupGatewayId", value);
    }

    /**
     */
    public void setBackupGatewayId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupGatewayId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointDatabaseName() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointDatabaseName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointDatabaseName", value);
    }

    /**
     */
    public void setDestinationEndpointDatabaseName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointDatabaseName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointInstanceId", value);
    }

    /**
     */
    public void setDestinationEndpointInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointIp() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointIp", value);
    }

    /**
     */
    public void setDestinationEndpointIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointOracleSid() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointOracleSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointOracleSid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointOracleSid", value);
    }

    /**
     */
    public void setDestinationEndpointOracleSid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointOracleSid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointPassword() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointPassword", value);
    }

    /**
     */
    public void setDestinationEndpointPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointPort() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointPort", value);
    }

    /**
     */
    public void setDestinationEndpointPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointRegion() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointRegion", value);
    }

    /**
     */
    public void setDestinationEndpointRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointUserName() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointUserName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointUserName", value);
    }

    /**
     */
    public void setDestinationEndpointUserName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointUserName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDuplicateConflict() {
        return software.amazon.jsii.Kernel.get(this, "duplicateConflict", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDuplicateConflict(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "duplicateConflict", value);
    }

    /**
     */
    public void setDuplicateConflict(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "duplicateConflict", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreDir() {
        return software.amazon.jsii.Kernel.get(this, "restoreDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreDir(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreDir", value);
    }

    /**
     */
    public void setRestoreDir(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreDir", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreHome() {
        return software.amazon.jsii.Kernel.get(this, "restoreHome", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreHome(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreHome", value);
    }

    /**
     */
    public void setRestoreHome(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreHome", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreObjects() {
        return software.amazon.jsii.Kernel.get(this, "restoreObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreObjects(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreObjects", value);
    }

    /**
     */
    public void setRestoreObjects(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreObjects", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
        return software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "restoreTime", value);
    }

    /**
     */
    public void setRestoreTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStartTask() {
        return software.amazon.jsii.Kernel.get(this, "startTask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartTask(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "startTask", value);
    }

    /**
     */
    public void setStartTask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startTask", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.RosRestoreTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.RosRestoreTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dbs.RosRestoreTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.RosRestoreTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param backupPlanId This parameter is required.
         */
        public Builder backupPlanId(final java.lang.String backupPlanId) {
            this.props.backupPlanId(backupPlanId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupPlanId This parameter is required.
         */
        public Builder backupPlanId(final com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.props.backupPlanId(backupPlanId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointInstanceType This parameter is required.
         */
        public Builder destinationEndpointInstanceType(final java.lang.String destinationEndpointInstanceType) {
            this.props.destinationEndpointInstanceType(destinationEndpointInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointInstanceType This parameter is required.
         */
        public Builder destinationEndpointInstanceType(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceType) {
            this.props.destinationEndpointInstanceType(destinationEndpointInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreTaskName This parameter is required.
         */
        public Builder restoreTaskName(final java.lang.String restoreTaskName) {
            this.props.restoreTaskName(restoreTaskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreTaskName This parameter is required.
         */
        public Builder restoreTaskName(final com.aliyun.ros.cdk.core.IResolvable restoreTaskName) {
            this.props.restoreTaskName(restoreTaskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupGatewayId This parameter is required.
         */
        public Builder backupGatewayId(final java.lang.Number backupGatewayId) {
            this.props.backupGatewayId(backupGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupGatewayId This parameter is required.
         */
        public Builder backupGatewayId(final com.aliyun.ros.cdk.core.IResolvable backupGatewayId) {
            this.props.backupGatewayId(backupGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointDatabaseName This parameter is required.
         */
        public Builder destinationEndpointDatabaseName(final java.lang.String destinationEndpointDatabaseName) {
            this.props.destinationEndpointDatabaseName(destinationEndpointDatabaseName);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointDatabaseName This parameter is required.
         */
        public Builder destinationEndpointDatabaseName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointDatabaseName) {
            this.props.destinationEndpointDatabaseName(destinationEndpointDatabaseName);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointInstanceId This parameter is required.
         */
        public Builder destinationEndpointInstanceId(final java.lang.String destinationEndpointInstanceId) {
            this.props.destinationEndpointInstanceId(destinationEndpointInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointInstanceId This parameter is required.
         */
        public Builder destinationEndpointInstanceId(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceId) {
            this.props.destinationEndpointInstanceId(destinationEndpointInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointIp This parameter is required.
         */
        public Builder destinationEndpointIp(final java.lang.String destinationEndpointIp) {
            this.props.destinationEndpointIp(destinationEndpointIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointIp This parameter is required.
         */
        public Builder destinationEndpointIp(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointIp) {
            this.props.destinationEndpointIp(destinationEndpointIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointOracleSid This parameter is required.
         */
        public Builder destinationEndpointOracleSid(final java.lang.String destinationEndpointOracleSid) {
            this.props.destinationEndpointOracleSid(destinationEndpointOracleSid);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointOracleSid This parameter is required.
         */
        public Builder destinationEndpointOracleSid(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointOracleSid) {
            this.props.destinationEndpointOracleSid(destinationEndpointOracleSid);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointPassword This parameter is required.
         */
        public Builder destinationEndpointPassword(final java.lang.String destinationEndpointPassword) {
            this.props.destinationEndpointPassword(destinationEndpointPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointPassword This parameter is required.
         */
        public Builder destinationEndpointPassword(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointPassword) {
            this.props.destinationEndpointPassword(destinationEndpointPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointPort This parameter is required.
         */
        public Builder destinationEndpointPort(final java.lang.Number destinationEndpointPort) {
            this.props.destinationEndpointPort(destinationEndpointPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointPort This parameter is required.
         */
        public Builder destinationEndpointPort(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointPort) {
            this.props.destinationEndpointPort(destinationEndpointPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointRegion This parameter is required.
         */
        public Builder destinationEndpointRegion(final java.lang.String destinationEndpointRegion) {
            this.props.destinationEndpointRegion(destinationEndpointRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointRegion This parameter is required.
         */
        public Builder destinationEndpointRegion(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointRegion) {
            this.props.destinationEndpointRegion(destinationEndpointRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointUserName This parameter is required.
         */
        public Builder destinationEndpointUserName(final java.lang.String destinationEndpointUserName) {
            this.props.destinationEndpointUserName(destinationEndpointUserName);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointUserName This parameter is required.
         */
        public Builder destinationEndpointUserName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointUserName) {
            this.props.destinationEndpointUserName(destinationEndpointUserName);
            return this;
        }

        /**
         * @return {@code this}
         * @param duplicateConflict This parameter is required.
         */
        public Builder duplicateConflict(final java.lang.String duplicateConflict) {
            this.props.duplicateConflict(duplicateConflict);
            return this;
        }
        /**
         * @return {@code this}
         * @param duplicateConflict This parameter is required.
         */
        public Builder duplicateConflict(final com.aliyun.ros.cdk.core.IResolvable duplicateConflict) {
            this.props.duplicateConflict(duplicateConflict);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreDir This parameter is required.
         */
        public Builder restoreDir(final java.lang.String restoreDir) {
            this.props.restoreDir(restoreDir);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreDir This parameter is required.
         */
        public Builder restoreDir(final com.aliyun.ros.cdk.core.IResolvable restoreDir) {
            this.props.restoreDir(restoreDir);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreHome This parameter is required.
         */
        public Builder restoreHome(final java.lang.String restoreHome) {
            this.props.restoreHome(restoreHome);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreHome This parameter is required.
         */
        public Builder restoreHome(final com.aliyun.ros.cdk.core.IResolvable restoreHome) {
            this.props.restoreHome(restoreHome);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreObjects This parameter is required.
         */
        public Builder restoreObjects(final java.lang.String restoreObjects) {
            this.props.restoreObjects(restoreObjects);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreObjects This parameter is required.
         */
        public Builder restoreObjects(final com.aliyun.ros.cdk.core.IResolvable restoreObjects) {
            this.props.restoreObjects(restoreObjects);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final java.lang.Number restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param startTask This parameter is required.
         */
        public Builder startTask(final java.lang.Boolean startTask) {
            this.props.startTask(startTask);
            return this;
        }
        /**
         * @return {@code this}
         * @param startTask This parameter is required.
         */
        public Builder startTask(final com.aliyun.ros.cdk.core.IResolvable startTask) {
            this.props.startTask(startTask);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dbs.RosRestoreTask}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.RosRestoreTask build() {
            return new com.aliyun.ros.cdk.dbs.RosRestoreTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.dbs;

/**
 * A ROS resource type:  `ALIYUN::DBS::RestoreTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.465Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RestoreTask")
public class RestoreTask extends com.aliyun.ros.cdk.core.Resource {

    protected RestoreTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RestoreTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DBS::RestoreTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public RestoreTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RestoreTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DBS::RestoreTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public RestoreTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RestoreTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRestoreTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrRestoreTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.RestoreTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.RestoreTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dbs.RestoreTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.RestoreTaskProps.Builder();
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
         * @param destinationEndpointInstanceType This parameter is required.
         */
        public Builder destinationEndpointInstanceType(final java.lang.String destinationEndpointInstanceType) {
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
         * @param backupGatewayId This parameter is required.
         */
        public Builder backupGatewayId(final java.lang.Number backupGatewayId) {
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
         * @param destinationEndpointDatabaseName This parameter is required.
         */
        public Builder destinationEndpointDatabaseName(final java.lang.String destinationEndpointDatabaseName) {
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
         * @param destinationEndpointIp This parameter is required.
         */
        public Builder destinationEndpointIp(final java.lang.String destinationEndpointIp) {
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
         * @param destinationEndpointPassword This parameter is required.
         */
        public Builder destinationEndpointPassword(final java.lang.String destinationEndpointPassword) {
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
         * @param destinationEndpointRegion This parameter is required.
         */
        public Builder destinationEndpointRegion(final java.lang.String destinationEndpointRegion) {
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
         * @param duplicateConflict This parameter is required.
         */
        public Builder duplicateConflict(final java.lang.String duplicateConflict) {
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
         * @param restoreHome This parameter is required.
         */
        public Builder restoreHome(final java.lang.String restoreHome) {
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
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final java.lang.Number restoreTime) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dbs.RestoreTask}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.RestoreTask build() {
            return new com.aliyun.ros.cdk.dbs.RestoreTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

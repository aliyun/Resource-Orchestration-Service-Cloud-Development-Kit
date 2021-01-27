package com.aliyun.ros.cdk.dms;

/**
 * A ROS resource type:  `ALIYUN::DMS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.475Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DMS::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DMS::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.Instance> {
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
        private final com.aliyun.ros.cdk.dms.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.InstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param databasePassword This parameter is required.
         */
        public Builder databasePassword(final java.lang.String databasePassword) {
            this.props.databasePassword(databasePassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param databaseUser This parameter is required.
         */
        public Builder databaseUser(final java.lang.String databaseUser) {
            this.props.databaseUser(databaseUser);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbaUid This parameter is required.
         */
        public Builder dbaUid(final java.lang.Number dbaUid) {
            this.props.dbaUid(dbaUid);
            return this;
        }

        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * @return {@code this}
         * @param exportTimeout This parameter is required.
         */
        public Builder exportTimeout(final java.lang.Number exportTimeout) {
            this.props.exportTimeout(exportTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param host This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceAlias This parameter is required.
         */
        public Builder instanceAlias(final java.lang.String instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceSource This parameter is required.
         */
        public Builder instanceSource(final java.lang.String instanceSource) {
            this.props.instanceSource(instanceSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param port This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }

        /**
         * @return {@code this}
         * @param queryTimeout This parameter is required.
         */
        public Builder queryTimeout(final java.lang.Number queryTimeout) {
            this.props.queryTimeout(queryTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param safeRule This parameter is required.
         */
        public Builder safeRule(final java.lang.String safeRule) {
            this.props.safeRule(safeRule);
            return this;
        }

        /**
         * @return {@code this}
         * @param tid This parameter is required.
         */
        public Builder tid(final java.lang.Number tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataLinkName This parameter is required.
         */
        public Builder dataLinkName(final java.lang.String dataLinkName) {
            this.props.dataLinkName(dataLinkName);
            return this;
        }

        /**
         * @return {@code this}
         * @param ddlOnline This parameter is required.
         */
        public Builder ddlOnline(final java.lang.Number ddlOnline) {
            this.props.ddlOnline(ddlOnline);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsInstanceId This parameter is required.
         */
        public Builder ecsInstanceId(final java.lang.String ecsInstanceId) {
            this.props.ecsInstanceId(ecsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsRegion This parameter is required.
         */
        public Builder ecsRegion(final java.lang.String ecsRegion) {
            this.props.ecsRegion(ecsRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sid This parameter is required.
         */
        public Builder sid(final java.lang.String sid) {
            this.props.sid(sid);
            return this;
        }

        /**
         * @return {@code this}
         * @param useDsql This parameter is required.
         */
        public Builder useDsql(final java.lang.Number useDsql) {
            this.props.useDsql(useDsql);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dms.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.Instance build() {
            return new com.aliyun.ros.cdk.dms.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

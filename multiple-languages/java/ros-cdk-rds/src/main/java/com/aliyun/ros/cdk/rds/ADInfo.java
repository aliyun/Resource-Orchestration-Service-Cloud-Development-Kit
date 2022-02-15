package com.aliyun.ros.cdk.rds;

/**
 * A ROS resource type:  `ALIYUN::RDS::ADInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.295Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.ADInfo")
public class ADInfo extends com.aliyun.ros.cdk.core.Resource {

    protected ADInfo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ADInfo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
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
    public ADInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.ADInfoProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ADInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.ADInfoProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ADDNS: Active directory domain name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddns() {
        return software.amazon.jsii.Kernel.get(this, "attrAddns", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.ADInfo}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.ADInfo> {
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
        private final com.aliyun.ros.cdk.rds.ADInfoProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.ADInfoProps.Builder();
        }

        /**
         * Property adAccountName: Domain account name.
         * <p>
         * @return {@code this}
         * @param adAccountName Property adAccountName: Domain account name. This parameter is required.
         */
        public Builder adAccountName(final java.lang.String adAccountName) {
            this.props.adAccountName(adAccountName);
            return this;
        }
        /**
         * Property adAccountName: Domain account name.
         * <p>
         * @return {@code this}
         * @param adAccountName Property adAccountName: Domain account name. This parameter is required.
         */
        public Builder adAccountName(final com.aliyun.ros.cdk.core.IResolvable adAccountName) {
            this.props.adAccountName(adAccountName);
            return this;
        }

        /**
         * Property addns: Active directory domain name.
         * <p>
         * @return {@code this}
         * @param addns Property addns: Active directory domain name. This parameter is required.
         */
        public Builder addns(final java.lang.String addns) {
            this.props.addns(addns);
            return this;
        }
        /**
         * Property addns: Active directory domain name.
         * <p>
         * @return {@code this}
         * @param addns Property addns: Active directory domain name. This parameter is required.
         */
        public Builder addns(final com.aliyun.ros.cdk.core.IResolvable addns) {
            this.props.addns(addns);
            return this;
        }

        /**
         * Property adPassword: Domain password.
         * <p>
         * @return {@code this}
         * @param adPassword Property adPassword: Domain password. This parameter is required.
         */
        public Builder adPassword(final java.lang.String adPassword) {
            this.props.adPassword(adPassword);
            return this;
        }
        /**
         * Property adPassword: Domain password.
         * <p>
         * @return {@code this}
         * @param adPassword Property adPassword: Domain password. This parameter is required.
         */
        public Builder adPassword(final com.aliyun.ros.cdk.core.IResolvable adPassword) {
            this.props.adPassword(adPassword);
            return this;
        }

        /**
         * Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
         * <p>
         * @return {@code this}
         * @param adServerIpAddress Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS. This parameter is required.
         */
        public Builder adServerIpAddress(final java.lang.String adServerIpAddress) {
            this.props.adServerIpAddress(adServerIpAddress);
            return this;
        }
        /**
         * Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
         * <p>
         * @return {@code this}
         * @param adServerIpAddress Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS. This parameter is required.
         */
        public Builder adServerIpAddress(final com.aliyun.ros.cdk.core.IResolvable adServerIpAddress) {
            this.props.adServerIpAddress(adServerIpAddress);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rds.ADInfo}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.ADInfo build() {
            return new com.aliyun.ros.cdk.rds.ADInfo(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::DBInstanceSecurityIps</code>, which is used to modify an IP address whitelist of an ApsaraDB for RDS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.894Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBInstanceSecurityIps")
public class DBInstanceSecurityIps extends com.aliyun.ros.cdk.core.Resource {

    protected DBInstanceSecurityIps(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstanceSecurityIps(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstanceSecurityIps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstanceSecurityIps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SecurityIps: The security ips of selected database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.DBInstanceSecurityIps}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.DBInstanceSecurityIps> {
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
        private final com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.DBInstanceSecurityIpsProps.Builder();
        }

        /**
         * Property dbInstanceId: Database instance id to update security ips.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database instance id to update security ips. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Database instance id to update security ips.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database instance id to update security ips. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbInstanceIpArrayAttribute: Security ips to add or remove.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: Security ips to add or remove. This parameter is required.
         */
        public Builder dbInstanceIpArrayAttribute(final java.lang.String dbInstanceIpArrayAttribute) {
            this.props.dbInstanceIpArrayAttribute(dbInstanceIpArrayAttribute);
            return this;
        }
        /**
         * Property dbInstanceIpArrayAttribute: Security ips to add or remove.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: Security ips to add or remove. This parameter is required.
         */
        public Builder dbInstanceIpArrayAttribute(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayAttribute) {
            this.props.dbInstanceIpArrayAttribute(dbInstanceIpArrayAttribute);
            return this;
        }

        /**
         * Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.
         * <p>
         * Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. This parameter is required.
         */
        public Builder dbInstanceIpArrayName(final java.lang.String dbInstanceIpArrayName) {
            this.props.dbInstanceIpArrayName(dbInstanceIpArrayName);
            return this;
        }
        /**
         * Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.
         * <p>
         * Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. This parameter is required.
         */
        public Builder dbInstanceIpArrayName(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayName) {
            this.props.dbInstanceIpArrayName(dbInstanceIpArrayName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.DBInstanceSecurityIps}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.DBInstanceSecurityIps build() {
            return new com.aliyun.ros.cdk.rds.DBInstanceSecurityIps(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

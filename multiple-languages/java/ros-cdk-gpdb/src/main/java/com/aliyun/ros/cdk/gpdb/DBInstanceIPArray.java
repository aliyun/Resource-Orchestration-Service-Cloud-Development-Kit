package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::DBInstanceIPArray</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.967Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.DBInstanceIPArray")
public class DBInstanceIPArray extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gpdb.IDBInstanceIPArray {

    protected DBInstanceIPArray(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstanceIPArray(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstanceIPArray(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstanceIPArray(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBInstanceIPArrayAttribute: The default is empty.
     * <p>
     * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceIPArrayName: The name of the IP address whitelist.
     * <p>
     * If you do not specify this parameter, the default whitelist is queried.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.DBInstanceIPArray}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.DBInstanceIPArray> {
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
        private final com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps.Builder();
        }

        /**
         * Property dbInstanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbInstanceIpArrayName: The name of the IP address whitelist.
         * <p>
         * If you do not specify this parameter, the default whitelist is queried.
         * <p>
         * <blockquote>
         * <p>
         * Each instance supports up to 50 IP address whitelists.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: The name of the IP address whitelist. This parameter is required.
         */
        public Builder dbInstanceIpArrayName(final java.lang.String dbInstanceIpArrayName) {
            this.props.dbInstanceIpArrayName(dbInstanceIpArrayName);
            return this;
        }
        /**
         * Property dbInstanceIpArrayName: The name of the IP address whitelist.
         * <p>
         * If you do not specify this parameter, the default whitelist is queried.
         * <p>
         * <blockquote>
         * <p>
         * Each instance supports up to 50 IP address whitelists.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: The name of the IP address whitelist. This parameter is required.
         */
        public Builder dbInstanceIpArrayName(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayName) {
            this.props.dbInstanceIpArrayName(dbInstanceIpArrayName);
            return this;
        }

        /**
         * Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]').
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]'). This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]').
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]'). This parameter is required.
         */
        public Builder securityIpList(final java.util.List<? extends java.lang.Object> securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property dbInstanceIpArrayAttribute: The default is empty.
         * <p>
         * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: The default is empty. This parameter is required.
         */
        public Builder dbInstanceIpArrayAttribute(final java.lang.String dbInstanceIpArrayAttribute) {
            this.props.dbInstanceIpArrayAttribute(dbInstanceIpArrayAttribute);
            return this;
        }
        /**
         * Property dbInstanceIpArrayAttribute: The default is empty.
         * <p>
         * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: The default is empty. This parameter is required.
         */
        public Builder dbInstanceIpArrayAttribute(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayAttribute) {
            this.props.dbInstanceIpArrayAttribute(dbInstanceIpArrayAttribute);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.DBInstanceIPArray}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.DBInstanceIPArray build() {
            return new com.aliyun.ros.cdk.gpdb.DBInstanceIPArray(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

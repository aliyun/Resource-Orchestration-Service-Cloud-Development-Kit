package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIP")
public class EnterpriseDBClusterSecurityIP extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.IEnterpriseDBClusterSecurityIP {

    protected EnterpriseDBClusterSecurityIP(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnterpriseDBClusterSecurityIP(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnterpriseDBClusterSecurityIP(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnterpriseDBClusterSecurityIP(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpType: The type of IP address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpType() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WhitelistNetType: The network type of the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistNetType() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelistNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIP}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIP> {
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
        private final com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps.Builder();
        }

        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property groupName: The name of the whitelist whose settings you want to modify.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the whitelist whose settings you want to modify. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of the whitelist whose settings you want to modify.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the whitelist whose settings you want to modify. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses and CIDR blocks in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses and CIDR blocks in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIP}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIP build() {
            return new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIP(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

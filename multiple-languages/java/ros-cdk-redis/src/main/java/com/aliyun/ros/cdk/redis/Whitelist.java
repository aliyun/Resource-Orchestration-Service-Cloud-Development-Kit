package com.aliyun.ros.cdk.redis;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::REDIS::Whitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:09:28.135Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.Whitelist")
public class Whitelist extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.redis.IWhitelist {

    protected Whitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Whitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Whitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.WhitelistProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Whitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.WhitelistProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SecurityIpGroupAttribute: The default is empty.
     * <p>
     * For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpGroupName: Whitelist group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIps: IP address whitelist to be modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.WhitelistProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.WhitelistProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.Whitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.Whitelist> {
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
        private final com.aliyun.ros.cdk.redis.WhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.WhitelistProps.Builder();
        }

        /**
         * Property instanceId: Instance ID (globally unique).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance ID (globally unique).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property securityIps: The IP addresses in the whitelist.
         * <p>
         * Up to 1,000 IP addresses can be specified in a
         * whitelist. Separate multiple IP addresses with a comma (,). Specify an IP address
         * in the 0.0.0.0/0, 10.23.12.24, or 10.23.12.24/24 format. In CIDR block
         * 10.23.12.24/24, /24 specifies the length of the prefix of an IP address. The
         * prefix length ranges from 1 to 32.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIps(final java.lang.String securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }
        /**
         * Property securityIps: The IP addresses in the whitelist.
         * <p>
         * Up to 1,000 IP addresses can be specified in a
         * whitelist. Separate multiple IP addresses with a comma (,). Specify an IP address
         * in the 0.0.0.0/0, 10.23.12.24, or 10.23.12.24/24 format. In CIDR block
         * 10.23.12.24/24, /24 specifies the length of the prefix of an IP address. The
         * prefix length ranges from 1 to 32.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIps(final com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }

        /**
         * Property securityIpGroupAttribute: The default is empty.
         * <p>
         * For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
         * <p>
         * @return {@code this}
         * @param securityIpGroupAttribute Property securityIpGroupAttribute: The default is empty. This parameter is required.
         */
        public Builder securityIpGroupAttribute(final java.lang.String securityIpGroupAttribute) {
            this.props.securityIpGroupAttribute(securityIpGroupAttribute);
            return this;
        }
        /**
         * Property securityIpGroupAttribute: The default is empty.
         * <p>
         * For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
         * <p>
         * @return {@code this}
         * @param securityIpGroupAttribute Property securityIpGroupAttribute: The default is empty. This parameter is required.
         */
        public Builder securityIpGroupAttribute(final com.aliyun.ros.cdk.core.IResolvable securityIpGroupAttribute) {
            this.props.securityIpGroupAttribute(securityIpGroupAttribute);
            return this;
        }

        /**
         * Property securityIpGroupName: The name of the IP address whitelist.
         * <p>
         * <blockquote>
         * <p>
         * <warning>You cannot modify the whitelist that is generated by the system. If you
         * do not specify this parameter, the default whitelist is modified by
         * default.&gt;</warning>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param securityIpGroupName Property securityIpGroupName: The name of the IP address whitelist. This parameter is required.
         */
        public Builder securityIpGroupName(final java.lang.String securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }
        /**
         * Property securityIpGroupName: The name of the IP address whitelist.
         * <p>
         * <blockquote>
         * <p>
         * <warning>You cannot modify the whitelist that is generated by the system. If you
         * do not specify this parameter, the default whitelist is modified by
         * default.&gt;</warning>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param securityIpGroupName Property securityIpGroupName: The name of the IP address whitelist. This parameter is required.
         */
        public Builder securityIpGroupName(final com.aliyun.ros.cdk.core.IResolvable securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.Whitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.Whitelist build() {
            return new com.aliyun.ros.cdk.redis.Whitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

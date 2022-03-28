package com.aliyun.ros.cdk.memcache;

/**
 * A ROS resource type:  `ALIYUN::Memcache::Whitelist`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.996Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.memcache.$Module.class, fqn = "@alicloud/ros-cdk-memcache.Whitelist")
public class Whitelist extends com.aliyun.ros.cdk.core.Resource {

    protected Whitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Whitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
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
    public Whitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.memcache.WhitelistProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Whitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.memcache.WhitelistProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SecurityIpGroupAttribute: The default is empty.
     * <p>
     * For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityIpGroupName: Whitelist group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityIps: IP address whitelist to be modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.memcache.Whitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.memcache.Whitelist> {
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
        private final com.aliyun.ros.cdk.memcache.WhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.memcache.WhitelistProps.Builder();
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
         * Property securityIps: IP address whitelist to be modified.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: IP address whitelist to be modified. This parameter is required.
         */
        public Builder securityIps(final java.lang.String securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }
        /**
         * Property securityIps: IP address whitelist to be modified.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: IP address whitelist to be modified. This parameter is required.
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
         * Property securityIpGroupName: Whitelist group.
         * <p>
         * @return {@code this}
         * @param securityIpGroupName Property securityIpGroupName: Whitelist group. This parameter is required.
         */
        public Builder securityIpGroupName(final java.lang.String securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }
        /**
         * Property securityIpGroupName: Whitelist group.
         * <p>
         * @return {@code this}
         * @param securityIpGroupName Property securityIpGroupName: Whitelist group. This parameter is required.
         */
        public Builder securityIpGroupName(final com.aliyun.ros.cdk.core.IResolvable securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.memcache.Whitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.memcache.Whitelist build() {
            return new com.aliyun.ros.cdk.memcache.Whitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

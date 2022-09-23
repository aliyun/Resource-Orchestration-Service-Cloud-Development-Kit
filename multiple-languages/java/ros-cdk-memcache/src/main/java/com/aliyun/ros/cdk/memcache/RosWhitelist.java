package com.aliyun.ros.cdk.memcache;

/**
 * A ROS template type:  `ALIYUN::Memcache::Whitelist`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.881Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.memcache.$Module.class, fqn = "@alicloud/ros-cdk-memcache.RosWhitelist")
public class RosWhitelist extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWhitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWhitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.memcache.RosWhitelist.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.memcache.RosWhitelistProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "securityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIps(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIps", java.util.Objects.requireNonNull(value, "securityIps is required"));
    }

    /**
     */
    public void setSecurityIps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIps", java.util.Objects.requireNonNull(value, "securityIps is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "securityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpGroupAttribute(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpGroupAttribute", value);
    }

    /**
     */
    public void setSecurityIpGroupAttribute(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpGroupAttribute", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "securityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpGroupName", value);
    }

    /**
     */
    public void setSecurityIpGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpGroupName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.memcache.RosWhitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.memcache.RosWhitelist> {
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
        private final com.aliyun.ros.cdk.memcache.RosWhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.memcache.RosWhitelistProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityIps This parameter is required.
         */
        public Builder securityIps(final java.lang.String securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIps This parameter is required.
         */
        public Builder securityIps(final com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityIpGroupAttribute This parameter is required.
         */
        public Builder securityIpGroupAttribute(final java.lang.String securityIpGroupAttribute) {
            this.props.securityIpGroupAttribute(securityIpGroupAttribute);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpGroupAttribute This parameter is required.
         */
        public Builder securityIpGroupAttribute(final com.aliyun.ros.cdk.core.IResolvable securityIpGroupAttribute) {
            this.props.securityIpGroupAttribute(securityIpGroupAttribute);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityIpGroupName This parameter is required.
         */
        public Builder securityIpGroupName(final java.lang.String securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpGroupName This parameter is required.
         */
        public Builder securityIpGroupName(final com.aliyun.ros.cdk.core.IResolvable securityIpGroupName) {
            this.props.securityIpGroupName(securityIpGroupName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.memcache.RosWhitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.memcache.RosWhitelist build() {
            return new com.aliyun.ros.cdk.memcache.RosWhitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

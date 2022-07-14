package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSet`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:22.282Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosDhcpOptionsSet")
public class RosDhcpOptionsSet extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDhcpOptionsSet(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDhcpOptionsSet(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSet`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDhcpOptionsSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosDhcpOptionsSetProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDhcpOptionsSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetDescription() {
        return software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDhcpOptionsSetDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsSetDescription", value);
    }

    /**
     */
    public void setDhcpOptionsSetDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsSetDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetName() {
        return software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDhcpOptionsSetName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsSetName", value);
    }

    /**
     */
    public void setDhcpOptionsSetName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsSetName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainName() {
        return software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainName", value);
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainNameServers() {
        return software.amazon.jsii.Kernel.get(this, "domainNameServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainNameServers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainNameServers", value);
    }

    /**
     */
    public void setDomainNameServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "domainNameServers", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet> {
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
        private final com.aliyun.ros.cdk.vpc.RosDhcpOptionsSetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosDhcpOptionsSetProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dhcpOptionsSetDescription This parameter is required.
         */
        public Builder dhcpOptionsSetDescription(final java.lang.String dhcpOptionsSetDescription) {
            this.props.dhcpOptionsSetDescription(dhcpOptionsSetDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param dhcpOptionsSetDescription This parameter is required.
         */
        public Builder dhcpOptionsSetDescription(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetDescription) {
            this.props.dhcpOptionsSetDescription(dhcpOptionsSetDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param dhcpOptionsSetName This parameter is required.
         */
        public Builder dhcpOptionsSetName(final java.lang.String dhcpOptionsSetName) {
            this.props.dhcpOptionsSetName(dhcpOptionsSetName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dhcpOptionsSetName This parameter is required.
         */
        public Builder dhcpOptionsSetName(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetName) {
            this.props.dhcpOptionsSetName(dhcpOptionsSetName);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainNameServers This parameter is required.
         */
        public Builder domainNameServers(final com.aliyun.ros.cdk.core.IResolvable domainNameServers) {
            this.props.domainNameServers(domainNameServers);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainNameServers This parameter is required.
         */
        public Builder domainNameServers(final java.util.List<? extends java.lang.Object> domainNameServers) {
            this.props.domainNameServers(domainNameServers);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet build() {
            return new com.aliyun.ros.cdk.vpc.RosDhcpOptionsSet(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

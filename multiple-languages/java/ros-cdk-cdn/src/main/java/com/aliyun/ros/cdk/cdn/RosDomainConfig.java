package com.aliyun.ros.cdk.cdn;

/**
 * A ROS template type:  <code>ALIYUN::CDN::DomainConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainConfig")
public class RosDomainConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomainConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomainConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cdn.RosDomainConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::CDN::DomainConfig</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.RosDomainConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainNames() {
        return software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainNames(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainNames", java.util.Objects.requireNonNull(value, "domainNames is required"));
    }

    /**
     */
    public void setDomainNames(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainNames", java.util.Objects.requireNonNull(value, "domainNames is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFunctions() {
        return software.amazon.jsii.Kernel.get(this, "functions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctions(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functions", java.util.Objects.requireNonNull(value, "functions is required"));
    }

    /**
     */
    public void setFunctions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functions", java.util.Objects.requireNonNull(value, "functions is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.RosDomainConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.RosDomainConfig> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cdn.RosDomainConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.RosDomainConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domainNames This parameter is required.
         */
        public Builder domainNames(final java.lang.String domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainNames This parameter is required.
         */
        public Builder domainNames(final com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param functions This parameter is required.
         */
        public Builder functions(final java.lang.String functions) {
            this.props.functions(functions);
            return this;
        }
        /**
         * @return {@code this}
         * @param functions This parameter is required.
         */
        public Builder functions(final com.aliyun.ros.cdk.core.IResolvable functions) {
            this.props.functions(functions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cdn.RosDomainConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.RosDomainConfig build() {
            return new com.aliyun.ros.cdk.cdn.RosDomainConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

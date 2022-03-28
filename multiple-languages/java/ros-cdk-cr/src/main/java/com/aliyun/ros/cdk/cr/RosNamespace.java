package com.aliyun.ros.cdk.cr;

/**
 * A ROS template type:  `ALIYUN::CR::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.779Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosNamespace")
public class RosNamespace extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNamespace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNamespace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cr.RosNamespace.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CR::Namespace`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RosNamespaceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreate() {
        return software.amazon.jsii.Kernel.get(this, "autoCreate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoCreate(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoCreate", value);
    }

    /**
     */
    public void setAutoCreate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoCreate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultVisibility() {
        return software.amazon.jsii.Kernel.get(this, "defaultVisibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultVisibility(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultVisibility", value);
    }

    /**
     */
    public void setDefaultVisibility(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultVisibility", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", value);
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.RosNamespace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.RosNamespace> {
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
        private final com.aliyun.ros.cdk.cr.RosNamespaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RosNamespaceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoCreate This parameter is required.
         */
        public Builder autoCreate(final java.lang.Boolean autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoCreate This parameter is required.
         */
        public Builder autoCreate(final com.aliyun.ros.cdk.core.IResolvable autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultVisibility This parameter is required.
         */
        public Builder defaultVisibility(final java.lang.String defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultVisibility This parameter is required.
         */
        public Builder defaultVisibility(final com.aliyun.ros.cdk.core.IResolvable defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cr.RosNamespace}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.RosNamespace build() {
            return new com.aliyun.ros.cdk.cr.RosNamespace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

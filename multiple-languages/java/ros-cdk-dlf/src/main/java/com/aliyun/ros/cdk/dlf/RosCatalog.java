package com.aliyun.ros.cdk.dlf;

/**
 * A ROS template type:  `ALIYUN::DLF::Catalog`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:18.719Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dlf.$Module.class, fqn = "@alicloud/ros-cdk-dlf.RosCatalog")
public class RosCatalog extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCatalog(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCatalog(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dlf.RosCatalog.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DLF::Catalog`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCatalog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dlf.RosCatalogProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCatalogId() {
        return software.amazon.jsii.Kernel.get(this, "attrCatalogId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCatalogId() {
        return software.amazon.jsii.Kernel.get(this, "catalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCatalogId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "catalogId", java.util.Objects.requireNonNull(value, "catalogId is required"));
    }

    /**
     */
    public void setCatalogId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "catalogId", java.util.Objects.requireNonNull(value, "catalogId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocationUri() {
        return software.amazon.jsii.Kernel.get(this, "locationUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocationUri(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "locationUri", value);
    }

    /**
     */
    public void setLocationUri(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "locationUri", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOwner() {
        return software.amazon.jsii.Kernel.get(this, "owner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOwner(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "owner", value);
    }

    /**
     */
    public void setOwner(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "owner", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dlf.RosCatalog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dlf.RosCatalog> {
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
        private final com.aliyun.ros.cdk.dlf.RosCatalogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dlf.RosCatalogProps.Builder();
        }

        /**
         * @return {@code this}
         * @param catalogId This parameter is required.
         */
        public Builder catalogId(final java.lang.String catalogId) {
            this.props.catalogId(catalogId);
            return this;
        }
        /**
         * @return {@code this}
         * @param catalogId This parameter is required.
         */
        public Builder catalogId(final com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.props.catalogId(catalogId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param locationUri This parameter is required.
         */
        public Builder locationUri(final java.lang.String locationUri) {
            this.props.locationUri(locationUri);
            return this;
        }
        /**
         * @return {@code this}
         * @param locationUri This parameter is required.
         */
        public Builder locationUri(final com.aliyun.ros.cdk.core.IResolvable locationUri) {
            this.props.locationUri(locationUri);
            return this;
        }

        /**
         * @return {@code this}
         * @param owner This parameter is required.
         */
        public Builder owner(final java.lang.String owner) {
            this.props.owner(owner);
            return this;
        }
        /**
         * @return {@code this}
         * @param owner This parameter is required.
         */
        public Builder owner(final com.aliyun.ros.cdk.core.IResolvable owner) {
            this.props.owner(owner);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dlf.RosCatalog}.
         */
        @Override
        public com.aliyun.ros.cdk.dlf.RosCatalog build() {
            return new com.aliyun.ros.cdk.dlf.RosCatalog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

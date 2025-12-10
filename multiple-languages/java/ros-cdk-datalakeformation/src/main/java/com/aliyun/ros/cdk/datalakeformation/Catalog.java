package com.aliyun.ros.cdk.datalakeformation;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DataLakeFormation::Catalog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.243Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datalakeformation.$Module.class, fqn = "@alicloud/ros-cdk-datalakeformation.Catalog")
public class Catalog extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.datalakeformation.ICatalog {

    protected Catalog(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Catalog(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Catalog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Catalog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CatalogId: Catalog ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogId() {
        return software.amazon.jsii.Kernel.get(this, "attrCatalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsShared: Whether it is a shared data catalog.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsShared() {
        return software.amazon.jsii.Kernel.get(this, "attrIsShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: Catalog name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Options: Configuration parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ShareId: Share ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareId() {
        return software.amazon.jsii.Kernel.get(this, "attrShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: Catalog type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.datalakeformation.CatalogProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.datalakeformation.Catalog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.datalakeformation.Catalog> {
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
        private final com.aliyun.ros.cdk.datalakeformation.CatalogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.datalakeformation.CatalogProps.Builder();
        }

        /**
         * Property name: Catalog name.
         * <p>
         * @return {@code this}
         * @param name Property name: Catalog name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Catalog name.
         * <p>
         * @return {@code this}
         * @param name Property name: Catalog name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property isShared: Whether it is a shared data catalog.
         * <p>
         * @return {@code this}
         * @param isShared Property isShared: Whether it is a shared data catalog. This parameter is required.
         */
        public Builder isShared(final java.lang.Boolean isShared) {
            this.props.isShared(isShared);
            return this;
        }
        /**
         * Property isShared: Whether it is a shared data catalog.
         * <p>
         * @return {@code this}
         * @param isShared Property isShared: Whether it is a shared data catalog. This parameter is required.
         */
        public Builder isShared(final com.aliyun.ros.cdk.core.IResolvable isShared) {
            this.props.isShared(isShared);
            return this;
        }

        /**
         * Property options: Configuration parameters.
         * <p>
         * @return {@code this}
         * @param options Property options: Configuration parameters. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: Configuration parameters.
         * <p>
         * @return {@code this}
         * @param options Property options: Configuration parameters. This parameter is required.
         */
        public Builder options(final java.util.Map<java.lang.String, ? extends java.lang.Object> options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property shareId: Share ID.
         * <p>
         * @return {@code this}
         * @param shareId Property shareId: Share ID. This parameter is required.
         */
        public Builder shareId(final java.lang.String shareId) {
            this.props.shareId(shareId);
            return this;
        }
        /**
         * Property shareId: Share ID.
         * <p>
         * @return {@code this}
         * @param shareId Property shareId: Share ID. This parameter is required.
         */
        public Builder shareId(final com.aliyun.ros.cdk.core.IResolvable shareId) {
            this.props.shareId(shareId);
            return this;
        }

        /**
         * Property type: Catalog type.
         * <p>
         * @return {@code this}
         * @param type Property type: Catalog type. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Catalog type.
         * <p>
         * @return {@code this}
         * @param type Property type: Catalog type. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.datalakeformation.Catalog}.
         */
        @Override
        public com.aliyun.ros.cdk.datalakeformation.Catalog build() {
            return new com.aliyun.ros.cdk.datalakeformation.Catalog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

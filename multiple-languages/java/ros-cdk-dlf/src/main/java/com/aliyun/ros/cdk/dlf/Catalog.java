package com.aliyun.ros.cdk.dlf;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DLF::Catalog</code>, which is used to create a catalog in Data Lake Formation (DLF).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.894Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dlf.$Module.class, fqn = "@alicloud/ros-cdk-dlf.Catalog")
public class Catalog extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dlf.ICatalog {

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
    public Catalog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dlf.CatalogProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Catalog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dlf.CatalogProps props) {
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

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dlf.CatalogProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dlf.CatalogProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dlf.Catalog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dlf.Catalog> {
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
        private final com.aliyun.ros.cdk.dlf.CatalogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dlf.CatalogProps.Builder();
        }

        /**
         * Property catalogId: Catalog ID.
         * <p>
         * @return {@code this}
         * @param catalogId Property catalogId: Catalog ID. This parameter is required.
         */
        public Builder catalogId(final java.lang.String catalogId) {
            this.props.catalogId(catalogId);
            return this;
        }
        /**
         * Property catalogId: Catalog ID.
         * <p>
         * @return {@code this}
         * @param catalogId Property catalogId: Catalog ID. This parameter is required.
         */
        public Builder catalogId(final com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.props.catalogId(catalogId);
            return this;
        }

        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property locationUri: Location uri, for example: oss://dlf-test-oss-location/.
         * <p>
         * @return {@code this}
         * @param locationUri Property locationUri: Location uri, for example: oss://dlf-test-oss-location/. This parameter is required.
         */
        public Builder locationUri(final java.lang.String locationUri) {
            this.props.locationUri(locationUri);
            return this;
        }
        /**
         * Property locationUri: Location uri, for example: oss://dlf-test-oss-location/.
         * <p>
         * @return {@code this}
         * @param locationUri Property locationUri: Location uri, for example: oss://dlf-test-oss-location/. This parameter is required.
         */
        public Builder locationUri(final com.aliyun.ros.cdk.core.IResolvable locationUri) {
            this.props.locationUri(locationUri);
            return this;
        }

        /**
         * Property owner: Person in charge, principal format.
         * <p>
         * Empty auto-fill with current creator identity
         * <p>
         * @return {@code this}
         * @param owner Property owner: Person in charge, principal format. This parameter is required.
         */
        public Builder owner(final java.lang.String owner) {
            this.props.owner(owner);
            return this;
        }
        /**
         * Property owner: Person in charge, principal format.
         * <p>
         * Empty auto-fill with current creator identity
         * <p>
         * @return {@code this}
         * @param owner Property owner: Person in charge, principal format. This parameter is required.
         */
        public Builder owner(final com.aliyun.ros.cdk.core.IResolvable owner) {
            this.props.owner(owner);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dlf.Catalog}.
         */
        @Override
        public com.aliyun.ros.cdk.dlf.Catalog build() {
            return new com.aliyun.ros.cdk.dlf.Catalog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

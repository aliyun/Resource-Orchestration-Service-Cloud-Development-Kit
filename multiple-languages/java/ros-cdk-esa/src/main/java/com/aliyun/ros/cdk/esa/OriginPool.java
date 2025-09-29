package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::OriginPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginPool")
public class OriginPool extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IOriginPool {

    protected OriginPool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OriginPool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OriginPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OriginPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Enabled: Whether the source address pool is enabled:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginPoolId: OriginPool Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginPoolName: The source address pool name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginPoolName() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Origins: The Source station information added to the source address pool.
     * <p>
     * Multiple Source stations use arrays to transfer values.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrigins() {
        return software.amazon.jsii.Kernel.get(this, "attrOrigins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceLbCount() {
        return software.amazon.jsii.Kernel.get(this, "attrReferenceLbCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferences() {
        return software.amazon.jsii.Kernel.get(this, "attrReferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The site ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginPoolProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginPoolProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.OriginPool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.OriginPool> {
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
        private final com.aliyun.ros.cdk.esa.OriginPoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.OriginPoolProps.Builder();
        }

        /**
         * Property originPoolName: The source address pool name.
         * <p>
         * @return {@code this}
         * @param originPoolName Property originPoolName: The source address pool name. This parameter is required.
         */
        public Builder originPoolName(final java.lang.String originPoolName) {
            this.props.originPoolName(originPoolName);
            return this;
        }
        /**
         * Property originPoolName: The source address pool name.
         * <p>
         * @return {@code this}
         * @param originPoolName Property originPoolName: The source address pool name. This parameter is required.
         */
        public Builder originPoolName(final com.aliyun.ros.cdk.core.IResolvable originPoolName) {
            this.props.originPoolName(originPoolName);
            return this;
        }

        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property enabled: Whether the source address pool is enabled: - <code>true</code>: Enabled;
         * <p>
         * <ul>
         * <li><code>false</code>: Not enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Whether the source address pool is enabled: - <code>true</code>: Enabled;. This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * Property enabled: Whether the source address pool is enabled: - <code>true</code>: Enabled;
         * <p>
         * <ul>
         * <li><code>false</code>: Not enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Whether the source address pool is enabled: - <code>true</code>: Enabled;. This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * Property origins: The Source station information added to the source address pool.
         * <p>
         * Multiple Source stations use arrays to transfer values.
         * <p>
         * @return {@code this}
         * @param origins Property origins: The Source station information added to the source address pool. This parameter is required.
         */
        public Builder origins(final com.aliyun.ros.cdk.core.IResolvable origins) {
            this.props.origins(origins);
            return this;
        }
        /**
         * Property origins: The Source station information added to the source address pool.
         * <p>
         * Multiple Source stations use arrays to transfer values.
         * <p>
         * @return {@code this}
         * @param origins Property origins: The Source station information added to the source address pool. This parameter is required.
         */
        public Builder origins(final java.util.List<? extends java.lang.Object> origins) {
            this.props.origins(origins);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.OriginPool}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.OriginPool build() {
            return new com.aliyun.ros.cdk.esa.OriginPool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::OriginProtection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginProtection")
public class OriginProtection extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IOriginProtection {

    protected OriginProtection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OriginProtection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OriginProtection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OriginProtection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentIpWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrCurrentIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiffIpWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrDiffIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestIpWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginConverge: The IP convergence status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginConverge() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginConverge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginProtection: Indicates whether origin protection is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The website ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginProtectionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.OriginProtection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.OriginProtection> {
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
        private final com.aliyun.ros.cdk.esa.OriginProtectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.OriginProtectionProps.Builder();
        }

        /**
         * Property siteId: Site Id.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site Id. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: Site Id.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site Id. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property originConverge: The IP convergence status.
         * <p>
         * <ul>
         * <li>on</li>
         * <li>off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originConverge Property originConverge: The IP convergence status. This parameter is required.
         */
        public Builder originConverge(final java.lang.String originConverge) {
            this.props.originConverge(originConverge);
            return this;
        }
        /**
         * Property originConverge: The IP convergence status.
         * <p>
         * <ul>
         * <li>on</li>
         * <li>off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originConverge Property originConverge: The IP convergence status. This parameter is required.
         */
        public Builder originConverge(final com.aliyun.ros.cdk.core.IResolvable originConverge) {
            this.props.originConverge(originConverge);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.OriginProtection}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.OriginProtection build() {
            return new com.aliyun.ros.cdk.esa.OriginProtection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

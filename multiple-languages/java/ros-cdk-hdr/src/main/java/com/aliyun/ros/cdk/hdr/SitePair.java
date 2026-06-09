package com.aliyun.ros.cdk.hdr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HDR::SitePair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:27:50.025Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hdr.$Module.class, fqn = "@alicloud/ros-cdk-hdr.SitePair")
public class SitePair extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hdr.ISitePair {

    protected SitePair(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SitePair(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SitePair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SitePair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PrimarySiteId: The ID of the primary site.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimarySiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecondarySiteId: The ID of the secondary site.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondarySiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SitePairId: The ID of the site pair.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSitePairId() {
        return software.amazon.jsii.Kernel.get(this, "attrSitePairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hdr.SitePairProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hdr.SitePair}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hdr.SitePair> {
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
        private final com.aliyun.ros.cdk.hdr.SitePairProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hdr.SitePairProps.Builder();
        }

        /**
         * Property primarySiteName: The name of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteName Property primarySiteName: The name of the primary site. This parameter is required.
         */
        public Builder primarySiteName(final java.lang.String primarySiteName) {
            this.props.primarySiteName(primarySiteName);
            return this;
        }
        /**
         * Property primarySiteName: The name of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteName Property primarySiteName: The name of the primary site. This parameter is required.
         */
        public Builder primarySiteName(final com.aliyun.ros.cdk.core.IResolvable primarySiteName) {
            this.props.primarySiteName(primarySiteName);
            return this;
        }

        /**
         * Property primarySiteRegionId: The region ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteRegionId Property primarySiteRegionId: The region ID of the primary site. This parameter is required.
         */
        public Builder primarySiteRegionId(final java.lang.String primarySiteRegionId) {
            this.props.primarySiteRegionId(primarySiteRegionId);
            return this;
        }
        /**
         * Property primarySiteRegionId: The region ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteRegionId Property primarySiteRegionId: The region ID of the primary site. This parameter is required.
         */
        public Builder primarySiteRegionId(final com.aliyun.ros.cdk.core.IResolvable primarySiteRegionId) {
            this.props.primarySiteRegionId(primarySiteRegionId);
            return this;
        }

        /**
         * Property primarySiteType: The type of the primary site.
         * <p>
         * Valid values: VPC, VSwitch, VRouter.
         * <p>
         * @return {@code this}
         * @param primarySiteType Property primarySiteType: The type of the primary site. This parameter is required.
         */
        public Builder primarySiteType(final java.lang.String primarySiteType) {
            this.props.primarySiteType(primarySiteType);
            return this;
        }
        /**
         * Property primarySiteType: The type of the primary site.
         * <p>
         * Valid values: VPC, VSwitch, VRouter.
         * <p>
         * @return {@code this}
         * @param primarySiteType Property primarySiteType: The type of the primary site. This parameter is required.
         */
        public Builder primarySiteType(final com.aliyun.ros.cdk.core.IResolvable primarySiteType) {
            this.props.primarySiteType(primarySiteType);
            return this;
        }

        /**
         * Property primarySiteVpcId: The VPC ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteVpcId Property primarySiteVpcId: The VPC ID of the primary site. This parameter is required.
         */
        public Builder primarySiteVpcId(final java.lang.String primarySiteVpcId) {
            this.props.primarySiteVpcId(primarySiteVpcId);
            return this;
        }
        /**
         * Property primarySiteVpcId: The VPC ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteVpcId Property primarySiteVpcId: The VPC ID of the primary site. This parameter is required.
         */
        public Builder primarySiteVpcId(final com.aliyun.ros.cdk.core.IResolvable primarySiteVpcId) {
            this.props.primarySiteVpcId(primarySiteVpcId);
            return this;
        }

        /**
         * Property secondarySiteName: The name of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteName Property secondarySiteName: The name of the secondary site. This parameter is required.
         */
        public Builder secondarySiteName(final java.lang.String secondarySiteName) {
            this.props.secondarySiteName(secondarySiteName);
            return this;
        }
        /**
         * Property secondarySiteName: The name of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteName Property secondarySiteName: The name of the secondary site. This parameter is required.
         */
        public Builder secondarySiteName(final com.aliyun.ros.cdk.core.IResolvable secondarySiteName) {
            this.props.secondarySiteName(secondarySiteName);
            return this;
        }

        /**
         * Property secondarySiteRegionId: The region ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteRegionId Property secondarySiteRegionId: The region ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteRegionId(final java.lang.String secondarySiteRegionId) {
            this.props.secondarySiteRegionId(secondarySiteRegionId);
            return this;
        }
        /**
         * Property secondarySiteRegionId: The region ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteRegionId Property secondarySiteRegionId: The region ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteRegionId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteRegionId) {
            this.props.secondarySiteRegionId(secondarySiteRegionId);
            return this;
        }

        /**
         * Property secondarySiteType: The type of the secondary site.
         * <p>
         * Valid values: VPC, VSwitch, VRouter.
         * <p>
         * @return {@code this}
         * @param secondarySiteType Property secondarySiteType: The type of the secondary site. This parameter is required.
         */
        public Builder secondarySiteType(final java.lang.String secondarySiteType) {
            this.props.secondarySiteType(secondarySiteType);
            return this;
        }
        /**
         * Property secondarySiteType: The type of the secondary site.
         * <p>
         * Valid values: VPC, VSwitch, VRouter.
         * <p>
         * @return {@code this}
         * @param secondarySiteType Property secondarySiteType: The type of the secondary site. This parameter is required.
         */
        public Builder secondarySiteType(final com.aliyun.ros.cdk.core.IResolvable secondarySiteType) {
            this.props.secondarySiteType(secondarySiteType);
            return this;
        }

        /**
         * Property secondarySiteVpcId: The VPC ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteVpcId Property secondarySiteVpcId: The VPC ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteVpcId(final java.lang.String secondarySiteVpcId) {
            this.props.secondarySiteVpcId(secondarySiteVpcId);
            return this;
        }
        /**
         * Property secondarySiteVpcId: The VPC ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteVpcId Property secondarySiteVpcId: The VPC ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteVpcId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteVpcId) {
            this.props.secondarySiteVpcId(secondarySiteVpcId);
            return this;
        }

        /**
         * Property primarySiteZoneId: The zone ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteZoneId Property primarySiteZoneId: The zone ID of the primary site. This parameter is required.
         */
        public Builder primarySiteZoneId(final java.lang.String primarySiteZoneId) {
            this.props.primarySiteZoneId(primarySiteZoneId);
            return this;
        }
        /**
         * Property primarySiteZoneId: The zone ID of the primary site.
         * <p>
         * @return {@code this}
         * @param primarySiteZoneId Property primarySiteZoneId: The zone ID of the primary site. This parameter is required.
         */
        public Builder primarySiteZoneId(final com.aliyun.ros.cdk.core.IResolvable primarySiteZoneId) {
            this.props.primarySiteZoneId(primarySiteZoneId);
            return this;
        }

        /**
         * Property secondarySiteZoneId: The zone ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteZoneId Property secondarySiteZoneId: The zone ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteZoneId(final java.lang.String secondarySiteZoneId) {
            this.props.secondarySiteZoneId(secondarySiteZoneId);
            return this;
        }
        /**
         * Property secondarySiteZoneId: The zone ID of the secondary site.
         * <p>
         * @return {@code this}
         * @param secondarySiteZoneId Property secondarySiteZoneId: The zone ID of the secondary site. This parameter is required.
         */
        public Builder secondarySiteZoneId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteZoneId) {
            this.props.secondarySiteZoneId(secondarySiteZoneId);
            return this;
        }

        /**
         * Property sitePairType: The type of the site pair.
         * <p>
         * @return {@code this}
         * @param sitePairType Property sitePairType: The type of the site pair. This parameter is required.
         */
        public Builder sitePairType(final java.lang.String sitePairType) {
            this.props.sitePairType(sitePairType);
            return this;
        }
        /**
         * Property sitePairType: The type of the site pair.
         * <p>
         * @return {@code this}
         * @param sitePairType Property sitePairType: The type of the site pair. This parameter is required.
         */
        public Builder sitePairType(final com.aliyun.ros.cdk.core.IResolvable sitePairType) {
            this.props.sitePairType(sitePairType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hdr.SitePair}.
         */
        @Override
        public com.aliyun.ros.cdk.hdr.SitePair build() {
            return new com.aliyun.ros.cdk.hdr.SitePair(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

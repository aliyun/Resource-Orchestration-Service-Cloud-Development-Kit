package com.aliyun.ros.cdk.hdr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HDR::SitePair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:27:50.015Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hdr.$Module.class, fqn = "@alicloud/ros-cdk-hdr.RosSitePair")
public class RosSitePair extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSitePair(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSitePair(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hdr.RosSitePair.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSitePair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.RosSitePairProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimarySiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimarySiteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecondarySiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondarySiteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSitePairId() {
        return software.amazon.jsii.Kernel.get(this, "attrSitePairId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteName() {
        return software.amazon.jsii.Kernel.get(this, "primarySiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimarySiteName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteName", java.util.Objects.requireNonNull(value, "primarySiteName is required"));
    }

    /**
     */
    public void setPrimarySiteName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteName", java.util.Objects.requireNonNull(value, "primarySiteName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteRegionId() {
        return software.amazon.jsii.Kernel.get(this, "primarySiteRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimarySiteRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteRegionId", java.util.Objects.requireNonNull(value, "primarySiteRegionId is required"));
    }

    /**
     */
    public void setPrimarySiteRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteRegionId", java.util.Objects.requireNonNull(value, "primarySiteRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteType() {
        return software.amazon.jsii.Kernel.get(this, "primarySiteType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimarySiteType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteType", java.util.Objects.requireNonNull(value, "primarySiteType is required"));
    }

    /**
     */
    public void setPrimarySiteType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteType", java.util.Objects.requireNonNull(value, "primarySiteType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteVpcId() {
        return software.amazon.jsii.Kernel.get(this, "primarySiteVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimarySiteVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteVpcId", java.util.Objects.requireNonNull(value, "primarySiteVpcId is required"));
    }

    /**
     */
    public void setPrimarySiteVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteVpcId", java.util.Objects.requireNonNull(value, "primarySiteVpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteName() {
        return software.amazon.jsii.Kernel.get(this, "secondarySiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondarySiteName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteName", java.util.Objects.requireNonNull(value, "secondarySiteName is required"));
    }

    /**
     */
    public void setSecondarySiteName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteName", java.util.Objects.requireNonNull(value, "secondarySiteName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteRegionId() {
        return software.amazon.jsii.Kernel.get(this, "secondarySiteRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondarySiteRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteRegionId", java.util.Objects.requireNonNull(value, "secondarySiteRegionId is required"));
    }

    /**
     */
    public void setSecondarySiteRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteRegionId", java.util.Objects.requireNonNull(value, "secondarySiteRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteType() {
        return software.amazon.jsii.Kernel.get(this, "secondarySiteType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondarySiteType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteType", java.util.Objects.requireNonNull(value, "secondarySiteType is required"));
    }

    /**
     */
    public void setSecondarySiteType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteType", java.util.Objects.requireNonNull(value, "secondarySiteType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteVpcId() {
        return software.amazon.jsii.Kernel.get(this, "secondarySiteVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondarySiteVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteVpcId", java.util.Objects.requireNonNull(value, "secondarySiteVpcId is required"));
    }

    /**
     */
    public void setSecondarySiteVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteVpcId", java.util.Objects.requireNonNull(value, "secondarySiteVpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrimarySiteZoneId() {
        return software.amazon.jsii.Kernel.get(this, "primarySiteZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimarySiteZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteZoneId", value);
    }

    /**
     */
    public void setPrimarySiteZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primarySiteZoneId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondarySiteZoneId() {
        return software.amazon.jsii.Kernel.get(this, "secondarySiteZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondarySiteZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteZoneId", value);
    }

    /**
     */
    public void setSecondarySiteZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondarySiteZoneId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSitePairType() {
        return software.amazon.jsii.Kernel.get(this, "sitePairType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSitePairType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sitePairType", value);
    }

    /**
     */
    public void setSitePairType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sitePairType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hdr.RosSitePair}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hdr.RosSitePair> {
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
        private final com.aliyun.ros.cdk.hdr.RosSitePairProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hdr.RosSitePairProps.Builder();
        }

        /**
         * @return {@code this}
         * @param primarySiteName This parameter is required.
         */
        public Builder primarySiteName(final java.lang.String primarySiteName) {
            this.props.primarySiteName(primarySiteName);
            return this;
        }
        /**
         * @return {@code this}
         * @param primarySiteName This parameter is required.
         */
        public Builder primarySiteName(final com.aliyun.ros.cdk.core.IResolvable primarySiteName) {
            this.props.primarySiteName(primarySiteName);
            return this;
        }

        /**
         * @return {@code this}
         * @param primarySiteRegionId This parameter is required.
         */
        public Builder primarySiteRegionId(final java.lang.String primarySiteRegionId) {
            this.props.primarySiteRegionId(primarySiteRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param primarySiteRegionId This parameter is required.
         */
        public Builder primarySiteRegionId(final com.aliyun.ros.cdk.core.IResolvable primarySiteRegionId) {
            this.props.primarySiteRegionId(primarySiteRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param primarySiteType This parameter is required.
         */
        public Builder primarySiteType(final java.lang.String primarySiteType) {
            this.props.primarySiteType(primarySiteType);
            return this;
        }
        /**
         * @return {@code this}
         * @param primarySiteType This parameter is required.
         */
        public Builder primarySiteType(final com.aliyun.ros.cdk.core.IResolvable primarySiteType) {
            this.props.primarySiteType(primarySiteType);
            return this;
        }

        /**
         * @return {@code this}
         * @param primarySiteVpcId This parameter is required.
         */
        public Builder primarySiteVpcId(final java.lang.String primarySiteVpcId) {
            this.props.primarySiteVpcId(primarySiteVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param primarySiteVpcId This parameter is required.
         */
        public Builder primarySiteVpcId(final com.aliyun.ros.cdk.core.IResolvable primarySiteVpcId) {
            this.props.primarySiteVpcId(primarySiteVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondarySiteName This parameter is required.
         */
        public Builder secondarySiteName(final java.lang.String secondarySiteName) {
            this.props.secondarySiteName(secondarySiteName);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondarySiteName This parameter is required.
         */
        public Builder secondarySiteName(final com.aliyun.ros.cdk.core.IResolvable secondarySiteName) {
            this.props.secondarySiteName(secondarySiteName);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondarySiteRegionId This parameter is required.
         */
        public Builder secondarySiteRegionId(final java.lang.String secondarySiteRegionId) {
            this.props.secondarySiteRegionId(secondarySiteRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondarySiteRegionId This parameter is required.
         */
        public Builder secondarySiteRegionId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteRegionId) {
            this.props.secondarySiteRegionId(secondarySiteRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondarySiteType This parameter is required.
         */
        public Builder secondarySiteType(final java.lang.String secondarySiteType) {
            this.props.secondarySiteType(secondarySiteType);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondarySiteType This parameter is required.
         */
        public Builder secondarySiteType(final com.aliyun.ros.cdk.core.IResolvable secondarySiteType) {
            this.props.secondarySiteType(secondarySiteType);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondarySiteVpcId This parameter is required.
         */
        public Builder secondarySiteVpcId(final java.lang.String secondarySiteVpcId) {
            this.props.secondarySiteVpcId(secondarySiteVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondarySiteVpcId This parameter is required.
         */
        public Builder secondarySiteVpcId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteVpcId) {
            this.props.secondarySiteVpcId(secondarySiteVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param primarySiteZoneId This parameter is required.
         */
        public Builder primarySiteZoneId(final java.lang.String primarySiteZoneId) {
            this.props.primarySiteZoneId(primarySiteZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param primarySiteZoneId This parameter is required.
         */
        public Builder primarySiteZoneId(final com.aliyun.ros.cdk.core.IResolvable primarySiteZoneId) {
            this.props.primarySiteZoneId(primarySiteZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondarySiteZoneId This parameter is required.
         */
        public Builder secondarySiteZoneId(final java.lang.String secondarySiteZoneId) {
            this.props.secondarySiteZoneId(secondarySiteZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondarySiteZoneId This parameter is required.
         */
        public Builder secondarySiteZoneId(final com.aliyun.ros.cdk.core.IResolvable secondarySiteZoneId) {
            this.props.secondarySiteZoneId(secondarySiteZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sitePairType This parameter is required.
         */
        public Builder sitePairType(final java.lang.String sitePairType) {
            this.props.sitePairType(sitePairType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sitePairType This parameter is required.
         */
        public Builder sitePairType(final com.aliyun.ros.cdk.core.IResolvable sitePairType) {
            this.props.sitePairType(sitePairType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hdr.RosSitePair}.
         */
        @Override
        public com.aliyun.ros.cdk.hdr.RosSitePair build() {
            return new com.aliyun.ros.cdk.hdr.RosSitePair(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

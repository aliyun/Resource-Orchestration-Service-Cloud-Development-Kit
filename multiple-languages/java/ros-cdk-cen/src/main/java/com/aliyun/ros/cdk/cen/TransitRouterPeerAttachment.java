package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterPeerAttachment</code>, which is used to create a cross-region connection for an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.628Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterPeerAttachment")
public class TransitRouterPeerAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ITransitRouterPeerAttachment {

    protected TransitRouterPeerAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterPeerAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterPeerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterPeerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPublishRouteEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bandwidth: Bandwidth.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CenBandwidthPackageId: BandwidthPackageId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CenId: CenId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientToken: ClientToken.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
        return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GeographicSpanId: GeographicSpanId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGeographicSpanId() {
        return software.amazon.jsii.Kernel.get(this, "attrGeographicSpanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerTransitRouterId: PeerTransitRouterId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerTransitRouterOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerTransitRouterOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerTransitRouterRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerTransitRouterRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: ResourceType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterPeerAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterPeerAttachment> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterPeerAttachmentProps.Builder();
        }

        /**
         * Property peerTransitRouterId: PeerTransitRouterId.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterId Property peerTransitRouterId: PeerTransitRouterId. This parameter is required.
         */
        public Builder peerTransitRouterId(final java.lang.String peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }
        /**
         * Property peerTransitRouterId: PeerTransitRouterId.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterId Property peerTransitRouterId: PeerTransitRouterId. This parameter is required.
         */
        public Builder peerTransitRouterId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }

        /**
         * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final java.lang.Boolean autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }
        /**
         * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }

        /**
         * Property bandwidth: Bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Bandwidth. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Bandwidth. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property cenBandwidthPackageId: BandwidthPackageId.
         * <p>
         * @return {@code this}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: BandwidthPackageId. This parameter is required.
         */
        public Builder cenBandwidthPackageId(final java.lang.String cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }
        /**
         * Property cenBandwidthPackageId: BandwidthPackageId.
         * <p>
         * @return {@code this}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: BandwidthPackageId. This parameter is required.
         */
        public Builder cenBandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }

        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: PeerTransitRouterRegionId. This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final java.lang.String peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }
        /**
         * Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: PeerTransitRouterRegionId. This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }

        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterPeerAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterPeerAttachment build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterPeerAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

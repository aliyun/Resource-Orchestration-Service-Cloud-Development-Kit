package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterPeerAttachment</code>, which is used to create a cross-region connection for an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.391Z")
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
     * Attribute TransitRouterAttachmentId: Cross-region connection ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Property peerTransitRouterId: Peer forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterId Property peerTransitRouterId: Peer forwarding router instance ID. This parameter is required.
         */
        public Builder peerTransitRouterId(final java.lang.String peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }
        /**
         * Property peerTransitRouterId: Peer forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterId Property peerTransitRouterId: Peer forwarding router instance ID. This parameter is required.
         */
        public Builder peerTransitRouterId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }

        /**
         * Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
         * <p>
         * false (default): No.
         * true: Yes.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final java.lang.Boolean autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }
        /**
         * Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
         * <p>
         * false (default): No.
         * true: Yes.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }

        /**
         * Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
         * <p>
         * @return {@code this}
         * @param bandwidthType Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic. This parameter is required.
         */
        public Builder bandwidthType(final java.lang.String bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }
        /**
         * Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
         * <p>
         * @return {@code this}
         * @param bandwidthType Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic. This parameter is required.
         */
        public Builder bandwidthType(final com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }

        /**
         * Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
         * <p>
         * Note When the value of BandwidthType is DataTransfer, this item is not required.
         * <p>
         * @return {@code this}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions. This parameter is required.
         */
        public Builder cenBandwidthPackageId(final java.lang.String cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }
        /**
         * Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
         * <p>
         * Note When the value of BandwidthType is DataTransfer, this item is not required.
         * <p>
         * @return {@code this}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions. This parameter is required.
         */
        public Builder cenBandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }

        /**
         * Property cenId: Cloud Enterprise Network Instance ID.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: Cloud Enterprise Network Instance ID. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: Cloud Enterprise Network Instance ID.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: Cloud Enterprise Network Instance ID. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property defaultLinkType: Default link type.
         * <p>
         * Optional values are Platinum, Gold, and default to Gold.
         * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
         * <p>
         * @return {@code this}
         * @param defaultLinkType Property defaultLinkType: Default link type. This parameter is required.
         */
        public Builder defaultLinkType(final java.lang.String defaultLinkType) {
            this.props.defaultLinkType(defaultLinkType);
            return this;
        }
        /**
         * Property defaultLinkType: Default link type.
         * <p>
         * Optional values are Platinum, Gold, and default to Gold.
         * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
         * <p>
         * @return {@code this}
         * @param defaultLinkType Property defaultLinkType: Default link type. This parameter is required.
         */
        public Builder defaultLinkType(final com.aliyun.ros.cdk.core.IResolvable defaultLinkType) {
            this.props.defaultLinkType(defaultLinkType);
            return this;
        }

        /**
         * Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs. This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final java.lang.String peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }
        /**
         * Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
         * <p>
         * @return {@code this}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs. This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }

        /**
         * Property tags: The list of tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property transitRouterAttachmentDescription: Description information for cross-region connections.
         * <p>
         * The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description information for cross-region connections. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * Property transitRouterAttachmentDescription: Description information for cross-region connections.
         * <p>
         * The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description information for cross-region connections. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * Property transitRouterAttachmentName: The name of the cross-region connection.
         * <p>
         * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the cross-region connection. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * Property transitRouterAttachmentName: The name of the cross-region connection.
         * <p>
         * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the cross-region connection. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: Local Enterprise Edition forwarding router instance ID. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: Local Enterprise Edition forwarding router instance ID. This parameter is required.
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

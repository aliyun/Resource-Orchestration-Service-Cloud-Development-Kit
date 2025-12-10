package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>TransitRouterPeerAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.233Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterPeerAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterPeerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property peerTransitRouterId: Peer forwarding router instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerTransitRouterId();

    /**
     * Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
     * <p>
     * false (default): No.
     * true: Yes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     * Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthType() {
        return null;
    }

    /**
     * Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
     * <p>
     * Note When the value of BandwidthType is DataTransfer, this item is not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenBandwidthPackageId() {
        return null;
    }

    /**
     * Property cenId: Cloud Enterprise Network Instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     * Property defaultLinkType: Default link type.
     * <p>
     * Optional values are Platinum, Gold, and default to Gold.
     * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLinkType() {
        return null;
    }

    /**
     * Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeerTransitRouterRegionId() {
        return null;
    }

    /**
     * Property tags: The list of tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property transitRouterAttachmentDescription: Description information for cross-region connections.
     * <p>
     * The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     * Property transitRouterAttachmentName: The name of the cross-region connection.
     * <p>
     * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     * Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterPeerAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterPeerAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterPeerAttachmentProps> {
        java.lang.Object peerTransitRouterId;
        java.lang.Object autoPublishRouteEnabled;
        java.lang.Object bandwidth;
        java.lang.Object bandwidthType;
        java.lang.Object cenBandwidthPackageId;
        java.lang.Object cenId;
        java.lang.Object defaultLinkType;
        java.lang.Object peerTransitRouterRegionId;
        java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> tags;
        java.lang.Object transitRouterAttachmentDescription;
        java.lang.Object transitRouterAttachmentName;
        java.lang.Object transitRouterId;

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId Property peerTransitRouterId: Peer forwarding router instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(java.lang.String peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId Property peerTransitRouterId: Peer forwarding router instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
         *                                false (default): No.
         *                                true: Yes.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
         *                                false (default): No.
         *                                true: Yes.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidthType}
         * @param bandwidthType Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
         * @return {@code this}
         */
        public Builder bandwidthType(java.lang.String bandwidthType) {
            this.bandwidthType = bandwidthType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidthType}
         * @param bandwidthType Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
         * @return {@code this}
         */
        public Builder bandwidthType(com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.bandwidthType = bandwidthType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
         *                              Note When the value of BandwidthType is DataTransfer, this item is not required.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(java.lang.String cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
         *                              Note When the value of BandwidthType is DataTransfer, this item is not required.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenId}
         * @param cenId Property cenId: Cloud Enterprise Network Instance ID.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenId}
         * @param cenId Property cenId: Cloud Enterprise Network Instance ID.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getDefaultLinkType}
         * @param defaultLinkType Property defaultLinkType: Default link type.
         *                        Optional values are Platinum, Gold, and default to Gold.
         *                        And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
         * @return {@code this}
         */
        public Builder defaultLinkType(java.lang.String defaultLinkType) {
            this.defaultLinkType = defaultLinkType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getDefaultLinkType}
         * @param defaultLinkType Property defaultLinkType: Default link type.
         *                        Optional values are Platinum, Gold, and default to Gold.
         *                        And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
         * @return {@code this}
         */
        public Builder defaultLinkType(com.aliyun.ros.cdk.core.IResolvable defaultLinkType) {
            this.defaultLinkType = defaultLinkType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(java.lang.String peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTags}
         * @param tags Property tags: The list of tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description information for cross-region connections.
         *                                           The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description information for cross-region connections.
         *                                           The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the cross-region connection.
         *                                    The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the cross-region connection.
         *                                    The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterPeerAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterPeerAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterPeerAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterPeerAttachmentProps {
        private final java.lang.Object peerTransitRouterId;
        private final java.lang.Object autoPublishRouteEnabled;
        private final java.lang.Object bandwidth;
        private final java.lang.Object bandwidthType;
        private final java.lang.Object cenBandwidthPackageId;
        private final java.lang.Object cenId;
        private final java.lang.Object defaultLinkType;
        private final java.lang.Object peerTransitRouterRegionId;
        private final java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> tags;
        private final java.lang.Object transitRouterAttachmentDescription;
        private final java.lang.Object transitRouterAttachmentName;
        private final java.lang.Object transitRouterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.peerTransitRouterId = software.amazon.jsii.Kernel.get(this, "peerTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPublishRouteEnabled = software.amazon.jsii.Kernel.get(this, "autoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthType = software.amazon.jsii.Kernel.get(this, "bandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenBandwidthPackageId = software.amazon.jsii.Kernel.get(this, "cenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultLinkType = software.amazon.jsii.Kernel.get(this, "defaultLinkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerTransitRouterRegionId = software.amazon.jsii.Kernel.get(this, "peerTransitRouterRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty.class)));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.peerTransitRouterId = java.util.Objects.requireNonNull(builder.peerTransitRouterId, "peerTransitRouterId is required");
            this.autoPublishRouteEnabled = builder.autoPublishRouteEnabled;
            this.bandwidth = builder.bandwidth;
            this.bandwidthType = builder.bandwidthType;
            this.cenBandwidthPackageId = builder.cenBandwidthPackageId;
            this.cenId = builder.cenId;
            this.defaultLinkType = builder.defaultLinkType;
            this.peerTransitRouterRegionId = builder.peerTransitRouterRegionId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty>)builder.tags;
            this.transitRouterAttachmentDescription = builder.transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = builder.transitRouterAttachmentName;
            this.transitRouterId = builder.transitRouterId;
        }

        @Override
        public final java.lang.Object getPeerTransitRouterId() {
            return this.peerTransitRouterId;
        }

        @Override
        public final java.lang.Object getAutoPublishRouteEnabled() {
            return this.autoPublishRouteEnabled;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getBandwidthType() {
            return this.bandwidthType;
        }

        @Override
        public final java.lang.Object getCenBandwidthPackageId() {
            return this.cenBandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getDefaultLinkType() {
            return this.defaultLinkType;
        }

        @Override
        public final java.lang.Object getPeerTransitRouterRegionId() {
            return this.peerTransitRouterRegionId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentDescription() {
            return this.transitRouterAttachmentDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentName() {
            return this.transitRouterAttachmentName;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("peerTransitRouterId", om.valueToTree(this.getPeerTransitRouterId()));
            if (this.getAutoPublishRouteEnabled() != null) {
                data.set("autoPublishRouteEnabled", om.valueToTree(this.getAutoPublishRouteEnabled()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getBandwidthType() != null) {
                data.set("bandwidthType", om.valueToTree(this.getBandwidthType()));
            }
            if (this.getCenBandwidthPackageId() != null) {
                data.set("cenBandwidthPackageId", om.valueToTree(this.getCenBandwidthPackageId()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getDefaultLinkType() != null) {
                data.set("defaultLinkType", om.valueToTree(this.getDefaultLinkType()));
            }
            if (this.getPeerTransitRouterRegionId() != null) {
                data.set("peerTransitRouterRegionId", om.valueToTree(this.getPeerTransitRouterRegionId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTransitRouterAttachmentDescription() != null) {
                data.set("transitRouterAttachmentDescription", om.valueToTree(this.getTransitRouterAttachmentDescription()));
            }
            if (this.getTransitRouterAttachmentName() != null) {
                data.set("transitRouterAttachmentName", om.valueToTree(this.getTransitRouterAttachmentName()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterPeerAttachmentProps.Jsii$Proxy that = (TransitRouterPeerAttachmentProps.Jsii$Proxy) o;

            if (!peerTransitRouterId.equals(that.peerTransitRouterId)) return false;
            if (this.autoPublishRouteEnabled != null ? !this.autoPublishRouteEnabled.equals(that.autoPublishRouteEnabled) : that.autoPublishRouteEnabled != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.bandwidthType != null ? !this.bandwidthType.equals(that.bandwidthType) : that.bandwidthType != null) return false;
            if (this.cenBandwidthPackageId != null ? !this.cenBandwidthPackageId.equals(that.cenBandwidthPackageId) : that.cenBandwidthPackageId != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.defaultLinkType != null ? !this.defaultLinkType.equals(that.defaultLinkType) : that.defaultLinkType != null) return false;
            if (this.peerTransitRouterRegionId != null ? !this.peerTransitRouterRegionId.equals(that.peerTransitRouterRegionId) : that.peerTransitRouterRegionId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            return this.transitRouterId != null ? this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.peerTransitRouterId.hashCode();
            result = 31 * result + (this.autoPublishRouteEnabled != null ? this.autoPublishRouteEnabled.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.bandwidthType != null ? this.bandwidthType.hashCode() : 0);
            result = 31 * result + (this.cenBandwidthPackageId != null ? this.cenBandwidthPackageId.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.defaultLinkType != null ? this.defaultLinkType.hashCode() : 0);
            result = 31 * result + (this.peerTransitRouterRegionId != null ? this.peerTransitRouterRegionId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            return result;
        }
    }
}

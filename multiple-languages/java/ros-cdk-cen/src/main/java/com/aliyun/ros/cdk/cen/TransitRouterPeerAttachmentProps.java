package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterPeerAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.510Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterPeerAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterPeerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property peerTransitRouterId: PeerTransitRouterId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerTransitRouterId();

    /**
     * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     * Property bandwidth: Bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property cenBandwidthPackageId: BandwidthPackageId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenBandwidthPackageId() {
        return null;
    }

    /**
     * Property cenId: CenId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     * Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeerTransitRouterRegionId() {
        return null;
    }

    /**
     * Property resourceType: ResourceType.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property routeTableAssociationEnabled:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableAssociationEnabled() {
        return null;
    }

    /**
     * Property routeTablePropagationEnabled:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTablePropagationEnabled() {
        return null;
    }

    /**
     * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     * Property transitRouterAttachmentName: TransitRouterAttachmentName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     * Property transitRouterId: TransitRouterId.
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
        private java.lang.Object peerTransitRouterId;
        private java.lang.Object autoPublishRouteEnabled;
        private java.lang.Object bandwidth;
        private java.lang.Object cenBandwidthPackageId;
        private java.lang.Object cenId;
        private java.lang.Object peerTransitRouterRegionId;
        private java.lang.Object resourceType;
        private java.lang.Object routeTableAssociationEnabled;
        private java.lang.Object routeTablePropagationEnabled;
        private java.lang.Object transitRouterAttachmentDescription;
        private java.lang.Object transitRouterAttachmentName;
        private java.lang.Object transitRouterId;

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId Property peerTransitRouterId: PeerTransitRouterId. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(java.lang.String peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId Property peerTransitRouterId: PeerTransitRouterId. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: Bandwidth.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: Bandwidth.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: BandwidthPackageId.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(java.lang.String cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId Property cenBandwidthPackageId: BandwidthPackageId.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(java.lang.String peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: ResourceType.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: ResourceType.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled:.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(java.lang.String routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled:.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled:.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(java.lang.String routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled:.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
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
            return new Jsii$Proxy(peerTransitRouterId, autoPublishRouteEnabled, bandwidth, cenBandwidthPackageId, cenId, peerTransitRouterRegionId, resourceType, routeTableAssociationEnabled, routeTablePropagationEnabled, transitRouterAttachmentDescription, transitRouterAttachmentName, transitRouterId);
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
        private final java.lang.Object cenBandwidthPackageId;
        private final java.lang.Object cenId;
        private final java.lang.Object peerTransitRouterRegionId;
        private final java.lang.Object resourceType;
        private final java.lang.Object routeTableAssociationEnabled;
        private final java.lang.Object routeTablePropagationEnabled;
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
            this.cenBandwidthPackageId = software.amazon.jsii.Kernel.get(this, "cenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerTransitRouterRegionId = software.amazon.jsii.Kernel.get(this, "peerTransitRouterRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableAssociationEnabled = software.amazon.jsii.Kernel.get(this, "routeTableAssociationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTablePropagationEnabled = software.amazon.jsii.Kernel.get(this, "routeTablePropagationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object peerTransitRouterId, final java.lang.Object autoPublishRouteEnabled, final java.lang.Object bandwidth, final java.lang.Object cenBandwidthPackageId, final java.lang.Object cenId, final java.lang.Object peerTransitRouterRegionId, final java.lang.Object resourceType, final java.lang.Object routeTableAssociationEnabled, final java.lang.Object routeTablePropagationEnabled, final java.lang.Object transitRouterAttachmentDescription, final java.lang.Object transitRouterAttachmentName, final java.lang.Object transitRouterId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.peerTransitRouterId = java.util.Objects.requireNonNull(peerTransitRouterId, "peerTransitRouterId is required");
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            this.bandwidth = bandwidth;
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            this.cenId = cenId;
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            this.resourceType = resourceType;
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            this.transitRouterId = transitRouterId;
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
        public final java.lang.Object getCenBandwidthPackageId() {
            return this.cenBandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getPeerTransitRouterRegionId() {
            return this.peerTransitRouterRegionId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getRouteTableAssociationEnabled() {
            return this.routeTableAssociationEnabled;
        }

        @Override
        public final java.lang.Object getRouteTablePropagationEnabled() {
            return this.routeTablePropagationEnabled;
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
            if (this.getCenBandwidthPackageId() != null) {
                data.set("cenBandwidthPackageId", om.valueToTree(this.getCenBandwidthPackageId()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getPeerTransitRouterRegionId() != null) {
                data.set("peerTransitRouterRegionId", om.valueToTree(this.getPeerTransitRouterRegionId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getRouteTableAssociationEnabled() != null) {
                data.set("routeTableAssociationEnabled", om.valueToTree(this.getRouteTableAssociationEnabled()));
            }
            if (this.getRouteTablePropagationEnabled() != null) {
                data.set("routeTablePropagationEnabled", om.valueToTree(this.getRouteTablePropagationEnabled()));
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
            if (this.cenBandwidthPackageId != null ? !this.cenBandwidthPackageId.equals(that.cenBandwidthPackageId) : that.cenBandwidthPackageId != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.peerTransitRouterRegionId != null ? !this.peerTransitRouterRegionId.equals(that.peerTransitRouterRegionId) : that.peerTransitRouterRegionId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            if (this.routeTableAssociationEnabled != null ? !this.routeTableAssociationEnabled.equals(that.routeTableAssociationEnabled) : that.routeTableAssociationEnabled != null) return false;
            if (this.routeTablePropagationEnabled != null ? !this.routeTablePropagationEnabled.equals(that.routeTablePropagationEnabled) : that.routeTablePropagationEnabled != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            return this.transitRouterId != null ? this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.peerTransitRouterId.hashCode();
            result = 31 * result + (this.autoPublishRouteEnabled != null ? this.autoPublishRouteEnabled.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.cenBandwidthPackageId != null ? this.cenBandwidthPackageId.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.peerTransitRouterRegionId != null ? this.peerTransitRouterRegionId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.routeTableAssociationEnabled != null ? this.routeTableAssociationEnabled.hashCode() : 0);
            result = 31 * result + (this.routeTablePropagationEnabled != null ? this.routeTablePropagationEnabled.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            return result;
        }
    }
}

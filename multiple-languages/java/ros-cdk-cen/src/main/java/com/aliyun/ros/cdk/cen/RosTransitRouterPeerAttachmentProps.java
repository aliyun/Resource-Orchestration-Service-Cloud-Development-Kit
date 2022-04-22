package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterPeerAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:39.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterPeerAttachmentProps.Jsii$Proxy.class)
public interface RosTransitRouterPeerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerTransitRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenBandwidthPackageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeerTransitRouterRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTransitRouterPeerAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterPeerAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterPeerAttachmentProps> {
        java.lang.Object peerTransitRouterId;
        java.lang.Object autoPublishRouteEnabled;
        java.lang.Object bandwidth;
        java.lang.Object cenBandwidthPackageId;
        java.lang.Object cenId;
        java.lang.Object peerTransitRouterRegionId;
        java.lang.Object transitRouterAttachmentDescription;
        java.lang.Object transitRouterAttachmentName;
        java.lang.Object transitRouterId;

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(java.lang.String peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getPeerTransitRouterId}
         * @param peerTransitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerTransitRouterId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.peerTransitRouterId = peerTransitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId the value to be set.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(java.lang.String cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId the value to be set.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId the value to be set.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(java.lang.String peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getPeerTransitRouterRegionId}
         * @param peerTransitRouterRegionId the value to be set.
         * @return {@code this}
         */
        public Builder peerTransitRouterRegionId(com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.peerTransitRouterRegionId = peerTransitRouterRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterPeerAttachmentProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterPeerAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterPeerAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterPeerAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterPeerAttachmentProps {
        private final java.lang.Object peerTransitRouterId;
        private final java.lang.Object autoPublishRouteEnabled;
        private final java.lang.Object bandwidth;
        private final java.lang.Object cenBandwidthPackageId;
        private final java.lang.Object cenId;
        private final java.lang.Object peerTransitRouterRegionId;
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
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.peerTransitRouterId = java.util.Objects.requireNonNull(builder.peerTransitRouterId, "peerTransitRouterId is required");
            this.autoPublishRouteEnabled = builder.autoPublishRouteEnabled;
            this.bandwidth = builder.bandwidth;
            this.cenBandwidthPackageId = builder.cenBandwidthPackageId;
            this.cenId = builder.cenId;
            this.peerTransitRouterRegionId = builder.peerTransitRouterRegionId;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterPeerAttachmentProps.Jsii$Proxy that = (RosTransitRouterPeerAttachmentProps.Jsii$Proxy) o;

            if (!peerTransitRouterId.equals(that.peerTransitRouterId)) return false;
            if (this.autoPublishRouteEnabled != null ? !this.autoPublishRouteEnabled.equals(that.autoPublishRouteEnabled) : that.autoPublishRouteEnabled != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.cenBandwidthPackageId != null ? !this.cenBandwidthPackageId.equals(that.cenBandwidthPackageId) : that.cenBandwidthPackageId != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.peerTransitRouterRegionId != null ? !this.peerTransitRouterRegionId.equals(that.peerTransitRouterRegionId) : that.peerTransitRouterRegionId != null) return false;
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
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            return result;
        }
    }
}

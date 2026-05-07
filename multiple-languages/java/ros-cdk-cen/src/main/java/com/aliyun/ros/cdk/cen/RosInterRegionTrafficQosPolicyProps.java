package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosInterRegionTrafficQosPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.378Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosInterRegionTrafficQosPolicyProps.Jsii$Proxy.class)
public interface RosInterRegionTrafficQosPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthGuaranteeMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosPolicyDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosPolicyName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInterRegionTrafficQosPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInterRegionTrafficQosPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInterRegionTrafficQosPolicyProps> {
        java.lang.Object transitRouterAttachmentId;
        java.lang.Object transitRouterId;
        java.lang.Object bandwidthGuaranteeMode;
        java.lang.Object interRegionTrafficQosPolicyDescription;
        java.lang.Object interRegionTrafficQosPolicyName;

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getBandwidthGuaranteeMode}
         * @param bandwidthGuaranteeMode the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthGuaranteeMode(java.lang.String bandwidthGuaranteeMode) {
            this.bandwidthGuaranteeMode = bandwidthGuaranteeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getBandwidthGuaranteeMode}
         * @param bandwidthGuaranteeMode the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthGuaranteeMode(com.aliyun.ros.cdk.core.IResolvable bandwidthGuaranteeMode) {
            this.bandwidthGuaranteeMode = bandwidthGuaranteeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getInterRegionTrafficQosPolicyDescription}
         * @param interRegionTrafficQosPolicyDescription the value to be set.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosPolicyDescription(java.lang.String interRegionTrafficQosPolicyDescription) {
            this.interRegionTrafficQosPolicyDescription = interRegionTrafficQosPolicyDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getInterRegionTrafficQosPolicyDescription}
         * @param interRegionTrafficQosPolicyDescription the value to be set.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosPolicyDescription(com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosPolicyDescription) {
            this.interRegionTrafficQosPolicyDescription = interRegionTrafficQosPolicyDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getInterRegionTrafficQosPolicyName}
         * @param interRegionTrafficQosPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosPolicyName(java.lang.String interRegionTrafficQosPolicyName) {
            this.interRegionTrafficQosPolicyName = interRegionTrafficQosPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosInterRegionTrafficQosPolicyProps#getInterRegionTrafficQosPolicyName}
         * @param interRegionTrafficQosPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosPolicyName(com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosPolicyName) {
            this.interRegionTrafficQosPolicyName = interRegionTrafficQosPolicyName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInterRegionTrafficQosPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInterRegionTrafficQosPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInterRegionTrafficQosPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInterRegionTrafficQosPolicyProps {
        private final java.lang.Object transitRouterAttachmentId;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object bandwidthGuaranteeMode;
        private final java.lang.Object interRegionTrafficQosPolicyDescription;
        private final java.lang.Object interRegionTrafficQosPolicyName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthGuaranteeMode = software.amazon.jsii.Kernel.get(this, "bandwidthGuaranteeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interRegionTrafficQosPolicyDescription = software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosPolicyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interRegionTrafficQosPolicyName = software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterAttachmentId = java.util.Objects.requireNonNull(builder.transitRouterAttachmentId, "transitRouterAttachmentId is required");
            this.transitRouterId = java.util.Objects.requireNonNull(builder.transitRouterId, "transitRouterId is required");
            this.bandwidthGuaranteeMode = builder.bandwidthGuaranteeMode;
            this.interRegionTrafficQosPolicyDescription = builder.interRegionTrafficQosPolicyDescription;
            this.interRegionTrafficQosPolicyName = builder.interRegionTrafficQosPolicyName;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getBandwidthGuaranteeMode() {
            return this.bandwidthGuaranteeMode;
        }

        @Override
        public final java.lang.Object getInterRegionTrafficQosPolicyDescription() {
            return this.interRegionTrafficQosPolicyDescription;
        }

        @Override
        public final java.lang.Object getInterRegionTrafficQosPolicyName() {
            return this.interRegionTrafficQosPolicyName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));
            data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            if (this.getBandwidthGuaranteeMode() != null) {
                data.set("bandwidthGuaranteeMode", om.valueToTree(this.getBandwidthGuaranteeMode()));
            }
            if (this.getInterRegionTrafficQosPolicyDescription() != null) {
                data.set("interRegionTrafficQosPolicyDescription", om.valueToTree(this.getInterRegionTrafficQosPolicyDescription()));
            }
            if (this.getInterRegionTrafficQosPolicyName() != null) {
                data.set("interRegionTrafficQosPolicyName", om.valueToTree(this.getInterRegionTrafficQosPolicyName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInterRegionTrafficQosPolicyProps.Jsii$Proxy that = (RosInterRegionTrafficQosPolicyProps.Jsii$Proxy) o;

            if (!transitRouterAttachmentId.equals(that.transitRouterAttachmentId)) return false;
            if (!transitRouterId.equals(that.transitRouterId)) return false;
            if (this.bandwidthGuaranteeMode != null ? !this.bandwidthGuaranteeMode.equals(that.bandwidthGuaranteeMode) : that.bandwidthGuaranteeMode != null) return false;
            if (this.interRegionTrafficQosPolicyDescription != null ? !this.interRegionTrafficQosPolicyDescription.equals(that.interRegionTrafficQosPolicyDescription) : that.interRegionTrafficQosPolicyDescription != null) return false;
            return this.interRegionTrafficQosPolicyName != null ? this.interRegionTrafficQosPolicyName.equals(that.interRegionTrafficQosPolicyName) : that.interRegionTrafficQosPolicyName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterAttachmentId.hashCode();
            result = 31 * result + (this.transitRouterId.hashCode());
            result = 31 * result + (this.bandwidthGuaranteeMode != null ? this.bandwidthGuaranteeMode.hashCode() : 0);
            result = 31 * result + (this.interRegionTrafficQosPolicyDescription != null ? this.interRegionTrafficQosPolicyDescription.hashCode() : 0);
            result = 31 * result + (this.interRegionTrafficQosPolicyName != null ? this.interRegionTrafficQosPolicyName.hashCode() : 0);
            return result;
        }
    }
}

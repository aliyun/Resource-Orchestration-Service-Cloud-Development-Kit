package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosTransitRouterMulticastDomainAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.387Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterMulticastDomainAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterMulticastDomainAssociationProps.Jsii$Proxy.class)
public interface RosTransitRouterMulticastDomainAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterMulticastDomainId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * @return a {@link Builder} of {@link RosTransitRouterMulticastDomainAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterMulticastDomainAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterMulticastDomainAssociationProps> {
        java.lang.Object transitRouterAttachmentId;
        java.lang.Object transitRouterMulticastDomainId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getTransitRouterMulticastDomainId}
         * @param transitRouterMulticastDomainId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterMulticastDomainId(java.lang.String transitRouterMulticastDomainId) {
            this.transitRouterMulticastDomainId = transitRouterMulticastDomainId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getTransitRouterMulticastDomainId}
         * @param transitRouterMulticastDomainId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterMulticastDomainId(com.aliyun.ros.cdk.core.IResolvable transitRouterMulticastDomainId) {
            this.transitRouterMulticastDomainId = transitRouterMulticastDomainId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterMulticastDomainAssociationProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterMulticastDomainAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterMulticastDomainAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterMulticastDomainAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterMulticastDomainAssociationProps {
        private final java.lang.Object transitRouterAttachmentId;
        private final java.lang.Object transitRouterMulticastDomainId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterMulticastDomainId = software.amazon.jsii.Kernel.get(this, "transitRouterMulticastDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterAttachmentId = java.util.Objects.requireNonNull(builder.transitRouterAttachmentId, "transitRouterAttachmentId is required");
            this.transitRouterMulticastDomainId = java.util.Objects.requireNonNull(builder.transitRouterMulticastDomainId, "transitRouterMulticastDomainId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        public final java.lang.Object getTransitRouterMulticastDomainId() {
            return this.transitRouterMulticastDomainId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));
            data.set("transitRouterMulticastDomainId", om.valueToTree(this.getTransitRouterMulticastDomainId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterMulticastDomainAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterMulticastDomainAssociationProps.Jsii$Proxy that = (RosTransitRouterMulticastDomainAssociationProps.Jsii$Proxy) o;

            if (!transitRouterAttachmentId.equals(that.transitRouterAttachmentId)) return false;
            if (!transitRouterMulticastDomainId.equals(that.transitRouterMulticastDomainId)) return false;
            return this.vSwitchId.equals(that.vSwitchId);
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterAttachmentId.hashCode();
            result = 31 * result + (this.transitRouterMulticastDomainId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            return result;
        }
    }
}

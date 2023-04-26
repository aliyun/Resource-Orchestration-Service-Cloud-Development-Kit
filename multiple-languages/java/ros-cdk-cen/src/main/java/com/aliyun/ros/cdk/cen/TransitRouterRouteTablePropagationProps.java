package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagationProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterRouteTablePropagationProps.Jsii$Proxy.class)
public interface TransitRouterRouteTablePropagationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property transitRouterAttachmentId: TransitRouterAttachmentId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId();

    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteTableId();

    /**
     * @return a {@link Builder} of {@link TransitRouterRouteTablePropagationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterRouteTablePropagationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterRouteTablePropagationProps> {
        java.lang.Object transitRouterAttachmentId;
        java.lang.Object transitRouterRouteTableId;

        /**
         * Sets the value of {@link TransitRouterRouteTablePropagationProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: TransitRouterAttachmentId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablePropagationProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: TransitRouterAttachmentId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablePropagationProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(java.lang.String transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablePropagationProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterRouteTablePropagationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterRouteTablePropagationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterRouteTablePropagationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterRouteTablePropagationProps {
        private final java.lang.Object transitRouterAttachmentId;
        private final java.lang.Object transitRouterRouteTableId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableId = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterAttachmentId = java.util.Objects.requireNonNull(builder.transitRouterAttachmentId, "transitRouterAttachmentId is required");
            this.transitRouterRouteTableId = java.util.Objects.requireNonNull(builder.transitRouterRouteTableId, "transitRouterRouteTableId is required");
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableId() {
            return this.transitRouterRouteTableId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));
            data.set("transitRouterRouteTableId", om.valueToTree(this.getTransitRouterRouteTableId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterRouteTablePropagationProps.Jsii$Proxy that = (TransitRouterRouteTablePropagationProps.Jsii$Proxy) o;

            if (!transitRouterAttachmentId.equals(that.transitRouterAttachmentId)) return false;
            return this.transitRouterRouteTableId.equals(that.transitRouterRouteTableId);
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterAttachmentId.hashCode();
            result = 31 * result + (this.transitRouterRouteTableId.hashCode());
            return result;
        }
    }
}

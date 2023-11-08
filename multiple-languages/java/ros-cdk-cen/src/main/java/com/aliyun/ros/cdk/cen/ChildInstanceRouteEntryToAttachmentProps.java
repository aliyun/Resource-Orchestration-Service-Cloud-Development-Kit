package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>ALIYUN::CEN::ChildInstanceRouteEntryToAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:33.626Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(ChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy.class)
public interface ChildInstanceRouteEntryToAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property destinationCidrBlock: The destination CIDR block of the route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock();

    /**
     * Property routeTableId: The ID of the route table configured on the network instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     * Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId();

    /**
     * @return a {@link Builder} of {@link ChildInstanceRouteEntryToAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ChildInstanceRouteEntryToAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ChildInstanceRouteEntryToAttachmentProps> {
        java.lang.Object cenId;
        java.lang.Object destinationCidrBlock;
        java.lang.Object routeTableId;
        java.lang.Object transitRouterAttachmentId;

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table configured on the network instance. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table configured on the network instance. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the network instance connection. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link ChildInstanceRouteEntryToAttachmentProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the network instance connection. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ChildInstanceRouteEntryToAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ChildInstanceRouteEntryToAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ChildInstanceRouteEntryToAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ChildInstanceRouteEntryToAttachmentProps {
        private final java.lang.Object cenId;
        private final java.lang.Object destinationCidrBlock;
        private final java.lang.Object routeTableId;
        private final java.lang.Object transitRouterAttachmentId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.destinationCidrBlock = java.util.Objects.requireNonNull(builder.destinationCidrBlock, "destinationCidrBlock is required");
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
            this.transitRouterAttachmentId = java.util.Objects.requireNonNull(builder.transitRouterAttachmentId, "transitRouterAttachmentId is required");
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy that = (ChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!destinationCidrBlock.equals(that.destinationCidrBlock)) return false;
            if (!routeTableId.equals(that.routeTableId)) return false;
            return this.transitRouterAttachmentId.equals(that.transitRouterAttachmentId);
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.destinationCidrBlock.hashCode());
            result = 31 * result + (this.routeTableId.hashCode());
            result = 31 * result + (this.transitRouterAttachmentId.hashCode());
            return result;
        }
    }
}

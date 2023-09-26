package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>ALIYUN::CEN::ChildInstanceRouteEntryToAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:44.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy.class)
public interface RosChildInstanceRouteEntryToAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId();

    /**
     * @return a {@link Builder} of {@link RosChildInstanceRouteEntryToAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosChildInstanceRouteEntryToAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosChildInstanceRouteEntryToAttachmentProps> {
        java.lang.Object cenId;
        java.lang.Object destinationCidrBlock;
        java.lang.Object routeTableId;
        java.lang.Object transitRouterAttachmentId;

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosChildInstanceRouteEntryToAttachmentProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosChildInstanceRouteEntryToAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosChildInstanceRouteEntryToAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosChildInstanceRouteEntryToAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosChildInstanceRouteEntryToAttachmentProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy that = (RosChildInstanceRouteEntryToAttachmentProps.Jsii$Proxy) o;

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

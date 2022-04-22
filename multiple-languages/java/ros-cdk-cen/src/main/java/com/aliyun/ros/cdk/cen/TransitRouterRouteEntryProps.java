package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:39.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterRouteEntryProps.Jsii$Proxy.class)
public interface TransitRouterRouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteEntryDestinationCidrBlock();

    /**
     * Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteEntryNextHopType();

    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteTableId();

    /**
     * Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryDescription() {
        return null;
    }

    /**
     * Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryName() {
        return null;
    }

    /**
     * Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryNextHopId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterRouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterRouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterRouteEntryProps> {
        java.lang.Object transitRouterRouteEntryDestinationCidrBlock;
        java.lang.Object transitRouterRouteEntryNextHopType;
        java.lang.Object transitRouterRouteTableId;
        java.lang.Object transitRouterRouteEntryDescription;
        java.lang.Object transitRouterRouteEntryName;
        java.lang.Object transitRouterRouteEntryNextHopId;

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryDestinationCidrBlock}
         * @param transitRouterRouteEntryDestinationCidrBlock Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(java.lang.String transitRouterRouteEntryDestinationCidrBlock) {
            this.transitRouterRouteEntryDestinationCidrBlock = transitRouterRouteEntryDestinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryDestinationCidrBlock}
         * @param transitRouterRouteEntryDestinationCidrBlock Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDestinationCidrBlock) {
            this.transitRouterRouteEntryDestinationCidrBlock = transitRouterRouteEntryDestinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryNextHopType}
         * @param transitRouterRouteEntryNextHopType Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryNextHopType(java.lang.String transitRouterRouteEntryNextHopType) {
            this.transitRouterRouteEntryNextHopType = transitRouterRouteEntryNextHopType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryNextHopType}
         * @param transitRouterRouteEntryNextHopType Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryNextHopType(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopType) {
            this.transitRouterRouteEntryNextHopType = transitRouterRouteEntryNextHopType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(java.lang.String transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryDescription}
         * @param transitRouterRouteEntryDescription Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryDescription(java.lang.String transitRouterRouteEntryDescription) {
            this.transitRouterRouteEntryDescription = transitRouterRouteEntryDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryDescription}
         * @param transitRouterRouteEntryDescription Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDescription) {
            this.transitRouterRouteEntryDescription = transitRouterRouteEntryDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryName}
         * @param transitRouterRouteEntryName Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryName(java.lang.String transitRouterRouteEntryName) {
            this.transitRouterRouteEntryName = transitRouterRouteEntryName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryName}
         * @param transitRouterRouteEntryName Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryName(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryName) {
            this.transitRouterRouteEntryName = transitRouterRouteEntryName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryNextHopId}
         * @param transitRouterRouteEntryNextHopId Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryNextHopId(java.lang.String transitRouterRouteEntryNextHopId) {
            this.transitRouterRouteEntryNextHopId = transitRouterRouteEntryNextHopId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteEntryProps#getTransitRouterRouteEntryNextHopId}
         * @param transitRouterRouteEntryNextHopId Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         * @return {@code this}
         */
        public Builder transitRouterRouteEntryNextHopId(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopId) {
            this.transitRouterRouteEntryNextHopId = transitRouterRouteEntryNextHopId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterRouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterRouteEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterRouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterRouteEntryProps {
        private final java.lang.Object transitRouterRouteEntryDestinationCidrBlock;
        private final java.lang.Object transitRouterRouteEntryNextHopType;
        private final java.lang.Object transitRouterRouteTableId;
        private final java.lang.Object transitRouterRouteEntryDescription;
        private final java.lang.Object transitRouterRouteEntryName;
        private final java.lang.Object transitRouterRouteEntryNextHopId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterRouteEntryDestinationCidrBlock = software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteEntryNextHopType = software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableId = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteEntryDescription = software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteEntryName = software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteEntryNextHopId = software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterRouteEntryDestinationCidrBlock = java.util.Objects.requireNonNull(builder.transitRouterRouteEntryDestinationCidrBlock, "transitRouterRouteEntryDestinationCidrBlock is required");
            this.transitRouterRouteEntryNextHopType = java.util.Objects.requireNonNull(builder.transitRouterRouteEntryNextHopType, "transitRouterRouteEntryNextHopType is required");
            this.transitRouterRouteTableId = java.util.Objects.requireNonNull(builder.transitRouterRouteTableId, "transitRouterRouteTableId is required");
            this.transitRouterRouteEntryDescription = builder.transitRouterRouteEntryDescription;
            this.transitRouterRouteEntryName = builder.transitRouterRouteEntryName;
            this.transitRouterRouteEntryNextHopId = builder.transitRouterRouteEntryNextHopId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteEntryDestinationCidrBlock() {
            return this.transitRouterRouteEntryDestinationCidrBlock;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteEntryNextHopType() {
            return this.transitRouterRouteEntryNextHopType;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableId() {
            return this.transitRouterRouteTableId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteEntryDescription() {
            return this.transitRouterRouteEntryDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteEntryName() {
            return this.transitRouterRouteEntryName;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteEntryNextHopId() {
            return this.transitRouterRouteEntryNextHopId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterRouteEntryDestinationCidrBlock", om.valueToTree(this.getTransitRouterRouteEntryDestinationCidrBlock()));
            data.set("transitRouterRouteEntryNextHopType", om.valueToTree(this.getTransitRouterRouteEntryNextHopType()));
            data.set("transitRouterRouteTableId", om.valueToTree(this.getTransitRouterRouteTableId()));
            if (this.getTransitRouterRouteEntryDescription() != null) {
                data.set("transitRouterRouteEntryDescription", om.valueToTree(this.getTransitRouterRouteEntryDescription()));
            }
            if (this.getTransitRouterRouteEntryName() != null) {
                data.set("transitRouterRouteEntryName", om.valueToTree(this.getTransitRouterRouteEntryName()));
            }
            if (this.getTransitRouterRouteEntryNextHopId() != null) {
                data.set("transitRouterRouteEntryNextHopId", om.valueToTree(this.getTransitRouterRouteEntryNextHopId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterRouteEntryProps.Jsii$Proxy that = (TransitRouterRouteEntryProps.Jsii$Proxy) o;

            if (!transitRouterRouteEntryDestinationCidrBlock.equals(that.transitRouterRouteEntryDestinationCidrBlock)) return false;
            if (!transitRouterRouteEntryNextHopType.equals(that.transitRouterRouteEntryNextHopType)) return false;
            if (!transitRouterRouteTableId.equals(that.transitRouterRouteTableId)) return false;
            if (this.transitRouterRouteEntryDescription != null ? !this.transitRouterRouteEntryDescription.equals(that.transitRouterRouteEntryDescription) : that.transitRouterRouteEntryDescription != null) return false;
            if (this.transitRouterRouteEntryName != null ? !this.transitRouterRouteEntryName.equals(that.transitRouterRouteEntryName) : that.transitRouterRouteEntryName != null) return false;
            return this.transitRouterRouteEntryNextHopId != null ? this.transitRouterRouteEntryNextHopId.equals(that.transitRouterRouteEntryNextHopId) : that.transitRouterRouteEntryNextHopId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterRouteEntryDestinationCidrBlock.hashCode();
            result = 31 * result + (this.transitRouterRouteEntryNextHopType.hashCode());
            result = 31 * result + (this.transitRouterRouteTableId.hashCode());
            result = 31 * result + (this.transitRouterRouteEntryDescription != null ? this.transitRouterRouteEntryDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteEntryName != null ? this.transitRouterRouteEntryName.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteEntryNextHopId != null ? this.transitRouterRouteEntryNextHopId.hashCode() : 0);
            return result;
        }
    }
}

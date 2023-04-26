package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouter`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterProps.Jsii$Proxy.class)
public interface TransitRouterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: CenId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property transitRouterDescription: TransitRouterDescription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterDescription() {
        return null;
    }

    /**
     * Property transitRouterName: TransitRouterName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterProps> {
        java.lang.Object cenId;
        java.lang.Object transitRouterDescription;
        java.lang.Object transitRouterName;

        /**
         * Sets the value of {@link TransitRouterProps#getCenId}
         * @param cenId Property cenId: CenId. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterProps#getCenId}
         * @param cenId Property cenId: CenId. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterProps#getTransitRouterDescription}
         * @param transitRouterDescription Property transitRouterDescription: TransitRouterDescription.
         * @return {@code this}
         */
        public Builder transitRouterDescription(java.lang.String transitRouterDescription) {
            this.transitRouterDescription = transitRouterDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterProps#getTransitRouterDescription}
         * @param transitRouterDescription Property transitRouterDescription: TransitRouterDescription.
         * @return {@code this}
         */
        public Builder transitRouterDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterDescription) {
            this.transitRouterDescription = transitRouterDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterProps#getTransitRouterName}
         * @param transitRouterName Property transitRouterName: TransitRouterName.
         * @return {@code this}
         */
        public Builder transitRouterName(java.lang.String transitRouterName) {
            this.transitRouterName = transitRouterName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterProps#getTransitRouterName}
         * @param transitRouterName Property transitRouterName: TransitRouterName.
         * @return {@code this}
         */
        public Builder transitRouterName(com.aliyun.ros.cdk.core.IResolvable transitRouterName) {
            this.transitRouterName = transitRouterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterProps {
        private final java.lang.Object cenId;
        private final java.lang.Object transitRouterDescription;
        private final java.lang.Object transitRouterName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterDescription = software.amazon.jsii.Kernel.get(this, "transitRouterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterName = software.amazon.jsii.Kernel.get(this, "transitRouterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.transitRouterDescription = builder.transitRouterDescription;
            this.transitRouterName = builder.transitRouterName;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getTransitRouterDescription() {
            return this.transitRouterDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterName() {
            return this.transitRouterName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            if (this.getTransitRouterDescription() != null) {
                data.set("transitRouterDescription", om.valueToTree(this.getTransitRouterDescription()));
            }
            if (this.getTransitRouterName() != null) {
                data.set("transitRouterName", om.valueToTree(this.getTransitRouterName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterProps.Jsii$Proxy that = (TransitRouterProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (this.transitRouterDescription != null ? !this.transitRouterDescription.equals(that.transitRouterDescription) : that.transitRouterDescription != null) return false;
            return this.transitRouterName != null ? this.transitRouterName.equals(that.transitRouterName) : that.transitRouterName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.transitRouterDescription != null ? this.transitRouterDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterName != null ? this.transitRouterName.hashCode() : 0);
            return result;
        }
    }
}

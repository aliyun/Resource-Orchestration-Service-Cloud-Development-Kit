package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouter`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:56.998Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterProps.Jsii$Proxy.class)
public interface RosTransitRouterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTransitRouterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterProps> {
        java.lang.Object cenId;
        java.lang.Object transitRouterDescription;
        java.lang.Object transitRouterName;

        /**
         * Sets the value of {@link RosTransitRouterProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterProps#getTransitRouterDescription}
         * @param transitRouterDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterDescription(java.lang.String transitRouterDescription) {
            this.transitRouterDescription = transitRouterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterProps#getTransitRouterDescription}
         * @param transitRouterDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterDescription) {
            this.transitRouterDescription = transitRouterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterProps#getTransitRouterName}
         * @param transitRouterName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterName(java.lang.String transitRouterName) {
            this.transitRouterName = transitRouterName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterProps#getTransitRouterName}
         * @param transitRouterName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterName(com.aliyun.ros.cdk.core.IResolvable transitRouterName) {
            this.transitRouterName = transitRouterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterProps.Jsii$Proxy that = (RosTransitRouterProps.Jsii$Proxy) o;

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

package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>ApplicationEndpointAddress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:28:24.405Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.ApplicationEndpointAddressProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationEndpointAddressProps.Jsii$Proxy.class)
public interface ApplicationEndpointAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property applicationId: The id of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationId();

    /**
     * Property endpointId: The id of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointId();

    /**
     * Property netType: Network type for adding connection address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetType();

    /**
     * @return a {@link Builder} of {@link ApplicationEndpointAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationEndpointAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationEndpointAddressProps> {
        java.lang.Object applicationId;
        java.lang.Object endpointId;
        java.lang.Object netType;

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getApplicationId}
         * @param applicationId Property applicationId: The id of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationId(java.lang.String applicationId) {
            this.applicationId = applicationId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getApplicationId}
         * @param applicationId Property applicationId: The id of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationId(com.aliyun.ros.cdk.core.IResolvable applicationId) {
            this.applicationId = applicationId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getEndpointId}
         * @param endpointId Property endpointId: The id of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(java.lang.String endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getEndpointId}
         * @param endpointId Property endpointId: The id of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getNetType}
         * @param netType Property netType: Network type for adding connection address. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationEndpointAddressProps#getNetType}
         * @param netType Property netType: Network type for adding connection address. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationEndpointAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationEndpointAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationEndpointAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationEndpointAddressProps {
        private final java.lang.Object applicationId;
        private final java.lang.Object endpointId;
        private final java.lang.Object netType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationId = software.amazon.jsii.Kernel.get(this, "applicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointId = software.amazon.jsii.Kernel.get(this, "endpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationId = java.util.Objects.requireNonNull(builder.applicationId, "applicationId is required");
            this.endpointId = java.util.Objects.requireNonNull(builder.endpointId, "endpointId is required");
            this.netType = java.util.Objects.requireNonNull(builder.netType, "netType is required");
        }

        @Override
        public final java.lang.Object getApplicationId() {
            return this.applicationId;
        }

        @Override
        public final java.lang.Object getEndpointId() {
            return this.endpointId;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applicationId", om.valueToTree(this.getApplicationId()));
            data.set("endpointId", om.valueToTree(this.getEndpointId()));
            data.set("netType", om.valueToTree(this.getNetType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.ApplicationEndpointAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationEndpointAddressProps.Jsii$Proxy that = (ApplicationEndpointAddressProps.Jsii$Proxy) o;

            if (!applicationId.equals(that.applicationId)) return false;
            if (!endpointId.equals(that.endpointId)) return false;
            return this.netType.equals(that.netType);
        }

        @Override
        public final int hashCode() {
            int result = this.applicationId.hashCode();
            result = 31 * result + (this.endpointId.hashCode());
            result = 31 * result + (this.netType.hashCode());
            return result;
        }
    }
}

package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>RosService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.764Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosServiceProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceProps.Jsii$Proxy.class)
public interface RosServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddresses();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * @return a {@link Builder} of {@link RosServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceProps> {
        java.lang.Object addresses;
        java.lang.Object gatewayId;
        java.lang.Object serviceName;
        java.lang.Object sourceType;

        /**
         * Sets the value of {@link RosServiceProps#getAddresses}
         * @param addresses the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addresses(com.aliyun.ros.cdk.core.IResolvable addresses) {
            this.addresses = addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getAddresses}
         * @param addresses the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addresses(java.util.List<? extends java.lang.Object> addresses) {
            this.addresses = addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceProps {
        private final java.lang.Object addresses;
        private final java.lang.Object gatewayId;
        private final java.lang.Object serviceName;
        private final java.lang.Object sourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addresses = software.amazon.jsii.Kernel.get(this, "addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addresses = java.util.Objects.requireNonNull(builder.addresses, "addresses is required");
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
        }

        @Override
        public final java.lang.Object getAddresses() {
            return this.addresses;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addresses", om.valueToTree(this.getAddresses()));
            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceProps.Jsii$Proxy that = (RosServiceProps.Jsii$Proxy) o;

            if (!addresses.equals(that.addresses)) return false;
            if (!gatewayId.equals(that.gatewayId)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            return this.sourceType.equals(that.sourceType);
        }

        @Override
        public final int hashCode() {
            int result = this.addresses.hashCode();
            result = 31 * result + (this.gatewayId.hashCode());
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            return result;
        }
    }
}

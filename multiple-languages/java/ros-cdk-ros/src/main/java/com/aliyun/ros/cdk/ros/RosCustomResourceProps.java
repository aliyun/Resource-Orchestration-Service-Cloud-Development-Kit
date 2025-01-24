package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>RosCustomResource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.876Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosCustomResourceProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomResourceProps.Jsii$Proxy.class)
public interface RosCustomResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceToken();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomResourceProps> {
        java.lang.Object serviceToken;
        java.lang.Object timeout;
        java.lang.Object httpConfig;
        java.lang.Object parameters;

        /**
         * Sets the value of {@link RosCustomResourceProps#getServiceToken}
         * @param serviceToken the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceToken(java.lang.String serviceToken) {
            this.serviceToken = serviceToken;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getServiceToken}
         * @param serviceToken the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceToken(com.aliyun.ros.cdk.core.IResolvable serviceToken) {
            this.serviceToken = serviceToken;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.ros.RosCustomResource.HttpConfigProperty httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomResourceProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomResourceProps {
        private final java.lang.Object serviceToken;
        private final java.lang.Object timeout;
        private final java.lang.Object httpConfig;
        private final java.lang.Object parameters;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceToken = software.amazon.jsii.Kernel.get(this, "serviceToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpConfig = software.amazon.jsii.Kernel.get(this, "httpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceToken = java.util.Objects.requireNonNull(builder.serviceToken, "serviceToken is required");
            this.timeout = java.util.Objects.requireNonNull(builder.timeout, "timeout is required");
            this.httpConfig = builder.httpConfig;
            this.parameters = builder.parameters;
        }

        @Override
        public final java.lang.Object getServiceToken() {
            return this.serviceToken;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getHttpConfig() {
            return this.httpConfig;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceToken", om.valueToTree(this.getServiceToken()));
            data.set("timeout", om.valueToTree(this.getTimeout()));
            if (this.getHttpConfig() != null) {
                data.set("httpConfig", om.valueToTree(this.getHttpConfig()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosCustomResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomResourceProps.Jsii$Proxy that = (RosCustomResourceProps.Jsii$Proxy) o;

            if (!serviceToken.equals(that.serviceToken)) return false;
            if (!timeout.equals(that.timeout)) return false;
            if (this.httpConfig != null ? !this.httpConfig.equals(that.httpConfig) : that.httpConfig != null) return false;
            return this.parameters != null ? this.parameters.equals(that.parameters) : that.parameters == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceToken.hashCode();
            result = 31 * result + (this.timeout.hashCode());
            result = 31 * result + (this.httpConfig != null ? this.httpConfig.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            return result;
        }
    }
}

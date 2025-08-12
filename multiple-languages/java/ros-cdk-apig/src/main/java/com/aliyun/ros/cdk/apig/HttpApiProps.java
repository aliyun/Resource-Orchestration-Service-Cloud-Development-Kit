package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>HttpApi</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.513Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.HttpApiProps")
@software.amazon.jsii.Jsii.Proxy(HttpApiProps.Jsii$Proxy.class)
public interface HttpApiProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property httpApiName: The name of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiName();

    /**
     * Property protocols: List of API Access Protocols.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocols();

    /**
     * Property basePath: The base path of the API should start with a /.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBasePath() {
        return null;
    }

    /**
     * Property description: Description of API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HttpApiProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HttpApiProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HttpApiProps> {
        java.lang.Object httpApiName;
        java.lang.Object protocols;
        java.lang.Object basePath;
        java.lang.Object description;
        java.lang.Object type;

        /**
         * Sets the value of {@link HttpApiProps#getHttpApiName}
         * @param httpApiName Property httpApiName: The name of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiName(java.lang.String httpApiName) {
            this.httpApiName = httpApiName;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getHttpApiName}
         * @param httpApiName Property httpApiName: The name of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiName(com.aliyun.ros.cdk.core.IResolvable httpApiName) {
            this.httpApiName = httpApiName;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getProtocols}
         * @param protocols Property protocols: List of API Access Protocols. This parameter is required.
         * @return {@code this}
         */
        public Builder protocols(com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getProtocols}
         * @param protocols Property protocols: List of API Access Protocols. This parameter is required.
         * @return {@code this}
         */
        public Builder protocols(java.util.List<? extends java.lang.Object> protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBasePath}
         * @param basePath Property basePath: The base path of the API should start with a /.
         * @return {@code this}
         */
        public Builder basePath(java.lang.String basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBasePath}
         * @param basePath Property basePath: The base path of the API should start with a /.
         * @return {@code this}
         */
        public Builder basePath(com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDescription}
         * @param description Property description: Description of API.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDescription}
         * @param description Property description: Description of API.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getType}
         * @param type Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getType}
         * @param type Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HttpApiProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HttpApiProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HttpApiProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpApiProps {
        private final java.lang.Object httpApiName;
        private final java.lang.Object protocols;
        private final java.lang.Object basePath;
        private final java.lang.Object description;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.httpApiName = software.amazon.jsii.Kernel.get(this, "httpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocols = software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.basePath = software.amazon.jsii.Kernel.get(this, "basePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.httpApiName = java.util.Objects.requireNonNull(builder.httpApiName, "httpApiName is required");
            this.protocols = java.util.Objects.requireNonNull(builder.protocols, "protocols is required");
            this.basePath = builder.basePath;
            this.description = builder.description;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getHttpApiName() {
            return this.httpApiName;
        }

        @Override
        public final java.lang.Object getProtocols() {
            return this.protocols;
        }

        @Override
        public final java.lang.Object getBasePath() {
            return this.basePath;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("httpApiName", om.valueToTree(this.getHttpApiName()));
            data.set("protocols", om.valueToTree(this.getProtocols()));
            if (this.getBasePath() != null) {
                data.set("basePath", om.valueToTree(this.getBasePath()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.HttpApiProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HttpApiProps.Jsii$Proxy that = (HttpApiProps.Jsii$Proxy) o;

            if (!httpApiName.equals(that.httpApiName)) return false;
            if (!protocols.equals(that.protocols)) return false;
            if (this.basePath != null ? !this.basePath.equals(that.basePath) : that.basePath != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.httpApiName.hashCode();
            result = 31 * result + (this.protocols.hashCode());
            result = 31 * result + (this.basePath != null ? this.basePath.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}

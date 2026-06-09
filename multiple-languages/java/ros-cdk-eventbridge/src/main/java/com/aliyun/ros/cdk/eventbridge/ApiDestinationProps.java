package com.aliyun.ros.cdk.eventbridge;

/**
 * Properties for defining a <code>ApiDestination</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.386Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.ApiDestinationProps")
@software.amazon.jsii.Jsii.Proxy(ApiDestinationProps.Jsii$Proxy.class)
public interface ApiDestinationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiDestinationName: The name of the api.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiDestinationName();

    /**
     * Property connectionName: The connection configuration name.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     * <p>
     * <ul>
     * <li>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionName();

    /**
     * Property httpApiParameters: Configuration information for API endpoints.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiParameters();

    /**
     * Property description: The description of the api.
     * <p>
     * It must be no more than 255 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApiDestinationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApiDestinationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApiDestinationProps> {
        java.lang.Object apiDestinationName;
        java.lang.Object connectionName;
        java.lang.Object httpApiParameters;
        java.lang.Object description;

        /**
         * Sets the value of {@link ApiDestinationProps#getApiDestinationName}
         * @param apiDestinationName Property apiDestinationName: The name of the api. This parameter is required.
         *                           The maximum length is 127 characters. Minimum length 2 characters.
         * @return {@code this}
         */
        public Builder apiDestinationName(java.lang.String apiDestinationName) {
            this.apiDestinationName = apiDestinationName;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getApiDestinationName}
         * @param apiDestinationName Property apiDestinationName: The name of the api. This parameter is required.
         *                           The maximum length is 127 characters. Minimum length 2 characters.
         * @return {@code this}
         */
        public Builder apiDestinationName(com.aliyun.ros.cdk.core.IResolvable apiDestinationName) {
            this.apiDestinationName = apiDestinationName;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getConnectionName}
         * @param connectionName Property connectionName: The connection configuration name. This parameter is required.
         *                       The maximum length is 127 characters. Minimum length 2 characters.
         *                       <p>
         *                       <ul>
         *                       <li>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder connectionName(java.lang.String connectionName) {
            this.connectionName = connectionName;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getConnectionName}
         * @param connectionName Property connectionName: The connection configuration name. This parameter is required.
         *                       The maximum length is 127 characters. Minimum length 2 characters.
         *                       <p>
         *                       <ul>
         *                       <li>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder connectionName(com.aliyun.ros.cdk.core.IResolvable connectionName) {
            this.connectionName = connectionName;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getHttpApiParameters}
         * @param httpApiParameters Property httpApiParameters: Configuration information for API endpoints. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiParameters(com.aliyun.ros.cdk.core.IResolvable httpApiParameters) {
            this.httpApiParameters = httpApiParameters;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getHttpApiParameters}
         * @param httpApiParameters Property httpApiParameters: Configuration information for API endpoints. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiParameters(com.aliyun.ros.cdk.eventbridge.RosApiDestination.HttpApiParametersProperty httpApiParameters) {
            this.httpApiParameters = httpApiParameters;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getDescription}
         * @param description Property description: The description of the api.
         *                    It must be no more than 255 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ApiDestinationProps#getDescription}
         * @param description Property description: The description of the api.
         *                    It must be no more than 255 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApiDestinationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApiDestinationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApiDestinationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApiDestinationProps {
        private final java.lang.Object apiDestinationName;
        private final java.lang.Object connectionName;
        private final java.lang.Object httpApiParameters;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiDestinationName = software.amazon.jsii.Kernel.get(this, "apiDestinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionName = software.amazon.jsii.Kernel.get(this, "connectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpApiParameters = software.amazon.jsii.Kernel.get(this, "httpApiParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiDestinationName = java.util.Objects.requireNonNull(builder.apiDestinationName, "apiDestinationName is required");
            this.connectionName = java.util.Objects.requireNonNull(builder.connectionName, "connectionName is required");
            this.httpApiParameters = java.util.Objects.requireNonNull(builder.httpApiParameters, "httpApiParameters is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getApiDestinationName() {
            return this.apiDestinationName;
        }

        @Override
        public final java.lang.Object getConnectionName() {
            return this.connectionName;
        }

        @Override
        public final java.lang.Object getHttpApiParameters() {
            return this.httpApiParameters;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiDestinationName", om.valueToTree(this.getApiDestinationName()));
            data.set("connectionName", om.valueToTree(this.getConnectionName()));
            data.set("httpApiParameters", om.valueToTree(this.getHttpApiParameters()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.ApiDestinationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApiDestinationProps.Jsii$Proxy that = (ApiDestinationProps.Jsii$Proxy) o;

            if (!apiDestinationName.equals(that.apiDestinationName)) return false;
            if (!connectionName.equals(that.connectionName)) return false;
            if (!httpApiParameters.equals(that.httpApiParameters)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiDestinationName.hashCode();
            result = 31 * result + (this.connectionName.hashCode());
            result = 31 * result + (this.httpApiParameters.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.assembly.schema;

/**
 * Options for configuring the Docker cache backend.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.DockerCacheOption")
@software.amazon.jsii.Jsii.Proxy(DockerCacheOption.Jsii$Proxy.class)
public interface DockerCacheOption extends software.amazon.jsii.JsiiSerializable {

    /**
     * The type of cache to use.
     * <p>
     * Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.
     * <p>
     * Default: - unspecified
     * <p>
     * Example:
     * <p>
     * <blockquote><pre>
     * 'registry'
     * </pre></blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.String getType();

    /**
     * Any parameters to pass into the docker cache backend configuration.
     * <p>
     * Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
     * <p>
     * Default: {} No options provided
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getParams() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerCacheOption}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerCacheOption}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerCacheOption> {
        java.lang.String type;
        java.util.Map<java.lang.String, java.lang.String> params;

        /**
         * Sets the value of {@link DockerCacheOption#getType}
         * @param type The type of cache to use. This parameter is required.
         *             Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DockerCacheOption#getParams}
         * @param params Any parameters to pass into the docker cache backend configuration.
         *               Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
         * @return {@code this}
         */
        public Builder params(java.util.Map<java.lang.String, java.lang.String> params) {
            this.params = params;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerCacheOption}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerCacheOption build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerCacheOption}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerCacheOption {
        private final java.lang.String type;
        private final java.util.Map<java.lang.String, java.lang.String> params;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.params = software.amazon.jsii.Kernel.get(this, "params", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.params = builder.params;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getParams() {
            return this.params;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            if (this.getParams() != null) {
                data.set("params", om.valueToTree(this.getParams()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.DockerCacheOption"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerCacheOption.Jsii$Proxy that = (DockerCacheOption.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            return this.params != null ? this.params.equals(that.params) : that.params == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.params != null ? this.params.hashCode() : 0);
            return result;
        }
    }
}

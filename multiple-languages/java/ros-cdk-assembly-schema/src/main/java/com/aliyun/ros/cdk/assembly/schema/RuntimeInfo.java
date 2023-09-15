package com.aliyun.ros.cdk.assembly.schema;

/**
 * Information about the application's runtime components.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.023Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.RuntimeInfo")
@software.amazon.jsii.Jsii.Proxy(RuntimeInfo.Jsii$Proxy.class)
public interface RuntimeInfo extends software.amazon.jsii.JsiiSerializable {

    /**
     * The list of libraries loaded in the application, associated with their versions.
     */
    @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.String> getLibraries();

    /**
     * @return a {@link Builder} of {@link RuntimeInfo}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuntimeInfo}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuntimeInfo> {
        java.util.Map<java.lang.String, java.lang.String> libraries;

        /**
         * Sets the value of {@link RuntimeInfo#getLibraries}
         * @param libraries The list of libraries loaded in the application, associated with their versions. This parameter is required.
         * @return {@code this}
         */
        public Builder libraries(java.util.Map<java.lang.String, java.lang.String> libraries) {
            this.libraries = libraries;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuntimeInfo}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuntimeInfo build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RuntimeInfo}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuntimeInfo {
        private final java.util.Map<java.lang.String, java.lang.String> libraries;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.libraries = software.amazon.jsii.Kernel.get(this, "libraries", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.libraries = java.util.Objects.requireNonNull(builder.libraries, "libraries is required");
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getLibraries() {
            return this.libraries;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("libraries", om.valueToTree(this.getLibraries()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.RuntimeInfo"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuntimeInfo.Jsii$Proxy that = (RuntimeInfo.Jsii$Proxy) o;

            return this.libraries.equals(that.libraries);
        }

        @Override
        public final int hashCode() {
            int result = this.libraries.hashCode();
            return result;
        }
    }
}

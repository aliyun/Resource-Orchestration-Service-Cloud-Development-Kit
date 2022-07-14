package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.104Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosMappingProps")
@software.amazon.jsii.Jsii.Proxy(RosMappingProps.Jsii$Proxy.class)
public interface RosMappingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Mapping of key to a set of corresponding set of named values.
     * <p>
     * The key identifies a map of name-value pairs and must be unique within the mapping.
     * <p>
     * For example, if you want to set values based on a region, you can create a mapping
     * that uses the region name as a key and contains the values you want to specify for
     * each specific region.
     * <p>
     * Default: - No mapping.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> getMapping() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMappingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMappingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMappingProps> {
        java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> mapping;

        /**
         * Sets the value of {@link RosMappingProps#getMapping}
         * @param mapping Mapping of key to a set of corresponding set of named values.
         *                The key identifies a map of name-value pairs and must be unique within the mapping.
         *                <p>
         *                For example, if you want to set values based on a region, you can create a mapping
         *                that uses the region name as a key and contains the values you want to specify for
         *                each specific region.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder mapping(java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> mapping) {
            this.mapping = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>>)mapping;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMappingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMappingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMappingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMappingProps {
        private final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> mapping;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.mapping = software.amazon.jsii.Kernel.get(this, "mapping", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.mapping = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>>)builder.mapping;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> getMapping() {
            return this.mapping;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getMapping() != null) {
                data.set("mapping", om.valueToTree(this.getMapping()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosMappingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMappingProps.Jsii$Proxy that = (RosMappingProps.Jsii$Proxy) o;

            return this.mapping != null ? this.mapping.equals(that.mapping) : that.mapping == null;
        }

        @Override
        public final int hashCode() {
            int result = this.mapping != null ? this.mapping.hashCode() : 0;
            return result;
        }
    }
}

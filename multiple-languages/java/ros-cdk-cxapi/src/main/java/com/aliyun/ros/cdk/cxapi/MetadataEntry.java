package com.aliyun.ros.cdk.cxapi;

/**
 * (deprecated) Backwards compatibility for when 'MetadataEntry' was defined here.
 * <p>
 * This is necessary because its used as an input in the stable
 * <p>
 * @see <a href="core.ConstructNode.metadata">core.ConstructNode.metadata</a>
 * @deprecated moved to package 'ros-assembly-schema'
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.MetadataEntry")
@software.amazon.jsii.Jsii.Proxy(MetadataEntry.Jsii$Proxy.class)
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
@Deprecated
public interface MetadataEntry extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.assembly.schema.MetadataEntry {

    /**
     * @return a {@link Builder} of {@link MetadataEntry}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MetadataEntry}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static final class Builder implements software.amazon.jsii.Builder<MetadataEntry> {
        java.lang.String type;
        java.lang.Object data;
        java.util.List<java.lang.String> trace;

        /**
         * Sets the value of {@link MetadataEntry#getType}
         * @param type The type of the metadata entry. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntry#getData}
         * @param data The data.
         * @return {@code this}
         */
        public Builder data(java.lang.String data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntry#getData}
         * @param data The data.
         * @return {@code this}
         */
        public Builder data(java.util.List<? extends com.aliyun.ros.cdk.assembly.schema.Tag> data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntry#getTrace}
         * @param trace A stack trace for when the entry was created.
         * @return {@code this}
         */
        public Builder trace(java.util.List<java.lang.String> trace) {
            this.trace = trace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MetadataEntry}
         * @throws NullPointerException if any required attribute was not provided
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        @Override
        public MetadataEntry build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MetadataEntry}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetadataEntry {
        private final java.lang.String type;
        private final java.lang.Object data;
        private final java.util.List<java.lang.String> trace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.data = software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trace = software.amazon.jsii.Kernel.get(this, "trace", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.data = builder.data;
            this.trace = builder.trace;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getData() {
            return this.data;
        }

        @Override
        public final java.util.List<java.lang.String> getTrace() {
            return this.trace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            if (this.getData() != null) {
                data.set("data", om.valueToTree(this.getData()));
            }
            if (this.getTrace() != null) {
                data.set("trace", om.valueToTree(this.getTrace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.MetadataEntry"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MetadataEntry.Jsii$Proxy that = (MetadataEntry.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            if (this.data != null ? !this.data.equals(that.data) : that.data != null) return false;
            return this.trace != null ? this.trace.equals(that.trace) : that.trace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.data != null ? this.data.hashCode() : 0);
            result = 31 * result + (this.trace != null ? this.trace.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.679Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.MetadataEntryResult")
@software.amazon.jsii.Jsii.Proxy(MetadataEntryResult.Jsii$Proxy.class)
public interface MetadataEntryResult extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.assembly.schema.MetadataEntry {

    /**
     * The path in which this entry was defined.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPath();

    /**
     * @return a {@link Builder} of {@link MetadataEntryResult}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MetadataEntryResult}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MetadataEntryResult> {
        java.lang.String path;
        java.lang.String type;
        java.lang.Object data;
        java.util.List<java.lang.String> trace;

        /**
         * Sets the value of {@link MetadataEntryResult#getPath}
         * @param path The path in which this entry was defined. This parameter is required.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntryResult#getType}
         * @param type The type of the metadata entry. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntryResult#getData}
         * @param data The data.
         * @return {@code this}
         */
        public Builder data(java.lang.String data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntryResult#getData}
         * @param data The data.
         * @return {@code this}
         */
        public Builder data(java.util.List<? extends com.aliyun.ros.cdk.assembly.schema.Tag> data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link MetadataEntryResult#getTrace}
         * @param trace A stack trace for when the entry was created.
         * @return {@code this}
         */
        public Builder trace(java.util.List<java.lang.String> trace) {
            this.trace = trace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MetadataEntryResult}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MetadataEntryResult build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MetadataEntryResult}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetadataEntryResult {
        private final java.lang.String path;
        private final java.lang.String type;
        private final java.lang.Object data;
        private final java.util.List<java.lang.String> trace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.data = software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trace = software.amazon.jsii.Kernel.get(this, "trace", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.data = builder.data;
            this.trace = builder.trace;
        }

        @Override
        public final java.lang.String getPath() {
            return this.path;
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

            data.set("path", om.valueToTree(this.getPath()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getData() != null) {
                data.set("data", om.valueToTree(this.getData()));
            }
            if (this.getTrace() != null) {
                data.set("trace", om.valueToTree(this.getTrace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.MetadataEntryResult"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MetadataEntryResult.Jsii$Proxy that = (MetadataEntryResult.Jsii$Proxy) o;

            if (!path.equals(that.path)) return false;
            if (!type.equals(that.type)) return false;
            if (this.data != null ? !this.data.equals(that.data) : that.data != null) return false;
            return this.trace != null ? this.trace.equals(that.trace) : that.trace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.path.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.data != null ? this.data.hashCode() : 0);
            result = 31 * result + (this.trace != null ? this.trace.hashCode() : 0);
            return result;
        }
    }
}

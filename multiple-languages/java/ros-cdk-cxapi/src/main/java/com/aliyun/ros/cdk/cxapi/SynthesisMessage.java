package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:07.278Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.SynthesisMessage")
@software.amazon.jsii.Jsii.Proxy(SynthesisMessage.Jsii$Proxy.class)
public interface SynthesisMessage extends software.amazon.jsii.JsiiSerializable {

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.MetadataEntry getEntry();

    @org.jetbrains.annotations.NotNull java.lang.String getId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel getLevel();

    /**
     * @return a {@link Builder} of {@link SynthesisMessage}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SynthesisMessage}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SynthesisMessage> {
        private com.aliyun.ros.cdk.assembly.schema.MetadataEntry entry;
        private java.lang.String id;
        private com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel level;

        /**
         * Sets the value of {@link SynthesisMessage#getEntry}
         * @param entry the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entry(com.aliyun.ros.cdk.assembly.schema.MetadataEntry entry) {
            this.entry = entry;
            return this;
        }

        /**
         * Sets the value of {@link SynthesisMessage#getId}
         * @param id the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder id(java.lang.String id) {
            this.id = id;
            return this;
        }

        /**
         * Sets the value of {@link SynthesisMessage#getLevel}
         * @param level the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder level(com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel level) {
            this.level = level;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SynthesisMessage}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SynthesisMessage build() {
            return new Jsii$Proxy(entry, id, level);
        }
    }

    /**
     * An implementation for {@link SynthesisMessage}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynthesisMessage {
        private final com.aliyun.ros.cdk.assembly.schema.MetadataEntry entry;
        private final java.lang.String id;
        private final com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel level;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.entry = software.amazon.jsii.Kernel.get(this, "entry", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.MetadataEntry.class));
            this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final com.aliyun.ros.cdk.assembly.schema.MetadataEntry entry, final java.lang.String id, final com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel level) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.entry = java.util.Objects.requireNonNull(entry, "entry is required");
            this.id = java.util.Objects.requireNonNull(id, "id is required");
            this.level = java.util.Objects.requireNonNull(level, "level is required");
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.MetadataEntry getEntry() {
            return this.entry;
        }

        @Override
        public final java.lang.String getId() {
            return this.id;
        }

        @Override
        public final com.aliyun.ros.cdk.cxapi.SynthesisMessageLevel getLevel() {
            return this.level;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("entry", om.valueToTree(this.getEntry()));
            data.set("id", om.valueToTree(this.getId()));
            data.set("level", om.valueToTree(this.getLevel()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.SynthesisMessage"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SynthesisMessage.Jsii$Proxy that = (SynthesisMessage.Jsii$Proxy) o;

            if (!entry.equals(that.entry)) return false;
            if (!id.equals(that.id)) return false;
            return this.level.equals(that.level);
        }

        @Override
        public final int hashCode() {
            int result = this.entry.hashCode();
            result = 31 * result + (this.id.hashCode());
            result = 31 * result + (this.level.hashCode());
            return result;
        }
    }
}

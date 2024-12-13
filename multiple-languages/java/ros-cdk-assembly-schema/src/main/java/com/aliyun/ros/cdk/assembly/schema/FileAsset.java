package com.aliyun.ros.cdk.assembly.schema;

/**
 * A file asset.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:03.550Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.FileAsset")
@software.amazon.jsii.Jsii.Proxy(FileAsset.Jsii$Proxy.class)
public interface FileAsset extends software.amazon.jsii.JsiiSerializable {

    /**
     * Destinations for this file asset.
     */
    @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination> getDestinations();

    /**
     * Source description for file assets.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.FileSource getSource();

    /**
     * @return a {@link Builder} of {@link FileAsset}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileAsset}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileAsset> {
        java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination> destinations;
        com.aliyun.ros.cdk.assembly.schema.FileSource source;

        /**
         * Sets the value of {@link FileAsset#getDestinations}
         * @param destinations Destinations for this file asset. This parameter is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder destinations(java.util.Map<java.lang.String, ? extends com.aliyun.ros.cdk.assembly.schema.FileDestination> destinations) {
            this.destinations = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination>)destinations;
            return this;
        }

        /**
         * Sets the value of {@link FileAsset#getSource}
         * @param source Source description for file assets. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.assembly.schema.FileSource source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileAsset}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileAsset build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileAsset}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileAsset {
        private final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination> destinations;
        private final com.aliyun.ros.cdk.assembly.schema.FileSource source;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinations = software.amazon.jsii.Kernel.get(this, "destinations", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileDestination.class)));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileSource.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinations = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination>)java.util.Objects.requireNonNull(builder.destinations, "destinations is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
        }

        @Override
        public final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileDestination> getDestinations() {
            return this.destinations;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.FileSource getSource() {
            return this.source;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinations", om.valueToTree(this.getDestinations()));
            data.set("source", om.valueToTree(this.getSource()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.FileAsset"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileAsset.Jsii$Proxy that = (FileAsset.Jsii$Proxy) o;

            if (!destinations.equals(that.destinations)) return false;
            return this.source.equals(that.source);
        }

        @Override
        public final int hashCode() {
            int result = this.destinations.hashCode();
            result = 31 * result + (this.source.hashCode());
            return result;
        }
    }
}

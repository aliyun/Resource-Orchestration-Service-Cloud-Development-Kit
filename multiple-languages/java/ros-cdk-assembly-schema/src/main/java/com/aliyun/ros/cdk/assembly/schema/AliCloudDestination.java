package com.aliyun.ros.cdk.assembly.schema;

/**
 * Destination for assets that need to be uploaded to AliCloud.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.088Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.AliCloudDestination")
@software.amazon.jsii.Jsii.Proxy(AliCloudDestination.Jsii$Proxy.class)
public interface AliCloudDestination extends software.amazon.jsii.JsiiSerializable {

    /**
     * The region where this asset will need to be published.
     * <p>
     * Default: - Current region
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AliCloudDestination}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AliCloudDestination}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AliCloudDestination> {
        java.lang.String region;

        /**
         * Sets the value of {@link AliCloudDestination#getRegion}
         * @param region The region where this asset will need to be published.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AliCloudDestination}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AliCloudDestination build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AliCloudDestination}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AliCloudDestination {
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.AliCloudDestination"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AliCloudDestination.Jsii$Proxy that = (AliCloudDestination.Jsii$Proxy) o;

            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.region != null ? this.region.hashCode() : 0;
            return result;
        }
    }
}

package com.aliyun.ros.cdk.cxapi;

/**
 * Return the appropriate values for the environment placeholders.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues")
@software.amazon.jsii.Jsii.Proxy(EnvironmentPlaceholderValues.Jsii$Proxy.class)
public interface EnvironmentPlaceholderValues extends software.amazon.jsii.JsiiSerializable {

    /**
     * Return the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccountId();

    /**
     * Return the region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * @return a {@link Builder} of {@link EnvironmentPlaceholderValues}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnvironmentPlaceholderValues}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnvironmentPlaceholderValues> {
        java.lang.String accountId;
        java.lang.String region;

        /**
         * Sets the value of {@link EnvironmentPlaceholderValues#getAccountId}
         * @param accountId Return the account. This parameter is required.
         * @return {@code this}
         */
        public Builder accountId(java.lang.String accountId) {
            this.accountId = accountId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentPlaceholderValues#getRegion}
         * @param region Return the region. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnvironmentPlaceholderValues}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnvironmentPlaceholderValues build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnvironmentPlaceholderValues}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentPlaceholderValues {
        private final java.lang.String accountId;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountId = software.amazon.jsii.Kernel.get(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountId = java.util.Objects.requireNonNull(builder.accountId, "accountId is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
        }

        @Override
        public final java.lang.String getAccountId() {
            return this.accountId;
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

            data.set("accountId", om.valueToTree(this.getAccountId()));
            data.set("region", om.valueToTree(this.getRegion()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnvironmentPlaceholderValues.Jsii$Proxy that = (EnvironmentPlaceholderValues.Jsii$Proxy) o;

            if (!accountId.equals(that.accountId)) return false;
            return this.region.equals(that.region);
        }

        @Override
        public final int hashCode() {
            int result = this.accountId.hashCode();
            result = 31 * result + (this.region.hashCode());
            return result;
        }
    }
}

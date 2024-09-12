package com.aliyun.ros.cdk.cxapi;

/**
 * Models an ALIYUN execution environment, for use within the CDK toolkit.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.433Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.Environment")
@software.amazon.jsii.Jsii.Proxy(Environment.Jsii$Proxy.class)
public interface Environment extends software.amazon.jsii.JsiiSerializable {

    /**
     * The ALIYUN account this environment deploys into.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * The arbitrary name of this environment (user-set, or at least user-meaningful).
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     * The ALIYUN region name where this environment deploys into.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * @return a {@link Builder} of {@link Environment}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Environment}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Environment> {
        java.lang.String account;
        java.lang.String name;
        java.lang.String region;

        /**
         * Sets the value of {@link Environment#getAccount}
         * @param account The ALIYUN account this environment deploys into. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link Environment#getName}
         * @param name The arbitrary name of this environment (user-set, or at least user-meaningful). This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link Environment#getRegion}
         * @param region The ALIYUN region name where this environment deploys into. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Environment}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Environment build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Environment}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Environment {
        private final java.lang.String account;
        private final java.lang.String name;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
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

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("region", om.valueToTree(this.getRegion()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.Environment"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Environment.Jsii$Proxy that = (Environment.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!name.equals(that.name)) return false;
            return this.region.equals(that.region);
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.region.hashCode());
            return result;
        }
    }
}

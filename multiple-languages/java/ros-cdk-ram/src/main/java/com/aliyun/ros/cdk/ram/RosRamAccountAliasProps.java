package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosRamAccountAlias</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.379Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRamAccountAliasProps")
@software.amazon.jsii.Jsii.Proxy(RosRamAccountAliasProps.Jsii$Proxy.class)
public interface RosRamAccountAliasProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountAlias();

    /**
     * @return a {@link Builder} of {@link RosRamAccountAliasProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRamAccountAliasProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRamAccountAliasProps> {
        java.lang.Object accountAlias;

        /**
         * Sets the value of {@link RosRamAccountAliasProps#getAccountAlias}
         * @param accountAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAlias(java.lang.String accountAlias) {
            this.accountAlias = accountAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosRamAccountAliasProps#getAccountAlias}
         * @param accountAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAlias(com.aliyun.ros.cdk.core.IResolvable accountAlias) {
            this.accountAlias = accountAlias;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRamAccountAliasProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRamAccountAliasProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRamAccountAliasProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRamAccountAliasProps {
        private final java.lang.Object accountAlias;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountAlias = software.amazon.jsii.Kernel.get(this, "accountAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountAlias = java.util.Objects.requireNonNull(builder.accountAlias, "accountAlias is required");
        }

        @Override
        public final java.lang.Object getAccountAlias() {
            return this.accountAlias;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountAlias", om.valueToTree(this.getAccountAlias()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRamAccountAliasProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRamAccountAliasProps.Jsii$Proxy that = (RosRamAccountAliasProps.Jsii$Proxy) o;

            return this.accountAlias.equals(that.accountAlias);
        }

        @Override
        public final int hashCode() {
            int result = this.accountAlias.hashCode();
            return result;
        }
    }
}

package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::RamAccountAlias`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:21.588Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RamAccountAliasProps")
@software.amazon.jsii.Jsii.Proxy(RamAccountAliasProps.Jsii$Proxy.class)
public interface RamAccountAliasProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountAlias: The alias of the Alibaba Cloud account.
     * <p>
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountAlias();

    /**
     * @return a {@link Builder} of {@link RamAccountAliasProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RamAccountAliasProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RamAccountAliasProps> {
        java.lang.Object accountAlias;

        /**
         * Sets the value of {@link RamAccountAliasProps#getAccountAlias}
         * @param accountAlias Property accountAlias: The alias of the Alibaba Cloud account. This parameter is required.
         *                     The alias must be 1 to 50 characters in length, and can contain lowercase letters,
         *                     digits, hyphens (-), periods (.) and underscores (_).
         *                     Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
         *                     hyphen (-) and cannot have two consecutive hyphens (-).
         * @return {@code this}
         */
        public Builder accountAlias(java.lang.String accountAlias) {
            this.accountAlias = accountAlias;
            return this;
        }

        /**
         * Sets the value of {@link RamAccountAliasProps#getAccountAlias}
         * @param accountAlias Property accountAlias: The alias of the Alibaba Cloud account. This parameter is required.
         *                     The alias must be 1 to 50 characters in length, and can contain lowercase letters,
         *                     digits, hyphens (-), periods (.) and underscores (_).
         *                     Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
         *                     hyphen (-) and cannot have two consecutive hyphens (-).
         * @return {@code this}
         */
        public Builder accountAlias(com.aliyun.ros.cdk.core.IResolvable accountAlias) {
            this.accountAlias = accountAlias;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RamAccountAliasProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RamAccountAliasProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RamAccountAliasProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RamAccountAliasProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RamAccountAliasProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RamAccountAliasProps.Jsii$Proxy that = (RamAccountAliasProps.Jsii$Proxy) o;

            return this.accountAlias.equals(that.accountAlias);
        }

        @Override
        public final int hashCode() {
            int result = this.accountAlias.hashCode();
            return result;
        }
    }
}

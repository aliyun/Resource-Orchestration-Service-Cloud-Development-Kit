package com.aliyun.ros.cdk.fc.datasource;

/**
 * Properties for defining a <code>CustomDomains</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:10.076Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.CustomDomainsProps")
@software.amazon.jsii.Jsii.Proxy(CustomDomainsProps.Jsii$Proxy.class)
public interface CustomDomainsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
     * <p>
     * For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomDomainsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomDomainsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomDomainsProps> {
        java.lang.Object prefix;

        /**
         * Sets the value of {@link CustomDomainsProps#getPrefix}
         * @param prefix Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
         *               For example, if the Prefix is "a", the returned custom domain names should be started with "a".
         * @return {@code this}
         */
        public Builder prefix(java.lang.String prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainsProps#getPrefix}
         * @param prefix Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
         *               For example, if the Prefix is "a", the returned custom domain names should be started with "a".
         * @return {@code this}
         */
        public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomDomainsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomDomainsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomDomainsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDomainsProps {
        private final java.lang.Object prefix;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.prefix = builder.prefix;
        }

        @Override
        public final java.lang.Object getPrefix() {
            return this.prefix;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getPrefix() != null) {
                data.set("prefix", om.valueToTree(this.getPrefix()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.datasource.CustomDomainsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomDomainsProps.Jsii$Proxy that = (CustomDomainsProps.Jsii$Proxy) o;

            return this.prefix != null ? this.prefix.equals(that.prefix) : that.prefix == null;
        }

        @Override
        public final int hashCode() {
            int result = this.prefix != null ? this.prefix.hashCode() : 0;
            return result;
        }
    }
}

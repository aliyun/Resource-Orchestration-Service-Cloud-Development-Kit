package com.aliyun.ros.cdk.directmail;

/**
 * Properties for defining a <code>ALIYUN::DirectMail::Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.453Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.DomainProps")
@software.amazon.jsii.Jsii.Proxy(DomainProps.Jsii$Proxy.class)
public interface DomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainName: The name of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * @return a {@link Builder} of {@link DomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainProps> {
        java.lang.Object domainName;

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName Property domainName: The name of the domain. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName Property domainName: The name of the domain. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainProps {
        private final java.lang.Object domainName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-directmail.DomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainProps.Jsii$Proxy that = (DomainProps.Jsii$Proxy) o;

            return this.domainName.equals(that.domainName);
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            return result;
        }
    }
}

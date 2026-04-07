package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>CustomLine</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.926Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.CustomLineProps")
@software.amazon.jsii.Jsii.Proxy(CustomLineProps.Jsii$Proxy.class)
public interface CustomLineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainName: The domain name associated with the custom line.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * Property ipSegment: The list of IP segments for the custom line.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpSegment();

    /**
     * Property lineName: The name of the custom line.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLineName();

    /**
     * @return a {@link Builder} of {@link CustomLineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomLineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomLineProps> {
        java.lang.Object domainName;
        java.lang.Object ipSegment;
        java.lang.Object lineName;

        /**
         * Sets the value of {@link CustomLineProps#getDomainName}
         * @param domainName Property domainName: The domain name associated with the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomLineProps#getDomainName}
         * @param domainName Property domainName: The domain name associated with the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomLineProps#getIpSegment}
         * @param ipSegment Property ipSegment: The list of IP segments for the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder ipSegment(com.aliyun.ros.cdk.core.IResolvable ipSegment) {
            this.ipSegment = ipSegment;
            return this;
        }

        /**
         * Sets the value of {@link CustomLineProps#getIpSegment}
         * @param ipSegment Property ipSegment: The list of IP segments for the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder ipSegment(java.util.List<? extends java.lang.Object> ipSegment) {
            this.ipSegment = ipSegment;
            return this;
        }

        /**
         * Sets the value of {@link CustomLineProps#getLineName}
         * @param lineName Property lineName: The name of the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder lineName(java.lang.String lineName) {
            this.lineName = lineName;
            return this;
        }

        /**
         * Sets the value of {@link CustomLineProps#getLineName}
         * @param lineName Property lineName: The name of the custom line. This parameter is required.
         * @return {@code this}
         */
        public Builder lineName(com.aliyun.ros.cdk.core.IResolvable lineName) {
            this.lineName = lineName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomLineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomLineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomLineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomLineProps {
        private final java.lang.Object domainName;
        private final java.lang.Object ipSegment;
        private final java.lang.Object lineName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipSegment = software.amazon.jsii.Kernel.get(this, "ipSegment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lineName = software.amazon.jsii.Kernel.get(this, "lineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.ipSegment = java.util.Objects.requireNonNull(builder.ipSegment, "ipSegment is required");
            this.lineName = java.util.Objects.requireNonNull(builder.lineName, "lineName is required");
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getIpSegment() {
            return this.ipSegment;
        }

        @Override
        public final java.lang.Object getLineName() {
            return this.lineName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("ipSegment", om.valueToTree(this.getIpSegment()));
            data.set("lineName", om.valueToTree(this.getLineName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.CustomLineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomLineProps.Jsii$Proxy that = (CustomLineProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!ipSegment.equals(that.ipSegment)) return false;
            return this.lineName.equals(that.lineName);
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.ipSegment.hashCode());
            result = 31 * result + (this.lineName.hashCode());
            return result;
        }
    }
}

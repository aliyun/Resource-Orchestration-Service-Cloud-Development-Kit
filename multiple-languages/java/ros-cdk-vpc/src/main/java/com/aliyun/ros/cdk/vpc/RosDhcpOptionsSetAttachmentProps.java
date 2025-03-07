package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosDhcpOptionsSetAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.385Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosDhcpOptionsSetAttachmentProps.Jsii$Proxy.class)
public interface RosDhcpOptionsSetAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDhcpOptionsSetId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * @return a {@link Builder} of {@link RosDhcpOptionsSetAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDhcpOptionsSetAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDhcpOptionsSetAttachmentProps> {
        java.lang.Object dhcpOptionsSetId;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosDhcpOptionsSetAttachmentProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(java.lang.String dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDhcpOptionsSetAttachmentProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDhcpOptionsSetAttachmentProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDhcpOptionsSetAttachmentProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDhcpOptionsSetAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDhcpOptionsSetAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDhcpOptionsSetAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDhcpOptionsSetAttachmentProps {
        private final java.lang.Object dhcpOptionsSetId;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dhcpOptionsSetId = software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dhcpOptionsSetId = java.util.Objects.requireNonNull(builder.dhcpOptionsSetId, "dhcpOptionsSetId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
        }

        @Override
        public final java.lang.Object getDhcpOptionsSetId() {
            return this.dhcpOptionsSetId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dhcpOptionsSetId", om.valueToTree(this.getDhcpOptionsSetId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDhcpOptionsSetAttachmentProps.Jsii$Proxy that = (RosDhcpOptionsSetAttachmentProps.Jsii$Proxy) o;

            if (!dhcpOptionsSetId.equals(that.dhcpOptionsSetId)) return false;
            return this.vpcId.equals(that.vpcId);
        }

        @Override
        public final int hashCode() {
            int result = this.dhcpOptionsSetId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            return result;
        }
    }
}

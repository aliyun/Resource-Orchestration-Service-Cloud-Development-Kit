package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::BgpNetwork`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:58.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosBgpNetworkProps")
@software.amazon.jsii.Jsii.Proxy(RosBgpNetworkProps.Jsii$Proxy.class)
public interface RosBgpNetworkProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDstCidrBlock();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterId();

    /**
     * @return a {@link Builder} of {@link RosBgpNetworkProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBgpNetworkProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBgpNetworkProps> {
        java.lang.Object dstCidrBlock;
        java.lang.Object routerId;

        /**
         * Sets the value of {@link RosBgpNetworkProps#getDstCidrBlock}
         * @param dstCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dstCidrBlock(java.lang.String dstCidrBlock) {
            this.dstCidrBlock = dstCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpNetworkProps#getDstCidrBlock}
         * @param dstCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dstCidrBlock(com.aliyun.ros.cdk.core.IResolvable dstCidrBlock) {
            this.dstCidrBlock = dstCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpNetworkProps#getRouterId}
         * @param routerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpNetworkProps#getRouterId}
         * @param routerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBgpNetworkProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBgpNetworkProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBgpNetworkProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBgpNetworkProps {
        private final java.lang.Object dstCidrBlock;
        private final java.lang.Object routerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dstCidrBlock = software.amazon.jsii.Kernel.get(this, "dstCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dstCidrBlock = java.util.Objects.requireNonNull(builder.dstCidrBlock, "dstCidrBlock is required");
            this.routerId = java.util.Objects.requireNonNull(builder.routerId, "routerId is required");
        }

        @Override
        public final java.lang.Object getDstCidrBlock() {
            return this.dstCidrBlock;
        }

        @Override
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dstCidrBlock", om.valueToTree(this.getDstCidrBlock()));
            data.set("routerId", om.valueToTree(this.getRouterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosBgpNetworkProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBgpNetworkProps.Jsii$Proxy that = (RosBgpNetworkProps.Jsii$Proxy) o;

            if (!dstCidrBlock.equals(that.dstCidrBlock)) return false;
            return this.routerId.equals(that.routerId);
        }

        @Override
        public final int hashCode() {
            int result = this.dstCidrBlock.hashCode();
            result = 31 * result + (this.routerId.hashCode());
            return result;
        }
    }
}

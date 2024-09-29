package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVpcIpv6CidrAllocation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.146Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpcIpv6CidrAllocationProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcIpv6CidrAllocationProps.Jsii$Proxy.class)
public interface RosVpcIpv6CidrAllocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressPoolType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6CidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpcIpv6CidrAllocationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcIpv6CidrAllocationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcIpv6CidrAllocationProps> {
        java.lang.Object addressPoolType;
        java.lang.Object ipv6CidrBlock;
        java.lang.Object ipv6Isp;

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getAddressPoolType}
         * @param addressPoolType the value to be set.
         * @return {@code this}
         */
        public Builder addressPoolType(java.lang.String addressPoolType) {
            this.addressPoolType = addressPoolType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getAddressPoolType}
         * @param addressPoolType the value to be set.
         * @return {@code this}
         */
        public Builder addressPoolType(com.aliyun.ros.cdk.core.IResolvable addressPoolType) {
            this.addressPoolType = addressPoolType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.String ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getIpv6Isp}
         * @param ipv6Isp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Isp(java.lang.String ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcIpv6CidrAllocationProps#getIpv6Isp}
         * @param ipv6Isp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Isp(com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcIpv6CidrAllocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcIpv6CidrAllocationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcIpv6CidrAllocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcIpv6CidrAllocationProps {
        private final java.lang.Object addressPoolType;
        private final java.lang.Object ipv6CidrBlock;
        private final java.lang.Object ipv6Isp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressPoolType = software.amazon.jsii.Kernel.get(this, "addressPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Isp = software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressPoolType = builder.addressPoolType;
            this.ipv6CidrBlock = builder.ipv6CidrBlock;
            this.ipv6Isp = builder.ipv6Isp;
        }

        @Override
        public final java.lang.Object getAddressPoolType() {
            return this.addressPoolType;
        }

        @Override
        public final java.lang.Object getIpv6CidrBlock() {
            return this.ipv6CidrBlock;
        }

        @Override
        public final java.lang.Object getIpv6Isp() {
            return this.ipv6Isp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressPoolType() != null) {
                data.set("addressPoolType", om.valueToTree(this.getAddressPoolType()));
            }
            if (this.getIpv6CidrBlock() != null) {
                data.set("ipv6CidrBlock", om.valueToTree(this.getIpv6CidrBlock()));
            }
            if (this.getIpv6Isp() != null) {
                data.set("ipv6Isp", om.valueToTree(this.getIpv6Isp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpcIpv6CidrAllocationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcIpv6CidrAllocationProps.Jsii$Proxy that = (RosVpcIpv6CidrAllocationProps.Jsii$Proxy) o;

            if (this.addressPoolType != null ? !this.addressPoolType.equals(that.addressPoolType) : that.addressPoolType != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            return this.ipv6Isp != null ? this.ipv6Isp.equals(that.ipv6Isp) : that.ipv6Isp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressPoolType != null ? this.addressPoolType.hashCode() : 0;
            result = 31 * result + (this.ipv6CidrBlock != null ? this.ipv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.ipv6Isp != null ? this.ipv6Isp.hashCode() : 0);
            return result;
        }
    }
}

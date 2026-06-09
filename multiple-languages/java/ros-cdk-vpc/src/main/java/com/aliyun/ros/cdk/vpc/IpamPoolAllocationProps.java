package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>IpamPoolAllocation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamPoolAllocationProps")
@software.amazon.jsii.Jsii.Proxy(IpamPoolAllocationProps.Jsii$Proxy.class)
public interface IpamPoolAllocationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipamPoolId: The ID of the IPAM Pool.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpamPoolId();

    /**
     * Property cidr: The allocated address segment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidr() {
        return null;
    }

    /**
     * Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
     * <p>
     * <blockquote>
     * <p>
     * Enter at least one of <strong>Cidr</strong> or **CidrMask.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrMask() {
        return null;
    }

    /**
     * Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
     * <p>
     * It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolAllocationDescription() {
        return null;
    }

    /**
     * Property ipamPoolAllocationName: The name of the ipam pool allocation.
     * <p>
     * It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolAllocationName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IpamPoolAllocationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IpamPoolAllocationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IpamPoolAllocationProps> {
        java.lang.Object ipamPoolId;
        java.lang.Object cidr;
        java.lang.Object cidrMask;
        java.lang.Object ipamPoolAllocationDescription;
        java.lang.Object ipamPoolAllocationName;

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolId}
         * @param ipamPoolId Property ipamPoolId: The ID of the IPAM Pool. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamPoolId(java.lang.String ipamPoolId) {
            this.ipamPoolId = ipamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolId}
         * @param ipamPoolId Property ipamPoolId: The ID of the IPAM Pool. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamPoolId(com.aliyun.ros.cdk.core.IResolvable ipamPoolId) {
            this.ipamPoolId = ipamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getCidr}
         * @param cidr Property cidr: The allocated address segment.
         * @return {@code this}
         */
        public Builder cidr(java.lang.String cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getCidr}
         * @param cidr Property cidr: The allocated address segment.
         * @return {@code this}
         */
        public Builder cidr(com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getCidrMask}
         * @param cidrMask Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
         *                 <blockquote>
         *                 <p>
         *                 Enter at least one of <strong>Cidr</strong> or **CidrMask.
         *                 <p>
         *                 </blockquote>
         * @return {@code this}
         */
        public Builder cidrMask(java.lang.Number cidrMask) {
            this.cidrMask = cidrMask;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getCidrMask}
         * @param cidrMask Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
         *                 <blockquote>
         *                 <p>
         *                 Enter at least one of <strong>Cidr</strong> or **CidrMask.
         *                 <p>
         *                 </blockquote>
         * @return {@code this}
         */
        public Builder cidrMask(com.aliyun.ros.cdk.core.IResolvable cidrMask) {
            this.cidrMask = cidrMask;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolAllocationDescription}
         * @param ipamPoolAllocationDescription Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
         *                                      It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * @return {@code this}
         */
        public Builder ipamPoolAllocationDescription(java.lang.String ipamPoolAllocationDescription) {
            this.ipamPoolAllocationDescription = ipamPoolAllocationDescription;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolAllocationDescription}
         * @param ipamPoolAllocationDescription Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
         *                                      It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * @return {@code this}
         */
        public Builder ipamPoolAllocationDescription(com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationDescription) {
            this.ipamPoolAllocationDescription = ipamPoolAllocationDescription;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolAllocationName}
         * @param ipamPoolAllocationName Property ipamPoolAllocationName: The name of the ipam pool allocation.
         *                               It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
         * @return {@code this}
         */
        public Builder ipamPoolAllocationName(java.lang.String ipamPoolAllocationName) {
            this.ipamPoolAllocationName = ipamPoolAllocationName;
            return this;
        }

        /**
         * Sets the value of {@link IpamPoolAllocationProps#getIpamPoolAllocationName}
         * @param ipamPoolAllocationName Property ipamPoolAllocationName: The name of the ipam pool allocation.
         *                               It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
         * @return {@code this}
         */
        public Builder ipamPoolAllocationName(com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationName) {
            this.ipamPoolAllocationName = ipamPoolAllocationName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IpamPoolAllocationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IpamPoolAllocationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IpamPoolAllocationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpamPoolAllocationProps {
        private final java.lang.Object ipamPoolId;
        private final java.lang.Object cidr;
        private final java.lang.Object cidrMask;
        private final java.lang.Object ipamPoolAllocationDescription;
        private final java.lang.Object ipamPoolAllocationName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipamPoolId = software.amazon.jsii.Kernel.get(this, "ipamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidr = software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidrMask = software.amazon.jsii.Kernel.get(this, "cidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamPoolAllocationDescription = software.amazon.jsii.Kernel.get(this, "ipamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamPoolAllocationName = software.amazon.jsii.Kernel.get(this, "ipamPoolAllocationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipamPoolId = java.util.Objects.requireNonNull(builder.ipamPoolId, "ipamPoolId is required");
            this.cidr = builder.cidr;
            this.cidrMask = builder.cidrMask;
            this.ipamPoolAllocationDescription = builder.ipamPoolAllocationDescription;
            this.ipamPoolAllocationName = builder.ipamPoolAllocationName;
        }

        @Override
        public final java.lang.Object getIpamPoolId() {
            return this.ipamPoolId;
        }

        @Override
        public final java.lang.Object getCidr() {
            return this.cidr;
        }

        @Override
        public final java.lang.Object getCidrMask() {
            return this.cidrMask;
        }

        @Override
        public final java.lang.Object getIpamPoolAllocationDescription() {
            return this.ipamPoolAllocationDescription;
        }

        @Override
        public final java.lang.Object getIpamPoolAllocationName() {
            return this.ipamPoolAllocationName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipamPoolId", om.valueToTree(this.getIpamPoolId()));
            if (this.getCidr() != null) {
                data.set("cidr", om.valueToTree(this.getCidr()));
            }
            if (this.getCidrMask() != null) {
                data.set("cidrMask", om.valueToTree(this.getCidrMask()));
            }
            if (this.getIpamPoolAllocationDescription() != null) {
                data.set("ipamPoolAllocationDescription", om.valueToTree(this.getIpamPoolAllocationDescription()));
            }
            if (this.getIpamPoolAllocationName() != null) {
                data.set("ipamPoolAllocationName", om.valueToTree(this.getIpamPoolAllocationName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.IpamPoolAllocationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IpamPoolAllocationProps.Jsii$Proxy that = (IpamPoolAllocationProps.Jsii$Proxy) o;

            if (!ipamPoolId.equals(that.ipamPoolId)) return false;
            if (this.cidr != null ? !this.cidr.equals(that.cidr) : that.cidr != null) return false;
            if (this.cidrMask != null ? !this.cidrMask.equals(that.cidrMask) : that.cidrMask != null) return false;
            if (this.ipamPoolAllocationDescription != null ? !this.ipamPoolAllocationDescription.equals(that.ipamPoolAllocationDescription) : that.ipamPoolAllocationDescription != null) return false;
            return this.ipamPoolAllocationName != null ? this.ipamPoolAllocationName.equals(that.ipamPoolAllocationName) : that.ipamPoolAllocationName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipamPoolId.hashCode();
            result = 31 * result + (this.cidr != null ? this.cidr.hashCode() : 0);
            result = 31 * result + (this.cidrMask != null ? this.cidrMask.hashCode() : 0);
            result = 31 * result + (this.ipamPoolAllocationDescription != null ? this.ipamPoolAllocationDescription.hashCode() : 0);
            result = 31 * result + (this.ipamPoolAllocationName != null ? this.ipamPoolAllocationName.hashCode() : 0);
            return result;
        }
    }
}

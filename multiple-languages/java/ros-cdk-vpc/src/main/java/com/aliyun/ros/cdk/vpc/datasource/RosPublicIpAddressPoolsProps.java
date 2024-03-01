package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosPublicIpAddressPools</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolsProps")
@software.amazon.jsii.Jsii.Proxy(RosPublicIpAddressPoolsProps.Jsii$Proxy.class)
public interface RosPublicIpAddressPoolsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicIpAddressPoolName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPublicIpAddressPoolsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPublicIpAddressPoolsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPublicIpAddressPoolsProps> {
        java.lang.Object isp;
        java.lang.Object publicIpAddressPoolName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getPublicIpAddressPoolName}
         * @param publicIpAddressPoolName the value to be set.
         * @return {@code this}
         */
        public Builder publicIpAddressPoolName(java.lang.String publicIpAddressPoolName) {
            this.publicIpAddressPoolName = publicIpAddressPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getPublicIpAddressPoolName}
         * @param publicIpAddressPoolName the value to be set.
         * @return {@code this}
         */
        public Builder publicIpAddressPoolName(com.aliyun.ros.cdk.core.IResolvable publicIpAddressPoolName) {
            this.publicIpAddressPoolName = publicIpAddressPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPublicIpAddressPoolsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPublicIpAddressPoolsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPublicIpAddressPoolsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPublicIpAddressPoolsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPublicIpAddressPoolsProps {
        private final java.lang.Object isp;
        private final java.lang.Object publicIpAddressPoolName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicIpAddressPoolName = software.amazon.jsii.Kernel.get(this, "publicIpAddressPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.isp = builder.isp;
            this.publicIpAddressPoolName = builder.publicIpAddressPoolName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        public final java.lang.Object getPublicIpAddressPoolName() {
            return this.publicIpAddressPoolName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }
            if (this.getPublicIpAddressPoolName() != null) {
                data.set("publicIpAddressPoolName", om.valueToTree(this.getPublicIpAddressPoolName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPublicIpAddressPoolsProps.Jsii$Proxy that = (RosPublicIpAddressPoolsProps.Jsii$Proxy) o;

            if (this.isp != null ? !this.isp.equals(that.isp) : that.isp != null) return false;
            if (this.publicIpAddressPoolName != null ? !this.publicIpAddressPoolName.equals(that.publicIpAddressPoolName) : that.publicIpAddressPoolName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.isp != null ? this.isp.hashCode() : 0;
            result = 31 * result + (this.publicIpAddressPoolName != null ? this.publicIpAddressPoolName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}

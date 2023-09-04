package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::VPC::NetworkAcls</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:40.461Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosNetworkAclsProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkAclsProps.Jsii$Proxy.class)
public interface RosNetworkAclsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNetworkAclsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkAclsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkAclsProps> {
        java.lang.Object networkAclId;
        java.lang.Object networkAclName;
        java.lang.Object resourceId;
        java.lang.Object resourceType;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosNetworkAclsProps#getNetworkAclId}
         * @param networkAclId the value to be set.
         * @return {@code this}
         */
        public Builder networkAclId(java.lang.String networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getNetworkAclId}
         * @param networkAclId the value to be set.
         * @return {@code this}
         */
        public Builder networkAclId(com.aliyun.ros.cdk.core.IResolvable networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getNetworkAclName}
         * @param networkAclName the value to be set.
         * @return {@code this}
         */
        public Builder networkAclName(java.lang.String networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getNetworkAclName}
         * @param networkAclName the value to be set.
         * @return {@code this}
         */
        public Builder networkAclName(com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkAclsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkAclsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkAclsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkAclsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkAclsProps {
        private final java.lang.Object networkAclId;
        private final java.lang.Object networkAclName;
        private final java.lang.Object resourceId;
        private final java.lang.Object resourceType;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkAclId = software.amazon.jsii.Kernel.get(this, "networkAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAclName = software.amazon.jsii.Kernel.get(this, "networkAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkAclId = builder.networkAclId;
            this.networkAclName = builder.networkAclName;
            this.resourceId = builder.resourceId;
            this.resourceType = builder.resourceType;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getNetworkAclId() {
            return this.networkAclId;
        }

        @Override
        public final java.lang.Object getNetworkAclName() {
            return this.networkAclName;
        }

        @Override
        public final java.lang.Object getResourceId() {
            return this.resourceId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
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

            if (this.getNetworkAclId() != null) {
                data.set("networkAclId", om.valueToTree(this.getNetworkAclId()));
            }
            if (this.getNetworkAclName() != null) {
                data.set("networkAclName", om.valueToTree(this.getNetworkAclName()));
            }
            if (this.getResourceId() != null) {
                data.set("resourceId", om.valueToTree(this.getResourceId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosNetworkAclsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkAclsProps.Jsii$Proxy that = (RosNetworkAclsProps.Jsii$Proxy) o;

            if (this.networkAclId != null ? !this.networkAclId.equals(that.networkAclId) : that.networkAclId != null) return false;
            if (this.networkAclName != null ? !this.networkAclName.equals(that.networkAclName) : that.networkAclName != null) return false;
            if (this.resourceId != null ? !this.resourceId.equals(that.resourceId) : that.resourceId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkAclId != null ? this.networkAclId.hashCode() : 0;
            result = 31 * result + (this.networkAclName != null ? this.networkAclName.hashCode() : 0);
            result = 31 * result + (this.resourceId != null ? this.resourceId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}

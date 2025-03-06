package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>NetworkAcls</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.793Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.NetworkAclsProps")
@software.amazon.jsii.Jsii.Proxy(NetworkAclsProps.Jsii$Proxy.class)
public interface NetworkAclsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkAclId: The ID of the network ACL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclId() {
        return null;
    }

    /**
     * Property networkAclName: The name of the network ACL.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclName() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return null;
    }

    /**
     * Property resourceType: The type of the associated instance.
     * <p>
     * Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkAclsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkAclsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkAclsProps> {
        java.lang.Object networkAclId;
        java.lang.Object networkAclName;
        java.lang.Object refreshOptions;
        java.lang.Object resourceId;
        java.lang.Object resourceType;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link NetworkAclsProps#getNetworkAclId}
         * @param networkAclId Property networkAclId: The ID of the network ACL.
         * @return {@code this}
         */
        public Builder networkAclId(java.lang.String networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getNetworkAclId}
         * @param networkAclId Property networkAclId: The ID of the network ACL.
         * @return {@code this}
         */
        public Builder networkAclId(com.aliyun.ros.cdk.core.IResolvable networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: The name of the network ACL.
         *                       The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(java.lang.String networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: The name of the network ACL.
         *                       The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getResourceId}
         * @param resourceId Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getResourceId}
         * @param resourceId Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getResourceType}
         * @param resourceType Property resourceType: The type of the associated instance.
         *                     Set the value to VSwitch.
         *                     This parameter is valid only if ResourceType and ResourceId are both set.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getResourceType}
         * @param resourceType Property resourceType: The type of the associated instance.
         *                     Set the value to VSwitch.
         *                     This parameter is valid only if ResourceType and ResourceId are both set.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclsProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkAclsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkAclsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkAclsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkAclsProps {
        private final java.lang.Object networkAclId;
        private final java.lang.Object networkAclName;
        private final java.lang.Object refreshOptions;
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
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.refreshOptions = builder.refreshOptions;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.NetworkAclsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkAclsProps.Jsii$Proxy that = (NetworkAclsProps.Jsii$Proxy) o;

            if (this.networkAclId != null ? !this.networkAclId.equals(that.networkAclId) : that.networkAclId != null) return false;
            if (this.networkAclName != null ? !this.networkAclName.equals(that.networkAclName) : that.networkAclName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceId != null ? !this.resourceId.equals(that.resourceId) : that.resourceId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkAclId != null ? this.networkAclId.hashCode() : 0;
            result = 31 * result + (this.networkAclName != null ? this.networkAclName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceId != null ? this.resourceId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::VPC`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:10.086Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.VPCProps")
@software.amazon.jsii.Jsii.Proxy(VPCProps.Jsii$Proxy.class)
public interface VPCProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpv6() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6CidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VPCProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VPCProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VPCProps> {
        private java.lang.String cidrBlock;
        private java.lang.String description;
        private java.lang.Object enableIpv6;
        private java.lang.String ipv6CidrBlock;
        private java.lang.String resourceGroupId;
        private java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private java.lang.String vpcName;

        /**
         * Sets the value of {@link VPCProps#getCidrBlock}
         * @param cidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getEnableIpv6}
         * @param enableIpv6 the value to be set.
         * @return {@code this}
         */
        public Builder enableIpv6(java.lang.Boolean enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getEnableIpv6}
         * @param enableIpv6 the value to be set.
         * @return {@code this}
         */
        public Builder enableIpv6(com.aliyun.ros.cdk.core.IResolvable enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.String ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VPCProps#getVpcName}
         * @param vpcName the value to be set.
         * @return {@code this}
         */
        public Builder vpcName(java.lang.String vpcName) {
            this.vpcName = vpcName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VPCProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VPCProps build() {
            return new Jsii$Proxy(cidrBlock, description, enableIpv6, ipv6CidrBlock, resourceGroupId, tags, vpcName);
        }
    }

    /**
     * An implementation for {@link VPCProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VPCProps {
        private final java.lang.String cidrBlock;
        private final java.lang.String description;
        private final java.lang.Object enableIpv6;
        private final java.lang.String ipv6CidrBlock;
        private final java.lang.String resourceGroupId;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private final java.lang.String vpcName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enableIpv6 = software.amazon.jsii.Kernel.get(this, "enableIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
            this.vpcName = software.amazon.jsii.Kernel.get(this, "vpcName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String cidrBlock, final java.lang.String description, final java.lang.Object enableIpv6, final java.lang.String ipv6CidrBlock, final java.lang.String resourceGroupId, final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags, final java.lang.String vpcName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = cidrBlock;
            this.description = description;
            this.enableIpv6 = enableIpv6;
            this.ipv6CidrBlock = ipv6CidrBlock;
            this.resourceGroupId = resourceGroupId;
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            this.vpcName = vpcName;
        }

        @Override
        public final java.lang.String getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableIpv6() {
            return this.enableIpv6;
        }

        @Override
        public final java.lang.String getIpv6CidrBlock() {
            return this.ipv6CidrBlock;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getVpcName() {
            return this.vpcName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCidrBlock() != null) {
                data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableIpv6() != null) {
                data.set("enableIpv6", om.valueToTree(this.getEnableIpv6()));
            }
            if (this.getIpv6CidrBlock() != null) {
                data.set("ipv6CidrBlock", om.valueToTree(this.getIpv6CidrBlock()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcName() != null) {
                data.set("vpcName", om.valueToTree(this.getVpcName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.VPCProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VPCProps.Jsii$Proxy that = (VPCProps.Jsii$Proxy) o;

            if (this.cidrBlock != null ? !this.cidrBlock.equals(that.cidrBlock) : that.cidrBlock != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableIpv6 != null ? !this.enableIpv6.equals(that.enableIpv6) : that.enableIpv6 != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcName != null ? this.vpcName.equals(that.vpcName) : that.vpcName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidrBlock != null ? this.cidrBlock.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableIpv6 != null ? this.enableIpv6.hashCode() : 0);
            result = 31 * result + (this.ipv6CidrBlock != null ? this.ipv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcName != null ? this.vpcName.hashCode() : 0);
            return result;
        }
    }
}

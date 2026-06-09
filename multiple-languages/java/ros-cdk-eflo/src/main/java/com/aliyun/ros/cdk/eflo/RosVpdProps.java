package com.aliyun.ros.cdk.eflo;

/**
 * Properties for defining a <code>RosVpd</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:40:50.405Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eflo.$Module.class, fqn = "@alicloud/ros-cdk-eflo.RosVpdProps")
@software.amazon.jsii.Jsii.Proxy(RosVpdProps.Jsii$Proxy.class)
public interface RosVpdProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCidr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpdName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrBlocks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubnets() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpdProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpdProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpdProps> {
        java.lang.Object cidr;
        java.lang.Object vpdName;
        java.lang.Object resourceGroupId;
        java.lang.Object secondaryCidrBlocks;
        java.lang.Object subnets;
        java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> tags;

        /**
         * Sets the value of {@link RosVpdProps#getCidr}
         * @param cidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cidr(java.lang.String cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getCidr}
         * @param cidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cidr(com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getVpdName}
         * @param vpdName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpdName(java.lang.String vpdName) {
            this.vpdName = vpdName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getVpdName}
         * @param vpdName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpdName(com.aliyun.ros.cdk.core.IResolvable vpdName) {
            this.vpdName = vpdName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getSecondaryCidrBlocks}
         * @param secondaryCidrBlocks the value to be set.
         * @return {@code this}
         */
        public Builder secondaryCidrBlocks(com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlocks) {
            this.secondaryCidrBlocks = secondaryCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getSecondaryCidrBlocks}
         * @param secondaryCidrBlocks the value to be set.
         * @return {@code this}
         */
        public Builder secondaryCidrBlocks(java.util.List<? extends java.lang.Object> secondaryCidrBlocks) {
            this.secondaryCidrBlocks = secondaryCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getSubnets}
         * @param subnets the value to be set.
         * @return {@code this}
         */
        public Builder subnets(com.aliyun.ros.cdk.core.IResolvable subnets) {
            this.subnets = subnets;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getSubnets}
         * @param subnets the value to be set.
         * @return {@code this}
         */
        public Builder subnets(java.util.List<? extends java.lang.Object> subnets) {
            this.subnets = subnets;
            return this;
        }

        /**
         * Sets the value of {@link RosVpdProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpdProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpdProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpdProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpdProps {
        private final java.lang.Object cidr;
        private final java.lang.Object vpdName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secondaryCidrBlocks;
        private final java.lang.Object subnets;
        private final java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidr = software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpdName = software.amazon.jsii.Kernel.get(this, "vpdName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryCidrBlocks = software.amazon.jsii.Kernel.get(this, "secondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subnets = software.amazon.jsii.Kernel.get(this, "subnets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidr = java.util.Objects.requireNonNull(builder.cidr, "cidr is required");
            this.vpdName = java.util.Objects.requireNonNull(builder.vpdName, "vpdName is required");
            this.resourceGroupId = builder.resourceGroupId;
            this.secondaryCidrBlocks = builder.secondaryCidrBlocks;
            this.subnets = builder.subnets;
            this.tags = (java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getCidr() {
            return this.cidr;
        }

        @Override
        public final java.lang.Object getVpdName() {
            return this.vpdName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecondaryCidrBlocks() {
            return this.secondaryCidrBlocks;
        }

        @Override
        public final java.lang.Object getSubnets() {
            return this.subnets;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cidr", om.valueToTree(this.getCidr()));
            data.set("vpdName", om.valueToTree(this.getVpdName()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecondaryCidrBlocks() != null) {
                data.set("secondaryCidrBlocks", om.valueToTree(this.getSecondaryCidrBlocks()));
            }
            if (this.getSubnets() != null) {
                data.set("subnets", om.valueToTree(this.getSubnets()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eflo.RosVpdProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpdProps.Jsii$Proxy that = (RosVpdProps.Jsii$Proxy) o;

            if (!cidr.equals(that.cidr)) return false;
            if (!vpdName.equals(that.vpdName)) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.secondaryCidrBlocks != null ? !this.secondaryCidrBlocks.equals(that.secondaryCidrBlocks) : that.secondaryCidrBlocks != null) return false;
            if (this.subnets != null ? !this.subnets.equals(that.subnets) : that.subnets != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidr.hashCode();
            result = 31 * result + (this.vpdName.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.secondaryCidrBlocks != null ? this.secondaryCidrBlocks.hashCode() : 0);
            result = 31 * result + (this.subnets != null ? this.subnets.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

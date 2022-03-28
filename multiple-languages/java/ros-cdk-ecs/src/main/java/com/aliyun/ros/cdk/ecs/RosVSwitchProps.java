package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.448Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosVSwitchProps")
@software.amazon.jsii.Jsii.Proxy(RosVSwitchProps.Jsii$Proxy.class)
public interface RosVSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCidrBlock();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6CidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIpv6CidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVSwitchProps> {
        java.lang.Object cidrBlock;
        java.lang.Object vpcId;
        java.lang.Object zoneId;
        java.lang.Object description;
        java.lang.Object ipv6CidrBlock;
        java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> tags;
        java.lang.Object vpcIpv6CidrBlock;
        java.lang.Object vSwitchName;

        /**
         * Sets the value of {@link RosVSwitchProps#getCidrBlock}
         * @param cidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getCidrBlock}
         * @param cidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.Number ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVpcIpv6CidrBlock}
         * @param vpcIpv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder vpcIpv6CidrBlock(java.lang.String vpcIpv6CidrBlock) {
            this.vpcIpv6CidrBlock = vpcIpv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVpcIpv6CidrBlock}
         * @param vpcIpv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder vpcIpv6CidrBlock(com.aliyun.ros.cdk.core.IResolvable vpcIpv6CidrBlock) {
            this.vpcIpv6CidrBlock = vpcIpv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVSwitchName}
         * @param vSwitchName the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchName(java.lang.String vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Sets the value of {@link RosVSwitchProps#getVSwitchName}
         * @param vSwitchName the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchName(com.aliyun.ros.cdk.core.IResolvable vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVSwitchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVSwitchProps {
        private final java.lang.Object cidrBlock;
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneId;
        private final java.lang.Object description;
        private final java.lang.Object ipv6CidrBlock;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> tags;
        private final java.lang.Object vpcIpv6CidrBlock;
        private final java.lang.Object vSwitchName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty.class)));
            this.vpcIpv6CidrBlock = software.amazon.jsii.Kernel.get(this, "vpcIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchName = software.amazon.jsii.Kernel.get(this, "vSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = java.util.Objects.requireNonNull(builder.cidrBlock, "cidrBlock is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.description = builder.description;
            this.ipv6CidrBlock = builder.ipv6CidrBlock;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty>)builder.tags;
            this.vpcIpv6CidrBlock = builder.vpcIpv6CidrBlock;
            this.vSwitchName = builder.vSwitchName;
        }

        @Override
        public final java.lang.Object getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIpv6CidrBlock() {
            return this.ipv6CidrBlock;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcIpv6CidrBlock() {
            return this.vpcIpv6CidrBlock;
        }

        @Override
        public final java.lang.Object getVSwitchName() {
            return this.vSwitchName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIpv6CidrBlock() != null) {
                data.set("ipv6CidrBlock", om.valueToTree(this.getIpv6CidrBlock()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcIpv6CidrBlock() != null) {
                data.set("vpcIpv6CidrBlock", om.valueToTree(this.getVpcIpv6CidrBlock()));
            }
            if (this.getVSwitchName() != null) {
                data.set("vSwitchName", om.valueToTree(this.getVSwitchName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosVSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVSwitchProps.Jsii$Proxy that = (RosVSwitchProps.Jsii$Proxy) o;

            if (!cidrBlock.equals(that.cidrBlock)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcIpv6CidrBlock != null ? !this.vpcIpv6CidrBlock.equals(that.vpcIpv6CidrBlock) : that.vpcIpv6CidrBlock != null) return false;
            return this.vSwitchName != null ? this.vSwitchName.equals(that.vSwitchName) : that.vSwitchName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidrBlock.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ipv6CidrBlock != null ? this.ipv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcIpv6CidrBlock != null ? this.vpcIpv6CidrBlock.hashCode() : 0);
            result = 31 * result + (this.vSwitchName != null ? this.vSwitchName.hashCode() : 0);
            return result;
        }
    }
}

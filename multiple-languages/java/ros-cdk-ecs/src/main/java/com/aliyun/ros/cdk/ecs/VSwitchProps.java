package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.866Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.VSwitchProps")
@software.amazon.jsii.Jsii.Proxy(VSwitchProps.Jsii$Proxy.class)
public interface VSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCidrBlock();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIpv6CidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VSwitchProps> {
        private java.lang.String cidrBlock;
        private java.lang.String vpcId;
        private java.lang.String zoneId;
        private java.lang.String description;
        private java.lang.Number ipv6CidrBlock;
        private java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private java.lang.String vSwitchName;

        /**
         * Sets the value of {@link VSwitchProps#getCidrBlock}
         * @param cidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getIpv6CidrBlock}
         * @param ipv6CidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder ipv6CidrBlock(java.lang.Number ipv6CidrBlock) {
            this.ipv6CidrBlock = ipv6CidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getVSwitchName}
         * @param vSwitchName the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchName(java.lang.String vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VSwitchProps build() {
            return new Jsii$Proxy(cidrBlock, vpcId, zoneId, description, ipv6CidrBlock, tags, vSwitchName);
        }
    }

    /**
     * An implementation for {@link VSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VSwitchProps {
        private final java.lang.String cidrBlock;
        private final java.lang.String vpcId;
        private final java.lang.String zoneId;
        private final java.lang.String description;
        private final java.lang.Number ipv6CidrBlock;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private final java.lang.String vSwitchName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6CidrBlock = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
            this.vSwitchName = software.amazon.jsii.Kernel.get(this, "vSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String cidrBlock, final java.lang.String vpcId, final java.lang.String zoneId, final java.lang.String description, final java.lang.Number ipv6CidrBlock, final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags, final java.lang.String vSwitchName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = java.util.Objects.requireNonNull(cidrBlock, "cidrBlock is required");
            this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
            this.zoneId = java.util.Objects.requireNonNull(zoneId, "zoneId is required");
            this.description = description;
            this.ipv6CidrBlock = ipv6CidrBlock;
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            this.vSwitchName = vSwitchName;
        }

        @Override
        public final java.lang.String getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getIpv6CidrBlock() {
            return this.ipv6CidrBlock;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getVSwitchName() {
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
            if (this.getVSwitchName() != null) {
                data.set("vSwitchName", om.valueToTree(this.getVSwitchName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.VSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VSwitchProps.Jsii$Proxy that = (VSwitchProps.Jsii$Proxy) o;

            if (!cidrBlock.equals(that.cidrBlock)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ipv6CidrBlock != null ? !this.ipv6CidrBlock.equals(that.ipv6CidrBlock) : that.ipv6CidrBlock != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
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
            result = 31 * result + (this.vSwitchName != null ? this.vSwitchName.hashCode() : 0);
            return result;
        }
    }
}

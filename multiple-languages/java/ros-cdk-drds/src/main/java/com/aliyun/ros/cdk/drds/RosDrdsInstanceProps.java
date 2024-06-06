package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a <code>RosDrdsInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDrdsInstanceProps.Jsii$Proxy.class)
public interface RosDrdsInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSeries();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpecification();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMySqlVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVswitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDrdsInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDrdsInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDrdsInstanceProps> {
        java.lang.Object description;
        java.lang.Object instanceSeries;
        java.lang.Object payType;
        java.lang.Object specification;
        java.lang.Object type;
        java.lang.Object zoneId;
        java.lang.Object duration;
        java.lang.Object isAutoRenew;
        java.lang.Object mySqlVersion;
        java.lang.Object pricingCycle;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vswitchId;

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getInstanceSeries}
         * @param instanceSeries the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSeries(java.lang.String instanceSeries) {
            this.instanceSeries = instanceSeries;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getInstanceSeries}
         * @param instanceSeries the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSeries(com.aliyun.ros.cdk.core.IResolvable instanceSeries) {
            this.instanceSeries = instanceSeries;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getSpecification}
         * @param specification the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getSpecification}
         * @param specification the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getIsAutoRenew}
         * @param isAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder isAutoRenew(java.lang.Boolean isAutoRenew) {
            this.isAutoRenew = isAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getIsAutoRenew}
         * @param isAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder isAutoRenew(com.aliyun.ros.cdk.core.IResolvable isAutoRenew) {
            this.isAutoRenew = isAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getMySqlVersion}
         * @param mySqlVersion the value to be set.
         * @return {@code this}
         */
        public Builder mySqlVersion(java.lang.String mySqlVersion) {
            this.mySqlVersion = mySqlVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getMySqlVersion}
         * @param mySqlVersion the value to be set.
         * @return {@code this}
         */
        public Builder mySqlVersion(com.aliyun.ros.cdk.core.IResolvable mySqlVersion) {
            this.mySqlVersion = mySqlVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getVswitchId}
         * @param vswitchId the value to be set.
         * @return {@code this}
         */
        public Builder vswitchId(java.lang.String vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getVswitchId}
         * @param vswitchId the value to be set.
         * @return {@code this}
         */
        public Builder vswitchId(com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDrdsInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDrdsInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDrdsInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDrdsInstanceProps {
        private final java.lang.Object description;
        private final java.lang.Object instanceSeries;
        private final java.lang.Object payType;
        private final java.lang.Object specification;
        private final java.lang.Object type;
        private final java.lang.Object zoneId;
        private final java.lang.Object duration;
        private final java.lang.Object isAutoRenew;
        private final java.lang.Object mySqlVersion;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vswitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSeries = software.amazon.jsii.Kernel.get(this, "instanceSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isAutoRenew = software.amazon.jsii.Kernel.get(this, "isAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mySqlVersion = software.amazon.jsii.Kernel.get(this, "mySqlVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vswitchId = software.amazon.jsii.Kernel.get(this, "vswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.instanceSeries = java.util.Objects.requireNonNull(builder.instanceSeries, "instanceSeries is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.specification = java.util.Objects.requireNonNull(builder.specification, "specification is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.duration = builder.duration;
            this.isAutoRenew = builder.isAutoRenew;
            this.mySqlVersion = builder.mySqlVersion;
            this.pricingCycle = builder.pricingCycle;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vswitchId = builder.vswitchId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceSeries() {
            return this.instanceSeries;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getSpecification() {
            return this.specification;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getIsAutoRenew() {
            return this.isAutoRenew;
        }

        @Override
        public final java.lang.Object getMySqlVersion() {
            return this.mySqlVersion;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVswitchId() {
            return this.vswitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("description", om.valueToTree(this.getDescription()));
            data.set("instanceSeries", om.valueToTree(this.getInstanceSeries()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("specification", om.valueToTree(this.getSpecification()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getIsAutoRenew() != null) {
                data.set("isAutoRenew", om.valueToTree(this.getIsAutoRenew()));
            }
            if (this.getMySqlVersion() != null) {
                data.set("mySqlVersion", om.valueToTree(this.getMySqlVersion()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVswitchId() != null) {
                data.set("vswitchId", om.valueToTree(this.getVswitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.RosDrdsInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDrdsInstanceProps.Jsii$Proxy that = (RosDrdsInstanceProps.Jsii$Proxy) o;

            if (!description.equals(that.description)) return false;
            if (!instanceSeries.equals(that.instanceSeries)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!specification.equals(that.specification)) return false;
            if (!type.equals(that.type)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.isAutoRenew != null ? !this.isAutoRenew.equals(that.isAutoRenew) : that.isAutoRenew != null) return false;
            if (this.mySqlVersion != null ? !this.mySqlVersion.equals(that.mySqlVersion) : that.mySqlVersion != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vswitchId != null ? this.vswitchId.equals(that.vswitchId) : that.vswitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.instanceSeries.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.specification.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.isAutoRenew != null ? this.isAutoRenew.hashCode() : 0);
            result = 31 * result + (this.mySqlVersion != null ? this.mySqlVersion.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vswitchId != null ? this.vswitchId.hashCode() : 0);
            return result;
        }
    }
}

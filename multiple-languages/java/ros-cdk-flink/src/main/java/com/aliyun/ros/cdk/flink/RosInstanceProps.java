package com.aliyun.ros.cdk.flink;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.713Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.flink.$Module.class, fqn = "@alicloud/ros-cdk-flink.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsePromotionCode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object bucket;
        java.lang.Object chargeType;
        java.lang.Object instanceName;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object zoneId;
        java.lang.Object autoRenew;
        java.lang.Object duration;
        java.lang.Object pricingCycle;
        java.lang.Object promotionCode;
        java.lang.Object resourceSpec;
        java.lang.Object usePromotionCode;

        /**
         * Sets the value of {@link RosInstanceProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVSwitchIds}
         * @param vSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVSwitchIds}
         * @param vSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPromotionCode}
         * @param promotionCode the value to be set.
         * @return {@code this}
         */
        public Builder promotionCode(java.lang.String promotionCode) {
            this.promotionCode = promotionCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPromotionCode}
         * @param promotionCode the value to be set.
         * @return {@code this}
         */
        public Builder promotionCode(com.aliyun.ros.cdk.core.IResolvable promotionCode) {
            this.promotionCode = promotionCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceSpec}
         * @param resourceSpec the value to be set.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceSpec}
         * @param resourceSpec the value to be set.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.flink.RosInstance.ResourceSpecProperty resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUsePromotionCode}
         * @param usePromotionCode the value to be set.
         * @return {@code this}
         */
        public Builder usePromotionCode(java.lang.Boolean usePromotionCode) {
            this.usePromotionCode = usePromotionCode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUsePromotionCode}
         * @param usePromotionCode the value to be set.
         * @return {@code this}
         */
        public Builder usePromotionCode(com.aliyun.ros.cdk.core.IResolvable usePromotionCode) {
            this.usePromotionCode = usePromotionCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object bucket;
        private final java.lang.Object chargeType;
        private final java.lang.Object instanceName;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object duration;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object promotionCode;
        private final java.lang.Object resourceSpec;
        private final java.lang.Object usePromotionCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionCode = software.amazon.jsii.Kernel.get(this, "promotionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceSpec = software.amazon.jsii.Kernel.get(this, "resourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.usePromotionCode = software.amazon.jsii.Kernel.get(this, "usePromotionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenew = builder.autoRenew;
            this.duration = builder.duration;
            this.pricingCycle = builder.pricingCycle;
            this.promotionCode = builder.promotionCode;
            this.resourceSpec = builder.resourceSpec;
            this.usePromotionCode = builder.usePromotionCode;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getPromotionCode() {
            return this.promotionCode;
        }

        @Override
        public final java.lang.Object getResourceSpec() {
            return this.resourceSpec;
        }

        @Override
        public final java.lang.Object getUsePromotionCode() {
            return this.usePromotionCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getPromotionCode() != null) {
                data.set("promotionCode", om.valueToTree(this.getPromotionCode()));
            }
            if (this.getResourceSpec() != null) {
                data.set("resourceSpec", om.valueToTree(this.getResourceSpec()));
            }
            if (this.getUsePromotionCode() != null) {
                data.set("usePromotionCode", om.valueToTree(this.getUsePromotionCode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-flink.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            if (!chargeType.equals(that.chargeType)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchIds.equals(that.vSwitchIds)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.promotionCode != null ? !this.promotionCode.equals(that.promotionCode) : that.promotionCode != null) return false;
            if (this.resourceSpec != null ? !this.resourceSpec.equals(that.resourceSpec) : that.resourceSpec != null) return false;
            return this.usePromotionCode != null ? this.usePromotionCode.equals(that.usePromotionCode) : that.usePromotionCode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.chargeType.hashCode());
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchIds.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.promotionCode != null ? this.promotionCode.hashCode() : 0);
            result = 31 * result + (this.resourceSpec != null ? this.resourceSpec.hashCode() : 0);
            result = 31 * result + (this.usePromotionCode != null ? this.usePromotionCode.hashCode() : 0);
            return result;
        }
    }
}

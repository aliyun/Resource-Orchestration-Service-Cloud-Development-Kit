package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.553Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDrdsInstanceProps.Jsii$Proxy.class)
public interface RosDrdsInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceSeries();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getQuantity();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSpecification();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMySqlVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVswitchId() {
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
        private java.lang.String description;
        private java.lang.String instanceSeries;
        private java.lang.String payType;
        private java.lang.Number quantity;
        private java.lang.String specification;
        private java.lang.String type;
        private java.lang.String zoneId;
        private java.lang.Number duration;
        private java.lang.Object isAutoRenew;
        private java.lang.String mySqlVersion;
        private java.lang.String pricingCycle;
        private java.lang.String vpcId;
        private java.lang.String vswitchId;

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
         * Sets the value of {@link RosDrdsInstanceProps#getInstanceSeries}
         * @param instanceSeries the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSeries(java.lang.String instanceSeries) {
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
         * Sets the value of {@link RosDrdsInstanceProps#getQuantity}
         * @param quantity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
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
         * Sets the value of {@link RosDrdsInstanceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
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
         * Sets the value of {@link RosDrdsInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
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
         * Sets the value of {@link RosDrdsInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
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
         * Sets the value of {@link RosDrdsInstanceProps#getVswitchId}
         * @param vswitchId the value to be set.
         * @return {@code this}
         */
        public Builder vswitchId(java.lang.String vswitchId) {
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
            return new Jsii$Proxy(description, instanceSeries, payType, quantity, specification, type, zoneId, duration, isAutoRenew, mySqlVersion, pricingCycle, vpcId, vswitchId);
        }
    }

    /**
     * An implementation for {@link RosDrdsInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDrdsInstanceProps {
        private final java.lang.String description;
        private final java.lang.String instanceSeries;
        private final java.lang.String payType;
        private final java.lang.Number quantity;
        private final java.lang.String specification;
        private final java.lang.String type;
        private final java.lang.String zoneId;
        private final java.lang.Number duration;
        private final java.lang.Object isAutoRenew;
        private final java.lang.String mySqlVersion;
        private final java.lang.String pricingCycle;
        private final java.lang.String vpcId;
        private final java.lang.String vswitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceSeries = software.amazon.jsii.Kernel.get(this, "instanceSeries", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.isAutoRenew = software.amazon.jsii.Kernel.get(this, "isAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mySqlVersion = software.amazon.jsii.Kernel.get(this, "mySqlVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vswitchId = software.amazon.jsii.Kernel.get(this, "vswitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String description, final java.lang.String instanceSeries, final java.lang.String payType, final java.lang.Number quantity, final java.lang.String specification, final java.lang.String type, final java.lang.String zoneId, final java.lang.Number duration, final java.lang.Object isAutoRenew, final java.lang.String mySqlVersion, final java.lang.String pricingCycle, final java.lang.String vpcId, final java.lang.String vswitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(description, "description is required");
            this.instanceSeries = java.util.Objects.requireNonNull(instanceSeries, "instanceSeries is required");
            this.payType = java.util.Objects.requireNonNull(payType, "payType is required");
            this.quantity = java.util.Objects.requireNonNull(quantity, "quantity is required");
            this.specification = java.util.Objects.requireNonNull(specification, "specification is required");
            this.type = java.util.Objects.requireNonNull(type, "type is required");
            this.zoneId = java.util.Objects.requireNonNull(zoneId, "zoneId is required");
            this.duration = duration;
            this.isAutoRenew = isAutoRenew;
            this.mySqlVersion = mySqlVersion;
            this.pricingCycle = pricingCycle;
            this.vpcId = vpcId;
            this.vswitchId = vswitchId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getInstanceSeries() {
            return this.instanceSeries;
        }

        @Override
        public final java.lang.String getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Number getQuantity() {
            return this.quantity;
        }

        @Override
        public final java.lang.String getSpecification() {
            return this.specification;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Number getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getIsAutoRenew() {
            return this.isAutoRenew;
        }

        @Override
        public final java.lang.String getMySqlVersion() {
            return this.mySqlVersion;
        }

        @Override
        public final java.lang.String getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVswitchId() {
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
            data.set("quantity", om.valueToTree(this.getQuantity()));
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
            if (!quantity.equals(that.quantity)) return false;
            if (!specification.equals(that.specification)) return false;
            if (!type.equals(that.type)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.isAutoRenew != null ? !this.isAutoRenew.equals(that.isAutoRenew) : that.isAutoRenew != null) return false;
            if (this.mySqlVersion != null ? !this.mySqlVersion.equals(that.mySqlVersion) : that.mySqlVersion != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vswitchId != null ? this.vswitchId.equals(that.vswitchId) : that.vswitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.instanceSeries.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.quantity.hashCode());
            result = 31 * result + (this.specification.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.isAutoRenew != null ? this.isAutoRenew.hashCode() : 0);
            result = 31 * result + (this.mySqlVersion != null ? this.mySqlVersion.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vswitchId != null ? this.vswitchId.hashCode() : 0);
            return result;
        }
    }
}

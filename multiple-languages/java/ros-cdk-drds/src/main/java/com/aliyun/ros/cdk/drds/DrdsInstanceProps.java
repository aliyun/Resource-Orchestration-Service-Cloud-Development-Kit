package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:28.313Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsInstanceProps")
@software.amazon.jsii.Jsii.Proxy(DrdsInstanceProps.Jsii$Proxy.class)
public interface DrdsInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: Description of the DRDS instance, 2-128 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSeries();

    /**
     * Property payType: For the type of payment, see "Payment Type Parameter Table".
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpecification();

    /**
     * Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property duration: The number of cycles ordered.
     * <p>
     * When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
     * <p>
     * The parameter takes effect when the payment type is drdsPre.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsAutoRenew() {
        return null;
    }

    /**
     * Property mySqlVersion: The MySQL protocol version supported by DRDS.
     * <p>
     * Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMySqlVersion() {
        return null;
    }

    /**
     * Property pricingCycle: The unit of the order period, year: year, month: month.
     * <p>
     * The parameter takes effect when the payment type is drdsPre.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVswitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DrdsInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DrdsInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DrdsInstanceProps> {
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
         * Sets the value of {@link DrdsInstanceProps#getDescription}
         * @param description Property description: Description of the DRDS instance, 2-128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getDescription}
         * @param description Property description: Description of the DRDS instance, 2-128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getInstanceSeries}
         * @param instanceSeries Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSeries(java.lang.String instanceSeries) {
            this.instanceSeries = instanceSeries;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getInstanceSeries}
         * @param instanceSeries Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSeries(com.aliyun.ros.cdk.core.IResolvable instanceSeries) {
            this.instanceSeries = instanceSeries;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getPayType}
         * @param payType Property payType: For the type of payment, see "Payment Type Parameter Table". This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getPayType}
         * @param payType Property payType: For the type of payment, see "Payment Type Parameter Table". This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getSpecification}
         * @param specification Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing. This parameter is required.
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getSpecification}
         * @param specification Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing. This parameter is required.
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getType}
         * @param type Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getType}
         * @param type Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getZoneId}
         * @param zoneId Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou). This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getZoneId}
         * @param zoneId Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou). This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getDuration}
         * @param duration Property duration: The number of cycles ordered.
         *                 When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getDuration}
         * @param duration Property duration: The number of cycles ordered.
         *                 When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getIsAutoRenew}
         * @param isAutoRenew Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
         *                    The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder isAutoRenew(java.lang.Boolean isAutoRenew) {
            this.isAutoRenew = isAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getIsAutoRenew}
         * @param isAutoRenew Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
         *                    The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder isAutoRenew(com.aliyun.ros.cdk.core.IResolvable isAutoRenew) {
            this.isAutoRenew = isAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getMySqlVersion}
         * @param mySqlVersion Property mySqlVersion: The MySQL protocol version supported by DRDS.
         *                     Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
         * @return {@code this}
         */
        public Builder mySqlVersion(java.lang.String mySqlVersion) {
            this.mySqlVersion = mySqlVersion;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getMySqlVersion}
         * @param mySqlVersion Property mySqlVersion: The MySQL protocol version supported by DRDS.
         *                     Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
         * @return {@code this}
         */
        public Builder mySqlVersion(com.aliyun.ros.cdk.core.IResolvable mySqlVersion) {
            this.mySqlVersion = mySqlVersion;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The unit of the order period, year: year, month: month.
         *                     The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The unit of the order period, year: year, month: month.
         *                     The parameter takes effect when the payment type is drdsPre.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getVpcId}
         * @param vpcId Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getVpcId}
         * @param vpcId Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getVswitchId}
         * @param vswitchId Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
         * @return {@code this}
         */
        public Builder vswitchId(java.lang.String vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Sets the value of {@link DrdsInstanceProps#getVswitchId}
         * @param vswitchId Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
         * @return {@code this}
         */
        public Builder vswitchId(com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DrdsInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DrdsInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DrdsInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DrdsInstanceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.DrdsInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DrdsInstanceProps.Jsii$Proxy that = (DrdsInstanceProps.Jsii$Proxy) o;

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

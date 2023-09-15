package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>ALIYUN::ApiGateway::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.379Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property httpsPolicy: HTTPS security policy.
     * <p>
     * Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpsPolicy();

    /**
     * Property instanceName: Instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property instanceSpec: Instance specification.
     * <p>
     * For example: api.s1.small
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSpec();

    /**
     * Property zoneId: Zone to which the instance belongs.
     * <p>
     * For example: cn-beijing-MAZ2(f,g).
     * Pleas call DescribeZones to get supported zone list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoPay: Indicates whether automatic payment is enabled.
     * <p>
     * Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the router interface.
     * <p>
     * Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property deletionForce: Whether force delete the instance even if its status is START_FAILED.
     * <p>
     * Default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property duration: Prepaid time period.
     * <p>
     * It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property pricingCycle: Unit of the payment cycle.
     * <p>
     * It could be Month (default) or Year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object httpsPolicy;
        java.lang.Object instanceName;
        java.lang.Object instanceSpec;
        java.lang.Object zoneId;
        java.lang.Object autoPay;
        java.lang.Object chargeType;
        java.lang.Object deletionForce;
        java.lang.Object duration;
        java.lang.Object pricingCycle;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceProps#getHttpsPolicy}
         * @param httpsPolicy Property httpsPolicy: HTTPS security policy. This parameter is required.
         *                    Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
         * @return {@code this}
         */
        public Builder httpsPolicy(java.lang.String httpsPolicy) {
            this.httpsPolicy = httpsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHttpsPolicy}
         * @param httpsPolicy Property httpsPolicy: HTTPS security policy. This parameter is required.
         *                    Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
         * @return {@code this}
         */
        public Builder httpsPolicy(com.aliyun.ros.cdk.core.IResolvable httpsPolicy) {
            this.httpsPolicy = httpsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: Instance specification. This parameter is required.
         *                     For example: api.s1.small
         * @return {@code this}
         */
        public Builder instanceSpec(java.lang.String instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: Instance specification. This parameter is required.
         *                     For example: api.s1.small
         * @return {@code this}
         */
        public Builder instanceSpec(com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: Zone to which the instance belongs. This parameter is required.
         *               For example: cn-beijing-MAZ2(f,g).
         *               Pleas call DescribeZones to get supported zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: Zone to which the instance belongs. This parameter is required.
         *               For example: cn-beijing-MAZ2(f,g).
         *               Pleas call DescribeZones to get supported zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default true.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default true.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the router interface.
         *                   Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the router interface.
         *                   Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the instance even if its status is START_FAILED.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the instance even if its status is START_FAILED.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDuration}
         * @param duration Property duration: Prepaid time period.
         *                 It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDuration}
         * @param duration Property duration: Prepaid time period.
         *                 It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle.
         *                     It could be Month (default) or Year.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle.
         *                     It could be Month (default) or Year.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object httpsPolicy;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceSpec;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoPay;
        private final java.lang.Object chargeType;
        private final java.lang.Object deletionForce;
        private final java.lang.Object duration;
        private final java.lang.Object pricingCycle;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.httpsPolicy = software.amazon.jsii.Kernel.get(this, "httpsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSpec = software.amazon.jsii.Kernel.get(this, "instanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.httpsPolicy = java.util.Objects.requireNonNull(builder.httpsPolicy, "httpsPolicy is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.instanceSpec = java.util.Objects.requireNonNull(builder.instanceSpec, "instanceSpec is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoPay = builder.autoPay;
            this.chargeType = builder.chargeType;
            this.deletionForce = builder.deletionForce;
            this.duration = builder.duration;
            this.pricingCycle = builder.pricingCycle;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getHttpsPolicy() {
            return this.httpsPolicy;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceSpec() {
            return this.instanceSpec;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
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
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("httpsPolicy", om.valueToTree(this.getHttpsPolicy()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("instanceSpec", om.valueToTree(this.getInstanceSpec()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!httpsPolicy.equals(that.httpsPolicy)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!instanceSpec.equals(that.instanceSpec)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.httpsPolicy.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.instanceSpec.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

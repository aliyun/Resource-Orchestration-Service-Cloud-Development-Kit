package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::NatGateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.831Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatGatewayProps")
@software.amazon.jsii.Jsii.Proxy(NatGatewayProps.Jsii$Proxy.class)
public interface NatGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The VPC id to create NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     * <p>
     * Default is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
     * <p>
     * Default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * <p>
     * Default to False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property description: Description of the NAT gateway, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property duration: The subscription duration.
     * <p>
     * While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method.
     * <p>
     * The default value is PostPaid (which means pay-as-you-go).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property internetChargeType: The billing method for the NAT gateway.
     * <p>
     * Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatGatewayName() {
        return null;
    }

    /**
     * Property natType: The type of the NAT gateway.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Enhanced: enhanced NAT gateway.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatType() {
        return null;
    }

    /**
     * Property networkType: The type of the created NAT gateway.
     * <p>
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property pricingCycle: Price cycle of the resource.
     * <p>
     * This property has no default value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property tags: Tags to attach to natgateway.
     * <p>
     * Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NatGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NatGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NatGatewayProps> {
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object autoPay;
        java.lang.Object deletionForce;
        java.lang.Object deletionProtection;
        java.lang.Object description;
        java.lang.Object duration;
        java.lang.Object instanceChargeType;
        java.lang.Object internetChargeType;
        java.lang.Object natGatewayName;
        java.lang.Object natType;
        java.lang.Object networkType;
        java.lang.Object pricingCycle;
        java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> tags;

        /**
         * Sets the value of {@link NatGatewayProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         *                Default is false.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         *                Default is false.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection.
         *                           Default to False.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection.
         *                           Default to False.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDescription}
         * @param description Property description: Description of the NAT gateway, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDescription}
         * @param description Property description: Description of the NAT gateway, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDuration}
         * @param duration Property duration: The subscription duration.
         *                 While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getDuration}
         * @param duration Property duration: The subscription duration.
         *                 While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method.
         *                           The default value is PostPaid (which means pay-as-you-go).
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method.
         *                           The default value is PostPaid (which means pay-as-you-go).
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The billing method for the NAT gateway.
         *                           Valid values:
         *                           PayBySpec: billed on a pay-by-specification basis.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The billing method for the NAT gateway.
         *                           Valid values:
         *                           PayBySpec: billed on a pay-by-specification basis.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNatGatewayName}
         * @param natGatewayName Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder natGatewayName(java.lang.String natGatewayName) {
            this.natGatewayName = natGatewayName;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNatGatewayName}
         * @param natGatewayName Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder natGatewayName(com.aliyun.ros.cdk.core.IResolvable natGatewayName) {
            this.natGatewayName = natGatewayName;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNatType}
         * @param natType Property natType: The type of the NAT gateway.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li>Enhanced: enhanced NAT gateway.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder natType(java.lang.String natType) {
            this.natType = natType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNatType}
         * @param natType Property natType: The type of the NAT gateway.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li>Enhanced: enhanced NAT gateway.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder natType(com.aliyun.ros.cdk.core.IResolvable natType) {
            this.natType = natType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNetworkType}
         * @param networkType Property networkType: The type of the created NAT gateway.
         *                    Internet: public network NAT gateway.
         *                    Intranet: VPC NAT gateway.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getNetworkType}
         * @param networkType Property networkType: The type of the created NAT gateway.
         *                    Internet: public network NAT gateway.
         *                    Intranet: VPC NAT gateway.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource.
         *                     This property has no default value.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource.
         *                     This property has no default value.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewayProps#getTags}
         * @param tags Property tags: Tags to attach to natgateway.
         *             Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NatGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NatGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NatGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NatGatewayProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object autoPay;
        private final java.lang.Object deletionForce;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object description;
        private final java.lang.Object duration;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object natGatewayName;
        private final java.lang.Object natType;
        private final java.lang.Object networkType;
        private final java.lang.Object pricingCycle;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natGatewayName = software.amazon.jsii.Kernel.get(this, "natGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natType = software.amazon.jsii.Kernel.get(this, "natType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.autoPay = builder.autoPay;
            this.deletionForce = builder.deletionForce;
            this.deletionProtection = builder.deletionProtection;
            this.description = builder.description;
            this.duration = builder.duration;
            this.instanceChargeType = builder.instanceChargeType;
            this.internetChargeType = builder.internetChargeType;
            this.natGatewayName = builder.natGatewayName;
            this.natType = builder.natType;
            this.networkType = builder.networkType;
            this.pricingCycle = builder.pricingCycle;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getNatGatewayName() {
            return this.natGatewayName;
        }

        @Override
        public final java.lang.Object getNatType() {
            return this.natType;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getNatGatewayName() != null) {
                data.set("natGatewayName", om.valueToTree(this.getNatGatewayName()));
            }
            if (this.getNatType() != null) {
                data.set("natType", om.valueToTree(this.getNatType()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.NatGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NatGatewayProps.Jsii$Proxy that = (NatGatewayProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.natGatewayName != null ? !this.natGatewayName.equals(that.natGatewayName) : that.natGatewayName != null) return false;
            if (this.natType != null ? !this.natType.equals(that.natType) : that.natType != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.natGatewayName != null ? this.natGatewayName.hashCode() : 0);
            result = 31 * result + (this.natType != null ? this.natType.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>Accelerator</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.715Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.AcceleratorProps")
@software.amazon.jsii.Jsii.Proxy(AcceleratorProps.Jsii$Proxy.class)
public interface AcceleratorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorName: The Name of the GA instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceleratorName() {
        return null;
    }

    /**
     * Property autoPay: Whether to pay automatically.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUseCoupon() {
        return null;
    }

    /**
     * Property bandwidth: The bandwidth of the global acceleration instance.
     * <p>
     * Unit: Mbps. Valid values: 200 to 5000. This parameter is required when the access mode is set to Anycast.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property bandwidthBillingType: Bandwidth billing method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthBillingType() {
        return null;
    }

    /**
     * Property crossBorderMode: The cross-border mode of the global acceleration instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossBorderMode() {
        return null;
    }

    /**
     * Property ddosConfigList: The DDoS configuration list of the global acceleration instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDdosConfigList() {
        return null;
    }

    /**
     * Property duration: Length of purchase.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableCrossBorder() {
        return null;
    }

    /**
     * Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property ipSetConfig: Accelerate zone configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpSetConfig() {
        return null;
    }

    /**
     * Property pricingCycle: Billing cycle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property resourceGroupId: The ResourceGroup Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property spec: Specifications of Global Acceleration Instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * Property tags: Tags to attach to acceleration instance.
     * <p>
     * Max support 20 tags to add during create acceleration instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AcceleratorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AcceleratorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AcceleratorProps> {
        java.lang.Object acceleratorName;
        java.lang.Object autoPay;
        java.lang.Object autoUseCoupon;
        java.lang.Object bandwidth;
        java.lang.Object bandwidthBillingType;
        java.lang.Object crossBorderMode;
        java.lang.Object ddosConfigList;
        java.lang.Object duration;
        java.lang.Object enableCrossBorder;
        java.lang.Object instanceChargeType;
        java.lang.Object ipSetConfig;
        java.lang.Object pricingCycle;
        java.lang.Object resourceGroupId;
        java.lang.Object spec;
        java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty> tags;

        /**
         * Sets the value of {@link AcceleratorProps#getAcceleratorName}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance.
         * @return {@code this}
         */
        public Builder acceleratorName(java.lang.String acceleratorName) {
            this.acceleratorName = acceleratorName;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAcceleratorName}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance.
         * @return {@code this}
         */
        public Builder acceleratorName(com.aliyun.ros.cdk.core.IResolvable acceleratorName) {
            this.acceleratorName = acceleratorName;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * @return {@code this}
         */
        public Builder autoUseCoupon(com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth of the global acceleration instance.
         *                  Unit: Mbps. Valid values: 200 to 5000. This parameter is required when the access mode is set to Anycast.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth of the global acceleration instance.
         *                  Unit: Mbps. Valid values: 200 to 5000. This parameter is required when the access mode is set to Anycast.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getBandwidthBillingType}
         * @param bandwidthBillingType Property bandwidthBillingType: Bandwidth billing method.
         * @return {@code this}
         */
        public Builder bandwidthBillingType(java.lang.String bandwidthBillingType) {
            this.bandwidthBillingType = bandwidthBillingType;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getBandwidthBillingType}
         * @param bandwidthBillingType Property bandwidthBillingType: Bandwidth billing method.
         * @return {@code this}
         */
        public Builder bandwidthBillingType(com.aliyun.ros.cdk.core.IResolvable bandwidthBillingType) {
            this.bandwidthBillingType = bandwidthBillingType;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getCrossBorderMode}
         * @param crossBorderMode Property crossBorderMode: The cross-border mode of the global acceleration instance.
         * @return {@code this}
         */
        public Builder crossBorderMode(java.lang.String crossBorderMode) {
            this.crossBorderMode = crossBorderMode;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getCrossBorderMode}
         * @param crossBorderMode Property crossBorderMode: The cross-border mode of the global acceleration instance.
         * @return {@code this}
         */
        public Builder crossBorderMode(com.aliyun.ros.cdk.core.IResolvable crossBorderMode) {
            this.crossBorderMode = crossBorderMode;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getDdosConfigList}
         * @param ddosConfigList Property ddosConfigList: The DDoS configuration list of the global acceleration instance.
         * @return {@code this}
         */
        public Builder ddosConfigList(com.aliyun.ros.cdk.core.IResolvable ddosConfigList) {
            this.ddosConfigList = ddosConfigList;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getDdosConfigList}
         * @param ddosConfigList Property ddosConfigList: The DDoS configuration list of the global acceleration instance.
         * @return {@code this}
         */
        public Builder ddosConfigList(java.util.List<? extends java.lang.Object> ddosConfigList) {
            this.ddosConfigList = ddosConfigList;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getDuration}
         * @param duration Property duration: Length of purchase.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getDuration}
         * @param duration Property duration: Length of purchase.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getEnableCrossBorder}
         * @param enableCrossBorder Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
         * @return {@code this}
         */
        public Builder enableCrossBorder(java.lang.Boolean enableCrossBorder) {
            this.enableCrossBorder = enableCrossBorder;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getEnableCrossBorder}
         * @param enableCrossBorder Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
         * @return {@code this}
         */
        public Builder enableCrossBorder(com.aliyun.ros.cdk.core.IResolvable enableCrossBorder) {
            this.enableCrossBorder = enableCrossBorder;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getIpSetConfig}
         * @param ipSetConfig Property ipSetConfig: Accelerate zone configuration.
         * @return {@code this}
         */
        public Builder ipSetConfig(com.aliyun.ros.cdk.core.IResolvable ipSetConfig) {
            this.ipSetConfig = ipSetConfig;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getIpSetConfig}
         * @param ipSetConfig Property ipSetConfig: Accelerate zone configuration.
         * @return {@code this}
         */
        public Builder ipSetConfig(com.aliyun.ros.cdk.ga.RosAccelerator.IpSetConfigProperty ipSetConfig) {
            this.ipSetConfig = ipSetConfig;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Billing cycle.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Billing cycle.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ResourceGroup Id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ResourceGroup Id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getSpec}
         * @param spec Property spec: Specifications of Global Acceleration Instances.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getSpec}
         * @param spec Property spec: Specifications of Global Acceleration Instances.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link AcceleratorProps#getTags}
         * @param tags Property tags: Tags to attach to acceleration instance.
         *             Max support 20 tags to add during create acceleration instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AcceleratorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AcceleratorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AcceleratorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AcceleratorProps {
        private final java.lang.Object acceleratorName;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoUseCoupon;
        private final java.lang.Object bandwidth;
        private final java.lang.Object bandwidthBillingType;
        private final java.lang.Object crossBorderMode;
        private final java.lang.Object ddosConfigList;
        private final java.lang.Object duration;
        private final java.lang.Object enableCrossBorder;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object ipSetConfig;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object spec;
        private final java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorName = software.amazon.jsii.Kernel.get(this, "acceleratorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthBillingType = software.amazon.jsii.Kernel.get(this, "bandwidthBillingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossBorderMode = software.amazon.jsii.Kernel.get(this, "crossBorderMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ddosConfigList = software.amazon.jsii.Kernel.get(this, "ddosConfigList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableCrossBorder = software.amazon.jsii.Kernel.get(this, "enableCrossBorder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipSetConfig = software.amazon.jsii.Kernel.get(this, "ipSetConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorName = builder.acceleratorName;
            this.autoPay = builder.autoPay;
            this.autoUseCoupon = builder.autoUseCoupon;
            this.bandwidth = builder.bandwidth;
            this.bandwidthBillingType = builder.bandwidthBillingType;
            this.crossBorderMode = builder.crossBorderMode;
            this.ddosConfigList = builder.ddosConfigList;
            this.duration = builder.duration;
            this.enableCrossBorder = builder.enableCrossBorder;
            this.instanceChargeType = builder.instanceChargeType;
            this.ipSetConfig = builder.ipSetConfig;
            this.pricingCycle = builder.pricingCycle;
            this.resourceGroupId = builder.resourceGroupId;
            this.spec = builder.spec;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAcceleratorName() {
            return this.acceleratorName;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getBandwidthBillingType() {
            return this.bandwidthBillingType;
        }

        @Override
        public final java.lang.Object getCrossBorderMode() {
            return this.crossBorderMode;
        }

        @Override
        public final java.lang.Object getDdosConfigList() {
            return this.ddosConfigList;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getEnableCrossBorder() {
            return this.enableCrossBorder;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getIpSetConfig() {
            return this.ipSetConfig;
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
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ga.RosAccelerator.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAcceleratorName() != null) {
                data.set("acceleratorName", om.valueToTree(this.getAcceleratorName()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getBandwidthBillingType() != null) {
                data.set("bandwidthBillingType", om.valueToTree(this.getBandwidthBillingType()));
            }
            if (this.getCrossBorderMode() != null) {
                data.set("crossBorderMode", om.valueToTree(this.getCrossBorderMode()));
            }
            if (this.getDdosConfigList() != null) {
                data.set("ddosConfigList", om.valueToTree(this.getDdosConfigList()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getEnableCrossBorder() != null) {
                data.set("enableCrossBorder", om.valueToTree(this.getEnableCrossBorder()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getIpSetConfig() != null) {
                data.set("ipSetConfig", om.valueToTree(this.getIpSetConfig()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.AcceleratorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AcceleratorProps.Jsii$Proxy that = (AcceleratorProps.Jsii$Proxy) o;

            if (this.acceleratorName != null ? !this.acceleratorName.equals(that.acceleratorName) : that.acceleratorName != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoUseCoupon != null ? !this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.bandwidthBillingType != null ? !this.bandwidthBillingType.equals(that.bandwidthBillingType) : that.bandwidthBillingType != null) return false;
            if (this.crossBorderMode != null ? !this.crossBorderMode.equals(that.crossBorderMode) : that.crossBorderMode != null) return false;
            if (this.ddosConfigList != null ? !this.ddosConfigList.equals(that.ddosConfigList) : that.ddosConfigList != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.enableCrossBorder != null ? !this.enableCrossBorder.equals(that.enableCrossBorder) : that.enableCrossBorder != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.ipSetConfig != null ? !this.ipSetConfig.equals(that.ipSetConfig) : that.ipSetConfig != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorName != null ? this.acceleratorName.hashCode() : 0;
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.bandwidthBillingType != null ? this.bandwidthBillingType.hashCode() : 0);
            result = 31 * result + (this.crossBorderMode != null ? this.crossBorderMode.hashCode() : 0);
            result = 31 * result + (this.ddosConfigList != null ? this.ddosConfigList.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.enableCrossBorder != null ? this.enableCrossBorder.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.ipSetConfig != null ? this.ipSetConfig.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

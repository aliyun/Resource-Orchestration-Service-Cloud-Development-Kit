package com.aliyun.ros.cdk.dataworks;

/**
 * Properties for defining a <code>ResourceGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.264Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.ResourceGroupProps")
@software.amazon.jsii.Jsii.Proxy(ResourceGroupProps.Jsii$Proxy.class)
public interface ResourceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     * Property vpcId: The default bound VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The default bound switch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property autoRenewEnabled: Whether to renew automatically.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewEnabled() {
        return null;
    }

    /**
     * Property paymentDuration: Paid time.
     * <p>
     * Default is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDuration() {
        return null;
    }

    /**
     * Property paymentDurationUnit: Paid time unit.
     * <p>
     * Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
        return null;
    }

    /**
     * Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * Property tags: Tags to attach to ResourceGroup.
     * <p>
     * Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceGroupProps> {
        java.lang.Object name;
        java.lang.Object paymentType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object autoRenewEnabled;
        java.lang.Object paymentDuration;
        java.lang.Object paymentDurationUnit;
        java.lang.Object remark;
        java.lang.Object resourceGroupId;
        java.lang.Object spec;
        java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link ResourceGroupProps#getName}
         * @param name Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getName}
         * @param name Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentType}
         * @param paymentType Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentType}
         * @param paymentType Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVpcId}
         * @param vpcId Property vpcId: The default bound VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVpcId}
         * @param vpcId Property vpcId: The default bound VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The default bound switch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The default bound switch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getAutoRenewEnabled}
         * @param autoRenewEnabled Property autoRenewEnabled: Whether to renew automatically.
         * @return {@code this}
         */
        public Builder autoRenewEnabled(java.lang.Boolean autoRenewEnabled) {
            this.autoRenewEnabled = autoRenewEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getAutoRenewEnabled}
         * @param autoRenewEnabled Property autoRenewEnabled: Whether to renew automatically.
         * @return {@code this}
         */
        public Builder autoRenewEnabled(com.aliyun.ros.cdk.core.IResolvable autoRenewEnabled) {
            this.autoRenewEnabled = autoRenewEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentDuration}
         * @param paymentDuration Property paymentDuration: Paid time.
         *                        Default is 1.
         * @return {@code this}
         */
        public Builder paymentDuration(java.lang.Number paymentDuration) {
            this.paymentDuration = paymentDuration;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentDuration}
         * @param paymentDuration Property paymentDuration: Paid time.
         *                        Default is 1.
         * @return {@code this}
         */
        public Builder paymentDuration(com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
            this.paymentDuration = paymentDuration;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentDurationUnit}
         * @param paymentDurationUnit Property paymentDurationUnit: Paid time unit.
         *                            Valid values:
         *                            Month: represents monthly subscription
         *                            Year: represents annual subscription.
         *                            Default is Month.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getPaymentDurationUnit}
         * @param paymentDurationUnit Property paymentDurationUnit: Paid time unit.
         *                            Valid values:
         *                            Month: represents monthly subscription
         *                            Year: represents annual subscription.
         *                            Default is Month.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getRemark}
         * @param remark Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getRemark}
         * @param remark Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Alibaba Cloud Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Alibaba Cloud Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getSpec}
         * @param spec Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
         * @return {@code this}
         */
        public Builder spec(java.lang.Number spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getSpec}
         * @param spec Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getTags}
         * @param tags Property tags: Tags to attach to ResourceGroup.
         *             Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceGroupProps {
        private final java.lang.Object name;
        private final java.lang.Object paymentType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object autoRenewEnabled;
        private final java.lang.Object paymentDuration;
        private final java.lang.Object paymentDurationUnit;
        private final java.lang.Object remark;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object spec;
        private final java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewEnabled = software.amazon.jsii.Kernel.get(this, "autoRenewEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentDuration = software.amazon.jsii.Kernel.get(this, "paymentDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.autoRenewEnabled = builder.autoRenewEnabled;
            this.paymentDuration = builder.paymentDuration;
            this.paymentDurationUnit = builder.paymentDurationUnit;
            this.remark = builder.remark;
            this.resourceGroupId = builder.resourceGroupId;
            this.spec = builder.spec;
            this.tags = (java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
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
        public final java.lang.Object getAutoRenewEnabled() {
            return this.autoRenewEnabled;
        }

        @Override
        public final java.lang.Object getPaymentDuration() {
            return this.paymentDuration;
        }

        @Override
        public final java.lang.Object getPaymentDurationUnit() {
            return this.paymentDurationUnit;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
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
        public final java.util.List<com.aliyun.ros.cdk.dataworks.RosResourceGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAutoRenewEnabled() != null) {
                data.set("autoRenewEnabled", om.valueToTree(this.getAutoRenewEnabled()));
            }
            if (this.getPaymentDuration() != null) {
                data.set("paymentDuration", om.valueToTree(this.getPaymentDuration()));
            }
            if (this.getPaymentDurationUnit() != null) {
                data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dataworks.ResourceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceGroupProps.Jsii$Proxy that = (ResourceGroupProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.autoRenewEnabled != null ? !this.autoRenewEnabled.equals(that.autoRenewEnabled) : that.autoRenewEnabled != null) return false;
            if (this.paymentDuration != null ? !this.paymentDuration.equals(that.paymentDuration) : that.paymentDuration != null) return false;
            if (this.paymentDurationUnit != null ? !this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.autoRenewEnabled != null ? this.autoRenewEnabled.hashCode() : 0);
            result = 31 * result + (this.paymentDuration != null ? this.paymentDuration.hashCode() : 0);
            result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

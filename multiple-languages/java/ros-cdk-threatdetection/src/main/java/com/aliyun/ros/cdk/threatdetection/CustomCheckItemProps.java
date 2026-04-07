package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>CustomCheckItem</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.CustomCheckItemProps")
@software.amazon.jsii.Jsii.Proxy(CustomCheckItemProps.Jsii$Proxy.class)
public interface CustomCheckItemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property checkRule: Check Item Check Rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCheckRule();

    /**
     * Property checkShowName: Check item display name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCheckShowName();

    /**
     * Property instanceSubType: Asset subtype to which the check item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSubType();

    /**
     * Property instanceType: Asset type to which the check item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property riskLevel: Risk level of inspection items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     * Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSectionIds();

    /**
     * Property status: Check item status.
     * <p>
     * Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

    /**
     * Property vendor: Vendor to which the item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVendor();

    /**
     * Property assistInfo: Check Item Description Help Information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAssistInfo() {
        return null;
    }

    /**
     * Property description: Check item description information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property remark: Remarks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property solution: Check Item Solution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolution() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomCheckItemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomCheckItemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomCheckItemProps> {
        java.lang.Object checkRule;
        java.lang.Object checkShowName;
        java.lang.Object instanceSubType;
        java.lang.Object instanceType;
        java.lang.Object riskLevel;
        java.lang.Object sectionIds;
        java.lang.Object status;
        java.lang.Object vendor;
        java.lang.Object assistInfo;
        java.lang.Object description;
        java.lang.Object remark;
        java.lang.Object solution;

        /**
         * Sets the value of {@link CustomCheckItemProps#getCheckRule}
         * @param checkRule Property checkRule: Check Item Check Rules. This parameter is required.
         * @return {@code this}
         */
        public Builder checkRule(com.aliyun.ros.cdk.core.IResolvable checkRule) {
            this.checkRule = checkRule;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getCheckRule}
         * @param checkRule Property checkRule: Check Item Check Rules. This parameter is required.
         * @return {@code this}
         */
        public Builder checkRule(java.util.Map<java.lang.String, ? extends java.lang.Object> checkRule) {
            this.checkRule = checkRule;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getCheckShowName}
         * @param checkShowName Property checkShowName: Check item display name. This parameter is required.
         * @return {@code this}
         */
        public Builder checkShowName(java.lang.String checkShowName) {
            this.checkShowName = checkShowName;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getCheckShowName}
         * @param checkShowName Property checkShowName: Check item display name. This parameter is required.
         * @return {@code this}
         */
        public Builder checkShowName(com.aliyun.ros.cdk.core.IResolvable checkShowName) {
            this.checkShowName = checkShowName;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getInstanceSubType}
         * @param instanceSubType Property instanceSubType: Asset subtype to which the check item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSubType(java.lang.String instanceSubType) {
            this.instanceSubType = instanceSubType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getInstanceSubType}
         * @param instanceSubType Property instanceSubType: Asset subtype to which the check item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSubType(com.aliyun.ros.cdk.core.IResolvable instanceSubType) {
            this.instanceSubType = instanceSubType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getInstanceType}
         * @param instanceType Property instanceType: Asset type to which the check item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getInstanceType}
         * @param instanceType Property instanceType: Asset type to which the check item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Risk level of inspection items. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.String riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Risk level of inspection items. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getSectionIds}
         * @param sectionIds Property sectionIds: CHECK SECTION OF INSPECTIONS. This parameter is required.
         * @return {@code this}
         */
        public Builder sectionIds(com.aliyun.ros.cdk.core.IResolvable sectionIds) {
            this.sectionIds = sectionIds;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getSectionIds}
         * @param sectionIds Property sectionIds: CHECK SECTION OF INSPECTIONS. This parameter is required.
         * @return {@code this}
         */
        public Builder sectionIds(java.util.List<? extends java.lang.Object> sectionIds) {
            this.sectionIds = sectionIds;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getStatus}
         * @param status Property status: Check item status. This parameter is required.
         *               Values:
         *               EDIT: Editing in progress
         *               RELEASE: Published
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getStatus}
         * @param status Property status: Check item status. This parameter is required.
         *               Values:
         *               EDIT: Editing in progress
         *               RELEASE: Published
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getVendor}
         * @param vendor Property vendor: Vendor to which the item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vendor(java.lang.String vendor) {
            this.vendor = vendor;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getVendor}
         * @param vendor Property vendor: Vendor to which the item belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vendor(com.aliyun.ros.cdk.core.IResolvable vendor) {
            this.vendor = vendor;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getAssistInfo}
         * @param assistInfo Property assistInfo: Check Item Description Help Information.
         * @return {@code this}
         */
        public Builder assistInfo(com.aliyun.ros.cdk.core.IResolvable assistInfo) {
            this.assistInfo = assistInfo;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getAssistInfo}
         * @param assistInfo Property assistInfo: Check Item Description Help Information.
         * @return {@code this}
         */
        public Builder assistInfo(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.AssistInfoProperty assistInfo) {
            this.assistInfo = assistInfo;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getDescription}
         * @param description Property description: Check item description information.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getDescription}
         * @param description Property description: Check item description information.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.DescriptionProperty description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getRemark}
         * @param remark Property remark: Remarks.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getRemark}
         * @param remark Property remark: Remarks.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getSolution}
         * @param solution Property solution: Check Item Solution.
         * @return {@code this}
         */
        public Builder solution(com.aliyun.ros.cdk.core.IResolvable solution) {
            this.solution = solution;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckItemProps#getSolution}
         * @param solution Property solution: Check Item Solution.
         * @return {@code this}
         */
        public Builder solution(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.SolutionProperty solution) {
            this.solution = solution;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomCheckItemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomCheckItemProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomCheckItemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomCheckItemProps {
        private final java.lang.Object checkRule;
        private final java.lang.Object checkShowName;
        private final java.lang.Object instanceSubType;
        private final java.lang.Object instanceType;
        private final java.lang.Object riskLevel;
        private final java.lang.Object sectionIds;
        private final java.lang.Object status;
        private final java.lang.Object vendor;
        private final java.lang.Object assistInfo;
        private final java.lang.Object description;
        private final java.lang.Object remark;
        private final java.lang.Object solution;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.checkRule = software.amazon.jsii.Kernel.get(this, "checkRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkShowName = software.amazon.jsii.Kernel.get(this, "checkShowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSubType = software.amazon.jsii.Kernel.get(this, "instanceSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sectionIds = software.amazon.jsii.Kernel.get(this, "sectionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vendor = software.amazon.jsii.Kernel.get(this, "vendor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.assistInfo = software.amazon.jsii.Kernel.get(this, "assistInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.solution = software.amazon.jsii.Kernel.get(this, "solution", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.checkRule = java.util.Objects.requireNonNull(builder.checkRule, "checkRule is required");
            this.checkShowName = java.util.Objects.requireNonNull(builder.checkShowName, "checkShowName is required");
            this.instanceSubType = java.util.Objects.requireNonNull(builder.instanceSubType, "instanceSubType is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
            this.sectionIds = java.util.Objects.requireNonNull(builder.sectionIds, "sectionIds is required");
            this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
            this.vendor = java.util.Objects.requireNonNull(builder.vendor, "vendor is required");
            this.assistInfo = builder.assistInfo;
            this.description = builder.description;
            this.remark = builder.remark;
            this.solution = builder.solution;
        }

        @Override
        public final java.lang.Object getCheckRule() {
            return this.checkRule;
        }

        @Override
        public final java.lang.Object getCheckShowName() {
            return this.checkShowName;
        }

        @Override
        public final java.lang.Object getInstanceSubType() {
            return this.instanceSubType;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getRiskLevel() {
            return this.riskLevel;
        }

        @Override
        public final java.lang.Object getSectionIds() {
            return this.sectionIds;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getVendor() {
            return this.vendor;
        }

        @Override
        public final java.lang.Object getAssistInfo() {
            return this.assistInfo;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        public final java.lang.Object getSolution() {
            return this.solution;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("checkRule", om.valueToTree(this.getCheckRule()));
            data.set("checkShowName", om.valueToTree(this.getCheckShowName()));
            data.set("instanceSubType", om.valueToTree(this.getInstanceSubType()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            data.set("sectionIds", om.valueToTree(this.getSectionIds()));
            data.set("status", om.valueToTree(this.getStatus()));
            data.set("vendor", om.valueToTree(this.getVendor()));
            if (this.getAssistInfo() != null) {
                data.set("assistInfo", om.valueToTree(this.getAssistInfo()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getSolution() != null) {
                data.set("solution", om.valueToTree(this.getSolution()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.CustomCheckItemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomCheckItemProps.Jsii$Proxy that = (CustomCheckItemProps.Jsii$Proxy) o;

            if (!checkRule.equals(that.checkRule)) return false;
            if (!checkShowName.equals(that.checkShowName)) return false;
            if (!instanceSubType.equals(that.instanceSubType)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (!sectionIds.equals(that.sectionIds)) return false;
            if (!status.equals(that.status)) return false;
            if (!vendor.equals(that.vendor)) return false;
            if (this.assistInfo != null ? !this.assistInfo.equals(that.assistInfo) : that.assistInfo != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            return this.solution != null ? this.solution.equals(that.solution) : that.solution == null;
        }

        @Override
        public final int hashCode() {
            int result = this.checkRule.hashCode();
            result = 31 * result + (this.checkShowName.hashCode());
            result = 31 * result + (this.instanceSubType.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.sectionIds.hashCode());
            result = 31 * result + (this.status.hashCode());
            result = 31 * result + (this.vendor.hashCode());
            result = 31 * result + (this.assistInfo != null ? this.assistInfo.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.solution != null ? this.solution.hashCode() : 0);
            return result;
        }
    }
}

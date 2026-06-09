package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosCustomCheckItem</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.550Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosCustomCheckItemProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomCheckItemProps.Jsii$Proxy.class)
public interface RosCustomCheckItemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCheckRule();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCheckShowName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSubType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSectionIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVendor();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAssistInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolution() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomCheckItemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomCheckItemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomCheckItemProps> {
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
         * Sets the value of {@link RosCustomCheckItemProps#getCheckRule}
         * @param checkRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder checkRule(com.aliyun.ros.cdk.core.IResolvable checkRule) {
            this.checkRule = checkRule;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getCheckRule}
         * @param checkRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder checkRule(java.util.Map<java.lang.String, ? extends java.lang.Object> checkRule) {
            this.checkRule = checkRule;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getCheckShowName}
         * @param checkShowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder checkShowName(java.lang.String checkShowName) {
            this.checkShowName = checkShowName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getCheckShowName}
         * @param checkShowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder checkShowName(com.aliyun.ros.cdk.core.IResolvable checkShowName) {
            this.checkShowName = checkShowName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getInstanceSubType}
         * @param instanceSubType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSubType(java.lang.String instanceSubType) {
            this.instanceSubType = instanceSubType;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getInstanceSubType}
         * @param instanceSubType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSubType(com.aliyun.ros.cdk.core.IResolvable instanceSubType) {
            this.instanceSubType = instanceSubType;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.String riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getSectionIds}
         * @param sectionIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sectionIds(com.aliyun.ros.cdk.core.IResolvable sectionIds) {
            this.sectionIds = sectionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getSectionIds}
         * @param sectionIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sectionIds(java.util.List<? extends java.lang.Object> sectionIds) {
            this.sectionIds = sectionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getStatus}
         * @param status the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getStatus}
         * @param status the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getVendor}
         * @param vendor the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vendor(java.lang.String vendor) {
            this.vendor = vendor;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getVendor}
         * @param vendor the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vendor(com.aliyun.ros.cdk.core.IResolvable vendor) {
            this.vendor = vendor;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getAssistInfo}
         * @param assistInfo the value to be set.
         * @return {@code this}
         */
        public Builder assistInfo(com.aliyun.ros.cdk.core.IResolvable assistInfo) {
            this.assistInfo = assistInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getAssistInfo}
         * @param assistInfo the value to be set.
         * @return {@code this}
         */
        public Builder assistInfo(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.AssistInfoProperty assistInfo) {
            this.assistInfo = assistInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.DescriptionProperty description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getSolution}
         * @param solution the value to be set.
         * @return {@code this}
         */
        public Builder solution(com.aliyun.ros.cdk.core.IResolvable solution) {
            this.solution = solution;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomCheckItemProps#getSolution}
         * @param solution the value to be set.
         * @return {@code this}
         */
        public Builder solution(com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.SolutionProperty solution) {
            this.solution = solution;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomCheckItemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomCheckItemProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomCheckItemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomCheckItemProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosCustomCheckItemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomCheckItemProps.Jsii$Proxy that = (RosCustomCheckItemProps.Jsii$Proxy) o;

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

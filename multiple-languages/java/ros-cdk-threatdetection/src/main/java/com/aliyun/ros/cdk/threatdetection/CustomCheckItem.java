package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::CustomCheckItem</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.446Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.CustomCheckItem")
public class CustomCheckItem extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.ICustomCheckItem {

    protected CustomCheckItem(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomCheckItem(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CustomCheckItem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CustomCheckItem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AssistInfo: Check Item Description Help Information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssistInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrAssistInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CheckId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckId() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CheckRule: Check Item Check Rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckRule() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CheckShowName: Check item display name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckShowName() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckShowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Check item description information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSubType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: Asset type to which the check item belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Remark: Remarks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
        return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RiskLevel: Risk level of inspection items.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSectionIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSectionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Solution: Check Item Solution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSolution() {
        return software.amazon.jsii.Kernel.get(this, "attrSolution", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Vendor: Vendor to which the item belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVendor() {
        return software.amazon.jsii.Kernel.get(this, "attrVendor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.CustomCheckItem}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.CustomCheckItem> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps.Builder();
        }

        /**
         * Property checkRule: Check Item Check Rules.
         * <p>
         * @return {@code this}
         * @param checkRule Property checkRule: Check Item Check Rules. This parameter is required.
         */
        public Builder checkRule(final com.aliyun.ros.cdk.core.IResolvable checkRule) {
            this.props.checkRule(checkRule);
            return this;
        }
        /**
         * Property checkRule: Check Item Check Rules.
         * <p>
         * @return {@code this}
         * @param checkRule Property checkRule: Check Item Check Rules. This parameter is required.
         */
        public Builder checkRule(final java.util.Map<java.lang.String, ? extends java.lang.Object> checkRule) {
            this.props.checkRule(checkRule);
            return this;
        }

        /**
         * Property checkShowName: Check item display name.
         * <p>
         * @return {@code this}
         * @param checkShowName Property checkShowName: Check item display name. This parameter is required.
         */
        public Builder checkShowName(final java.lang.String checkShowName) {
            this.props.checkShowName(checkShowName);
            return this;
        }
        /**
         * Property checkShowName: Check item display name.
         * <p>
         * @return {@code this}
         * @param checkShowName Property checkShowName: Check item display name. This parameter is required.
         */
        public Builder checkShowName(final com.aliyun.ros.cdk.core.IResolvable checkShowName) {
            this.props.checkShowName(checkShowName);
            return this;
        }

        /**
         * Property instanceSubType: Asset subtype to which the check item belongs.
         * <p>
         * @return {@code this}
         * @param instanceSubType Property instanceSubType: Asset subtype to which the check item belongs. This parameter is required.
         */
        public Builder instanceSubType(final java.lang.String instanceSubType) {
            this.props.instanceSubType(instanceSubType);
            return this;
        }
        /**
         * Property instanceSubType: Asset subtype to which the check item belongs.
         * <p>
         * @return {@code this}
         * @param instanceSubType Property instanceSubType: Asset subtype to which the check item belongs. This parameter is required.
         */
        public Builder instanceSubType(final com.aliyun.ros.cdk.core.IResolvable instanceSubType) {
            this.props.instanceSubType(instanceSubType);
            return this;
        }

        /**
         * Property instanceType: Asset type to which the check item belongs.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Asset type to which the check item belongs. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: Asset type to which the check item belongs.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Asset type to which the check item belongs. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property riskLevel: Risk level of inspection items.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Risk level of inspection items. This parameter is required.
         */
        public Builder riskLevel(final java.lang.String riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }
        /**
         * Property riskLevel: Risk level of inspection items.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Risk level of inspection items. This parameter is required.
         */
        public Builder riskLevel(final com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }

        /**
         * Property sectionIds: CHECK SECTION OF INSPECTIONS.
         * <p>
         * @return {@code this}
         * @param sectionIds Property sectionIds: CHECK SECTION OF INSPECTIONS. This parameter is required.
         */
        public Builder sectionIds(final com.aliyun.ros.cdk.core.IResolvable sectionIds) {
            this.props.sectionIds(sectionIds);
            return this;
        }
        /**
         * Property sectionIds: CHECK SECTION OF INSPECTIONS.
         * <p>
         * @return {@code this}
         * @param sectionIds Property sectionIds: CHECK SECTION OF INSPECTIONS. This parameter is required.
         */
        public Builder sectionIds(final java.util.List<? extends java.lang.Object> sectionIds) {
            this.props.sectionIds(sectionIds);
            return this;
        }

        /**
         * Property status: Check item status.
         * <p>
         * Values:
         * EDIT: Editing in progress
         * RELEASE: Published
         * <p>
         * @return {@code this}
         * @param status Property status: Check item status. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: Check item status.
         * <p>
         * Values:
         * EDIT: Editing in progress
         * RELEASE: Published
         * <p>
         * @return {@code this}
         * @param status Property status: Check item status. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property vendor: Vendor to which the item belongs.
         * <p>
         * @return {@code this}
         * @param vendor Property vendor: Vendor to which the item belongs. This parameter is required.
         */
        public Builder vendor(final java.lang.String vendor) {
            this.props.vendor(vendor);
            return this;
        }
        /**
         * Property vendor: Vendor to which the item belongs.
         * <p>
         * @return {@code this}
         * @param vendor Property vendor: Vendor to which the item belongs. This parameter is required.
         */
        public Builder vendor(final com.aliyun.ros.cdk.core.IResolvable vendor) {
            this.props.vendor(vendor);
            return this;
        }

        /**
         * Property assistInfo: Check Item Description Help Information.
         * <p>
         * @return {@code this}
         * @param assistInfo Property assistInfo: Check Item Description Help Information. This parameter is required.
         */
        public Builder assistInfo(final com.aliyun.ros.cdk.core.IResolvable assistInfo) {
            this.props.assistInfo(assistInfo);
            return this;
        }
        /**
         * Property assistInfo: Check Item Description Help Information.
         * <p>
         * @return {@code this}
         * @param assistInfo Property assistInfo: Check Item Description Help Information. This parameter is required.
         */
        public Builder assistInfo(final com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.AssistInfoProperty assistInfo) {
            this.props.assistInfo(assistInfo);
            return this;
        }

        /**
         * Property description: Check item description information.
         * <p>
         * @return {@code this}
         * @param description Property description: Check item description information. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Check item description information.
         * <p>
         * @return {@code this}
         * @param description Property description: Check item description information. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.DescriptionProperty description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property remark: Remarks.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remarks. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: Remarks.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remarks. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property solution: Check Item Solution.
         * <p>
         * @return {@code this}
         * @param solution Property solution: Check Item Solution. This parameter is required.
         */
        public Builder solution(final com.aliyun.ros.cdk.core.IResolvable solution) {
            this.props.solution(solution);
            return this;
        }
        /**
         * Property solution: Check Item Solution.
         * <p>
         * @return {@code this}
         * @param solution Property solution: Check Item Solution. This parameter is required.
         */
        public Builder solution(final com.aliyun.ros.cdk.threatdetection.RosCustomCheckItem.SolutionProperty solution) {
            this.props.solution(solution);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.CustomCheckItem}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.CustomCheckItem build() {
            return new com.aliyun.ros.cdk.threatdetection.CustomCheckItem(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

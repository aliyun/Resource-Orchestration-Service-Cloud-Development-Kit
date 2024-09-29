package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::PatchBaseline</code>, which is used to create a patch baseline.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:41.046Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.PatchBaseline")
public class PatchBaseline extends com.aliyun.ros.cdk.core.Resource {

    protected PatchBaseline(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PatchBaseline(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PatchBaseline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PatchBaseline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApprovalRules() {
        return software.amazon.jsii.Kernel.get(this, "attrApprovalRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApprovedPatches() {
        return software.amazon.jsii.Kernel.get(this, "attrApprovedPatches", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApprovedPatchesEnableNonSecurity() {
        return software.amazon.jsii.Kernel.get(this, "attrApprovedPatchesEnableNonSecurity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperationSystem() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationSystem", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineId() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineName() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRejectedPatches() {
        return software.amazon.jsii.Kernel.get(this, "attrRejectedPatches", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RejectedPatchesAction: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRejectedPatchesAction() {
        return software.amazon.jsii.Kernel.get(this, "attrRejectedPatchesAction", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrShareType() {
        return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Sources: Patch source configuration list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSources() {
        return software.amazon.jsii.Kernel.get(this, "attrSources", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: Tags of patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdatedDate() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.PatchBaselineProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.PatchBaseline}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.PatchBaseline> {
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
        private final com.aliyun.ros.cdk.oos.PatchBaselineProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.PatchBaselineProps.Builder();
        }

        /**
         * Property approvalRules: The rules of scanning and installing patches for the specified operating system.
         * <p>
         * @return {@code this}
         * @param approvalRules Property approvalRules: The rules of scanning and installing patches for the specified operating system. This parameter is required.
         */
        public Builder approvalRules(final com.aliyun.ros.cdk.core.IResolvable approvalRules) {
            this.props.approvalRules(approvalRules);
            return this;
        }
        /**
         * Property approvalRules: The rules of scanning and installing patches for the specified operating system.
         * <p>
         * @return {@code this}
         * @param approvalRules Property approvalRules: The rules of scanning and installing patches for the specified operating system. This parameter is required.
         */
        public Builder approvalRules(final java.util.Map<java.lang.String, ? extends java.lang.Object> approvalRules) {
            this.props.approvalRules(approvalRules);
            return this;
        }

        /**
         * Property operationSystem: The type of the operating system.
         * <p>
         * @return {@code this}
         * @param operationSystem Property operationSystem: The type of the operating system. This parameter is required.
         */
        public Builder operationSystem(final java.lang.String operationSystem) {
            this.props.operationSystem(operationSystem);
            return this;
        }
        /**
         * Property operationSystem: The type of the operating system.
         * <p>
         * @return {@code this}
         * @param operationSystem Property operationSystem: The type of the operating system. This parameter is required.
         */
        public Builder operationSystem(final com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.props.operationSystem(operationSystem);
            return this;
        }

        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final java.lang.String patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }
        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }

        /**
         * Property approvedPatches: Approved patch list.
         * <p>
         * @return {@code this}
         * @param approvedPatches Property approvedPatches: Approved patch list. This parameter is required.
         */
        public Builder approvedPatches(final com.aliyun.ros.cdk.core.IResolvable approvedPatches) {
            this.props.approvedPatches(approvedPatches);
            return this;
        }
        /**
         * Property approvedPatches: Approved patch list.
         * <p>
         * @return {@code this}
         * @param approvedPatches Property approvedPatches: Approved patch list. This parameter is required.
         */
        public Builder approvedPatches(final java.util.List<? extends java.lang.Object> approvedPatches) {
            this.props.approvedPatches(approvedPatches);
            return this;
        }

        /**
         * Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
         * <p>
         * @return {@code this}
         * @param approvedPatchesEnableNonSecurity Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security. This parameter is required.
         */
        public Builder approvedPatchesEnableNonSecurity(final java.lang.Boolean approvedPatchesEnableNonSecurity) {
            this.props.approvedPatchesEnableNonSecurity(approvedPatchesEnableNonSecurity);
            return this;
        }
        /**
         * Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
         * <p>
         * @return {@code this}
         * @param approvedPatchesEnableNonSecurity Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security. This parameter is required.
         */
        public Builder approvedPatchesEnableNonSecurity(final com.aliyun.ros.cdk.core.IResolvable approvedPatchesEnableNonSecurity) {
            this.props.approvedPatchesEnableNonSecurity(approvedPatchesEnableNonSecurity);
            return this;
        }

        /**
         * Property description: The description of the patch baseline.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the patch baseline. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the patch baseline.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the patch baseline. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property rejectedPatches: Rejected patch list.
         * <p>
         * @return {@code this}
         * @param rejectedPatches Property rejectedPatches: Rejected patch list. This parameter is required.
         */
        public Builder rejectedPatches(final com.aliyun.ros.cdk.core.IResolvable rejectedPatches) {
            this.props.rejectedPatches(rejectedPatches);
            return this;
        }
        /**
         * Property rejectedPatches: Rejected patch list.
         * <p>
         * @return {@code this}
         * @param rejectedPatches Property rejectedPatches: Rejected patch list. This parameter is required.
         */
        public Builder rejectedPatches(final java.util.List<? extends java.lang.Object> rejectedPatches) {
            this.props.rejectedPatches(rejectedPatches);
            return this;
        }

        /**
         * Property rejectedPatchesAction: The operation of rejecting the patch.
         * <p>
         * @return {@code this}
         * @param rejectedPatchesAction Property rejectedPatchesAction: The operation of rejecting the patch. This parameter is required.
         */
        public Builder rejectedPatchesAction(final java.lang.String rejectedPatchesAction) {
            this.props.rejectedPatchesAction(rejectedPatchesAction);
            return this;
        }
        /**
         * Property rejectedPatchesAction: The operation of rejecting the patch.
         * <p>
         * @return {@code this}
         * @param rejectedPatchesAction Property rejectedPatchesAction: The operation of rejecting the patch. This parameter is required.
         */
        public Builder rejectedPatchesAction(final com.aliyun.ros.cdk.core.IResolvable rejectedPatchesAction) {
            this.props.rejectedPatchesAction(rejectedPatchesAction);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property sources: Patch source configuration list.
         * <p>
         * @return {@code this}
         * @param sources Property sources: Patch source configuration list. This parameter is required.
         */
        public Builder sources(final com.aliyun.ros.cdk.core.IResolvable sources) {
            this.props.sources(sources);
            return this;
        }
        /**
         * Property sources: Patch source configuration list.
         * <p>
         * @return {@code this}
         * @param sources Property sources: Patch source configuration list. This parameter is required.
         */
        public Builder sources(final java.util.List<? extends java.lang.Object> sources) {
            this.props.sources(sources);
            return this;
        }

        /**
         * Property tags: Tags of patch baseline.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of patch baseline. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.PatchBaseline}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.PatchBaseline build() {
            return new com.aliyun.ros.cdk.oos.PatchBaseline(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

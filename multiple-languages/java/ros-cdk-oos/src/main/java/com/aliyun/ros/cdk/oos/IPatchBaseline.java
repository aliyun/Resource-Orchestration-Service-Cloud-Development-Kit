package com.aliyun.ros.cdk.oos;

/**
 * Represents a <code>PatchBaseline</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.386Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.IPatchBaseline")
@software.amazon.jsii.Jsii.Proxy(IPatchBaseline.Jsii$Proxy.class)
public interface IPatchBaseline extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalRules();

    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatches();

    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatchesEnableNonSecurity();

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault();

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationSystem();

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineId();

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineName();

    /**
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatches();

    /**
     * Attribute RejectedPatchesAction: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatchesAction();

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute Sources: Patch source configuration list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources();

    /**
     * Attribute Tags: Tags of patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy();

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.IPatchBaseline.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalRules() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApprovedPatches: Approved patch list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatches() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatchesEnableNonSecurity() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovedPatchesEnableNonSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the patch baseline was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationSystem: The type of the operating system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationSystem() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PatchBaselineId: The ID of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineId() {
            return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PatchBaselineName: The name of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineName() {
            return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RejectedPatches: Reject the name of the patch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatches() {
            return software.amazon.jsii.Kernel.get(this, "attrRejectedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RejectedPatchesAction: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatchesAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRejectedPatchesAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Approve whether the patch includes updates other than security.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sources: Patch source configuration list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources() {
            return software.amazon.jsii.Kernel.get(this, "attrSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last modified the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the patch baseline was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.PatchBaselineProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPatchBaseline}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPatchBaseline, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalRules() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApprovedPatches: Approved patch list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatches() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovedPatchesEnableNonSecurity() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovedPatchesEnableNonSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the patch baseline was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationSystem: The type of the operating system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationSystem() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PatchBaselineId: The ID of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineId() {
            return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PatchBaselineName: The name of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPatchBaselineName() {
            return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RejectedPatches: Reject the name of the patch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatches() {
            return software.amazon.jsii.Kernel.get(this, "attrRejectedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RejectedPatchesAction: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRejectedPatchesAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRejectedPatchesAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Approve whether the patch includes updates other than security.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sources: Patch source configuration list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources() {
            return software.amazon.jsii.Kernel.get(this, "attrSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedBy: The user who last modified the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedDate: The time when the patch baseline was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.PatchBaselineProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.PatchBaselineProps.class));
        }
    }
}

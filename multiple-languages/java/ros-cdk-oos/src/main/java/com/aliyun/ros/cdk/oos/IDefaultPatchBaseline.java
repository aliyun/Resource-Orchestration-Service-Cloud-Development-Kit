package com.aliyun.ros.cdk.oos;

/**
 * Represents a <code>DefaultPatchBaseline</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.502Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.IDefaultPatchBaseline")
@software.amazon.jsii.Jsii.Proxy(IDefaultPatchBaseline.Jsii$Proxy.class)
public interface IDefaultPatchBaseline extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalRules();

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate();

    /**
     * Attribute Description: The description of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

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
     * Attribute ShareType: The share type of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy();

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.IDefaultPatchBaseline.Jsii$Default {
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
         * Attribute CreatedBy: The creator of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: The time when the patch baseline was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute ShareType: The share type of the patch baseline.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDefaultPatchBaseline}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDefaultPatchBaseline, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreatedBy: The creator of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedDate: The time when the patch baseline was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedDate() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute ShareType: The share type of the patch baseline.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps.class));
        }
    }
}

package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>CustomCheckItem</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.496Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ICustomCheckItem")
@software.amazon.jsii.Jsii.Proxy(ICustomCheckItem.Jsii$Proxy.class)
public interface ICustomCheckItem extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AssistInfo: Check Item Description Help Information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssistInfo();

    /**
     * Attribute CheckId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckId();

    /**
     * Attribute CheckRule: Check Item Check Rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckRule();

    /**
     * Attribute CheckShowName: Check item display name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckShowName();

    /**
     * Attribute Description: Check item description information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSubType();

    /**
     * Attribute InstanceType: Asset type to which the check item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute Remark: Remarks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark();

    /**
     * Attribute RiskLevel: Risk level of inspection items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel();

    /**
     * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSectionIds();

    /**
     * Attribute Solution: Check Item Solution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSolution();

    /**
     * Attribute Vendor: Vendor to which the item belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVendor();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.ICustomCheckItem.Jsii$Default {
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
         * Attribute AssistInfo: Check Item Description Help Information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssistInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAssistInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckId() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckRule: Check Item Check Rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckRule() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckShowName: Check item display name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckShowName() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckShowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Check item description information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSubType: Asset subtype to which the check item belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Asset type to which the check item belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remarks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: Risk level of inspection items.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSectionIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSectionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Solution: Check Item Solution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSolution() {
            return software.amazon.jsii.Kernel.get(this, "attrSolution", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vendor: Vendor to which the item belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVendor() {
            return software.amazon.jsii.Kernel.get(this, "attrVendor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICustomCheckItem}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICustomCheckItem, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AssistInfo: Check Item Description Help Information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssistInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrAssistInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckId() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckRule: Check Item Check Rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckRule() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckShowName: Check item display name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckShowName() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckShowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Check item description information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSubType: Asset subtype to which the check item belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Asset type to which the check item belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remarks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: Risk level of inspection items.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSectionIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSectionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Solution: Check Item Solution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSolution() {
            return software.amazon.jsii.Kernel.get(this, "attrSolution", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vendor: Vendor to which the item belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVendor() {
            return software.amazon.jsii.Kernel.get(this, "attrVendor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CustomCheckItemProps.class));
        }
    }
}

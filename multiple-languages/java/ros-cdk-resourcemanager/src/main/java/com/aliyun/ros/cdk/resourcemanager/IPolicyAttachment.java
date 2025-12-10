package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>PolicyAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.829Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IPolicyAttachment")
@software.amazon.jsii.Jsii.Proxy(IPolicyAttachment.Jsii$Proxy.class)
public interface IPolicyAttachment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttachDate: Authorization time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachDate();

    /**
     * Attribute Description: Policy description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute PolicyName: The name of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName();

    /**
     * Attribute PolicyType: The type of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType();

    /**
     * Attribute PrincipalName: The name of the object to which you want to attach the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalName();

    /**
     * Attribute PrincipalType: The type of the object to which you want to attach the policy.
     * <p>
     * Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.PolicyAttachmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IPolicyAttachment.Jsii$Default {
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
         * Attribute AttachDate: Authorization time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachDate() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Policy description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyType: The type of the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrincipalName: The name of the object to which you want to attach the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalName() {
            return software.amazon.jsii.Kernel.get(this, "attrPrincipalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrincipalType: The type of the object to which you want to attach the policy.
         * <p>
         * Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalType() {
            return software.amazon.jsii.Kernel.get(this, "attrPrincipalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.PolicyAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.PolicyAttachmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPolicyAttachment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPolicyAttachment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AttachDate: Authorization time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachDate() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Policy description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyType: The type of the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrincipalName: The name of the object to which you want to attach the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalName() {
            return software.amazon.jsii.Kernel.get(this, "attrPrincipalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrincipalType: The type of the object to which you want to attach the policy.
         * <p>
         * Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrincipalType() {
            return software.amazon.jsii.Kernel.get(this, "attrPrincipalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.PolicyAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.PolicyAttachmentProps.class));
        }
    }
}

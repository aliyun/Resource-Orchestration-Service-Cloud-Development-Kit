package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>ControlPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.626Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IControlPolicy")
@software.amazon.jsii.Jsii.Proxy(IControlPolicy.Jsii$Proxy.class)
public interface IControlPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttachmentCount: AttachmentCount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachmentCount();

    /**
     * Attribute ControlPolicyName: PolicyName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlPolicyName();

    /**
     * Attribute Description: Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EffectScope: EffectScope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectScope();

    /**
     * Attribute PolicyDocument: PolicyDocument.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyDocument();

    /**
     * Attribute PolicyId: PolicyId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId();

    /**
     * Attribute PolicyType: PolicyType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IControlPolicy.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AttachmentCount: AttachmentCount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachmentCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachmentCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ControlPolicyName: PolicyName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrControlPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EffectScope: EffectScope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectScope() {
            return software.amazon.jsii.Kernel.get(this, "attrEffectScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyDocument: PolicyDocument.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: PolicyId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyType: PolicyType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IControlPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IControlPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AttachmentCount: AttachmentCount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachmentCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachmentCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ControlPolicyName: PolicyName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrControlPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EffectScope: EffectScope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectScope() {
            return software.amazon.jsii.Kernel.get(this, "attrEffectScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyDocument: PolicyDocument.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: PolicyId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyType: PolicyType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyType() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps.class));
        }
    }
}

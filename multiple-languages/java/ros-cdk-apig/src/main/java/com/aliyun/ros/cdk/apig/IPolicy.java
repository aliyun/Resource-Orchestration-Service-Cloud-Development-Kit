package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.693Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IPolicy")
@software.amazon.jsii.Jsii.Proxy(IPolicy.Jsii$Proxy.class)
public interface IPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute PolicyClassId: The ID of policy class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassId();

    /**
     * Attribute PolicyClassName: The name of policy class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassName();

    /**
     * Attribute PolicyConfig: Policy Configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyConfig();

    /**
     * Attribute PolicyId: The ID of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId();

    /**
     * Attribute PolicyName: The name of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IPolicy.Jsii$Default {
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
         * Attribute PolicyClassId: The ID of policy class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyClassName: The name of policy class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyConfig: Policy Configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: The ID of the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute PolicyClassId: The ID of policy class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyClassName: The name of policy class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyConfig: Policy Configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: The ID of the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PolicyProps.class));
        }
    }
}

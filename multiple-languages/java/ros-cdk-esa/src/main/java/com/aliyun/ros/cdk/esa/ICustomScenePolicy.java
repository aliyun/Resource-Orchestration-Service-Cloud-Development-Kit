package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>CustomScenePolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.519Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ICustomScenePolicy")
@software.amazon.jsii.Jsii.Proxy(ICustomScenePolicy.Jsii$Proxy.class)
public interface ICustomScenePolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the policy takes effect.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CustomScenePolicyName: The name of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomScenePolicyName();

    /**
     * Attribute EndTime: The time when the policy expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute Objects: The IDs of websites associated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjects();

    /**
     * Attribute PolicyId: The Id of the Policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId();

    /**
     * Attribute Template: The name of the policy template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.ICustomScenePolicy.Jsii$Default {
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
         * Attribute CreateTime: The time when the policy takes effect.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomScenePolicyName: The name of the policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomScenePolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomScenePolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the policy expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Objects: The IDs of websites associated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjects() {
            return software.amazon.jsii.Kernel.get(this, "attrObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: The Id of the Policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Template: The name of the policy template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplate() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CustomScenePolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICustomScenePolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICustomScenePolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the policy takes effect.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomScenePolicyName: The name of the policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomScenePolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomScenePolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the policy expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Objects: The IDs of websites associated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjects() {
            return software.amazon.jsii.Kernel.get(this, "attrObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyId: The Id of the Policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Template: The name of the policy template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplate() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CustomScenePolicyProps.class));
        }
    }
}

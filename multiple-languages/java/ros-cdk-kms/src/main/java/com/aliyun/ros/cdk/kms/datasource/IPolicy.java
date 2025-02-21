package com.aliyun.ros.cdk.kms.datasource;

/**
 * Represents a <code>Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.777Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.datasource.IPolicy")
@software.amazon.jsii.Jsii.Proxy(IPolicy.Jsii$Proxy.class)
public interface IPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: The policy description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute KmsInstanceId: KMS instance accessed by this policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsInstanceId();

    /**
     * Attribute NetworkRules: The network access rule that is associated with the permission policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkRules();

    /**
     * Attribute Permissions: A list of operations that can be performed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions();

    /**
     * Attribute PolicyName: The name of the permission policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName();

    /**
     * Attribute Resources: A list of keys and secrets that are allowed to access.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.PolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.kms.datasource.IPolicy.Jsii$Default {
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
         * Attribute Description: The policy description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsInstanceId: KMS instance accessed by this policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkRules: The network access rule that is associated with the permission policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkRules() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Permissions: A list of operations that can be performed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions() {
            return software.amazon.jsii.Kernel.get(this, "attrPermissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the permission policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resources: A list of keys and secrets that are allowed to access.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources() {
            return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.PolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.PolicyProps.class));
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
         * Attribute Description: The policy description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsInstanceId: KMS instance accessed by this policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkRules: The network access rule that is associated with the permission policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkRules() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Permissions: A list of operations that can be performed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions() {
            return software.amazon.jsii.Kernel.get(this, "attrPermissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolicyName: The name of the permission policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resources: A list of keys and secrets that are allowed to access.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources() {
            return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.PolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.PolicyProps.class));
        }
    }
}

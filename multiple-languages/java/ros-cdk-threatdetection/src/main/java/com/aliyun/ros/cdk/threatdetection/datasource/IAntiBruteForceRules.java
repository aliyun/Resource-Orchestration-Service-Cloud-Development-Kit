package com.aliyun.ros.cdk.threatdetection.datasource;

/**
 * Represents a <code>AntiBruteForceRules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.775Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.datasource.IAntiBruteForceRules")
@software.amazon.jsii.Jsii.Proxy(IAntiBruteForceRules.Jsii$Proxy.class)
public interface IAntiBruteForceRules extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleIds();

    /**
     * Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRules();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRulesProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.datasource.IAntiBruteForceRules.Jsii$Default {
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
         * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AntiBruteForceRules: The list of anti brute force rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRules() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRulesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRulesProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAntiBruteForceRules}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAntiBruteForceRules, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AntiBruteForceRules: The list of anti brute force rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRules() {
            return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRulesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRulesProps.class));
        }
    }
}

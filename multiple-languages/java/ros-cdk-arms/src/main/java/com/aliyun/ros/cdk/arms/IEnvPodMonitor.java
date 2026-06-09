package com.aliyun.ros.cdk.arms;

/**
 * Represents a <code>EnvPodMonitor</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:31:39.071Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.IEnvPodMonitor")
@software.amazon.jsii.Jsii.Proxy(IEnvPodMonitor.Jsii$Proxy.class)
public interface IEnvPodMonitor extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigYaml();

    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId();

    /**
     * Attribute EnvPodMonitorName: The name of the PodMonitor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvPodMonitorName();

    /**
     * Attribute Namespace: The namespace of the PodMonitor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvPodMonitorProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.IEnvPodMonitor.Jsii$Default {
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
         * Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigYaml() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigYaml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The ID of the environment instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvPodMonitorName: The name of the PodMonitor.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvPodMonitorName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvPodMonitorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace of the PodMonitor.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvPodMonitorProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvPodMonitorProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnvPodMonitor}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnvPodMonitor, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigYaml() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigYaml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The ID of the environment instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvPodMonitorName: The name of the PodMonitor.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvPodMonitorName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvPodMonitorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace of the PodMonitor.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvPodMonitorProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvPodMonitorProps.class));
        }
    }
}

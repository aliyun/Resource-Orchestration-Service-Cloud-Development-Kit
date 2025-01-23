package com.aliyun.ros.cdk.sls;

/**
 * Represents a <code>LogtailConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:44.488Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.ILogtailConfig")
@software.amazon.jsii.Jsii.Proxy(ILogtailConfig.Jsii$Proxy.class)
public interface ILogtailConfig extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppliedMachineGroups: Applied machine groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppliedMachineGroups();

    /**
     * Attribute Endpoint: Endpoint address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint();

    /**
     * Attribute LogtailConfigName: Logtail config name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogtailConfigName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogtailConfigProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.sls.ILogtailConfig.Jsii$Default {
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
         * Attribute AppliedMachineGroups: Applied machine groups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppliedMachineGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrAppliedMachineGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoint: Endpoint address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogtailConfigName: Logtail config name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogtailConfigName() {
            return software.amazon.jsii.Kernel.get(this, "attrLogtailConfigName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogtailConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.LogtailConfigProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILogtailConfig}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILogtailConfig, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppliedMachineGroups: Applied machine groups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppliedMachineGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrAppliedMachineGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoint: Endpoint address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogtailConfigName: Logtail config name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogtailConfigName() {
            return software.amazon.jsii.Kernel.get(this, "attrLogtailConfigName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogtailConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.LogtailConfigProps.class));
        }
    }
}

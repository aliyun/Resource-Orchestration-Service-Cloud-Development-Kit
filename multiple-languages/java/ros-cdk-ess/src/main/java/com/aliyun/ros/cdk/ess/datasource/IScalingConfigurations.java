package com.aliyun.ros.cdk.ess.datasource;

/**
 * Represents a <code>ScalingConfigurations</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.828Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.IScalingConfigurations")
@software.amazon.jsii.Jsii.Proxy(IScalingConfigurations.Jsii$Proxy.class)
public interface IScalingConfigurations extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationIds();

    /**
     * Attribute ScalingConfigurations: The list of scaling configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurations();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ess.datasource.IScalingConfigurations.Jsii$Default {
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
         * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationIds() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingConfigurations: The list of scaling configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurations() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScalingConfigurations}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScalingConfigurations, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationIds() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingConfigurations: The list of scaling configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurations() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps.class));
        }
    }
}

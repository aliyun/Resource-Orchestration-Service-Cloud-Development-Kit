package com.aliyun.ros.cdk.arms;

/**
 * Represents a <code>Environment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.384Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.IEnvironment")
@software.amazon.jsii.Jsii.Proxy(IEnvironment.Jsii$Proxy.class)
public interface IEnvironment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EnvironmentId: The id of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId();

    /**
     * Attribute EnvironmentName: The name of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName();

    /**
     * Attribute EnvironmentSubType: The subtype of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType();

    /**
     * Attribute EnvironmentType: The type of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType();

    /**
     * Attribute FeePackage: The payable resource plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage();

    /**
     * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceId();

    /**
     * Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType();

    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.IEnvironment.Jsii$Default {
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
         * Attribute EnvironmentId: The id of the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentName: The name of the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentSubType: The subtype of the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentType: The type of the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeePackage: The payable resource plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
            return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ManagedType: Specifies whether agents or exporters are managed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
            return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnvironment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnvironment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EnvironmentId: The id of the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentName: The name of the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentSubType: The subtype of the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentType: The type of the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeePackage: The payable resource plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
            return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ManagedType: Specifies whether agents or exporters are managed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
            return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentProps.class));
        }
    }
}

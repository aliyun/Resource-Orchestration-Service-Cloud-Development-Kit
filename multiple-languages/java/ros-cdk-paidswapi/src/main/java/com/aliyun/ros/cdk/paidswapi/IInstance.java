package com.aliyun.ros.cdk.paidswapi;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.224Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidswapi.$Module.class, fqn = "@alicloud/ros-cdk-paidswapi.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute Datasets: A collection of datasets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets();

    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSpec();

    /**
     * Attribute EnvironmentVariables: Environment variable.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentVariables();

    /**
     * Attribute ImageUrl: The mirror address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl();

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceUrl: The instance address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUrl();

    /**
     * Attribute JupyterlabUrl: The jupyterlab address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJupyterlabUrl();

    /**
     * Attribute Labels: User-defined labels.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute TerminalUrl: The terminal address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTerminalUrl();

    /**
     * Attribute UserVpc: User vpc configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpc();

    /**
     * Attribute WebIDEUrl: The web IDE address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebIdeUrl();

    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidswapi.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.paidswapi.IInstance.Jsii$Default {
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
         * Attribute Accessibility: Whether the workspace is visible to others.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Datasets: A collection of datasets.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsSpec: The ECS specification of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentVariables: Environment variable.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentVariables() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUrl: The mirror address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceUrl: The instance address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JupyterlabUrl: The jupyterlab address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJupyterlabUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrJupyterlabUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: User-defined labels.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TerminalUrl: The terminal address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTerminalUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTerminalUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVpc: User vpc configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpc() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WebIDEUrl: The web IDE address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebIdeUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrWebIdeUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The Id of the workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidswapi.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paidswapi.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Whether the workspace is visible to others.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Datasets: A collection of datasets.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsSpec: The ECS specification of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentVariables: Environment variable.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentVariables() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUrl: The mirror address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceUrl: The instance address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JupyterlabUrl: The jupyterlab address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJupyterlabUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrJupyterlabUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: User-defined labels.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TerminalUrl: The terminal address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTerminalUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTerminalUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVpc: User vpc configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpc() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WebIDEUrl: The web IDE address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebIdeUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrWebIdeUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The Id of the workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidswapi.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paidswapi.InstanceProps.class));
        }
    }
}

package com.aliyun.ros.cdk.arms.datasource;

/**
 * Represents a <code>GrafanaWorkspaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.032Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.IGrafanaWorkspaces")
@software.amazon.jsii.Jsii.Proxy(IGrafanaWorkspaces.Jsii$Proxy.class)
public interface IGrafanaWorkspaces extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceIds();

    /**
     * Attribute GrafanaWorkspaces: The list of grafana workspaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaces();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.GrafanaWorkspacesProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.datasource.IGrafanaWorkspaces.Jsii$Default {
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
         * Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaWorkspaces: The list of grafana workspaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaces() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.GrafanaWorkspacesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.GrafanaWorkspacesProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IGrafanaWorkspaces}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IGrafanaWorkspaces, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaWorkspaces: The list of grafana workspaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaces() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.GrafanaWorkspacesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.GrafanaWorkspacesProps.class));
        }
    }
}

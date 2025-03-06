package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>WorkspaceResourceDlc</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IWorkspaceResourceDlc")
@software.amazon.jsii.Jsii.Proxy(IWorkspaceResourceDlc.Jsii$Proxy.class)
public interface IWorkspaceResourceDlc extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute GroupName: Resource group name.
     * <p>
     * If you want to obtain a resource group name, see [ListResources].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName();

    /**
     * Attribute IsDefault: Indicates whether it is the default resource.
     * <p>
     * Currently, this parameter only supports the input of true and does not support false.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault();

    /**
     * Attribute Resources: Resource List.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceDlcProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IWorkspaceResourceDlc.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: Resource group name.
         * <p>
         * If you want to obtain a resource group name, see [ListResources].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether it is the default resource.
         * <p>
         * Currently, this parameter only supports the input of true and does not support false.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resources: Resource List.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources() {
            return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceDlcProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceResourceDlcProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWorkspaceResourceDlc}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWorkspaceResourceDlc, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: Resource group name.
         * <p>
         * If you want to obtain a resource group name, see [ListResources].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether it is the default resource.
         * <p>
         * Currently, this parameter only supports the input of true and does not support false.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Resources: Resource List.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResources() {
            return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceDlcProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceResourceDlcProps.class));
        }
    }
}

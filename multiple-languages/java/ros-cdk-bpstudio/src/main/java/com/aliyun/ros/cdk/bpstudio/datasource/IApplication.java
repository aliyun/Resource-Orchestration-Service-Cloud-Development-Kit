package com.aliyun.ros.cdk.bpstudio.datasource;

/**
 * Represents a <code>Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:37:10.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bpstudio.$Module.class, fqn = "@alicloud/ros-cdk-bpstudio.datasource.IApplication")
@software.amazon.jsii.Jsii.Proxy(IApplication.Jsii$Proxy.class)
public interface IApplication extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApplicationId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationId();

    /**
     * Attribute ApplicationName: Application name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationName();

    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Status: The status of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.datasource.ApplicationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.bpstudio.datasource.IApplication.Jsii$Default {
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
         * Attribute ApplicationId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationId() {
            return software.amazon.jsii.Kernel.get(this, "attrApplicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApplicationName: Application name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationName() {
            return software.amazon.jsii.Kernel.get(this, "attrApplicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUrl: The Picture in the OSS Storage Address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.datasource.ApplicationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bpstudio.datasource.ApplicationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IApplication}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IApplication, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ApplicationId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationId() {
            return software.amazon.jsii.Kernel.get(this, "attrApplicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApplicationName: Application name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationName() {
            return software.amazon.jsii.Kernel.get(this, "attrApplicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUrl: The Picture in the OSS Storage Address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bpstudio.datasource.ApplicationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bpstudio.datasource.ApplicationProps.class));
        }
    }
}

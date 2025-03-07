package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>ResourceGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.001Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IResourceGroup")
@software.amazon.jsii.Jsii.Proxy(IResourceGroup.Jsii$Proxy.class)
public interface IResourceGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId();

    /**
     * Attribute DisplayName: The display name of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute Id: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrId();

    /**
     * Attribute Name: The unique identifier of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute RegionStatuses: The status of the resource group in all regions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionStatuses();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IResourceGroup.Jsii$Default {
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
         * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The display name of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Id: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
            return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The unique identifier of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionStatuses: The status of the resource group in all regions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionStatuses() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionStatuses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ResourceGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IResourceGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResourceGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The display name of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Id: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
            return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The unique identifier of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionStatuses: The status of the resource group in all regions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionStatuses() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionStatuses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ResourceGroupProps.class));
        }
    }
}

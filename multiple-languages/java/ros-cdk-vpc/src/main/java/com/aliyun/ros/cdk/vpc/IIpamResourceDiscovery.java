package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>IpamResourceDiscovery</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.860Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IIpamResourceDiscovery")
@software.amazon.jsii.Jsii.Proxy(IIpamResourceDiscovery.Jsii$Proxy.class)
public interface IIpamResourceDiscovery extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the resource discovery was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryDescription();

    /**
     * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryId();

    /**
     * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryName();

    /**
     * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tag of the discovery instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Type: The type of resource discovery.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IIpamResourceDiscovery.Jsii$Default {
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
         * Attribute CreateTime: The time when the resource discovery was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
            return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the discovery instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of resource discovery.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpamResourceDiscovery}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpamResourceDiscovery, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the resource discovery was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
            return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the discovery instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of resource discovery.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps.class));
        }
    }
}

package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>VServerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.709Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.IVServerGroup")
@software.amazon.jsii.Jsii.Proxy(IVServerGroup.Jsii$Proxy.class)
public interface IVServerGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BackendServers: The list of backend servers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers();

    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     * <p>
     * The time follows the YYYY-MM-DDThh:mm:ssZ format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute VServerGroupId: The ID of the vServer group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId();

    /**
     * Attribute VServerGroupName: The name of the vServer group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.VServerGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.IVServerGroup.Jsii$Default {
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
         * Attribute BackendServers: The list of backend servers.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CLB instance was created.
         * <p>
         * The time follows the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupId: The ID of the vServer group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupName: The name of the vServer group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.VServerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.VServerGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVServerGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVServerGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BackendServers: The list of backend servers.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CLB instance was created.
         * <p>
         * The time follows the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupId: The ID of the vServer group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupName: The name of the vServer group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.VServerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.VServerGroupProps.class));
        }
    }
}

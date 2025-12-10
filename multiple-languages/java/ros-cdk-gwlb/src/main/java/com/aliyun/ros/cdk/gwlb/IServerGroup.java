package com.aliyun.ros.cdk.gwlb;

/**
 * Represents a <code>ServerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.518Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.IServerGroup")
@software.amazon.jsii.Jsii.Proxy(IServerGroup.Jsii$Proxy.class)
public interface IServerGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainConfig();

    /**
     * Attribute CreateTime: The creation time of the server group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute HealthCheckConfig: Health check configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConfig();

    /**
     * Attribute Protocol: Backend Protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Scheduler: Scheduling algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler();

    /**
     * Attribute ServerGroupId: The server group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupId();

    /**
     * Attribute ServerGroupName: The server group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupName();

    /**
     * Attribute ServerGroupType: The server group type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupType();

    /**
     * Attribute Servers: List of servers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServers();

    /**
     * Attribute Tags: List of resource tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The VPC instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gwlb.IServerGroup.Jsii$Default {
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
         * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the server group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConfig: Health check configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: Backend Protocol.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: Scheduling algorithm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupId: The server group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupName: The server group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupType: The server group type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Servers: List of servers.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServers() {
            return software.amazon.jsii.Kernel.get(this, "attrServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: List of resource tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.ServerGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IServerGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IServerGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the server group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConfig: Health check configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: Backend Protocol.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: Scheduling algorithm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupId: The server group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupName: The server group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerGroupType: The server group type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrServerGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Servers: List of servers.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServers() {
            return software.amazon.jsii.Kernel.get(this, "attrServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: List of resource tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.ServerGroupProps.class));
        }
    }
}

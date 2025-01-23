package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>InstanceClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:37.915Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.IInstanceClone")
@software.amazon.jsii.Jsii.Proxy(IInstanceClone.Jsii$Proxy.class)
public interface IInstanceClone extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HostName: Host name of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName();

    /**
     * Attribute InnerIp: Inner IP address of the specified instance.
     * <p>
     * Only for classical instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIp();

    /**
     * Attribute InstanceId: The instance ID of created ecs instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryNetworkInterfaceId();

    /**
     * Attribute PrivateIp: Private IP address of created ecs instance.
     * <p>
     * Only for VPC instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp();

    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIp();

    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds();

    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceCloneProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.IInstanceClone.Jsii$Default {
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
         * Attribute HostName: Host name of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIp: Inner IP address of the specified instance.
         * <p>
         * Only for classical instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The instance ID of created ecs instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryNetworkInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIp: Private IP address of created ecs instance.
         * <p>
         * Only for VPC instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIp: Public IP address of created ecs instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: Security group ID list of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone ID of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceCloneProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstanceClone}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstanceClone, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute HostName: Host name of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIp: Inner IP address of the specified instance.
         * <p>
         * Only for classical instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The instance ID of created ecs instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryNetworkInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIp: Private IP address of created ecs instance.
         * <p>
         * Only for VPC instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIp: Public IP address of created ecs instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: Security group ID list of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone ID of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceCloneProps.class));
        }
    }
}

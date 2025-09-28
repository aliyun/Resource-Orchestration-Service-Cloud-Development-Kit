package com.aliyun.ros.cdk.sae.datasource;

/**
 * Represents a <code>Namespace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.478Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.datasource.INamespace")
@software.amazon.jsii.Jsii.Proxy(INamespace.Jsii$Proxy.class)
public interface INamespace extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppCount: The number of applications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppCount();

    /**
     * Attribute BelongRegion: The region to which the namespace belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion();

    /**
     * Attribute Description: The description of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute JumpServerAppId: The ID of the jump server application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerAppId();

    /**
     * Attribute JumpServerIp: The IP address of the jump server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerIp();

    /**
     * Attribute LastChangeOrderId: The ID of the change order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderId();

    /**
     * Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderRunning();

    /**
     * Attribute LastChangeOrderStatus: The status of the latest change order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderStatus();

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId();

    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName();

    /**
     * Attribute NameSpaceShortId: The ID of the short namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNameSpaceShortId();

    /**
     * Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotificationExpired();

    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute TenantId: The ID of the tenant in the SAE namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTenantId();

    /**
     * Attribute UserId: The ID of the user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpcName: The name of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName();

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute VSwitchName: The name of the vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.datasource.NamespaceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.sae.datasource.INamespace.Jsii$Default {
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
         * Attribute AppCount: The number of applications.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAppCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BelongRegion: The region to which the namespace belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JumpServerAppId: The ID of the jump server application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrJumpServerAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JumpServerIp: The IP address of the jump server.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerIp() {
            return software.amazon.jsii.Kernel.get(this, "attrJumpServerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderId: The ID of the change order.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderRunning() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderRunning", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderStatus: The status of the latest change order.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceId: The ID of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceName: The name of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NameSpaceShortId: The ID of the short namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNameSpaceShortId() {
            return software.amazon.jsii.Kernel.get(this, "attrNameSpaceShortId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotificationExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrNotificationExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TenantId: The ID of the tenant in the SAE namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTenantId() {
            return software.amazon.jsii.Kernel.get(this, "attrTenantId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcName: The name of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchName: The name of the vSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.datasource.NamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.datasource.NamespaceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INamespace}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INamespace, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppCount: The number of applications.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAppCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BelongRegion: The region to which the namespace belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBelongRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JumpServerAppId: The ID of the jump server application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrJumpServerAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JumpServerIp: The IP address of the jump server.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJumpServerIp() {
            return software.amazon.jsii.Kernel.get(this, "attrJumpServerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderId: The ID of the change order.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderRunning() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderRunning", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastChangeOrderStatus: The status of the latest change order.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastChangeOrderStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLastChangeOrderStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceId: The ID of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceName: The name of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NameSpaceShortId: The ID of the short namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNameSpaceShortId() {
            return software.amazon.jsii.Kernel.get(this, "attrNameSpaceShortId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotificationExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrNotificationExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TenantId: The ID of the tenant in the SAE namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTenantId() {
            return software.amazon.jsii.Kernel.get(this, "attrTenantId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcName: The name of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchName: The name of the vSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.datasource.NamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.datasource.NamespaceProps.class));
        }
    }
}

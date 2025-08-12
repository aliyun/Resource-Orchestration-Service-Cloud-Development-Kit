package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>VpnAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.230Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IVpnAttachment")
@software.amazon.jsii.Jsii.Proxy(IVpnAttachment.Jsii$Proxy.class)
public interface IVpnAttachment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InternetIp: The gateway IP address of the IPsec connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp();

    /**
     * Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerVpnAttachmentConfig();

    /**
     * Attribute VpnAttachmentId: ID of the IPsec attachment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnAttachmentId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IVpnAttachment.Jsii$Default {
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
         * Attribute InternetIp: The gateway IP address of the IPsec connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerVpnAttachmentConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerVpnAttachmentConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnAttachmentId: ID of the IPsec attachment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnAttachmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpnAttachment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpnAttachment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InternetIp: The gateway IP address of the IPsec connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerVpnAttachmentConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerVpnAttachmentConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnAttachmentId: ID of the IPsec attachment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnAttachmentProps.class));
        }
    }
}

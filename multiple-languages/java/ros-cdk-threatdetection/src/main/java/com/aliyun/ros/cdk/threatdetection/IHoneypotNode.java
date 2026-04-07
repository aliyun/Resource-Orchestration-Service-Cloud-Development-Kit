package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>HoneypotNode</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.564Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IHoneypotNode")
@software.amazon.jsii.Jsii.Proxy(IHoneypotNode.Jsii$Proxy.class)
public interface IHoneypotNode extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowHoneypotAccessInternet();

    /**
     * Attribute AvailableProbeNum: The number of available probes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableProbeNum();

    /**
     * Attribute CreateTime: The time when the management node was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute NodeId: Honeypot management node id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId();

    /**
     * Attribute NodeName: The name of the management node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeName();

    /**
     * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupProbeIpList();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IHoneypotNode.Jsii$Default {
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
         * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowHoneypotAccessInternet() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AvailableProbeNum: The number of available probes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableProbeNum() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableProbeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the management node was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeId: Honeypot management node id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeName: The name of the management node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeName() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupProbeIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHoneypotNode}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHoneypotNode, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowHoneypotAccessInternet() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AvailableProbeNum: The number of available probes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableProbeNum() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableProbeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the management node was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeId: Honeypot management node id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeName: The name of the management node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeName() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupProbeIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps.class));
        }
    }
}

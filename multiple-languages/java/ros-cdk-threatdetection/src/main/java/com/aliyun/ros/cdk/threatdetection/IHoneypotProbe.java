package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>HoneypotProbe</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.653Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IHoneypotProbe")
@software.amazon.jsii.Jsii.Proxy(IHoneypotProbe.Jsii$Proxy.class)
public interface IHoneypotProbe extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArp();

    /**
     * Attribute ControlNodeId: The ID of the management node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlNodeId();

    /**
     * Attribute DisplayName: The name of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute HoneypotBindList: The configuration of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotBindList();

    /**
     * Attribute HoneypotProbeId: The ID of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotProbeId();

    /**
     * Attribute Ping: Specifies whether to enable ping scan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPing();

    /**
     * Attribute ProbeType: The type of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeType();

    /**
     * Attribute ProbeVersion: The version of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeVersion();

    /**
     * Attribute ServiceIpList: Listen to the IP address list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIpList();

    /**
     * Attribute Uuid: The UUID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid();

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IHoneypotProbe.Jsii$Default {
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
         * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArp() {
            return software.amazon.jsii.Kernel.get(this, "attrArp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ControlNodeId: The ID of the management node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrControlNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The name of the probe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotBindList: The configuration of the probe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotBindList() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotProbeId: The ID of the probe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotProbeId() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotProbeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ping: Specifies whether to enable ping scan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPing() {
            return software.amazon.jsii.Kernel.get(this, "attrPing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProbeType: The type of the probe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeType() {
            return software.amazon.jsii.Kernel.get(this, "attrProbeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProbeVersion: The version of the probe.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrProbeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceIpList: Listen to the IP address list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The UUID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHoneypotProbe}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHoneypotProbe, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArp() {
            return software.amazon.jsii.Kernel.get(this, "attrArp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ControlNodeId: The ID of the management node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrControlNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The name of the probe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotBindList: The configuration of the probe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotBindList() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotProbeId: The ID of the probe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotProbeId() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotProbeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ping: Specifies whether to enable ping scan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPing() {
            return software.amazon.jsii.Kernel.get(this, "attrPing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProbeType: The type of the probe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeType() {
            return software.amazon.jsii.Kernel.get(this, "attrProbeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProbeVersion: The version of the probe.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrProbeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceIpList: Listen to the IP address list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The UUID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps.class));
        }
    }
}

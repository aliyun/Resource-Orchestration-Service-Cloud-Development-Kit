package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>VpnGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:45.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IVpnGateway")
@software.amazon.jsii.Jsii.Proxy(IVpnGateway.Jsii$Proxy.class)
public interface IVpnGateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryInternetIp();

    /**
     * Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryVSwitchId();

    /**
     * Attribute InternetIp: The public IP address of the VPN gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp();

    /**
     * Attribute OrderId: The order ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    /**
     * Attribute Spec: The specification of the VPN gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec();

    /**
     * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslMaxConnections();

    /**
     * Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslVpnInternetIp();

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpnGatewayId: ID of the VPN gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId();

    /**
     * Attribute VpnType: The type of the VPN gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnType();

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IVpnGateway.Jsii$Default {
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
         * Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetIp: The public IP address of the VPN gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The order ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The specification of the VPN gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslMaxConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrSslMaxConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslVpnInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrSslVpnInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnGatewayId: ID of the VPN gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnType: The type of the VPN gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnType() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnGatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpnGateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpnGateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisasterRecoveryVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetIp: The public IP address of the VPN gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The order ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The specification of the VPN gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslMaxConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrSslMaxConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslVpnInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrSslVpnInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnGatewayId: ID of the VPN gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnType: The type of the VPN gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnType() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnGatewayProps.class));
        }
    }
}

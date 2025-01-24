package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IGateway")
@software.amazon.jsii.Jsii.Proxy(IGateway.Jsii$Proxy.class)
public interface IGateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation timestamp.
     * <p>
     * Unit: milliseconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments();

    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp.
     * <p>
     * Unit: milliseconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId();

    /**
     * Attribute GatewayName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName();

    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancers();

    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroup();

    /**
     * Attribute Spec: Gateway instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec();

    /**
     * Attribute UpdateTime: Update the timestamp.
     * <p>
     * Unit: milliseconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute Version: The gateway version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpc();

    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitch();

    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZones();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IGateway.Jsii$Default {
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
         * Attribute CreateTime: The creation timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Environments: The list of environments associated with the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: Package year and package month expiration timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayId: The ID of the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayName: The name of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancers: The list of Gateway ingress addresses.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancers() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroup: The Security Group of the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: Gateway instance specifications.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update the timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The gateway version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vpc: The VPC associated with the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpc() {
            return software.amazon.jsii.Kernel.get(this, "attrVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitch: The virtual switch associated with the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Zones: The List of zones associated with the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZones() {
            return software.amazon.jsii.Kernel.get(this, "attrZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.GatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IGateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IGateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Environments: The list of environments associated with the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: Package year and package month expiration timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayId: The ID of the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayName: The name of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancers: The list of Gateway ingress addresses.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancers() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroup: The Security Group of the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: Gateway instance specifications.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update the timestamp.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The gateway version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vpc: The VPC associated with the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpc() {
            return software.amazon.jsii.Kernel.get(this, "attrVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitch: The virtual switch associated with the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Zones: The List of zones associated with the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZones() {
            return software.amazon.jsii.Kernel.get(this, "attrZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.GatewayProps.class));
        }
    }
}

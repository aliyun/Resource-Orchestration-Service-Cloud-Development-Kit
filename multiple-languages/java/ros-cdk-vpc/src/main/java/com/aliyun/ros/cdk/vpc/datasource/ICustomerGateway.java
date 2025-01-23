package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>CustomerGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:45.383Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.ICustomerGateway")
@software.amazon.jsii.Jsii.Proxy(ICustomerGateway.Jsii$Proxy.class)
public interface ICustomerGateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Asn: Asn.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAsn();

    /**
     * Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey();

    /**
     * Attribute CreateTime: The time when the customer gateway was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CustomerGatewayId: The ID of the customer gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayId();

    /**
     * Attribute CustomerGatewayName: The name of the customer gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayName();

    /**
     * Attribute Description: The description of the customer gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute IpAddress: The IP address of the customer gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CustomerGatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.ICustomerGateway.Jsii$Default {
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
         * Attribute Asn: Asn.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the customer gateway was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomerGatewayId: The ID of the customer gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomerGatewayName: The name of the customer gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the customer gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the customer gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CustomerGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CustomerGatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICustomerGateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICustomerGateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Asn: Asn.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the customer gateway was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomerGatewayId: The ID of the customer gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomerGatewayName: The name of the customer gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the customer gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the customer gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CustomerGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CustomerGatewayProps.class));
        }
    }
}

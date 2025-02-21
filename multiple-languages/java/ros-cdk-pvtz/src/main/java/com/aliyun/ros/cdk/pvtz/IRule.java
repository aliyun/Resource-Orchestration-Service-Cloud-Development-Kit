package com.aliyun.ros.cdk.pvtz;

/**
 * Represents a <code>Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.238Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.IRule")
@software.amazon.jsii.Jsii.Proxy(IRule.Jsii$Proxy.class)
public interface IRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId();

    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointName();

    /**
     * Attribute ForwardIp: The information about each destination external server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardIp();

    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute Type: The type of the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcs();

    /**
     * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pvtz.IRule.Jsii$Default {
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
         * Attribute CreateTime: The timestamp when the forwarding rule was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointId: The ID of the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointName: The name of the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointName() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForwardIp: The information about each destination external server.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardIp() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcs() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.RuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The timestamp when the forwarding rule was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointId: The ID of the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointName: The name of the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointName() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForwardIp: The information about each destination external server.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardIp() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcs() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.RuleProps.class));
        }
    }
}

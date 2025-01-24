package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>DomainExtension</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:44.356Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.IDomainExtension")
@software.amazon.jsii.Jsii.Proxy(IDomainExtension.Jsii$Proxy.class)
public interface IDomainExtension extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Domain: The domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain();

    /**
     * Attribute DomainExtensionId: The ID of the additional certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainExtensionId();

    /**
     * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.
     * <p>
     * Valid values: 1 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort();

    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerCertificateId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.DomainExtensionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.IDomainExtension.Jsii$Default {
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
         * Attribute Domain: The domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainExtensionId: The ID of the additional certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainExtensionId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainExtensionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the SLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrServerCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.DomainExtensionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.DomainExtensionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDomainExtension}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDomainExtension, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Domain: The domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainExtensionId: The ID of the additional certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainExtensionId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainExtensionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the SLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrServerCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.DomainExtensionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.DomainExtensionProps.class));
        }
    }
}

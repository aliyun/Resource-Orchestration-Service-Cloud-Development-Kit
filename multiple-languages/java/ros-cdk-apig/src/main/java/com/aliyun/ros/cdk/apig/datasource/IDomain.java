package com.aliyun.ros.cdk.apig.datasource;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.013Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CertIdentifier: The certificate ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertIdentifier();

    /**
     * Attribute DomainId: The ID of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId();

    /**
     * Attribute DomainName: The domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceHttps();

    /**
     * Attribute Http2Option: The HTTP/2 configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Option();

    /**
     * Attribute Protocol: The supported protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsCipherSuitesConfig();

    /**
     * Attribute TlsMax: The maximum version of the TLS protocol.
     * <p>
     * The maximum version of the TLS protocol is 1.3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMax();

    /**
     * Attribute TlsMin: The minimum version of the TLS protocol.
     * <p>
     * The minimum version of the TLS protocol is 1.0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMin();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.datasource.IDomain.Jsii$Default {
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
         * Attribute CertIdentifier: The certificate ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrCertIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceHttps() {
            return software.amazon.jsii.Kernel.get(this, "attrForceHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Option: The HTTP/2 configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Option() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: The supported protocol.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsCipherSuitesConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsMax: The maximum version of the TLS protocol.
         * <p>
         * The maximum version of the TLS protocol is 1.3.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMax() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsMin: The minimum version of the TLS protocol.
         * <p>
         * The minimum version of the TLS protocol is 1.0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMin() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.datasource.DomainProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDomain}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDomain, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CertIdentifier: The certificate ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrCertIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceHttps() {
            return software.amazon.jsii.Kernel.get(this, "attrForceHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Option: The HTTP/2 configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Option() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: The supported protocol.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsCipherSuitesConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsMax: The maximum version of the TLS protocol.
         * <p>
         * The maximum version of the TLS protocol is 1.3.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMax() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsMin: The minimum version of the TLS protocol.
         * <p>
         * The minimum version of the TLS protocol is 1.0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMin() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.datasource.DomainProps.class));
        }
    }
}

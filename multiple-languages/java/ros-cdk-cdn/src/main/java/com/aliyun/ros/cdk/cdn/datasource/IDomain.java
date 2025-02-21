package com.aliyun.ros.cdk.cdn.datasource;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.469Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.datasource.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CdnType: The workload type of the accelerated domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCdnType();

    /**
     * Attribute CertificateConfig: Certificate configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateConfig();

    /**
     * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname();

    /**
     * Attribute DomainName: The accelerated domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Scope: The acceleration region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope();

    /**
     * Attribute Sources: The information about the origin server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources();

    /**
     * Attribute Tags: The tags of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.datasource.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cdn.datasource.IDomain.Jsii$Default {
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
         * Attribute CdnType: The workload type of the accelerated domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCdnType() {
            return software.amazon.jsii.Kernel.get(this, "attrCdnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateConfig: Certificate configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname() {
            return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The accelerated domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: The acceleration region.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sources: The information about the origin server.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources() {
            return software.amazon.jsii.Kernel.get(this, "attrSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cdn.datasource.DomainProps.class));
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
         * Attribute CdnType: The workload type of the accelerated domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCdnType() {
            return software.amazon.jsii.Kernel.get(this, "attrCdnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateConfig: Certificate configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname() {
            return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The accelerated domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: The acceleration region.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sources: The information about the origin server.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSources() {
            return software.amazon.jsii.Kernel.get(this, "attrSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cdn.datasource.DomainProps.class));
        }
    }
}

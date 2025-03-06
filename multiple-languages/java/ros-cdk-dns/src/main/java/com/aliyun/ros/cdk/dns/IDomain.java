package com.aliyun.ros.cdk.dns;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.952Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute DnsServers: The DNS list for the domain name under resolution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsServers();

    /**
     * Attribute DomainId: Domain ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId();

    /**
     * Attribute DomainName: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute GroupId: Domain name group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId();

    /**
     * Attribute GroupName: The name of the domain name group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName();

    /**
     * Attribute PunyCode: punycode returned only for a Chinese domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPunyCode();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dns.IDomain.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsServers: The DNS list for the domain name under resolution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsServers() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: Domain ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: Domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: Domain name group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: The name of the domain name group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PunyCode: punycode returned only for a Chinese domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPunyCode() {
            return software.amazon.jsii.Kernel.get(this, "attrPunyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.DomainProps.class));
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsServers: The DNS list for the domain name under resolution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsServers() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: Domain ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: Domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: Domain name group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: The name of the domain name group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PunyCode: punycode returned only for a Chinese domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPunyCode() {
            return software.amazon.jsii.Kernel.get(this, "attrPunyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.DomainProps.class));
        }
    }
}

package com.aliyun.ros.cdk.directmail;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.037Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus();

    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus();

    /**
     * Attribute CnameRecord: Cname record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord();

    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DefaultDomain: Default domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain();

    /**
     * Attribute DnsMx: DNS MX.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx();

    /**
     * Attribute DnsSpf: DNS SPF.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf();

    /**
     * Attribute DnsTxt: DNS txt.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt();

    /**
     * Attribute DomainId: The ID of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId();

    /**
     * Attribute DomainName: The name of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute DomainType: The type of the domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType();

    /**
     * Attribute IcpStatus: ICP status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus();

    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus();

    /**
     * Attribute MxRecord: MX Record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord();

    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus();

    /**
     * Attribute SpfRecord: SPF record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord();

    /**
     * Attribute TlDomainName: TL domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName();

    /**
     * Attribute TracefRecord: Tracef Record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.directmail.IDomain.Jsii$Default {
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
         * Attribute CnameAuthStatus: Cname auth status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameConfirmStatus: Cname confirm status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameConfirmStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameRecord: Cname record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultDomain: Default domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsMx: DNS MX.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsMx", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsSpf: DNS SPF.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsSpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsTxt: DNS txt.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsTxt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The name of the domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainType: The type of the domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcpStatus: ICP status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrIcpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxAuthStatus: MX auth status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrMxAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxRecord: MX Record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrMxRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfAuthStatus: SPF auth status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfRecord: SPF record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlDomainName: TL domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TracefRecord: Tracef Record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrTracefRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.directmail.DomainProps.class));
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
         * Attribute CnameAuthStatus: Cname auth status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameConfirmStatus: Cname confirm status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameConfirmStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameRecord: Cname record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultDomain: Default domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsMx: DNS MX.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsMx", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsSpf: DNS SPF.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsSpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsTxt: DNS txt.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsTxt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The name of the domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainType: The type of the domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcpStatus: ICP status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrIcpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxAuthStatus: MX auth status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrMxAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxRecord: MX Record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrMxRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfAuthStatus: SPF auth status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfRecord: SPF record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlDomainName: TL domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TracefRecord: Tracef Record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrTracefRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.directmail.DomainProps.class));
        }
    }
}

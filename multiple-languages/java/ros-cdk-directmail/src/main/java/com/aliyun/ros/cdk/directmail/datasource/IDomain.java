package com.aliyun.ros.cdk.directmail.datasource;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.500Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.datasource.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus();

    /**
     * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus();

    /**
     * Attribute CnameRecord: Customized part of CNAME host record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord();

    /**
     * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DefaultDomain: Is it the default domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain();

    /**
     * Attribute DnsMx: MX record value resolved through public DNS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx();

    /**
     * Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf();

    /**
     * Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt();

    /**
     * Attribute DomainId: The ID of the domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId();

    /**
     * Attribute DomainName: The domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType();

    /**
     * Attribute IcpStatus: The status of ICP filing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus();

    /**
     * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus();

    /**
     * Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord();

    /**
     * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus();

    /**
     * Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord();

    /**
     * Attribute TlDomainName: The primary domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName();

    /**
     * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.directmail.datasource.IDomain.Jsii$Default {
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
         * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameConfirmStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameRecord: Customized part of CNAME host record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultDomain: Is it the default domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsMx: MX record value resolved through public DNS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsMx", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsSpf: SPF record value resolved through public DNS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsSpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsTxt: TXT record value resolved through public DNS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsTxt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain name.
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
         * Attribute DomainType: TXT records provided by the Direct Mail console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcpStatus: The status of ICP filing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrIcpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrMxAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxRecord: MX records provided by the Direct Mail console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrMxRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfRecord: Spf records provided by the Direct Mail console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlDomainName: The primary domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrTracefRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.directmail.datasource.DomainProps.class));
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
         * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameConfirmStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CnameRecord: Customized part of CNAME host record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrCnameRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultDomain: Is it the default domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsMx: MX record value resolved through public DNS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsMx", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsSpf: SPF record value resolved through public DNS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsSpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsTxt: TXT record value resolved through public DNS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsTxt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainId: The ID of the domain name.
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
         * Attribute DomainType: TXT records provided by the Direct Mail console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcpStatus: The status of ICP filing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrIcpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrMxAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MxRecord: MX records provided by the Direct Mail console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrMxRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpfRecord: Spf records provided by the Direct Mail console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrSpfRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlDomainName: The primary domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrTracefRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.directmail.datasource.DomainProps.class));
        }
    }
}

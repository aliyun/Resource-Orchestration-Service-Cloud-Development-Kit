package com.aliyun.ros.cdk.directmail.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DirectMail::Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.046Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.datasource.Domain")
public class Domain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.directmail.datasource.IDomain {

    protected Domain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameAuthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrCnameAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameConfirmStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrCnameConfirmStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CnameRecord: Customized part of CNAME host record.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCnameRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrCnameRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultDomain: Is it the default domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DnsMx: MX record value resolved through public DNS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsMx() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsMx", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsSpf() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsSpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsTxt() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsTxt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainId: The ID of the domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainName: The domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainType() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IcpStatus: The status of ICP filing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcpStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrIcpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxAuthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrMxAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMxRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrMxRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfAuthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrSpfAuthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpfRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrSpfRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TlDomainName: The primary domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrTlDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTracefRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrTracefRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.directmail.datasource.DomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.directmail.datasource.DomainProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.directmail.datasource.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.directmail.datasource.Domain> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.directmail.datasource.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.directmail.datasource.DomainProps.Builder();
        }

        /**
         * Property domainId: The ID of the domain name.
         * <p>
         * @return {@code this}
         * @param domainId Property domainId: The ID of the domain name. This parameter is required.
         */
        public Builder domainId(final java.lang.String domainId) {
            this.props.domainId(domainId);
            return this;
        }
        /**
         * Property domainId: The ID of the domain name.
         * <p>
         * @return {@code this}
         * @param domainId Property domainId: The ID of the domain name. This parameter is required.
         */
        public Builder domainId(final com.aliyun.ros.cdk.core.IResolvable domainId) {
            this.props.domainId(domainId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.directmail.datasource.Domain}.
         */
        @Override
        public com.aliyun.ros.cdk.directmail.datasource.Domain build() {
            return new com.aliyun.ros.cdk.directmail.datasource.Domain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

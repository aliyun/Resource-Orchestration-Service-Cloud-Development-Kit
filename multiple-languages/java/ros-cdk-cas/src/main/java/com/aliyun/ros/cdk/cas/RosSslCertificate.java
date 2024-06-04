package com.aliyun.ros.cdk.cas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CAS::SslCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.776Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosSslCertificate")
public class RosSslCertificate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSslCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSslCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cas.RosSslCertificate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSslCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.RosSslCertificateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertBrand() {
        return software.amazon.jsii.Kernel.get(this, "certBrand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertBrand(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "certBrand", value);
    }

    /**
     */
    public void setCertBrand(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certBrand", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertType() {
        return software.amazon.jsii.Kernel.get(this, "certType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "certType", value);
    }

    /**
     */
    public void setCertType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompanyName() {
        return software.amazon.jsii.Kernel.get(this, "companyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompanyName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "companyName", value);
    }

    /**
     */
    public void setCompanyName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "companyName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCsr() {
        return software.amazon.jsii.Kernel.get(this, "csr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCsr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "csr", value);
    }

    /**
     */
    public void setCsr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "csr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomains() {
        return software.amazon.jsii.Kernel.get(this, "domains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomains(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domains", value);
    }

    /**
     */
    public void setDomains(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "domains", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainType() {
        return software.amazon.jsii.Kernel.get(this, "domainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainType", value);
    }

    /**
     */
    public void setDomainType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEmail(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "email", value);
    }

    /**
     */
    public void setEmail(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "email", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhone() {
        return software.amazon.jsii.Kernel.get(this, "phone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phone", value);
    }

    /**
     */
    public void setPhone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProductCode() {
        return software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productCode", value);
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
        return software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "username", value);
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "username", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValidateType() {
        return software.amazon.jsii.Kernel.get(this, "validateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValidateType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validateType", value);
    }

    /**
     */
    public void setValidateType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "validateType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.RosSslCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.RosSslCertificate> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cas.RosSslCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.RosSslCertificateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param certBrand This parameter is required.
         */
        public Builder certBrand(final java.lang.String certBrand) {
            this.props.certBrand(certBrand);
            return this;
        }
        /**
         * @return {@code this}
         * @param certBrand This parameter is required.
         */
        public Builder certBrand(final com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.props.certBrand(certBrand);
            return this;
        }

        /**
         * @return {@code this}
         * @param certType This parameter is required.
         */
        public Builder certType(final java.lang.String certType) {
            this.props.certType(certType);
            return this;
        }
        /**
         * @return {@code this}
         * @param certType This parameter is required.
         */
        public Builder certType(final com.aliyun.ros.cdk.core.IResolvable certType) {
            this.props.certType(certType);
            return this;
        }

        /**
         * @return {@code this}
         * @param companyName This parameter is required.
         */
        public Builder companyName(final java.lang.String companyName) {
            this.props.companyName(companyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param companyName This parameter is required.
         */
        public Builder companyName(final com.aliyun.ros.cdk.core.IResolvable companyName) {
            this.props.companyName(companyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param csr This parameter is required.
         */
        public Builder csr(final java.lang.String csr) {
            this.props.csr(csr);
            return this;
        }
        /**
         * @return {@code this}
         * @param csr This parameter is required.
         */
        public Builder csr(final com.aliyun.ros.cdk.core.IResolvable csr) {
            this.props.csr(csr);
            return this;
        }

        /**
         * @return {@code this}
         * @param domains This parameter is required.
         */
        public Builder domains(final com.aliyun.ros.cdk.core.IResolvable domains) {
            this.props.domains(domains);
            return this;
        }
        /**
         * @return {@code this}
         * @param domains This parameter is required.
         */
        public Builder domains(final java.util.List<? extends java.lang.Object> domains) {
            this.props.domains(domains);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainType This parameter is required.
         */
        public Builder domainType(final java.lang.String domainType) {
            this.props.domainType(domainType);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainType This parameter is required.
         */
        public Builder domainType(final com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.props.domainType(domainType);
            return this;
        }

        /**
         * @return {@code this}
         * @param email This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * @return {@code this}
         * @param email This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * @return {@code this}
         * @param phone This parameter is required.
         */
        public Builder phone(final java.lang.String phone) {
            this.props.phone(phone);
            return this;
        }
        /**
         * @return {@code this}
         * @param phone This parameter is required.
         */
        public Builder phone(final com.aliyun.ros.cdk.core.IResolvable phone) {
            this.props.phone(phone);
            return this;
        }

        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * @return {@code this}
         * @param validateType This parameter is required.
         */
        public Builder validateType(final java.lang.String validateType) {
            this.props.validateType(validateType);
            return this;
        }
        /**
         * @return {@code this}
         * @param validateType This parameter is required.
         */
        public Builder validateType(final com.aliyun.ros.cdk.core.IResolvable validateType) {
            this.props.validateType(validateType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.RosSslCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.RosSslCertificate build() {
            return new com.aliyun.ros.cdk.cas.RosSslCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

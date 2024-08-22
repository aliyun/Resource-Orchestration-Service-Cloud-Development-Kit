package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>RosSslCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.022Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosSslCertificateProps")
@software.amazon.jsii.Jsii.Proxy(RosSslCertificateProps.Jsii$Proxy.class)
public interface RosSslCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertBrand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompanyName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCsr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomains() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidateType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSslCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSslCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSslCertificateProps> {
        java.lang.Object certBrand;
        java.lang.Object certType;
        java.lang.Object companyName;
        java.lang.Object csr;
        java.lang.Object domains;
        java.lang.Object domainType;
        java.lang.Object email;
        java.lang.Object phone;
        java.lang.Object productCode;
        java.lang.Object username;
        java.lang.Object validateType;

        /**
         * Sets the value of {@link RosSslCertificateProps#getCertBrand}
         * @param certBrand the value to be set.
         * @return {@code this}
         */
        public Builder certBrand(java.lang.String certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCertBrand}
         * @param certBrand the value to be set.
         * @return {@code this}
         */
        public Builder certBrand(com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCertType}
         * @param certType the value to be set.
         * @return {@code this}
         */
        public Builder certType(java.lang.String certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCertType}
         * @param certType the value to be set.
         * @return {@code this}
         */
        public Builder certType(com.aliyun.ros.cdk.core.IResolvable certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCompanyName}
         * @param companyName the value to be set.
         * @return {@code this}
         */
        public Builder companyName(java.lang.String companyName) {
            this.companyName = companyName;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCompanyName}
         * @param companyName the value to be set.
         * @return {@code this}
         */
        public Builder companyName(com.aliyun.ros.cdk.core.IResolvable companyName) {
            this.companyName = companyName;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCsr}
         * @param csr the value to be set.
         * @return {@code this}
         */
        public Builder csr(java.lang.String csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getCsr}
         * @param csr the value to be set.
         * @return {@code this}
         */
        public Builder csr(com.aliyun.ros.cdk.core.IResolvable csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getDomains}
         * @param domains the value to be set.
         * @return {@code this}
         */
        public Builder domains(com.aliyun.ros.cdk.core.IResolvable domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getDomains}
         * @param domains the value to be set.
         * @return {@code this}
         */
        public Builder domains(java.util.List<? extends java.lang.Object> domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getDomainType}
         * @param domainType the value to be set.
         * @return {@code this}
         */
        public Builder domainType(java.lang.String domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getDomainType}
         * @param domainType the value to be set.
         * @return {@code this}
         */
        public Builder domainType(com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getEmail}
         * @param email the value to be set.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getEmail}
         * @param email the value to be set.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getPhone}
         * @param phone the value to be set.
         * @return {@code this}
         */
        public Builder phone(java.lang.String phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getPhone}
         * @param phone the value to be set.
         * @return {@code this}
         */
        public Builder phone(com.aliyun.ros.cdk.core.IResolvable phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getProductCode}
         * @param productCode the value to be set.
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getProductCode}
         * @param productCode the value to be set.
         * @return {@code this}
         */
        public Builder productCode(com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getUsername}
         * @param username the value to be set.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getValidateType}
         * @param validateType the value to be set.
         * @return {@code this}
         */
        public Builder validateType(java.lang.String validateType) {
            this.validateType = validateType;
            return this;
        }

        /**
         * Sets the value of {@link RosSslCertificateProps#getValidateType}
         * @param validateType the value to be set.
         * @return {@code this}
         */
        public Builder validateType(com.aliyun.ros.cdk.core.IResolvable validateType) {
            this.validateType = validateType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSslCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSslCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSslCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSslCertificateProps {
        private final java.lang.Object certBrand;
        private final java.lang.Object certType;
        private final java.lang.Object companyName;
        private final java.lang.Object csr;
        private final java.lang.Object domains;
        private final java.lang.Object domainType;
        private final java.lang.Object email;
        private final java.lang.Object phone;
        private final java.lang.Object productCode;
        private final java.lang.Object username;
        private final java.lang.Object validateType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certBrand = software.amazon.jsii.Kernel.get(this, "certBrand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certType = software.amazon.jsii.Kernel.get(this, "certType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.companyName = software.amazon.jsii.Kernel.get(this, "companyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.csr = software.amazon.jsii.Kernel.get(this, "csr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domains = software.amazon.jsii.Kernel.get(this, "domains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainType = software.amazon.jsii.Kernel.get(this, "domainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phone = software.amazon.jsii.Kernel.get(this, "phone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validateType = software.amazon.jsii.Kernel.get(this, "validateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certBrand = builder.certBrand;
            this.certType = builder.certType;
            this.companyName = builder.companyName;
            this.csr = builder.csr;
            this.domains = builder.domains;
            this.domainType = builder.domainType;
            this.email = builder.email;
            this.phone = builder.phone;
            this.productCode = builder.productCode;
            this.username = builder.username;
            this.validateType = builder.validateType;
        }

        @Override
        public final java.lang.Object getCertBrand() {
            return this.certBrand;
        }

        @Override
        public final java.lang.Object getCertType() {
            return this.certType;
        }

        @Override
        public final java.lang.Object getCompanyName() {
            return this.companyName;
        }

        @Override
        public final java.lang.Object getCsr() {
            return this.csr;
        }

        @Override
        public final java.lang.Object getDomains() {
            return this.domains;
        }

        @Override
        public final java.lang.Object getDomainType() {
            return this.domainType;
        }

        @Override
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getPhone() {
            return this.phone;
        }

        @Override
        public final java.lang.Object getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getValidateType() {
            return this.validateType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCertBrand() != null) {
                data.set("certBrand", om.valueToTree(this.getCertBrand()));
            }
            if (this.getCertType() != null) {
                data.set("certType", om.valueToTree(this.getCertType()));
            }
            if (this.getCompanyName() != null) {
                data.set("companyName", om.valueToTree(this.getCompanyName()));
            }
            if (this.getCsr() != null) {
                data.set("csr", om.valueToTree(this.getCsr()));
            }
            if (this.getDomains() != null) {
                data.set("domains", om.valueToTree(this.getDomains()));
            }
            if (this.getDomainType() != null) {
                data.set("domainType", om.valueToTree(this.getDomainType()));
            }
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getPhone() != null) {
                data.set("phone", om.valueToTree(this.getPhone()));
            }
            if (this.getProductCode() != null) {
                data.set("productCode", om.valueToTree(this.getProductCode()));
            }
            if (this.getUsername() != null) {
                data.set("username", om.valueToTree(this.getUsername()));
            }
            if (this.getValidateType() != null) {
                data.set("validateType", om.valueToTree(this.getValidateType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.RosSslCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSslCertificateProps.Jsii$Proxy that = (RosSslCertificateProps.Jsii$Proxy) o;

            if (this.certBrand != null ? !this.certBrand.equals(that.certBrand) : that.certBrand != null) return false;
            if (this.certType != null ? !this.certType.equals(that.certType) : that.certType != null) return false;
            if (this.companyName != null ? !this.companyName.equals(that.companyName) : that.companyName != null) return false;
            if (this.csr != null ? !this.csr.equals(that.csr) : that.csr != null) return false;
            if (this.domains != null ? !this.domains.equals(that.domains) : that.domains != null) return false;
            if (this.domainType != null ? !this.domainType.equals(that.domainType) : that.domainType != null) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.phone != null ? !this.phone.equals(that.phone) : that.phone != null) return false;
            if (this.productCode != null ? !this.productCode.equals(that.productCode) : that.productCode != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            return this.validateType != null ? this.validateType.equals(that.validateType) : that.validateType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certBrand != null ? this.certBrand.hashCode() : 0;
            result = 31 * result + (this.certType != null ? this.certType.hashCode() : 0);
            result = 31 * result + (this.companyName != null ? this.companyName.hashCode() : 0);
            result = 31 * result + (this.csr != null ? this.csr.hashCode() : 0);
            result = 31 * result + (this.domains != null ? this.domains.hashCode() : 0);
            result = 31 * result + (this.domainType != null ? this.domainType.hashCode() : 0);
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.phone != null ? this.phone.hashCode() : 0);
            result = 31 * result + (this.productCode != null ? this.productCode.hashCode() : 0);
            result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
            result = 31 * result + (this.validateType != null ? this.validateType.hashCode() : 0);
            return result;
        }
    }
}

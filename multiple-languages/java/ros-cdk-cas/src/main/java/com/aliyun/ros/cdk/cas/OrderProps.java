package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>Order</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.073Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.OrderProps")
@software.amazon.jsii.Jsii.Proxy(OrderProps.Jsii$Proxy.class)
public interface OrderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certBrand: Certificate brand.
     * <p>
     * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertBrand();

    /**
     * Property certType: Certificate type.
     * <p>
     * Valid values: DV, OV, EV.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCertType();

    /**
     * Property domainCnt: Number of domains to be included in the certificate.
     * <p>
     * Valid values: 1-500.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainCnt() {
        return null;
    }

    /**
     * Property domainType: Domain type.
     * <p>
     * Valid values: one, all, multiple.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainType() {
        return null;
    }

    /**
     * Property period: Service time of the certificate, in year.
     * <p>
     * Valid values: 1, 2, 3.
     * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property service: Whether enable other service.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>NoNeed: Do not apply for any services.</li>
     * <li>ExpeditedProduct: Request assistance services.</li>
     * <li>DeployProduct: Deploy services.</li>
     * <li>SM2DeployProduct: Deploy services with SM2 encryption.</li>
     * <li>VipProduct: Request assistance and deployment services.
     * <strong>Note:</strong> This parameter is not supported by international stations.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getService() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OrderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OrderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OrderProps> {
        java.lang.Object certBrand;
        java.lang.Object certType;
        java.lang.Object domainCnt;
        java.lang.Object domainType;
        java.lang.Object period;
        java.lang.Object service;

        /**
         * Sets the value of {@link OrderProps#getCertBrand}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         *                  Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * @return {@code this}
         */
        public Builder certBrand(java.lang.String certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getCertBrand}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         *                  Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * @return {@code this}
         */
        public Builder certBrand(com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getCertType}
         * @param certType Property certType: Certificate type. This parameter is required.
         *                 Valid values: DV, OV, EV.
         * @return {@code this}
         */
        public Builder certType(java.lang.String certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getCertType}
         * @param certType Property certType: Certificate type. This parameter is required.
         *                 Valid values: DV, OV, EV.
         * @return {@code this}
         */
        public Builder certType(com.aliyun.ros.cdk.core.IResolvable certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDomainCnt}
         * @param domainCnt Property domainCnt: Number of domains to be included in the certificate.
         *                  Valid values: 1-500.
         * @return {@code this}
         */
        public Builder domainCnt(java.lang.Number domainCnt) {
            this.domainCnt = domainCnt;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDomainCnt}
         * @param domainCnt Property domainCnt: Number of domains to be included in the certificate.
         *                  Valid values: 1-500.
         * @return {@code this}
         */
        public Builder domainCnt(com.aliyun.ros.cdk.core.IResolvable domainCnt) {
            this.domainCnt = domainCnt;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDomainType}
         * @param domainType Property domainType: Domain type.
         *                   Valid values: one, all, multiple.
         * @return {@code this}
         */
        public Builder domainType(java.lang.String domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDomainType}
         * @param domainType Property domainType: Domain type.
         *                   Valid values: one, all, multiple.
         * @return {@code this}
         */
        public Builder domainType(com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPeriod}
         * @param period Property period: Service time of the certificate, in year.
         *               Valid values: 1, 2, 3.
         *               Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPeriod}
         * @param period Property period: Service time of the certificate, in year.
         *               Valid values: 1, 2, 3.
         *               Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getService}
         * @param service Property service: Whether enable other service.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li>NoNeed: Do not apply for any services.</li>
         *                <li>ExpeditedProduct: Request assistance services.</li>
         *                <li>DeployProduct: Deploy services.</li>
         *                <li>SM2DeployProduct: Deploy services with SM2 encryption.</li>
         *                <li>VipProduct: Request assistance and deployment services.
         *                <strong>Note:</strong> This parameter is not supported by international stations.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder service(java.lang.String service) {
            this.service = service;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getService}
         * @param service Property service: Whether enable other service.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li>NoNeed: Do not apply for any services.</li>
         *                <li>ExpeditedProduct: Request assistance services.</li>
         *                <li>DeployProduct: Deploy services.</li>
         *                <li>SM2DeployProduct: Deploy services with SM2 encryption.</li>
         *                <li>VipProduct: Request assistance and deployment services.
         *                <strong>Note:</strong> This parameter is not supported by international stations.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder service(com.aliyun.ros.cdk.core.IResolvable service) {
            this.service = service;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OrderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OrderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OrderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OrderProps {
        private final java.lang.Object certBrand;
        private final java.lang.Object certType;
        private final java.lang.Object domainCnt;
        private final java.lang.Object domainType;
        private final java.lang.Object period;
        private final java.lang.Object service;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certBrand = software.amazon.jsii.Kernel.get(this, "certBrand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certType = software.amazon.jsii.Kernel.get(this, "certType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainCnt = software.amazon.jsii.Kernel.get(this, "domainCnt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainType = software.amazon.jsii.Kernel.get(this, "domainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.service = software.amazon.jsii.Kernel.get(this, "service", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certBrand = java.util.Objects.requireNonNull(builder.certBrand, "certBrand is required");
            this.certType = java.util.Objects.requireNonNull(builder.certType, "certType is required");
            this.domainCnt = builder.domainCnt;
            this.domainType = builder.domainType;
            this.period = builder.period;
            this.service = builder.service;
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
        public final java.lang.Object getDomainCnt() {
            return this.domainCnt;
        }

        @Override
        public final java.lang.Object getDomainType() {
            return this.domainType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getService() {
            return this.service;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("certBrand", om.valueToTree(this.getCertBrand()));
            data.set("certType", om.valueToTree(this.getCertType()));
            if (this.getDomainCnt() != null) {
                data.set("domainCnt", om.valueToTree(this.getDomainCnt()));
            }
            if (this.getDomainType() != null) {
                data.set("domainType", om.valueToTree(this.getDomainType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getService() != null) {
                data.set("service", om.valueToTree(this.getService()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.OrderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OrderProps.Jsii$Proxy that = (OrderProps.Jsii$Proxy) o;

            if (!certBrand.equals(that.certBrand)) return false;
            if (!certType.equals(that.certType)) return false;
            if (this.domainCnt != null ? !this.domainCnt.equals(that.domainCnt) : that.domainCnt != null) return false;
            if (this.domainType != null ? !this.domainType.equals(that.domainType) : that.domainType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            return this.service != null ? this.service.equals(that.service) : that.service == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certBrand.hashCode();
            result = 31 * result + (this.certType.hashCode());
            result = 31 * result + (this.domainCnt != null ? this.domainCnt.hashCode() : 0);
            result = 31 * result + (this.domainType != null ? this.domainType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.service != null ? this.service.hashCode() : 0);
            return result;
        }
    }
}

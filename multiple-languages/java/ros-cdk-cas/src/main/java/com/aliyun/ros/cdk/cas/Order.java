package com.aliyun.ros.cdk.cas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CAS::Order</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.Order")
public class Order extends com.aliyun.ros.cdk.core.Resource {

    protected Order(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Order(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Order(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.OrderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Order(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.OrderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.OrderProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.OrderProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.OrderProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.Order}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.Order> {
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
        private final com.aliyun.ros.cdk.cas.OrderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.OrderProps.Builder();
        }

        /**
         * Property certBrand: Certificate brand.
         * <p>
         * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * <p>
         * @return {@code this}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         */
        public Builder certBrand(final java.lang.String certBrand) {
            this.props.certBrand(certBrand);
            return this;
        }
        /**
         * Property certBrand: Certificate brand.
         * <p>
         * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * <p>
         * @return {@code this}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         */
        public Builder certBrand(final com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.props.certBrand(certBrand);
            return this;
        }

        /**
         * Property certType: Certificate type.
         * <p>
         * Valid values: DV, OV, EV.
         * <p>
         * @return {@code this}
         * @param certType Property certType: Certificate type. This parameter is required.
         */
        public Builder certType(final java.lang.String certType) {
            this.props.certType(certType);
            return this;
        }
        /**
         * Property certType: Certificate type.
         * <p>
         * Valid values: DV, OV, EV.
         * <p>
         * @return {@code this}
         * @param certType Property certType: Certificate type. This parameter is required.
         */
        public Builder certType(final com.aliyun.ros.cdk.core.IResolvable certType) {
            this.props.certType(certType);
            return this;
        }

        /**
         * Property domainCnt: Number of domains to be included in the certificate.
         * <p>
         * Valid values: 1-500.
         * <p>
         * @return {@code this}
         * @param domainCnt Property domainCnt: Number of domains to be included in the certificate. This parameter is required.
         */
        public Builder domainCnt(final java.lang.Number domainCnt) {
            this.props.domainCnt(domainCnt);
            return this;
        }
        /**
         * Property domainCnt: Number of domains to be included in the certificate.
         * <p>
         * Valid values: 1-500.
         * <p>
         * @return {@code this}
         * @param domainCnt Property domainCnt: Number of domains to be included in the certificate. This parameter is required.
         */
        public Builder domainCnt(final com.aliyun.ros.cdk.core.IResolvable domainCnt) {
            this.props.domainCnt(domainCnt);
            return this;
        }

        /**
         * Property domains: Domain names.
         * <p>
         * If you specify this parameter, you do not need to specify DomainCnt; otherwise, the length of the array used for this parameter will prevail.
         * <strong>Note:</strong> This parameter is not supported by international stations.
         * <p>
         * @return {@code this}
         * @param domains Property domains: Domain names. This parameter is required.
         */
        public Builder domains(final com.aliyun.ros.cdk.core.IResolvable domains) {
            this.props.domains(domains);
            return this;
        }
        /**
         * Property domains: Domain names.
         * <p>
         * If you specify this parameter, you do not need to specify DomainCnt; otherwise, the length of the array used for this parameter will prevail.
         * <strong>Note:</strong> This parameter is not supported by international stations.
         * <p>
         * @return {@code this}
         * @param domains Property domains: Domain names. This parameter is required.
         */
        public Builder domains(final java.util.List<? extends java.lang.Object> domains) {
            this.props.domains(domains);
            return this;
        }

        /**
         * Property domainType: Domain type.
         * <p>
         * Valid values: one, all, multiple.
         * <p>
         * @return {@code this}
         * @param domainType Property domainType: Domain type. This parameter is required.
         */
        public Builder domainType(final java.lang.String domainType) {
            this.props.domainType(domainType);
            return this;
        }
        /**
         * Property domainType: Domain type.
         * <p>
         * Valid values: one, all, multiple.
         * <p>
         * @return {@code this}
         * @param domainType Property domainType: Domain type. This parameter is required.
         */
        public Builder domainType(final com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.props.domainType(domainType);
            return this;
        }

        /**
         * Property merge: Whether to merge issues.
         * <p>
         * Syndication is the process of combining multiple certificates (domains) into a single certificate, including full single or wildcard domains.
         * For example: aliyun.com/*.aliyun.com
         * <strong>Note</strong>: The number of combined certificates (domains) is not recommended to exceed 200
         * <p>
         * @return {@code this}
         * @param merge Property merge: Whether to merge issues. This parameter is required.
         */
        public Builder merge(final java.lang.Boolean merge) {
            this.props.merge(merge);
            return this;
        }
        /**
         * Property merge: Whether to merge issues.
         * <p>
         * Syndication is the process of combining multiple certificates (domains) into a single certificate, including full single or wildcard domains.
         * For example: aliyun.com/*.aliyun.com
         * <strong>Note</strong>: The number of combined certificates (domains) is not recommended to exceed 200
         * <p>
         * @return {@code this}
         * @param merge Property merge: Whether to merge issues. This parameter is required.
         */
        public Builder merge(final com.aliyun.ros.cdk.core.IResolvable merge) {
            this.props.merge(merge);
            return this;
        }

        /**
         * Property monitor: Whether to enable monitoring domains.
         * <p>
         * <strong>Note:</strong> This parameter is not supported by international stations.
         * <p>
         * @return {@code this}
         * @param monitor Property monitor: Whether to enable monitoring domains. This parameter is required.
         */
        public Builder monitor(final java.lang.Boolean monitor) {
            this.props.monitor(monitor);
            return this;
        }
        /**
         * Property monitor: Whether to enable monitoring domains.
         * <p>
         * <strong>Note:</strong> This parameter is not supported by international stations.
         * <p>
         * @return {@code this}
         * @param monitor Property monitor: Whether to enable monitoring domains. This parameter is required.
         */
        public Builder monitor(final com.aliyun.ros.cdk.core.IResolvable monitor) {
            this.props.monitor(monitor);
            return this;
        }

        /**
         * Property period: Service time of the certificate, in year.
         * <p>
         * Valid values: 1, 2, 3.
         * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
         * <p>
         * @return {@code this}
         * @param period Property period: Service time of the certificate, in year. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Service time of the certificate, in year.
         * <p>
         * Valid values: 1, 2, 3.
         * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
         * <p>
         * @return {@code this}
         * @param period Property period: Service time of the certificate, in year. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
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
         * <p>
         * @return {@code this}
         * @param service Property service: Whether enable other service. This parameter is required.
         */
        public Builder service(final java.lang.String service) {
            this.props.service(service);
            return this;
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
         * <p>
         * @return {@code this}
         * @param service Property service: Whether enable other service. This parameter is required.
         */
        public Builder service(final com.aliyun.ros.cdk.core.IResolvable service) {
            this.props.service(service);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.Order}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.Order build() {
            return new com.aliyun.ros.cdk.cas.Order(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

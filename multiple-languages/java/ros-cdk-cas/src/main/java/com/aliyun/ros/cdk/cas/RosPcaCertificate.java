package com.aliyun.ros.cdk.cas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CAS::PcaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.105Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosPcaCertificate")
public class RosPcaCertificate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPcaCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPcaCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cas.RosPcaCertificate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPcaCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.RosPcaCertificateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrAlgorithm", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertificateType() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommonName() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCountryCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCountryCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrIdentifier", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIssuerType() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuerType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLocality() {
        return software.amazon.jsii.Kernel.get(this, "attrLocality", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrganization() {
        return software.amazon.jsii.Kernel.get(this, "attrOrganization", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrganizationUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrOrganizationUnit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrYears() {
        return software.amazon.jsii.Kernel.get(this, "attrYears", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCommonName() {
        return software.amazon.jsii.Kernel.get(this, "commonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommonName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "commonName", java.util.Objects.requireNonNull(value, "commonName is required"));
    }

    /**
     */
    public void setCommonName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commonName", java.util.Objects.requireNonNull(value, "commonName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocality() {
        return software.amazon.jsii.Kernel.get(this, "locality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocality(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "locality", java.util.Objects.requireNonNull(value, "locality is required"));
    }

    /**
     */
    public void setLocality(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "locality", java.util.Objects.requireNonNull(value, "locality is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrganization() {
        return software.amazon.jsii.Kernel.get(this, "organization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrganization(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "organization", java.util.Objects.requireNonNull(value, "organization is required"));
    }

    /**
     */
    public void setOrganization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "organization", java.util.Objects.requireNonNull(value, "organization is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationUnit() {
        return software.amazon.jsii.Kernel.get(this, "organizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrganizationUnit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "organizationUnit", java.util.Objects.requireNonNull(value, "organizationUnit is required"));
    }

    /**
     */
    public void setOrganizationUnit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "organizationUnit", java.util.Objects.requireNonNull(value, "organizationUnit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getState() {
        return software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setState(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "state", java.util.Objects.requireNonNull(value, "state is required"));
    }

    /**
     */
    public void setState(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "state", java.util.Objects.requireNonNull(value, "state is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getYears() {
        return software.amazon.jsii.Kernel.get(this, "years", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setYears(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "years", java.util.Objects.requireNonNull(value, "years is required"));
    }

    /**
     */
    public void setYears(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "years", java.util.Objects.requireNonNull(value, "years is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlgorithm(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "algorithm", value);
    }

    /**
     */
    public void setAlgorithm(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "algorithm", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaStatus() {
        return software.amazon.jsii.Kernel.get(this, "caStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "caStatus", value);
    }

    /**
     */
    public void setCaStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCountryCode() {
        return software.amazon.jsii.Kernel.get(this, "countryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCountryCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "countryCode", value);
    }

    /**
     */
    public void setCountryCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "countryCode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.RosPcaCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.RosPcaCertificate> {
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
        private final com.aliyun.ros.cdk.cas.RosPcaCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.RosPcaCertificateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param commonName This parameter is required.
         */
        public Builder commonName(final java.lang.String commonName) {
            this.props.commonName(commonName);
            return this;
        }
        /**
         * @return {@code this}
         * @param commonName This parameter is required.
         */
        public Builder commonName(final com.aliyun.ros.cdk.core.IResolvable commonName) {
            this.props.commonName(commonName);
            return this;
        }

        /**
         * @return {@code this}
         * @param locality This parameter is required.
         */
        public Builder locality(final java.lang.String locality) {
            this.props.locality(locality);
            return this;
        }
        /**
         * @return {@code this}
         * @param locality This parameter is required.
         */
        public Builder locality(final com.aliyun.ros.cdk.core.IResolvable locality) {
            this.props.locality(locality);
            return this;
        }

        /**
         * @return {@code this}
         * @param organization This parameter is required.
         */
        public Builder organization(final java.lang.String organization) {
            this.props.organization(organization);
            return this;
        }
        /**
         * @return {@code this}
         * @param organization This parameter is required.
         */
        public Builder organization(final com.aliyun.ros.cdk.core.IResolvable organization) {
            this.props.organization(organization);
            return this;
        }

        /**
         * @return {@code this}
         * @param organizationUnit This parameter is required.
         */
        public Builder organizationUnit(final java.lang.String organizationUnit) {
            this.props.organizationUnit(organizationUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param organizationUnit This parameter is required.
         */
        public Builder organizationUnit(final com.aliyun.ros.cdk.core.IResolvable organizationUnit) {
            this.props.organizationUnit(organizationUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param state This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * @return {@code this}
         * @param state This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * @return {@code this}
         * @param years This parameter is required.
         */
        public Builder years(final java.lang.Number years) {
            this.props.years(years);
            return this;
        }
        /**
         * @return {@code this}
         * @param years This parameter is required.
         */
        public Builder years(final com.aliyun.ros.cdk.core.IResolvable years) {
            this.props.years(years);
            return this;
        }

        /**
         * @return {@code this}
         * @param algorithm This parameter is required.
         */
        public Builder algorithm(final java.lang.String algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }
        /**
         * @return {@code this}
         * @param algorithm This parameter is required.
         */
        public Builder algorithm(final com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }

        /**
         * @return {@code this}
         * @param caStatus This parameter is required.
         */
        public Builder caStatus(final java.lang.String caStatus) {
            this.props.caStatus(caStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param caStatus This parameter is required.
         */
        public Builder caStatus(final com.aliyun.ros.cdk.core.IResolvable caStatus) {
            this.props.caStatus(caStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param countryCode This parameter is required.
         */
        public Builder countryCode(final java.lang.String countryCode) {
            this.props.countryCode(countryCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param countryCode This parameter is required.
         */
        public Builder countryCode(final com.aliyun.ros.cdk.core.IResolvable countryCode) {
            this.props.countryCode(countryCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.RosPcaCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.RosPcaCertificate build() {
            return new com.aliyun.ros.cdk.cas.RosPcaCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

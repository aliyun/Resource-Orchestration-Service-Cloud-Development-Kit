package com.aliyun.ros.cdk.dns;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DNS::Instance</code>, which is used to create an Alibaba Cloud DNS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.467Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dns.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDnsSecurity() {
        return software.amazon.jsii.Kernel.get(this, "dnsSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsSecurity(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dnsSecurity", java.util.Objects.requireNonNull(value, "dnsSecurity is required"));
    }

    /**
     */
    public void setDnsSecurity(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsSecurity", java.util.Objects.requireNonNull(value, "dnsSecurity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainNumbers() {
        return software.amazon.jsii.Kernel.get(this, "domainNumbers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainNumbers(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "domainNumbers", java.util.Objects.requireNonNull(value, "domainNumbers is required"));
    }

    /**
     */
    public void setDomainNumbers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainNumbers", java.util.Objects.requireNonNull(value, "domainNumbers is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
        return software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomain(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domain", value);
    }

    /**
     */
    public void setDomain(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domain", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.RosInstance> {
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
        private final com.aliyun.ros.cdk.dns.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dnsSecurity This parameter is required.
         */
        public Builder dnsSecurity(final java.lang.String dnsSecurity) {
            this.props.dnsSecurity(dnsSecurity);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsSecurity This parameter is required.
         */
        public Builder dnsSecurity(final com.aliyun.ros.cdk.core.IResolvable dnsSecurity) {
            this.props.dnsSecurity(dnsSecurity);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainNumbers This parameter is required.
         */
        public Builder domainNumbers(final java.lang.Number domainNumbers) {
            this.props.domainNumbers(domainNumbers);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainNumbers This parameter is required.
         */
        public Builder domainNumbers(final com.aliyun.ros.cdk.core.IResolvable domainNumbers) {
            this.props.domainNumbers(domainNumbers);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * @return {@code this}
         * @param domain This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * @return {@code this}
         * @param domain This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.RosInstance build() {
            return new com.aliyun.ros.cdk.dns.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

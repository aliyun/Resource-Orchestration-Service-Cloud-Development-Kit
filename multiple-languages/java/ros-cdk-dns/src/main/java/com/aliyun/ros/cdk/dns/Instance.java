package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::Instance</code>, which is used to create an Alibaba Cloud DNS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.148Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: DNS instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.Instance> {
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
        private final com.aliyun.ros.cdk.dns.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.InstanceProps.Builder();
        }

        /**
         * Property dnsSecurity: The DNS security policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>no: No protection against DNS attacks is provided.</li>
         * <li>basic: Basic protection against DNS attacks is provided.</li>
         * <li>advanced: Advanced protection against DNS attacks is provided.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dnsSecurity Property dnsSecurity: The DNS security policy. This parameter is required.
         */
        public Builder dnsSecurity(final java.lang.String dnsSecurity) {
            this.props.dnsSecurity(dnsSecurity);
            return this;
        }
        /**
         * Property dnsSecurity: The DNS security policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>no: No protection against DNS attacks is provided.</li>
         * <li>basic: Basic protection against DNS attacks is provided.</li>
         * <li>advanced: Advanced protection against DNS attacks is provided.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dnsSecurity Property dnsSecurity: The DNS security policy. This parameter is required.
         */
        public Builder dnsSecurity(final com.aliyun.ros.cdk.core.IResolvable dnsSecurity) {
            this.props.dnsSecurity(dnsSecurity);
            return this;
        }

        /**
         * Property domainNumbers: The number of domain names.
         * <p>
         * @return {@code this}
         * @param domainNumbers Property domainNumbers: The number of domain names. This parameter is required.
         */
        public Builder domainNumbers(final java.lang.Number domainNumbers) {
            this.props.domainNumbers(domainNumbers);
            return this;
        }
        /**
         * Property domainNumbers: The number of domain names.
         * <p>
         * @return {@code this}
         * @param domainNumbers Property domainNumbers: The number of domain names. This parameter is required.
         */
        public Builder domainNumbers(final com.aliyun.ros.cdk.core.IResolvable domainNumbers) {
            this.props.domainNumbers(domainNumbers);
            return this;
        }

        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>If unit is month: 1, 2, 3, 6</li>
         * <li>If unit is year: 1, 2</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>If unit is month: 1, 2, 3, 6</li>
         * <li>If unit is year: 1, 2</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The subscription duration unit.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The subscription duration unit. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The subscription duration unit.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The subscription duration unit. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property version: The edition of Alibaba Cloud DNS.
         * <p>
         * Valid values:
         * If create hosted public zone:
         * <p>
         * <ul>
         * <li>version_personal: Personal Edition.</li>
         * <li>version_enterprise_basic: Enterprise Standard Edition.</li>
         * <li>version_enterprise_advanced: Enterprise Ultimate Edition.
         * If create cached public zone:</li>
         * <li>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param version Property version: The edition of Alibaba Cloud DNS. This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * Property version: The edition of Alibaba Cloud DNS.
         * <p>
         * Valid values:
         * If create hosted public zone:
         * <p>
         * <ul>
         * <li>version_personal: Personal Edition.</li>
         * <li>version_enterprise_basic: Enterprise Standard Edition.</li>
         * <li>version_enterprise_advanced: Enterprise Ultimate Edition.
         * If create cached public zone:</li>
         * <li>version_cached_basic<strong>Note</strong>: Only upgrade operations are supported after instance creation.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param version Property version: The edition of Alibaba Cloud DNS. This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * Property domain: The domain name that you want to bind to the instance.
         * <p>
         * If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name that you want to bind to the instance. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: The domain name that you want to bind to the instance.
         * <p>
         * If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name that you want to bind to the instance. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property instanceType: The type of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HostedPublicZone: Hosted Public Zone</li>
         * <li>CachedPublicZone: Cached Public Zone.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HostedPublicZone: Hosted Public Zone</li>
         * <li>CachedPublicZone: Cached Public Zone.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property renewalStatus: The renewal method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>AutoRenewal: The instance is automatically renewed.</li>
         * <li>ManualRenewal: The instance is manually renewed.
         * Default value: ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: The renewal method. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus: The renewal method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>AutoRenewal: The instance is automatically renewed.</li>
         * <li>ManualRenewal: The instance is manually renewed.
         * Default value: ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: The renewal method. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.Instance build() {
            return new com.aliyun.ros.cdk.dns.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

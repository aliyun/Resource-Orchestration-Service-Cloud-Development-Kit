package com.aliyun.ros.cdk.bastionhost;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BastionHost::Instance</code>, which is used to create a bastion host.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:07.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: Instance Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bastionhost.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.Instance> {
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
        private final com.aliyun.ros.cdk.bastionhost.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.InstanceProps.Builder();
        }

        /**
         * Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.
         * <p>
         * @return {@code this}
         * @param extendedStoragePlans Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB. This parameter is required.
         */
        public Builder extendedStoragePlans(final java.lang.Number extendedStoragePlans) {
            this.props.extendedStoragePlans(extendedStoragePlans);
            return this;
        }
        /**
         * Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.
         * <p>
         * @return {@code this}
         * @param extendedStoragePlans Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB. This parameter is required.
         */
        public Builder extendedStoragePlans(final com.aliyun.ros.cdk.core.IResolvable extendedStoragePlans) {
            this.props.extendedStoragePlans(extendedStoragePlans);
            return this;
        }

        /**
         * Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&amp;M.Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param extraBandwidth Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&amp;M.Unit: Mbps. This parameter is required.
         */
        public Builder extraBandwidth(final java.lang.Number extraBandwidth) {
            this.props.extraBandwidth(extraBandwidth);
            return this;
        }
        /**
         * Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&amp;M.Unit: Mbps.
         * <p>
         * @return {@code this}
         * @param extraBandwidth Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&amp;M.Unit: Mbps. This parameter is required.
         */
        public Builder extraBandwidth(final com.aliyun.ros.cdk.core.IResolvable extraBandwidth) {
            this.props.extraBandwidth(extraBandwidth);
            return this;
        }

        /**
         * Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.
         * <p>
         * @return {@code this}
         * @param plan Property plan: The number of asset authorization and concurrency limit.Unit: Asset number. This parameter is required.
         */
        public Builder plan(final java.lang.Number plan) {
            this.props.plan(plan);
            return this;
        }
        /**
         * Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.
         * <p>
         * @return {@code this}
         * @param plan Property plan: The number of asset authorization and concurrency limit.Unit: Asset number. This parameter is required.
         */
        public Builder plan(final com.aliyun.ros.cdk.core.IResolvable plan) {
            this.props.plan(plan);
            return this;
        }

        /**
         * Property startInstanceParam: Parameters required to start a bastion host instance.
         * <p>
         * @return {@code this}
         * @param startInstanceParam Property startInstanceParam: Parameters required to start a bastion host instance. This parameter is required.
         */
        public Builder startInstanceParam(final com.aliyun.ros.cdk.core.IResolvable startInstanceParam) {
            this.props.startInstanceParam(startInstanceParam);
            return this;
        }
        /**
         * Property startInstanceParam: Parameters required to start a bastion host instance.
         * <p>
         * @return {@code this}
         * @param startInstanceParam Property startInstanceParam: Parameters required to start a bastion host instance. This parameter is required.
         */
        public Builder startInstanceParam(final com.aliyun.ros.cdk.bastionhost.RosInstance.StartInstanceParamProperty startInstanceParam) {
            this.props.startInstanceParam(startInstanceParam);
            return this;
        }

        /**
         * Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
         * <p>
         * <ul>
         * <li>Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
         * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.</li>
         * <li>Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds</li>
         * <li>Asset type: Linux/Windows assets</li>
         * <li>User management: RAM, AD/LDAP and local users</li>
         * <li>Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control</li>
         * <li>Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param version Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc. This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
         * <p>
         * <ul>
         * <li>Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
         * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.</li>
         * <li>Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds</li>
         * <li>Asset type: Linux/Windows assets</li>
         * <li>User management: RAM, AD/LDAP and local users</li>
         * <li>Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control</li>
         * <li>Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param version Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc. This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.Instance build() {
            return new com.aliyun.ros.cdk.bastionhost.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

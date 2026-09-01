package com.aliyun.ros.cdk.polardbx;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PolarDBX::DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:43:55.797Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.DBInstance")
public class DBInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardbx.IDBInstance {

    protected DBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: Intranet connection string.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceName: The name of the instance that you create.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The ID of the order.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Intranet connection port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.DBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.DBInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.polardbx.DBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardbx.DBInstance> {
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
        private final com.aliyun.ros.cdk.polardbx.DBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardbx.DBInstanceProps.Builder();
        }

        /**
         * Property dbNodeClass: Node specifications: - polarx.x4.medium.2e: 2 vCPUs, 8 GB - polarx.x4.large.2e: 4 vCPUs, 16 GB - polarx.x8.large.2e: 4 vCPUs, 32 GB - polarx.x4.xlarge.2e: 8 vCPUs, 32 GB - polarx.x8.xlarge.2e: 8 vCPUs, 64 GB - polarx.x4.2xlarge.2e: 16 vCPUs, 64 GB - polarx.x8.2xlarge.2e: 16 vCPUs, 128 GB - polarx.x4.4xlarge.2e: 32 vCPUs, 128 GB - polarx.x8.4xlarge.2e: 32 vCPUs, 256 GB - polarx.st.8xlarge.2e: 60 vCPUs, 470 GB - polarx.st.12xlarge.2e: 90 vCPUs, 720 GB.
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: Node specifications: - polarx.x4.medium.2e: 2 vCPUs, 8 GB - polarx.x4.large.2e: 4 vCPUs, 16 GB - polarx.x8.large.2e: 4 vCPUs, 32 GB - polarx.x4.xlarge.2e: 8 vCPUs, 32 GB - polarx.x8.xlarge.2e: 8 vCPUs, 64 GB - polarx.x4.2xlarge.2e: 16 vCPUs, 64 GB - polarx.x8.2xlarge.2e: 16 vCPUs, 128 GB - polarx.x4.4xlarge.2e: 32 vCPUs, 128 GB - polarx.x8.4xlarge.2e: 32 vCPUs, 256 GB - polarx.st.8xlarge.2e: 60 vCPUs, 470 GB - polarx.st.12xlarge.2e: 90 vCPUs, 720 GB. This parameter is required.
         */
        public Builder dbNodeClass(final java.lang.String dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }
        /**
         * Property dbNodeClass: Node specifications: - polarx.x4.medium.2e: 2 vCPUs, 8 GB - polarx.x4.large.2e: 4 vCPUs, 16 GB - polarx.x8.large.2e: 4 vCPUs, 32 GB - polarx.x4.xlarge.2e: 8 vCPUs, 32 GB - polarx.x8.xlarge.2e: 8 vCPUs, 64 GB - polarx.x4.2xlarge.2e: 16 vCPUs, 64 GB - polarx.x8.2xlarge.2e: 16 vCPUs, 128 GB - polarx.x4.4xlarge.2e: 32 vCPUs, 128 GB - polarx.x8.4xlarge.2e: 32 vCPUs, 256 GB - polarx.st.8xlarge.2e: 60 vCPUs, 470 GB - polarx.st.12xlarge.2e: 90 vCPUs, 720 GB.
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: Node specifications: - polarx.x4.medium.2e: 2 vCPUs, 8 GB - polarx.x4.large.2e: 4 vCPUs, 16 GB - polarx.x8.large.2e: 4 vCPUs, 32 GB - polarx.x4.xlarge.2e: 8 vCPUs, 32 GB - polarx.x8.xlarge.2e: 8 vCPUs, 64 GB - polarx.x4.2xlarge.2e: 16 vCPUs, 64 GB - polarx.x8.2xlarge.2e: 16 vCPUs, 128 GB - polarx.x4.4xlarge.2e: 32 vCPUs, 128 GB - polarx.x8.4xlarge.2e: 32 vCPUs, 256 GB - polarx.st.8xlarge.2e: 60 vCPUs, 470 GB - polarx.st.12xlarge.2e: 90 vCPUs, 720 GB. This parameter is required.
         */
        public Builder dbNodeClass(final com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }

        /**
         * Property dbNodeCount: Number of instance nodes.
         * <p>
         * Minimum value is 2.
         * <p>
         * @return {@code this}
         * @param dbNodeCount Property dbNodeCount: Number of instance nodes. This parameter is required.
         */
        public Builder dbNodeCount(final java.lang.Number dbNodeCount) {
            this.props.dbNodeCount(dbNodeCount);
            return this;
        }
        /**
         * Property dbNodeCount: Number of instance nodes.
         * <p>
         * Minimum value is 2.
         * <p>
         * @return {@code this}
         * @param dbNodeCount Property dbNodeCount: Number of instance nodes. This parameter is required.
         */
        public Builder dbNodeCount(final com.aliyun.ros.cdk.core.IResolvable dbNodeCount) {
            this.props.dbNodeCount(dbNodeCount);
            return this;
        }

        /**
         * Property engineVersion: MySQL engine version, either 5.7 or 8.0.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: MySQL engine version, either 5.7 or 8.0. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: MySQL engine version, either 5.7 or 8.0.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: MySQL engine version, either 5.7 or 8.0. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property primaryZone: The primary zone.
         * <p>
         * @return {@code this}
         * @param primaryZone Property primaryZone: The primary zone. This parameter is required.
         */
        public Builder primaryZone(final java.lang.String primaryZone) {
            this.props.primaryZone(primaryZone);
            return this;
        }
        /**
         * Property primaryZone: The primary zone.
         * <p>
         * @return {@code this}
         * @param primaryZone Property primaryZone: The primary zone. This parameter is required.
         */
        public Builder primaryZone(final com.aliyun.ros.cdk.core.IResolvable primaryZone) {
            this.props.primaryZone(primaryZone);
            return this;
        }

        /**
         * Property topologyType: The topology type of the instance.
         * <p>
         * Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
         * <p>
         * @return {@code this}
         * @param topologyType Property topologyType: The topology type of the instance. This parameter is required.
         */
        public Builder topologyType(final java.lang.String topologyType) {
            this.props.topologyType(topologyType);
            return this;
        }
        /**
         * Property topologyType: The topology type of the instance.
         * <p>
         * Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
         * <p>
         * @return {@code this}
         * @param topologyType Property topologyType: The topology type of the instance. This parameter is required.
         */
        public Builder topologyType(final com.aliyun.ros.cdk.core.IResolvable topologyType) {
            this.props.topologyType(topologyType);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the instance belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the instance belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the instance.
         * <p>
         * Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the instance.
         * <p>
         * Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property payType: The billing method of the instance.
         * <p>
         * Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the instance.
         * <p>
         * Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The unit of the billing cycle for the instance.
         * <p>
         * The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the billing cycle for the instance. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The unit of the billing cycle for the instance.
         * <p>
         * The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the billing cycle for the instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property resourceGroupId: Can be empty.
         * <p>
         * Resource group ID. Not supported for now.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Can be empty. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Can be empty.
         * <p>
         * Resource group ID. Not supported for now.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Can be empty. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property secondaryZone: The secondary zone.
         * <p>
         * @return {@code this}
         * @param secondaryZone Property secondaryZone: The secondary zone. This parameter is required.
         */
        public Builder secondaryZone(final java.lang.String secondaryZone) {
            this.props.secondaryZone(secondaryZone);
            return this;
        }
        /**
         * Property secondaryZone: The secondary zone.
         * <p>
         * @return {@code this}
         * @param secondaryZone Property secondaryZone: The secondary zone. This parameter is required.
         */
        public Builder secondaryZone(final com.aliyun.ros.cdk.core.IResolvable secondaryZone) {
            this.props.secondaryZone(secondaryZone);
            return this;
        }

        /**
         * Property securityIpConfig: Instance whitelist configuration.
         * <p>
         * @return {@code this}
         * @param securityIpConfig Property securityIpConfig: Instance whitelist configuration. This parameter is required.
         */
        public Builder securityIpConfig(final com.aliyun.ros.cdk.core.IResolvable securityIpConfig) {
            this.props.securityIpConfig(securityIpConfig);
            return this;
        }
        /**
         * Property securityIpConfig: Instance whitelist configuration.
         * <p>
         * @return {@code this}
         * @param securityIpConfig Property securityIpConfig: Instance whitelist configuration. This parameter is required.
         */
        public Builder securityIpConfig(final com.aliyun.ros.cdk.polardbx.RosDBInstance.SecurityIpConfigProperty securityIpConfig) {
            this.props.securityIpConfig(securityIpConfig);
            return this;
        }

        /**
         * Property tertiaryZone: The tertiary zone.
         * <p>
         * @return {@code this}
         * @param tertiaryZone Property tertiaryZone: The tertiary zone. This parameter is required.
         */
        public Builder tertiaryZone(final java.lang.String tertiaryZone) {
            this.props.tertiaryZone(tertiaryZone);
            return this;
        }
        /**
         * Property tertiaryZone: The tertiary zone.
         * <p>
         * @return {@code this}
         * @param tertiaryZone Property tertiaryZone: The tertiary zone. This parameter is required.
         */
        public Builder tertiaryZone(final com.aliyun.ros.cdk.core.IResolvable tertiaryZone) {
            this.props.tertiaryZone(tertiaryZone);
            return this;
        }

        /**
         * Property usedTime: The subscription period of the instance.
         * <p>
         * Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription period of the instance. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: The subscription period of the instance.
         * <p>
         * Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription period of the instance. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardbx.DBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.polardbx.DBInstance build() {
            return new com.aliyun.ros.cdk.polardbx.DBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

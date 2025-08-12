package com.aliyun.ros.cdk.selectdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SELECTDB::DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.588Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.selectdb.$Module.class, fqn = "@alicloud/ros-cdk-selectdb.DBInstance")
public class DBInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.selectdb.IDBInstance {

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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.selectdb.DBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.selectdb.DBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBInstanceId: Instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.selectdb.DBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.selectdb.DBInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.selectdb.DBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.selectdb.DBInstance> {
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
        private final com.aliyun.ros.cdk.selectdb.DBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.selectdb.DBInstanceProps.Builder();
        }

        /**
         * Property cacheSize: Reserve cache size.
         * <p>
         * @return {@code this}
         * @param cacheSize Property cacheSize: Reserve cache size. This parameter is required.
         */
        public Builder cacheSize(final java.lang.Number cacheSize) {
            this.props.cacheSize(cacheSize);
            return this;
        }
        /**
         * Property cacheSize: Reserve cache size.
         * <p>
         * @return {@code this}
         * @param cacheSize Property cacheSize: Reserve cache size. This parameter is required.
         */
        public Builder cacheSize(final com.aliyun.ros.cdk.core.IResolvable cacheSize) {
            this.props.cacheSize(cacheSize);
            return this;
        }

        /**
         * Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly).
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly). This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly).
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly). This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property dbInstanceClass: The class of the DB instance.
         * <p>
         * Call DescribeAllDBInstanceClass API to check the latest class list
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The class of the DB instance. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: The class of the DB instance.
         * <p>
         * Call DescribeAllDBInstanceClass API to check the latest class list
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The class of the DB instance. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property engineVersion: Database version.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database version. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Database version.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database version. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property vpcId: VPC id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC id. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC id. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property connectionString: Database connection address.
         * <p>
         * @return {@code this}
         * @param connectionString Property connectionString: Database connection address. This parameter is required.
         */
        public Builder connectionString(final java.lang.String connectionString) {
            this.props.connectionString(connectionString);
            return this;
        }
        /**
         * Property connectionString: Database connection address.
         * <p>
         * @return {@code this}
         * @param connectionString Property connectionString: Database connection address. This parameter is required.
         */
        public Builder connectionString(final com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.props.connectionString(connectionString);
            return this;
        }

        /**
         * Property dbInstanceDescription: Example Notes Information.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Example Notes Information. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: Example Notes Information.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Example Notes Information. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property engine: Database type, default value is selectdb.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database type, default value is selectdb. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Database type, default value is selectdb.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database type, default value is selectdb. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid.
         * <p>
         * @return {@code this}
         * @param period Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid.
         * <p>
         * @return {@code this}
         * @param period Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityIpList: The default IP whitelist of the instance.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The default IP whitelist of the instance. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The default IP whitelist of the instance.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The default IP whitelist of the instance. This parameter is required.
         */
        public Builder securityIpList(final java.util.List<? extends java.lang.Object> securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property tags: The list of tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.selectdb.DBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.selectdb.DBInstance build() {
            return new com.aliyun.ros.cdk.selectdb.DBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

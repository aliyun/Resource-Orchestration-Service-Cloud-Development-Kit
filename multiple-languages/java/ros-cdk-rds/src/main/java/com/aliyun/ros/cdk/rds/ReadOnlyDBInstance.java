package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::ReadOnlyDBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.534Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.ReadOnlyDBInstance")
public class ReadOnlyDBInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.rds.IReadOnlyDBInstance {

    protected ReadOnlyDBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ReadOnlyDBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ReadOnlyDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ReadOnlyDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: DB instance connection url by Intranet.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Intranet port of created DB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.ReadOnlyDBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.ReadOnlyDBInstance> {
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
        private final com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.ReadOnlyDBInstanceProps.Builder();
        }

        /**
         * Property dbInstanceClass: The type of the instance.
         * <p>
         * For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: The type of the instance.
         * <p>
         * For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the master instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the master instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbInstanceStorage: The storage space of the instance.
         * <p>
         * Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         */
        public Builder dbInstanceStorage(final java.lang.Number dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }
        /**
         * Property dbInstanceStorage: The storage space of the instance.
         * <p>
         * Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         */
        public Builder dbInstanceStorage(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }

        /**
         * Property engineVersion: The version of the database.
         * <p>
         * The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the database.
         * <p>
         * The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * You can call the DescribeRegions API operation to view the latest zones.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * You can call the DescribeRegions API operation to view the latest zones.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values: true and false. Note
         * :Monthly subscription: The auto-renewal cycle is one month.
         * Annual subscription: The auto-renewal cycle is one year.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values: true and false. Note
         * :Monthly subscription: The auto-renewal cycle is one month.
         * Annual subscription: The auto-renewal cycle is one year.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property category: The RDS edition of the read-only instance.
         * <p>
         * Valid values:
         * Basic: Basic Edition.
         * HighAvailability: High-availability Edition. This is the default value.
         * AlwaysOn: Cluster Edition.
         * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
         * <p>
         * @return {@code this}
         * @param category Property category: The RDS edition of the read-only instance. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The RDS edition of the read-only instance.
         * <p>
         * Valid values:
         * Basic: Basic Edition.
         * HighAvailability: High-availability Edition. This is the default value.
         * AlwaysOn: Cluster Edition.
         * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
         * <p>
         * @return {@code this}
         * @param category Property category: The RDS edition of the read-only instance. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property dbInstanceStorageType: The type of storage media that is used by the instance.
         * <p>
         * Valid values:
         * local_ssd: local SSDs
         * cloud_ssd: standard SSDs
         * cloud_essd: ESSDs of performance level 1 (PL1)
         * cloud_essd2: ESSDs of PL2
         * cloud_essd3: ESSDs of PL3
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The type of storage media that is used by the instance. This parameter is required.
         */
        public Builder dbInstanceStorageType(final java.lang.String dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }
        /**
         * Property dbInstanceStorageType: The type of storage media that is used by the instance.
         * <p>
         * Valid values:
         * local_ssd: local SSDs
         * cloud_ssd: standard SSDs
         * cloud_essd: ESSDs of performance level 1 (PL1)
         * cloud_essd2: ESSDs of PL2
         * cloud_essd3: ESSDs of PL3
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The type of storage media that is used by the instance. This parameter is required.
         */
        public Builder dbInstanceStorageType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }

        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
         * <p>
         * This parameter is valid when you create the read-only instance in a dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
         * <p>
         * This parameter is valid when you create the read-only instance in a dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
         * <p>
         * Valid values:- <strong>true</strong>: enables the feature.- <strong>false</strong> (default): disables the feature.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
         * <p>
         * Valid values:- <strong>true</strong>: enables the feature.- <strong>false</strong> (default): disables the feature.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property payType: The billing method.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         * When PeriodType is Year, it could be from 1 to 5.
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
         * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         * When PeriodType is Year, it could be from 1 to 5.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property privateIpAddress: The private IP address of the read-only instance.
         * <p>
         * It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: The private IP address of the read-only instance.
         * <p>
         * It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The tags of an instance.
         * <p>
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 5 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of an instance. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
         * <p>
         * This parameter is valid when you create the read-only instance in a dedicated cluster.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides. This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final java.lang.String targetDedicatedHostIdForMaster) {
            this.props.targetDedicatedHostIdForMaster(targetDedicatedHostIdForMaster);
            return this;
        }
        /**
         * Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
         * <p>
         * This parameter is valid when you create the read-only instance in a dedicated cluster.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides. This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
            this.props.targetDedicatedHostIdForMaster(targetDedicatedHostIdForMaster);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.ReadOnlyDBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.ReadOnlyDBInstance build() {
            return new com.aliyun.ros.cdk.rds.ReadOnlyDBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

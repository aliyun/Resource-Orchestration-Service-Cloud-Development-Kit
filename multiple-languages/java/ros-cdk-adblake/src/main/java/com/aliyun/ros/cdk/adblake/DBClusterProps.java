package com.aliyun.ros.cdk.adblake;

/**
 * Properties for defining a <code>DBCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:07.060Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.DBClusterProps")
@software.amazon.jsii.Jsii.Proxy(DBClusterProps.Jsii$Proxy.class)
public interface DBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property computeResource: The amount of reserved computing resources.
     * <p>
     * Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComputeResource();

    /**
     * Property dbClusterVersion: The version of the cluster.
     * <p>
     * Set the value to 5.0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterVersion();

    /**
     * Property payType: The billing method of the cluster.
     * <p>
     * Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property storageResource: The amount of reserved storage resources.
     * <p>
     * Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageResource();

    /**
     * Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The vSwitch ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property zoneId: The zone ID.
     * <p>
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property backupSetId: The ID of the backup set that you want to use to restore data.
     * <p>
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return null;
    }

    /**
     * Property dbClusterDescription: The description of the cluster.
     * <p>
     * The description cannot start with http:// or https://.
     * The description must be 2 to 256 characters in length
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     * Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
     * <p>
     * Valid values:
     * true (default)
     * false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDefaultResourcePool() {
        return null;
    }

    /**
     * Property period: The subscription duration of the subscription cluster.
     * <p>
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodType: The subscription type of the subscription cluster.
     * <p>
     * Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreToTime() {
        return null;
    }

    /**
     * Property restoreType: The method that you want to use to restore data.
     * <p>
     * Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreType() {
        return null;
    }

    /**
     * Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
     * <p>
     * If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbClusterId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to cluster.
     * <p>
     * Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClusterProps> {
        java.lang.Object computeResource;
        java.lang.Object dbClusterVersion;
        java.lang.Object payType;
        java.lang.Object storageResource;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object backupSetId;
        java.lang.Object dbClusterDescription;
        java.lang.Object enableDefaultResourcePool;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object resourceGroupId;
        java.lang.Object restoreToTime;
        java.lang.Object restoreType;
        java.lang.Object sourceDbClusterId;
        java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags;

        /**
         * Sets the value of {@link DBClusterProps#getComputeResource}
         * @param computeResource Property computeResource: The amount of reserved computing resources. This parameter is required.
         *                        Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         *                        Note This parameter must be specified with a unit.
         * @return {@code this}
         */
        public Builder computeResource(java.lang.String computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getComputeResource}
         * @param computeResource Property computeResource: The amount of reserved computing resources. This parameter is required.
         *                        Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         *                        Note This parameter must be specified with a unit.
         * @return {@code this}
         */
        public Builder computeResource(com.aliyun.ros.cdk.core.IResolvable computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion Property dbClusterVersion: The version of the cluster. This parameter is required.
         *                         Set the value to 5.0.
         * @return {@code this}
         */
        public Builder dbClusterVersion(java.lang.String dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion Property dbClusterVersion: The version of the cluster. This parameter is required.
         *                         Set the value to 5.0.
         * @return {@code this}
         */
        public Builder dbClusterVersion(com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPayType}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         *                Valid values:
         *                Postpaid: pay-as-you-go.
         *                Prepaid: subscription.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPayType}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         *                Valid values:
         *                Postpaid: pay-as-you-go.
         *                Prepaid: subscription.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getStorageResource}
         * @param storageResource Property storageResource: The amount of reserved storage resources. This parameter is required.
         *                        Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         *                        Note This parameter must be specified with a unit.
         * @return {@code this}
         */
        public Builder storageResource(java.lang.String storageResource) {
            this.storageResource = storageResource;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getStorageResource}
         * @param storageResource Property storageResource: The amount of reserved storage resources. This parameter is required.
         *                        Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         *                        Note This parameter must be specified with a unit.
         * @return {@code this}
         */
        public Builder storageResource(com.aliyun.ros.cdk.core.IResolvable storageResource) {
            this.storageResource = storageResource;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVpcId}
         * @param vpcId Property vpcId: The virtual private cloud (VPC) ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVpcId}
         * @param vpcId Property vpcId: The virtual private cloud (VPC) ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         *               Note You can call the  DescribeRegions  operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         *               Note You can call the  DescribeRegions  operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getBackupSetId}
         * @param backupSetId Property backupSetId: The ID of the backup set that you want to use to restore data.
         *                    Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getBackupSetId}
         * @param backupSetId Property backupSetId: The ID of the backup set that you want to use to restore data.
         *                    Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
         * @return {@code this}
         */
        public Builder backupSetId(com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster.
         *                             The description cannot start with http:// or https://.
         *                             The description must be 2 to 256 characters in length
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster.
         *                             The description cannot start with http:// or https://.
         *                             The description must be 2 to 256 characters in length
         * @return {@code this}
         */
        public Builder dbClusterDescription(com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getEnableDefaultResourcePool}
         * @param enableDefaultResourcePool Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
         *                                  Valid values:
         *                                  true (default)
         *                                  false
         * @return {@code this}
         */
        public Builder enableDefaultResourcePool(java.lang.Boolean enableDefaultResourcePool) {
            this.enableDefaultResourcePool = enableDefaultResourcePool;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getEnableDefaultResourcePool}
         * @param enableDefaultResourcePool Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
         *                                  Valid values:
         *                                  true (default)
         *                                  false
         * @return {@code this}
         */
        public Builder enableDefaultResourcePool(com.aliyun.ros.cdk.core.IResolvable enableDefaultResourcePool) {
            this.enableDefaultResourcePool = enableDefaultResourcePool;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriod}
         * @param period Property period: The subscription duration of the subscription cluster.
         *               Valid values when Period is set to Year: 1 to 3 (integer).
         *               Valid values when Period is set to Month: 1 to 9 (integer).
         *               Note This parameter must be specified when PayType is set to Prepaid.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriod}
         * @param period Property period: The subscription duration of the subscription cluster.
         *               Valid values when Period is set to Year: 1 to 3 (integer).
         *               Valid values when Period is set to Month: 1 to 9 (integer).
         *               Note This parameter must be specified when PayType is set to Prepaid.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriodType}
         * @param periodType Property periodType: The subscription type of the subscription cluster.
         *                   Valid values:
         *                   Year: subscription on a yearly basis.
         *                   Month: subscription on a monthly basis.
         *                   Note This parameter must be specified when PayType is set to Prepaid.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriodType}
         * @param periodType Property periodType: The subscription type of the subscription cluster.
         *                   Valid values:
         *                   Year: subscription on a yearly basis.
         *                   Month: subscription on a monthly basis.
         *                   Note This parameter must be specified when PayType is set to Prepaid.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRestoreToTime}
         * @param restoreToTime Property restoreToTime: The point in time to which you want to restore data from the backup set.
         * @return {@code this}
         */
        public Builder restoreToTime(java.lang.String restoreToTime) {
            this.restoreToTime = restoreToTime;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRestoreToTime}
         * @param restoreToTime Property restoreToTime: The point in time to which you want to restore data from the backup set.
         * @return {@code this}
         */
        public Builder restoreToTime(com.aliyun.ros.cdk.core.IResolvable restoreToTime) {
            this.restoreToTime = restoreToTime;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRestoreType}
         * @param restoreType Property restoreType: The method that you want to use to restore data.
         *                    Valid values:
         *                    backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
         *                    timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
         * @return {@code this}
         */
        public Builder restoreType(java.lang.String restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRestoreType}
         * @param restoreType Property restoreType: The method that you want to use to restore data.
         *                    Valid values:
         *                    backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
         *                    timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
         * @return {@code this}
         */
        public Builder restoreType(com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSourceDbClusterId}
         * @param sourceDbClusterId Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
         *                          If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
         * @return {@code this}
         */
        public Builder sourceDbClusterId(java.lang.String sourceDbClusterId) {
            this.sourceDbClusterId = sourceDbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSourceDbClusterId}
         * @param sourceDbClusterId Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
         *                          If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
         * @return {@code this}
         */
        public Builder sourceDbClusterId(com.aliyun.ros.cdk.core.IResolvable sourceDbClusterId) {
            this.sourceDbClusterId = sourceDbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTags}
         * @param tags Property tags: Tags to attach to cluster.
         *             Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClusterProps {
        private final java.lang.Object computeResource;
        private final java.lang.Object dbClusterVersion;
        private final java.lang.Object payType;
        private final java.lang.Object storageResource;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object backupSetId;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object enableDefaultResourcePool;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restoreToTime;
        private final java.lang.Object restoreType;
        private final java.lang.Object sourceDbClusterId;
        private final java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.computeResource = software.amazon.jsii.Kernel.get(this, "computeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterVersion = software.amazon.jsii.Kernel.get(this, "dbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageResource = software.amazon.jsii.Kernel.get(this, "storageResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableDefaultResourcePool = software.amazon.jsii.Kernel.get(this, "enableDefaultResourcePool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreToTime = software.amazon.jsii.Kernel.get(this, "restoreToTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreType = software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDbClusterId = software.amazon.jsii.Kernel.get(this, "sourceDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.computeResource = java.util.Objects.requireNonNull(builder.computeResource, "computeResource is required");
            this.dbClusterVersion = java.util.Objects.requireNonNull(builder.dbClusterVersion, "dbClusterVersion is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.storageResource = java.util.Objects.requireNonNull(builder.storageResource, "storageResource is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.backupSetId = builder.backupSetId;
            this.dbClusterDescription = builder.dbClusterDescription;
            this.enableDefaultResourcePool = builder.enableDefaultResourcePool;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.resourceGroupId = builder.resourceGroupId;
            this.restoreToTime = builder.restoreToTime;
            this.restoreType = builder.restoreType;
            this.sourceDbClusterId = builder.sourceDbClusterId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getComputeResource() {
            return this.computeResource;
        }

        @Override
        public final java.lang.Object getDbClusterVersion() {
            return this.dbClusterVersion;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getStorageResource() {
            return this.storageResource;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getBackupSetId() {
            return this.backupSetId;
        }

        @Override
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getEnableDefaultResourcePool() {
            return this.enableDefaultResourcePool;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestoreToTime() {
            return this.restoreToTime;
        }

        @Override
        public final java.lang.Object getRestoreType() {
            return this.restoreType;
        }

        @Override
        public final java.lang.Object getSourceDbClusterId() {
            return this.sourceDbClusterId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("computeResource", om.valueToTree(this.getComputeResource()));
            data.set("dbClusterVersion", om.valueToTree(this.getDbClusterVersion()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("storageResource", om.valueToTree(this.getStorageResource()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getEnableDefaultResourcePool() != null) {
                data.set("enableDefaultResourcePool", om.valueToTree(this.getEnableDefaultResourcePool()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodType() != null) {
                data.set("periodType", om.valueToTree(this.getPeriodType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreToTime() != null) {
                data.set("restoreToTime", om.valueToTree(this.getRestoreToTime()));
            }
            if (this.getRestoreType() != null) {
                data.set("restoreType", om.valueToTree(this.getRestoreType()));
            }
            if (this.getSourceDbClusterId() != null) {
                data.set("sourceDbClusterId", om.valueToTree(this.getSourceDbClusterId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.DBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBClusterProps.Jsii$Proxy that = (DBClusterProps.Jsii$Proxy) o;

            if (!computeResource.equals(that.computeResource)) return false;
            if (!dbClusterVersion.equals(that.dbClusterVersion)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!storageResource.equals(that.storageResource)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.enableDefaultResourcePool != null ? !this.enableDefaultResourcePool.equals(that.enableDefaultResourcePool) : that.enableDefaultResourcePool != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreToTime != null ? !this.restoreToTime.equals(that.restoreToTime) : that.restoreToTime != null) return false;
            if (this.restoreType != null ? !this.restoreType.equals(that.restoreType) : that.restoreType != null) return false;
            if (this.sourceDbClusterId != null ? !this.sourceDbClusterId.equals(that.sourceDbClusterId) : that.sourceDbClusterId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.computeResource.hashCode();
            result = 31 * result + (this.dbClusterVersion.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.storageResource.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.enableDefaultResourcePool != null ? this.enableDefaultResourcePool.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreToTime != null ? this.restoreToTime.hashCode() : 0);
            result = 31 * result + (this.restoreType != null ? this.restoreType.hashCode() : 0);
            result = 31 * result + (this.sourceDbClusterId != null ? this.sourceDbClusterId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

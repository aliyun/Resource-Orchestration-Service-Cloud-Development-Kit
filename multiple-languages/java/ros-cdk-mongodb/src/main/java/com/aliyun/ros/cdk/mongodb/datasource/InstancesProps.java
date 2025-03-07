package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:12.097Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property chargeType: The billing method of the instance.
     * <p>
     * Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property connectionDomain: The endpoint of the node.
     * <p>
     * You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDomain() {
        return null;
    }

    /**
     * Property dbInstanceClass: The instance type.
     * <p>
     * For more information about valid values, see Instance types.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     * Property dbInstanceDescription: The description of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceId() {
        return null;
    }

    /**
     * Property dbInstanceStatus: The state of the instance.
     * <p>
     * For more information about valid values, see Instance states.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStatus() {
        return null;
    }

    /**
     * Property dbInstanceType: The category of the instance.
     * <p>
     * Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceType() {
        return null;
    }

    /**
     * Property engineVersion: The database engine version of the instance.
     * <p>
     * Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property expired: Specifies whether the instance expires.
     * <p>
     * Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpired() {
        return null;
    }

    /**
     * Property networkType: The network type of the instance.
     * <p>
     * Valid values:
     * Classic
     * Vpc
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property replicationFactor: The number of nodes in a replica set instance.
     * <p>
     * Valid values: 3, 5, and 7.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: The VPC ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the instance.
     * <p>
     * You can call the DescribeRegions operation to query the most recent zone list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancesProps> {
        java.lang.Object chargeType;
        java.lang.Object connectionDomain;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceId;
        java.lang.Object dbInstanceStatus;
        java.lang.Object dbInstanceType;
        java.lang.Object engineVersion;
        java.lang.Object expired;
        java.lang.Object networkType;
        java.lang.Object refreshOptions;
        java.lang.Object replicationFactor;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstancesProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.
         *                   Valid values:
         *                   PostPaid: pay-as-you-go
         *                   PrePaid: subscription
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.
         *                   Valid values:
         *                   PostPaid: pay-as-you-go
         *                   PrePaid: subscription
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getConnectionDomain}
         * @param connectionDomain Property connectionDomain: The endpoint of the node.
         *                         You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
         * @return {@code this}
         */
        public Builder connectionDomain(java.lang.String connectionDomain) {
            this.connectionDomain = connectionDomain;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getConnectionDomain}
         * @param connectionDomain Property connectionDomain: The endpoint of the node.
         *                         You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
         * @return {@code this}
         */
        public Builder connectionDomain(com.aliyun.ros.cdk.core.IResolvable connectionDomain) {
            this.connectionDomain = connectionDomain;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type.
         *                        For more information about valid values, see Instance types.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type.
         *                        For more information about valid values, see Instance types.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus Property dbInstanceStatus: The state of the instance.
         *                         For more information about valid values, see Instance states.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(java.lang.String dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus Property dbInstanceStatus: The state of the instance.
         *                         For more information about valid values, see Instance states.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceType}
         * @param dbInstanceType Property dbInstanceType: The category of the instance.
         *                       Default value: replicate. Valid values:
         *                       sharding: sharded cluster instance
         *                       replicate: replica set or standalone instance
         *                       Note
         *                       To query the list of sharded cluster instances, you must set the parameter to sharding.
         *                       This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
         * @return {@code this}
         */
        public Builder dbInstanceType(java.lang.String dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getDbInstanceType}
         * @param dbInstanceType Property dbInstanceType: The category of the instance.
         *                       Default value: replicate. Valid values:
         *                       sharding: sharded cluster instance
         *                       replicate: replica set or standalone instance
         *                       Note
         *                       To query the list of sharded cluster instances, you must set the parameter to sharding.
         *                       This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
         * @return {@code this}
         */
        public Builder dbInstanceType(com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The database engine version of the instance.
         *                      Valid values:
         *                      5.0
         *                      4.4
         *                      4.2
         *                      4.0
         *                      3.4
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The database engine version of the instance.
         *                      Valid values:
         *                      5.0
         *                      4.4
         *                      4.2
         *                      4.0
         *                      3.4
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instance expires.
         *                Valid values:
         *                true: The instance expires.
         *                false: The instance does not expire.
         * @return {@code this}
         */
        public Builder expired(java.lang.Boolean expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instance expires.
         *                Valid values:
         *                true: The instance expires.
         *                false: The instance does not expire.
         * @return {@code this}
         */
        public Builder expired(com.aliyun.ros.cdk.core.IResolvable expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getNetworkType}
         * @param networkType Property networkType: The network type of the instance.
         *                    Valid values:
         *                    Classic
         *                    Vpc
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getNetworkType}
         * @param networkType Property networkType: The network type of the instance.
         *                    Valid values:
         *                    Classic
         *                    Vpc
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of nodes in a replica set instance.
         *                          Valid values: 3, 5, and 7.
         * @return {@code this}
         */
        public Builder replicationFactor(java.lang.String replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of nodes in a replica set instance.
         *                          Valid values: 3, 5, and 7.
         * @return {@code this}
         */
        public Builder replicationFactor(com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getTags}
         * @param tags Property tags: Tags of instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         *               You can call the DescribeRegions operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         *               You can call the DescribeRegions operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancesProps {
        private final java.lang.Object chargeType;
        private final java.lang.Object connectionDomain;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbInstanceStatus;
        private final java.lang.Object dbInstanceType;
        private final java.lang.Object engineVersion;
        private final java.lang.Object expired;
        private final java.lang.Object networkType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object replicationFactor;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionDomain = software.amazon.jsii.Kernel.get(this, "connectionDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStatus = software.amazon.jsii.Kernel.get(this, "dbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceType = software.amazon.jsii.Kernel.get(this, "dbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expired = software.amazon.jsii.Kernel.get(this, "expired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicationFactor = software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chargeType = builder.chargeType;
            this.connectionDomain = builder.connectionDomain;
            this.dbInstanceClass = builder.dbInstanceClass;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceId = builder.dbInstanceId;
            this.dbInstanceStatus = builder.dbInstanceStatus;
            this.dbInstanceType = builder.dbInstanceType;
            this.engineVersion = builder.engineVersion;
            this.expired = builder.expired;
            this.networkType = builder.networkType;
            this.refreshOptions = builder.refreshOptions;
            this.replicationFactor = builder.replicationFactor;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getConnectionDomain() {
            return this.connectionDomain;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbInstanceStatus() {
            return this.dbInstanceStatus;
        }

        @Override
        public final java.lang.Object getDbInstanceType() {
            return this.dbInstanceType;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getExpired() {
            return this.expired;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getReplicationFactor() {
            return this.replicationFactor;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> getTags() {
            return this.tags;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getConnectionDomain() != null) {
                data.set("connectionDomain", om.valueToTree(this.getConnectionDomain()));
            }
            if (this.getDbInstanceClass() != null) {
                data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceId() != null) {
                data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            }
            if (this.getDbInstanceStatus() != null) {
                data.set("dbInstanceStatus", om.valueToTree(this.getDbInstanceStatus()));
            }
            if (this.getDbInstanceType() != null) {
                data.set("dbInstanceType", om.valueToTree(this.getDbInstanceType()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getExpired() != null) {
                data.set("expired", om.valueToTree(this.getExpired()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getReplicationFactor() != null) {
                data.set("replicationFactor", om.valueToTree(this.getReplicationFactor()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.datasource.InstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstancesProps.Jsii$Proxy that = (InstancesProps.Jsii$Proxy) o;

            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.connectionDomain != null ? !this.connectionDomain.equals(that.connectionDomain) : that.connectionDomain != null) return false;
            if (this.dbInstanceClass != null ? !this.dbInstanceClass.equals(that.dbInstanceClass) : that.dbInstanceClass != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceId != null ? !this.dbInstanceId.equals(that.dbInstanceId) : that.dbInstanceId != null) return false;
            if (this.dbInstanceStatus != null ? !this.dbInstanceStatus.equals(that.dbInstanceStatus) : that.dbInstanceStatus != null) return false;
            if (this.dbInstanceType != null ? !this.dbInstanceType.equals(that.dbInstanceType) : that.dbInstanceType != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.expired != null ? !this.expired.equals(that.expired) : that.expired != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.replicationFactor != null ? !this.replicationFactor.equals(that.replicationFactor) : that.replicationFactor != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chargeType != null ? this.chargeType.hashCode() : 0;
            result = 31 * result + (this.connectionDomain != null ? this.connectionDomain.hashCode() : 0);
            result = 31 * result + (this.dbInstanceClass != null ? this.dbInstanceClass.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceId != null ? this.dbInstanceId.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStatus != null ? this.dbInstanceStatus.hashCode() : 0);
            result = 31 * result + (this.dbInstanceType != null ? this.dbInstanceType.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.expired != null ? this.expired.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.replicationFactor != null ? this.replicationFactor.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

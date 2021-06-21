package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.933Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ReadOnlyDBInstanceProps.Jsii$Proxy.class)
public interface ReadOnlyDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceClass: The type of the instance.
     * <p>
     * For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     * Property dbInstanceId: The ID of the master instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbInstanceStorage: The storage space of the instance.
     * <p>
     * Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

    /**
     * Property engineVersion: The version of the database.
     * <p>
     * The database and the master instance must have the same database version. Valid values:
     * <p>
     * <ul>
     * <li>5.6</li>
     * <li>5.7</li>
     * <li>8.0</li>
     * <li>2017_ent</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property zoneId: The ID of the zone.
     * <p>
     * You can call the DescribeRegions API operation to view the latest zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property category: The edition of the instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Basic</li>
     * <li>HighAvailability</li>
     * <li>AlwaysOn</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceStorageType: The storage type of the instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>local_ssd/ephemeral_ssd: local SSDs.</li>
     * <li>cloud_ssd: SSDs.</li>
     * <li>cloud_essd: ESSDs.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     * Property payType: The billing method.
     * <p>
     * The system only supports Pay-As-You-Go. Valid value: Postpaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property privateIpAddress: The private IP address of the read-only instance.
     * <p>
     * It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ReadOnlyDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ReadOnlyDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ReadOnlyDBInstanceProps> {
        private java.lang.Object dbInstanceClass;
        private java.lang.Object dbInstanceId;
        private java.lang.Object dbInstanceStorage;
        private java.lang.Object engineVersion;
        private java.lang.Object zoneId;
        private java.lang.Object category;
        private java.lang.Object dbInstanceDescription;
        private java.lang.Object dbInstanceStorageType;
        private java.lang.Object payType;
        private java.lang.Object privateIpAddress;
        private java.lang.Object resourceGroupId;
        private java.util.Map<java.lang.String, java.lang.Object> tags;
        private java.lang.Object vpcId;
        private java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         *                        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         *                        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         *                          Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         *                          Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         *                      The database and the master instance must have the same database version. Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>5.6</li>
         *                      <li>5.7</li>
         *                      <li>8.0</li>
         *                      <li>2017_ent</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         *                      The database and the master instance must have the same database version. Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>5.6</li>
         *                      <li>5.7</li>
         *                      <li>8.0</li>
         *                      <li>2017_ent</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         *               You can call the DescribeRegions API operation to view the latest zones.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         *               You can call the DescribeRegions API operation to view the latest zones.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>Basic</li>
         *                 <li>HighAvailability</li>
         *                 <li>AlwaysOn</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>Basic</li>
         *                 <li>HighAvailability</li>
         *                 <li>AlwaysOn</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              <p>
         *                              <ul>
         *                              <li>local_ssd/ephemeral_ssd: local SSDs.</li>
         *                              <li>cloud_ssd: SSDs.</li>
         *                              <li>cloud_essd: ESSDs.</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              <p>
         *                              <ul>
         *                              <li>local_ssd/ephemeral_ssd: local SSDs.</li>
         *                              <li>cloud_ssd: SSDs.</li>
         *                              <li>cloud_essd: ESSDs.</li>
         *                              </ul>
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         *                The system only supports Pay-As-You-Go. Valid value: Postpaid.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         *                The system only supports Pay-As-You-Go. Valid value: Postpaid.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance.
         *                         It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance.
         *                         It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getTags}
         * @param tags Property tags: The tags of an instance.
         *             You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *             At most 5 tags can be specified.
         *             Key
         *             It can be up to 64 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Cannot be a null string.
         *             Value
         *             It can be up to 128 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Can be a null string.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ReadOnlyDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ReadOnlyDBInstanceProps build() {
            return new Jsii$Proxy(dbInstanceClass, dbInstanceId, dbInstanceStorage, engineVersion, zoneId, category, dbInstanceDescription, dbInstanceStorageType, payType, privateIpAddress, resourceGroupId, tags, vpcId, vSwitchId);
        }
    }

    /**
     * An implementation for {@link ReadOnlyDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadOnlyDBInstanceProps {
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object engineVersion;
        private final java.lang.Object zoneId;
        private final java.lang.Object category;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceStorageType;
        private final java.lang.Object payType;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object resourceGroupId;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object dbInstanceClass, final java.lang.Object dbInstanceId, final java.lang.Object dbInstanceStorage, final java.lang.Object engineVersion, final java.lang.Object zoneId, final java.lang.Object category, final java.lang.Object dbInstanceDescription, final java.lang.Object dbInstanceStorageType, final java.lang.Object payType, final java.lang.Object privateIpAddress, final java.lang.Object resourceGroupId, final java.util.Map<java.lang.String, ? extends java.lang.Object> tags, final java.lang.Object vpcId, final java.lang.Object vSwitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceClass = java.util.Objects.requireNonNull(dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(dbInstanceId, "dbInstanceId is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(dbInstanceStorage, "dbInstanceStorage is required");
            this.engineVersion = java.util.Objects.requireNonNull(engineVersion, "engineVersion is required");
            this.zoneId = java.util.Objects.requireNonNull(zoneId, "zoneId is required");
            this.category = category;
            this.dbInstanceDescription = dbInstanceDescription;
            this.dbInstanceStorageType = dbInstanceStorageType;
            this.payType = payType;
            this.privateIpAddress = privateIpAddress;
            this.resourceGroupId = resourceGroupId;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceStorageType() != null) {
                data.set("dbInstanceStorageType", om.valueToTree(this.getDbInstanceStorageType()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ReadOnlyDBInstanceProps.Jsii$Proxy that = (ReadOnlyDBInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceStorageType != null ? !this.dbInstanceStorageType.equals(that.dbInstanceStorageType) : that.dbInstanceStorageType != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceClass.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStorageType != null ? this.dbInstanceStorageType.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}

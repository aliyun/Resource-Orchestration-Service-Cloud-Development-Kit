package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getDbInstanceStorage();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBackupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBusinessInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCouponNo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDatabaseNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEngineVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getReadonlyReplicas() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getReplicationFactor() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRestoreTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityIpArray() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSrcDbInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStorageEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcPasswordFree() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        private java.lang.String dbInstanceClass;
        private java.lang.Number dbInstanceStorage;
        private java.lang.String accountPassword;
        private java.lang.Object autoRenew;
        private java.lang.String backupId;
        private java.lang.String businessInfo;
        private java.lang.String chargeType;
        private java.lang.String couponNo;
        private java.lang.String databaseNames;
        private java.lang.String dbInstanceDescription;
        private java.lang.String engineVersion;
        private java.lang.String networkType;
        private java.lang.Number period;
        private java.lang.Number readonlyReplicas;
        private java.lang.Number replicationFactor;
        private java.lang.String resourceGroupId;
        private java.lang.String restoreTime;
        private java.lang.String securityIpArray;
        private java.lang.String srcDbInstanceId;
        private java.lang.String storageEngine;
        private java.lang.String vpcId;
        private java.lang.Object vpcPasswordFree;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link RosInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAccountPassword}
         * @param accountPassword the value to be set.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBackupId}
         * @param backupId the value to be set.
         * @return {@code this}
         */
        public Builder backupId(java.lang.String backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBusinessInfo}
         * @param businessInfo the value to be set.
         * @return {@code this}
         */
        public Builder businessInfo(java.lang.String businessInfo) {
            this.businessInfo = businessInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getCouponNo}
         * @param couponNo the value to be set.
         * @return {@code this}
         */
        public Builder couponNo(java.lang.String couponNo) {
            this.couponNo = couponNo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabaseNames}
         * @param databaseNames the value to be set.
         * @return {@code this}
         */
        public Builder databaseNames(java.lang.String databaseNames) {
            this.databaseNames = databaseNames;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getReadonlyReplicas}
         * @param readonlyReplicas the value to be set.
         * @return {@code this}
         */
        public Builder readonlyReplicas(java.lang.Number readonlyReplicas) {
            this.readonlyReplicas = readonlyReplicas;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getReplicationFactor}
         * @param replicationFactor the value to be set.
         * @return {@code this}
         */
        public Builder replicationFactor(java.lang.Number replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRestoreTime}
         * @param restoreTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSecurityIpArray}
         * @param securityIpArray the value to be set.
         * @return {@code this}
         */
        public Builder securityIpArray(java.lang.String securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(java.lang.String srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getStorageEngine}
         * @param storageEngine the value to be set.
         * @return {@code this}
         */
        public Builder storageEngine(java.lang.String storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree the value to be set.
         * @return {@code this}
         */
        public Builder vpcPasswordFree(java.lang.Boolean vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree the value to be set.
         * @return {@code this}
         */
        public Builder vpcPasswordFree(com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(dbInstanceClass, dbInstanceStorage, accountPassword, autoRenew, backupId, businessInfo, chargeType, couponNo, databaseNames, dbInstanceDescription, engineVersion, networkType, period, readonlyReplicas, replicationFactor, resourceGroupId, restoreTime, securityIpArray, srcDbInstanceId, storageEngine, vpcId, vpcPasswordFree, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.String dbInstanceClass;
        private final java.lang.Number dbInstanceStorage;
        private final java.lang.String accountPassword;
        private final java.lang.Object autoRenew;
        private final java.lang.String backupId;
        private final java.lang.String businessInfo;
        private final java.lang.String chargeType;
        private final java.lang.String couponNo;
        private final java.lang.String databaseNames;
        private final java.lang.String dbInstanceDescription;
        private final java.lang.String engineVersion;
        private final java.lang.String networkType;
        private final java.lang.Number period;
        private final java.lang.Number readonlyReplicas;
        private final java.lang.Number replicationFactor;
        private final java.lang.String resourceGroupId;
        private final java.lang.String restoreTime;
        private final java.lang.String securityIpArray;
        private final java.lang.String srcDbInstanceId;
        private final java.lang.String storageEngine;
        private final java.lang.String vpcId;
        private final java.lang.Object vpcPasswordFree;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupId = software.amazon.jsii.Kernel.get(this, "backupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.businessInfo = software.amazon.jsii.Kernel.get(this, "businessInfo", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.couponNo = software.amazon.jsii.Kernel.get(this, "couponNo", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseNames = software.amazon.jsii.Kernel.get(this, "databaseNames", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.readonlyReplicas = software.amazon.jsii.Kernel.get(this, "readonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.replicationFactor = software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityIpArray = software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.srcDbInstanceId = software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageEngine = software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcPasswordFree = software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String dbInstanceClass, final java.lang.Number dbInstanceStorage, final java.lang.String accountPassword, final java.lang.Object autoRenew, final java.lang.String backupId, final java.lang.String businessInfo, final java.lang.String chargeType, final java.lang.String couponNo, final java.lang.String databaseNames, final java.lang.String dbInstanceDescription, final java.lang.String engineVersion, final java.lang.String networkType, final java.lang.Number period, final java.lang.Number readonlyReplicas, final java.lang.Number replicationFactor, final java.lang.String resourceGroupId, final java.lang.String restoreTime, final java.lang.String securityIpArray, final java.lang.String srcDbInstanceId, final java.lang.String storageEngine, final java.lang.String vpcId, final java.lang.Object vpcPasswordFree, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceClass = java.util.Objects.requireNonNull(dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(dbInstanceStorage, "dbInstanceStorage is required");
            this.accountPassword = accountPassword;
            this.autoRenew = autoRenew;
            this.backupId = backupId;
            this.businessInfo = businessInfo;
            this.chargeType = chargeType;
            this.couponNo = couponNo;
            this.databaseNames = databaseNames;
            this.dbInstanceDescription = dbInstanceDescription;
            this.engineVersion = engineVersion;
            this.networkType = networkType;
            this.period = period;
            this.readonlyReplicas = readonlyReplicas;
            this.replicationFactor = replicationFactor;
            this.resourceGroupId = resourceGroupId;
            this.restoreTime = restoreTime;
            this.securityIpArray = securityIpArray;
            this.srcDbInstanceId = srcDbInstanceId;
            this.storageEngine = storageEngine;
            this.vpcId = vpcId;
            this.vpcPasswordFree = vpcPasswordFree;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Number getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.String getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.String getBackupId() {
            return this.backupId;
        }

        @Override
        public final java.lang.String getBusinessInfo() {
            return this.businessInfo;
        }

        @Override
        public final java.lang.String getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.String getCouponNo() {
            return this.couponNo;
        }

        @Override
        public final java.lang.String getDatabaseNames() {
            return this.databaseNames;
        }

        @Override
        public final java.lang.String getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.String getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.String getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Number getReadonlyReplicas() {
            return this.readonlyReplicas;
        }

        @Override
        public final java.lang.Number getReplicationFactor() {
            return this.replicationFactor;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getRestoreTime() {
            return this.restoreTime;
        }

        @Override
        public final java.lang.String getSecurityIpArray() {
            return this.securityIpArray;
        }

        @Override
        public final java.lang.String getSrcDbInstanceId() {
            return this.srcDbInstanceId;
        }

        @Override
        public final java.lang.String getStorageEngine() {
            return this.storageEngine;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVpcPasswordFree() {
            return this.vpcPasswordFree;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBackupId() != null) {
                data.set("backupId", om.valueToTree(this.getBackupId()));
            }
            if (this.getBusinessInfo() != null) {
                data.set("businessInfo", om.valueToTree(this.getBusinessInfo()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getCouponNo() != null) {
                data.set("couponNo", om.valueToTree(this.getCouponNo()));
            }
            if (this.getDatabaseNames() != null) {
                data.set("databaseNames", om.valueToTree(this.getDatabaseNames()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getReadonlyReplicas() != null) {
                data.set("readonlyReplicas", om.valueToTree(this.getReadonlyReplicas()));
            }
            if (this.getReplicationFactor() != null) {
                data.set("replicationFactor", om.valueToTree(this.getReplicationFactor()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getSecurityIpArray() != null) {
                data.set("securityIpArray", om.valueToTree(this.getSecurityIpArray()));
            }
            if (this.getSrcDbInstanceId() != null) {
                data.set("srcDbInstanceId", om.valueToTree(this.getSrcDbInstanceId()));
            }
            if (this.getStorageEngine() != null) {
                data.set("storageEngine", om.valueToTree(this.getStorageEngine()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVpcPasswordFree() != null) {
                data.set("vpcPasswordFree", om.valueToTree(this.getVpcPasswordFree()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backupId != null ? !this.backupId.equals(that.backupId) : that.backupId != null) return false;
            if (this.businessInfo != null ? !this.businessInfo.equals(that.businessInfo) : that.businessInfo != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.couponNo != null ? !this.couponNo.equals(that.couponNo) : that.couponNo != null) return false;
            if (this.databaseNames != null ? !this.databaseNames.equals(that.databaseNames) : that.databaseNames != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.readonlyReplicas != null ? !this.readonlyReplicas.equals(that.readonlyReplicas) : that.readonlyReplicas != null) return false;
            if (this.replicationFactor != null ? !this.replicationFactor.equals(that.replicationFactor) : that.replicationFactor != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            if (this.securityIpArray != null ? !this.securityIpArray.equals(that.securityIpArray) : that.securityIpArray != null) return false;
            if (this.srcDbInstanceId != null ? !this.srcDbInstanceId.equals(that.srcDbInstanceId) : that.srcDbInstanceId != null) return false;
            if (this.storageEngine != null ? !this.storageEngine.equals(that.storageEngine) : that.storageEngine != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vpcPasswordFree != null ? !this.vpcPasswordFree.equals(that.vpcPasswordFree) : that.vpcPasswordFree != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceClass.hashCode();
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backupId != null ? this.backupId.hashCode() : 0);
            result = 31 * result + (this.businessInfo != null ? this.businessInfo.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.couponNo != null ? this.couponNo.hashCode() : 0);
            result = 31 * result + (this.databaseNames != null ? this.databaseNames.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.readonlyReplicas != null ? this.readonlyReplicas.hashCode() : 0);
            result = 31 * result + (this.replicationFactor != null ? this.replicationFactor.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.securityIpArray != null ? this.securityIpArray.hashCode() : 0);
            result = 31 * result + (this.srcDbInstanceId != null ? this.srcDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.storageEngine != null ? this.storageEngine.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vpcPasswordFree != null ? this.vpcPasswordFree.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

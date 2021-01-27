package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.232Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterProps")
@software.amazon.jsii.Jsii.Proxy(DBClusterProps.Jsii$Proxy.class)
public interface DBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbNodeClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPayType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBackupRetentionPolicyOnClusterDeletion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCloneDataPoint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getClusterNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCreationCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCreationOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultTimeZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGdnId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getLowerCaseTableNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRenewalStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceResourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
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
     * @return a {@link Builder} of {@link DBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClusterProps> {
        private java.lang.String dbNodeClass;
        private java.lang.String dbType;
        private java.lang.String dbVersion;
        private java.lang.String payType;
        private java.lang.Number autoRenewPeriod;
        private java.lang.String backupRetentionPolicyOnClusterDeletion;
        private java.lang.String cloneDataPoint;
        private java.lang.String clusterNetworkType;
        private java.lang.String creationCategory;
        private java.lang.String creationOption;
        private java.lang.String dbClusterDescription;
        private java.lang.String defaultTimeZone;
        private java.lang.String gdnId;
        private java.lang.Number lowerCaseTableNames;
        private java.lang.String maintainTime;
        private java.lang.Number period;
        private java.lang.String renewalStatus;
        private java.lang.String resourceGroupId;
        private java.lang.String securityIpList;
        private java.lang.String sourceResourceId;
        private java.lang.Object tdeStatus;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link DBClusterProps#getDbNodeClass}
         * @param dbNodeClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbType}
         * @param dbType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getBackupRetentionPolicyOnClusterDeletion}
         * @param backupRetentionPolicyOnClusterDeletion the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPolicyOnClusterDeletion(java.lang.String backupRetentionPolicyOnClusterDeletion) {
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCloneDataPoint}
         * @param cloneDataPoint the value to be set.
         * @return {@code this}
         */
        public Builder cloneDataPoint(java.lang.String cloneDataPoint) {
            this.cloneDataPoint = cloneDataPoint;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getClusterNetworkType}
         * @param clusterNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder clusterNetworkType(java.lang.String clusterNetworkType) {
            this.clusterNetworkType = clusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationCategory}
         * @param creationCategory the value to be set.
         * @return {@code this}
         */
        public Builder creationCategory(java.lang.String creationCategory) {
            this.creationCategory = creationCategory;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getCreationOption}
         * @param creationOption the value to be set.
         * @return {@code this}
         */
        public Builder creationOption(java.lang.String creationOption) {
            this.creationOption = creationOption;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getDefaultTimeZone}
         * @param defaultTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder defaultTimeZone(java.lang.String defaultTimeZone) {
            this.defaultTimeZone = defaultTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getGdnId}
         * @param gdnId the value to be set.
         * @return {@code this}
         */
        public Builder gdnId(java.lang.String gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getLowerCaseTableNames}
         * @param lowerCaseTableNames the value to be set.
         * @return {@code this}
         */
        public Builder lowerCaseTableNames(java.lang.Number lowerCaseTableNames) {
            this.lowerCaseTableNames = lowerCaseTableNames;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getSourceResourceId}
         * @param sourceResourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceResourceId(java.lang.String sourceResourceId) {
            this.sourceResourceId = sourceResourceId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTdeStatus}
         * @param tdeStatus the value to be set.
         * @return {@code this}
         */
        public Builder tdeStatus(java.lang.Boolean tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getTdeStatus}
         * @param tdeStatus the value to be set.
         * @return {@code this}
         */
        public Builder tdeStatus(com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClusterProps build() {
            return new Jsii$Proxy(dbNodeClass, dbType, dbVersion, payType, autoRenewPeriod, backupRetentionPolicyOnClusterDeletion, cloneDataPoint, clusterNetworkType, creationCategory, creationOption, dbClusterDescription, defaultTimeZone, gdnId, lowerCaseTableNames, maintainTime, period, renewalStatus, resourceGroupId, securityIpList, sourceResourceId, tdeStatus, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link DBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClusterProps {
        private final java.lang.String dbNodeClass;
        private final java.lang.String dbType;
        private final java.lang.String dbVersion;
        private final java.lang.String payType;
        private final java.lang.Number autoRenewPeriod;
        private final java.lang.String backupRetentionPolicyOnClusterDeletion;
        private final java.lang.String cloneDataPoint;
        private final java.lang.String clusterNetworkType;
        private final java.lang.String creationCategory;
        private final java.lang.String creationOption;
        private final java.lang.String dbClusterDescription;
        private final java.lang.String defaultTimeZone;
        private final java.lang.String gdnId;
        private final java.lang.Number lowerCaseTableNames;
        private final java.lang.String maintainTime;
        private final java.lang.Number period;
        private final java.lang.String renewalStatus;
        private final java.lang.String resourceGroupId;
        private final java.lang.String securityIpList;
        private final java.lang.String sourceResourceId;
        private final java.lang.Object tdeStatus;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.backupRetentionPolicyOnClusterDeletion = software.amazon.jsii.Kernel.get(this, "backupRetentionPolicyOnClusterDeletion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cloneDataPoint = software.amazon.jsii.Kernel.get(this, "cloneDataPoint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clusterNetworkType = software.amazon.jsii.Kernel.get(this, "clusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.creationCategory = software.amazon.jsii.Kernel.get(this, "creationCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.creationOption = software.amazon.jsii.Kernel.get(this, "creationOption", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultTimeZone = software.amazon.jsii.Kernel.get(this, "defaultTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.gdnId = software.amazon.jsii.Kernel.get(this, "gdnId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.lowerCaseTableNames = software.amazon.jsii.Kernel.get(this, "lowerCaseTableNames", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceResourceId = software.amazon.jsii.Kernel.get(this, "sourceResourceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String dbNodeClass, final java.lang.String dbType, final java.lang.String dbVersion, final java.lang.String payType, final java.lang.Number autoRenewPeriod, final java.lang.String backupRetentionPolicyOnClusterDeletion, final java.lang.String cloneDataPoint, final java.lang.String clusterNetworkType, final java.lang.String creationCategory, final java.lang.String creationOption, final java.lang.String dbClusterDescription, final java.lang.String defaultTimeZone, final java.lang.String gdnId, final java.lang.Number lowerCaseTableNames, final java.lang.String maintainTime, final java.lang.Number period, final java.lang.String renewalStatus, final java.lang.String resourceGroupId, final java.lang.String securityIpList, final java.lang.String sourceResourceId, final java.lang.Object tdeStatus, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbNodeClass = java.util.Objects.requireNonNull(dbNodeClass, "dbNodeClass is required");
            this.dbType = java.util.Objects.requireNonNull(dbType, "dbType is required");
            this.dbVersion = java.util.Objects.requireNonNull(dbVersion, "dbVersion is required");
            this.payType = java.util.Objects.requireNonNull(payType, "payType is required");
            this.autoRenewPeriod = autoRenewPeriod;
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            this.cloneDataPoint = cloneDataPoint;
            this.clusterNetworkType = clusterNetworkType;
            this.creationCategory = creationCategory;
            this.creationOption = creationOption;
            this.dbClusterDescription = dbClusterDescription;
            this.defaultTimeZone = defaultTimeZone;
            this.gdnId = gdnId;
            this.lowerCaseTableNames = lowerCaseTableNames;
            this.maintainTime = maintainTime;
            this.period = period;
            this.renewalStatus = renewalStatus;
            this.resourceGroupId = resourceGroupId;
            this.securityIpList = securityIpList;
            this.sourceResourceId = sourceResourceId;
            this.tdeStatus = tdeStatus;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.String getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.String getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.String getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Number getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.String getBackupRetentionPolicyOnClusterDeletion() {
            return this.backupRetentionPolicyOnClusterDeletion;
        }

        @Override
        public final java.lang.String getCloneDataPoint() {
            return this.cloneDataPoint;
        }

        @Override
        public final java.lang.String getClusterNetworkType() {
            return this.clusterNetworkType;
        }

        @Override
        public final java.lang.String getCreationCategory() {
            return this.creationCategory;
        }

        @Override
        public final java.lang.String getCreationOption() {
            return this.creationOption;
        }

        @Override
        public final java.lang.String getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.String getDefaultTimeZone() {
            return this.defaultTimeZone;
        }

        @Override
        public final java.lang.String getGdnId() {
            return this.gdnId;
        }

        @Override
        public final java.lang.Number getLowerCaseTableNames() {
            return this.lowerCaseTableNames;
        }

        @Override
        public final java.lang.String getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.String getSourceResourceId() {
            return this.sourceResourceId;
        }

        @Override
        public final java.lang.Object getTdeStatus() {
            return this.tdeStatus;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
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

            data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            data.set("dbType", om.valueToTree(this.getDbType()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getBackupRetentionPolicyOnClusterDeletion() != null) {
                data.set("backupRetentionPolicyOnClusterDeletion", om.valueToTree(this.getBackupRetentionPolicyOnClusterDeletion()));
            }
            if (this.getCloneDataPoint() != null) {
                data.set("cloneDataPoint", om.valueToTree(this.getCloneDataPoint()));
            }
            if (this.getClusterNetworkType() != null) {
                data.set("clusterNetworkType", om.valueToTree(this.getClusterNetworkType()));
            }
            if (this.getCreationCategory() != null) {
                data.set("creationCategory", om.valueToTree(this.getCreationCategory()));
            }
            if (this.getCreationOption() != null) {
                data.set("creationOption", om.valueToTree(this.getCreationOption()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getDefaultTimeZone() != null) {
                data.set("defaultTimeZone", om.valueToTree(this.getDefaultTimeZone()));
            }
            if (this.getGdnId() != null) {
                data.set("gdnId", om.valueToTree(this.getGdnId()));
            }
            if (this.getLowerCaseTableNames() != null) {
                data.set("lowerCaseTableNames", om.valueToTree(this.getLowerCaseTableNames()));
            }
            if (this.getMaintainTime() != null) {
                data.set("maintainTime", om.valueToTree(this.getMaintainTime()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSourceResourceId() != null) {
                data.set("sourceResourceId", om.valueToTree(this.getSourceResourceId()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBClusterProps"));
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

            if (!dbNodeClass.equals(that.dbNodeClass)) return false;
            if (!dbType.equals(that.dbType)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (!payType.equals(that.payType)) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.backupRetentionPolicyOnClusterDeletion != null ? !this.backupRetentionPolicyOnClusterDeletion.equals(that.backupRetentionPolicyOnClusterDeletion) : that.backupRetentionPolicyOnClusterDeletion != null) return false;
            if (this.cloneDataPoint != null ? !this.cloneDataPoint.equals(that.cloneDataPoint) : that.cloneDataPoint != null) return false;
            if (this.clusterNetworkType != null ? !this.clusterNetworkType.equals(that.clusterNetworkType) : that.clusterNetworkType != null) return false;
            if (this.creationCategory != null ? !this.creationCategory.equals(that.creationCategory) : that.creationCategory != null) return false;
            if (this.creationOption != null ? !this.creationOption.equals(that.creationOption) : that.creationOption != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.defaultTimeZone != null ? !this.defaultTimeZone.equals(that.defaultTimeZone) : that.defaultTimeZone != null) return false;
            if (this.gdnId != null ? !this.gdnId.equals(that.gdnId) : that.gdnId != null) return false;
            if (this.lowerCaseTableNames != null ? !this.lowerCaseTableNames.equals(that.lowerCaseTableNames) : that.lowerCaseTableNames != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.sourceResourceId != null ? !this.sourceResourceId.equals(that.sourceResourceId) : that.sourceResourceId != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbNodeClass.hashCode();
            result = 31 * result + (this.dbType.hashCode());
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPolicyOnClusterDeletion != null ? this.backupRetentionPolicyOnClusterDeletion.hashCode() : 0);
            result = 31 * result + (this.cloneDataPoint != null ? this.cloneDataPoint.hashCode() : 0);
            result = 31 * result + (this.clusterNetworkType != null ? this.clusterNetworkType.hashCode() : 0);
            result = 31 * result + (this.creationCategory != null ? this.creationCategory.hashCode() : 0);
            result = 31 * result + (this.creationOption != null ? this.creationOption.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.defaultTimeZone != null ? this.defaultTimeZone.hashCode() : 0);
            result = 31 * result + (this.gdnId != null ? this.gdnId.hashCode() : 0);
            result = 31 * result + (this.lowerCaseTableNames != null ? this.lowerCaseTableNames.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.sourceResourceId != null ? this.sourceResourceId.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

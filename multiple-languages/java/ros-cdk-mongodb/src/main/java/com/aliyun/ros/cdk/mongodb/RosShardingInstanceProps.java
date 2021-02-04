package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a `ALIYUN::MONGODB::ShardingInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.098Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosShardingInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosShardingInstanceProps.Jsii$Proxy.class)
public interface RosShardingInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigServer();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMongos();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicaSet();

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
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.String getProtocolType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosShardingInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosShardingInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosShardingInstanceProps> {
        private java.lang.Object configServer;
        private java.lang.Object mongos;
        private java.lang.Object replicaSet;
        private java.lang.String accountPassword;
        private java.lang.Object autoRenew;
        private java.lang.String chargeType;
        private java.lang.String dbInstanceDescription;
        private java.lang.String engineVersion;
        private java.lang.String networkType;
        private java.lang.Number period;
        private java.lang.String protocolType;
        private java.lang.String restoreTime;
        private java.lang.String securityIpArray;
        private java.lang.String srcDbInstanceId;
        private java.lang.String storageEngine;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link RosShardingInstanceProps#getConfigServer}
         * @param configServer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configServer(com.aliyun.ros.cdk.core.IResolvable configServer) {
            this.configServer = configServer;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getConfigServer}
         * @param configServer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configServer(java.util.List<? extends java.lang.Object> configServer) {
            this.configServer = configServer;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getMongos}
         * @param mongos the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mongos(com.aliyun.ros.cdk.core.IResolvable mongos) {
            this.mongos = mongos;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getMongos}
         * @param mongos the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mongos(java.util.List<? extends java.lang.Object> mongos) {
            this.mongos = mongos;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getReplicaSet}
         * @param replicaSet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaSet(com.aliyun.ros.cdk.core.IResolvable replicaSet) {
            this.replicaSet = replicaSet;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getReplicaSet}
         * @param replicaSet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaSet(java.util.List<? extends java.lang.Object> replicaSet) {
            this.replicaSet = replicaSet;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getAccountPassword}
         * @param accountPassword the value to be set.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getRestoreTime}
         * @param restoreTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getSecurityIpArray}
         * @param securityIpArray the value to be set.
         * @return {@code this}
         */
        public Builder securityIpArray(java.lang.String securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(java.lang.String srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getStorageEngine}
         * @param storageEngine the value to be set.
         * @return {@code this}
         */
        public Builder storageEngine(java.lang.String storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosShardingInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosShardingInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosShardingInstanceProps build() {
            return new Jsii$Proxy(configServer, mongos, replicaSet, accountPassword, autoRenew, chargeType, dbInstanceDescription, engineVersion, networkType, period, protocolType, restoreTime, securityIpArray, srcDbInstanceId, storageEngine, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link RosShardingInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosShardingInstanceProps {
        private final java.lang.Object configServer;
        private final java.lang.Object mongos;
        private final java.lang.Object replicaSet;
        private final java.lang.String accountPassword;
        private final java.lang.Object autoRenew;
        private final java.lang.String chargeType;
        private final java.lang.String dbInstanceDescription;
        private final java.lang.String engineVersion;
        private final java.lang.String networkType;
        private final java.lang.Number period;
        private final java.lang.String protocolType;
        private final java.lang.String restoreTime;
        private final java.lang.String securityIpArray;
        private final java.lang.String srcDbInstanceId;
        private final java.lang.String storageEngine;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configServer = software.amazon.jsii.Kernel.get(this, "configServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mongos = software.amazon.jsii.Kernel.get(this, "mongos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicaSet = software.amazon.jsii.Kernel.get(this, "replicaSet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityIpArray = software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.srcDbInstanceId = software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageEngine = software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object configServer, final java.lang.Object mongos, final java.lang.Object replicaSet, final java.lang.String accountPassword, final java.lang.Object autoRenew, final java.lang.String chargeType, final java.lang.String dbInstanceDescription, final java.lang.String engineVersion, final java.lang.String networkType, final java.lang.Number period, final java.lang.String protocolType, final java.lang.String restoreTime, final java.lang.String securityIpArray, final java.lang.String srcDbInstanceId, final java.lang.String storageEngine, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configServer = java.util.Objects.requireNonNull(configServer, "configServer is required");
            this.mongos = java.util.Objects.requireNonNull(mongos, "mongos is required");
            this.replicaSet = java.util.Objects.requireNonNull(replicaSet, "replicaSet is required");
            this.accountPassword = accountPassword;
            this.autoRenew = autoRenew;
            this.chargeType = chargeType;
            this.dbInstanceDescription = dbInstanceDescription;
            this.engineVersion = engineVersion;
            this.networkType = networkType;
            this.period = period;
            this.protocolType = protocolType;
            this.restoreTime = restoreTime;
            this.securityIpArray = securityIpArray;
            this.srcDbInstanceId = srcDbInstanceId;
            this.storageEngine = storageEngine;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getConfigServer() {
            return this.configServer;
        }

        @Override
        public final java.lang.Object getMongos() {
            return this.mongos;
        }

        @Override
        public final java.lang.Object getReplicaSet() {
            return this.replicaSet;
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
        public final java.lang.String getChargeType() {
            return this.chargeType;
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
        public final java.lang.String getProtocolType() {
            return this.protocolType;
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

            data.set("configServer", om.valueToTree(this.getConfigServer()));
            data.set("mongos", om.valueToTree(this.getMongos()));
            data.set("replicaSet", om.valueToTree(this.getReplicaSet()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
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
            if (this.getProtocolType() != null) {
                data.set("protocolType", om.valueToTree(this.getProtocolType()));
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
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosShardingInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosShardingInstanceProps.Jsii$Proxy that = (RosShardingInstanceProps.Jsii$Proxy) o;

            if (!configServer.equals(that.configServer)) return false;
            if (!mongos.equals(that.mongos)) return false;
            if (!replicaSet.equals(that.replicaSet)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.protocolType != null ? !this.protocolType.equals(that.protocolType) : that.protocolType != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            if (this.securityIpArray != null ? !this.securityIpArray.equals(that.securityIpArray) : that.securityIpArray != null) return false;
            if (this.srcDbInstanceId != null ? !this.srcDbInstanceId.equals(that.srcDbInstanceId) : that.srcDbInstanceId != null) return false;
            if (this.storageEngine != null ? !this.storageEngine.equals(that.storageEngine) : that.storageEngine != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configServer.hashCode();
            result = 31 * result + (this.mongos.hashCode());
            result = 31 * result + (this.replicaSet.hashCode());
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.protocolType != null ? this.protocolType.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.securityIpArray != null ? this.securityIpArray.hashCode() : 0);
            result = 31 * result + (this.srcDbInstanceId != null ? this.srcDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.storageEngine != null ? this.storageEngine.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

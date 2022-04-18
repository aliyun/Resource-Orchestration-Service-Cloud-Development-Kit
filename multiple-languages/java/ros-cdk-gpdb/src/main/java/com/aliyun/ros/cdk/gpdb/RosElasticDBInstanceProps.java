package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a `ALIYUN::GPDB::ElasticDBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.183Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.RosElasticDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosElasticDBInstanceProps.Jsii$Proxy.class)
public interface RosElasticDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSpec();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSegNodeNum();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSegStorageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterNodeNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosElasticDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosElasticDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosElasticDBInstanceProps> {
        java.lang.Object engineVersion;
        java.lang.Object instanceSpec;
        java.lang.Object segNodeNum;
        java.lang.Object segStorageType;
        java.lang.Object storageSize;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object dbInstanceCategory;
        java.lang.Object dbInstanceDescription;
        java.lang.Object encryptionKey;
        java.lang.Object encryptionType;
        java.lang.Object masterNodeNum;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getInstanceSpec}
         * @param instanceSpec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSpec(java.lang.String instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getInstanceSpec}
         * @param instanceSpec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSpec(com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSegNodeNum}
         * @param segNodeNum the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder segNodeNum(java.lang.Number segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSegNodeNum}
         * @param segNodeNum the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder segNodeNum(com.aliyun.ros.cdk.core.IResolvable segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSegStorageType}
         * @param segStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder segStorageType(java.lang.String segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSegStorageType}
         * @param segStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder segStorageType(com.aliyun.ros.cdk.core.IResolvable segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getStorageSize}
         * @param storageSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getStorageSize}
         * @param storageSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(java.lang.String dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(java.lang.String encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder masterNodeNum(java.lang.Number masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder masterNodeNum(com.aliyun.ros.cdk.core.IResolvable masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticDBInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosElasticDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosElasticDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosElasticDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosElasticDBInstanceProps {
        private final java.lang.Object engineVersion;
        private final java.lang.Object instanceSpec;
        private final java.lang.Object segNodeNum;
        private final java.lang.Object segStorageType;
        private final java.lang.Object storageSize;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object dbInstanceCategory;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object encryptionType;
        private final java.lang.Object masterNodeNum;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSpec = software.amazon.jsii.Kernel.get(this, "instanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segNodeNum = software.amazon.jsii.Kernel.get(this, "segNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segStorageType = software.amazon.jsii.Kernel.get(this, "segStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceCategory = software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionType = software.amazon.jsii.Kernel.get(this, "encryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNodeNum = software.amazon.jsii.Kernel.get(this, "masterNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.instanceSpec = java.util.Objects.requireNonNull(builder.instanceSpec, "instanceSpec is required");
            this.segNodeNum = java.util.Objects.requireNonNull(builder.segNodeNum, "segNodeNum is required");
            this.segStorageType = java.util.Objects.requireNonNull(builder.segStorageType, "segStorageType is required");
            this.storageSize = java.util.Objects.requireNonNull(builder.storageSize, "storageSize is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.dbInstanceCategory = builder.dbInstanceCategory;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.encryptionKey = builder.encryptionKey;
            this.encryptionType = builder.encryptionType;
            this.masterNodeNum = builder.masterNodeNum;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.securityIpList = builder.securityIpList;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getInstanceSpec() {
            return this.instanceSpec;
        }

        @Override
        public final java.lang.Object getSegNodeNum() {
            return this.segNodeNum;
        }

        @Override
        public final java.lang.Object getSegStorageType() {
            return this.segStorageType;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
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
        public final java.lang.Object getDbInstanceCategory() {
            return this.dbInstanceCategory;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.Object getEncryptionType() {
            return this.encryptionType;
        }

        @Override
        public final java.lang.Object getMasterNodeNum() {
            return this.masterNodeNum;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("instanceSpec", om.valueToTree(this.getInstanceSpec()));
            data.set("segNodeNum", om.valueToTree(this.getSegNodeNum()));
            data.set("segStorageType", om.valueToTree(this.getSegStorageType()));
            data.set("storageSize", om.valueToTree(this.getStorageSize()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDbInstanceCategory() != null) {
                data.set("dbInstanceCategory", om.valueToTree(this.getDbInstanceCategory()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
            }
            if (this.getEncryptionType() != null) {
                data.set("encryptionType", om.valueToTree(this.getEncryptionType()));
            }
            if (this.getMasterNodeNum() != null) {
                data.set("masterNodeNum", om.valueToTree(this.getMasterNodeNum()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.RosElasticDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosElasticDBInstanceProps.Jsii$Proxy that = (RosElasticDBInstanceProps.Jsii$Proxy) o;

            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!instanceSpec.equals(that.instanceSpec)) return false;
            if (!segNodeNum.equals(that.segNodeNum)) return false;
            if (!segStorageType.equals(that.segStorageType)) return false;
            if (!storageSize.equals(that.storageSize)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.dbInstanceCategory != null ? !this.dbInstanceCategory.equals(that.dbInstanceCategory) : that.dbInstanceCategory != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.encryptionType != null ? !this.encryptionType.equals(that.encryptionType) : that.encryptionType != null) return false;
            if (this.masterNodeNum != null ? !this.masterNodeNum.equals(that.masterNodeNum) : that.masterNodeNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engineVersion.hashCode();
            result = 31 * result + (this.instanceSpec.hashCode());
            result = 31 * result + (this.segNodeNum.hashCode());
            result = 31 * result + (this.segStorageType.hashCode());
            result = 31 * result + (this.storageSize.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.dbInstanceCategory != null ? this.dbInstanceCategory.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.encryptionType != null ? this.encryptionType.hashCode() : 0);
            result = 31 * result + (this.masterNodeNum != null ? this.masterNodeNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}

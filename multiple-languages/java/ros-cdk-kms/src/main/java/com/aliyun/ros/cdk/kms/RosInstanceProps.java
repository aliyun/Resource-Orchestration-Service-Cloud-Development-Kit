package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:09.125Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductVersion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcNum() {
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
        java.lang.Object productVersion;
        java.lang.Object connection;
        java.lang.Object instanceChargeType;
        java.lang.Object keyNum;
        java.lang.Object log;
        java.lang.Object logStorage;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object renewPeriod;
        java.lang.Object renewStatus;
        java.lang.Object secretNum;
        java.lang.Object spec;
        java.lang.Object vpcNum;

        /**
         * Sets the value of {@link RosInstanceProps#getProductVersion}
         * @param productVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productVersion(java.lang.String productVersion) {
            this.productVersion = productVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductVersion}
         * @param productVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productVersion(com.aliyun.ros.cdk.core.IResolvable productVersion) {
            this.productVersion = productVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConnection}
         * @param connection the value to be set.
         * @return {@code this}
         */
        public Builder connection(com.aliyun.ros.cdk.core.IResolvable connection) {
            this.connection = connection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConnection}
         * @param connection the value to be set.
         * @return {@code this}
         */
        public Builder connection(com.aliyun.ros.cdk.kms.RosInstance.ConnectionProperty connection) {
            this.connection = connection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getKeyNum}
         * @param keyNum the value to be set.
         * @return {@code this}
         */
        public Builder keyNum(java.lang.Number keyNum) {
            this.keyNum = keyNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getKeyNum}
         * @param keyNum the value to be set.
         * @return {@code this}
         */
        public Builder keyNum(com.aliyun.ros.cdk.core.IResolvable keyNum) {
            this.keyNum = keyNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLog}
         * @param log the value to be set.
         * @return {@code this}
         */
        public Builder log(java.lang.Boolean log) {
            this.log = log;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLog}
         * @param log the value to be set.
         * @return {@code this}
         */
        public Builder log(com.aliyun.ros.cdk.core.IResolvable log) {
            this.log = log;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogStorage}
         * @param logStorage the value to be set.
         * @return {@code this}
         */
        public Builder logStorage(java.lang.Number logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogStorage}
         * @param logStorage the value to be set.
         * @return {@code this}
         */
        public Builder logStorage(com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.logStorage = logStorage;
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
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewPeriod}
         * @param renewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder renewPeriod(java.lang.Number renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewPeriod}
         * @param renewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder renewPeriod(com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewStatus}
         * @param renewStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewStatus(java.lang.String renewStatus) {
            this.renewStatus = renewStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getRenewStatus}
         * @param renewStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewStatus(com.aliyun.ros.cdk.core.IResolvable renewStatus) {
            this.renewStatus = renewStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSecretNum}
         * @param secretNum the value to be set.
         * @return {@code this}
         */
        public Builder secretNum(java.lang.Number secretNum) {
            this.secretNum = secretNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSecretNum}
         * @param secretNum the value to be set.
         * @return {@code this}
         */
        public Builder secretNum(com.aliyun.ros.cdk.core.IResolvable secretNum) {
            this.secretNum = secretNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(java.lang.Number spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcNum}
         * @param vpcNum the value to be set.
         * @return {@code this}
         */
        public Builder vpcNum(java.lang.Number vpcNum) {
            this.vpcNum = vpcNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcNum}
         * @param vpcNum the value to be set.
         * @return {@code this}
         */
        public Builder vpcNum(com.aliyun.ros.cdk.core.IResolvable vpcNum) {
            this.vpcNum = vpcNum;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object productVersion;
        private final java.lang.Object connection;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object keyNum;
        private final java.lang.Object log;
        private final java.lang.Object logStorage;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object renewPeriod;
        private final java.lang.Object renewStatus;
        private final java.lang.Object secretNum;
        private final java.lang.Object spec;
        private final java.lang.Object vpcNum;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productVersion = software.amazon.jsii.Kernel.get(this, "productVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connection = software.amazon.jsii.Kernel.get(this, "connection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyNum = software.amazon.jsii.Kernel.get(this, "keyNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.log = software.amazon.jsii.Kernel.get(this, "log", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStorage = software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewPeriod = software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewStatus = software.amazon.jsii.Kernel.get(this, "renewStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretNum = software.amazon.jsii.Kernel.get(this, "secretNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcNum = software.amazon.jsii.Kernel.get(this, "vpcNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productVersion = java.util.Objects.requireNonNull(builder.productVersion, "productVersion is required");
            this.connection = builder.connection;
            this.instanceChargeType = builder.instanceChargeType;
            this.keyNum = builder.keyNum;
            this.log = builder.log;
            this.logStorage = builder.logStorage;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.renewPeriod = builder.renewPeriod;
            this.renewStatus = builder.renewStatus;
            this.secretNum = builder.secretNum;
            this.spec = builder.spec;
            this.vpcNum = builder.vpcNum;
        }

        @Override
        public final java.lang.Object getProductVersion() {
            return this.productVersion;
        }

        @Override
        public final java.lang.Object getConnection() {
            return this.connection;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getKeyNum() {
            return this.keyNum;
        }

        @Override
        public final java.lang.Object getLog() {
            return this.log;
        }

        @Override
        public final java.lang.Object getLogStorage() {
            return this.logStorage;
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
        public final java.lang.Object getRenewPeriod() {
            return this.renewPeriod;
        }

        @Override
        public final java.lang.Object getRenewStatus() {
            return this.renewStatus;
        }

        @Override
        public final java.lang.Object getSecretNum() {
            return this.secretNum;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getVpcNum() {
            return this.vpcNum;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("productVersion", om.valueToTree(this.getProductVersion()));
            if (this.getConnection() != null) {
                data.set("connection", om.valueToTree(this.getConnection()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getKeyNum() != null) {
                data.set("keyNum", om.valueToTree(this.getKeyNum()));
            }
            if (this.getLog() != null) {
                data.set("log", om.valueToTree(this.getLog()));
            }
            if (this.getLogStorage() != null) {
                data.set("logStorage", om.valueToTree(this.getLogStorage()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getRenewPeriod() != null) {
                data.set("renewPeriod", om.valueToTree(this.getRenewPeriod()));
            }
            if (this.getRenewStatus() != null) {
                data.set("renewStatus", om.valueToTree(this.getRenewStatus()));
            }
            if (this.getSecretNum() != null) {
                data.set("secretNum", om.valueToTree(this.getSecretNum()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getVpcNum() != null) {
                data.set("vpcNum", om.valueToTree(this.getVpcNum()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosInstanceProps"));
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

            if (!productVersion.equals(that.productVersion)) return false;
            if (this.connection != null ? !this.connection.equals(that.connection) : that.connection != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.keyNum != null ? !this.keyNum.equals(that.keyNum) : that.keyNum != null) return false;
            if (this.log != null ? !this.log.equals(that.log) : that.log != null) return false;
            if (this.logStorage != null ? !this.logStorage.equals(that.logStorage) : that.logStorage != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.renewPeriod != null ? !this.renewPeriod.equals(that.renewPeriod) : that.renewPeriod != null) return false;
            if (this.renewStatus != null ? !this.renewStatus.equals(that.renewStatus) : that.renewStatus != null) return false;
            if (this.secretNum != null ? !this.secretNum.equals(that.secretNum) : that.secretNum != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            return this.vpcNum != null ? this.vpcNum.equals(that.vpcNum) : that.vpcNum == null;
        }

        @Override
        public final int hashCode() {
            int result = this.productVersion.hashCode();
            result = 31 * result + (this.connection != null ? this.connection.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.keyNum != null ? this.keyNum.hashCode() : 0);
            result = 31 * result + (this.log != null ? this.log.hashCode() : 0);
            result = 31 * result + (this.logStorage != null ? this.logStorage.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.renewPeriod != null ? this.renewPeriod.hashCode() : 0);
            result = 31 * result + (this.renewStatus != null ? this.renewStatus.hashCode() : 0);
            result = 31 * result + (this.secretNum != null ? this.secretNum.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.vpcNum != null ? this.vpcNum.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a `ALIYUN::REDIS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.389Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnections() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEvictionPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcPasswordFree() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
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
        java.lang.Object autoRenewDuration;
        java.lang.Object backupPolicy;
        java.lang.Object capacity;
        java.lang.Object chargeType;
        java.lang.Object connections;
        java.lang.Object deletionForce;
        java.lang.Object engineVersion;
        java.lang.Object evictionPolicy;
        java.lang.Object instanceClass;
        java.lang.Object instanceMaintainTime;
        java.lang.Object instanceName;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object productType;
        java.lang.Object securityGroupId;
        java.lang.Object sslEnabled;
        java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vpcPasswordFree;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBackupPolicy}
         * @param backupPolicy the value to be set.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBackupPolicy}
         * @param backupPolicy the value to be set.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.redis.RosInstance.BackupPolicyProperty backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getCapacity}
         * @param capacity the value to be set.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getCapacity}
         * @param capacity the value to be set.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
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
         * Sets the value of {@link RosInstanceProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConnections}
         * @param connections the value to be set.
         * @return {@code this}
         */
        public Builder connections(com.aliyun.ros.cdk.core.IResolvable connections) {
            this.connections = connections;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getConnections}
         * @param connections the value to be set.
         * @return {@code this}
         */
        public Builder connections(com.aliyun.ros.cdk.redis.RosInstance.ConnectionsProperty connections) {
            this.connections = connections;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
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
         * Sets the value of {@link RosInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEvictionPolicy}
         * @param evictionPolicy the value to be set.
         * @return {@code this}
         */
        public Builder evictionPolicy(java.lang.String evictionPolicy) {
            this.evictionPolicy = evictionPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEvictionPolicy}
         * @param evictionPolicy the value to be set.
         * @return {@code this}
         */
        public Builder evictionPolicy(com.aliyun.ros.cdk.core.IResolvable evictionPolicy) {
            this.evictionPolicy = evictionPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceClass}
         * @param instanceClass the value to be set.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceClass}
         * @param instanceClass the value to be set.
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceMaintainTime}
         * @param instanceMaintainTime the value to be set.
         * @return {@code this}
         */
        public Builder instanceMaintainTime(com.aliyun.ros.cdk.core.IResolvable instanceMaintainTime) {
            this.instanceMaintainTime = instanceMaintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceMaintainTime}
         * @param instanceMaintainTime the value to be set.
         * @return {@code this}
         */
        public Builder instanceMaintainTime(com.aliyun.ros.cdk.redis.RosInstance.InstanceMaintainTimeProperty instanceMaintainTime) {
            this.instanceMaintainTime = instanceMaintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
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
         * Sets the value of {@link RosInstanceProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(java.lang.String productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(com.aliyun.ros.cdk.core.IResolvable productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSslEnabled}
         * @param sslEnabled the value to be set.
         * @return {@code this}
         */
        public Builder sslEnabled(java.lang.String sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSslEnabled}
         * @param sslEnabled the value to be set.
         * @return {@code this}
         */
        public Builder sslEnabled(com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty>)tags;
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
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
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
         * Sets the value of {@link RosInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
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
         * Sets the value of {@link RosInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object autoRenewDuration;
        private final java.lang.Object backupPolicy;
        private final java.lang.Object capacity;
        private final java.lang.Object chargeType;
        private final java.lang.Object connections;
        private final java.lang.Object deletionForce;
        private final java.lang.Object engineVersion;
        private final java.lang.Object evictionPolicy;
        private final java.lang.Object instanceClass;
        private final java.lang.Object instanceMaintainTime;
        private final java.lang.Object instanceName;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object productType;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object sslEnabled;
        private final java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vpcPasswordFree;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPolicy = software.amazon.jsii.Kernel.get(this, "backupPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connections = software.amazon.jsii.Kernel.get(this, "connections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evictionPolicy = software.amazon.jsii.Kernel.get(this, "evictionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceMaintainTime = software.amazon.jsii.Kernel.get(this, "instanceMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productType = software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslEnabled = software.amazon.jsii.Kernel.get(this, "sslEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.RosInstance.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcPasswordFree = software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoRenewDuration = builder.autoRenewDuration;
            this.backupPolicy = builder.backupPolicy;
            this.capacity = builder.capacity;
            this.chargeType = builder.chargeType;
            this.connections = builder.connections;
            this.deletionForce = builder.deletionForce;
            this.engineVersion = builder.engineVersion;
            this.evictionPolicy = builder.evictionPolicy;
            this.instanceClass = builder.instanceClass;
            this.instanceMaintainTime = builder.instanceMaintainTime;
            this.instanceName = builder.instanceName;
            this.password = builder.password;
            this.period = builder.period;
            this.productType = builder.productType;
            this.securityGroupId = builder.securityGroupId;
            this.sslEnabled = builder.sslEnabled;
            this.tags = (java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vpcPasswordFree = builder.vpcPasswordFree;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenewDuration() {
            return this.autoRenewDuration;
        }

        @Override
        public final java.lang.Object getBackupPolicy() {
            return this.backupPolicy;
        }

        @Override
        public final java.lang.Object getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getConnections() {
            return this.connections;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getEvictionPolicy() {
            return this.evictionPolicy;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getInstanceMaintainTime() {
            return this.instanceMaintainTime;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getProductType() {
            return this.productType;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSslEnabled() {
            return this.sslEnabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVpcPasswordFree() {
            return this.vpcPasswordFree;
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

            if (this.getAutoRenewDuration() != null) {
                data.set("autoRenewDuration", om.valueToTree(this.getAutoRenewDuration()));
            }
            if (this.getBackupPolicy() != null) {
                data.set("backupPolicy", om.valueToTree(this.getBackupPolicy()));
            }
            if (this.getCapacity() != null) {
                data.set("capacity", om.valueToTree(this.getCapacity()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getConnections() != null) {
                data.set("connections", om.valueToTree(this.getConnections()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getEvictionPolicy() != null) {
                data.set("evictionPolicy", om.valueToTree(this.getEvictionPolicy()));
            }
            if (this.getInstanceClass() != null) {
                data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            }
            if (this.getInstanceMaintainTime() != null) {
                data.set("instanceMaintainTime", om.valueToTree(this.getInstanceMaintainTime()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getProductType() != null) {
                data.set("productType", om.valueToTree(this.getProductType()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSslEnabled() != null) {
                data.set("sslEnabled", om.valueToTree(this.getSslEnabled()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstanceProps"));
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

            if (this.autoRenewDuration != null ? !this.autoRenewDuration.equals(that.autoRenewDuration) : that.autoRenewDuration != null) return false;
            if (this.backupPolicy != null ? !this.backupPolicy.equals(that.backupPolicy) : that.backupPolicy != null) return false;
            if (this.capacity != null ? !this.capacity.equals(that.capacity) : that.capacity != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.connections != null ? !this.connections.equals(that.connections) : that.connections != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.evictionPolicy != null ? !this.evictionPolicy.equals(that.evictionPolicy) : that.evictionPolicy != null) return false;
            if (this.instanceClass != null ? !this.instanceClass.equals(that.instanceClass) : that.instanceClass != null) return false;
            if (this.instanceMaintainTime != null ? !this.instanceMaintainTime.equals(that.instanceMaintainTime) : that.instanceMaintainTime != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.productType != null ? !this.productType.equals(that.productType) : that.productType != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.sslEnabled != null ? !this.sslEnabled.equals(that.sslEnabled) : that.sslEnabled != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vpcPasswordFree != null ? !this.vpcPasswordFree.equals(that.vpcPasswordFree) : that.vpcPasswordFree != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoRenewDuration != null ? this.autoRenewDuration.hashCode() : 0;
            result = 31 * result + (this.backupPolicy != null ? this.backupPolicy.hashCode() : 0);
            result = 31 * result + (this.capacity != null ? this.capacity.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.connections != null ? this.connections.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.evictionPolicy != null ? this.evictionPolicy.hashCode() : 0);
            result = 31 * result + (this.instanceClass != null ? this.instanceClass.hashCode() : 0);
            result = 31 * result + (this.instanceMaintainTime != null ? this.instanceMaintainTime.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.productType != null ? this.productType.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.sslEnabled != null ? this.sslEnabled.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vpcPasswordFree != null ? this.vpcPasswordFree.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

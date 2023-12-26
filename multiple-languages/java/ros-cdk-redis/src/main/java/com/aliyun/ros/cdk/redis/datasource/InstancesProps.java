package com.aliyun.ros.cdk.redis.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.753Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property architectureType: The architecture of the instance.
     * <p>
     * Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read/write splitting instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchitectureType() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the instance.
     * <p>
     * Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property editionType: The edition of the instance.
     * <p>
     * Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEditionType() {
        return null;
    }

    /**
     * Property engineVersion: The database engine version of the instance.
     * <p>
     * Valid values: 2.8, 4.0, and 5.0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property expired: Specifies whether the instance has expired.
     * <p>
     * Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpired() {
        return null;
    }

    /**
     * Property globalInstance: Specifies whether to return the child instances of distributed instances.
     * <p>
     * Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGlobalInstance() {
        return null;
    }

    /**
     * Property instanceClass: The instance type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceClass() {
        return null;
    }

    /**
     * Property instanceIds: The IDs of instances.
     * <p>
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     * Property instanceStatus: The state of the instance.
     * <p>
     * Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceStatus() {
        return null;
    }

    /**
     * Property instanceType: The category of the instance.
     * <p>
     * Valid values:
     * Tair
     * Redis
     * Memcache
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property networkType: The network type of the instance.
     * <p>
     * Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property privateIp: The private IP address of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIp() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property searchKey: The keyword used for fuzzy search.
     * <p>
     * The keyword can be based on an instance name or an instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchKey() {
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
     * Property zoneId: The zone ID of the instance.
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
        java.lang.Object architectureType;
        java.lang.Object chargeType;
        java.lang.Object editionType;
        java.lang.Object engineVersion;
        java.lang.Object expired;
        java.lang.Object globalInstance;
        java.lang.Object instanceClass;
        java.lang.Object instanceIds;
        java.lang.Object instanceStatus;
        java.lang.Object instanceType;
        java.lang.Object networkType;
        java.lang.Object privateIp;
        java.lang.Object resourceGroupId;
        java.lang.Object searchKey;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstancesProps#getArchitectureType}
         * @param architectureType Property architectureType: The architecture of the instance.
         *                         Valid values:
         *                         cluster: The instance is a cluster instance.
         *                         standard: The instance is a standard instance.
         *                         rwsplit: The instance is a read/write splitting instance.
         * @return {@code this}
         */
        public Builder architectureType(java.lang.String architectureType) {
            this.architectureType = architectureType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getArchitectureType}
         * @param architectureType Property architectureType: The architecture of the instance.
         *                         Valid values:
         *                         cluster: The instance is a cluster instance.
         *                         standard: The instance is a standard instance.
         *                         rwsplit: The instance is a read/write splitting instance.
         * @return {@code this}
         */
        public Builder architectureType(com.aliyun.ros.cdk.core.IResolvable architectureType) {
            this.architectureType = architectureType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.
         *                   Valid values:
         *                   PrePaid: subscription
         *                   PostPaid: pay-as-you-go
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
         *                   PrePaid: subscription
         *                   PostPaid: pay-as-you-go
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEditionType}
         * @param editionType Property editionType: The edition of the instance.
         *                    Valid values:
         *                    Community: Community Edition
         *                    Enterprise: Enhance Edition (Tair)
         * @return {@code this}
         */
        public Builder editionType(java.lang.String editionType) {
            this.editionType = editionType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEditionType}
         * @param editionType Property editionType: The edition of the instance.
         *                    Valid values:
         *                    Community: Community Edition
         *                    Enterprise: Enhance Edition (Tair)
         * @return {@code this}
         */
        public Builder editionType(com.aliyun.ros.cdk.core.IResolvable editionType) {
            this.editionType = editionType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The database engine version of the instance.
         *                      Valid values: 2.8, 4.0, and 5.0.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The database engine version of the instance.
         *                      Valid values: 2.8, 4.0, and 5.0.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instance has expired.
         *                Valid values:
         *                true: The instance has expired.
         *                false: The instance has not expired.
         * @return {@code this}
         */
        public Builder expired(java.lang.String expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instance has expired.
         *                Valid values:
         *                true: The instance has expired.
         *                false: The instance has not expired.
         * @return {@code this}
         */
        public Builder expired(com.aliyun.ros.cdk.core.IResolvable expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getGlobalInstance}
         * @param globalInstance Property globalInstance: Specifies whether to return the child instances of distributed instances.
         *                       Valid values:
         *                       true: Only child instances are returned.
         *                       false: Child instances are not returned.
         * @return {@code this}
         */
        public Builder globalInstance(java.lang.String globalInstance) {
            this.globalInstance = globalInstance;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getGlobalInstance}
         * @param globalInstance Property globalInstance: Specifies whether to return the child instances of distributed instances.
         *                       Valid values:
         *                       true: Only child instances are returned.
         *                       false: Child instances are not returned.
         * @return {@code this}
         */
        public Builder globalInstance(com.aliyun.ros.cdk.core.IResolvable globalInstance) {
            this.globalInstance = globalInstance;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The instance type.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The instance type.
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The IDs of instances.
         *                    If you specify multiple instance IDs, separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceIds(java.lang.String instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The IDs of instances.
         *                    If you specify multiple instance IDs, separate the instance IDs with commas (,).
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceStatus}
         * @param instanceStatus Property instanceStatus: The state of the instance.
         *                       Valid values:
         *                       Normal: The instance is normal.
         *                       Creating: The instance is being created.
         *                       Changing: The configurations of the instance are being changed.
         *                       Inactive: The instance is disabled.
         *                       Flushing: The instance is being released.
         *                       Released: The instance is released.
         *                       Transforming: The instance is being transformed.
         *                       Unavailable: The instance is suspended.
         *                       Error: The instance cannot be created.
         *                       Migrating: The instance is being migrated.
         *                       BackupRecovering: The instance is being restored from a backup.
         *                       MinorVersionUpgrading: The minor version of the instance is being updated.
         *                       NetworkModifying: The network type of the instance is being changed.
         *                       SSLModifying: The SSL certificate of the instance is being changed.
         *                       MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
         * @return {@code this}
         */
        public Builder instanceStatus(java.lang.String instanceStatus) {
            this.instanceStatus = instanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceStatus}
         * @param instanceStatus Property instanceStatus: The state of the instance.
         *                       Valid values:
         *                       Normal: The instance is normal.
         *                       Creating: The instance is being created.
         *                       Changing: The configurations of the instance are being changed.
         *                       Inactive: The instance is disabled.
         *                       Flushing: The instance is being released.
         *                       Released: The instance is released.
         *                       Transforming: The instance is being transformed.
         *                       Unavailable: The instance is suspended.
         *                       Error: The instance cannot be created.
         *                       Migrating: The instance is being migrated.
         *                       BackupRecovering: The instance is being restored from a backup.
         *                       MinorVersionUpgrading: The minor version of the instance is being updated.
         *                       NetworkModifying: The network type of the instance is being changed.
         *                       SSLModifying: The SSL certificate of the instance is being changed.
         *                       MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
         * @return {@code this}
         */
        public Builder instanceStatus(com.aliyun.ros.cdk.core.IResolvable instanceStatus) {
            this.instanceStatus = instanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceType}
         * @param instanceType Property instanceType: The category of the instance.
         *                     Valid values:
         *                     Tair
         *                     Redis
         *                     Memcache
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceType}
         * @param instanceType Property instanceType: The category of the instance.
         *                     Valid values:
         *                     Tair
         *                     Redis
         *                     Memcache
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getNetworkType}
         * @param networkType Property networkType: The network type of the instance.
         *                    Valid values:
         *                    CLASSIC: classic network
         *                    VPC: Virtual Private Cloud (VPC)
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
         *                    CLASSIC: classic network
         *                    VPC: Virtual Private Cloud (VPC)
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPrivateIp}
         * @param privateIp Property privateIp: The private IP address of the instance.
         * @return {@code this}
         */
        public Builder privateIp(java.lang.String privateIp) {
            this.privateIp = privateIp;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getPrivateIp}
         * @param privateIp Property privateIp: The private IP address of the instance.
         * @return {@code this}
         */
        public Builder privateIp(com.aliyun.ros.cdk.core.IResolvable privateIp) {
            this.privateIp = privateIp;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSearchKey}
         * @param searchKey Property searchKey: The keyword used for fuzzy search.
         *                  The keyword can be based on an instance name or an instance ID.
         * @return {@code this}
         */
        public Builder searchKey(java.lang.String searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSearchKey}
         * @param searchKey Property searchKey: The keyword used for fuzzy search.
         *                  The keyword can be based on an instance name or an instance ID.
         * @return {@code this}
         */
        public Builder searchKey(com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
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
        private final java.lang.Object architectureType;
        private final java.lang.Object chargeType;
        private final java.lang.Object editionType;
        private final java.lang.Object engineVersion;
        private final java.lang.Object expired;
        private final java.lang.Object globalInstance;
        private final java.lang.Object instanceClass;
        private final java.lang.Object instanceIds;
        private final java.lang.Object instanceStatus;
        private final java.lang.Object instanceType;
        private final java.lang.Object networkType;
        private final java.lang.Object privateIp;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object searchKey;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.architectureType = software.amazon.jsii.Kernel.get(this, "architectureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.editionType = software.amazon.jsii.Kernel.get(this, "editionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expired = software.amazon.jsii.Kernel.get(this, "expired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.globalInstance = software.amazon.jsii.Kernel.get(this, "globalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceStatus = software.amazon.jsii.Kernel.get(this, "instanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIp = software.amazon.jsii.Kernel.get(this, "privateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searchKey = software.amazon.jsii.Kernel.get(this, "searchKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.architectureType = builder.architectureType;
            this.chargeType = builder.chargeType;
            this.editionType = builder.editionType;
            this.engineVersion = builder.engineVersion;
            this.expired = builder.expired;
            this.globalInstance = builder.globalInstance;
            this.instanceClass = builder.instanceClass;
            this.instanceIds = builder.instanceIds;
            this.instanceStatus = builder.instanceStatus;
            this.instanceType = builder.instanceType;
            this.networkType = builder.networkType;
            this.privateIp = builder.privateIp;
            this.resourceGroupId = builder.resourceGroupId;
            this.searchKey = builder.searchKey;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getArchitectureType() {
            return this.architectureType;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getEditionType() {
            return this.editionType;
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
        public final java.lang.Object getGlobalInstance() {
            return this.globalInstance;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getInstanceStatus() {
            return this.instanceStatus;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPrivateIp() {
            return this.privateIp;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSearchKey() {
            return this.searchKey;
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

            if (this.getArchitectureType() != null) {
                data.set("architectureType", om.valueToTree(this.getArchitectureType()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getEditionType() != null) {
                data.set("editionType", om.valueToTree(this.getEditionType()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getExpired() != null) {
                data.set("expired", om.valueToTree(this.getExpired()));
            }
            if (this.getGlobalInstance() != null) {
                data.set("globalInstance", om.valueToTree(this.getGlobalInstance()));
            }
            if (this.getInstanceClass() != null) {
                data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getInstanceStatus() != null) {
                data.set("instanceStatus", om.valueToTree(this.getInstanceStatus()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPrivateIp() != null) {
                data.set("privateIp", om.valueToTree(this.getPrivateIp()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSearchKey() != null) {
                data.set("searchKey", om.valueToTree(this.getSearchKey()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.datasource.InstancesProps"));
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

            if (this.architectureType != null ? !this.architectureType.equals(that.architectureType) : that.architectureType != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.editionType != null ? !this.editionType.equals(that.editionType) : that.editionType != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.expired != null ? !this.expired.equals(that.expired) : that.expired != null) return false;
            if (this.globalInstance != null ? !this.globalInstance.equals(that.globalInstance) : that.globalInstance != null) return false;
            if (this.instanceClass != null ? !this.instanceClass.equals(that.instanceClass) : that.instanceClass != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.instanceStatus != null ? !this.instanceStatus.equals(that.instanceStatus) : that.instanceStatus != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.privateIp != null ? !this.privateIp.equals(that.privateIp) : that.privateIp != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.searchKey != null ? !this.searchKey.equals(that.searchKey) : that.searchKey != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.architectureType != null ? this.architectureType.hashCode() : 0;
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.editionType != null ? this.editionType.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.expired != null ? this.expired.hashCode() : 0);
            result = 31 * result + (this.globalInstance != null ? this.globalInstance.hashCode() : 0);
            result = 31 * result + (this.instanceClass != null ? this.instanceClass.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.instanceStatus != null ? this.instanceStatus.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.privateIp != null ? this.privateIp.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.searchKey != null ? this.searchKey.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

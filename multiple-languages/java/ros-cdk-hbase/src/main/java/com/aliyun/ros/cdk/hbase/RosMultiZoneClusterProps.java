package com.aliyun.ros.cdk.hbase;

/**
 * Properties for defining a <code>RosMultiZoneCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.RosMultiZoneClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosMultiZoneClusterProps.Jsii$Proxy.class)
public interface RosMultiZoneClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArbiterVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArbiterZoneId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArchVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreNodeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogNodeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMultiZoneCombination();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryZoneId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStandbyVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStandbyZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
     * @return a {@link Builder} of {@link RosMultiZoneClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMultiZoneClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMultiZoneClusterProps> {
        java.lang.Object arbiterVSwitchId;
        java.lang.Object arbiterZoneId;
        java.lang.Object archVersion;
        java.lang.Object coreDiskSize;
        java.lang.Object coreDiskType;
        java.lang.Object coreInstanceType;
        java.lang.Object coreNodeCount;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object logDiskSize;
        java.lang.Object logDiskType;
        java.lang.Object logInstanceType;
        java.lang.Object logNodeCount;
        java.lang.Object multiZoneCombination;
        java.lang.Object payType;
        java.lang.Object primaryVSwitchId;
        java.lang.Object primaryZoneId;
        java.lang.Object standbyVSwitchId;
        java.lang.Object standbyZoneId;
        java.lang.Object autoRenewPeriod;
        java.lang.Object clusterName;
        java.lang.Object masterInstanceType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(java.lang.String arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(com.aliyun.ros.cdk.core.IResolvable arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArbiterZoneId}
         * @param arbiterZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterZoneId(java.lang.String arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArbiterZoneId}
         * @param arbiterZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterZoneId(com.aliyun.ros.cdk.core.IResolvable arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArchVersion}
         * @param archVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder archVersion(java.lang.String archVersion) {
            this.archVersion = archVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getArchVersion}
         * @param archVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder archVersion(com.aliyun.ros.cdk.core.IResolvable archVersion) {
            this.archVersion = archVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreDiskSize}
         * @param coreDiskSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreDiskSize(java.lang.Number coreDiskSize) {
            this.coreDiskSize = coreDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreDiskSize}
         * @param coreDiskSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreDiskSize(com.aliyun.ros.cdk.core.IResolvable coreDiskSize) {
            this.coreDiskSize = coreDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreDiskType}
         * @param coreDiskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreDiskType(java.lang.String coreDiskType) {
            this.coreDiskType = coreDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreDiskType}
         * @param coreDiskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreDiskType(com.aliyun.ros.cdk.core.IResolvable coreDiskType) {
            this.coreDiskType = coreDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreInstanceType}
         * @param coreInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(java.lang.String coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreInstanceType}
         * @param coreInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreNodeCount}
         * @param coreNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreNodeCount(java.lang.Number coreNodeCount) {
            this.coreNodeCount = coreNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getCoreNodeCount}
         * @param coreNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder coreNodeCount(com.aliyun.ros.cdk.core.IResolvable coreNodeCount) {
            this.coreNodeCount = coreNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogDiskSize}
         * @param logDiskSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logDiskSize(java.lang.Number logDiskSize) {
            this.logDiskSize = logDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogDiskSize}
         * @param logDiskSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logDiskSize(com.aliyun.ros.cdk.core.IResolvable logDiskSize) {
            this.logDiskSize = logDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogDiskType}
         * @param logDiskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logDiskType(java.lang.String logDiskType) {
            this.logDiskType = logDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogDiskType}
         * @param logDiskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logDiskType(com.aliyun.ros.cdk.core.IResolvable logDiskType) {
            this.logDiskType = logDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogInstanceType}
         * @param logInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logInstanceType(java.lang.String logInstanceType) {
            this.logInstanceType = logInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogInstanceType}
         * @param logInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logInstanceType(com.aliyun.ros.cdk.core.IResolvable logInstanceType) {
            this.logInstanceType = logInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogNodeCount}
         * @param logNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logNodeCount(java.lang.Number logNodeCount) {
            this.logNodeCount = logNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getLogNodeCount}
         * @param logNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logNodeCount(com.aliyun.ros.cdk.core.IResolvable logNodeCount) {
            this.logNodeCount = logNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getMultiZoneCombination}
         * @param multiZoneCombination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder multiZoneCombination(java.lang.String multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getMultiZoneCombination}
         * @param multiZoneCombination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder multiZoneCombination(com.aliyun.ros.cdk.core.IResolvable multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(java.lang.String primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(com.aliyun.ros.cdk.core.IResolvable primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPrimaryZoneId}
         * @param primaryZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZoneId(java.lang.String primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPrimaryZoneId}
         * @param primaryZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZoneId(com.aliyun.ros.cdk.core.IResolvable primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(java.lang.String standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyZoneId(java.lang.String standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyZoneId(com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getClusterName}
         * @param clusterName the value to be set.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getClusterName}
         * @param clusterName the value to be set.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getMasterInstanceType}
         * @param masterInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder masterInstanceType(java.lang.String masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getMasterInstanceType}
         * @param masterInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder masterInstanceType(com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMultiZoneClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMultiZoneClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMultiZoneClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMultiZoneClusterProps {
        private final java.lang.Object arbiterVSwitchId;
        private final java.lang.Object arbiterZoneId;
        private final java.lang.Object archVersion;
        private final java.lang.Object coreDiskSize;
        private final java.lang.Object coreDiskType;
        private final java.lang.Object coreInstanceType;
        private final java.lang.Object coreNodeCount;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object logDiskSize;
        private final java.lang.Object logDiskType;
        private final java.lang.Object logInstanceType;
        private final java.lang.Object logNodeCount;
        private final java.lang.Object multiZoneCombination;
        private final java.lang.Object payType;
        private final java.lang.Object primaryVSwitchId;
        private final java.lang.Object primaryZoneId;
        private final java.lang.Object standbyVSwitchId;
        private final java.lang.Object standbyZoneId;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object clusterName;
        private final java.lang.Object masterInstanceType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.arbiterVSwitchId = software.amazon.jsii.Kernel.get(this, "arbiterVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.arbiterZoneId = software.amazon.jsii.Kernel.get(this, "arbiterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archVersion = software.amazon.jsii.Kernel.get(this, "archVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreDiskSize = software.amazon.jsii.Kernel.get(this, "coreDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreDiskType = software.amazon.jsii.Kernel.get(this, "coreDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreInstanceType = software.amazon.jsii.Kernel.get(this, "coreInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreNodeCount = software.amazon.jsii.Kernel.get(this, "coreNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logDiskSize = software.amazon.jsii.Kernel.get(this, "logDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logDiskType = software.amazon.jsii.Kernel.get(this, "logDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logInstanceType = software.amazon.jsii.Kernel.get(this, "logInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logNodeCount = software.amazon.jsii.Kernel.get(this, "logNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiZoneCombination = software.amazon.jsii.Kernel.get(this, "multiZoneCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryVSwitchId = software.amazon.jsii.Kernel.get(this, "primaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryZoneId = software.amazon.jsii.Kernel.get(this, "primaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyVSwitchId = software.amazon.jsii.Kernel.get(this, "standbyVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyZoneId = software.amazon.jsii.Kernel.get(this, "standbyZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceType = software.amazon.jsii.Kernel.get(this, "masterInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.arbiterVSwitchId = java.util.Objects.requireNonNull(builder.arbiterVSwitchId, "arbiterVSwitchId is required");
            this.arbiterZoneId = java.util.Objects.requireNonNull(builder.arbiterZoneId, "arbiterZoneId is required");
            this.archVersion = java.util.Objects.requireNonNull(builder.archVersion, "archVersion is required");
            this.coreDiskSize = java.util.Objects.requireNonNull(builder.coreDiskSize, "coreDiskSize is required");
            this.coreDiskType = java.util.Objects.requireNonNull(builder.coreDiskType, "coreDiskType is required");
            this.coreInstanceType = java.util.Objects.requireNonNull(builder.coreInstanceType, "coreInstanceType is required");
            this.coreNodeCount = java.util.Objects.requireNonNull(builder.coreNodeCount, "coreNodeCount is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.logDiskSize = java.util.Objects.requireNonNull(builder.logDiskSize, "logDiskSize is required");
            this.logDiskType = java.util.Objects.requireNonNull(builder.logDiskType, "logDiskType is required");
            this.logInstanceType = java.util.Objects.requireNonNull(builder.logInstanceType, "logInstanceType is required");
            this.logNodeCount = java.util.Objects.requireNonNull(builder.logNodeCount, "logNodeCount is required");
            this.multiZoneCombination = java.util.Objects.requireNonNull(builder.multiZoneCombination, "multiZoneCombination is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.primaryVSwitchId = java.util.Objects.requireNonNull(builder.primaryVSwitchId, "primaryVSwitchId is required");
            this.primaryZoneId = java.util.Objects.requireNonNull(builder.primaryZoneId, "primaryZoneId is required");
            this.standbyVSwitchId = java.util.Objects.requireNonNull(builder.standbyVSwitchId, "standbyVSwitchId is required");
            this.standbyZoneId = java.util.Objects.requireNonNull(builder.standbyZoneId, "standbyZoneId is required");
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.clusterName = builder.clusterName;
            this.masterInstanceType = builder.masterInstanceType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getArbiterVSwitchId() {
            return this.arbiterVSwitchId;
        }

        @Override
        public final java.lang.Object getArbiterZoneId() {
            return this.arbiterZoneId;
        }

        @Override
        public final java.lang.Object getArchVersion() {
            return this.archVersion;
        }

        @Override
        public final java.lang.Object getCoreDiskSize() {
            return this.coreDiskSize;
        }

        @Override
        public final java.lang.Object getCoreDiskType() {
            return this.coreDiskType;
        }

        @Override
        public final java.lang.Object getCoreInstanceType() {
            return this.coreInstanceType;
        }

        @Override
        public final java.lang.Object getCoreNodeCount() {
            return this.coreNodeCount;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getLogDiskSize() {
            return this.logDiskSize;
        }

        @Override
        public final java.lang.Object getLogDiskType() {
            return this.logDiskType;
        }

        @Override
        public final java.lang.Object getLogInstanceType() {
            return this.logInstanceType;
        }

        @Override
        public final java.lang.Object getLogNodeCount() {
            return this.logNodeCount;
        }

        @Override
        public final java.lang.Object getMultiZoneCombination() {
            return this.multiZoneCombination;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPrimaryVSwitchId() {
            return this.primaryVSwitchId;
        }

        @Override
        public final java.lang.Object getPrimaryZoneId() {
            return this.primaryZoneId;
        }

        @Override
        public final java.lang.Object getStandbyVSwitchId() {
            return this.standbyVSwitchId;
        }

        @Override
        public final java.lang.Object getStandbyZoneId() {
            return this.standbyZoneId;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getMasterInstanceType() {
            return this.masterInstanceType;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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

            data.set("arbiterVSwitchId", om.valueToTree(this.getArbiterVSwitchId()));
            data.set("arbiterZoneId", om.valueToTree(this.getArbiterZoneId()));
            data.set("archVersion", om.valueToTree(this.getArchVersion()));
            data.set("coreDiskSize", om.valueToTree(this.getCoreDiskSize()));
            data.set("coreDiskType", om.valueToTree(this.getCoreDiskType()));
            data.set("coreInstanceType", om.valueToTree(this.getCoreInstanceType()));
            data.set("coreNodeCount", om.valueToTree(this.getCoreNodeCount()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("logDiskSize", om.valueToTree(this.getLogDiskSize()));
            data.set("logDiskType", om.valueToTree(this.getLogDiskType()));
            data.set("logInstanceType", om.valueToTree(this.getLogInstanceType()));
            data.set("logNodeCount", om.valueToTree(this.getLogNodeCount()));
            data.set("multiZoneCombination", om.valueToTree(this.getMultiZoneCombination()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("primaryVSwitchId", om.valueToTree(this.getPrimaryVSwitchId()));
            data.set("primaryZoneId", om.valueToTree(this.getPrimaryZoneId()));
            data.set("standbyVSwitchId", om.valueToTree(this.getStandbyVSwitchId()));
            data.set("standbyZoneId", om.valueToTree(this.getStandbyZoneId()));
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getClusterName() != null) {
                data.set("clusterName", om.valueToTree(this.getClusterName()));
            }
            if (this.getMasterInstanceType() != null) {
                data.set("masterInstanceType", om.valueToTree(this.getMasterInstanceType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbase.RosMultiZoneClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMultiZoneClusterProps.Jsii$Proxy that = (RosMultiZoneClusterProps.Jsii$Proxy) o;

            if (!arbiterVSwitchId.equals(that.arbiterVSwitchId)) return false;
            if (!arbiterZoneId.equals(that.arbiterZoneId)) return false;
            if (!archVersion.equals(that.archVersion)) return false;
            if (!coreDiskSize.equals(that.coreDiskSize)) return false;
            if (!coreDiskType.equals(that.coreDiskType)) return false;
            if (!coreInstanceType.equals(that.coreInstanceType)) return false;
            if (!coreNodeCount.equals(that.coreNodeCount)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!logDiskSize.equals(that.logDiskSize)) return false;
            if (!logDiskType.equals(that.logDiskType)) return false;
            if (!logInstanceType.equals(that.logInstanceType)) return false;
            if (!logNodeCount.equals(that.logNodeCount)) return false;
            if (!multiZoneCombination.equals(that.multiZoneCombination)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!primaryVSwitchId.equals(that.primaryVSwitchId)) return false;
            if (!primaryZoneId.equals(that.primaryZoneId)) return false;
            if (!standbyVSwitchId.equals(that.standbyVSwitchId)) return false;
            if (!standbyZoneId.equals(that.standbyZoneId)) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.clusterName != null ? !this.clusterName.equals(that.clusterName) : that.clusterName != null) return false;
            if (this.masterInstanceType != null ? !this.masterInstanceType.equals(that.masterInstanceType) : that.masterInstanceType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.arbiterVSwitchId.hashCode();
            result = 31 * result + (this.arbiterZoneId.hashCode());
            result = 31 * result + (this.archVersion.hashCode());
            result = 31 * result + (this.coreDiskSize.hashCode());
            result = 31 * result + (this.coreDiskType.hashCode());
            result = 31 * result + (this.coreInstanceType.hashCode());
            result = 31 * result + (this.coreNodeCount.hashCode());
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.logDiskSize.hashCode());
            result = 31 * result + (this.logDiskType.hashCode());
            result = 31 * result + (this.logInstanceType.hashCode());
            result = 31 * result + (this.logNodeCount.hashCode());
            result = 31 * result + (this.multiZoneCombination.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.primaryVSwitchId.hashCode());
            result = 31 * result + (this.primaryZoneId.hashCode());
            result = 31 * result + (this.standbyVSwitchId.hashCode());
            result = 31 * result + (this.standbyZoneId.hashCode());
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.clusterName != null ? this.clusterName.hashCode() : 0);
            result = 31 * result + (this.masterInstanceType != null ? this.masterInstanceType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.697Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosKubernetesClusterProps.Jsii$Proxy.class)
public interface RosKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterInstanceTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterVSwitchIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkerInstanceTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkerVSwitchIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodePortRange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNumOfNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodVswitchIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntry() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSshFlags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKubernetesClusterProps> {
        private java.lang.Object masterInstanceTypes;
        private java.lang.Object masterVSwitchIds;
        private java.lang.Object name;
        private java.lang.Object vpcId;
        private java.lang.Object workerInstanceTypes;
        private java.lang.Object workerVSwitchIds;
        private java.lang.Object addons;
        private java.lang.Object cloudMonitorFlags;
        private java.lang.Object containerCidr;
        private java.lang.Object cpuPolicy;
        private java.lang.Object disableRollback;
        private java.lang.Object endpointPublicAccess;
        private java.lang.Object keyPair;
        private java.lang.Object kubernetesVersion;
        private java.lang.Object loginPassword;
        private java.lang.Object masterAutoRenew;
        private java.lang.Object masterAutoRenewPeriod;
        private java.lang.Object masterCount;
        private java.lang.Object masterDataDisk;
        private java.lang.Object masterDataDisks;
        private java.lang.Object masterInstanceChargeType;
        private java.lang.Object masterPeriod;
        private java.lang.Object masterPeriodUnit;
        private java.lang.Object masterSystemDiskCategory;
        private java.lang.Object masterSystemDiskSize;
        private java.lang.Object nodePortRange;
        private java.lang.Object numOfNodes;
        private java.lang.Object podVswitchIds;
        private java.lang.Object proxyMode;
        private java.lang.Object securityGroupId;
        private java.lang.Object serviceCidr;
        private java.lang.Object snatEntry;
        private java.lang.Object sshFlags;
        private java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags;
        private java.lang.Object taint;
        private java.lang.Object timeoutMins;
        private java.lang.Object workerAutoRenew;
        private java.lang.Object workerAutoRenewPeriod;
        private java.lang.Object workerDataDisk;
        private java.lang.Object workerDataDisks;
        private java.lang.Object workerInstanceChargeType;
        private java.lang.Object workerPeriod;
        private java.lang.Object workerPeriodUnit;
        private java.lang.Object workerSystemDiskCategory;
        private java.lang.Object workerSystemDiskSize;

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(java.util.List<? extends java.lang.Object> masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(com.aliyun.ros.cdk.core.IResolvable masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(java.util.List<? extends java.lang.Object> masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(com.aliyun.ros.cdk.core.IResolvable masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(java.util.List<? extends java.lang.Object> workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(com.aliyun.ros.cdk.core.IResolvable workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getCpuPolicy}
         * @param cpuPolicy the value to be set.
         * @return {@code this}
         */
        public Builder cpuPolicy(java.lang.String cpuPolicy) {
            this.cpuPolicy = cpuPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getCpuPolicy}
         * @param cpuPolicy the value to be set.
         * @return {@code this}
         */
        public Builder cpuPolicy(com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
            this.cpuPolicy = cpuPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenew(java.lang.Boolean masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenew(com.aliyun.ros.cdk.core.IResolvable masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterAutoRenewPeriod}
         * @param masterAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenewPeriod(java.lang.Number masterAutoRenewPeriod) {
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterAutoRenewPeriod}
         * @param masterAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable masterAutoRenewPeriod) {
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterCount}
         * @param masterCount the value to be set.
         * @return {@code this}
         */
        public Builder masterCount(java.lang.Number masterCount) {
            this.masterCount = masterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterCount}
         * @param masterCount the value to be set.
         * @return {@code this}
         */
        public Builder masterCount(com.aliyun.ros.cdk.core.IResolvable masterCount) {
            this.masterCount = masterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisk(java.lang.Boolean masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisk(com.aliyun.ros.cdk.core.IResolvable masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisks(com.aliyun.ros.cdk.core.IResolvable masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisks(java.util.List<? extends java.lang.Object> masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterInstanceChargeType}
         * @param masterInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder masterInstanceChargeType(java.lang.String masterInstanceChargeType) {
            this.masterInstanceChargeType = masterInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterInstanceChargeType}
         * @param masterInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder masterInstanceChargeType(com.aliyun.ros.cdk.core.IResolvable masterInstanceChargeType) {
            this.masterInstanceChargeType = masterInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterPeriod}
         * @param masterPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriod(java.lang.Number masterPeriod) {
            this.masterPeriod = masterPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterPeriod}
         * @param masterPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriod(com.aliyun.ros.cdk.core.IResolvable masterPeriod) {
            this.masterPeriod = masterPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterPeriodUnit}
         * @param masterPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriodUnit(java.lang.String masterPeriodUnit) {
            this.masterPeriodUnit = masterPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterPeriodUnit}
         * @param masterPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriodUnit(com.aliyun.ros.cdk.core.IResolvable masterPeriodUnit) {
            this.masterPeriodUnit = masterPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterSystemDiskCategory}
         * @param masterSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskCategory(java.lang.String masterSystemDiskCategory) {
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterSystemDiskCategory}
         * @param masterSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable masterSystemDiskCategory) {
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterSystemDiskSize}
         * @param masterSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskSize(java.lang.Number masterSystemDiskSize) {
            this.masterSystemDiskSize = masterSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getMasterSystemDiskSize}
         * @param masterSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable masterSystemDiskSize) {
            this.masterSystemDiskSize = masterSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getNodePortRange}
         * @param nodePortRange the value to be set.
         * @return {@code this}
         */
        public Builder nodePortRange(java.lang.String nodePortRange) {
            this.nodePortRange = nodePortRange;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getNodePortRange}
         * @param nodePortRange the value to be set.
         * @return {@code this}
         */
        public Builder nodePortRange(com.aliyun.ros.cdk.core.IResolvable nodePortRange) {
            this.nodePortRange = nodePortRange;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes the value to be set.
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes the value to be set.
         * @return {@code this}
         */
        public Builder numOfNodes(com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds the value to be set.
         * @return {@code this}
         */
        public Builder podVswitchIds(com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds the value to be set.
         * @return {@code this}
         */
        public Builder podVswitchIds(java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSshFlags}
         * @param sshFlags the value to be set.
         * @return {@code this}
         */
        public Builder sshFlags(java.lang.Boolean sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getSshFlags}
         * @param sshFlags the value to be set.
         * @return {@code this}
         */
        public Builder sshFlags(com.aliyun.ros.cdk.core.IResolvable sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(com.aliyun.ros.cdk.core.IResolvable taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenew(java.lang.Boolean workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenew(com.aliyun.ros.cdk.core.IResolvable workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerAutoRenewPeriod}
         * @param workerAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenewPeriod(java.lang.Number workerAutoRenewPeriod) {
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerAutoRenewPeriod}
         * @param workerAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable workerAutoRenewPeriod) {
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(java.lang.Boolean workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisks(com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisks(java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerInstanceChargeType}
         * @param workerInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder workerInstanceChargeType(java.lang.String workerInstanceChargeType) {
            this.workerInstanceChargeType = workerInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerInstanceChargeType}
         * @param workerInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder workerInstanceChargeType(com.aliyun.ros.cdk.core.IResolvable workerInstanceChargeType) {
            this.workerInstanceChargeType = workerInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerPeriod}
         * @param workerPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriod(java.lang.Number workerPeriod) {
            this.workerPeriod = workerPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerPeriod}
         * @param workerPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriod(com.aliyun.ros.cdk.core.IResolvable workerPeriod) {
            this.workerPeriod = workerPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerPeriodUnit}
         * @param workerPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriodUnit(java.lang.String workerPeriodUnit) {
            this.workerPeriodUnit = workerPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerPeriodUnit}
         * @param workerPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriodUnit(com.aliyun.ros.cdk.core.IResolvable workerPeriodUnit) {
            this.workerPeriodUnit = workerPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKubernetesClusterProps build() {
            return new Jsii$Proxy(masterInstanceTypes, masterVSwitchIds, name, vpcId, workerInstanceTypes, workerVSwitchIds, addons, cloudMonitorFlags, containerCidr, cpuPolicy, disableRollback, endpointPublicAccess, keyPair, kubernetesVersion, loginPassword, masterAutoRenew, masterAutoRenewPeriod, masterCount, masterDataDisk, masterDataDisks, masterInstanceChargeType, masterPeriod, masterPeriodUnit, masterSystemDiskCategory, masterSystemDiskSize, nodePortRange, numOfNodes, podVswitchIds, proxyMode, securityGroupId, serviceCidr, snatEntry, sshFlags, tags, taint, timeoutMins, workerAutoRenew, workerAutoRenewPeriod, workerDataDisk, workerDataDisks, workerInstanceChargeType, workerPeriod, workerPeriodUnit, workerSystemDiskCategory, workerSystemDiskSize);
        }
    }

    /**
     * An implementation for {@link RosKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKubernetesClusterProps {
        private final java.lang.Object masterInstanceTypes;
        private final java.lang.Object masterVSwitchIds;
        private final java.lang.Object name;
        private final java.lang.Object vpcId;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object workerVSwitchIds;
        private final java.lang.Object addons;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object containerCidr;
        private final java.lang.Object cpuPolicy;
        private final java.lang.Object disableRollback;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object keyPair;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object loginPassword;
        private final java.lang.Object masterAutoRenew;
        private final java.lang.Object masterAutoRenewPeriod;
        private final java.lang.Object masterCount;
        private final java.lang.Object masterDataDisk;
        private final java.lang.Object masterDataDisks;
        private final java.lang.Object masterInstanceChargeType;
        private final java.lang.Object masterPeriod;
        private final java.lang.Object masterPeriodUnit;
        private final java.lang.Object masterSystemDiskCategory;
        private final java.lang.Object masterSystemDiskSize;
        private final java.lang.Object nodePortRange;
        private final java.lang.Object numOfNodes;
        private final java.lang.Object podVswitchIds;
        private final java.lang.Object proxyMode;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.lang.Object sshFlags;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object taint;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object workerAutoRenew;
        private final java.lang.Object workerAutoRenewPeriod;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDisks;
        private final java.lang.Object workerInstanceChargeType;
        private final java.lang.Object workerPeriod;
        private final java.lang.Object workerPeriodUnit;
        private final java.lang.Object workerSystemDiskCategory;
        private final java.lang.Object workerSystemDiskSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.masterInstanceTypes = software.amazon.jsii.Kernel.get(this, "masterInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterVSwitchIds = software.amazon.jsii.Kernel.get(this, "masterVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerVSwitchIds = software.amazon.jsii.Kernel.get(this, "workerVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuPolicy = software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterAutoRenew = software.amazon.jsii.Kernel.get(this, "masterAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "masterAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterCount = software.amazon.jsii.Kernel.get(this, "masterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterDataDisk = software.amazon.jsii.Kernel.get(this, "masterDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterDataDisks = software.amazon.jsii.Kernel.get(this, "masterDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceChargeType = software.amazon.jsii.Kernel.get(this, "masterInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPeriod = software.amazon.jsii.Kernel.get(this, "masterPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPeriodUnit = software.amazon.jsii.Kernel.get(this, "masterPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "masterSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSystemDiskSize = software.amazon.jsii.Kernel.get(this, "masterSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodePortRange = software.amazon.jsii.Kernel.get(this, "nodePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podVswitchIds = software.amazon.jsii.Kernel.get(this, "podVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sshFlags = software.amazon.jsii.Kernel.get(this, "sshFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty.class)));
            this.taint = software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerAutoRenew = software.amazon.jsii.Kernel.get(this, "workerAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "workerAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisks = software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceChargeType = software.amazon.jsii.Kernel.get(this, "workerInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerPeriod = software.amazon.jsii.Kernel.get(this, "workerPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerPeriodUnit = software.amazon.jsii.Kernel.get(this, "workerPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskSize = software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object masterInstanceTypes, final java.lang.Object masterVSwitchIds, final java.lang.Object name, final java.lang.Object vpcId, final java.lang.Object workerInstanceTypes, final java.lang.Object workerVSwitchIds, final java.lang.Object addons, final java.lang.Object cloudMonitorFlags, final java.lang.Object containerCidr, final java.lang.Object cpuPolicy, final java.lang.Object disableRollback, final java.lang.Object endpointPublicAccess, final java.lang.Object keyPair, final java.lang.Object kubernetesVersion, final java.lang.Object loginPassword, final java.lang.Object masterAutoRenew, final java.lang.Object masterAutoRenewPeriod, final java.lang.Object masterCount, final java.lang.Object masterDataDisk, final java.lang.Object masterDataDisks, final java.lang.Object masterInstanceChargeType, final java.lang.Object masterPeriod, final java.lang.Object masterPeriodUnit, final java.lang.Object masterSystemDiskCategory, final java.lang.Object masterSystemDiskSize, final java.lang.Object nodePortRange, final java.lang.Object numOfNodes, final java.lang.Object podVswitchIds, final java.lang.Object proxyMode, final java.lang.Object securityGroupId, final java.lang.Object serviceCidr, final java.lang.Object snatEntry, final java.lang.Object sshFlags, final java.util.List<? extends com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags, final java.lang.Object taint, final java.lang.Object timeoutMins, final java.lang.Object workerAutoRenew, final java.lang.Object workerAutoRenewPeriod, final java.lang.Object workerDataDisk, final java.lang.Object workerDataDisks, final java.lang.Object workerInstanceChargeType, final java.lang.Object workerPeriod, final java.lang.Object workerPeriodUnit, final java.lang.Object workerSystemDiskCategory, final java.lang.Object workerSystemDiskSize) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.masterInstanceTypes = java.util.Objects.requireNonNull(masterInstanceTypes, "masterInstanceTypes is required");
            this.masterVSwitchIds = java.util.Objects.requireNonNull(masterVSwitchIds, "masterVSwitchIds is required");
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
            this.workerInstanceTypes = java.util.Objects.requireNonNull(workerInstanceTypes, "workerInstanceTypes is required");
            this.workerVSwitchIds = java.util.Objects.requireNonNull(workerVSwitchIds, "workerVSwitchIds is required");
            this.addons = addons;
            this.cloudMonitorFlags = cloudMonitorFlags;
            this.containerCidr = containerCidr;
            this.cpuPolicy = cpuPolicy;
            this.disableRollback = disableRollback;
            this.endpointPublicAccess = endpointPublicAccess;
            this.keyPair = keyPair;
            this.kubernetesVersion = kubernetesVersion;
            this.loginPassword = loginPassword;
            this.masterAutoRenew = masterAutoRenew;
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            this.masterCount = masterCount;
            this.masterDataDisk = masterDataDisk;
            this.masterDataDisks = masterDataDisks;
            this.masterInstanceChargeType = masterInstanceChargeType;
            this.masterPeriod = masterPeriod;
            this.masterPeriodUnit = masterPeriodUnit;
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            this.masterSystemDiskSize = masterSystemDiskSize;
            this.nodePortRange = nodePortRange;
            this.numOfNodes = numOfNodes;
            this.podVswitchIds = podVswitchIds;
            this.proxyMode = proxyMode;
            this.securityGroupId = securityGroupId;
            this.serviceCidr = serviceCidr;
            this.snatEntry = snatEntry;
            this.sshFlags = sshFlags;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty>)tags;
            this.taint = taint;
            this.timeoutMins = timeoutMins;
            this.workerAutoRenew = workerAutoRenew;
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            this.workerDataDisk = workerDataDisk;
            this.workerDataDisks = workerDataDisks;
            this.workerInstanceChargeType = workerInstanceChargeType;
            this.workerPeriod = workerPeriod;
            this.workerPeriodUnit = workerPeriodUnit;
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            this.workerSystemDiskSize = workerSystemDiskSize;
        }

        @Override
        public final java.lang.Object getMasterInstanceTypes() {
            return this.masterInstanceTypes;
        }

        @Override
        public final java.lang.Object getMasterVSwitchIds() {
            return this.masterVSwitchIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getWorkerInstanceTypes() {
            return this.workerInstanceTypes;
        }

        @Override
        public final java.lang.Object getWorkerVSwitchIds() {
            return this.workerVSwitchIds;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getCloudMonitorFlags() {
            return this.cloudMonitorFlags;
        }

        @Override
        public final java.lang.Object getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.Object getCpuPolicy() {
            return this.cpuPolicy;
        }

        @Override
        public final java.lang.Object getDisableRollback() {
            return this.disableRollback;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getKeyPair() {
            return this.keyPair;
        }

        @Override
        public final java.lang.Object getKubernetesVersion() {
            return this.kubernetesVersion;
        }

        @Override
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getMasterAutoRenew() {
            return this.masterAutoRenew;
        }

        @Override
        public final java.lang.Object getMasterAutoRenewPeriod() {
            return this.masterAutoRenewPeriod;
        }

        @Override
        public final java.lang.Object getMasterCount() {
            return this.masterCount;
        }

        @Override
        public final java.lang.Object getMasterDataDisk() {
            return this.masterDataDisk;
        }

        @Override
        public final java.lang.Object getMasterDataDisks() {
            return this.masterDataDisks;
        }

        @Override
        public final java.lang.Object getMasterInstanceChargeType() {
            return this.masterInstanceChargeType;
        }

        @Override
        public final java.lang.Object getMasterPeriod() {
            return this.masterPeriod;
        }

        @Override
        public final java.lang.Object getMasterPeriodUnit() {
            return this.masterPeriodUnit;
        }

        @Override
        public final java.lang.Object getMasterSystemDiskCategory() {
            return this.masterSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getMasterSystemDiskSize() {
            return this.masterSystemDiskSize;
        }

        @Override
        public final java.lang.Object getNodePortRange() {
            return this.nodePortRange;
        }

        @Override
        public final java.lang.Object getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.Object getPodVswitchIds() {
            return this.podVswitchIds;
        }

        @Override
        public final java.lang.Object getProxyMode() {
            return this.proxyMode;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServiceCidr() {
            return this.serviceCidr;
        }

        @Override
        public final java.lang.Object getSnatEntry() {
            return this.snatEntry;
        }

        @Override
        public final java.lang.Object getSshFlags() {
            return this.sshFlags;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTaint() {
            return this.taint;
        }

        @Override
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        public final java.lang.Object getWorkerAutoRenew() {
            return this.workerAutoRenew;
        }

        @Override
        public final java.lang.Object getWorkerAutoRenewPeriod() {
            return this.workerAutoRenewPeriod;
        }

        @Override
        public final java.lang.Object getWorkerDataDisk() {
            return this.workerDataDisk;
        }

        @Override
        public final java.lang.Object getWorkerDataDisks() {
            return this.workerDataDisks;
        }

        @Override
        public final java.lang.Object getWorkerInstanceChargeType() {
            return this.workerInstanceChargeType;
        }

        @Override
        public final java.lang.Object getWorkerPeriod() {
            return this.workerPeriod;
        }

        @Override
        public final java.lang.Object getWorkerPeriodUnit() {
            return this.workerPeriodUnit;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskCategory() {
            return this.workerSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskSize() {
            return this.workerSystemDiskSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("masterInstanceTypes", om.valueToTree(this.getMasterInstanceTypes()));
            data.set("masterVSwitchIds", om.valueToTree(this.getMasterVSwitchIds()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("workerInstanceTypes", om.valueToTree(this.getWorkerInstanceTypes()));
            data.set("workerVSwitchIds", om.valueToTree(this.getWorkerVSwitchIds()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getCloudMonitorFlags() != null) {
                data.set("cloudMonitorFlags", om.valueToTree(this.getCloudMonitorFlags()));
            }
            if (this.getContainerCidr() != null) {
                data.set("containerCidr", om.valueToTree(this.getContainerCidr()));
            }
            if (this.getCpuPolicy() != null) {
                data.set("cpuPolicy", om.valueToTree(this.getCpuPolicy()));
            }
            if (this.getDisableRollback() != null) {
                data.set("disableRollback", om.valueToTree(this.getDisableRollback()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getMasterAutoRenew() != null) {
                data.set("masterAutoRenew", om.valueToTree(this.getMasterAutoRenew()));
            }
            if (this.getMasterAutoRenewPeriod() != null) {
                data.set("masterAutoRenewPeriod", om.valueToTree(this.getMasterAutoRenewPeriod()));
            }
            if (this.getMasterCount() != null) {
                data.set("masterCount", om.valueToTree(this.getMasterCount()));
            }
            if (this.getMasterDataDisk() != null) {
                data.set("masterDataDisk", om.valueToTree(this.getMasterDataDisk()));
            }
            if (this.getMasterDataDisks() != null) {
                data.set("masterDataDisks", om.valueToTree(this.getMasterDataDisks()));
            }
            if (this.getMasterInstanceChargeType() != null) {
                data.set("masterInstanceChargeType", om.valueToTree(this.getMasterInstanceChargeType()));
            }
            if (this.getMasterPeriod() != null) {
                data.set("masterPeriod", om.valueToTree(this.getMasterPeriod()));
            }
            if (this.getMasterPeriodUnit() != null) {
                data.set("masterPeriodUnit", om.valueToTree(this.getMasterPeriodUnit()));
            }
            if (this.getMasterSystemDiskCategory() != null) {
                data.set("masterSystemDiskCategory", om.valueToTree(this.getMasterSystemDiskCategory()));
            }
            if (this.getMasterSystemDiskSize() != null) {
                data.set("masterSystemDiskSize", om.valueToTree(this.getMasterSystemDiskSize()));
            }
            if (this.getNodePortRange() != null) {
                data.set("nodePortRange", om.valueToTree(this.getNodePortRange()));
            }
            if (this.getNumOfNodes() != null) {
                data.set("numOfNodes", om.valueToTree(this.getNumOfNodes()));
            }
            if (this.getPodVswitchIds() != null) {
                data.set("podVswitchIds", om.valueToTree(this.getPodVswitchIds()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getSshFlags() != null) {
                data.set("sshFlags", om.valueToTree(this.getSshFlags()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTaint() != null) {
                data.set("taint", om.valueToTree(this.getTaint()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }
            if (this.getWorkerAutoRenew() != null) {
                data.set("workerAutoRenew", om.valueToTree(this.getWorkerAutoRenew()));
            }
            if (this.getWorkerAutoRenewPeriod() != null) {
                data.set("workerAutoRenewPeriod", om.valueToTree(this.getWorkerAutoRenewPeriod()));
            }
            if (this.getWorkerDataDisk() != null) {
                data.set("workerDataDisk", om.valueToTree(this.getWorkerDataDisk()));
            }
            if (this.getWorkerDataDisks() != null) {
                data.set("workerDataDisks", om.valueToTree(this.getWorkerDataDisks()));
            }
            if (this.getWorkerInstanceChargeType() != null) {
                data.set("workerInstanceChargeType", om.valueToTree(this.getWorkerInstanceChargeType()));
            }
            if (this.getWorkerPeriod() != null) {
                data.set("workerPeriod", om.valueToTree(this.getWorkerPeriod()));
            }
            if (this.getWorkerPeriodUnit() != null) {
                data.set("workerPeriodUnit", om.valueToTree(this.getWorkerPeriodUnit()));
            }
            if (this.getWorkerSystemDiskCategory() != null) {
                data.set("workerSystemDiskCategory", om.valueToTree(this.getWorkerSystemDiskCategory()));
            }
            if (this.getWorkerSystemDiskSize() != null) {
                data.set("workerSystemDiskSize", om.valueToTree(this.getWorkerSystemDiskSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKubernetesClusterProps.Jsii$Proxy that = (RosKubernetesClusterProps.Jsii$Proxy) o;

            if (!masterInstanceTypes.equals(that.masterInstanceTypes)) return false;
            if (!masterVSwitchIds.equals(that.masterVSwitchIds)) return false;
            if (!name.equals(that.name)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!workerInstanceTypes.equals(that.workerInstanceTypes)) return false;
            if (!workerVSwitchIds.equals(that.workerVSwitchIds)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.cpuPolicy != null ? !this.cpuPolicy.equals(that.cpuPolicy) : that.cpuPolicy != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.masterAutoRenew != null ? !this.masterAutoRenew.equals(that.masterAutoRenew) : that.masterAutoRenew != null) return false;
            if (this.masterAutoRenewPeriod != null ? !this.masterAutoRenewPeriod.equals(that.masterAutoRenewPeriod) : that.masterAutoRenewPeriod != null) return false;
            if (this.masterCount != null ? !this.masterCount.equals(that.masterCount) : that.masterCount != null) return false;
            if (this.masterDataDisk != null ? !this.masterDataDisk.equals(that.masterDataDisk) : that.masterDataDisk != null) return false;
            if (this.masterDataDisks != null ? !this.masterDataDisks.equals(that.masterDataDisks) : that.masterDataDisks != null) return false;
            if (this.masterInstanceChargeType != null ? !this.masterInstanceChargeType.equals(that.masterInstanceChargeType) : that.masterInstanceChargeType != null) return false;
            if (this.masterPeriod != null ? !this.masterPeriod.equals(that.masterPeriod) : that.masterPeriod != null) return false;
            if (this.masterPeriodUnit != null ? !this.masterPeriodUnit.equals(that.masterPeriodUnit) : that.masterPeriodUnit != null) return false;
            if (this.masterSystemDiskCategory != null ? !this.masterSystemDiskCategory.equals(that.masterSystemDiskCategory) : that.masterSystemDiskCategory != null) return false;
            if (this.masterSystemDiskSize != null ? !this.masterSystemDiskSize.equals(that.masterSystemDiskSize) : that.masterSystemDiskSize != null) return false;
            if (this.nodePortRange != null ? !this.nodePortRange.equals(that.nodePortRange) : that.nodePortRange != null) return false;
            if (this.numOfNodes != null ? !this.numOfNodes.equals(that.numOfNodes) : that.numOfNodes != null) return false;
            if (this.podVswitchIds != null ? !this.podVswitchIds.equals(that.podVswitchIds) : that.podVswitchIds != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.sshFlags != null ? !this.sshFlags.equals(that.sshFlags) : that.sshFlags != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.taint != null ? !this.taint.equals(that.taint) : that.taint != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.workerAutoRenew != null ? !this.workerAutoRenew.equals(that.workerAutoRenew) : that.workerAutoRenew != null) return false;
            if (this.workerAutoRenewPeriod != null ? !this.workerAutoRenewPeriod.equals(that.workerAutoRenewPeriod) : that.workerAutoRenewPeriod != null) return false;
            if (this.workerDataDisk != null ? !this.workerDataDisk.equals(that.workerDataDisk) : that.workerDataDisk != null) return false;
            if (this.workerDataDisks != null ? !this.workerDataDisks.equals(that.workerDataDisks) : that.workerDataDisks != null) return false;
            if (this.workerInstanceChargeType != null ? !this.workerInstanceChargeType.equals(that.workerInstanceChargeType) : that.workerInstanceChargeType != null) return false;
            if (this.workerPeriod != null ? !this.workerPeriod.equals(that.workerPeriod) : that.workerPeriod != null) return false;
            if (this.workerPeriodUnit != null ? !this.workerPeriodUnit.equals(that.workerPeriodUnit) : that.workerPeriodUnit != null) return false;
            if (this.workerSystemDiskCategory != null ? !this.workerSystemDiskCategory.equals(that.workerSystemDiskCategory) : that.workerSystemDiskCategory != null) return false;
            return this.workerSystemDiskSize != null ? this.workerSystemDiskSize.equals(that.workerSystemDiskSize) : that.workerSystemDiskSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.masterInstanceTypes.hashCode();
            result = 31 * result + (this.masterVSwitchIds.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.workerInstanceTypes.hashCode());
            result = 31 * result + (this.workerVSwitchIds.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.cpuPolicy != null ? this.cpuPolicy.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.masterAutoRenew != null ? this.masterAutoRenew.hashCode() : 0);
            result = 31 * result + (this.masterAutoRenewPeriod != null ? this.masterAutoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.masterCount != null ? this.masterCount.hashCode() : 0);
            result = 31 * result + (this.masterDataDisk != null ? this.masterDataDisk.hashCode() : 0);
            result = 31 * result + (this.masterDataDisks != null ? this.masterDataDisks.hashCode() : 0);
            result = 31 * result + (this.masterInstanceChargeType != null ? this.masterInstanceChargeType.hashCode() : 0);
            result = 31 * result + (this.masterPeriod != null ? this.masterPeriod.hashCode() : 0);
            result = 31 * result + (this.masterPeriodUnit != null ? this.masterPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.masterSystemDiskCategory != null ? this.masterSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.masterSystemDiskSize != null ? this.masterSystemDiskSize.hashCode() : 0);
            result = 31 * result + (this.nodePortRange != null ? this.nodePortRange.hashCode() : 0);
            result = 31 * result + (this.numOfNodes != null ? this.numOfNodes.hashCode() : 0);
            result = 31 * result + (this.podVswitchIds != null ? this.podVswitchIds.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.sshFlags != null ? this.sshFlags.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.taint != null ? this.taint.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.workerAutoRenew != null ? this.workerAutoRenew.hashCode() : 0);
            result = 31 * result + (this.workerAutoRenewPeriod != null ? this.workerAutoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.workerDataDisk != null ? this.workerDataDisk.hashCode() : 0);
            result = 31 * result + (this.workerDataDisks != null ? this.workerDataDisks.hashCode() : 0);
            result = 31 * result + (this.workerInstanceChargeType != null ? this.workerInstanceChargeType.hashCode() : 0);
            result = 31 * result + (this.workerPeriod != null ? this.workerPeriod.hashCode() : 0);
            result = 31 * result + (this.workerPeriodUnit != null ? this.workerPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskCategory != null ? this.workerSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskSize != null ? this.workerSystemDiskSize.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.KubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(KubernetesClusterProps.Jsii$Proxy.class)
public interface KubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterInstanceTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterVSwitchIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

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
    default @org.jetbrains.annotations.Nullable java.lang.String getContainerCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCpuPolicy() {
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
    default @org.jetbrains.annotations.Nullable java.lang.String getKeyPair() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKubernetesVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLoginPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMasterAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMasterCount() {
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
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMasterPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMasterSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNodePortRange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getNumOfNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProxyMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getServiceCidr() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTimeoutMins() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getWorkerAutoRenewPeriod() {
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
    default @org.jetbrains.annotations.Nullable java.lang.String getWorkerInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getWorkerPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWorkerPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWorkerSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getWorkerSystemDiskSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link KubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KubernetesClusterProps> {
        private java.lang.Object masterInstanceTypes;
        private java.lang.Object masterVSwitchIds;
        private java.lang.String name;
        private java.lang.String vpcId;
        private java.lang.Object workerInstanceTypes;
        private java.lang.Object workerVSwitchIds;
        private java.lang.Object addons;
        private java.lang.Object cloudMonitorFlags;
        private java.lang.String containerCidr;
        private java.lang.String cpuPolicy;
        private java.lang.Object disableRollback;
        private java.lang.Object endpointPublicAccess;
        private java.lang.String keyPair;
        private java.lang.String kubernetesVersion;
        private java.lang.String loginPassword;
        private java.lang.Object masterAutoRenew;
        private java.lang.Number masterAutoRenewPeriod;
        private java.lang.Number masterCount;
        private java.lang.Object masterDataDisk;
        private java.lang.Object masterDataDisks;
        private java.lang.String masterInstanceChargeType;
        private java.lang.Number masterPeriod;
        private java.lang.String masterPeriodUnit;
        private java.lang.String masterSystemDiskCategory;
        private java.lang.Number masterSystemDiskSize;
        private java.lang.String nodePortRange;
        private java.lang.Number numOfNodes;
        private java.lang.String proxyMode;
        private java.lang.String securityGroupId;
        private java.lang.String serviceCidr;
        private java.lang.Object snatEntry;
        private java.lang.Object sshFlags;
        private java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private java.lang.Object taint;
        private java.lang.Number timeoutMins;
        private java.lang.Object workerAutoRenew;
        private java.lang.Number workerAutoRenewPeriod;
        private java.lang.Object workerDataDisk;
        private java.lang.Object workerDataDisks;
        private java.lang.String workerInstanceChargeType;
        private java.lang.Number workerPeriod;
        private java.lang.String workerPeriodUnit;
        private java.lang.String workerSystemDiskCategory;
        private java.lang.Number workerSystemDiskSize;

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(java.util.List<? extends java.lang.Object> masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceTypes}
         * @param masterInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterInstanceTypes(com.aliyun.ros.cdk.core.IResolvable masterInstanceTypes) {
            this.masterInstanceTypes = masterInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(java.util.List<? extends java.lang.Object> masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterVSwitchIds}
         * @param masterVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterVSwitchIds(com.aliyun.ros.cdk.core.IResolvable masterVSwitchIds) {
            this.masterVSwitchIds = masterVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(java.util.List<? extends java.lang.Object> workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerVSwitchIds}
         * @param workerVSwitchIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workerVSwitchIds(com.aliyun.ros.cdk.core.IResolvable workerVSwitchIds) {
            this.workerVSwitchIds = workerVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getCpuPolicy}
         * @param cpuPolicy the value to be set.
         * @return {@code this}
         */
        public Builder cpuPolicy(java.lang.String cpuPolicy) {
            this.cpuPolicy = cpuPolicy;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenew(java.lang.Boolean masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenew}
         * @param masterAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenew(com.aliyun.ros.cdk.core.IResolvable masterAutoRenew) {
            this.masterAutoRenew = masterAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterAutoRenewPeriod}
         * @param masterAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterAutoRenewPeriod(java.lang.Number masterAutoRenewPeriod) {
            this.masterAutoRenewPeriod = masterAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterCount}
         * @param masterCount the value to be set.
         * @return {@code this}
         */
        public Builder masterCount(java.lang.Number masterCount) {
            this.masterCount = masterCount;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisk(java.lang.Boolean masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisk}
         * @param masterDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisk(com.aliyun.ros.cdk.core.IResolvable masterDataDisk) {
            this.masterDataDisk = masterDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisks(com.aliyun.ros.cdk.core.IResolvable masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterDataDisks}
         * @param masterDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder masterDataDisks(java.util.List<? extends java.lang.Object> masterDataDisks) {
            this.masterDataDisks = masterDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterInstanceChargeType}
         * @param masterInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder masterInstanceChargeType(java.lang.String masterInstanceChargeType) {
            this.masterInstanceChargeType = masterInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriod}
         * @param masterPeriod the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriod(java.lang.Number masterPeriod) {
            this.masterPeriod = masterPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterPeriodUnit}
         * @param masterPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder masterPeriodUnit(java.lang.String masterPeriodUnit) {
            this.masterPeriodUnit = masterPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskCategory}
         * @param masterSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskCategory(java.lang.String masterSystemDiskCategory) {
            this.masterSystemDiskCategory = masterSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getMasterSystemDiskSize}
         * @param masterSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder masterSystemDiskSize(java.lang.Number masterSystemDiskSize) {
            this.masterSystemDiskSize = masterSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNodePortRange}
         * @param nodePortRange the value to be set.
         * @return {@code this}
         */
        public Builder nodePortRange(java.lang.String nodePortRange) {
            this.nodePortRange = nodePortRange;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes the value to be set.
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSshFlags}
         * @param sshFlags the value to be set.
         * @return {@code this}
         */
        public Builder sshFlags(java.lang.Boolean sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getSshFlags}
         * @param sshFlags the value to be set.
         * @return {@code this}
         */
        public Builder sshFlags(com.aliyun.ros.cdk.core.IResolvable sshFlags) {
            this.sshFlags = sshFlags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(java.util.List<? extends java.lang.Object> taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(com.aliyun.ros.cdk.core.IResolvable taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenew(java.lang.Boolean workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenew}
         * @param workerAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenew(com.aliyun.ros.cdk.core.IResolvable workerAutoRenew) {
            this.workerAutoRenew = workerAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerAutoRenewPeriod}
         * @param workerAutoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerAutoRenewPeriod(java.lang.Number workerAutoRenewPeriod) {
            this.workerAutoRenewPeriod = workerAutoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(java.lang.Boolean workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisks(com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisks(java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerInstanceChargeType}
         * @param workerInstanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder workerInstanceChargeType(java.lang.String workerInstanceChargeType) {
            this.workerInstanceChargeType = workerInstanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriod}
         * @param workerPeriod the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriod(java.lang.Number workerPeriod) {
            this.workerPeriod = workerPeriod;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerPeriodUnit}
         * @param workerPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder workerPeriodUnit(java.lang.String workerPeriodUnit) {
            this.workerPeriodUnit = workerPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KubernetesClusterProps build() {
            return new Jsii$Proxy(masterInstanceTypes, masterVSwitchIds, name, vpcId, workerInstanceTypes, workerVSwitchIds, addons, cloudMonitorFlags, containerCidr, cpuPolicy, disableRollback, endpointPublicAccess, keyPair, kubernetesVersion, loginPassword, masterAutoRenew, masterAutoRenewPeriod, masterCount, masterDataDisk, masterDataDisks, masterInstanceChargeType, masterPeriod, masterPeriodUnit, masterSystemDiskCategory, masterSystemDiskSize, nodePortRange, numOfNodes, proxyMode, securityGroupId, serviceCidr, snatEntry, sshFlags, tags, taint, timeoutMins, workerAutoRenew, workerAutoRenewPeriod, workerDataDisk, workerDataDisks, workerInstanceChargeType, workerPeriod, workerPeriodUnit, workerSystemDiskCategory, workerSystemDiskSize);
        }
    }

    /**
     * An implementation for {@link KubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KubernetesClusterProps {
        private final java.lang.Object masterInstanceTypes;
        private final java.lang.Object masterVSwitchIds;
        private final java.lang.String name;
        private final java.lang.String vpcId;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object workerVSwitchIds;
        private final java.lang.Object addons;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.String containerCidr;
        private final java.lang.String cpuPolicy;
        private final java.lang.Object disableRollback;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.String keyPair;
        private final java.lang.String kubernetesVersion;
        private final java.lang.String loginPassword;
        private final java.lang.Object masterAutoRenew;
        private final java.lang.Number masterAutoRenewPeriod;
        private final java.lang.Number masterCount;
        private final java.lang.Object masterDataDisk;
        private final java.lang.Object masterDataDisks;
        private final java.lang.String masterInstanceChargeType;
        private final java.lang.Number masterPeriod;
        private final java.lang.String masterPeriodUnit;
        private final java.lang.String masterSystemDiskCategory;
        private final java.lang.Number masterSystemDiskSize;
        private final java.lang.String nodePortRange;
        private final java.lang.Number numOfNodes;
        private final java.lang.String proxyMode;
        private final java.lang.String securityGroupId;
        private final java.lang.String serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.lang.Object sshFlags;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;
        private final java.lang.Object taint;
        private final java.lang.Number timeoutMins;
        private final java.lang.Object workerAutoRenew;
        private final java.lang.Number workerAutoRenewPeriod;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDisks;
        private final java.lang.String workerInstanceChargeType;
        private final java.lang.Number workerPeriod;
        private final java.lang.String workerPeriodUnit;
        private final java.lang.String workerSystemDiskCategory;
        private final java.lang.Number workerSystemDiskSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.masterInstanceTypes = software.amazon.jsii.Kernel.get(this, "masterInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterVSwitchIds = software.amazon.jsii.Kernel.get(this, "masterVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerVSwitchIds = software.amazon.jsii.Kernel.get(this, "workerVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cpuPolicy = software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterAutoRenew = software.amazon.jsii.Kernel.get(this, "masterAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "masterAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.masterCount = software.amazon.jsii.Kernel.get(this, "masterCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.masterDataDisk = software.amazon.jsii.Kernel.get(this, "masterDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterDataDisks = software.amazon.jsii.Kernel.get(this, "masterDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceChargeType = software.amazon.jsii.Kernel.get(this, "masterInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterPeriod = software.amazon.jsii.Kernel.get(this, "masterPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.masterPeriodUnit = software.amazon.jsii.Kernel.get(this, "masterPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "masterSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterSystemDiskSize = software.amazon.jsii.Kernel.get(this, "masterSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.nodePortRange = software.amazon.jsii.Kernel.get(this, "nodePortRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sshFlags = software.amazon.jsii.Kernel.get(this, "sshFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
            this.taint = software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.workerAutoRenew = software.amazon.jsii.Kernel.get(this, "workerAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerAutoRenewPeriod = software.amazon.jsii.Kernel.get(this, "workerAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisks = software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceChargeType = software.amazon.jsii.Kernel.get(this, "workerInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.workerPeriod = software.amazon.jsii.Kernel.get(this, "workerPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.workerPeriodUnit = software.amazon.jsii.Kernel.get(this, "workerPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.workerSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.workerSystemDiskSize = software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object masterInstanceTypes, final java.lang.Object masterVSwitchIds, final java.lang.String name, final java.lang.String vpcId, final java.lang.Object workerInstanceTypes, final java.lang.Object workerVSwitchIds, final java.lang.Object addons, final java.lang.Object cloudMonitorFlags, final java.lang.String containerCidr, final java.lang.String cpuPolicy, final java.lang.Object disableRollback, final java.lang.Object endpointPublicAccess, final java.lang.String keyPair, final java.lang.String kubernetesVersion, final java.lang.String loginPassword, final java.lang.Object masterAutoRenew, final java.lang.Number masterAutoRenewPeriod, final java.lang.Number masterCount, final java.lang.Object masterDataDisk, final java.lang.Object masterDataDisks, final java.lang.String masterInstanceChargeType, final java.lang.Number masterPeriod, final java.lang.String masterPeriodUnit, final java.lang.String masterSystemDiskCategory, final java.lang.Number masterSystemDiskSize, final java.lang.String nodePortRange, final java.lang.Number numOfNodes, final java.lang.String proxyMode, final java.lang.String securityGroupId, final java.lang.String serviceCidr, final java.lang.Object snatEntry, final java.lang.Object sshFlags, final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags, final java.lang.Object taint, final java.lang.Number timeoutMins, final java.lang.Object workerAutoRenew, final java.lang.Number workerAutoRenewPeriod, final java.lang.Object workerDataDisk, final java.lang.Object workerDataDisks, final java.lang.String workerInstanceChargeType, final java.lang.Number workerPeriod, final java.lang.String workerPeriodUnit, final java.lang.String workerSystemDiskCategory, final java.lang.Number workerSystemDiskSize) {
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
            this.proxyMode = proxyMode;
            this.securityGroupId = securityGroupId;
            this.serviceCidr = serviceCidr;
            this.snatEntry = snatEntry;
            this.sshFlags = sshFlags;
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
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
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getVpcId() {
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
        public final java.lang.String getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.String getCpuPolicy() {
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
        public final java.lang.String getKeyPair() {
            return this.keyPair;
        }

        @Override
        public final java.lang.String getKubernetesVersion() {
            return this.kubernetesVersion;
        }

        @Override
        public final java.lang.String getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getMasterAutoRenew() {
            return this.masterAutoRenew;
        }

        @Override
        public final java.lang.Number getMasterAutoRenewPeriod() {
            return this.masterAutoRenewPeriod;
        }

        @Override
        public final java.lang.Number getMasterCount() {
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
        public final java.lang.String getMasterInstanceChargeType() {
            return this.masterInstanceChargeType;
        }

        @Override
        public final java.lang.Number getMasterPeriod() {
            return this.masterPeriod;
        }

        @Override
        public final java.lang.String getMasterPeriodUnit() {
            return this.masterPeriodUnit;
        }

        @Override
        public final java.lang.String getMasterSystemDiskCategory() {
            return this.masterSystemDiskCategory;
        }

        @Override
        public final java.lang.Number getMasterSystemDiskSize() {
            return this.masterSystemDiskSize;
        }

        @Override
        public final java.lang.String getNodePortRange() {
            return this.nodePortRange;
        }

        @Override
        public final java.lang.Number getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.String getProxyMode() {
            return this.proxyMode;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getServiceCidr() {
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
        public final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTaint() {
            return this.taint;
        }

        @Override
        public final java.lang.Number getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        public final java.lang.Object getWorkerAutoRenew() {
            return this.workerAutoRenew;
        }

        @Override
        public final java.lang.Number getWorkerAutoRenewPeriod() {
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
        public final java.lang.String getWorkerInstanceChargeType() {
            return this.workerInstanceChargeType;
        }

        @Override
        public final java.lang.Number getWorkerPeriod() {
            return this.workerPeriod;
        }

        @Override
        public final java.lang.String getWorkerPeriodUnit() {
            return this.workerPeriodUnit;
        }

        @Override
        public final java.lang.String getWorkerSystemDiskCategory() {
            return this.workerSystemDiskCategory;
        }

        @Override
        public final java.lang.Number getWorkerSystemDiskSize() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.KubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KubernetesClusterProps.Jsii$Proxy that = (KubernetesClusterProps.Jsii$Proxy) o;

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

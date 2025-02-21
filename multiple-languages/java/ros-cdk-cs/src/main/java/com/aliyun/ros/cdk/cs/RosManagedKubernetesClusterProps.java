package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>RosManagedKubernetesCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.683Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosManagedKubernetesClusterProps.Jsii$Proxy.class)
public interface RosManagedKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogComponents() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogProject() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogTtl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionProviderKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFormatDisk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepInstanceName() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintenanceWindow() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeCidrMask() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeNameMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodePools() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuntime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityHardeningOs() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSocEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> getTags() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosManagedKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosManagedKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosManagedKubernetesClusterProps> {
        java.lang.Object name;
        java.lang.Object vpcId;
        java.lang.Object addons;
        java.lang.Object cloudMonitorFlags;
        java.lang.Object clusterSpec;
        java.lang.Object containerCidr;
        java.lang.Object controlPlaneLogComponents;
        java.lang.Object controlPlaneLogProject;
        java.lang.Object controlPlaneLogTtl;
        java.lang.Object deleteOptions;
        java.lang.Object deletionProtection;
        java.lang.Object encryptionProviderKey;
        java.lang.Object endpointPublicAccess;
        java.lang.Object formatDisk;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object keepInstanceName;
        java.lang.Object keyPair;
        java.lang.Object kubernetesVersion;
        java.lang.Object loadBalancerSpec;
        java.lang.Object loginPassword;
        java.lang.Object maintenanceWindow;
        java.lang.Object nodeCidrMask;
        java.lang.Object nodeNameMode;
        java.lang.Object nodePools;
        java.lang.Object osType;
        java.lang.Object platform;
        java.lang.Object podVswitchIds;
        java.lang.Object proxyMode;
        java.lang.Object resourceGroupId;
        java.lang.Object runtime;
        java.lang.Object securityGroupId;
        java.lang.Object securityHardeningOs;
        java.lang.Object serviceCidr;
        java.lang.Object snatEntry;
        java.lang.Object socEnabled;
        java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags;
        java.lang.Object taint;
        java.lang.Object timeoutMins;
        java.lang.Object userData;
        java.lang.Object zoneIds;

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec the value to be set.
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec the value to be set.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogComponents}
         * @param controlPlaneLogComponents the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogComponents(com.aliyun.ros.cdk.core.IResolvable controlPlaneLogComponents) {
            this.controlPlaneLogComponents = controlPlaneLogComponents;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogComponents}
         * @param controlPlaneLogComponents the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogComponents(java.util.List<? extends java.lang.Object> controlPlaneLogComponents) {
            this.controlPlaneLogComponents = controlPlaneLogComponents;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogProject}
         * @param controlPlaneLogProject the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogProject(java.lang.String controlPlaneLogProject) {
            this.controlPlaneLogProject = controlPlaneLogProject;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogProject}
         * @param controlPlaneLogProject the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogProject(com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.controlPlaneLogProject = controlPlaneLogProject;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogTtl}
         * @param controlPlaneLogTtl the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogTtl(java.lang.Number controlPlaneLogTtl) {
            this.controlPlaneLogTtl = controlPlaneLogTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getControlPlaneLogTtl}
         * @param controlPlaneLogTtl the value to be set.
         * @return {@code this}
         */
        public Builder controlPlaneLogTtl(com.aliyun.ros.cdk.core.IResolvable controlPlaneLogTtl) {
            this.controlPlaneLogTtl = controlPlaneLogTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getDeleteOptions}
         * @param deleteOptions the value to be set.
         * @return {@code this}
         */
        public Builder deleteOptions(com.aliyun.ros.cdk.core.IResolvable deleteOptions) {
            this.deleteOptions = deleteOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getDeleteOptions}
         * @param deleteOptions the value to be set.
         * @return {@code this}
         */
        public Builder deleteOptions(java.util.List<? extends java.lang.Object> deleteOptions) {
            this.deleteOptions = deleteOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getEncryptionProviderKey}
         * @param encryptionProviderKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionProviderKey(java.lang.String encryptionProviderKey) {
            this.encryptionProviderKey = encryptionProviderKey;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getEncryptionProviderKey}
         * @param encryptionProviderKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionProviderKey(com.aliyun.ros.cdk.core.IResolvable encryptionProviderKey) {
            this.encryptionProviderKey = encryptionProviderKey;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getFormatDisk}
         * @param formatDisk the value to be set.
         * @return {@code this}
         */
        public Builder formatDisk(java.lang.Boolean formatDisk) {
            this.formatDisk = formatDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getFormatDisk}
         * @param formatDisk the value to be set.
         * @return {@code this}
         */
        public Builder formatDisk(com.aliyun.ros.cdk.core.IResolvable formatDisk) {
            this.formatDisk = formatDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(java.lang.Boolean isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKeepInstanceName}
         * @param keepInstanceName the value to be set.
         * @return {@code this}
         */
        public Builder keepInstanceName(java.lang.Boolean keepInstanceName) {
            this.keepInstanceName = keepInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKeepInstanceName}
         * @param keepInstanceName the value to be set.
         * @return {@code this}
         */
        public Builder keepInstanceName(com.aliyun.ros.cdk.core.IResolvable keepInstanceName) {
            this.keepInstanceName = keepInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(java.lang.String loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getMaintenanceWindow}
         * @param maintenanceWindow the value to be set.
         * @return {@code this}
         */
        public Builder maintenanceWindow(com.aliyun.ros.cdk.core.IResolvable maintenanceWindow) {
            this.maintenanceWindow = maintenanceWindow;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getMaintenanceWindow}
         * @param maintenanceWindow the value to be set.
         * @return {@code this}
         */
        public Builder maintenanceWindow(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.MaintenanceWindowProperty maintenanceWindow) {
            this.maintenanceWindow = maintenanceWindow;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodeCidrMask}
         * @param nodeCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder nodeCidrMask(java.lang.String nodeCidrMask) {
            this.nodeCidrMask = nodeCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodeCidrMask}
         * @param nodeCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder nodeCidrMask(com.aliyun.ros.cdk.core.IResolvable nodeCidrMask) {
            this.nodeCidrMask = nodeCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodeNameMode}
         * @param nodeNameMode the value to be set.
         * @return {@code this}
         */
        public Builder nodeNameMode(java.lang.String nodeNameMode) {
            this.nodeNameMode = nodeNameMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodeNameMode}
         * @param nodeNameMode the value to be set.
         * @return {@code this}
         */
        public Builder nodeNameMode(com.aliyun.ros.cdk.core.IResolvable nodeNameMode) {
            this.nodeNameMode = nodeNameMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodePools}
         * @param nodePools the value to be set.
         * @return {@code this}
         */
        public Builder nodePools(com.aliyun.ros.cdk.core.IResolvable nodePools) {
            this.nodePools = nodePools;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getNodePools}
         * @param nodePools the value to be set.
         * @return {@code this}
         */
        public Builder nodePools(java.util.List<? extends java.lang.Object> nodePools) {
            this.nodePools = nodePools;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getPlatform}
         * @param platform the value to be set.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getPlatform}
         * @param platform the value to be set.
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds the value to be set.
         * @return {@code this}
         */
        public Builder podVswitchIds(com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds the value to be set.
         * @return {@code this}
         */
        public Builder podVswitchIds(java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getRuntime}
         * @param runtime the value to be set.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getRuntime}
         * @param runtime the value to be set.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.RuntimeProperty runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSecurityHardeningOs}
         * @param securityHardeningOs the value to be set.
         * @return {@code this}
         */
        public Builder securityHardeningOs(java.lang.Boolean securityHardeningOs) {
            this.securityHardeningOs = securityHardeningOs;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSecurityHardeningOs}
         * @param securityHardeningOs the value to be set.
         * @return {@code this}
         */
        public Builder securityHardeningOs(com.aliyun.ros.cdk.core.IResolvable securityHardeningOs) {
            this.securityHardeningOs = securityHardeningOs;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSocEnabled}
         * @param socEnabled the value to be set.
         * @return {@code this}
         */
        public Builder socEnabled(java.lang.Boolean socEnabled) {
            this.socEnabled = socEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getSocEnabled}
         * @param socEnabled the value to be set.
         * @return {@code this}
         */
        public Builder socEnabled(com.aliyun.ros.cdk.core.IResolvable socEnabled) {
            this.socEnabled = socEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(com.aliyun.ros.cdk.core.IResolvable taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getTaint}
         * @param taint the value to be set.
         * @return {@code this}
         */
        public Builder taint(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getZoneIds}
         * @param zoneIds the value to be set.
         * @return {@code this}
         */
        public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedKubernetesClusterProps#getZoneIds}
         * @param zoneIds the value to be set.
         * @return {@code this}
         */
        public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosManagedKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosManagedKubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosManagedKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosManagedKubernetesClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object vpcId;
        private final java.lang.Object addons;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object containerCidr;
        private final java.lang.Object controlPlaneLogComponents;
        private final java.lang.Object controlPlaneLogProject;
        private final java.lang.Object controlPlaneLogTtl;
        private final java.lang.Object deleteOptions;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object encryptionProviderKey;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object formatDisk;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object keepInstanceName;
        private final java.lang.Object keyPair;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object loadBalancerSpec;
        private final java.lang.Object loginPassword;
        private final java.lang.Object maintenanceWindow;
        private final java.lang.Object nodeCidrMask;
        private final java.lang.Object nodeNameMode;
        private final java.lang.Object nodePools;
        private final java.lang.Object osType;
        private final java.lang.Object platform;
        private final java.lang.Object podVswitchIds;
        private final java.lang.Object proxyMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object runtime;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityHardeningOs;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.lang.Object socEnabled;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object taint;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object userData;
        private final java.lang.Object zoneIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.controlPlaneLogComponents = software.amazon.jsii.Kernel.get(this, "controlPlaneLogComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.controlPlaneLogProject = software.amazon.jsii.Kernel.get(this, "controlPlaneLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.controlPlaneLogTtl = software.amazon.jsii.Kernel.get(this, "controlPlaneLogTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteOptions = software.amazon.jsii.Kernel.get(this, "deleteOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionProviderKey = software.amazon.jsii.Kernel.get(this, "encryptionProviderKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.formatDisk = software.amazon.jsii.Kernel.get(this, "formatDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepInstanceName = software.amazon.jsii.Kernel.get(this, "keepInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerSpec = software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintenanceWindow = software.amazon.jsii.Kernel.get(this, "maintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeCidrMask = software.amazon.jsii.Kernel.get(this, "nodeCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeNameMode = software.amazon.jsii.Kernel.get(this, "nodeNameMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodePools = software.amazon.jsii.Kernel.get(this, "nodePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osType = software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podVswitchIds = software.amazon.jsii.Kernel.get(this, "podVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityHardeningOs = software.amazon.jsii.Kernel.get(this, "securityHardeningOs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.socEnabled = software.amazon.jsii.Kernel.get(this, "socEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty.class)));
            this.taint = software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneIds = software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.addons = builder.addons;
            this.cloudMonitorFlags = builder.cloudMonitorFlags;
            this.clusterSpec = builder.clusterSpec;
            this.containerCidr = builder.containerCidr;
            this.controlPlaneLogComponents = builder.controlPlaneLogComponents;
            this.controlPlaneLogProject = builder.controlPlaneLogProject;
            this.controlPlaneLogTtl = builder.controlPlaneLogTtl;
            this.deleteOptions = builder.deleteOptions;
            this.deletionProtection = builder.deletionProtection;
            this.encryptionProviderKey = builder.encryptionProviderKey;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.formatDisk = builder.formatDisk;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.keepInstanceName = builder.keepInstanceName;
            this.keyPair = builder.keyPair;
            this.kubernetesVersion = builder.kubernetesVersion;
            this.loadBalancerSpec = builder.loadBalancerSpec;
            this.loginPassword = builder.loginPassword;
            this.maintenanceWindow = builder.maintenanceWindow;
            this.nodeCidrMask = builder.nodeCidrMask;
            this.nodeNameMode = builder.nodeNameMode;
            this.nodePools = builder.nodePools;
            this.osType = builder.osType;
            this.platform = builder.platform;
            this.podVswitchIds = builder.podVswitchIds;
            this.proxyMode = builder.proxyMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.runtime = builder.runtime;
            this.securityGroupId = builder.securityGroupId;
            this.securityHardeningOs = builder.securityHardeningOs;
            this.serviceCidr = builder.serviceCidr;
            this.snatEntry = builder.snatEntry;
            this.socEnabled = builder.socEnabled;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty>)builder.tags;
            this.taint = builder.taint;
            this.timeoutMins = builder.timeoutMins;
            this.userData = builder.userData;
            this.zoneIds = builder.zoneIds;
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
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getCloudMonitorFlags() {
            return this.cloudMonitorFlags;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.Object getControlPlaneLogComponents() {
            return this.controlPlaneLogComponents;
        }

        @Override
        public final java.lang.Object getControlPlaneLogProject() {
            return this.controlPlaneLogProject;
        }

        @Override
        public final java.lang.Object getControlPlaneLogTtl() {
            return this.controlPlaneLogTtl;
        }

        @Override
        public final java.lang.Object getDeleteOptions() {
            return this.deleteOptions;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getEncryptionProviderKey() {
            return this.encryptionProviderKey;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getFormatDisk() {
            return this.formatDisk;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getKeepInstanceName() {
            return this.keepInstanceName;
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
        public final java.lang.Object getLoadBalancerSpec() {
            return this.loadBalancerSpec;
        }

        @Override
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getMaintenanceWindow() {
            return this.maintenanceWindow;
        }

        @Override
        public final java.lang.Object getNodeCidrMask() {
            return this.nodeCidrMask;
        }

        @Override
        public final java.lang.Object getNodeNameMode() {
            return this.nodeNameMode;
        }

        @Override
        public final java.lang.Object getNodePools() {
            return this.nodePools;
        }

        @Override
        public final java.lang.Object getOsType() {
            return this.osType;
        }

        @Override
        public final java.lang.Object getPlatform() {
            return this.platform;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRuntime() {
            return this.runtime;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityHardeningOs() {
            return this.securityHardeningOs;
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
        public final java.lang.Object getSocEnabled() {
            return this.socEnabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> getTags() {
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
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getZoneIds() {
            return this.zoneIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getCloudMonitorFlags() != null) {
                data.set("cloudMonitorFlags", om.valueToTree(this.getCloudMonitorFlags()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getContainerCidr() != null) {
                data.set("containerCidr", om.valueToTree(this.getContainerCidr()));
            }
            if (this.getControlPlaneLogComponents() != null) {
                data.set("controlPlaneLogComponents", om.valueToTree(this.getControlPlaneLogComponents()));
            }
            if (this.getControlPlaneLogProject() != null) {
                data.set("controlPlaneLogProject", om.valueToTree(this.getControlPlaneLogProject()));
            }
            if (this.getControlPlaneLogTtl() != null) {
                data.set("controlPlaneLogTtl", om.valueToTree(this.getControlPlaneLogTtl()));
            }
            if (this.getDeleteOptions() != null) {
                data.set("deleteOptions", om.valueToTree(this.getDeleteOptions()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getEncryptionProviderKey() != null) {
                data.set("encryptionProviderKey", om.valueToTree(this.getEncryptionProviderKey()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getFormatDisk() != null) {
                data.set("formatDisk", om.valueToTree(this.getFormatDisk()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getKeepInstanceName() != null) {
                data.set("keepInstanceName", om.valueToTree(this.getKeepInstanceName()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getLoadBalancerSpec() != null) {
                data.set("loadBalancerSpec", om.valueToTree(this.getLoadBalancerSpec()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getMaintenanceWindow() != null) {
                data.set("maintenanceWindow", om.valueToTree(this.getMaintenanceWindow()));
            }
            if (this.getNodeCidrMask() != null) {
                data.set("nodeCidrMask", om.valueToTree(this.getNodeCidrMask()));
            }
            if (this.getNodeNameMode() != null) {
                data.set("nodeNameMode", om.valueToTree(this.getNodeNameMode()));
            }
            if (this.getNodePools() != null) {
                data.set("nodePools", om.valueToTree(this.getNodePools()));
            }
            if (this.getOsType() != null) {
                data.set("osType", om.valueToTree(this.getOsType()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getPodVswitchIds() != null) {
                data.set("podVswitchIds", om.valueToTree(this.getPodVswitchIds()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRuntime() != null) {
                data.set("runtime", om.valueToTree(this.getRuntime()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityHardeningOs() != null) {
                data.set("securityHardeningOs", om.valueToTree(this.getSecurityHardeningOs()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getSocEnabled() != null) {
                data.set("socEnabled", om.valueToTree(this.getSocEnabled()));
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
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getZoneIds() != null) {
                data.set("zoneIds", om.valueToTree(this.getZoneIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosManagedKubernetesClusterProps.Jsii$Proxy that = (RosManagedKubernetesClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.controlPlaneLogComponents != null ? !this.controlPlaneLogComponents.equals(that.controlPlaneLogComponents) : that.controlPlaneLogComponents != null) return false;
            if (this.controlPlaneLogProject != null ? !this.controlPlaneLogProject.equals(that.controlPlaneLogProject) : that.controlPlaneLogProject != null) return false;
            if (this.controlPlaneLogTtl != null ? !this.controlPlaneLogTtl.equals(that.controlPlaneLogTtl) : that.controlPlaneLogTtl != null) return false;
            if (this.deleteOptions != null ? !this.deleteOptions.equals(that.deleteOptions) : that.deleteOptions != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.encryptionProviderKey != null ? !this.encryptionProviderKey.equals(that.encryptionProviderKey) : that.encryptionProviderKey != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.formatDisk != null ? !this.formatDisk.equals(that.formatDisk) : that.formatDisk != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.keepInstanceName != null ? !this.keepInstanceName.equals(that.keepInstanceName) : that.keepInstanceName != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.loadBalancerSpec != null ? !this.loadBalancerSpec.equals(that.loadBalancerSpec) : that.loadBalancerSpec != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.maintenanceWindow != null ? !this.maintenanceWindow.equals(that.maintenanceWindow) : that.maintenanceWindow != null) return false;
            if (this.nodeCidrMask != null ? !this.nodeCidrMask.equals(that.nodeCidrMask) : that.nodeCidrMask != null) return false;
            if (this.nodeNameMode != null ? !this.nodeNameMode.equals(that.nodeNameMode) : that.nodeNameMode != null) return false;
            if (this.nodePools != null ? !this.nodePools.equals(that.nodePools) : that.nodePools != null) return false;
            if (this.osType != null ? !this.osType.equals(that.osType) : that.osType != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            if (this.podVswitchIds != null ? !this.podVswitchIds.equals(that.podVswitchIds) : that.podVswitchIds != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.runtime != null ? !this.runtime.equals(that.runtime) : that.runtime != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityHardeningOs != null ? !this.securityHardeningOs.equals(that.securityHardeningOs) : that.securityHardeningOs != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.socEnabled != null ? !this.socEnabled.equals(that.socEnabled) : that.socEnabled != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.taint != null ? !this.taint.equals(that.taint) : that.taint != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.controlPlaneLogComponents != null ? this.controlPlaneLogComponents.hashCode() : 0);
            result = 31 * result + (this.controlPlaneLogProject != null ? this.controlPlaneLogProject.hashCode() : 0);
            result = 31 * result + (this.controlPlaneLogTtl != null ? this.controlPlaneLogTtl.hashCode() : 0);
            result = 31 * result + (this.deleteOptions != null ? this.deleteOptions.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.encryptionProviderKey != null ? this.encryptionProviderKey.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.formatDisk != null ? this.formatDisk.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.keepInstanceName != null ? this.keepInstanceName.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerSpec != null ? this.loadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.maintenanceWindow != null ? this.maintenanceWindow.hashCode() : 0);
            result = 31 * result + (this.nodeCidrMask != null ? this.nodeCidrMask.hashCode() : 0);
            result = 31 * result + (this.nodeNameMode != null ? this.nodeNameMode.hashCode() : 0);
            result = 31 * result + (this.nodePools != null ? this.nodePools.hashCode() : 0);
            result = 31 * result + (this.osType != null ? this.osType.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.podVswitchIds != null ? this.podVswitchIds.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.runtime != null ? this.runtime.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityHardeningOs != null ? this.securityHardeningOs.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.socEnabled != null ? this.socEnabled.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.taint != null ? this.taint.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
            return result;
        }
    }
}

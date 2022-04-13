package com.aliyun.ros.cdk.eci;

/**
 * Properties for defining a `ALIYUN::ECI::ContainerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:14.399Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ContainerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ContainerGroupProps.Jsii$Proxy.class)
public interface ContainerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property container: The containers that constitute the container group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainer();

    /**
     * Property containerGroupName: The name of the container group.
     * <p>
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainerGroupName();

    /**
     * Property securityGroupId: The ID of the security group to which the instance belongs.
     * <p>
     * Instances in the same security group can access one another.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vSwitchId: The ID of the specified VSwitch.
     * <p>
     * Currently, ECI instances can only be deployed in VPCs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfo() {
        return null;
    }

    /**
     * Property activeDeadlineSeconds: The validity period in seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActiveDeadlineSeconds() {
        return null;
    }

    /**
     * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return null;
    }

    /**
     * Property cpu: CPU size.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     * Property dnsConfig: The information about DNS configurations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfig() {
        return null;
    }

    /**
     * Property eipInstanceId: Elastic IP ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return null;
    }

    /**
     * Property hostAliase: Customize the hostname mapping of a container inside the pod.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostAliase() {
        return null;
    }

    /**
     * Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return null;
    }

    /**
     * Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageSnapshotId() {
        return null;
    }

    /**
     * Property initContainer: The containers that constitute the container group for initializing.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainer() {
        return null;
    }

    /**
     * Property instanceType: The type of the ECS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property ipv6AddressCount: The number of IPv6 addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property memory: memory size.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     * Property ramRoleName: The RAM role that the container group assumes.
     * <p>
     * ECI and ECS share the same RAM role.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     * Property restartPolicy: The policy for restarting the instance.
     * <p>
     * Default value: Always.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestartPolicy() {
        return null;
    }

    /**
     * Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * <p>
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctl() {
        return null;
    }

    /**
     * Property slsEnable: Enable user log collection.
     * <p>
     * The default is False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsEnable() {
        return null;
    }

    /**
     * Property spotPriceLimit: Set the hourly maximum price of the instance.
     * <p>
     * It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotStrategy: Instance preemption strategy.
     * <p>
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * Property tag: The list of container group tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags for each container group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return null;
    }

    /**
     * Property volume: The data volume.
     * <p>
     * You can specify a maximum of 20 data volumes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolume() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone in which the instance resides.
     * <p>
     * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ContainerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ContainerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ContainerGroupProps> {
        java.lang.Object container;
        java.lang.Object containerGroupName;
        java.lang.Object securityGroupId;
        java.lang.Object vSwitchId;
        java.lang.Object acrRegistryInfo;
        java.lang.Object activeDeadlineSeconds;
        java.lang.Object autoMatchImageCache;
        java.lang.Object cpu;
        java.lang.Object dnsConfig;
        java.lang.Object eipInstanceId;
        java.lang.Object hostAliase;
        java.lang.Object imageRegistryCredential;
        java.lang.Object imageSnapshotId;
        java.lang.Object initContainer;
        java.lang.Object instanceType;
        java.lang.Object ipv6AddressCount;
        java.lang.Object memory;
        java.lang.Object ramRoleName;
        java.lang.Object restartPolicy;
        java.lang.Object securityContextSysctl;
        java.lang.Object slsEnable;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.lang.Object tag;
        java.lang.Object terminationGracePeriodSeconds;
        java.lang.Object volume;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ContainerGroupProps#getContainer}
         * @param container Property container: The containers that constitute the container group. This parameter is required.
         * @return {@code this}
         */
        public Builder container(com.aliyun.ros.cdk.core.IResolvable container) {
            this.container = container;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getContainer}
         * @param container Property container: The containers that constitute the container group. This parameter is required.
         * @return {@code this}
         */
        public Builder container(java.util.List<? extends java.lang.Object> container) {
            this.container = container;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getContainerGroupName}
         * @param containerGroupName Property containerGroupName: The name of the container group. This parameter is required.
         *                           The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
         * @return {@code this}
         */
        public Builder containerGroupName(java.lang.String containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getContainerGroupName}
         * @param containerGroupName Property containerGroupName: The name of the container group. This parameter is required.
         *                           The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
         * @return {@code this}
         */
        public Builder containerGroupName(com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         *                        Instances in the same security group can access one another.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         *                        Instances in the same security group can access one another.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the specified VSwitch. This parameter is required.
         *                  Currently, ECI instances can only be deployed in VPCs.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the specified VSwitch. This parameter is required.
         *                  Currently, ECI instances can only be deployed in VPCs.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getAcrRegistryInfo}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getAcrRegistryInfo}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period in seconds.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(java.lang.Number activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period in seconds.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getAutoMatchImageCache}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(java.lang.Boolean autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getAutoMatchImageCache}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getCpu}
         * @param cpu Property cpu: CPU size.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getCpu}
         * @param cpu Property cpu: CPU size.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getDnsConfig}
         * @param dnsConfig Property dnsConfig: The information about DNS configurations.
         * @return {@code this}
         */
        public Builder dnsConfig(com.aliyun.ros.cdk.core.IResolvable dnsConfig) {
            this.dnsConfig = dnsConfig;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getDnsConfig}
         * @param dnsConfig Property dnsConfig: The information about DNS configurations.
         * @return {@code this}
         */
        public Builder dnsConfig(com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty dnsConfig) {
            this.dnsConfig = dnsConfig;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getEipInstanceId}
         * @param eipInstanceId Property eipInstanceId: Elastic IP ID.
         * @return {@code this}
         */
        public Builder eipInstanceId(java.lang.String eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getEipInstanceId}
         * @param eipInstanceId Property eipInstanceId: Elastic IP ID.
         * @return {@code this}
         */
        public Builder eipInstanceId(com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getHostAliase}
         * @param hostAliase Property hostAliase: Customize the hostname mapping of a container inside the pod.
         * @return {@code this}
         */
        public Builder hostAliase(com.aliyun.ros.cdk.core.IResolvable hostAliase) {
            this.hostAliase = hostAliase;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getHostAliase}
         * @param hostAliase Property hostAliase: Customize the hostname mapping of a container inside the pod.
         * @return {@code this}
         */
        public Builder hostAliase(java.util.List<? extends java.lang.Object> hostAliase) {
            this.hostAliase = hostAliase;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getImageRegistryCredential}
         * @param imageRegistryCredential Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getImageRegistryCredential}
         * @param imageRegistryCredential Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getImageSnapshotId}
         * @param imageSnapshotId Property imageSnapshotId: Image cache ID or snapshot ID.
         * @return {@code this}
         */
        public Builder imageSnapshotId(java.lang.String imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getImageSnapshotId}
         * @param imageSnapshotId Property imageSnapshotId: Image cache ID or snapshot ID.
         * @return {@code this}
         */
        public Builder imageSnapshotId(com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getInitContainer}
         * @param initContainer Property initContainer: The containers that constitute the container group for initializing.
         * @return {@code this}
         */
        public Builder initContainer(com.aliyun.ros.cdk.core.IResolvable initContainer) {
            this.initContainer = initContainer;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getInitContainer}
         * @param initContainer Property initContainer: The containers that constitute the container group for initializing.
         * @return {@code this}
         */
        public Builder initContainer(java.util.List<? extends java.lang.Object> initContainer) {
            this.initContainer = initContainer;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the ECS instance.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the ECS instance.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getMemory}
         * @param memory Property memory: memory size.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getMemory}
         * @param memory Property memory: memory size.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: The RAM role that the container group assumes.
         *                    ECI and ECS share the same RAM role.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: The RAM role that the container group assumes.
         *                    ECI and ECS share the same RAM role.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getRestartPolicy}
         * @param restartPolicy Property restartPolicy: The policy for restarting the instance.
         *                      Default value: Always.
         * @return {@code this}
         */
        public Builder restartPolicy(java.lang.String restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getRestartPolicy}
         * @param restartPolicy Property restartPolicy: The policy for restarting the instance.
         *                      Default value: Always.
         * @return {@code this}
         */
        public Builder restartPolicy(com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSecurityContextSysctl}
         * @param securityContextSysctl Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
         *                              Currently only two Sysctl keyNames are supported:
         *                              Kernel.shm_rmid_forced
         *                              Kernel.msgmax
         * @return {@code this}
         */
        public Builder securityContextSysctl(com.aliyun.ros.cdk.core.IResolvable securityContextSysctl) {
            this.securityContextSysctl = securityContextSysctl;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSecurityContextSysctl}
         * @param securityContextSysctl Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
         *                              Currently only two Sysctl keyNames are supported:
         *                              Kernel.shm_rmid_forced
         *                              Kernel.msgmax
         * @return {@code this}
         */
        public Builder securityContextSysctl(java.util.List<? extends java.lang.Object> securityContextSysctl) {
            this.securityContextSysctl = securityContextSysctl;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSlsEnable}
         * @param slsEnable Property slsEnable: Enable user log collection.
         *                  The default is False.
         * @return {@code this}
         */
        public Builder slsEnable(java.lang.Boolean slsEnable) {
            this.slsEnable = slsEnable;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSlsEnable}
         * @param slsEnable Property slsEnable: Enable user log collection.
         *                  The default is False.
         * @return {@code this}
         */
        public Builder slsEnable(com.aliyun.ros.cdk.core.IResolvable slsEnable) {
            this.slsEnable = slsEnable;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price of the instance.
         *                       It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price of the instance.
         *                       It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: Instance preemption strategy.
         *                     Ranges:
         *                     NoSpot (default): normal pay-as-you-go instances.
         *                     SpotWithPriceLimit: Preemptive instance that sets a cap price.
         *                     SpotAsPriceGo: The system automatically bids, following the current market actual price.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: Instance preemption strategy.
         *                     Ranges:
         *                     NoSpot (default): normal pay-as-you-go instances.
         *                     SpotWithPriceLimit: Preemptive instance that sets a cap price.
         *                     SpotAsPriceGo: The system automatically bids, following the current market actual price.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getTag}
         * @param tag Property tag: The list of container group tags in the form of key/value pairs.
         *            You can define a maximum of 20 tags for each container group.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getTag}
         * @param tag Property tag: The list of container group tags in the form of key/value pairs.
         *            You can define a maximum of 20 tags for each container group.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(java.lang.Number terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getVolume}
         * @param volume Property volume: The data volume.
         *               You can specify a maximum of 20 data volumes.
         * @return {@code this}
         */
        public Builder volume(com.aliyun.ros.cdk.core.IResolvable volume) {
            this.volume = volume;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getVolume}
         * @param volume Property volume: The data volume.
         *               You can specify a maximum of 20 data volumes.
         * @return {@code this}
         */
        public Builder volume(java.util.List<? extends java.lang.Object> volume) {
            this.volume = volume;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance resides.
         *               If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ContainerGroupProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance resides.
         *               If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ContainerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ContainerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ContainerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContainerGroupProps {
        private final java.lang.Object container;
        private final java.lang.Object containerGroupName;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object acrRegistryInfo;
        private final java.lang.Object activeDeadlineSeconds;
        private final java.lang.Object autoMatchImageCache;
        private final java.lang.Object cpu;
        private final java.lang.Object dnsConfig;
        private final java.lang.Object eipInstanceId;
        private final java.lang.Object hostAliase;
        private final java.lang.Object imageRegistryCredential;
        private final java.lang.Object imageSnapshotId;
        private final java.lang.Object initContainer;
        private final java.lang.Object instanceType;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object memory;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object restartPolicy;
        private final java.lang.Object securityContextSysctl;
        private final java.lang.Object slsEnable;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object tag;
        private final java.lang.Object terminationGracePeriodSeconds;
        private final java.lang.Object volume;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.container = software.amazon.jsii.Kernel.get(this, "container", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerGroupName = software.amazon.jsii.Kernel.get(this, "containerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrRegistryInfo = software.amazon.jsii.Kernel.get(this, "acrRegistryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.activeDeadlineSeconds = software.amazon.jsii.Kernel.get(this, "activeDeadlineSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoMatchImageCache = software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsConfig = software.amazon.jsii.Kernel.get(this, "dnsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipInstanceId = software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostAliase = software.amazon.jsii.Kernel.get(this, "hostAliase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageRegistryCredential = software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageSnapshotId = software.amazon.jsii.Kernel.get(this, "imageSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initContainer = software.amazon.jsii.Kernel.get(this, "initContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restartPolicy = software.amazon.jsii.Kernel.get(this, "restartPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityContextSysctl = software.amazon.jsii.Kernel.get(this, "securityContextSysctl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsEnable = software.amazon.jsii.Kernel.get(this, "slsEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.terminationGracePeriodSeconds = software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volume = software.amazon.jsii.Kernel.get(this, "volume", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.container = java.util.Objects.requireNonNull(builder.container, "container is required");
            this.containerGroupName = java.util.Objects.requireNonNull(builder.containerGroupName, "containerGroupName is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.acrRegistryInfo = builder.acrRegistryInfo;
            this.activeDeadlineSeconds = builder.activeDeadlineSeconds;
            this.autoMatchImageCache = builder.autoMatchImageCache;
            this.cpu = builder.cpu;
            this.dnsConfig = builder.dnsConfig;
            this.eipInstanceId = builder.eipInstanceId;
            this.hostAliase = builder.hostAliase;
            this.imageRegistryCredential = builder.imageRegistryCredential;
            this.imageSnapshotId = builder.imageSnapshotId;
            this.initContainer = builder.initContainer;
            this.instanceType = builder.instanceType;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.memory = builder.memory;
            this.ramRoleName = builder.ramRoleName;
            this.restartPolicy = builder.restartPolicy;
            this.securityContextSysctl = builder.securityContextSysctl;
            this.slsEnable = builder.slsEnable;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.tag = builder.tag;
            this.terminationGracePeriodSeconds = builder.terminationGracePeriodSeconds;
            this.volume = builder.volume;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getContainer() {
            return this.container;
        }

        @Override
        public final java.lang.Object getContainerGroupName() {
            return this.containerGroupName;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAcrRegistryInfo() {
            return this.acrRegistryInfo;
        }

        @Override
        public final java.lang.Object getActiveDeadlineSeconds() {
            return this.activeDeadlineSeconds;
        }

        @Override
        public final java.lang.Object getAutoMatchImageCache() {
            return this.autoMatchImageCache;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getDnsConfig() {
            return this.dnsConfig;
        }

        @Override
        public final java.lang.Object getEipInstanceId() {
            return this.eipInstanceId;
        }

        @Override
        public final java.lang.Object getHostAliase() {
            return this.hostAliase;
        }

        @Override
        public final java.lang.Object getImageRegistryCredential() {
            return this.imageRegistryCredential;
        }

        @Override
        public final java.lang.Object getImageSnapshotId() {
            return this.imageSnapshotId;
        }

        @Override
        public final java.lang.Object getInitContainer() {
            return this.initContainer;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getRestartPolicy() {
            return this.restartPolicy;
        }

        @Override
        public final java.lang.Object getSecurityContextSysctl() {
            return this.securityContextSysctl;
        }

        @Override
        public final java.lang.Object getSlsEnable() {
            return this.slsEnable;
        }

        @Override
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getTerminationGracePeriodSeconds() {
            return this.terminationGracePeriodSeconds;
        }

        @Override
        public final java.lang.Object getVolume() {
            return this.volume;
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

            data.set("container", om.valueToTree(this.getContainer()));
            data.set("containerGroupName", om.valueToTree(this.getContainerGroupName()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAcrRegistryInfo() != null) {
                data.set("acrRegistryInfo", om.valueToTree(this.getAcrRegistryInfo()));
            }
            if (this.getActiveDeadlineSeconds() != null) {
                data.set("activeDeadlineSeconds", om.valueToTree(this.getActiveDeadlineSeconds()));
            }
            if (this.getAutoMatchImageCache() != null) {
                data.set("autoMatchImageCache", om.valueToTree(this.getAutoMatchImageCache()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getDnsConfig() != null) {
                data.set("dnsConfig", om.valueToTree(this.getDnsConfig()));
            }
            if (this.getEipInstanceId() != null) {
                data.set("eipInstanceId", om.valueToTree(this.getEipInstanceId()));
            }
            if (this.getHostAliase() != null) {
                data.set("hostAliase", om.valueToTree(this.getHostAliase()));
            }
            if (this.getImageRegistryCredential() != null) {
                data.set("imageRegistryCredential", om.valueToTree(this.getImageRegistryCredential()));
            }
            if (this.getImageSnapshotId() != null) {
                data.set("imageSnapshotId", om.valueToTree(this.getImageSnapshotId()));
            }
            if (this.getInitContainer() != null) {
                data.set("initContainer", om.valueToTree(this.getInitContainer()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getRestartPolicy() != null) {
                data.set("restartPolicy", om.valueToTree(this.getRestartPolicy()));
            }
            if (this.getSecurityContextSysctl() != null) {
                data.set("securityContextSysctl", om.valueToTree(this.getSecurityContextSysctl()));
            }
            if (this.getSlsEnable() != null) {
                data.set("slsEnable", om.valueToTree(this.getSlsEnable()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }
            if (this.getTerminationGracePeriodSeconds() != null) {
                data.set("terminationGracePeriodSeconds", om.valueToTree(this.getTerminationGracePeriodSeconds()));
            }
            if (this.getVolume() != null) {
                data.set("volume", om.valueToTree(this.getVolume()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.ContainerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ContainerGroupProps.Jsii$Proxy that = (ContainerGroupProps.Jsii$Proxy) o;

            if (!container.equals(that.container)) return false;
            if (!containerGroupName.equals(that.containerGroupName)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.acrRegistryInfo != null ? !this.acrRegistryInfo.equals(that.acrRegistryInfo) : that.acrRegistryInfo != null) return false;
            if (this.activeDeadlineSeconds != null ? !this.activeDeadlineSeconds.equals(that.activeDeadlineSeconds) : that.activeDeadlineSeconds != null) return false;
            if (this.autoMatchImageCache != null ? !this.autoMatchImageCache.equals(that.autoMatchImageCache) : that.autoMatchImageCache != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.dnsConfig != null ? !this.dnsConfig.equals(that.dnsConfig) : that.dnsConfig != null) return false;
            if (this.eipInstanceId != null ? !this.eipInstanceId.equals(that.eipInstanceId) : that.eipInstanceId != null) return false;
            if (this.hostAliase != null ? !this.hostAliase.equals(that.hostAliase) : that.hostAliase != null) return false;
            if (this.imageRegistryCredential != null ? !this.imageRegistryCredential.equals(that.imageRegistryCredential) : that.imageRegistryCredential != null) return false;
            if (this.imageSnapshotId != null ? !this.imageSnapshotId.equals(that.imageSnapshotId) : that.imageSnapshotId != null) return false;
            if (this.initContainer != null ? !this.initContainer.equals(that.initContainer) : that.initContainer != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.restartPolicy != null ? !this.restartPolicy.equals(that.restartPolicy) : that.restartPolicy != null) return false;
            if (this.securityContextSysctl != null ? !this.securityContextSysctl.equals(that.securityContextSysctl) : that.securityContextSysctl != null) return false;
            if (this.slsEnable != null ? !this.slsEnable.equals(that.slsEnable) : that.slsEnable != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
            if (this.terminationGracePeriodSeconds != null ? !this.terminationGracePeriodSeconds.equals(that.terminationGracePeriodSeconds) : that.terminationGracePeriodSeconds != null) return false;
            if (this.volume != null ? !this.volume.equals(that.volume) : that.volume != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.container.hashCode();
            result = 31 * result + (this.containerGroupName.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.acrRegistryInfo != null ? this.acrRegistryInfo.hashCode() : 0);
            result = 31 * result + (this.activeDeadlineSeconds != null ? this.activeDeadlineSeconds.hashCode() : 0);
            result = 31 * result + (this.autoMatchImageCache != null ? this.autoMatchImageCache.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.dnsConfig != null ? this.dnsConfig.hashCode() : 0);
            result = 31 * result + (this.eipInstanceId != null ? this.eipInstanceId.hashCode() : 0);
            result = 31 * result + (this.hostAliase != null ? this.hostAliase.hashCode() : 0);
            result = 31 * result + (this.imageRegistryCredential != null ? this.imageRegistryCredential.hashCode() : 0);
            result = 31 * result + (this.imageSnapshotId != null ? this.imageSnapshotId.hashCode() : 0);
            result = 31 * result + (this.initContainer != null ? this.initContainer.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.restartPolicy != null ? this.restartPolicy.hashCode() : 0);
            result = 31 * result + (this.securityContextSysctl != null ? this.securityContextSysctl.hashCode() : 0);
            result = 31 * result + (this.slsEnable != null ? this.slsEnable.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            result = 31 * result + (this.terminationGracePeriodSeconds != null ? this.terminationGracePeriodSeconds.hashCode() : 0);
            result = 31 * result + (this.volume != null ? this.volume.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}

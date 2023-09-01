package com.aliyun.ros.cdk.eci;

/**
 * A ROS resource type:  <code>ALIYUN::ECI::ContainerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.698Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ContainerGroup")
public class ContainerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ContainerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ContainerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECI::ContainerGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ContainerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECI::ContainerGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ContainerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ContainerGroupId: The ID of the container group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ContainerGroupName: The name of the container group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContainerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EniInstanceId: ENI instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEniInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrEniInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetIp: Internet IP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IntranetIp: Intranet IP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv6Address: Ipv6 address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6Address() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Address", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RegionId: The ID of the region in which the instance resides.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityGroupId: The ID of the security group to which the instance belongs.
     * <p>
     * Instances in the same security group can access one another.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     * <p>
     * Currently, ECI instances can only be deployed in VPCs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     * <p>
     * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.ContainerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.ContainerGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.eci.ContainerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eci.ContainerGroupProps.Builder();
        }

        /**
         * Property container: The containers that constitute the container group.
         * <p>
         * @return {@code this}
         * @param container Property container: The containers that constitute the container group. This parameter is required.
         */
        public Builder container(final com.aliyun.ros.cdk.core.IResolvable container) {
            this.props.container(container);
            return this;
        }
        /**
         * Property container: The containers that constitute the container group.
         * <p>
         * @return {@code this}
         * @param container Property container: The containers that constitute the container group. This parameter is required.
         */
        public Builder container(final java.util.List<? extends java.lang.Object> container) {
            this.props.container(container);
            return this;
        }

        /**
         * Property containerGroupName: The name of the container group.
         * <p>
         * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
         * <p>
         * @return {@code this}
         * @param containerGroupName Property containerGroupName: The name of the container group. This parameter is required.
         */
        public Builder containerGroupName(final java.lang.String containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }
        /**
         * Property containerGroupName: The name of the container group.
         * <p>
         * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
         * <p>
         * @return {@code this}
         * @param containerGroupName Property containerGroupName: The name of the container group. This parameter is required.
         */
        public Builder containerGroupName(final com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }

        /**
         * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information. This parameter is required.
         */
        public Builder acrRegistryInfo(final com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }
        /**
         * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information. This parameter is required.
         */
        public Builder acrRegistryInfo(final java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }

        /**
         * Property activeDeadlineSeconds: The validity period in seconds.
         * <p>
         * @return {@code this}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period in seconds. This parameter is required.
         */
        public Builder activeDeadlineSeconds(final java.lang.Number activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }
        /**
         * Property activeDeadlineSeconds: The validity period in seconds.
         * <p>
         * @return {@code this}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period in seconds. This parameter is required.
         */
        public Builder activeDeadlineSeconds(final com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }

        /**
         * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache. This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache. This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * Property cpu: CPU size.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: CPU size. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: CPU size.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: CPU size. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property dnsConfig: The information about DNS configurations.
         * <p>
         * @return {@code this}
         * @param dnsConfig Property dnsConfig: The information about DNS configurations. This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.core.IResolvable dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }
        /**
         * Property dnsConfig: The information about DNS configurations.
         * <p>
         * @return {@code this}
         * @param dnsConfig Property dnsConfig: The information about DNS configurations. This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }

        /**
         * Property eipInstanceId: Elastic IP ID.
         * <p>
         * @return {@code this}
         * @param eipInstanceId Property eipInstanceId: Elastic IP ID. This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }
        /**
         * Property eipInstanceId: Elastic IP ID.
         * <p>
         * @return {@code this}
         * @param eipInstanceId Property eipInstanceId: Elastic IP ID. This parameter is required.
         */
        public Builder eipInstanceId(final com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * Property hostAliase: Customize the hostname mapping of a container inside the pod.
         * <p>
         * @return {@code this}
         * @param hostAliase Property hostAliase: Customize the hostname mapping of a container inside the pod. This parameter is required.
         */
        public Builder hostAliase(final com.aliyun.ros.cdk.core.IResolvable hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }
        /**
         * Property hostAliase: Customize the hostname mapping of a container inside the pod.
         * <p>
         * @return {@code this}
         * @param hostAliase Property hostAliase: Customize the hostname mapping of a container inside the pod. This parameter is required.
         */
        public Builder hostAliase(final java.util.List<? extends java.lang.Object> hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }

        /**
         * Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredential Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password. This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredential Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password. This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }

        /**
         * Property imageSnapshotId: Image cache ID or snapshot ID.
         * <p>
         * @return {@code this}
         * @param imageSnapshotId Property imageSnapshotId: Image cache ID or snapshot ID. This parameter is required.
         */
        public Builder imageSnapshotId(final java.lang.String imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }
        /**
         * Property imageSnapshotId: Image cache ID or snapshot ID.
         * <p>
         * @return {@code this}
         * @param imageSnapshotId Property imageSnapshotId: Image cache ID or snapshot ID. This parameter is required.
         */
        public Builder imageSnapshotId(final com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }

        /**
         * Property initContainer: The containers that constitute the container group for initializing.
         * <p>
         * @return {@code this}
         * @param initContainer Property initContainer: The containers that constitute the container group for initializing. This parameter is required.
         */
        public Builder initContainer(final com.aliyun.ros.cdk.core.IResolvable initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }
        /**
         * Property initContainer: The containers that constitute the container group for initializing.
         * <p>
         * @return {@code this}
         * @param initContainer Property initContainer: The containers that constitute the container group for initializing. This parameter is required.
         */
        public Builder initContainer(final java.util.List<? extends java.lang.Object> initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }

        /**
         * Property instanceType: The type of the ECS instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the ECS instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the ECS instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the ECS instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property ipv6AddressCount: The number of IPv6 addresses.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: The number of IPv6 addresses.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property memory: memory size.
         * <p>
         * @return {@code this}
         * @param memory Property memory: memory size. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: memory size.
         * <p>
         * @return {@code this}
         * @param memory Property memory: memory size. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property ramRoleName: The RAM role that the container group assumes.
         * <p>
         * ECI and ECS share the same RAM role.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The RAM role that the container group assumes. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: The RAM role that the container group assumes.
         * <p>
         * ECI and ECS share the same RAM role.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The RAM role that the container group assumes. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property restartPolicy: The policy for restarting the instance.
         * <p>
         * Default value: Always.
         * <p>
         * @return {@code this}
         * @param restartPolicy Property restartPolicy: The policy for restarting the instance. This parameter is required.
         */
        public Builder restartPolicy(final java.lang.String restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }
        /**
         * Property restartPolicy: The policy for restarting the instance.
         * <p>
         * Default value: Always.
         * <p>
         * @return {@code this}
         * @param restartPolicy Property restartPolicy: The policy for restarting the instance. This parameter is required.
         */
        public Builder restartPolicy(final com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }

        /**
         * Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
         * <p>
         * Currently only two Sysctl keyNames are supported:
         * Kernel.shm_rmid_forced
         * Kernel.msgmax
         * <p>
         * @return {@code this}
         * @param securityContextSysctl Property securityContextSysctl: ECI Sysctl is valid for every container in ECI. This parameter is required.
         */
        public Builder securityContextSysctl(final com.aliyun.ros.cdk.core.IResolvable securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }
        /**
         * Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
         * <p>
         * Currently only two Sysctl keyNames are supported:
         * Kernel.shm_rmid_forced
         * Kernel.msgmax
         * <p>
         * @return {@code this}
         * @param securityContextSysctl Property securityContextSysctl: ECI Sysctl is valid for every container in ECI. This parameter is required.
         */
        public Builder securityContextSysctl(final java.util.List<? extends java.lang.Object> securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * Instances in the same security group can access one another.
         * If no security group is specified, the system automatically uses the default security group in the region you select.
         * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * Instances in the same security group can access one another.
         * If no security group is specified, the system automatically uses the default security group in the region you select.
         * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property slsEnable: Enable user log collection.
         * <p>
         * The default is False.
         * <p>
         * @return {@code this}
         * @param slsEnable Property slsEnable: Enable user log collection. This parameter is required.
         */
        public Builder slsEnable(final java.lang.Boolean slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }
        /**
         * Property slsEnable: Enable user log collection.
         * <p>
         * The default is False.
         * <p>
         * @return {@code this}
         * @param slsEnable Property slsEnable: Enable user log collection. This parameter is required.
         */
        public Builder slsEnable(final com.aliyun.ros.cdk.core.IResolvable slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }

        /**
         * Property spotPriceLimit: Set the hourly maximum price of the instance.
         * <p>
         * It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price of the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: Set the hourly maximum price of the instance.
         * <p>
         * It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price of the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotStrategy: Instance preemption strategy.
         * <p>
         * Ranges:
         * NoSpot (default): normal pay-as-you-go instances.
         * SpotWithPriceLimit: Preemptive instance that sets a cap price.
         * SpotAsPriceGo: The system automatically bids, following the current market actual price.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Instance preemption strategy. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: Instance preemption strategy.
         * <p>
         * Ranges:
         * NoSpot (default): normal pay-as-you-go instances.
         * SpotWithPriceLimit: Preemptive instance that sets a cap price.
         * SpotAsPriceGo: The system automatically bids, following the current market actual price.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Instance preemption strategy. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property tag: The list of container group tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for each container group.
         * <p>
         * @return {@code this}
         * @param tag Property tag: The list of container group tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag: The list of container group tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for each container group.
         * <p>
         * @return {@code this}
         * @param tag Property tag: The list of container group tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }
        /**
         * Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * Property volume: The data volume.
         * <p>
         * You can specify a maximum of 20 data volumes.
         * <p>
         * @return {@code this}
         * @param volume Property volume: The data volume. This parameter is required.
         */
        public Builder volume(final com.aliyun.ros.cdk.core.IResolvable volume) {
            this.props.volume(volume);
            return this;
        }
        /**
         * Property volume: The data volume.
         * <p>
         * You can specify a maximum of 20 data volumes.
         * <p>
         * @return {@code this}
         * @param volume Property volume: The data volume. This parameter is required.
         */
        public Builder volume(final java.util.List<? extends java.lang.Object> volume) {
            this.props.volume(volume);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the specified VSwitch.
         * <p>
         * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
         * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the specified VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the specified VSwitch.
         * <p>
         * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
         * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the specified VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone in which the instance resides.
         * <p>
         * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance resides. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which the instance resides.
         * <p>
         * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance resides. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eci.ContainerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.ContainerGroup build() {
            return new com.aliyun.ros.cdk.eci.ContainerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

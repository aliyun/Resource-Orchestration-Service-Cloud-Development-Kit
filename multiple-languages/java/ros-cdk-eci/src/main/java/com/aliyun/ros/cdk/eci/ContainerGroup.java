package com.aliyun.ros.cdk.eci;

/**
 * A ROS resource type:  `ALIYUN::ECI::ContainerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.481Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ContainerGroup")
public class ContainerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ContainerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ContainerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ContainerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ContainerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEniInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrEniInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Address() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.ContainerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.ContainerGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @return {@code this}
         * @param container This parameter is required.
         */
        public Builder container(final com.aliyun.ros.cdk.core.IResolvable container) {
            this.props.container(container);
            return this;
        }
        /**
         * @return {@code this}
         * @param container This parameter is required.
         */
        public Builder container(final java.util.List<? extends java.lang.Object> container) {
            this.props.container(container);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerGroupName This parameter is required.
         */
        public Builder containerGroupName(final java.lang.String containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param activeDeadlineSeconds This parameter is required.
         */
        public Builder activeDeadlineSeconds(final java.lang.Number activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsConfig This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.core.IResolvable dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsConfig This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostAliase This parameter is required.
         */
        public Builder hostAliase(final com.aliyun.ros.cdk.core.IResolvable hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostAliase This parameter is required.
         */
        public Builder hostAliase(final java.util.List<? extends java.lang.Object> hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageSnapshotId This parameter is required.
         */
        public Builder imageSnapshotId(final java.lang.String imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }

        /**
         * @return {@code this}
         * @param initContainer This parameter is required.
         */
        public Builder initContainer(final com.aliyun.ros.cdk.core.IResolvable initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }
        /**
         * @return {@code this}
         * @param initContainer This parameter is required.
         */
        public Builder initContainer(final java.util.List<? extends java.lang.Object> initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param restartPolicy This parameter is required.
         */
        public Builder restartPolicy(final java.lang.String restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityContextSysctl This parameter is required.
         */
        public Builder securityContextSysctl(final com.aliyun.ros.cdk.core.IResolvable securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityContextSysctl This parameter is required.
         */
        public Builder securityContextSysctl(final java.util.List<? extends java.lang.Object> securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsEnable This parameter is required.
         */
        public Builder slsEnable(final java.lang.Boolean slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsEnable This parameter is required.
         */
        public Builder slsEnable(final com.aliyun.ros.cdk.core.IResolvable slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param tag This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * @return {@code this}
         * @param tag This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param volume This parameter is required.
         */
        public Builder volume(final com.aliyun.ros.cdk.core.IResolvable volume) {
            this.props.volume(volume);
            return this;
        }
        /**
         * @return {@code this}
         * @param volume This parameter is required.
         */
        public Builder volume(final java.util.List<? extends java.lang.Object> volume) {
            this.props.volume(volume);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.eci.ContainerGroup}.
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

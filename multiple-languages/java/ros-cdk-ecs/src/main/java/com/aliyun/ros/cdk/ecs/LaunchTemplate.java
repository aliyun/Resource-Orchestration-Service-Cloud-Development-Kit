package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::LaunchTemplate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:09.941Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.LaunchTemplate")
public class LaunchTemplate extends com.aliyun.ros.cdk.core.Resource {

    protected LaunchTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LaunchTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public LaunchTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public LaunchTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.LaunchTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.LaunchTemplate> {
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
        private final com.aliyun.ros.cdk.ecs.LaunchTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.LaunchTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param launchTemplateName This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoReleaseTime This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostName This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
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
         * @param internetChargeType This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthIn This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthOut This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkInterfaces This parameter is required.
         */
        public Builder networkInterfaces(final com.aliyun.ros.cdk.core.IResolvable networkInterfaces) {
            this.props.networkInterfaces(networkInterfaces);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkInterfaces This parameter is required.
         */
        public Builder networkInterfaces(final java.util.List<? extends java.lang.Object> networkInterfaces) {
            this.props.networkInterfaces(networkInterfaces);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
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
         * @param securityEnhancementStrategy This parameter is required.
         */
        public Builder securityEnhancementStrategy(final java.lang.String securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
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
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.String spotPriceLimit) {
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
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDescription This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDiskName This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskSize This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateTags This parameter is required.
         */
        public Builder templateTags(final com.aliyun.ros.cdk.core.IResolvable templateTags) {
            this.props.templateTags(templateTags);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateTags This parameter is required.
         */
        public Builder templateTags(final java.util.List<? extends java.lang.Object> templateTags) {
            this.props.templateTags(templateTags);
            return this;
        }

        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionDescription This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
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
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.LaunchTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.LaunchTemplate build() {
            return new com.aliyun.ros.cdk.ecs.LaunchTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

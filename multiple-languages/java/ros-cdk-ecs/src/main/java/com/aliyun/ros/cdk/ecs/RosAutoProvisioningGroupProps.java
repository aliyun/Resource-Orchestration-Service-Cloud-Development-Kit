package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::AutoProvisioningGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.033Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoProvisioningGroupProps.Jsii$Proxy.class)
public interface RosAutoProvisioningGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTotalTargetCapacity();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoProvisioningGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoProvisioningGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckExecutionStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultTargetCapacityType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcessCapacityTerminationPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxSpotPrice() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayAsYouGoAllocationStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayAsYouGoTargetCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotAllocationStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceInterruptionBehavior() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstancePoolsToUseCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotTargetCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstances() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstancesWithExpiration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidFrom() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidUntil() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAutoProvisioningGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAutoProvisioningGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAutoProvisioningGroupProps> {
        java.lang.Object totalTargetCapacity;
        java.lang.Object autoProvisioningGroupName;
        java.lang.Object autoProvisioningGroupType;
        java.lang.Object checkExecutionStatus;
        java.lang.Object defaultTargetCapacityType;
        java.lang.Object description;
        java.lang.Object excessCapacityTerminationPolicy;
        java.lang.Object launchConfiguration;
        java.lang.Object launchTemplateConfig;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateVersion;
        java.lang.Object maxSpotPrice;
        java.lang.Object payAsYouGoAllocationStrategy;
        java.lang.Object payAsYouGoTargetCapacity;
        java.lang.Object spotAllocationStrategy;
        java.lang.Object spotInstanceInterruptionBehavior;
        java.lang.Object spotInstancePoolsToUseCount;
        java.lang.Object spotTargetCapacity;
        java.lang.Object terminateInstances;
        java.lang.Object terminateInstancesWithExpiration;
        java.lang.Object validFrom;
        java.lang.Object validUntil;

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTotalTargetCapacity}
         * @param totalTargetCapacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder totalTargetCapacity(java.lang.String totalTargetCapacity) {
            this.totalTargetCapacity = totalTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTotalTargetCapacity}
         * @param totalTargetCapacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder totalTargetCapacity(com.aliyun.ros.cdk.core.IResolvable totalTargetCapacity) {
            this.totalTargetCapacity = totalTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getAutoProvisioningGroupName}
         * @param autoProvisioningGroupName the value to be set.
         * @return {@code this}
         */
        public Builder autoProvisioningGroupName(java.lang.String autoProvisioningGroupName) {
            this.autoProvisioningGroupName = autoProvisioningGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getAutoProvisioningGroupName}
         * @param autoProvisioningGroupName the value to be set.
         * @return {@code this}
         */
        public Builder autoProvisioningGroupName(com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupName) {
            this.autoProvisioningGroupName = autoProvisioningGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getAutoProvisioningGroupType}
         * @param autoProvisioningGroupType the value to be set.
         * @return {@code this}
         */
        public Builder autoProvisioningGroupType(java.lang.String autoProvisioningGroupType) {
            this.autoProvisioningGroupType = autoProvisioningGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getAutoProvisioningGroupType}
         * @param autoProvisioningGroupType the value to be set.
         * @return {@code this}
         */
        public Builder autoProvisioningGroupType(com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupType) {
            this.autoProvisioningGroupType = autoProvisioningGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getCheckExecutionStatus}
         * @param checkExecutionStatus the value to be set.
         * @return {@code this}
         */
        public Builder checkExecutionStatus(java.lang.Boolean checkExecutionStatus) {
            this.checkExecutionStatus = checkExecutionStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getCheckExecutionStatus}
         * @param checkExecutionStatus the value to be set.
         * @return {@code this}
         */
        public Builder checkExecutionStatus(com.aliyun.ros.cdk.core.IResolvable checkExecutionStatus) {
            this.checkExecutionStatus = checkExecutionStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getDefaultTargetCapacityType}
         * @param defaultTargetCapacityType the value to be set.
         * @return {@code this}
         */
        public Builder defaultTargetCapacityType(java.lang.String defaultTargetCapacityType) {
            this.defaultTargetCapacityType = defaultTargetCapacityType;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getDefaultTargetCapacityType}
         * @param defaultTargetCapacityType the value to be set.
         * @return {@code this}
         */
        public Builder defaultTargetCapacityType(com.aliyun.ros.cdk.core.IResolvable defaultTargetCapacityType) {
            this.defaultTargetCapacityType = defaultTargetCapacityType;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getExcessCapacityTerminationPolicy}
         * @param excessCapacityTerminationPolicy the value to be set.
         * @return {@code this}
         */
        public Builder excessCapacityTerminationPolicy(java.lang.String excessCapacityTerminationPolicy) {
            this.excessCapacityTerminationPolicy = excessCapacityTerminationPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getExcessCapacityTerminationPolicy}
         * @param excessCapacityTerminationPolicy the value to be set.
         * @return {@code this}
         */
        public Builder excessCapacityTerminationPolicy(com.aliyun.ros.cdk.core.IResolvable excessCapacityTerminationPolicy) {
            this.excessCapacityTerminationPolicy = excessCapacityTerminationPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchConfiguration}
         * @param launchConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder launchConfiguration(com.aliyun.ros.cdk.core.IResolvable launchConfiguration) {
            this.launchConfiguration = launchConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchConfiguration}
         * @param launchConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder launchConfiguration(com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty launchConfiguration) {
            this.launchConfiguration = launchConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateConfig}
         * @param launchTemplateConfig the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateConfig(com.aliyun.ros.cdk.core.IResolvable launchTemplateConfig) {
            this.launchTemplateConfig = launchTemplateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateConfig}
         * @param launchTemplateConfig the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateConfig(java.util.List<? extends java.lang.Object> launchTemplateConfig) {
            this.launchTemplateConfig = launchTemplateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getMaxSpotPrice}
         * @param maxSpotPrice the value to be set.
         * @return {@code this}
         */
        public Builder maxSpotPrice(java.lang.Number maxSpotPrice) {
            this.maxSpotPrice = maxSpotPrice;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getMaxSpotPrice}
         * @param maxSpotPrice the value to be set.
         * @return {@code this}
         */
        public Builder maxSpotPrice(com.aliyun.ros.cdk.core.IResolvable maxSpotPrice) {
            this.maxSpotPrice = maxSpotPrice;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getPayAsYouGoAllocationStrategy}
         * @param payAsYouGoAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder payAsYouGoAllocationStrategy(java.lang.String payAsYouGoAllocationStrategy) {
            this.payAsYouGoAllocationStrategy = payAsYouGoAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getPayAsYouGoAllocationStrategy}
         * @param payAsYouGoAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder payAsYouGoAllocationStrategy(com.aliyun.ros.cdk.core.IResolvable payAsYouGoAllocationStrategy) {
            this.payAsYouGoAllocationStrategy = payAsYouGoAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getPayAsYouGoTargetCapacity}
         * @param payAsYouGoTargetCapacity the value to be set.
         * @return {@code this}
         */
        public Builder payAsYouGoTargetCapacity(java.lang.String payAsYouGoTargetCapacity) {
            this.payAsYouGoTargetCapacity = payAsYouGoTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getPayAsYouGoTargetCapacity}
         * @param payAsYouGoTargetCapacity the value to be set.
         * @return {@code this}
         */
        public Builder payAsYouGoTargetCapacity(com.aliyun.ros.cdk.core.IResolvable payAsYouGoTargetCapacity) {
            this.payAsYouGoTargetCapacity = payAsYouGoTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotAllocationStrategy}
         * @param spotAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotAllocationStrategy(java.lang.String spotAllocationStrategy) {
            this.spotAllocationStrategy = spotAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotAllocationStrategy}
         * @param spotAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotAllocationStrategy(com.aliyun.ros.cdk.core.IResolvable spotAllocationStrategy) {
            this.spotAllocationStrategy = spotAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotInstanceInterruptionBehavior}
         * @param spotInstanceInterruptionBehavior the value to be set.
         * @return {@code this}
         */
        public Builder spotInstanceInterruptionBehavior(java.lang.String spotInstanceInterruptionBehavior) {
            this.spotInstanceInterruptionBehavior = spotInstanceInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotInstanceInterruptionBehavior}
         * @param spotInstanceInterruptionBehavior the value to be set.
         * @return {@code this}
         */
        public Builder spotInstanceInterruptionBehavior(com.aliyun.ros.cdk.core.IResolvable spotInstanceInterruptionBehavior) {
            this.spotInstanceInterruptionBehavior = spotInstanceInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotInstancePoolsToUseCount}
         * @param spotInstancePoolsToUseCount the value to be set.
         * @return {@code this}
         */
        public Builder spotInstancePoolsToUseCount(java.lang.Number spotInstancePoolsToUseCount) {
            this.spotInstancePoolsToUseCount = spotInstancePoolsToUseCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotInstancePoolsToUseCount}
         * @param spotInstancePoolsToUseCount the value to be set.
         * @return {@code this}
         */
        public Builder spotInstancePoolsToUseCount(com.aliyun.ros.cdk.core.IResolvable spotInstancePoolsToUseCount) {
            this.spotInstancePoolsToUseCount = spotInstancePoolsToUseCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotTargetCapacity}
         * @param spotTargetCapacity the value to be set.
         * @return {@code this}
         */
        public Builder spotTargetCapacity(java.lang.String spotTargetCapacity) {
            this.spotTargetCapacity = spotTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getSpotTargetCapacity}
         * @param spotTargetCapacity the value to be set.
         * @return {@code this}
         */
        public Builder spotTargetCapacity(com.aliyun.ros.cdk.core.IResolvable spotTargetCapacity) {
            this.spotTargetCapacity = spotTargetCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTerminateInstances}
         * @param terminateInstances the value to be set.
         * @return {@code this}
         */
        public Builder terminateInstances(java.lang.Boolean terminateInstances) {
            this.terminateInstances = terminateInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTerminateInstances}
         * @param terminateInstances the value to be set.
         * @return {@code this}
         */
        public Builder terminateInstances(com.aliyun.ros.cdk.core.IResolvable terminateInstances) {
            this.terminateInstances = terminateInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTerminateInstancesWithExpiration}
         * @param terminateInstancesWithExpiration the value to be set.
         * @return {@code this}
         */
        public Builder terminateInstancesWithExpiration(java.lang.Boolean terminateInstancesWithExpiration) {
            this.terminateInstancesWithExpiration = terminateInstancesWithExpiration;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getTerminateInstancesWithExpiration}
         * @param terminateInstancesWithExpiration the value to be set.
         * @return {@code this}
         */
        public Builder terminateInstancesWithExpiration(com.aliyun.ros.cdk.core.IResolvable terminateInstancesWithExpiration) {
            this.terminateInstancesWithExpiration = terminateInstancesWithExpiration;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getValidFrom}
         * @param validFrom the value to be set.
         * @return {@code this}
         */
        public Builder validFrom(java.lang.String validFrom) {
            this.validFrom = validFrom;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getValidFrom}
         * @param validFrom the value to be set.
         * @return {@code this}
         */
        public Builder validFrom(com.aliyun.ros.cdk.core.IResolvable validFrom) {
            this.validFrom = validFrom;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getValidUntil}
         * @param validUntil the value to be set.
         * @return {@code this}
         */
        public Builder validUntil(java.lang.String validUntil) {
            this.validUntil = validUntil;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoProvisioningGroupProps#getValidUntil}
         * @param validUntil the value to be set.
         * @return {@code this}
         */
        public Builder validUntil(com.aliyun.ros.cdk.core.IResolvable validUntil) {
            this.validUntil = validUntil;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoProvisioningGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoProvisioningGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAutoProvisioningGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoProvisioningGroupProps {
        private final java.lang.Object totalTargetCapacity;
        private final java.lang.Object autoProvisioningGroupName;
        private final java.lang.Object autoProvisioningGroupType;
        private final java.lang.Object checkExecutionStatus;
        private final java.lang.Object defaultTargetCapacityType;
        private final java.lang.Object description;
        private final java.lang.Object excessCapacityTerminationPolicy;
        private final java.lang.Object launchConfiguration;
        private final java.lang.Object launchTemplateConfig;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object maxSpotPrice;
        private final java.lang.Object payAsYouGoAllocationStrategy;
        private final java.lang.Object payAsYouGoTargetCapacity;
        private final java.lang.Object spotAllocationStrategy;
        private final java.lang.Object spotInstanceInterruptionBehavior;
        private final java.lang.Object spotInstancePoolsToUseCount;
        private final java.lang.Object spotTargetCapacity;
        private final java.lang.Object terminateInstances;
        private final java.lang.Object terminateInstancesWithExpiration;
        private final java.lang.Object validFrom;
        private final java.lang.Object validUntil;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.totalTargetCapacity = software.amazon.jsii.Kernel.get(this, "totalTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoProvisioningGroupName = software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoProvisioningGroupType = software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkExecutionStatus = software.amazon.jsii.Kernel.get(this, "checkExecutionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultTargetCapacityType = software.amazon.jsii.Kernel.get(this, "defaultTargetCapacityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excessCapacityTerminationPolicy = software.amazon.jsii.Kernel.get(this, "excessCapacityTerminationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchConfiguration = software.amazon.jsii.Kernel.get(this, "launchConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateConfig = software.amazon.jsii.Kernel.get(this, "launchTemplateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxSpotPrice = software.amazon.jsii.Kernel.get(this, "maxSpotPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payAsYouGoAllocationStrategy = software.amazon.jsii.Kernel.get(this, "payAsYouGoAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payAsYouGoTargetCapacity = software.amazon.jsii.Kernel.get(this, "payAsYouGoTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotAllocationStrategy = software.amazon.jsii.Kernel.get(this, "spotAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInstanceInterruptionBehavior = software.amazon.jsii.Kernel.get(this, "spotInstanceInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInstancePoolsToUseCount = software.amazon.jsii.Kernel.get(this, "spotInstancePoolsToUseCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotTargetCapacity = software.amazon.jsii.Kernel.get(this, "spotTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.terminateInstances = software.amazon.jsii.Kernel.get(this, "terminateInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.terminateInstancesWithExpiration = software.amazon.jsii.Kernel.get(this, "terminateInstancesWithExpiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validFrom = software.amazon.jsii.Kernel.get(this, "validFrom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validUntil = software.amazon.jsii.Kernel.get(this, "validUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.totalTargetCapacity = java.util.Objects.requireNonNull(builder.totalTargetCapacity, "totalTargetCapacity is required");
            this.autoProvisioningGroupName = builder.autoProvisioningGroupName;
            this.autoProvisioningGroupType = builder.autoProvisioningGroupType;
            this.checkExecutionStatus = builder.checkExecutionStatus;
            this.defaultTargetCapacityType = builder.defaultTargetCapacityType;
            this.description = builder.description;
            this.excessCapacityTerminationPolicy = builder.excessCapacityTerminationPolicy;
            this.launchConfiguration = builder.launchConfiguration;
            this.launchTemplateConfig = builder.launchTemplateConfig;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateVersion = builder.launchTemplateVersion;
            this.maxSpotPrice = builder.maxSpotPrice;
            this.payAsYouGoAllocationStrategy = builder.payAsYouGoAllocationStrategy;
            this.payAsYouGoTargetCapacity = builder.payAsYouGoTargetCapacity;
            this.spotAllocationStrategy = builder.spotAllocationStrategy;
            this.spotInstanceInterruptionBehavior = builder.spotInstanceInterruptionBehavior;
            this.spotInstancePoolsToUseCount = builder.spotInstancePoolsToUseCount;
            this.spotTargetCapacity = builder.spotTargetCapacity;
            this.terminateInstances = builder.terminateInstances;
            this.terminateInstancesWithExpiration = builder.terminateInstancesWithExpiration;
            this.validFrom = builder.validFrom;
            this.validUntil = builder.validUntil;
        }

        @Override
        public final java.lang.Object getTotalTargetCapacity() {
            return this.totalTargetCapacity;
        }

        @Override
        public final java.lang.Object getAutoProvisioningGroupName() {
            return this.autoProvisioningGroupName;
        }

        @Override
        public final java.lang.Object getAutoProvisioningGroupType() {
            return this.autoProvisioningGroupType;
        }

        @Override
        public final java.lang.Object getCheckExecutionStatus() {
            return this.checkExecutionStatus;
        }

        @Override
        public final java.lang.Object getDefaultTargetCapacityType() {
            return this.defaultTargetCapacityType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getExcessCapacityTerminationPolicy() {
            return this.excessCapacityTerminationPolicy;
        }

        @Override
        public final java.lang.Object getLaunchConfiguration() {
            return this.launchConfiguration;
        }

        @Override
        public final java.lang.Object getLaunchTemplateConfig() {
            return this.launchTemplateConfig;
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateVersion() {
            return this.launchTemplateVersion;
        }

        @Override
        public final java.lang.Object getMaxSpotPrice() {
            return this.maxSpotPrice;
        }

        @Override
        public final java.lang.Object getPayAsYouGoAllocationStrategy() {
            return this.payAsYouGoAllocationStrategy;
        }

        @Override
        public final java.lang.Object getPayAsYouGoTargetCapacity() {
            return this.payAsYouGoTargetCapacity;
        }

        @Override
        public final java.lang.Object getSpotAllocationStrategy() {
            return this.spotAllocationStrategy;
        }

        @Override
        public final java.lang.Object getSpotInstanceInterruptionBehavior() {
            return this.spotInstanceInterruptionBehavior;
        }

        @Override
        public final java.lang.Object getSpotInstancePoolsToUseCount() {
            return this.spotInstancePoolsToUseCount;
        }

        @Override
        public final java.lang.Object getSpotTargetCapacity() {
            return this.spotTargetCapacity;
        }

        @Override
        public final java.lang.Object getTerminateInstances() {
            return this.terminateInstances;
        }

        @Override
        public final java.lang.Object getTerminateInstancesWithExpiration() {
            return this.terminateInstancesWithExpiration;
        }

        @Override
        public final java.lang.Object getValidFrom() {
            return this.validFrom;
        }

        @Override
        public final java.lang.Object getValidUntil() {
            return this.validUntil;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("totalTargetCapacity", om.valueToTree(this.getTotalTargetCapacity()));
            if (this.getAutoProvisioningGroupName() != null) {
                data.set("autoProvisioningGroupName", om.valueToTree(this.getAutoProvisioningGroupName()));
            }
            if (this.getAutoProvisioningGroupType() != null) {
                data.set("autoProvisioningGroupType", om.valueToTree(this.getAutoProvisioningGroupType()));
            }
            if (this.getCheckExecutionStatus() != null) {
                data.set("checkExecutionStatus", om.valueToTree(this.getCheckExecutionStatus()));
            }
            if (this.getDefaultTargetCapacityType() != null) {
                data.set("defaultTargetCapacityType", om.valueToTree(this.getDefaultTargetCapacityType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getExcessCapacityTerminationPolicy() != null) {
                data.set("excessCapacityTerminationPolicy", om.valueToTree(this.getExcessCapacityTerminationPolicy()));
            }
            if (this.getLaunchConfiguration() != null) {
                data.set("launchConfiguration", om.valueToTree(this.getLaunchConfiguration()));
            }
            if (this.getLaunchTemplateConfig() != null) {
                data.set("launchTemplateConfig", om.valueToTree(this.getLaunchTemplateConfig()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getMaxSpotPrice() != null) {
                data.set("maxSpotPrice", om.valueToTree(this.getMaxSpotPrice()));
            }
            if (this.getPayAsYouGoAllocationStrategy() != null) {
                data.set("payAsYouGoAllocationStrategy", om.valueToTree(this.getPayAsYouGoAllocationStrategy()));
            }
            if (this.getPayAsYouGoTargetCapacity() != null) {
                data.set("payAsYouGoTargetCapacity", om.valueToTree(this.getPayAsYouGoTargetCapacity()));
            }
            if (this.getSpotAllocationStrategy() != null) {
                data.set("spotAllocationStrategy", om.valueToTree(this.getSpotAllocationStrategy()));
            }
            if (this.getSpotInstanceInterruptionBehavior() != null) {
                data.set("spotInstanceInterruptionBehavior", om.valueToTree(this.getSpotInstanceInterruptionBehavior()));
            }
            if (this.getSpotInstancePoolsToUseCount() != null) {
                data.set("spotInstancePoolsToUseCount", om.valueToTree(this.getSpotInstancePoolsToUseCount()));
            }
            if (this.getSpotTargetCapacity() != null) {
                data.set("spotTargetCapacity", om.valueToTree(this.getSpotTargetCapacity()));
            }
            if (this.getTerminateInstances() != null) {
                data.set("terminateInstances", om.valueToTree(this.getTerminateInstances()));
            }
            if (this.getTerminateInstancesWithExpiration() != null) {
                data.set("terminateInstancesWithExpiration", om.valueToTree(this.getTerminateInstancesWithExpiration()));
            }
            if (this.getValidFrom() != null) {
                data.set("validFrom", om.valueToTree(this.getValidFrom()));
            }
            if (this.getValidUntil() != null) {
                data.set("validUntil", om.valueToTree(this.getValidUntil()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAutoProvisioningGroupProps.Jsii$Proxy that = (RosAutoProvisioningGroupProps.Jsii$Proxy) o;

            if (!totalTargetCapacity.equals(that.totalTargetCapacity)) return false;
            if (this.autoProvisioningGroupName != null ? !this.autoProvisioningGroupName.equals(that.autoProvisioningGroupName) : that.autoProvisioningGroupName != null) return false;
            if (this.autoProvisioningGroupType != null ? !this.autoProvisioningGroupType.equals(that.autoProvisioningGroupType) : that.autoProvisioningGroupType != null) return false;
            if (this.checkExecutionStatus != null ? !this.checkExecutionStatus.equals(that.checkExecutionStatus) : that.checkExecutionStatus != null) return false;
            if (this.defaultTargetCapacityType != null ? !this.defaultTargetCapacityType.equals(that.defaultTargetCapacityType) : that.defaultTargetCapacityType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.excessCapacityTerminationPolicy != null ? !this.excessCapacityTerminationPolicy.equals(that.excessCapacityTerminationPolicy) : that.excessCapacityTerminationPolicy != null) return false;
            if (this.launchConfiguration != null ? !this.launchConfiguration.equals(that.launchConfiguration) : that.launchConfiguration != null) return false;
            if (this.launchTemplateConfig != null ? !this.launchTemplateConfig.equals(that.launchTemplateConfig) : that.launchTemplateConfig != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.maxSpotPrice != null ? !this.maxSpotPrice.equals(that.maxSpotPrice) : that.maxSpotPrice != null) return false;
            if (this.payAsYouGoAllocationStrategy != null ? !this.payAsYouGoAllocationStrategy.equals(that.payAsYouGoAllocationStrategy) : that.payAsYouGoAllocationStrategy != null) return false;
            if (this.payAsYouGoTargetCapacity != null ? !this.payAsYouGoTargetCapacity.equals(that.payAsYouGoTargetCapacity) : that.payAsYouGoTargetCapacity != null) return false;
            if (this.spotAllocationStrategy != null ? !this.spotAllocationStrategy.equals(that.spotAllocationStrategy) : that.spotAllocationStrategy != null) return false;
            if (this.spotInstanceInterruptionBehavior != null ? !this.spotInstanceInterruptionBehavior.equals(that.spotInstanceInterruptionBehavior) : that.spotInstanceInterruptionBehavior != null) return false;
            if (this.spotInstancePoolsToUseCount != null ? !this.spotInstancePoolsToUseCount.equals(that.spotInstancePoolsToUseCount) : that.spotInstancePoolsToUseCount != null) return false;
            if (this.spotTargetCapacity != null ? !this.spotTargetCapacity.equals(that.spotTargetCapacity) : that.spotTargetCapacity != null) return false;
            if (this.terminateInstances != null ? !this.terminateInstances.equals(that.terminateInstances) : that.terminateInstances != null) return false;
            if (this.terminateInstancesWithExpiration != null ? !this.terminateInstancesWithExpiration.equals(that.terminateInstancesWithExpiration) : that.terminateInstancesWithExpiration != null) return false;
            if (this.validFrom != null ? !this.validFrom.equals(that.validFrom) : that.validFrom != null) return false;
            return this.validUntil != null ? this.validUntil.equals(that.validUntil) : that.validUntil == null;
        }

        @Override
        public final int hashCode() {
            int result = this.totalTargetCapacity.hashCode();
            result = 31 * result + (this.autoProvisioningGroupName != null ? this.autoProvisioningGroupName.hashCode() : 0);
            result = 31 * result + (this.autoProvisioningGroupType != null ? this.autoProvisioningGroupType.hashCode() : 0);
            result = 31 * result + (this.checkExecutionStatus != null ? this.checkExecutionStatus.hashCode() : 0);
            result = 31 * result + (this.defaultTargetCapacityType != null ? this.defaultTargetCapacityType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.excessCapacityTerminationPolicy != null ? this.excessCapacityTerminationPolicy.hashCode() : 0);
            result = 31 * result + (this.launchConfiguration != null ? this.launchConfiguration.hashCode() : 0);
            result = 31 * result + (this.launchTemplateConfig != null ? this.launchTemplateConfig.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.maxSpotPrice != null ? this.maxSpotPrice.hashCode() : 0);
            result = 31 * result + (this.payAsYouGoAllocationStrategy != null ? this.payAsYouGoAllocationStrategy.hashCode() : 0);
            result = 31 * result + (this.payAsYouGoTargetCapacity != null ? this.payAsYouGoTargetCapacity.hashCode() : 0);
            result = 31 * result + (this.spotAllocationStrategy != null ? this.spotAllocationStrategy.hashCode() : 0);
            result = 31 * result + (this.spotInstanceInterruptionBehavior != null ? this.spotInstanceInterruptionBehavior.hashCode() : 0);
            result = 31 * result + (this.spotInstancePoolsToUseCount != null ? this.spotInstancePoolsToUseCount.hashCode() : 0);
            result = 31 * result + (this.spotTargetCapacity != null ? this.spotTargetCapacity.hashCode() : 0);
            result = 31 * result + (this.terminateInstances != null ? this.terminateInstances.hashCode() : 0);
            result = 31 * result + (this.terminateInstancesWithExpiration != null ? this.terminateInstancesWithExpiration.hashCode() : 0);
            result = 31 * result + (this.validFrom != null ? this.validFrom.hashCode() : 0);
            result = 31 * result + (this.validUntil != null ? this.validUntil.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:34.712Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup")
public class RosAutoProvisioningGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAutoProvisioningGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAutoProvisioningGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoProvisioningGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoProvisioningGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTotalTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "totalTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTotalTargetCapacity(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "totalTargetCapacity", java.util.Objects.requireNonNull(value, "totalTargetCapacity is required"));
    }

    /**
     */
    public void setTotalTargetCapacity(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "totalTargetCapacity", java.util.Objects.requireNonNull(value, "totalTargetCapacity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoProvisioningGroupName() {
        return software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoProvisioningGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupName", value);
    }

    /**
     */
    public void setAutoProvisioningGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoProvisioningGroupType() {
        return software.amazon.jsii.Kernel.get(this, "autoProvisioningGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoProvisioningGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupType", value);
    }

    /**
     */
    public void setAutoProvisioningGroupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoProvisioningGroupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckExecutionStatus() {
        return software.amazon.jsii.Kernel.get(this, "checkExecutionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckExecutionStatus(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "checkExecutionStatus", value);
    }

    /**
     */
    public void setCheckExecutionStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkExecutionStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultTargetCapacityType() {
        return software.amazon.jsii.Kernel.get(this, "defaultTargetCapacityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultTargetCapacityType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultTargetCapacityType", value);
    }

    /**
     */
    public void setDefaultTargetCapacityType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultTargetCapacityType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcessCapacityTerminationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "excessCapacityTerminationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcessCapacityTerminationPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excessCapacityTerminationPolicy", value);
    }

    /**
     */
    public void setExcessCapacityTerminationPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excessCapacityTerminationPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "launchConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchConfiguration", value);
    }

    /**
     */
    public void setLaunchConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "launchConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateConfig() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateConfig", value);
    }

    /**
     */
    public void setLaunchTemplateConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxSpotPrice() {
        return software.amazon.jsii.Kernel.get(this, "maxSpotPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxSpotPrice(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSpotPrice", value);
    }

    /**
     */
    public void setMaxSpotPrice(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxSpotPrice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayAsYouGoAllocationStrategy() {
        return software.amazon.jsii.Kernel.get(this, "payAsYouGoAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayAsYouGoAllocationStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoAllocationStrategy", value);
    }

    /**
     */
    public void setPayAsYouGoAllocationStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoAllocationStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayAsYouGoTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "payAsYouGoTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayAsYouGoTargetCapacity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoTargetCapacity", value);
    }

    /**
     */
    public void setPayAsYouGoTargetCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payAsYouGoTargetCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotAllocationStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotAllocationStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotAllocationStrategy", value);
    }

    /**
     */
    public void setSpotAllocationStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotAllocationStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceInterruptionBehavior() {
        return software.amazon.jsii.Kernel.get(this, "spotInstanceInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotInstanceInterruptionBehavior(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotInstanceInterruptionBehavior", value);
    }

    /**
     */
    public void setSpotInstanceInterruptionBehavior(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotInstanceInterruptionBehavior", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstancePoolsToUseCount() {
        return software.amazon.jsii.Kernel.get(this, "spotInstancePoolsToUseCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotInstancePoolsToUseCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotInstancePoolsToUseCount", value);
    }

    /**
     */
    public void setSpotInstancePoolsToUseCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotInstancePoolsToUseCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotTargetCapacity() {
        return software.amazon.jsii.Kernel.get(this, "spotTargetCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotTargetCapacity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotTargetCapacity", value);
    }

    /**
     */
    public void setSpotTargetCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotTargetCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstances() {
        return software.amazon.jsii.Kernel.get(this, "terminateInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminateInstances(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstances", value);
    }

    /**
     */
    public void setTerminateInstances(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstances", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminateInstancesWithExpiration() {
        return software.amazon.jsii.Kernel.get(this, "terminateInstancesWithExpiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminateInstancesWithExpiration(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstancesWithExpiration", value);
    }

    /**
     */
    public void setTerminateInstancesWithExpiration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminateInstancesWithExpiration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValidFrom() {
        return software.amazon.jsii.Kernel.get(this, "validFrom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValidFrom(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validFrom", value);
    }

    /**
     */
    public void setValidFrom(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "validFrom", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValidUntil() {
        return software.amazon.jsii.Kernel.get(this, "validUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValidUntil(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validUntil", value);
    }

    /**
     */
    public void setValidUntil(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "validUntil", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDiskProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDiskProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataDiskProperty> {
            java.lang.Object category;
            java.lang.Object deleteWithInstance;
            java.lang.Object description;
            java.lang.Object diskName;
            java.lang.Object encrypted;
            java.lang.Object internetChargeType;
            java.lang.Object kmsKeyId;
            java.lang.Object performanceLevel;
            java.lang.Object size;
            java.lang.Object snapshotId;

            /**
             * Sets the value of {@link DataDiskProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(java.lang.Boolean deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(java.lang.String diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.Boolean encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(java.lang.String internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(java.lang.String kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(java.lang.String snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Sets the value of {@link DataDiskProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataDiskProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataDiskProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataDiskProperty {
            private final java.lang.Object category;
            private final java.lang.Object deleteWithInstance;
            private final java.lang.Object description;
            private final java.lang.Object diskName;
            private final java.lang.Object encrypted;
            private final java.lang.Object internetChargeType;
            private final java.lang.Object kmsKeyId;
            private final java.lang.Object performanceLevel;
            private final java.lang.Object size;
            private final java.lang.Object snapshotId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = builder.category;
                this.deleteWithInstance = builder.deleteWithInstance;
                this.description = builder.description;
                this.diskName = builder.diskName;
                this.encrypted = builder.encrypted;
                this.internetChargeType = builder.internetChargeType;
                this.kmsKeyId = builder.kmsKeyId;
                this.performanceLevel = builder.performanceLevel;
                this.size = builder.size;
                this.snapshotId = builder.snapshotId;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getDeleteWithInstance() {
                return this.deleteWithInstance;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDiskName() {
                return this.diskName;
            }

            @Override
            public final java.lang.Object getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.Object getInternetChargeType() {
                return this.internetChargeType;
            }

            @Override
            public final java.lang.Object getKmsKeyId() {
                return this.kmsKeyId;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getSnapshotId() {
                return this.snapshotId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getDeleteWithInstance() != null) {
                    data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDiskName() != null) {
                    data.set("diskName", om.valueToTree(this.getDiskName()));
                }
                if (this.getEncrypted() != null) {
                    data.set("encrypted", om.valueToTree(this.getEncrypted()));
                }
                if (this.getInternetChargeType() != null) {
                    data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
                }
                if (this.getKmsKeyId() != null) {
                    data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getSize() != null) {
                    data.set("size", om.valueToTree(this.getSize()));
                }
                if (this.getSnapshotId() != null) {
                    data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataDiskProperty.Jsii$Proxy that = (DataDiskProperty.Jsii$Proxy) o;

                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
                if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                if (this.size != null ? !this.size.equals(that.size) : that.size != null) return false;
                return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category != null ? this.category.hashCode() : 0;
                result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
                result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
                result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LaunchConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LaunchConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCreditSpecification() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LaunchConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LaunchConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LaunchConfigurationProperty> {
            java.lang.Object imageId;
            java.lang.Object securityGroupId;
            java.lang.Object creditSpecification;
            java.lang.Object dataDisk;
            java.lang.Object hostName;
            java.lang.Object instanceDescription;
            java.lang.Object instanceName;
            java.lang.Object internetChargeType;
            java.lang.Object internetMaxBandwidthOut;
            java.lang.Object ioOptimized;
            java.lang.Object keyPairName;
            java.lang.Object passwordInherit;
            java.lang.Object ramRoleName;
            java.lang.Object resourceGroupId;
            java.lang.Object securityEnhancementStrategy;
            java.lang.Object systemDiskCategory;
            java.lang.Object systemDiskDescription;
            java.lang.Object systemDiskName;
            java.lang.Object systemDiskPerformanceLevel;
            java.lang.Object systemDiskSize;
            java.lang.Object tag;
            java.lang.Object userData;

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getCreditSpecification}
             * @param creditSpecification the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder creditSpecification(java.lang.String creditSpecification) {
                this.creditSpecification = creditSpecification;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getCreditSpecification}
             * @param creditSpecification the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder creditSpecification(com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
                this.creditSpecification = creditSpecification;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getDataDisk}
             * @param dataDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisk(com.aliyun.ros.cdk.core.IResolvable dataDisk) {
                this.dataDisk = dataDisk;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getDataDisk}
             * @param dataDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisk(java.util.List<? extends java.lang.Object> dataDisk) {
                this.dataDisk = dataDisk;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(java.lang.String hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInstanceDescription}
             * @param instanceDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceDescription(java.lang.String instanceDescription) {
                this.instanceDescription = instanceDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInstanceDescription}
             * @param instanceDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceDescription(com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
                this.instanceDescription = instanceDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(java.lang.String instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(java.lang.String internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getIoOptimized}
             * @param ioOptimized the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ioOptimized(java.lang.String ioOptimized) {
                this.ioOptimized = ioOptimized;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getIoOptimized}
             * @param ioOptimized the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
                this.ioOptimized = ioOptimized;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(java.lang.String keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getPasswordInherit}
             * @param passwordInherit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passwordInherit(java.lang.Boolean passwordInherit) {
                this.passwordInherit = passwordInherit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getPasswordInherit}
             * @param passwordInherit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
                this.passwordInherit = passwordInherit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getRamRoleName}
             * @param ramRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRoleName(java.lang.String ramRoleName) {
                this.ramRoleName = ramRoleName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getRamRoleName}
             * @param ramRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
                this.ramRoleName = ramRoleName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(java.lang.String resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSecurityEnhancementStrategy}
             * @param securityEnhancementStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
                this.securityEnhancementStrategy = securityEnhancementStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSecurityEnhancementStrategy}
             * @param securityEnhancementStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
                this.securityEnhancementStrategy = securityEnhancementStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskDescription}
             * @param systemDiskDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
                this.systemDiskDescription = systemDiskDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskDescription}
             * @param systemDiskDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
                this.systemDiskDescription = systemDiskDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskName}
             * @param systemDiskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskName(java.lang.String systemDiskName) {
                this.systemDiskName = systemDiskName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskName}
             * @param systemDiskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskName) {
                this.systemDiskName = systemDiskName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(java.lang.Number systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(java.util.List<? extends java.lang.Object> tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(java.lang.String userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Sets the value of {@link LaunchConfigurationProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LaunchConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LaunchConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LaunchConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchConfigurationProperty {
            private final java.lang.Object imageId;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object creditSpecification;
            private final java.lang.Object dataDisk;
            private final java.lang.Object hostName;
            private final java.lang.Object instanceDescription;
            private final java.lang.Object instanceName;
            private final java.lang.Object internetChargeType;
            private final java.lang.Object internetMaxBandwidthOut;
            private final java.lang.Object ioOptimized;
            private final java.lang.Object keyPairName;
            private final java.lang.Object passwordInherit;
            private final java.lang.Object ramRoleName;
            private final java.lang.Object resourceGroupId;
            private final java.lang.Object securityEnhancementStrategy;
            private final java.lang.Object systemDiskCategory;
            private final java.lang.Object systemDiskDescription;
            private final java.lang.Object systemDiskName;
            private final java.lang.Object systemDiskPerformanceLevel;
            private final java.lang.Object systemDiskSize;
            private final java.lang.Object tag;
            private final java.lang.Object userData;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.creditSpecification = software.amazon.jsii.Kernel.get(this, "creditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisk = software.amazon.jsii.Kernel.get(this, "dataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceDescription = software.amazon.jsii.Kernel.get(this, "instanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
                this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
                this.creditSpecification = builder.creditSpecification;
                this.dataDisk = builder.dataDisk;
                this.hostName = builder.hostName;
                this.instanceDescription = builder.instanceDescription;
                this.instanceName = builder.instanceName;
                this.internetChargeType = builder.internetChargeType;
                this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
                this.ioOptimized = builder.ioOptimized;
                this.keyPairName = builder.keyPairName;
                this.passwordInherit = builder.passwordInherit;
                this.ramRoleName = builder.ramRoleName;
                this.resourceGroupId = builder.resourceGroupId;
                this.securityEnhancementStrategy = builder.securityEnhancementStrategy;
                this.systemDiskCategory = builder.systemDiskCategory;
                this.systemDiskDescription = builder.systemDiskDescription;
                this.systemDiskName = builder.systemDiskName;
                this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
                this.systemDiskSize = builder.systemDiskSize;
                this.tag = builder.tag;
                this.userData = builder.userData;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getCreditSpecification() {
                return this.creditSpecification;
            }

            @Override
            public final java.lang.Object getDataDisk() {
                return this.dataDisk;
            }

            @Override
            public final java.lang.Object getHostName() {
                return this.hostName;
            }

            @Override
            public final java.lang.Object getInstanceDescription() {
                return this.instanceDescription;
            }

            @Override
            public final java.lang.Object getInstanceName() {
                return this.instanceName;
            }

            @Override
            public final java.lang.Object getInternetChargeType() {
                return this.internetChargeType;
            }

            @Override
            public final java.lang.Object getInternetMaxBandwidthOut() {
                return this.internetMaxBandwidthOut;
            }

            @Override
            public final java.lang.Object getIoOptimized() {
                return this.ioOptimized;
            }

            @Override
            public final java.lang.Object getKeyPairName() {
                return this.keyPairName;
            }

            @Override
            public final java.lang.Object getPasswordInherit() {
                return this.passwordInherit;
            }

            @Override
            public final java.lang.Object getRamRoleName() {
                return this.ramRoleName;
            }

            @Override
            public final java.lang.Object getResourceGroupId() {
                return this.resourceGroupId;
            }

            @Override
            public final java.lang.Object getSecurityEnhancementStrategy() {
                return this.securityEnhancementStrategy;
            }

            @Override
            public final java.lang.Object getSystemDiskCategory() {
                return this.systemDiskCategory;
            }

            @Override
            public final java.lang.Object getSystemDiskDescription() {
                return this.systemDiskDescription;
            }

            @Override
            public final java.lang.Object getSystemDiskName() {
                return this.systemDiskName;
            }

            @Override
            public final java.lang.Object getSystemDiskPerformanceLevel() {
                return this.systemDiskPerformanceLevel;
            }

            @Override
            public final java.lang.Object getSystemDiskSize() {
                return this.systemDiskSize;
            }

            @Override
            public final java.lang.Object getTag() {
                return this.tag;
            }

            @Override
            public final java.lang.Object getUserData() {
                return this.userData;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("imageId", om.valueToTree(this.getImageId()));
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                if (this.getCreditSpecification() != null) {
                    data.set("creditSpecification", om.valueToTree(this.getCreditSpecification()));
                }
                if (this.getDataDisk() != null) {
                    data.set("dataDisk", om.valueToTree(this.getDataDisk()));
                }
                if (this.getHostName() != null) {
                    data.set("hostName", om.valueToTree(this.getHostName()));
                }
                if (this.getInstanceDescription() != null) {
                    data.set("instanceDescription", om.valueToTree(this.getInstanceDescription()));
                }
                if (this.getInstanceName() != null) {
                    data.set("instanceName", om.valueToTree(this.getInstanceName()));
                }
                if (this.getInternetChargeType() != null) {
                    data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
                }
                if (this.getInternetMaxBandwidthOut() != null) {
                    data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
                }
                if (this.getIoOptimized() != null) {
                    data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
                }
                if (this.getKeyPairName() != null) {
                    data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
                }
                if (this.getPasswordInherit() != null) {
                    data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
                }
                if (this.getRamRoleName() != null) {
                    data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
                }
                if (this.getResourceGroupId() != null) {
                    data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
                }
                if (this.getSecurityEnhancementStrategy() != null) {
                    data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
                }
                if (this.getSystemDiskCategory() != null) {
                    data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
                }
                if (this.getSystemDiskDescription() != null) {
                    data.set("systemDiskDescription", om.valueToTree(this.getSystemDiskDescription()));
                }
                if (this.getSystemDiskName() != null) {
                    data.set("systemDiskName", om.valueToTree(this.getSystemDiskName()));
                }
                if (this.getSystemDiskPerformanceLevel() != null) {
                    data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
                }
                if (this.getSystemDiskSize() != null) {
                    data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
                }
                if (this.getTag() != null) {
                    data.set("tag", om.valueToTree(this.getTag()));
                }
                if (this.getUserData() != null) {
                    data.set("userData", om.valueToTree(this.getUserData()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LaunchConfigurationProperty.Jsii$Proxy that = (LaunchConfigurationProperty.Jsii$Proxy) o;

                if (!imageId.equals(that.imageId)) return false;
                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (this.creditSpecification != null ? !this.creditSpecification.equals(that.creditSpecification) : that.creditSpecification != null) return false;
                if (this.dataDisk != null ? !this.dataDisk.equals(that.dataDisk) : that.dataDisk != null) return false;
                if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
                if (this.instanceDescription != null ? !this.instanceDescription.equals(that.instanceDescription) : that.instanceDescription != null) return false;
                if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
                if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
                if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
                if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
                if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
                if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
                if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
                if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
                if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
                if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
                if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
                if (this.systemDiskName != null ? !this.systemDiskName.equals(that.systemDiskName) : that.systemDiskName != null) return false;
                if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
                if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
                if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
                return this.userData != null ? this.userData.equals(that.userData) : that.userData == null;
            }

            @Override
            public final int hashCode() {
                int result = this.imageId.hashCode();
                result = 31 * result + (this.securityGroupId.hashCode());
                result = 31 * result + (this.creditSpecification != null ? this.creditSpecification.hashCode() : 0);
                result = 31 * result + (this.dataDisk != null ? this.dataDisk.hashCode() : 0);
                result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
                result = 31 * result + (this.instanceDescription != null ? this.instanceDescription.hashCode() : 0);
                result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
                result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
                result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
                result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
                result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
                result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
                result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
                result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
                result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
                result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
                result = 31 * result + (this.systemDiskName != null ? this.systemDiskName.hashCode() : 0);
                result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
                result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
                result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(LaunchTemplateConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LaunchTemplateConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxPrice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeightedCapacity() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplateConfigProperty> {
            java.lang.Object vSwitchId;
            java.lang.Object instanceType;
            java.lang.Object maxPrice;
            java.lang.Object priority;
            java.lang.Object weightedCapacity;

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getMaxPrice}
             * @param maxPrice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPrice(java.lang.Number maxPrice) {
                this.maxPrice = maxPrice;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getMaxPrice}
             * @param maxPrice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPrice(com.aliyun.ros.cdk.core.IResolvable maxPrice) {
                this.maxPrice = maxPrice;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getWeightedCapacity}
             * @param weightedCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weightedCapacity(java.lang.Number weightedCapacity) {
                this.weightedCapacity = weightedCapacity;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateConfigProperty#getWeightedCapacity}
             * @param weightedCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weightedCapacity(com.aliyun.ros.cdk.core.IResolvable weightedCapacity) {
                this.weightedCapacity = weightedCapacity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LaunchTemplateConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LaunchTemplateConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LaunchTemplateConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplateConfigProperty {
            private final java.lang.Object vSwitchId;
            private final java.lang.Object instanceType;
            private final java.lang.Object maxPrice;
            private final java.lang.Object priority;
            private final java.lang.Object weightedCapacity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxPrice = software.amazon.jsii.Kernel.get(this, "maxPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weightedCapacity = software.amazon.jsii.Kernel.get(this, "weightedCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.instanceType = builder.instanceType;
                this.maxPrice = builder.maxPrice;
                this.priority = builder.priority;
                this.weightedCapacity = builder.weightedCapacity;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getMaxPrice() {
                return this.maxPrice;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getWeightedCapacity() {
                return this.weightedCapacity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getMaxPrice() != null) {
                    data.set("maxPrice", om.valueToTree(this.getMaxPrice()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getWeightedCapacity() != null) {
                    data.set("weightedCapacity", om.valueToTree(this.getWeightedCapacity()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LaunchTemplateConfigProperty.Jsii$Proxy that = (LaunchTemplateConfigProperty.Jsii$Proxy) o;

                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.maxPrice != null ? !this.maxPrice.equals(that.maxPrice) : that.maxPrice != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                return this.weightedCapacity != null ? this.weightedCapacity.equals(that.weightedCapacity) : that.weightedCapacity == null;
            }

            @Override
            public final int hashCode() {
                int result = this.vSwitchId.hashCode();
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.maxPrice != null ? this.maxPrice.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.weightedCapacity != null ? this.weightedCapacity.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.TagProperty")
    @software.amazon.jsii.Jsii.Proxy(TagProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.TagProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagProperty.Jsii$Proxy that = (TagProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param totalTargetCapacity This parameter is required.
         */
        public Builder totalTargetCapacity(final java.lang.String totalTargetCapacity) {
            this.props.totalTargetCapacity(totalTargetCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param totalTargetCapacity This parameter is required.
         */
        public Builder totalTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable totalTargetCapacity) {
            this.props.totalTargetCapacity(totalTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoProvisioningGroupName This parameter is required.
         */
        public Builder autoProvisioningGroupName(final java.lang.String autoProvisioningGroupName) {
            this.props.autoProvisioningGroupName(autoProvisioningGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoProvisioningGroupName This parameter is required.
         */
        public Builder autoProvisioningGroupName(final com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupName) {
            this.props.autoProvisioningGroupName(autoProvisioningGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoProvisioningGroupType This parameter is required.
         */
        public Builder autoProvisioningGroupType(final java.lang.String autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoProvisioningGroupType This parameter is required.
         */
        public Builder autoProvisioningGroupType(final com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkExecutionStatus This parameter is required.
         */
        public Builder checkExecutionStatus(final java.lang.Boolean checkExecutionStatus) {
            this.props.checkExecutionStatus(checkExecutionStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkExecutionStatus This parameter is required.
         */
        public Builder checkExecutionStatus(final com.aliyun.ros.cdk.core.IResolvable checkExecutionStatus) {
            this.props.checkExecutionStatus(checkExecutionStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultTargetCapacityType This parameter is required.
         */
        public Builder defaultTargetCapacityType(final java.lang.String defaultTargetCapacityType) {
            this.props.defaultTargetCapacityType(defaultTargetCapacityType);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultTargetCapacityType This parameter is required.
         */
        public Builder defaultTargetCapacityType(final com.aliyun.ros.cdk.core.IResolvable defaultTargetCapacityType) {
            this.props.defaultTargetCapacityType(defaultTargetCapacityType);
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param excessCapacityTerminationPolicy This parameter is required.
         */
        public Builder excessCapacityTerminationPolicy(final java.lang.String excessCapacityTerminationPolicy) {
            this.props.excessCapacityTerminationPolicy(excessCapacityTerminationPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param excessCapacityTerminationPolicy This parameter is required.
         */
        public Builder excessCapacityTerminationPolicy(final com.aliyun.ros.cdk.core.IResolvable excessCapacityTerminationPolicy) {
            this.props.excessCapacityTerminationPolicy(excessCapacityTerminationPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchConfiguration This parameter is required.
         */
        public Builder launchConfiguration(final com.aliyun.ros.cdk.core.IResolvable launchConfiguration) {
            this.props.launchConfiguration(launchConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchConfiguration This parameter is required.
         */
        public Builder launchConfiguration(final com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty launchConfiguration) {
            this.props.launchConfiguration(launchConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateConfig This parameter is required.
         */
        public Builder launchTemplateConfig(final com.aliyun.ros.cdk.core.IResolvable launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateConfig This parameter is required.
         */
        public Builder launchTemplateConfig(final java.util.List<? extends java.lang.Object> launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxSpotPrice This parameter is required.
         */
        public Builder maxSpotPrice(final java.lang.Number maxSpotPrice) {
            this.props.maxSpotPrice(maxSpotPrice);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxSpotPrice This parameter is required.
         */
        public Builder maxSpotPrice(final com.aliyun.ros.cdk.core.IResolvable maxSpotPrice) {
            this.props.maxSpotPrice(maxSpotPrice);
            return this;
        }

        /**
         * @return {@code this}
         * @param payAsYouGoAllocationStrategy This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final java.lang.String payAsYouGoAllocationStrategy) {
            this.props.payAsYouGoAllocationStrategy(payAsYouGoAllocationStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param payAsYouGoAllocationStrategy This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final com.aliyun.ros.cdk.core.IResolvable payAsYouGoAllocationStrategy) {
            this.props.payAsYouGoAllocationStrategy(payAsYouGoAllocationStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param payAsYouGoTargetCapacity This parameter is required.
         */
        public Builder payAsYouGoTargetCapacity(final java.lang.String payAsYouGoTargetCapacity) {
            this.props.payAsYouGoTargetCapacity(payAsYouGoTargetCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param payAsYouGoTargetCapacity This parameter is required.
         */
        public Builder payAsYouGoTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable payAsYouGoTargetCapacity) {
            this.props.payAsYouGoTargetCapacity(payAsYouGoTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotAllocationStrategy This parameter is required.
         */
        public Builder spotAllocationStrategy(final java.lang.String spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotAllocationStrategy This parameter is required.
         */
        public Builder spotAllocationStrategy(final com.aliyun.ros.cdk.core.IResolvable spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstanceInterruptionBehavior This parameter is required.
         */
        public Builder spotInstanceInterruptionBehavior(final java.lang.String spotInstanceInterruptionBehavior) {
            this.props.spotInstanceInterruptionBehavior(spotInstanceInterruptionBehavior);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotInstanceInterruptionBehavior This parameter is required.
         */
        public Builder spotInstanceInterruptionBehavior(final com.aliyun.ros.cdk.core.IResolvable spotInstanceInterruptionBehavior) {
            this.props.spotInstanceInterruptionBehavior(spotInstanceInterruptionBehavior);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstancePoolsToUseCount This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final java.lang.Number spotInstancePoolsToUseCount) {
            this.props.spotInstancePoolsToUseCount(spotInstancePoolsToUseCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotInstancePoolsToUseCount This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final com.aliyun.ros.cdk.core.IResolvable spotInstancePoolsToUseCount) {
            this.props.spotInstancePoolsToUseCount(spotInstancePoolsToUseCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotTargetCapacity This parameter is required.
         */
        public Builder spotTargetCapacity(final java.lang.String spotTargetCapacity) {
            this.props.spotTargetCapacity(spotTargetCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotTargetCapacity This parameter is required.
         */
        public Builder spotTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable spotTargetCapacity) {
            this.props.spotTargetCapacity(spotTargetCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminateInstances This parameter is required.
         */
        public Builder terminateInstances(final java.lang.Boolean terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminateInstances This parameter is required.
         */
        public Builder terminateInstances(final com.aliyun.ros.cdk.core.IResolvable terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminateInstancesWithExpiration This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final java.lang.Boolean terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminateInstancesWithExpiration This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final com.aliyun.ros.cdk.core.IResolvable terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }

        /**
         * @return {@code this}
         * @param validFrom This parameter is required.
         */
        public Builder validFrom(final java.lang.String validFrom) {
            this.props.validFrom(validFrom);
            return this;
        }
        /**
         * @return {@code this}
         * @param validFrom This parameter is required.
         */
        public Builder validFrom(final com.aliyun.ros.cdk.core.IResolvable validFrom) {
            this.props.validFrom(validFrom);
            return this;
        }

        /**
         * @return {@code this}
         * @param validUntil This parameter is required.
         */
        public Builder validUntil(final java.lang.String validUntil) {
            this.props.validUntil(validUntil);
            return this;
        }
        /**
         * @return {@code this}
         * @param validUntil This parameter is required.
         */
        public Builder validUntil(final com.aliyun.ros.cdk.core.IResolvable validUntil) {
            this.props.validUntil(validUntil);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup build() {
            return new com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

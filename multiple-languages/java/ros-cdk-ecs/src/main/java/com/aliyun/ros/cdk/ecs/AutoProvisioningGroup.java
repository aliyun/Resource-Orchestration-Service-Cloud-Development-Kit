package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::AutoProvisioningGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.524Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AutoProvisioningGroup")
public class AutoProvisioningGroup extends com.aliyun.ros.cdk.core.Resource {

    protected AutoProvisioningGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AutoProvisioningGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public AutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoProvisioningGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.AutoProvisioningGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.AutoProvisioningGroup> {
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
        private final com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps.Builder();
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
         * @param totalTargetCapacity This parameter is required.
         */
        public Builder totalTargetCapacity(final java.lang.String totalTargetCapacity) {
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
         * @param autoProvisioningGroupType This parameter is required.
         */
        public Builder autoProvisioningGroupType(final java.lang.String autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
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
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
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
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
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
         * @param payAsYouGoAllocationStrategy This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final java.lang.String payAsYouGoAllocationStrategy) {
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
         * @param spotAllocationStrategy This parameter is required.
         */
        public Builder spotAllocationStrategy(final java.lang.String spotAllocationStrategy) {
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
         * @param spotInstancePoolsToUseCount This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final java.lang.Number spotInstancePoolsToUseCount) {
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
         * @param validUntil This parameter is required.
         */
        public Builder validUntil(final java.lang.String validUntil) {
            this.props.validUntil(validUntil);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.AutoProvisioningGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.AutoProvisioningGroup build() {
            return new com.aliyun.ros.cdk.ecs.AutoProvisioningGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

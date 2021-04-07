package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::AutoProvisioningGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.164Z")
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AutoProvisioningGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoProvisioningGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoProvisioningGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoProvisioningGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.AutoProvisioningGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.AutoProvisioningGroup> {
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
        private final com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.AutoProvisioningGroupProps.Builder();
        }

        /**
         * Property totalTargetCapacity: The total target capacity of the auto provisioning group.
         * <p>
         * The target capacity consists
         * of the following three parts:
         * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
         * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
         * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
         * <p>
         * @return {@code this}
         * @param totalTargetCapacity Property totalTargetCapacity: The total target capacity of the auto provisioning group. This parameter is required.
         */
        public Builder totalTargetCapacity(final java.lang.String totalTargetCapacity) {
            this.props.totalTargetCapacity(totalTargetCapacity);
            return this;
        }
        /**
         * Property totalTargetCapacity: The total target capacity of the auto provisioning group.
         * <p>
         * The target capacity consists
         * of the following three parts:
         * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
         * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
         * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
         * <p>
         * @return {@code this}
         * @param totalTargetCapacity Property totalTargetCapacity: The total target capacity of the auto provisioning group. This parameter is required.
         */
        public Builder totalTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable totalTargetCapacity) {
            this.props.totalTargetCapacity(totalTargetCapacity);
            return this;
        }

        /**
         * Property autoProvisioningGroupName: The name of the auto provisioning group to be created.
         * <p>
         * It must be 2 to 128 characters
         * in length. It must start with a letter but cannot start with http:// or https://.
         * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param autoProvisioningGroupName Property autoProvisioningGroupName: The name of the auto provisioning group to be created. This parameter is required.
         */
        public Builder autoProvisioningGroupName(final java.lang.String autoProvisioningGroupName) {
            this.props.autoProvisioningGroupName(autoProvisioningGroupName);
            return this;
        }
        /**
         * Property autoProvisioningGroupName: The name of the auto provisioning group to be created.
         * <p>
         * It must be 2 to 128 characters
         * in length. It must start with a letter but cannot start with http:// or https://.
         * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param autoProvisioningGroupName Property autoProvisioningGroupName: The name of the auto provisioning group to be created. This parameter is required.
         */
        public Builder autoProvisioningGroupName(final com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupName) {
            this.props.autoProvisioningGroupName(autoProvisioningGroupName);
            return this;
        }

        /**
         * Property autoProvisioningGroupType: The type of the auto provisioning group.
         * <p>
         * Valid values:
         * request: One-time delivery. After the auto provisioning group is started, it only attempts
         * to create an instance cluster once. If the cluster fails to be created, the group
         * does not try again.
         * maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
         * is started, it continuously attempts to create and maintain the instance cluster.
         * The auto provisioning group compares the real-time and target capacity of the cluster.
         * If the cluster does not meet the target capacity, the group will create instances
         * until the cluster meets the target capacity.
         * Default value: maintain
         * <p>
         * @return {@code this}
         * @param autoProvisioningGroupType Property autoProvisioningGroupType: The type of the auto provisioning group. This parameter is required.
         */
        public Builder autoProvisioningGroupType(final java.lang.String autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
            return this;
        }
        /**
         * Property autoProvisioningGroupType: The type of the auto provisioning group.
         * <p>
         * Valid values:
         * request: One-time delivery. After the auto provisioning group is started, it only attempts
         * to create an instance cluster once. If the cluster fails to be created, the group
         * does not try again.
         * maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
         * is started, it continuously attempts to create and maintain the instance cluster.
         * The auto provisioning group compares the real-time and target capacity of the cluster.
         * If the cluster does not meet the target capacity, the group will create instances
         * until the cluster meets the target capacity.
         * Default value: maintain
         * <p>
         * @return {@code this}
         * @param autoProvisioningGroupType Property autoProvisioningGroupType: The type of the auto provisioning group. This parameter is required.
         */
        public Builder autoProvisioningGroupType(final com.aliyun.ros.cdk.core.IResolvable autoProvisioningGroupType) {
            this.props.autoProvisioningGroupType(autoProvisioningGroupType);
            return this;
        }

        /**
         * Property checkExecutionStatus: Whether check execution status.
         * <p>
         * If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
         * <p>
         * @return {@code this}
         * @param checkExecutionStatus Property checkExecutionStatus: Whether check execution status. This parameter is required.
         */
        public Builder checkExecutionStatus(final java.lang.Boolean checkExecutionStatus) {
            this.props.checkExecutionStatus(checkExecutionStatus);
            return this;
        }
        /**
         * Property checkExecutionStatus: Whether check execution status.
         * <p>
         * If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
         * <p>
         * @return {@code this}
         * @param checkExecutionStatus Property checkExecutionStatus: Whether check execution status. This parameter is required.
         */
        public Builder checkExecutionStatus(final com.aliyun.ros.cdk.core.IResolvable checkExecutionStatus) {
            this.props.checkExecutionStatus(checkExecutionStatus);
            return this;
        }

        /**
         * Property defaultTargetCapacityType: The type of supplemental instances.
         * <p>
         * When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
         * the capacity requirements. Valid values:
         * PayAsYouGo: Pay-as-you-go instances.
         * Spot: Preemptible instances.
         * Default value: Spot
         * <p>
         * @return {@code this}
         * @param defaultTargetCapacityType Property defaultTargetCapacityType: The type of supplemental instances. This parameter is required.
         */
        public Builder defaultTargetCapacityType(final java.lang.String defaultTargetCapacityType) {
            this.props.defaultTargetCapacityType(defaultTargetCapacityType);
            return this;
        }
        /**
         * Property defaultTargetCapacityType: The type of supplemental instances.
         * <p>
         * When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
         * the capacity requirements. Valid values:
         * PayAsYouGo: Pay-as-you-go instances.
         * Spot: Preemptible instances.
         * Default value: Spot
         * <p>
         * @return {@code this}
         * @param defaultTargetCapacityType Property defaultTargetCapacityType: The type of supplemental instances. This parameter is required.
         */
        public Builder defaultTargetCapacityType(final com.aliyun.ros.cdk.core.IResolvable defaultTargetCapacityType) {
            this.props.defaultTargetCapacityType(defaultTargetCapacityType);
            return this;
        }

        /**
         * Property description: The description of the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the auto provisioning group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the auto provisioning group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity.
         * <p>
         * Valid values:
         * no-termination: Excess preemptible instances are not shut down.
         * termination: Excess preemptible instances are to be shut down. The action to be performed on these
         * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
         * Default value: no-termination
         * <p>
         * @return {@code this}
         * @param excessCapacityTerminationPolicy Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity. This parameter is required.
         */
        public Builder excessCapacityTerminationPolicy(final java.lang.String excessCapacityTerminationPolicy) {
            this.props.excessCapacityTerminationPolicy(excessCapacityTerminationPolicy);
            return this;
        }
        /**
         * Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity.
         * <p>
         * Valid values:
         * no-termination: Excess preemptible instances are not shut down.
         * termination: Excess preemptible instances are to be shut down. The action to be performed on these
         * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
         * Default value: no-termination
         * <p>
         * @return {@code this}
         * @param excessCapacityTerminationPolicy Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity. This parameter is required.
         */
        public Builder excessCapacityTerminationPolicy(final com.aliyun.ros.cdk.core.IResolvable excessCapacityTerminationPolicy) {
            this.props.excessCapacityTerminationPolicy(excessCapacityTerminationPolicy);
            return this;
        }

        /**
         * Property launchConfiguration:.
         * <p>
         * @return {@code this}
         * @param launchConfiguration Property launchConfiguration:. This parameter is required.
         */
        public Builder launchConfiguration(final com.aliyun.ros.cdk.core.IResolvable launchConfiguration) {
            this.props.launchConfiguration(launchConfiguration);
            return this;
        }
        /**
         * Property launchConfiguration:.
         * <p>
         * @return {@code this}
         * @param launchConfiguration Property launchConfiguration:. This parameter is required.
         */
        public Builder launchConfiguration(final com.aliyun.ros.cdk.ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty launchConfiguration) {
            this.props.launchConfiguration(launchConfiguration);
            return this;
        }

        /**
         * Property launchTemplateConfig:.
         * <p>
         * @return {@code this}
         * @param launchTemplateConfig Property launchTemplateConfig:. This parameter is required.
         */
        public Builder launchTemplateConfig(final com.aliyun.ros.cdk.core.IResolvable launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }
        /**
         * Property launchTemplateConfig:.
         * <p>
         * @return {@code this}
         * @param launchTemplateConfig Property launchTemplateConfig:. This parameter is required.
         */
        public Builder launchTemplateConfig(final java.util.List<? extends java.lang.Object> launchTemplateConfig) {
            this.props.launchTemplateConfig(launchTemplateConfig);
            return this;
        }

        /**
         * Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
         * <p>
         * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
         * An auto provisioning group can be associated with only one instance launch template.
         * But you can configure multiple extended configurations for the launch template through
         * the LaunchTemplateConfig parameter.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group. This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
         * <p>
         * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
         * An auto provisioning group can be associated with only one instance launch template.
         * But you can configure multiple extended configurations for the launch template through
         * the LaunchTemplateConfig parameter.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group. This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group.
         * <p>
         * You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group. This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group.
         * <p>
         * You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group. This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
         * <p>
         * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
         * <p>
         * @return {@code this}
         * @param maxSpotPrice Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group. This parameter is required.
         */
        public Builder maxSpotPrice(final java.lang.Number maxSpotPrice) {
            this.props.maxSpotPrice(maxSpotPrice);
            return this;
        }
        /**
         * Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
         * <p>
         * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
         * <p>
         * @return {@code this}
         * @param maxSpotPrice Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group. This parameter is required.
         */
        public Builder maxSpotPrice(final com.aliyun.ros.cdk.core.IResolvable maxSpotPrice) {
            this.props.maxSpotPrice(maxSpotPrice);
            return this;
        }

        /**
         * Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.
         * <p>
         * Valid values:
         * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
         * types of the lowest cost to create instances.
         * prioritized: The priority-based policy the auto provisioning group follows to create instances.
         * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
         * Default value: lowest-price
         * <p>
         * @return {@code this}
         * @param payAsYouGoAllocationStrategy Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final java.lang.String payAsYouGoAllocationStrategy) {
            this.props.payAsYouGoAllocationStrategy(payAsYouGoAllocationStrategy);
            return this;
        }
        /**
         * Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.
         * <p>
         * Valid values:
         * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
         * types of the lowest cost to create instances.
         * prioritized: The priority-based policy the auto provisioning group follows to create instances.
         * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
         * Default value: lowest-price
         * <p>
         * @return {@code this}
         * @param payAsYouGoAllocationStrategy Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. This parameter is required.
         */
        public Builder payAsYouGoAllocationStrategy(final com.aliyun.ros.cdk.core.IResolvable payAsYouGoAllocationStrategy) {
            this.props.payAsYouGoAllocationStrategy(payAsYouGoAllocationStrategy);
            return this;
        }

        /**
         * Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param payAsYouGoTargetCapacity Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group. This parameter is required.
         */
        public Builder payAsYouGoTargetCapacity(final java.lang.String payAsYouGoTargetCapacity) {
            this.props.payAsYouGoTargetCapacity(payAsYouGoTargetCapacity);
            return this;
        }
        /**
         * Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param payAsYouGoTargetCapacity Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group. This parameter is required.
         */
        public Builder payAsYouGoTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable payAsYouGoTargetCapacity) {
            this.props.payAsYouGoTargetCapacity(payAsYouGoTargetCapacity);
            return this;
        }

        /**
         * Property spotAllocationStrategy: The scale-out policy for preemptible instances.
         * <p>
         * Valid values:
         * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
         * types of the lowest cost to create instances.
         * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
         * instances across zones specified in multiple extended template configurations.
         * Default value: lowest-price
         * <p>
         * @return {@code this}
         * @param spotAllocationStrategy Property spotAllocationStrategy: The scale-out policy for preemptible instances. This parameter is required.
         */
        public Builder spotAllocationStrategy(final java.lang.String spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }
        /**
         * Property spotAllocationStrategy: The scale-out policy for preemptible instances.
         * <p>
         * Valid values:
         * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
         * types of the lowest cost to create instances.
         * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
         * instances across zones specified in multiple extended template configurations.
         * Default value: lowest-price
         * <p>
         * @return {@code this}
         * @param spotAllocationStrategy Property spotAllocationStrategy: The scale-out policy for preemptible instances. This parameter is required.
         */
        public Builder spotAllocationStrategy(final com.aliyun.ros.cdk.core.IResolvable spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }

        /**
         * Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down.
         * <p>
         * Value values:
         * stop: stops preemptible instances.
         * terminate: releases preemptible instances.
         * Default value: stop
         * <p>
         * @return {@code this}
         * @param spotInstanceInterruptionBehavior Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. This parameter is required.
         */
        public Builder spotInstanceInterruptionBehavior(final java.lang.String spotInstanceInterruptionBehavior) {
            this.props.spotInstanceInterruptionBehavior(spotInstanceInterruptionBehavior);
            return this;
        }
        /**
         * Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down.
         * <p>
         * Value values:
         * stop: stops preemptible instances.
         * terminate: releases preemptible instances.
         * Default value: stop
         * <p>
         * @return {@code this}
         * @param spotInstanceInterruptionBehavior Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. This parameter is required.
         */
        public Builder spotInstanceInterruptionBehavior(final com.aliyun.ros.cdk.core.IResolvable spotInstanceInterruptionBehavior) {
            this.props.spotInstanceInterruptionBehavior(spotInstanceInterruptionBehavior);
            return this;
        }

        /**
         * Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price.
         * <p>
         * The auto provisioning group selects instance types of the lowest cost to create
         * instances.
         * <p>
         * @return {@code this}
         * @param spotInstancePoolsToUseCount Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final java.lang.Number spotInstancePoolsToUseCount) {
            this.props.spotInstancePoolsToUseCount(spotInstancePoolsToUseCount);
            return this;
        }
        /**
         * Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price.
         * <p>
         * The auto provisioning group selects instance types of the lowest cost to create
         * instances.
         * <p>
         * @return {@code this}
         * @param spotInstancePoolsToUseCount Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. This parameter is required.
         */
        public Builder spotInstancePoolsToUseCount(final com.aliyun.ros.cdk.core.IResolvable spotInstancePoolsToUseCount) {
            this.props.spotInstancePoolsToUseCount(spotInstancePoolsToUseCount);
            return this;
        }

        /**
         * Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param spotTargetCapacity Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group. This parameter is required.
         */
        public Builder spotTargetCapacity(final java.lang.String spotTargetCapacity) {
            this.props.spotTargetCapacity(spotTargetCapacity);
            return this;
        }
        /**
         * Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
         * <p>
         * @return {@code this}
         * @param spotTargetCapacity Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group. This parameter is required.
         */
        public Builder spotTargetCapacity(final com.aliyun.ros.cdk.core.IResolvable spotTargetCapacity) {
            this.props.spotTargetCapacity(spotTargetCapacity);
            return this;
        }

        /**
         * Property terminateInstances: Specifies whether to release instances of the auto provisioning group.
         * <p>
         * Valid values:
         * true
         * false
         * Default: false
         * <p>
         * @return {@code this}
         * @param terminateInstances Property terminateInstances: Specifies whether to release instances of the auto provisioning group. This parameter is required.
         */
        public Builder terminateInstances(final java.lang.Boolean terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }
        /**
         * Property terminateInstances: Specifies whether to release instances of the auto provisioning group.
         * <p>
         * Valid values:
         * true
         * false
         * Default: false
         * <p>
         * @return {@code this}
         * @param terminateInstances Property terminateInstances: Specifies whether to release instances of the auto provisioning group. This parameter is required.
         */
        public Builder terminateInstances(final com.aliyun.ros.cdk.core.IResolvable terminateInstances) {
            this.props.terminateInstances(terminateInstances);
            return this;
        }

        /**
         * Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
         * <p>
         * Valid values:
         * true: shuts down preemptible instances. The action to be performed on these shutdown instances
         * is specified by the SpotInstanceInterruptionBehavior parameter.
         * false: does not shut down preemptible instances.
         * Default: false
         * <p>
         * @return {@code this}
         * @param terminateInstancesWithExpiration Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires. This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final java.lang.Boolean terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }
        /**
         * Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
         * <p>
         * Valid values:
         * true: shuts down preemptible instances. The action to be performed on these shutdown instances
         * is specified by the SpotInstanceInterruptionBehavior parameter.
         * false: does not shut down preemptible instances.
         * Default: false
         * <p>
         * @return {@code this}
         * @param terminateInstancesWithExpiration Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires. This parameter is required.
         */
        public Builder terminateInstancesWithExpiration(final com.aliyun.ros.cdk.core.IResolvable terminateInstancesWithExpiration) {
            this.props.terminateInstancesWithExpiration(terminateInstancesWithExpiration);
            return this;
        }

        /**
         * Property validFrom: The time when the auto provisioning group is started.
         * <p>
         * The period of time between this
         * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
         * By default, an auto provisioning group is immediately started after creation.
         * <p>
         * @return {@code this}
         * @param validFrom Property validFrom: The time when the auto provisioning group is started. This parameter is required.
         */
        public Builder validFrom(final java.lang.String validFrom) {
            this.props.validFrom(validFrom);
            return this;
        }
        /**
         * Property validFrom: The time when the auto provisioning group is started.
         * <p>
         * The period of time between this
         * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
         * By default, an auto provisioning group is immediately started after creation.
         * <p>
         * @return {@code this}
         * @param validFrom Property validFrom: The time when the auto provisioning group is started. This parameter is required.
         */
        public Builder validFrom(final com.aliyun.ros.cdk.core.IResolvable validFrom) {
            this.props.validFrom(validFrom);
            return this;
        }

        /**
         * Property validUntil: The time when the auto provisioning group expires.
         * <p>
         * The period of time between this
         * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
         * By default, an auto provisioning group never expires.
         * <p>
         * @return {@code this}
         * @param validUntil Property validUntil: The time when the auto provisioning group expires. This parameter is required.
         */
        public Builder validUntil(final java.lang.String validUntil) {
            this.props.validUntil(validUntil);
            return this;
        }
        /**
         * Property validUntil: The time when the auto provisioning group expires.
         * <p>
         * The period of time between this
         * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
         * By default, an auto provisioning group never expires.
         * <p>
         * @return {@code this}
         * @param validUntil Property validUntil: The time when the auto provisioning group expires. This parameter is required.
         */
        public Builder validUntil(final com.aliyun.ros.cdk.core.IResolvable validUntil) {
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

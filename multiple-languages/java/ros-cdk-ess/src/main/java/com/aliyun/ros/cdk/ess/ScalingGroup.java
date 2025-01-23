package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::ScalingGroup</code>, which is used to create a scaling group.
 * <p>
 * A scaling group can be a group of Elastic Compute Service (ECS) instances that are dynamically scaled based on the configured scenario. A scaling group does not immediately take effect after it is created. You must use ALIYUN::ESS::ScalingGroupEnable to enable the scaling group to trigger scaling activities based on scaling rules.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingGroup")
public class ScalingGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.IScalingGroup {

    protected ScalingGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingGroupId: Scaling group Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupName: Scaling group name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.ScalingGroupProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingGroup> {
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
        private final com.aliyun.ros.cdk.ess.ScalingGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingGroupProps.Builder();
        }

        /**
         * Property maxSize: Maximum number of ECS instances in the scaling group.
         * <p>
         * Value range: [0, 2000].
         * <p>
         * @return {@code this}
         * @param maxSize Property maxSize: Maximum number of ECS instances in the scaling group. This parameter is required.
         */
        public Builder maxSize(final java.lang.Number maxSize) {
            this.props.maxSize(maxSize);
            return this;
        }
        /**
         * Property maxSize: Maximum number of ECS instances in the scaling group.
         * <p>
         * Value range: [0, 2000].
         * <p>
         * @return {@code this}
         * @param maxSize Property maxSize: Maximum number of ECS instances in the scaling group. This parameter is required.
         */
        public Builder maxSize(final com.aliyun.ros.cdk.core.IResolvable maxSize) {
            this.props.maxSize(maxSize);
            return this;
        }

        /**
         * Property minSize: Minimum number of ECS instances in the scaling group.
         * <p>
         * Value range: [0, 2000].
         * <p>
         * @return {@code this}
         * @param minSize Property minSize: Minimum number of ECS instances in the scaling group. This parameter is required.
         */
        public Builder minSize(final java.lang.Number minSize) {
            this.props.minSize(minSize);
            return this;
        }
        /**
         * Property minSize: Minimum number of ECS instances in the scaling group.
         * <p>
         * Value range: [0, 2000].
         * <p>
         * @return {@code this}
         * @param minSize Property minSize: Minimum number of ECS instances in the scaling group. This parameter is required.
         */
        public Builder minSize(final com.aliyun.ros.cdk.core.IResolvable minSize) {
            this.props.minSize(minSize);
            return this;
        }

        /**
         * Property allocationStrategy: The allocation policy of instances.
         * <p>
         * Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.</li>
         * <li>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
         * Default value: priority.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param allocationStrategy Property allocationStrategy: The allocation policy of instances. This parameter is required.
         */
        public Builder allocationStrategy(final java.lang.String allocationStrategy) {
            this.props.allocationStrategy(allocationStrategy);
            return this;
        }
        /**
         * Property allocationStrategy: The allocation policy of instances.
         * <p>
         * Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.</li>
         * <li>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
         * Default value: priority.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param allocationStrategy Property allocationStrategy: The allocation policy of instances. This parameter is required.
         */
        public Builder allocationStrategy(final com.aliyun.ros.cdk.core.IResolvable allocationStrategy) {
            this.props.allocationStrategy(allocationStrategy);
            return this;
        }

        /**
         * Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones.
         * <p>
         * This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false
         * Default value: false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param azBalance Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter is required.
         */
        public Builder azBalance(final java.lang.Boolean azBalance) {
            this.props.azBalance(azBalance);
            return this;
        }
        /**
         * Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones.
         * <p>
         * This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false
         * Default value: false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param azBalance Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter is required.
         */
        public Builder azBalance(final com.aliyun.ros.cdk.core.IResolvable azBalance) {
            this.props.azBalance(azBalance);
            return this;
        }

        /**
         * Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.
         * <p>
         * This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param compensateWithOnDemand Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter is required.
         */
        public Builder compensateWithOnDemand(final java.lang.Boolean compensateWithOnDemand) {
            this.props.compensateWithOnDemand(compensateWithOnDemand);
            return this;
        }
        /**
         * Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.
         * <p>
         * This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param compensateWithOnDemand Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter is required.
         */
        public Builder compensateWithOnDemand(final com.aliyun.ros.cdk.core.IResolvable compensateWithOnDemand) {
            this.props.compensateWithOnDemand(compensateWithOnDemand);
            return this;
        }

        /**
         * Property containerGroupId: The ID of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param containerGroupId Property containerGroupId: The ID of the elastic container instance. This parameter is required.
         */
        public Builder containerGroupId(final java.lang.String containerGroupId) {
            this.props.containerGroupId(containerGroupId);
            return this;
        }
        /**
         * Property containerGroupId: The ID of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param containerGroupId Property containerGroupId: The ID of the elastic container instance. This parameter is required.
         */
        public Builder containerGroupId(final com.aliyun.ros.cdk.core.IResolvable containerGroupId) {
            this.props.containerGroupId(containerGroupId);
            return this;
        }

        /**
         * Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function).
         * <p>
         * This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
         * <p>
         * @return {@code this}
         * @param customPolicyArn Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter is required.
         */
        public Builder customPolicyArn(final java.lang.String customPolicyArn) {
            this.props.customPolicyArn(customPolicyArn);
            return this;
        }
        /**
         * Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function).
         * <p>
         * This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
         * <p>
         * @return {@code this}
         * @param customPolicyArn Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter is required.
         */
        public Builder customPolicyArn(final com.aliyun.ros.cdk.core.IResolvable customPolicyArn) {
            this.props.customPolicyArn(customPolicyArn);
            return this;
        }

        /**
         * Property dbInstanceIds: ID list of an RDS instance.
         * <p>
         * A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceIds Property dbInstanceIds: ID list of an RDS instance. This parameter is required.
         */
        public Builder dbInstanceIds(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }
        /**
         * Property dbInstanceIds: ID list of an RDS instance.
         * <p>
         * A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceIds Property dbInstanceIds: ID list of an RDS instance. This parameter is required.
         */
        public Builder dbInstanceIds(final java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }

        /**
         * Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
         * <p>
         * Value range: [0, 86400].
         * The default value is 300s.
         * <p>
         * @return {@code this}
         * @param defaultCooldown Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. This parameter is required.
         */
        public Builder defaultCooldown(final java.lang.Number defaultCooldown) {
            this.props.defaultCooldown(defaultCooldown);
            return this;
        }
        /**
         * Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
         * <p>
         * Value range: [0, 86400].
         * The default value is 300s.
         * <p>
         * @return {@code this}
         * @param defaultCooldown Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. This parameter is required.
         */
        public Builder defaultCooldown(final com.aliyun.ros.cdk.core.IResolvable defaultCooldown) {
            this.props.defaultCooldown(defaultCooldown);
            return this;
        }

        /**
         * Property desiredCapacity: The expected number of ECS instances in a scaling group.
         * <p>
         * The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
         * <p>
         * @return {@code this}
         * @param desiredCapacity Property desiredCapacity: The expected number of ECS instances in a scaling group. This parameter is required.
         */
        public Builder desiredCapacity(final java.lang.Number desiredCapacity) {
            this.props.desiredCapacity(desiredCapacity);
            return this;
        }
        /**
         * Property desiredCapacity: The expected number of ECS instances in a scaling group.
         * <p>
         * The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
         * <p>
         * @return {@code this}
         * @param desiredCapacity Property desiredCapacity: The expected number of ECS instances in a scaling group. This parameter is required.
         */
        public Builder desiredCapacity(final com.aliyun.ros.cdk.core.IResolvable desiredCapacity) {
            this.props.desiredCapacity(desiredCapacity);
            return this;
        }

        /**
         * Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
         * <p>
         * Default to False.
         * <p>
         * @return {@code this}
         * @param groupDeletionProtection Property groupDeletionProtection: Whether to enable deletion protection for scaling group. This parameter is required.
         */
        public Builder groupDeletionProtection(final java.lang.Boolean groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }
        /**
         * Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
         * <p>
         * Default to False.
         * <p>
         * @return {@code this}
         * @param groupDeletionProtection Property groupDeletionProtection: Whether to enable deletion protection for scaling group. This parameter is required.
         */
        public Builder groupDeletionProtection(final com.aliyun.ros.cdk.core.IResolvable groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }

        /**
         * Property groupType: The type of instances that are managed by the scaling group.
         * <p>
         * Valid values:
         * ECS
         * ECI
         * Default value: ECS.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * Property groupType: The type of instances that are managed by the scaling group.
         * <p>
         * Valid values:
         * ECS
         * ECI
         * Default value: ECS.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * Property healthCheckType: The health check type.
         * <p>
         * Allow values is "ECS" and "NONE", default to "ECS".
         * <p>
         * @return {@code this}
         * @param healthCheckType Property healthCheckType: The health check type. This parameter is required.
         */
        public Builder healthCheckType(final java.lang.String healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }
        /**
         * Property healthCheckType: The health check type.
         * <p>
         * Allow values is "ECS" and "NONE", default to "ECS".
         * <p>
         * @return {@code this}
         * @param healthCheckType Property healthCheckType: The health check type. This parameter is required.
         */
        public Builder healthCheckType(final com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }

        /**
         * Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations. This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations. This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * Property launchTemplateOverrides: You can specify up to 10 overrides.
         * <p>
         * Note: This parameter takes effect only if you specify LaunchTemplateId.
         * <p>
         * @return {@code this}
         * @param launchTemplateOverrides Property launchTemplateOverrides: You can specify up to 10 overrides. This parameter is required.
         */
        public Builder launchTemplateOverrides(final com.aliyun.ros.cdk.core.IResolvable launchTemplateOverrides) {
            this.props.launchTemplateOverrides(launchTemplateOverrides);
            return this;
        }
        /**
         * Property launchTemplateOverrides: You can specify up to 10 overrides.
         * <p>
         * Note: This parameter takes effect only if you specify LaunchTemplateId.
         * <p>
         * @return {@code this}
         * @param launchTemplateOverrides Property launchTemplateOverrides: You can specify up to 10 overrides. This parameter is required.
         */
        public Builder launchTemplateOverrides(final java.util.List<? extends java.lang.Object> launchTemplateOverrides) {
            this.props.launchTemplateOverrides(launchTemplateOverrides);
            return this;
        }

        /**
         * Property launchTemplateVersion: The version of the instance launch template.
         * <p>
         * Valid values:
         * A fixed template version numbe.
         * Default: The default template version is always used.
         * Latest: The latest template version is always used.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * Property launchTemplateVersion: The version of the instance launch template.
         * <p>
         * Valid values:
         * A fixed template version numbe.
         * Default: The default template version is always used.
         * Latest: The latest template version is always used.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * Property loadBalancerIds: ID list of a Server Load Balancer instance.
         * <p>
         * A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerIds Property loadBalancerIds: ID list of a Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerIds(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }
        /**
         * Property loadBalancerIds: ID list of a Server Load Balancer instance.
         * <p>
         * A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerIds Property loadBalancerIds: ID list of a Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerIds(final java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }

        /**
         * Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group.
         * <p>
         * Unit: seconds.
         * Valid values: 86400 to the value of Integer.maxValue.
         * Default value: null.
         * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
         * <p>
         * @return {@code this}
         * @param maxInstanceLifetime Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. This parameter is required.
         */
        public Builder maxInstanceLifetime(final java.lang.Number maxInstanceLifetime) {
            this.props.maxInstanceLifetime(maxInstanceLifetime);
            return this;
        }
        /**
         * Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group.
         * <p>
         * Unit: seconds.
         * Valid values: 86400 to the value of Integer.maxValue.
         * Default value: null.
         * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
         * <p>
         * @return {@code this}
         * @param maxInstanceLifetime Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. This parameter is required.
         */
        public Builder maxInstanceLifetime(final com.aliyun.ros.cdk.core.IResolvable maxInstanceLifetime) {
            this.props.maxInstanceLifetime(maxInstanceLifetime);
            return this;
        }

        /**
         * Property multiAzPolicy: ECS scaling strategy for multi availability zone.
         * <p>
         * Allow value:
         * <p>
         * <ol>
         * <li>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</li>
         * <li>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</li>
         * <li>COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
         * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.</li>
         * <li>COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.</li>
         * </ol>
         * <p>
         * @return {@code this}
         * @param multiAzPolicy Property multiAzPolicy: ECS scaling strategy for multi availability zone. This parameter is required.
         */
        public Builder multiAzPolicy(final java.lang.String multiAzPolicy) {
            this.props.multiAzPolicy(multiAzPolicy);
            return this;
        }
        /**
         * Property multiAzPolicy: ECS scaling strategy for multi availability zone.
         * <p>
         * Allow value:
         * <p>
         * <ol>
         * <li>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</li>
         * <li>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</li>
         * <li>COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
         * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.</li>
         * <li>COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.</li>
         * </ol>
         * <p>
         * @return {@code this}
         * @param multiAzPolicy Property multiAzPolicy: ECS scaling strategy for multi availability zone. This parameter is required.
         */
        public Builder multiAzPolicy(final com.aliyun.ros.cdk.core.IResolvable multiAzPolicy) {
            this.props.multiAzPolicy(multiAzPolicy);
            return this;
        }

        /**
         * Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
         * <p>
         * @return {@code this}
         * @param notificationConfigurations Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS. This parameter is required.
         */
        public Builder notificationConfigurations(final com.aliyun.ros.cdk.core.IResolvable notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }
        /**
         * Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
         * <p>
         * @return {@code this}
         * @param notificationConfigurations Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS. This parameter is required.
         */
        public Builder notificationConfigurations(final java.util.List<? extends java.lang.Object> notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }

        /**
         * Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.
         * <p>
         * Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
         * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
         * <p>
         * @return {@code this}
         * @param onDemandBaseCapacity Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. This parameter is required.
         */
        public Builder onDemandBaseCapacity(final java.lang.Number onDemandBaseCapacity) {
            this.props.onDemandBaseCapacity(onDemandBaseCapacity);
            return this;
        }
        /**
         * Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.
         * <p>
         * Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
         * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
         * <p>
         * @return {@code this}
         * @param onDemandBaseCapacity Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. This parameter is required.
         */
        public Builder onDemandBaseCapacity(final com.aliyun.ros.cdk.core.IResolvable onDemandBaseCapacity) {
            this.props.onDemandBaseCapacity(onDemandBaseCapacity);
            return this;
        }

        /**
         * Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.
         * <p>
         * This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
         * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
         * <p>
         * @return {@code this}
         * @param onDemandPercentageAboveBaseCapacity Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter is required.
         */
        public Builder onDemandPercentageAboveBaseCapacity(final java.lang.Number onDemandPercentageAboveBaseCapacity) {
            this.props.onDemandPercentageAboveBaseCapacity(onDemandPercentageAboveBaseCapacity);
            return this;
        }
        /**
         * Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.
         * <p>
         * This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
         * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
         * <p>
         * @return {@code this}
         * @param onDemandPercentageAboveBaseCapacity Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter is required.
         */
        public Builder onDemandPercentageAboveBaseCapacity(final com.aliyun.ros.cdk.core.IResolvable onDemandPercentageAboveBaseCapacity) {
            this.props.onDemandPercentageAboveBaseCapacity(onDemandPercentageAboveBaseCapacity);
            return this;
        }

        /**
         * Property protectedInstances: ECS instances of protected mode in the scaling group.
         * <p>
         * @return {@code this}
         * @param protectedInstances Property protectedInstances: ECS instances of protected mode in the scaling group. This parameter is required.
         */
        public Builder protectedInstances(final com.aliyun.ros.cdk.core.IResolvable protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }
        /**
         * Property protectedInstances: ECS instances of protected mode in the scaling group.
         * <p>
         * @return {@code this}
         * @param protectedInstances Property protectedInstances: ECS instances of protected mode in the scaling group. This parameter is required.
         */
        public Builder protectedInstances(final java.util.List<? extends java.lang.Object> protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }

        /**
         * Property removalPolicys: Policy for removing ECS instances from the scaling group.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>OldestInstance: removes the first ECS instance attached to the scaling group.</li>
         * <li>NewestInstance: removes the first ECS instance attached to the scaling group.</li>
         * <li>OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.</li>
         * <li>CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
         * You can enter up to three removal policies.
         * You cannot set any item of RemovalPolicys to the same value.
         * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
         * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group. This parameter is required.
         */
        public Builder removalPolicys(final com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }
        /**
         * Property removalPolicys: Policy for removing ECS instances from the scaling group.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>OldestInstance: removes the first ECS instance attached to the scaling group.</li>
         * <li>NewestInstance: removes the first ECS instance attached to the scaling group.</li>
         * <li>OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.</li>
         * <li>CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
         * You can enter up to three removal policies.
         * You cannot set any item of RemovalPolicys to the same value.
         * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
         * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group. This parameter is required.
         */
        public Builder removalPolicys(final java.util.List<? extends java.lang.Object> removalPolicys) {
            this.props.removalPolicys(removalPolicys);
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
         * Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).
         * <p>
         * The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
         * If this parameter is not specified, the default value is ScalingGroupId.
         * <p>
         * @return {@code this}
         * @param scalingGroupName Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). This parameter is required.
         */
        public Builder scalingGroupName(final java.lang.String scalingGroupName) {
            this.props.scalingGroupName(scalingGroupName);
            return this;
        }
        /**
         * Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).
         * <p>
         * The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
         * If this parameter is not specified, the default value is ScalingGroupId.
         * <p>
         * @return {@code this}
         * @param scalingGroupName Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). This parameter is required.
         */
        public Builder scalingGroupName(final com.aliyun.ros.cdk.core.IResolvable scalingGroupName) {
            this.props.scalingGroupName(scalingGroupName);
            return this;
        }

        /**
         * Property scalingPolicy: The reclaim mode of the scaling group.
         * <p>
         * Valid values:
         * recycle
         * release
         * forcerelease
         * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
         * <p>
         * @return {@code this}
         * @param scalingPolicy Property scalingPolicy: The reclaim mode of the scaling group. This parameter is required.
         */
        public Builder scalingPolicy(final java.lang.String scalingPolicy) {
            this.props.scalingPolicy(scalingPolicy);
            return this;
        }
        /**
         * Property scalingPolicy: The reclaim mode of the scaling group.
         * <p>
         * Valid values:
         * recycle
         * release
         * forcerelease
         * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
         * <p>
         * @return {@code this}
         * @param scalingPolicy Property scalingPolicy: The reclaim mode of the scaling group. This parameter is required.
         */
        public Builder scalingPolicy(final com.aliyun.ros.cdk.core.IResolvable scalingPolicy) {
            this.props.scalingPolicy(scalingPolicy);
            return this;
        }

        /**
         * Property serverGroups: The config of server group.
         * <p>
         * @return {@code this}
         * @param serverGroups Property serverGroups: The config of server group. This parameter is required.
         */
        public Builder serverGroups(final com.aliyun.ros.cdk.core.IResolvable serverGroups) {
            this.props.serverGroups(serverGroups);
            return this;
        }
        /**
         * Property serverGroups: The config of server group.
         * <p>
         * @return {@code this}
         * @param serverGroups Property serverGroups: The config of server group. This parameter is required.
         */
        public Builder serverGroups(final java.util.List<? extends java.lang.Object> serverGroups) {
            this.props.serverGroups(serverGroups);
            return this;
        }

        /**
         * Property spotAllocationStrategy: The allocation policy of preemptible instances.
         * <p>
         * You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.</li>
         * <li>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
         * Default value: priority.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param spotAllocationStrategy Property spotAllocationStrategy: The allocation policy of preemptible instances. This parameter is required.
         */
        public Builder spotAllocationStrategy(final java.lang.String spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }
        /**
         * Property spotAllocationStrategy: The allocation policy of preemptible instances.
         * <p>
         * You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
         * <p>
         * <ul>
         * <li>priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.</li>
         * <li>lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
         * Default value: priority.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param spotAllocationStrategy Property spotAllocationStrategy: The allocation policy of preemptible instances. This parameter is required.
         */
        public Builder spotAllocationStrategy(final com.aliyun.ros.cdk.core.IResolvable spotAllocationStrategy) {
            this.props.spotAllocationStrategy(spotAllocationStrategy);
            return this;
        }

        /**
         * Property spotInstancePools: The number of instance types that are available.
         * <p>
         * The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
         * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
         * <p>
         * @return {@code this}
         * @param spotInstancePools Property spotInstancePools: The number of instance types that are available. This parameter is required.
         */
        public Builder spotInstancePools(final java.lang.Number spotInstancePools) {
            this.props.spotInstancePools(spotInstancePools);
            return this;
        }
        /**
         * Property spotInstancePools: The number of instance types that are available.
         * <p>
         * The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
         * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
         * <p>
         * @return {@code this}
         * @param spotInstancePools Property spotInstancePools: The number of instance types that are available. This parameter is required.
         */
        public Builder spotInstancePools(final com.aliyun.ros.cdk.core.IResolvable spotInstancePools) {
            this.props.spotInstancePools(spotInstancePools);
            return this;
        }

        /**
         * Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.
         * <p>
         * If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
         * <p>
         * @return {@code this}
         * @param spotInstanceRemedy Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. This parameter is required.
         */
        public Builder spotInstanceRemedy(final java.lang.Boolean spotInstanceRemedy) {
            this.props.spotInstanceRemedy(spotInstanceRemedy);
            return this;
        }
        /**
         * Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.
         * <p>
         * If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
         * <p>
         * @return {@code this}
         * @param spotInstanceRemedy Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. This parameter is required.
         */
        public Builder spotInstanceRemedy(final com.aliyun.ros.cdk.core.IResolvable spotInstanceRemedy) {
            this.props.spotInstanceRemedy(spotInstanceRemedy);
            return this;
        }

        /**
         * Property standbyInstances: ECS instances of standby mode in the scaling group.
         * <p>
         * @return {@code this}
         * @param standbyInstances Property standbyInstances: ECS instances of standby mode in the scaling group. This parameter is required.
         */
        public Builder standbyInstances(final com.aliyun.ros.cdk.core.IResolvable standbyInstances) {
            this.props.standbyInstances(standbyInstances);
            return this;
        }
        /**
         * Property standbyInstances: ECS instances of standby mode in the scaling group.
         * <p>
         * @return {@code this}
         * @param standbyInstances Property standbyInstances: ECS instances of standby mode in the scaling group. This parameter is required.
         */
        public Builder standbyInstances(final java.util.List<? extends java.lang.Object> standbyInstances) {
            this.props.standbyInstances(standbyInstances);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingGroup build() {
            return new com.aliyun.ros.cdk.ess.ScalingGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

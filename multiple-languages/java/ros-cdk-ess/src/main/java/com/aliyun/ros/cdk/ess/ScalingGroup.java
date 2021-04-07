package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.496Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingGroup")
public class ScalingGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
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
    public ScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingGroupName: Scaling group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Value range: [0, 1000].
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
         * Value range: [0, 1000].
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
         * Value range: [0, 1000].
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
         * Value range: [0, 1000].
         * <p>
         * @return {@code this}
         * @param minSize Property minSize: Minimum number of ECS instances in the scaling group. This parameter is required.
         */
        public Builder minSize(final com.aliyun.ros.cdk.core.IResolvable minSize) {
            this.props.minSize(minSize);
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
        public Builder loadBalancerIds(final java.util.List<? extends java.lang.Object> loadBalancerIds) {
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
        public Builder loadBalancerIds(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
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
         * Property removalPolicys: Policy for removing ECS instances from the scaling group.
         * <p>
         * Optional values:
         * OldestInstance: removes the first ECS instance attached to the scaling group.
         * NewestInstance: removes the first ECS instance attached to the scaling group.
         * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
         * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
         * <p>
         * @return {@code this}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group. This parameter is required.
         */
        public Builder removalPolicys(final java.util.List<? extends java.lang.Object> removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }
        /**
         * Property removalPolicys: Policy for removing ECS instances from the scaling group.
         * <p>
         * Optional values:
         * OldestInstance: removes the first ECS instance attached to the scaling group.
         * NewestInstance: removes the first ECS instance attached to the scaling group.
         * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
         * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
         * <p>
         * @return {@code this}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group. This parameter is required.
         */
        public Builder removalPolicys(final com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.props.removalPolicys(removalPolicys);
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
         * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingGroup}.
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

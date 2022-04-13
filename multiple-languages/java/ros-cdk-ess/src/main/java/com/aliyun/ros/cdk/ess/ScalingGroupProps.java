package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.022Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingGroupProps")
@software.amazon.jsii.Jsii.Proxy(ScalingGroupProps.Jsii$Proxy.class)
public interface ScalingGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property maxSize: Maximum number of ECS instances in the scaling group.
     * <p>
     * Value range: [0, 1000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxSize();

    /**
     * Property minSize: Minimum number of ECS instances in the scaling group.
     * <p>
     * Value range: [0, 1000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMinSize();

    /**
     * Property dbInstanceIds: ID list of an RDS instance.
     * <p>
     * A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIds() {
        return null;
    }

    /**
     * Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
     * <p>
     * Value range: [0, 86400].
     * The default value is 300s.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultCooldown() {
        return null;
    }

    /**
     * Property desiredCapacity: The expected number of ECS instances in a scaling group.
     * <p>
     * The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesiredCapacity() {
        return null;
    }

    /**
     * Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * <p>
     * Default to False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupDeletionProtection() {
        return null;
    }

    /**
     * Property healthCheckType: The health check type.
     * <p>
     * Allow values is "ECS" and "NONE", default to "ECS".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
        return null;
    }

    /**
     * Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     * Property launchTemplateVersion: The version of the instance launch template.
     * <p>
     * Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return null;
    }

    /**
     * Property loadBalancerIds: ID list of a Server Load Balancer instance.
     * <p>
     * A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerIds() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAzPolicy() {
        return null;
    }

    /**
     * Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationConfigurations() {
        return null;
    }

    /**
     * Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectedInstances() {
        return null;
    }

    /**
     * Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * <p>
     * Optional values:
     * OldestInstance: removes the first ECS instance attached to the scaling group.
     * NewestInstance: removes the first ECS instance attached to the scaling group.
     * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemovalPolicys() {
        return null;
    }

    /**
     * Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).
     * <p>
     * The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupName() {
        return null;
    }

    /**
     * Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyInstances() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupProps> {
        java.lang.Object maxSize;
        java.lang.Object minSize;
        java.lang.Object dbInstanceIds;
        java.lang.Object defaultCooldown;
        java.lang.Object desiredCapacity;
        java.lang.Object groupDeletionProtection;
        java.lang.Object healthCheckType;
        java.lang.Object instanceId;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateVersion;
        java.lang.Object loadBalancerIds;
        java.lang.Object multiAzPolicy;
        java.lang.Object notificationConfigurations;
        java.lang.Object protectedInstances;
        java.lang.Object removalPolicys;
        java.lang.Object scalingGroupName;
        java.lang.Object standbyInstances;
        java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags;
        java.lang.Object vSwitchId;
        java.lang.Object vSwitchIds;

        /**
         * Sets the value of {@link ScalingGroupProps#getMaxSize}
         * @param maxSize Property maxSize: Maximum number of ECS instances in the scaling group. This parameter is required.
         *                Value range: [0, 1000].
         * @return {@code this}
         */
        public Builder maxSize(java.lang.Number maxSize) {
            this.maxSize = maxSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getMaxSize}
         * @param maxSize Property maxSize: Maximum number of ECS instances in the scaling group. This parameter is required.
         *                Value range: [0, 1000].
         * @return {@code this}
         */
        public Builder maxSize(com.aliyun.ros.cdk.core.IResolvable maxSize) {
            this.maxSize = maxSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getMinSize}
         * @param minSize Property minSize: Minimum number of ECS instances in the scaling group. This parameter is required.
         *                Value range: [0, 1000].
         * @return {@code this}
         */
        public Builder minSize(java.lang.Number minSize) {
            this.minSize = minSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getMinSize}
         * @param minSize Property minSize: Minimum number of ECS instances in the scaling group. This parameter is required.
         *                Value range: [0, 1000].
         * @return {@code this}
         */
        public Builder minSize(com.aliyun.ros.cdk.core.IResolvable minSize) {
            this.minSize = minSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDbInstanceIds}
         * @param dbInstanceIds Property dbInstanceIds: ID list of an RDS instance.
         *                      A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
         * @return {@code this}
         */
        public Builder dbInstanceIds(java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.dbInstanceIds = dbInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDbInstanceIds}
         * @param dbInstanceIds Property dbInstanceIds: ID list of an RDS instance.
         *                      A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
         * @return {@code this}
         */
        public Builder dbInstanceIds(com.aliyun.ros.cdk.core.IResolvable dbInstanceIds) {
            this.dbInstanceIds = dbInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDefaultCooldown}
         * @param defaultCooldown Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
         *                        Value range: [0, 86400].
         *                        The default value is 300s.
         * @return {@code this}
         */
        public Builder defaultCooldown(java.lang.Number defaultCooldown) {
            this.defaultCooldown = defaultCooldown;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDefaultCooldown}
         * @param defaultCooldown Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
         *                        Value range: [0, 86400].
         *                        The default value is 300s.
         * @return {@code this}
         */
        public Builder defaultCooldown(com.aliyun.ros.cdk.core.IResolvable defaultCooldown) {
            this.defaultCooldown = defaultCooldown;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDesiredCapacity}
         * @param desiredCapacity Property desiredCapacity: The expected number of ECS instances in a scaling group.
         *                        The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
         * @return {@code this}
         */
        public Builder desiredCapacity(java.lang.Number desiredCapacity) {
            this.desiredCapacity = desiredCapacity;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getDesiredCapacity}
         * @param desiredCapacity Property desiredCapacity: The expected number of ECS instances in a scaling group.
         *                        The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
         * @return {@code this}
         */
        public Builder desiredCapacity(com.aliyun.ros.cdk.core.IResolvable desiredCapacity) {
            this.desiredCapacity = desiredCapacity;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getGroupDeletionProtection}
         * @param groupDeletionProtection Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
         *                                Default to False.
         * @return {@code this}
         */
        public Builder groupDeletionProtection(java.lang.Boolean groupDeletionProtection) {
            this.groupDeletionProtection = groupDeletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getGroupDeletionProtection}
         * @param groupDeletionProtection Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
         *                                Default to False.
         * @return {@code this}
         */
        public Builder groupDeletionProtection(com.aliyun.ros.cdk.core.IResolvable groupDeletionProtection) {
            this.groupDeletionProtection = groupDeletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getHealthCheckType}
         * @param healthCheckType Property healthCheckType: The health check type.
         *                        Allow values is "ECS" and "NONE", default to "ECS".
         * @return {@code this}
         */
        public Builder healthCheckType(java.lang.String healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getHealthCheckType}
         * @param healthCheckType Property healthCheckType: The health check type.
         *                        Allow values is "ECS" and "NONE", default to "ECS".
         * @return {@code this}
         */
        public Builder healthCheckType(com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template.
         *                              Valid values:
         *                              A fixed template version numbe.
         *                              Default: The default template version is always used.
         *                              Latest: The latest template version is always used.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: The version of the instance launch template.
         *                              Valid values:
         *                              A fixed template version numbe.
         *                              Default: The default template version is always used.
         *                              Latest: The latest template version is always used.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLoadBalancerIds}
         * @param loadBalancerIds Property loadBalancerIds: ID list of a Server Load Balancer instance.
         *                        A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
         * @return {@code this}
         */
        public Builder loadBalancerIds(java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getLoadBalancerIds}
         * @param loadBalancerIds Property loadBalancerIds: ID list of a Server Load Balancer instance.
         *                        A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
         * @return {@code this}
         */
        public Builder loadBalancerIds(com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getMultiAzPolicy}
         * @param multiAzPolicy Property multiAzPolicy: ECS scaling strategy for multi availability zone.
         *                      Allow value:
         *                      <p>
         *                      <ol>
         *                      <li>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</li>
         *                      <li>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</li>
         *                      </ol>
         * @return {@code this}
         */
        public Builder multiAzPolicy(java.lang.String multiAzPolicy) {
            this.multiAzPolicy = multiAzPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getMultiAzPolicy}
         * @param multiAzPolicy Property multiAzPolicy: ECS scaling strategy for multi availability zone.
         *                      Allow value:
         *                      <p>
         *                      <ol>
         *                      <li>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</li>
         *                      <li>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</li>
         *                      </ol>
         * @return {@code this}
         */
        public Builder multiAzPolicy(com.aliyun.ros.cdk.core.IResolvable multiAzPolicy) {
            this.multiAzPolicy = multiAzPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getNotificationConfigurations}
         * @param notificationConfigurations Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
         * @return {@code this}
         */
        public Builder notificationConfigurations(com.aliyun.ros.cdk.core.IResolvable notificationConfigurations) {
            this.notificationConfigurations = notificationConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getNotificationConfigurations}
         * @param notificationConfigurations Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
         * @return {@code this}
         */
        public Builder notificationConfigurations(java.util.List<? extends java.lang.Object> notificationConfigurations) {
            this.notificationConfigurations = notificationConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getProtectedInstances}
         * @param protectedInstances Property protectedInstances: ECS instances of protected mode in the scaling group.
         * @return {@code this}
         */
        public Builder protectedInstances(java.util.List<? extends java.lang.Object> protectedInstances) {
            this.protectedInstances = protectedInstances;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getProtectedInstances}
         * @param protectedInstances Property protectedInstances: ECS instances of protected mode in the scaling group.
         * @return {@code this}
         */
        public Builder protectedInstances(com.aliyun.ros.cdk.core.IResolvable protectedInstances) {
            this.protectedInstances = protectedInstances;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getRemovalPolicys}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group.
         *                       Optional values:
         *                       OldestInstance: removes the first ECS instance attached to the scaling group.
         *                       NewestInstance: removes the first ECS instance attached to the scaling group.
         *                       OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
         *                       Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
         * @return {@code this}
         */
        public Builder removalPolicys(java.util.List<? extends java.lang.Object> removalPolicys) {
            this.removalPolicys = removalPolicys;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getRemovalPolicys}
         * @param removalPolicys Property removalPolicys: Policy for removing ECS instances from the scaling group.
         *                       Optional values:
         *                       OldestInstance: removes the first ECS instance attached to the scaling group.
         *                       NewestInstance: removes the first ECS instance attached to the scaling group.
         *                       OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
         *                       Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
         * @return {@code this}
         */
        public Builder removalPolicys(com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.removalPolicys = removalPolicys;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getScalingGroupName}
         * @param scalingGroupName Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).
         *                         The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
         *                         If this parameter is not specified, the default value is ScalingGroupId.
         * @return {@code this}
         */
        public Builder scalingGroupName(java.lang.String scalingGroupName) {
            this.scalingGroupName = scalingGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getScalingGroupName}
         * @param scalingGroupName Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).
         *                         The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
         *                         If this parameter is not specified, the default value is ScalingGroupId.
         * @return {@code this}
         */
        public Builder scalingGroupName(com.aliyun.ros.cdk.core.IResolvable scalingGroupName) {
            this.scalingGroupName = scalingGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getStandbyInstances}
         * @param standbyInstances Property standbyInstances: ECS instances of standby mode in the scaling group.
         * @return {@code this}
         */
        public Builder standbyInstances(java.util.List<? extends java.lang.Object> standbyInstances) {
            this.standbyInstances = standbyInstances;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getStandbyInstances}
         * @param standbyInstances Property standbyInstances: ECS instances of standby mode in the scaling group.
         * @return {@code this}
         */
        public Builder standbyInstances(com.aliyun.ros.cdk.core.IResolvable standbyInstances) {
            this.standbyInstances = standbyInstances;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScalingGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupProps {
        private final java.lang.Object maxSize;
        private final java.lang.Object minSize;
        private final java.lang.Object dbInstanceIds;
        private final java.lang.Object defaultCooldown;
        private final java.lang.Object desiredCapacity;
        private final java.lang.Object groupDeletionProtection;
        private final java.lang.Object healthCheckType;
        private final java.lang.Object instanceId;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object loadBalancerIds;
        private final java.lang.Object multiAzPolicy;
        private final java.lang.Object notificationConfigurations;
        private final java.lang.Object protectedInstances;
        private final java.lang.Object removalPolicys;
        private final java.lang.Object scalingGroupName;
        private final java.lang.Object standbyInstances;
        private final java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object vSwitchIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.maxSize = software.amazon.jsii.Kernel.get(this, "maxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minSize = software.amazon.jsii.Kernel.get(this, "minSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIds = software.amazon.jsii.Kernel.get(this, "dbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultCooldown = software.amazon.jsii.Kernel.get(this, "defaultCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desiredCapacity = software.amazon.jsii.Kernel.get(this, "desiredCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupDeletionProtection = software.amazon.jsii.Kernel.get(this, "groupDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIds = software.amazon.jsii.Kernel.get(this, "loadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAzPolicy = software.amazon.jsii.Kernel.get(this, "multiAzPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationConfigurations = software.amazon.jsii.Kernel.get(this, "notificationConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectedInstances = software.amazon.jsii.Kernel.get(this, "protectedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removalPolicys = software.amazon.jsii.Kernel.get(this, "removalPolicys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupName = software.amazon.jsii.Kernel.get(this, "scalingGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyInstances = software.amazon.jsii.Kernel.get(this, "standbyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty.class)));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.maxSize = java.util.Objects.requireNonNull(builder.maxSize, "maxSize is required");
            this.minSize = java.util.Objects.requireNonNull(builder.minSize, "minSize is required");
            this.dbInstanceIds = builder.dbInstanceIds;
            this.defaultCooldown = builder.defaultCooldown;
            this.desiredCapacity = builder.desiredCapacity;
            this.groupDeletionProtection = builder.groupDeletionProtection;
            this.healthCheckType = builder.healthCheckType;
            this.instanceId = builder.instanceId;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateVersion = builder.launchTemplateVersion;
            this.loadBalancerIds = builder.loadBalancerIds;
            this.multiAzPolicy = builder.multiAzPolicy;
            this.notificationConfigurations = builder.notificationConfigurations;
            this.protectedInstances = builder.protectedInstances;
            this.removalPolicys = builder.removalPolicys;
            this.scalingGroupName = builder.scalingGroupName;
            this.standbyInstances = builder.standbyInstances;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)builder.tags;
            this.vSwitchId = builder.vSwitchId;
            this.vSwitchIds = builder.vSwitchIds;
        }

        @Override
        public final java.lang.Object getMaxSize() {
            return this.maxSize;
        }

        @Override
        public final java.lang.Object getMinSize() {
            return this.minSize;
        }

        @Override
        public final java.lang.Object getDbInstanceIds() {
            return this.dbInstanceIds;
        }

        @Override
        public final java.lang.Object getDefaultCooldown() {
            return this.defaultCooldown;
        }

        @Override
        public final java.lang.Object getDesiredCapacity() {
            return this.desiredCapacity;
        }

        @Override
        public final java.lang.Object getGroupDeletionProtection() {
            return this.groupDeletionProtection;
        }

        @Override
        public final java.lang.Object getHealthCheckType() {
            return this.healthCheckType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
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
        public final java.lang.Object getLoadBalancerIds() {
            return this.loadBalancerIds;
        }

        @Override
        public final java.lang.Object getMultiAzPolicy() {
            return this.multiAzPolicy;
        }

        @Override
        public final java.lang.Object getNotificationConfigurations() {
            return this.notificationConfigurations;
        }

        @Override
        public final java.lang.Object getProtectedInstances() {
            return this.protectedInstances;
        }

        @Override
        public final java.lang.Object getRemovalPolicys() {
            return this.removalPolicys;
        }

        @Override
        public final java.lang.Object getScalingGroupName() {
            return this.scalingGroupName;
        }

        @Override
        public final java.lang.Object getStandbyInstances() {
            return this.standbyInstances;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("maxSize", om.valueToTree(this.getMaxSize()));
            data.set("minSize", om.valueToTree(this.getMinSize()));
            if (this.getDbInstanceIds() != null) {
                data.set("dbInstanceIds", om.valueToTree(this.getDbInstanceIds()));
            }
            if (this.getDefaultCooldown() != null) {
                data.set("defaultCooldown", om.valueToTree(this.getDefaultCooldown()));
            }
            if (this.getDesiredCapacity() != null) {
                data.set("desiredCapacity", om.valueToTree(this.getDesiredCapacity()));
            }
            if (this.getGroupDeletionProtection() != null) {
                data.set("groupDeletionProtection", om.valueToTree(this.getGroupDeletionProtection()));
            }
            if (this.getHealthCheckType() != null) {
                data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getLoadBalancerIds() != null) {
                data.set("loadBalancerIds", om.valueToTree(this.getLoadBalancerIds()));
            }
            if (this.getMultiAzPolicy() != null) {
                data.set("multiAzPolicy", om.valueToTree(this.getMultiAzPolicy()));
            }
            if (this.getNotificationConfigurations() != null) {
                data.set("notificationConfigurations", om.valueToTree(this.getNotificationConfigurations()));
            }
            if (this.getProtectedInstances() != null) {
                data.set("protectedInstances", om.valueToTree(this.getProtectedInstances()));
            }
            if (this.getRemovalPolicys() != null) {
                data.set("removalPolicys", om.valueToTree(this.getRemovalPolicys()));
            }
            if (this.getScalingGroupName() != null) {
                data.set("scalingGroupName", om.valueToTree(this.getScalingGroupName()));
            }
            if (this.getStandbyInstances() != null) {
                data.set("standbyInstances", om.valueToTree(this.getStandbyInstances()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ScalingGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingGroupProps.Jsii$Proxy that = (ScalingGroupProps.Jsii$Proxy) o;

            if (!maxSize.equals(that.maxSize)) return false;
            if (!minSize.equals(that.minSize)) return false;
            if (this.dbInstanceIds != null ? !this.dbInstanceIds.equals(that.dbInstanceIds) : that.dbInstanceIds != null) return false;
            if (this.defaultCooldown != null ? !this.defaultCooldown.equals(that.defaultCooldown) : that.defaultCooldown != null) return false;
            if (this.desiredCapacity != null ? !this.desiredCapacity.equals(that.desiredCapacity) : that.desiredCapacity != null) return false;
            if (this.groupDeletionProtection != null ? !this.groupDeletionProtection.equals(that.groupDeletionProtection) : that.groupDeletionProtection != null) return false;
            if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.loadBalancerIds != null ? !this.loadBalancerIds.equals(that.loadBalancerIds) : that.loadBalancerIds != null) return false;
            if (this.multiAzPolicy != null ? !this.multiAzPolicy.equals(that.multiAzPolicy) : that.multiAzPolicy != null) return false;
            if (this.notificationConfigurations != null ? !this.notificationConfigurations.equals(that.notificationConfigurations) : that.notificationConfigurations != null) return false;
            if (this.protectedInstances != null ? !this.protectedInstances.equals(that.protectedInstances) : that.protectedInstances != null) return false;
            if (this.removalPolicys != null ? !this.removalPolicys.equals(that.removalPolicys) : that.removalPolicys != null) return false;
            if (this.scalingGroupName != null ? !this.scalingGroupName.equals(that.scalingGroupName) : that.scalingGroupName != null) return false;
            if (this.standbyInstances != null ? !this.standbyInstances.equals(that.standbyInstances) : that.standbyInstances != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.maxSize.hashCode();
            result = 31 * result + (this.minSize.hashCode());
            result = 31 * result + (this.dbInstanceIds != null ? this.dbInstanceIds.hashCode() : 0);
            result = 31 * result + (this.defaultCooldown != null ? this.defaultCooldown.hashCode() : 0);
            result = 31 * result + (this.desiredCapacity != null ? this.desiredCapacity.hashCode() : 0);
            result = 31 * result + (this.groupDeletionProtection != null ? this.groupDeletionProtection.hashCode() : 0);
            result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIds != null ? this.loadBalancerIds.hashCode() : 0);
            result = 31 * result + (this.multiAzPolicy != null ? this.multiAzPolicy.hashCode() : 0);
            result = 31 * result + (this.notificationConfigurations != null ? this.notificationConfigurations.hashCode() : 0);
            result = 31 * result + (this.protectedInstances != null ? this.protectedInstances.hashCode() : 0);
            result = 31 * result + (this.removalPolicys != null ? this.removalPolicys.hashCode() : 0);
            result = 31 * result + (this.scalingGroupName != null ? this.scalingGroupName.hashCode() : 0);
            result = 31 * result + (this.standbyInstances != null ? this.standbyInstances.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            return result;
        }
    }
}

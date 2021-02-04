package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.927Z")
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
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingGroup> {
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
        private final com.aliyun.ros.cdk.ess.ScalingGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param maxSize This parameter is required.
         */
        public Builder maxSize(final java.lang.Number maxSize) {
            this.props.maxSize(maxSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param minSize This parameter is required.
         */
        public Builder minSize(final java.lang.Number minSize) {
            this.props.minSize(minSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceIds This parameter is required.
         */
        public Builder dbInstanceIds(final java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceIds This parameter is required.
         */
        public Builder dbInstanceIds(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultCooldown This parameter is required.
         */
        public Builder defaultCooldown(final java.lang.Number defaultCooldown) {
            this.props.defaultCooldown(defaultCooldown);
            return this;
        }

        /**
         * @return {@code this}
         * @param desiredCapacity This parameter is required.
         */
        public Builder desiredCapacity(final java.lang.Number desiredCapacity) {
            this.props.desiredCapacity(desiredCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupDeletionProtection This parameter is required.
         */
        public Builder groupDeletionProtection(final java.lang.Boolean groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupDeletionProtection This parameter is required.
         */
        public Builder groupDeletionProtection(final com.aliyun.ros.cdk.core.IResolvable groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckType This parameter is required.
         */
        public Builder healthCheckType(final java.lang.String healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
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
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerIds This parameter is required.
         */
        public Builder loadBalancerIds(final java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerIds This parameter is required.
         */
        public Builder loadBalancerIds(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiAzPolicy This parameter is required.
         */
        public Builder multiAzPolicy(final java.lang.String multiAzPolicy) {
            this.props.multiAzPolicy(multiAzPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param notificationConfigurations This parameter is required.
         */
        public Builder notificationConfigurations(final com.aliyun.ros.cdk.core.IResolvable notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }
        /**
         * @return {@code this}
         * @param notificationConfigurations This parameter is required.
         */
        public Builder notificationConfigurations(final java.util.List<? extends java.lang.Object> notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }

        /**
         * @return {@code this}
         * @param protectedInstances This parameter is required.
         */
        public Builder protectedInstances(final java.util.List<? extends java.lang.Object> protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param protectedInstances This parameter is required.
         */
        public Builder protectedInstances(final com.aliyun.ros.cdk.core.IResolvable protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param removalPolicys This parameter is required.
         */
        public Builder removalPolicys(final java.util.List<? extends java.lang.Object> removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }
        /**
         * @return {@code this}
         * @param removalPolicys This parameter is required.
         */
        public Builder removalPolicys(final com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupName This parameter is required.
         */
        public Builder scalingGroupName(final java.lang.String scalingGroupName) {
            this.props.scalingGroupName(scalingGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param standbyInstances This parameter is required.
         */
        public Builder standbyInstances(final java.util.List<? extends java.lang.Object> standbyInstances) {
            this.props.standbyInstances(standbyInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param standbyInstances This parameter is required.
         */
        public Builder standbyInstances(final com.aliyun.ros.cdk.core.IResolvable standbyInstances) {
            this.props.standbyInstances(standbyInstances);
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
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
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

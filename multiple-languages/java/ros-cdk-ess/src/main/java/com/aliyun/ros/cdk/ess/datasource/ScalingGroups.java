package com.aliyun.ros.cdk.ess.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ESS::ScalingGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:35.575Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingGroups")
public class ScalingGroups extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingGroups(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingGroups(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public ScalingGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ScalingGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ScalingGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.datasource.ScalingGroups}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.datasource.ScalingGroups> {
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
        private com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupType: The type of instances that are managed by the scaling group.
         * <p>
         * Valid values:
         * ECS: the Elastic Compute Service (ECS) instances
         * ECI: the elastic container instances
         * Default value: ECS.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props().groupType(groupType);
            return this;
        }
        /**
         * Property groupType: The type of instances that are managed by the scaling group.
         * <p>
         * Valid values:
         * ECS: the Elastic Compute Service (ECS) instances
         * ECI: the elastic container instances
         * Default value: ECS.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props().groupType(groupType);
            return this;
        }

        /**
         * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingGroupIds Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported. This parameter is required.
         */
        public Builder scalingGroupIds(final com.aliyun.ros.cdk.core.IResolvable scalingGroupIds) {
            this.props().scalingGroupIds(scalingGroupIds);
            return this;
        }
        /**
         * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingGroupIds Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported. This parameter is required.
         */
        public Builder scalingGroupIds(final java.util.List<? extends java.lang.Object> scalingGroupIds) {
            this.props().scalingGroupIds(scalingGroupIds);
            return this;
        }

        /**
         * Property scalingGroupNames: The name of scaling group that you want to query.
         * <p>
         * Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingGroupNames Property scalingGroupNames: The name of scaling group that you want to query. This parameter is required.
         */
        public Builder scalingGroupNames(final com.aliyun.ros.cdk.core.IResolvable scalingGroupNames) {
            this.props().scalingGroupNames(scalingGroupNames);
            return this;
        }
        /**
         * Property scalingGroupNames: The name of scaling group that you want to query.
         * <p>
         * Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingGroupNames Property scalingGroupNames: The name of scaling group that you want to query. This parameter is required.
         */
        public Builder scalingGroupNames(final java.util.List<? extends java.lang.Object> scalingGroupNames) {
            this.props().scalingGroupNames(scalingGroupNames);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.datasource.ScalingGroups}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.datasource.ScalingGroups build() {
            return new com.aliyun.ros.cdk.ess.datasource.ScalingGroups(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps.Builder();
            }
            return this.props;
        }
    }
}

package com.aliyun.ros.cdk.ess.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ESS::ScalingConfigurations</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.783Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingConfigurations")
public class ScalingConfigurations extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingConfigurations(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingConfigurations(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingConfigurations</code>.
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
    public ScalingConfigurations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingConfigurations</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ScalingConfigurations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ESS::ScalingConfigurations</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ScalingConfigurations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurationIds() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingConfigurations: The list of scaling configurations.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurations() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurations", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.datasource.ScalingConfigurations}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.datasource.ScalingConfigurations> {
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
        private com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
         * <p>
         * Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationIds Property scalingConfigurationIds: The ID of scaling configuration that you want to query. This parameter is required.
         */
        public Builder scalingConfigurationIds(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationIds) {
            this.props().scalingConfigurationIds(scalingConfigurationIds);
            return this;
        }
        /**
         * Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
         * <p>
         * Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationIds Property scalingConfigurationIds: The ID of scaling configuration that you want to query. This parameter is required.
         */
        public Builder scalingConfigurationIds(final java.util.List<? extends java.lang.Object> scalingConfigurationIds) {
            this.props().scalingConfigurationIds(scalingConfigurationIds);
            return this;
        }

        /**
         * Property scalingConfigurationNames: The name of scaling configuration that you want to query.
         * <p>
         * Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationNames Property scalingConfigurationNames: The name of scaling configuration that you want to query. This parameter is required.
         */
        public Builder scalingConfigurationNames(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationNames) {
            this.props().scalingConfigurationNames(scalingConfigurationNames);
            return this;
        }
        /**
         * Property scalingConfigurationNames: The name of scaling configuration that you want to query.
         * <p>
         * Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationNames Property scalingConfigurationNames: The name of scaling configuration that you want to query. This parameter is required.
         */
        public Builder scalingConfigurationNames(final java.util.List<? extends java.lang.Object> scalingConfigurationNames) {
            this.props().scalingConfigurationNames(scalingConfigurationNames);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * You can use the ID to query all scaling configurations in the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props().scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * You can use the ID to query all scaling configurations in the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props().scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.datasource.ScalingConfigurations}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.datasource.ScalingConfigurations build() {
            return new com.aliyun.ros.cdk.ess.datasource.ScalingConfigurations(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ess.datasource.ScalingConfigurationsProps.Builder();
            }
            return this.props;
        }
    }
}

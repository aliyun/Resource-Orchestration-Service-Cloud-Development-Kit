package com.aliyun.ros.cdk.arms.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ARMS::SyntheticTask</code>, which is used to query the information about a scheduled synthetic monitoring task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.095Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.SyntheticTask")
public class SyntheticTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.datasource.ISyntheticTask {

    protected SyntheticTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SyntheticTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SyntheticTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SyntheticTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AvailableAssertions: The list of assertions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableAssertions() {
        return software.amazon.jsii.Kernel.get(this, "attrAvailableAssertions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommonSetting: The general settings.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonSetting() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CustomPeriod: The custom cycle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Frequency: The detection frequency.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrequency() {
        return software.amazon.jsii.Kernel.get(this, "attrFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MonitorCategory: The detection point type.
     * <p>
     * 1: PC. 2: mobile device.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MonitorConf: The monitoring configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorConf() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Monitors: The list of monitoring points.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitors() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SyntheticTaskName: The name of synthetic task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSyntheticTaskName() {
        return software.amazon.jsii.Kernel.get(this, "attrSyntheticTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskId: The ID of the synthetic monitoring task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskType: The type of the task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.datasource.SyntheticTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.datasource.SyntheticTask> {
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
        private final com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps.Builder();
        }

        /**
         * Property taskId: The ID of the synthetic monitoring task.
         * <p>
         * @return {@code this}
         * @param taskId Property taskId: The ID of the synthetic monitoring task. This parameter is required.
         */
        public Builder taskId(final java.lang.String taskId) {
            this.props.taskId(taskId);
            return this;
        }
        /**
         * Property taskId: The ID of the synthetic monitoring task.
         * <p>
         * @return {@code this}
         * @param taskId Property taskId: The ID of the synthetic monitoring task. This parameter is required.
         */
        public Builder taskId(final com.aliyun.ros.cdk.core.IResolvable taskId) {
            this.props.taskId(taskId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.datasource.SyntheticTask}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.datasource.SyntheticTask build() {
            return new com.aliyun.ros.cdk.arms.datasource.SyntheticTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

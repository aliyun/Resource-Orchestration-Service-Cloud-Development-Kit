package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::CycleTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.461Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.CycleTask")
public class CycleTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.ICycleTask {

    protected CycleTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CycleTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CycleTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CycleTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: Configuration ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Enable: Specifies whether to enable the task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FirstDateStr: The first time when the task is performed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirstDateStr() {
        return software.amazon.jsii.Kernel.get(this, "attrFirstDateStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntervalPeriod: The interval at which the task is run.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntervalPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrIntervalPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Param: The additional information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParam() {
        return software.amazon.jsii.Kernel.get(this, "attrParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeriodUnit: The unit of the scan interval.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetEndTime: The time when the task ends.
     * <p>
     * Unit: hours.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetStartTime: The time when the task is started.
     * <p>
     * Unit: hours.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskName: The task name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskType: The type of the task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CycleTaskProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.CycleTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.CycleTask> {
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
        private final com.aliyun.ros.cdk.threatdetection.CycleTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.CycleTaskProps.Builder();
        }

        /**
         * Property enable: Specifies whether to enable the task.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: yes</li>
         * <li><strong>0</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable the task. This parameter is required.
         */
        public Builder enable(final java.lang.Number enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Specifies whether to enable the task.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: yes</li>
         * <li><strong>0</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable the task. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property firstDateStr: The first time when the task is performed.
         * <p>
         * @return {@code this}
         * @param firstDateStr Property firstDateStr: The first time when the task is performed. This parameter is required.
         */
        public Builder firstDateStr(final java.lang.Number firstDateStr) {
            this.props.firstDateStr(firstDateStr);
            return this;
        }
        /**
         * Property firstDateStr: The first time when the task is performed.
         * <p>
         * @return {@code this}
         * @param firstDateStr Property firstDateStr: The first time when the task is performed. This parameter is required.
         */
        public Builder firstDateStr(final com.aliyun.ros.cdk.core.IResolvable firstDateStr) {
            this.props.firstDateStr(firstDateStr);
            return this;
        }

        /**
         * Property intervalPeriod: The interval at which the task is run.
         * <p>
         * @return {@code this}
         * @param intervalPeriod Property intervalPeriod: The interval at which the task is run. This parameter is required.
         */
        public Builder intervalPeriod(final java.lang.Number intervalPeriod) {
            this.props.intervalPeriod(intervalPeriod);
            return this;
        }
        /**
         * Property intervalPeriod: The interval at which the task is run.
         * <p>
         * @return {@code this}
         * @param intervalPeriod Property intervalPeriod: The interval at which the task is run. This parameter is required.
         */
        public Builder intervalPeriod(final com.aliyun.ros.cdk.core.IResolvable intervalPeriod) {
            this.props.intervalPeriod(intervalPeriod);
            return this;
        }

        /**
         * Property periodUnit: The unit of the scan interval.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>day</strong></li>
         * <li><strong>hour</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the scan interval. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the scan interval.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>day</strong></li>
         * <li><strong>hour</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the scan interval. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property targetEndTime: The time when the task ends.
         * <p>
         * Unit: hours.
         * <p>
         * @return {@code this}
         * @param targetEndTime Property targetEndTime: The time when the task ends. This parameter is required.
         */
        public Builder targetEndTime(final java.lang.Number targetEndTime) {
            this.props.targetEndTime(targetEndTime);
            return this;
        }
        /**
         * Property targetEndTime: The time when the task ends.
         * <p>
         * Unit: hours.
         * <p>
         * @return {@code this}
         * @param targetEndTime Property targetEndTime: The time when the task ends. This parameter is required.
         */
        public Builder targetEndTime(final com.aliyun.ros.cdk.core.IResolvable targetEndTime) {
            this.props.targetEndTime(targetEndTime);
            return this;
        }

        /**
         * Property targetStartTime: The time when the task is started.
         * <p>
         * Unit: hours.
         * <p>
         * @return {@code this}
         * @param targetStartTime Property targetStartTime: The time when the task is started. This parameter is required.
         */
        public Builder targetStartTime(final java.lang.Number targetStartTime) {
            this.props.targetStartTime(targetStartTime);
            return this;
        }
        /**
         * Property targetStartTime: The time when the task is started.
         * <p>
         * Unit: hours.
         * <p>
         * @return {@code this}
         * @param targetStartTime Property targetStartTime: The time when the task is started. This parameter is required.
         */
        public Builder targetStartTime(final com.aliyun.ros.cdk.core.IResolvable targetStartTime) {
            this.props.targetStartTime(targetStartTime);
            return this;
        }

        /**
         * Property taskName: The task name.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The task name. This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * Property taskName: The task name.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The task name. This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * Property taskType: The type of the task.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>VIRUS_VUL_SCHEDULE_SCAN</strong>: virus scan task</li>
         * <li><strong>IMAGE_SCAN</strong>: image scan task</li>
         * <li><strong>EMG_VUL_SCHEDULE_SCAN</strong>: urgent vulnerability scan task.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param taskType Property taskType: The type of the task. This parameter is required.
         */
        public Builder taskType(final java.lang.String taskType) {
            this.props.taskType(taskType);
            return this;
        }
        /**
         * Property taskType: The type of the task.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>VIRUS_VUL_SCHEDULE_SCAN</strong>: virus scan task</li>
         * <li><strong>IMAGE_SCAN</strong>: image scan task</li>
         * <li><strong>EMG_VUL_SCHEDULE_SCAN</strong>: urgent vulnerability scan task.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param taskType Property taskType: The type of the task. This parameter is required.
         */
        public Builder taskType(final com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.props.taskType(taskType);
            return this;
        }

        /**
         * Property param: The additional information.
         * <p>
         * @return {@code this}
         * @param param Property param: The additional information. This parameter is required.
         */
        public Builder param(final com.aliyun.ros.cdk.core.IResolvable param) {
            this.props.param(param);
            return this;
        }
        /**
         * Property param: The additional information.
         * <p>
         * @return {@code this}
         * @param param Property param: The additional information. This parameter is required.
         */
        public Builder param(final java.util.Map<java.lang.String, ? extends java.lang.Object> param) {
            this.props.param(param);
            return this;
        }

        /**
         * Property source: The additional source for the task.
         * <p>
         * @return {@code this}
         * @param source Property source: The additional source for the task. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The additional source for the task.
         * <p>
         * @return {@code this}
         * @param source Property source: The additional source for the task. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.CycleTask}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.CycleTask build() {
            return new com.aliyun.ros.cdk.threatdetection.CycleTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::CycleTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.552Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosCycleTask")
public class RosCycleTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCycleTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCycleTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosCycleTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCycleTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosCycleTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFirstDateStr() {
        return software.amazon.jsii.Kernel.get(this, "attrFirstDateStr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntervalPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrIntervalPeriod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParam() {
        return software.amazon.jsii.Kernel.get(this, "attrParam", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetStartTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskName() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskType() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnable() {
        return software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "enable", java.util.Objects.requireNonNull(value, "enable is required"));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enable", java.util.Objects.requireNonNull(value, "enable is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirstDateStr() {
        return software.amazon.jsii.Kernel.get(this, "firstDateStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirstDateStr(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "firstDateStr", java.util.Objects.requireNonNull(value, "firstDateStr is required"));
    }

    /**
     */
    public void setFirstDateStr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firstDateStr", java.util.Objects.requireNonNull(value, "firstDateStr is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIntervalPeriod() {
        return software.amazon.jsii.Kernel.get(this, "intervalPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntervalPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "intervalPeriod", java.util.Objects.requireNonNull(value, "intervalPeriod is required"));
    }

    /**
     */
    public void setIntervalPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intervalPeriod", java.util.Objects.requireNonNull(value, "intervalPeriod is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", java.util.Objects.requireNonNull(value, "periodUnit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetEndTime() {
        return software.amazon.jsii.Kernel.get(this, "targetEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetEndTime(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "targetEndTime", java.util.Objects.requireNonNull(value, "targetEndTime is required"));
    }

    /**
     */
    public void setTargetEndTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetEndTime", java.util.Objects.requireNonNull(value, "targetEndTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetStartTime() {
        return software.amazon.jsii.Kernel.get(this, "targetStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetStartTime(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "targetStartTime", java.util.Objects.requireNonNull(value, "targetStartTime is required"));
    }

    /**
     */
    public void setTargetStartTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetStartTime", java.util.Objects.requireNonNull(value, "targetStartTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskName() {
        return software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskType() {
        return software.amazon.jsii.Kernel.get(this, "taskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskType", java.util.Objects.requireNonNull(value, "taskType is required"));
    }

    /**
     */
    public void setTaskType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskType", java.util.Objects.requireNonNull(value, "taskType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParam() {
        return software.amazon.jsii.Kernel.get(this, "param", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParam(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "param", value);
    }

    /**
     */
    public void setParam(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "param", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosCycleTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosCycleTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.threatdetection.RosCycleTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosCycleTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final java.lang.Number enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return {@code this}
         * @param firstDateStr This parameter is required.
         */
        public Builder firstDateStr(final java.lang.Number firstDateStr) {
            this.props.firstDateStr(firstDateStr);
            return this;
        }
        /**
         * @return {@code this}
         * @param firstDateStr This parameter is required.
         */
        public Builder firstDateStr(final com.aliyun.ros.cdk.core.IResolvable firstDateStr) {
            this.props.firstDateStr(firstDateStr);
            return this;
        }

        /**
         * @return {@code this}
         * @param intervalPeriod This parameter is required.
         */
        public Builder intervalPeriod(final java.lang.Number intervalPeriod) {
            this.props.intervalPeriod(intervalPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param intervalPeriod This parameter is required.
         */
        public Builder intervalPeriod(final com.aliyun.ros.cdk.core.IResolvable intervalPeriod) {
            this.props.intervalPeriod(intervalPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetEndTime This parameter is required.
         */
        public Builder targetEndTime(final java.lang.Number targetEndTime) {
            this.props.targetEndTime(targetEndTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetEndTime This parameter is required.
         */
        public Builder targetEndTime(final com.aliyun.ros.cdk.core.IResolvable targetEndTime) {
            this.props.targetEndTime(targetEndTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetStartTime This parameter is required.
         */
        public Builder targetStartTime(final java.lang.Number targetStartTime) {
            this.props.targetStartTime(targetStartTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetStartTime This parameter is required.
         */
        public Builder targetStartTime(final com.aliyun.ros.cdk.core.IResolvable targetStartTime) {
            this.props.targetStartTime(targetStartTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskType This parameter is required.
         */
        public Builder taskType(final java.lang.String taskType) {
            this.props.taskType(taskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskType This parameter is required.
         */
        public Builder taskType(final com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.props.taskType(taskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param param This parameter is required.
         */
        public Builder param(final com.aliyun.ros.cdk.core.IResolvable param) {
            this.props.param(param);
            return this;
        }
        /**
         * @return {@code this}
         * @param param This parameter is required.
         */
        public Builder param(final java.util.Map<java.lang.String, ? extends java.lang.Object> param) {
            this.props.param(param);
            return this;
        }

        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosCycleTask}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosCycleTask build() {
            return new com.aliyun.ros.cdk.threatdetection.RosCycleTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

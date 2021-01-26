package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::AutoSnapshotPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:09.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy")
public class RosAutoSnapshotPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAutoSnapshotPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAutoSnapshotPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAutoSnapshotPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRepeatWeekdays() {
        return software.amazon.jsii.Kernel.get(this, "repeatWeekdays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepeatWeekdays(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Number> value) {
        software.amazon.jsii.Kernel.set(this, "repeatWeekdays", java.util.Objects.requireNonNull(value, "repeatWeekdays is required"));
    }

    /**
     */
    public void setRepeatWeekdays(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repeatWeekdays", java.util.Objects.requireNonNull(value, "repeatWeekdays is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getRetentionDays() {
        return software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setRetentionDays(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "retentionDays", java.util.Objects.requireNonNull(value, "retentionDays is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTimePoints() {
        return software.amazon.jsii.Kernel.get(this, "timePoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimePoints(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "timePoints", java.util.Objects.requireNonNull(value, "timePoints is required"));
    }

    /**
     */
    public void setTimePoints(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timePoints", java.util.Objects.requireNonNull(value, "timePoints is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAutoSnapshotPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAutoSnapshotPolicyName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoSnapshotPolicyName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDiskIds() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setDiskIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "diskIds", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param repeatWeekdays This parameter is required.
         */
        public Builder repeatWeekdays(final java.util.List<? extends java.lang.Number> repeatWeekdays) {
            this.props.repeatWeekdays(repeatWeekdays);
            return this;
        }
        /**
         * @return {@code this}
         * @param repeatWeekdays This parameter is required.
         */
        public Builder repeatWeekdays(final com.aliyun.ros.cdk.core.IResolvable repeatWeekdays) {
            this.props.repeatWeekdays(repeatWeekdays);
            return this;
        }

        /**
         * @return {@code this}
         * @param retentionDays This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * @return {@code this}
         * @param timePoints This parameter is required.
         */
        public Builder timePoints(final java.util.List<? extends java.lang.Object> timePoints) {
            this.props.timePoints(timePoints);
            return this;
        }
        /**
         * @return {@code this}
         * @param timePoints This parameter is required.
         */
        public Builder timePoints(final com.aliyun.ros.cdk.core.IResolvable timePoints) {
            this.props.timePoints(timePoints);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoSnapshotPolicyName This parameter is required.
         */
        public Builder autoSnapshotPolicyName(final java.lang.String autoSnapshotPolicyName) {
            this.props.autoSnapshotPolicyName(autoSnapshotPolicyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskIds This parameter is required.
         */
        public Builder diskIds(final java.util.List<java.lang.String> diskIds) {
            this.props.diskIds(diskIds);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy build() {
            return new com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

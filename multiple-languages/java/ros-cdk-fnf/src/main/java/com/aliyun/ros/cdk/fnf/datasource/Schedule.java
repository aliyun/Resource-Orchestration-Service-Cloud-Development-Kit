package com.aliyun.ros.cdk.fnf.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::FNF::Schedule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.186Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.Schedule")
public class Schedule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fnf.datasource.ISchedule {

    protected Schedule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Schedule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Schedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Schedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the time-based schedule was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCronExpression() {
        return software.amazon.jsii.Kernel.get(this, "attrCronExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the time-based schedule to be created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayload() {
        return software.amazon.jsii.Kernel.get(this, "attrPayload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduleId: The ID of the time-based schedule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleName() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.datasource.ScheduleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fnf.datasource.Schedule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fnf.datasource.Schedule> {
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
        private final com.aliyun.ros.cdk.fnf.datasource.ScheduleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fnf.datasource.ScheduleProps.Builder();
        }

        /**
         * Property flowName: The name of the flow that is associated with the time-based schedule.
         * <p>
         * The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow that is associated with the time-based schedule. This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * Property flowName: The name of the flow that is associated with the time-based schedule.
         * <p>
         * The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow that is associated with the time-based schedule. This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * Property scheduleName: The name of the time-based schedule.
         * <p>
         * The name must meet the following conventions:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param scheduleName Property scheduleName: The name of the time-based schedule. This parameter is required.
         */
        public Builder scheduleName(final java.lang.String scheduleName) {
            this.props.scheduleName(scheduleName);
            return this;
        }
        /**
         * Property scheduleName: The name of the time-based schedule.
         * <p>
         * The name must meet the following conventions:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param scheduleName Property scheduleName: The name of the time-based schedule. This parameter is required.
         */
        public Builder scheduleName(final com.aliyun.ros.cdk.core.IResolvable scheduleName) {
            this.props.scheduleName(scheduleName);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fnf.datasource.Schedule}.
         */
        @Override
        public com.aliyun.ros.cdk.fnf.datasource.Schedule build() {
            return new com.aliyun.ros.cdk.fnf.datasource.Schedule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

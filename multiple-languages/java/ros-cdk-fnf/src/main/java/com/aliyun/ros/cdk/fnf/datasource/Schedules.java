package com.aliyun.ros.cdk.fnf.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::FNF::Schedules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.476Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.Schedules")
public class Schedules extends com.aliyun.ros.cdk.core.Resource {

    protected Schedules(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Schedules(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::FNF::Schedules</code>.
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
    public Schedules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.SchedulesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::FNF::Schedules</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Schedules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.SchedulesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScheduleNames: The list of schedule names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduleNames() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Schedules: The queried time-based schedules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSchedules() {
        return software.amazon.jsii.Kernel.get(this, "attrSchedules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fnf.datasource.Schedules}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fnf.datasource.Schedules> {
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
        private final com.aliyun.ros.cdk.fnf.datasource.SchedulesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fnf.datasource.SchedulesProps.Builder();
        }

        /**
         * Property flowName: The name of the flow that is bound to the time-based schedule.
         * <p>
         * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow that is bound to the time-based schedule. This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * Property flowName: The name of the flow that is bound to the time-based schedule.
         * <p>
         * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
         * The name can contain letters, digits, underscores (<em>), and hyphens (-).
         * The name must start with a letter or an underscore (</em>).
         * The name is case-sensitive.
         * The name must be 1 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow that is bound to the time-based schedule. This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fnf.datasource.Schedules}.
         */
        @Override
        public com.aliyun.ros.cdk.fnf.datasource.Schedules build() {
            return new com.aliyun.ros.cdk.fnf.datasource.Schedules(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

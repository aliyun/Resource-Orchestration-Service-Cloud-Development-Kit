package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::AutoSnapshotPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:25.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AutoSnapshotPolicy")
public class AutoSnapshotPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected AutoSnapshotPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AutoSnapshotPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
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
    public AutoSnapshotPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoSnapshotPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AutoSnapshotPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AutoSnapshotPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.AutoSnapshotPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.AutoSnapshotPolicy> {
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
        private final com.aliyun.ros.cdk.ecs.AutoSnapshotPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.AutoSnapshotPolicyProps.Builder();
        }

        /**
         * Property repeatWeekdays: The automatic snapshot repetition dates.
         * <p>
         * The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
         * A maximum of seven time points can be selected.
         * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param repeatWeekdays Property repeatWeekdays: The automatic snapshot repetition dates. This parameter is required.
         */
        public Builder repeatWeekdays(final com.aliyun.ros.cdk.core.IResolvable repeatWeekdays) {
            this.props.repeatWeekdays(repeatWeekdays);
            return this;
        }
        /**
         * Property repeatWeekdays: The automatic snapshot repetition dates.
         * <p>
         * The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
         * A maximum of seven time points can be selected.
         * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param repeatWeekdays Property repeatWeekdays: The automatic snapshot repetition dates. This parameter is required.
         */
        public Builder repeatWeekdays(final java.util.List<? extends java.lang.Object> repeatWeekdays) {
            this.props.repeatWeekdays(repeatWeekdays);
            return this;
        }

        /**
         * Property retentionDays: The snapshot retention time, and the unit of measurement is day.
         * <p>
         * Optional values:
         * -1: The automatic snapshots are retained permanently.
         * [1, 65536]: The number of days retained.
         * Default value: -1.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: The snapshot retention time, and the unit of measurement is day. This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }
        /**
         * Property retentionDays: The snapshot retention time, and the unit of measurement is day.
         * <p>
         * Optional values:
         * -1: The automatic snapshots are retained permanently.
         * [1, 65536]: The number of days retained.
         * Default value: -1.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: The snapshot retention time, and the unit of measurement is day. This parameter is required.
         */
        public Builder retentionDays(final com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.
         * <p>
         * Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
         * A maximum of 24 time points can be selected.
         * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param timePoints Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. This parameter is required.
         */
        public Builder timePoints(final java.util.List<? extends java.lang.Object> timePoints) {
            this.props.timePoints(timePoints);
            return this;
        }
        /**
         * Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.
         * <p>
         * Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
         * A maximum of 24 time points can be selected.
         * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param timePoints Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. This parameter is required.
         */
        public Builder timePoints(final com.aliyun.ros.cdk.core.IResolvable timePoints) {
            this.props.timePoints(timePoints);
            return this;
        }

        /**
         * Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
         * <p>
         * It can consist of [2, 128] English or Chinese characters.
         * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
         * Cannot start with http:// or https://.
         * Default value: null.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyName Property autoSnapshotPolicyName: The name of the automatic snapshot policy. This parameter is required.
         */
        public Builder autoSnapshotPolicyName(final java.lang.String autoSnapshotPolicyName) {
            this.props.autoSnapshotPolicyName(autoSnapshotPolicyName);
            return this;
        }
        /**
         * Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
         * <p>
         * It can consist of [2, 128] English or Chinese characters.
         * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
         * Cannot start with http:// or https://.
         * Default value: null.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyName Property autoSnapshotPolicyName: The name of the automatic snapshot policy. This parameter is required.
         */
        public Builder autoSnapshotPolicyName(final com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyName) {
            this.props.autoSnapshotPolicyName(autoSnapshotPolicyName);
            return this;
        }

        /**
         * Property diskIds: The disk ID.
         * <p>
         * When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The disk ID. This parameter is required.
         */
        public Builder diskIds(final com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.props.diskIds(diskIds);
            return this;
        }
        /**
         * Property diskIds: The disk ID.
         * <p>
         * When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The disk ID. This parameter is required.
         */
        public Builder diskIds(final java.util.List<? extends java.lang.Object> diskIds) {
            this.props.diskIds(diskIds);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.AutoSnapshotPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.AutoSnapshotPolicy build() {
            return new com.aliyun.ros.cdk.ecs.AutoSnapshotPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

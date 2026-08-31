package com.aliyun.ros.cdk.schedulerx;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SchedulerX::Job</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:28:51.459Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.Job")
public class Job extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.schedulerx.IJob {

    protected Job(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Job(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Job(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.JobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Job(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.JobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute JobId: The ID of the job.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.JobProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.schedulerx.JobProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.schedulerx.Job}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.schedulerx.Job> {
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
        private final com.aliyun.ros.cdk.schedulerx.JobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.schedulerx.JobProps.Builder();
        }

        /**
         * Property executeMode: The execute mode of the job.
         * <p>
         * @return {@code this}
         * @param executeMode Property executeMode: The execute mode of the job. This parameter is required.
         */
        public Builder executeMode(final java.lang.String executeMode) {
            this.props.executeMode(executeMode);
            return this;
        }
        /**
         * Property executeMode: The execute mode of the job.
         * <p>
         * @return {@code this}
         * @param executeMode Property executeMode: The execute mode of the job. This parameter is required.
         */
        public Builder executeMode(final com.aliyun.ros.cdk.core.IResolvable executeMode) {
            this.props.executeMode(executeMode);
            return this;
        }

        /**
         * Property groupId: The group ID of the job.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the job. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The group ID of the job.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the job. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property jobType: The type of the job.
         * <p>
         * @return {@code this}
         * @param jobType Property jobType: The type of the job. This parameter is required.
         */
        public Builder jobType(final java.lang.String jobType) {
            this.props.jobType(jobType);
            return this;
        }
        /**
         * Property jobType: The type of the job.
         * <p>
         * @return {@code this}
         * @param jobType Property jobType: The type of the job. This parameter is required.
         */
        public Builder jobType(final com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.props.jobType(jobType);
            return this;
        }

        /**
         * Property name: The name of the job.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the job. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the job.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the job. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property namespace: The namespace of the job.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the job. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of the job.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the job. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property timeType: The time type of the job.
         * <p>
         * cron：1
         * fixed_rate：3
         * second_delay：4
         * one_time ：5
         * api：100
         * none：-1
         * <p>
         * @return {@code this}
         * @param timeType Property timeType: The time type of the job. This parameter is required.
         */
        public Builder timeType(final java.lang.Number timeType) {
            this.props.timeType(timeType);
            return this;
        }
        /**
         * Property timeType: The time type of the job.
         * <p>
         * cron：1
         * fixed_rate：3
         * second_delay：4
         * one_time ：5
         * api：100
         * none：-1
         * <p>
         * @return {@code this}
         * @param timeType Property timeType: The time type of the job. This parameter is required.
         */
        public Builder timeType(final com.aliyun.ros.cdk.core.IResolvable timeType) {
            this.props.timeType(timeType);
            return this;
        }

        /**
         * Property attemptInterval: The retry interval for a failed job, in seconds.
         * <p>
         * Defaults to 30.
         * <p>
         * @return {@code this}
         * @param attemptInterval Property attemptInterval: The retry interval for a failed job, in seconds. This parameter is required.
         */
        public Builder attemptInterval(final java.lang.Number attemptInterval) {
            this.props.attemptInterval(attemptInterval);
            return this;
        }
        /**
         * Property attemptInterval: The retry interval for a failed job, in seconds.
         * <p>
         * Defaults to 30.
         * <p>
         * @return {@code this}
         * @param attemptInterval Property attemptInterval: The retry interval for a failed job, in seconds. This parameter is required.
         */
        public Builder attemptInterval(final com.aliyun.ros.cdk.core.IResolvable attemptInterval) {
            this.props.attemptInterval(attemptInterval);
            return this;
        }

        /**
         * Property calendar: For a <code>cron</code> job, you can specify a custom calendar.
         * <p>
         * @return {@code this}
         * @param calendar Property calendar: For a <code>cron</code> job, you can specify a custom calendar. This parameter is required.
         */
        public Builder calendar(final java.lang.String calendar) {
            this.props.calendar(calendar);
            return this;
        }
        /**
         * Property calendar: For a <code>cron</code> job, you can specify a custom calendar.
         * <p>
         * @return {@code this}
         * @param calendar Property calendar: For a <code>cron</code> job, you can specify a custom calendar. This parameter is required.
         */
        public Builder calendar(final com.aliyun.ros.cdk.core.IResolvable calendar) {
            this.props.calendar(calendar);
            return this;
        }

        /**
         * Property className: The fully qualified class name of the job interface.
         * <p>
         * Required for <code>java</code> jobs.
         * <p>
         * @return {@code this}
         * @param className Property className: The fully qualified class name of the job interface. This parameter is required.
         */
        public Builder className(final java.lang.String className) {
            this.props.className(className);
            return this;
        }
        /**
         * Property className: The fully qualified class name of the job interface.
         * <p>
         * Required for <code>java</code> jobs.
         * <p>
         * @return {@code this}
         * @param className Property className: The fully qualified class name of the job interface. This parameter is required.
         */
        public Builder className(final com.aliyun.ros.cdk.core.IResolvable className) {
            this.props.className(className);
            return this;
        }

        /**
         * Property consumerSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of consumer threads per machine for processing subtasks.
         * <p>
         * Defaults to 5.
         * <p>
         * @return {@code this}
         * @param consumerSize Property consumerSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of consumer threads per machine for processing subtasks. This parameter is required.
         */
        public Builder consumerSize(final java.lang.Number consumerSize) {
            this.props.consumerSize(consumerSize);
            return this;
        }
        /**
         * Property consumerSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of consumer threads per machine for processing subtasks.
         * <p>
         * Defaults to 5.
         * <p>
         * @return {@code this}
         * @param consumerSize Property consumerSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of consumer threads per machine for processing subtasks. This parameter is required.
         */
        public Builder consumerSize(final com.aliyun.ros.cdk.core.IResolvable consumerSize) {
            this.props.consumerSize(consumerSize);
            return this;
        }

        /**
         * Property contactInfo: The contact information for the job.
         * <p>
         * <blockquote><notice></blockquote>
         * <p>
         * This parameter is deprecated.
         * <p>
         * <blockquote></notice></blockquote>
         * <p>
         * @return {@code this}
         * @param contactInfo Property contactInfo: The contact information for the job. This parameter is required.
         */
        public Builder contactInfo(final com.aliyun.ros.cdk.core.IResolvable contactInfo) {
            this.props.contactInfo(contactInfo);
            return this;
        }
        /**
         * Property contactInfo: The contact information for the job.
         * <p>
         * <blockquote><notice></blockquote>
         * <p>
         * This parameter is deprecated.
         * <p>
         * <blockquote></notice></blockquote>
         * <p>
         * @return {@code this}
         * @param contactInfo Property contactInfo: The contact information for the job. This parameter is required.
         */
        public Builder contactInfo(final java.util.List<? extends java.lang.Object> contactInfo) {
            this.props.contactInfo(contactInfo);
            return this;
        }

        /**
         * Property content: - For a <code>python</code>, <code>shell</code>, or <code>k8s</code> job, this parameter specifies the script content.
         * <p>
         * <ul>
         * <li>For a <code>go</code> job, the content must be in the following format:
         * {"jobName":"HelloWorld"}</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param content Property content: - For a <code>python</code>, <code>shell</code>, or <code>k8s</code> job, this parameter specifies the script content. This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: - For a <code>python</code>, <code>shell</code>, or <code>k8s</code> job, this parameter specifies the script content.
         * <p>
         * <ul>
         * <li>For a <code>go</code> job, the content must be in the following format:
         * {"jobName":"HelloWorld"}</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param content Property content: - For a <code>python</code>, <code>shell</code>, or <code>k8s</code> job, this parameter specifies the script content. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property dataOffset: The time offset in seconds for a <code>cron</code> job.
         * <p>
         * @return {@code this}
         * @param dataOffset Property dataOffset: The time offset in seconds for a <code>cron</code> job. This parameter is required.
         */
        public Builder dataOffset(final java.lang.Number dataOffset) {
            this.props.dataOffset(dataOffset);
            return this;
        }
        /**
         * Property dataOffset: The time offset in seconds for a <code>cron</code> job.
         * <p>
         * @return {@code this}
         * @param dataOffset Property dataOffset: The time offset in seconds for a <code>cron</code> job. This parameter is required.
         */
        public Builder dataOffset(final com.aliyun.ros.cdk.core.IResolvable dataOffset) {
            this.props.dataOffset(dataOffset);
            return this;
        }

        /**
         * Property description: The description of the job.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the job. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the job.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the job. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dispatcherSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of threads for dispatching subtasks.
         * <p>
         * Defaults to 5.
         * <p>
         * @return {@code this}
         * @param dispatcherSize Property dispatcherSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of threads for dispatching subtasks. This parameter is required.
         */
        public Builder dispatcherSize(final java.lang.Number dispatcherSize) {
            this.props.dispatcherSize(dispatcherSize);
            return this;
        }
        /**
         * Property dispatcherSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of threads for dispatching subtasks.
         * <p>
         * Defaults to 5.
         * <p>
         * @return {@code this}
         * @param dispatcherSize Property dispatcherSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of threads for dispatching subtasks. This parameter is required.
         */
        public Builder dispatcherSize(final com.aliyun.ros.cdk.core.IResolvable dispatcherSize) {
            this.props.dispatcherSize(dispatcherSize);
            return this;
        }

        /**
         * Property failEnable: Specifies whether to enable alerts for failed jobs.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Enables failure alerts.</li>
         * <li>false: Disables failure alerts.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param failEnable Property failEnable: Specifies whether to enable alerts for failed jobs. This parameter is required.
         */
        public Builder failEnable(final java.lang.Boolean failEnable) {
            this.props.failEnable(failEnable);
            return this;
        }
        /**
         * Property failEnable: Specifies whether to enable alerts for failed jobs.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Enables failure alerts.</li>
         * <li>false: Disables failure alerts.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param failEnable Property failEnable: Specifies whether to enable alerts for failed jobs. This parameter is required.
         */
        public Builder failEnable(final com.aliyun.ros.cdk.core.IResolvable failEnable) {
            this.props.failEnable(failEnable);
            return this;
        }

        /**
         * Property failTimes: The number of consecutive failures that triggers an alert.
         * <p>
         * @return {@code this}
         * @param failTimes Property failTimes: The number of consecutive failures that triggers an alert. This parameter is required.
         */
        public Builder failTimes(final java.lang.Number failTimes) {
            this.props.failTimes(failTimes);
            return this;
        }
        /**
         * Property failTimes: The number of consecutive failures that triggers an alert.
         * <p>
         * @return {@code this}
         * @param failTimes Property failTimes: The number of consecutive failures that triggers an alert. This parameter is required.
         */
        public Builder failTimes(final com.aliyun.ros.cdk.core.IResolvable failTimes) {
            this.props.failTimes(failTimes);
            return this;
        }

        /**
         * Property maxAttempt: The maximum number of retries for a failed job.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param maxAttempt Property maxAttempt: The maximum number of retries for a failed job. This parameter is required.
         */
        public Builder maxAttempt(final java.lang.Number maxAttempt) {
            this.props.maxAttempt(maxAttempt);
            return this;
        }
        /**
         * Property maxAttempt: The maximum number of retries for a failed job.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param maxAttempt Property maxAttempt: The maximum number of retries for a failed job. This parameter is required.
         */
        public Builder maxAttempt(final com.aliyun.ros.cdk.core.IResolvable maxAttempt) {
            this.props.maxAttempt(maxAttempt);
            return this;
        }

        /**
         * Property maxConcurrency: The maximum number of concurrent job instances.
         * <p>
         * Defaults to 1. If an existing job
         * instance is still running, a new one will not be triggered, even if its scheduled
         * time has passed.
         * <p>
         * @return {@code this}
         * @param maxConcurrency Property maxConcurrency: The maximum number of concurrent job instances. This parameter is required.
         */
        public Builder maxConcurrency(final java.lang.Number maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }
        /**
         * Property maxConcurrency: The maximum number of concurrent job instances.
         * <p>
         * Defaults to 1. If an existing job
         * instance is still running, a new one will not be triggered, even if its scheduled
         * time has passed.
         * <p>
         * @return {@code this}
         * @param maxConcurrency Property maxConcurrency: The maximum number of concurrent job instances. This parameter is required.
         */
        public Builder maxConcurrency(final com.aliyun.ros.cdk.core.IResolvable maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }

        /**
         * Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
         * <p>
         * <ul>
         * <li>true: Enables the alert.</li>
         * <li>false: Disables the alert.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param missWorkerEnable Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job. This parameter is required.
         */
        public Builder missWorkerEnable(final java.lang.Boolean missWorkerEnable) {
            this.props.missWorkerEnable(missWorkerEnable);
            return this;
        }
        /**
         * Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
         * <p>
         * <ul>
         * <li>true: Enables the alert.</li>
         * <li>false: Disables the alert.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param missWorkerEnable Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job. This parameter is required.
         */
        public Builder missWorkerEnable(final com.aliyun.ros.cdk.core.IResolvable missWorkerEnable) {
            this.props.missWorkerEnable(missWorkerEnable);
            return this;
        }

        /**
         * Property namespaceSource: This parameter is required only for specific third-party integrations.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: This parameter is required only for specific third-party integrations. This parameter is required.
         */
        public Builder namespaceSource(final java.lang.String namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }
        /**
         * Property namespaceSource: This parameter is required only for specific third-party integrations.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: This parameter is required only for specific third-party integrations. This parameter is required.
         */
        public Builder namespaceSource(final com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }

        /**
         * Property pageSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of subtasks retrieved per pull.
         * <p>
         * Defaults to 100.
         * <p>
         * @return {@code this}
         * @param pageSize Property pageSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of subtasks retrieved per pull. This parameter is required.
         */
        public Builder pageSize(final java.lang.Number pageSize) {
            this.props.pageSize(pageSize);
            return this;
        }
        /**
         * Property pageSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of subtasks retrieved per pull.
         * <p>
         * Defaults to 100.
         * <p>
         * @return {@code this}
         * @param pageSize Property pageSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the number of subtasks retrieved per pull. This parameter is required.
         */
        public Builder pageSize(final com.aliyun.ros.cdk.core.IResolvable pageSize) {
            this.props.pageSize(pageSize);
            return this;
        }

        /**
         * Property parameters: The parameters of the job.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters of the job. This parameter is required.
         */
        public Builder parameters(final java.lang.String parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The parameters of the job.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters of the job. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property priority: The job priority.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>1: Low</li>
         * <li>5: Medium</li>
         * <li>10: High</li>
         * <li>15: Very High</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param priority Property priority: The job priority. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The job priority.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>1: Low</li>
         * <li>5: Medium</li>
         * <li>10: High</li>
         * <li>15: Very High</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param priority Property priority: The job priority. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property queueSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of subtasks the queue can hold.
         * <p>
         * Defaults to 10000.
         * <p>
         * @return {@code this}
         * @param queueSize Property queueSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of subtasks the queue can hold. This parameter is required.
         */
        public Builder queueSize(final java.lang.Number queueSize) {
            this.props.queueSize(queueSize);
            return this;
        }
        /**
         * Property queueSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of subtasks the queue can hold.
         * <p>
         * Defaults to 10000.
         * <p>
         * @return {@code this}
         * @param queueSize Property queueSize: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of subtasks the queue can hold. This parameter is required.
         */
        public Builder queueSize(final com.aliyun.ros.cdk.core.IResolvable queueSize) {
            this.props.queueSize(queueSize);
            return this;
        }

        /**
         * Property sendChannel: The channel for sending alerts.
         * <p>
         * <ul>
         * <li>For the default channel of the application group, use <code>default</code>.</li>
         * <li>For a specific channel for the job, use <code>sms</code>, <code>mail</code>, <code>phone</code>, or <code>webhook</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sendChannel Property sendChannel: The channel for sending alerts. This parameter is required.
         */
        public Builder sendChannel(final java.lang.String sendChannel) {
            this.props.sendChannel(sendChannel);
            return this;
        }
        /**
         * Property sendChannel: The channel for sending alerts.
         * <p>
         * <ul>
         * <li>For the default channel of the application group, use <code>default</code>.</li>
         * <li>For a specific channel for the job, use <code>sms</code>, <code>mail</code>, <code>phone</code>, or <code>webhook</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sendChannel Property sendChannel: The channel for sending alerts. This parameter is required.
         */
        public Builder sendChannel(final com.aliyun.ros.cdk.core.IResolvable sendChannel) {
            this.props.sendChannel(sendChannel);
            return this;
        }

        /**
         * Property successNoticeEnable: Whether success notice is enabled for the job.
         * <p>
         * @return {@code this}
         * @param successNoticeEnable Property successNoticeEnable: Whether success notice is enabled for the job. This parameter is required.
         */
        public Builder successNoticeEnable(final java.lang.Boolean successNoticeEnable) {
            this.props.successNoticeEnable(successNoticeEnable);
            return this;
        }
        /**
         * Property successNoticeEnable: Whether success notice is enabled for the job.
         * <p>
         * @return {@code this}
         * @param successNoticeEnable Property successNoticeEnable: Whether success notice is enabled for the job. This parameter is required.
         */
        public Builder successNoticeEnable(final com.aliyun.ros.cdk.core.IResolvable successNoticeEnable) {
            this.props.successNoticeEnable(successNoticeEnable);
            return this;
        }

        /**
         * Property taskAttemptInterval: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the retry interval in seconds for a failed subtask.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param taskAttemptInterval Property taskAttemptInterval: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the retry interval in seconds for a failed subtask. This parameter is required.
         */
        public Builder taskAttemptInterval(final java.lang.Number taskAttemptInterval) {
            this.props.taskAttemptInterval(taskAttemptInterval);
            return this;
        }
        /**
         * Property taskAttemptInterval: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the retry interval in seconds for a failed subtask.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param taskAttemptInterval Property taskAttemptInterval: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the retry interval in seconds for a failed subtask. This parameter is required.
         */
        public Builder taskAttemptInterval(final com.aliyun.ros.cdk.core.IResolvable taskAttemptInterval) {
            this.props.taskAttemptInterval(taskAttemptInterval);
            return this;
        }

        /**
         * Property taskMaxAttempt: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of retries for a failed subtask.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param taskMaxAttempt Property taskMaxAttempt: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of retries for a failed subtask. This parameter is required.
         */
        public Builder taskMaxAttempt(final java.lang.Number taskMaxAttempt) {
            this.props.taskMaxAttempt(taskMaxAttempt);
            return this;
        }
        /**
         * Property taskMaxAttempt: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of retries for a failed subtask.
         * <p>
         * Defaults to 0.
         * <p>
         * @return {@code this}
         * @param taskMaxAttempt Property taskMaxAttempt: [Advanced] For <code>parallel</code> and <code>grid</code> jobs, this specifies the maximum number of retries for a failed subtask. This parameter is required.
         */
        public Builder taskMaxAttempt(final com.aliyun.ros.cdk.core.IResolvable taskMaxAttempt) {
            this.props.taskMaxAttempt(taskMaxAttempt);
            return this;
        }

        /**
         * Property timeExpression: The time expression, which depends on the value of <code>TimeType</code>.
         * <p>
         * <ul>
         * <li>cron: A standard cron expression.</li>
         * <li>api: No time expression is required.</li>
         * <li>fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
         * the job every 30 seconds.</li>
         * <li>second_delay: A fixed delay in seconds before the job is executed. Valid
         * values: 1 to 60.</li>
         * <li>one_time: A specific time in <code>yyyy-MM-dd HH:mm:ss</code> format or a Unix timestamp
         * in milliseconds. Example: "2022-10-10 10:10:00".</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeExpression Property timeExpression: The time expression, which depends on the value of <code>TimeType</code>. This parameter is required.
         */
        public Builder timeExpression(final java.lang.String timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }
        /**
         * Property timeExpression: The time expression, which depends on the value of <code>TimeType</code>.
         * <p>
         * <ul>
         * <li>cron: A standard cron expression.</li>
         * <li>api: No time expression is required.</li>
         * <li>fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
         * the job every 30 seconds.</li>
         * <li>second_delay: A fixed delay in seconds before the job is executed. Valid
         * values: 1 to 60.</li>
         * <li>one_time: A specific time in <code>yyyy-MM-dd HH:mm:ss</code> format or a Unix timestamp
         * in milliseconds. Example: "2022-10-10 10:10:00".</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeExpression Property timeExpression: The time expression, which depends on the value of <code>TimeType</code>. This parameter is required.
         */
        public Builder timeExpression(final com.aliyun.ros.cdk.core.IResolvable timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }

        /**
         * Property timeout: The timeout threshold in seconds.
         * <p>
         * Defaults to 7200.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout threshold in seconds. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout threshold in seconds.
         * <p>
         * Defaults to 7200.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout threshold in seconds. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property timeoutEnable: Specifies whether to enable timeout alerts.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Enables timeout alerts.</li>
         * <li>false: Disables timeout alerts.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeoutEnable Property timeoutEnable: Specifies whether to enable timeout alerts. This parameter is required.
         */
        public Builder timeoutEnable(final java.lang.Boolean timeoutEnable) {
            this.props.timeoutEnable(timeoutEnable);
            return this;
        }
        /**
         * Property timeoutEnable: Specifies whether to enable timeout alerts.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Enables timeout alerts.</li>
         * <li>false: Disables timeout alerts.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeoutEnable Property timeoutEnable: Specifies whether to enable timeout alerts. This parameter is required.
         */
        public Builder timeoutEnable(final com.aliyun.ros.cdk.core.IResolvable timeoutEnable) {
            this.props.timeoutEnable(timeoutEnable);
            return this;
        }

        /**
         * Property timeoutKillEnable: Specifies whether to terminate the job upon timeout.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Terminates the job if it times out.</li>
         * <li>false: The job is not terminated if it times out.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeoutKillEnable Property timeoutKillEnable: Specifies whether to terminate the job upon timeout. This parameter is required.
         */
        public Builder timeoutKillEnable(final java.lang.Boolean timeoutKillEnable) {
            this.props.timeoutKillEnable(timeoutKillEnable);
            return this;
        }
        /**
         * Property timeoutKillEnable: Specifies whether to terminate the job upon timeout.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: Terminates the job if it times out.</li>
         * <li>false: The job is not terminated if it times out.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeoutKillEnable Property timeoutKillEnable: Specifies whether to terminate the job upon timeout. This parameter is required.
         */
        public Builder timeoutKillEnable(final com.aliyun.ros.cdk.core.IResolvable timeoutKillEnable) {
            this.props.timeoutKillEnable(timeoutKillEnable);
            return this;
        }

        /**
         * Property timezone: The timezone of the job.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: The timezone of the job. This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }
        /**
         * Property timezone: The timezone of the job.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: The timezone of the job. This parameter is required.
         */
        public Builder timezone(final com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * Property xAttrs: This parameter is required for <code>k8s</code> jobs.<br>For job tasks: {"resource":"job"}<br>For shell tasks: {"image":"busybox","resource":"shell"}<br><br>.
         * <p>
         * @return {@code this}
         * @param xAttrs Property xAttrs: This parameter is required for <code>k8s</code> jobs.<br>For job tasks: {"resource":"job"}<br>For shell tasks: {"image":"busybox","resource":"shell"}<br><br>. This parameter is required.
         */
        public Builder xAttrs(final com.aliyun.ros.cdk.core.IResolvable xAttrs) {
            this.props.xAttrs(xAttrs);
            return this;
        }
        /**
         * Property xAttrs: This parameter is required for <code>k8s</code> jobs.<br>For job tasks: {"resource":"job"}<br>For shell tasks: {"image":"busybox","resource":"shell"}<br><br>.
         * <p>
         * @return {@code this}
         * @param xAttrs Property xAttrs: This parameter is required for <code>k8s</code> jobs.<br>For job tasks: {"resource":"job"}<br>For shell tasks: {"image":"busybox","resource":"shell"}<br><br>. This parameter is required.
         */
        public Builder xAttrs(final java.util.Map<java.lang.String, ? extends java.lang.Object> xAttrs) {
            this.props.xAttrs(xAttrs);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.schedulerx.Job}.
         */
        @Override
        public com.aliyun.ros.cdk.schedulerx.Job build() {
            return new com.aliyun.ros.cdk.schedulerx.Job(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

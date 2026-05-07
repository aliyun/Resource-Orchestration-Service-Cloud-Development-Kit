package com.aliyun.ros.cdk.schedulerx;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SchedulerX::Job</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.056Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosJob")
public class RosJob extends com.aliyun.ros.cdk.core.RosResource {

    protected RosJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.schedulerx.RosJob.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.RosJobProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getExecuteMode() {
        return software.amazon.jsii.Kernel.get(this, "executeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecuteMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "executeMode", java.util.Objects.requireNonNull(value, "executeMode is required"));
    }

    /**
     */
    public void setExecuteMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executeMode", java.util.Objects.requireNonNull(value, "executeMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getJobType() {
        return software.amazon.jsii.Kernel.get(this, "jobType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jobType", java.util.Objects.requireNonNull(value, "jobType is required"));
    }

    /**
     */
    public void setJobType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobType", java.util.Objects.requireNonNull(value, "jobType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTimeType() {
        return software.amazon.jsii.Kernel.get(this, "timeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeType(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeType", java.util.Objects.requireNonNull(value, "timeType is required"));
    }

    /**
     */
    public void setTimeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeType", java.util.Objects.requireNonNull(value, "timeType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttemptInterval() {
        return software.amazon.jsii.Kernel.get(this, "attemptInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttemptInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "attemptInterval", value);
    }

    /**
     */
    public void setAttemptInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attemptInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCalendar() {
        return software.amazon.jsii.Kernel.get(this, "calendar", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCalendar(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "calendar", value);
    }

    /**
     */
    public void setCalendar(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "calendar", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClassName() {
        return software.amazon.jsii.Kernel.get(this, "className", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClassName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "className", value);
    }

    /**
     */
    public void setClassName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "className", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConsumerSize() {
        return software.amazon.jsii.Kernel.get(this, "consumerSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "consumerSize", value);
    }

    /**
     */
    public void setConsumerSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContactInfo() {
        return software.amazon.jsii.Kernel.get(this, "contactInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactInfo", value);
    }

    /**
     */
    public void setContactInfo(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.schedulerx.RosJob.ContactInfoProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.schedulerx.RosJob.ContactInfoProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "contactInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContent(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "content", value);
    }

    /**
     */
    public void setContent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "content", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataOffset() {
        return software.amazon.jsii.Kernel.get(this, "dataOffset", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataOffset(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dataOffset", value);
    }

    /**
     */
    public void setDataOffset(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataOffset", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDispatcherSize() {
        return software.amazon.jsii.Kernel.get(this, "dispatcherSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDispatcherSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dispatcherSize", value);
    }

    /**
     */
    public void setDispatcherSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dispatcherSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailEnable() {
        return software.amazon.jsii.Kernel.get(this, "failEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "failEnable", value);
    }

    /**
     */
    public void setFailEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailTimes() {
        return software.amazon.jsii.Kernel.get(this, "failTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailTimes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "failTimes", value);
    }

    /**
     */
    public void setFailTimes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failTimes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxAttempt() {
        return software.amazon.jsii.Kernel.get(this, "maxAttempt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxAttempt(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAttempt", value);
    }

    /**
     */
    public void setMaxAttempt(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxAttempt", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxConcurrency() {
        return software.amazon.jsii.Kernel.get(this, "maxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxConcurrency(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxConcurrency", value);
    }

    /**
     */
    public void setMaxConcurrency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxConcurrency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMissWorkerEnable() {
        return software.amazon.jsii.Kernel.get(this, "missWorkerEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMissWorkerEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "missWorkerEnable", value);
    }

    /**
     */
    public void setMissWorkerEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "missWorkerEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceSource() {
        return software.amazon.jsii.Kernel.get(this, "namespaceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceSource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceSource", value);
    }

    /**
     */
    public void setNamespaceSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceSource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPageSize() {
        return software.amazon.jsii.Kernel.get(this, "pageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPageSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "pageSize", value);
    }

    /**
     */
    public void setPageSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pageSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueueSize() {
        return software.amazon.jsii.Kernel.get(this, "queueSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "queueSize", value);
    }

    /**
     */
    public void setQueueSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSendChannel() {
        return software.amazon.jsii.Kernel.get(this, "sendChannel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSendChannel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sendChannel", value);
    }

    /**
     */
    public void setSendChannel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sendChannel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSuccessNoticeEnable() {
        return software.amazon.jsii.Kernel.get(this, "successNoticeEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSuccessNoticeEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "successNoticeEnable", value);
    }

    /**
     */
    public void setSuccessNoticeEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "successNoticeEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTaskAttemptInterval() {
        return software.amazon.jsii.Kernel.get(this, "taskAttemptInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskAttemptInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "taskAttemptInterval", value);
    }

    /**
     */
    public void setTaskAttemptInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskAttemptInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTaskMaxAttempt() {
        return software.amazon.jsii.Kernel.get(this, "taskMaxAttempt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskMaxAttempt(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "taskMaxAttempt", value);
    }

    /**
     */
    public void setTaskMaxAttempt(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskMaxAttempt", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeExpression() {
        return software.amazon.jsii.Kernel.get(this, "timeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeExpression(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "timeExpression", value);
    }

    /**
     */
    public void setTimeExpression(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeExpression", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutEnable() {
        return software.amazon.jsii.Kernel.get(this, "timeoutEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "timeoutEnable", value);
    }

    /**
     */
    public void setTimeoutEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutKillEnable() {
        return software.amazon.jsii.Kernel.get(this, "timeoutKillEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutKillEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "timeoutKillEnable", value);
    }

    /**
     */
    public void setTimeoutKillEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutKillEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimezone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    /**
     */
    public void setTimezone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getXAttrs() {
        return software.amazon.jsii.Kernel.get(this, "xAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setXAttrs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "xAttrs", value);
    }

    /**
     */
    public void setXAttrs(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "xAttrs", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(ContactInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContactInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDing() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserMail() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserPhone() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContactInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContactInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContactInfoProperty> {
            java.lang.Object ding;
            java.lang.Object userMail;
            java.lang.Object userName;
            java.lang.Object userPhone;

            /**
             * Sets the value of {@link ContactInfoProperty#getDing}
             * @param ding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ding(java.lang.String ding) {
                this.ding = ding;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getDing}
             * @param ding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ding(com.aliyun.ros.cdk.core.IResolvable ding) {
                this.ding = ding;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserMail}
             * @param userMail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userMail(java.lang.String userMail) {
                this.userMail = userMail;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserMail}
             * @param userMail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userMail(com.aliyun.ros.cdk.core.IResolvable userMail) {
                this.userMail = userMail;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserPhone}
             * @param userPhone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userPhone(java.lang.String userPhone) {
                this.userPhone = userPhone;
                return this;
            }

            /**
             * Sets the value of {@link ContactInfoProperty#getUserPhone}
             * @param userPhone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userPhone(com.aliyun.ros.cdk.core.IResolvable userPhone) {
                this.userPhone = userPhone;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContactInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContactInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ContactInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContactInfoProperty {
            private final java.lang.Object ding;
            private final java.lang.Object userMail;
            private final java.lang.Object userName;
            private final java.lang.Object userPhone;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ding = software.amazon.jsii.Kernel.get(this, "ding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userMail = software.amazon.jsii.Kernel.get(this, "userMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userPhone = software.amazon.jsii.Kernel.get(this, "userPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ding = builder.ding;
                this.userMail = builder.userMail;
                this.userName = builder.userName;
                this.userPhone = builder.userPhone;
            }

            @Override
            public final java.lang.Object getDing() {
                return this.ding;
            }

            @Override
            public final java.lang.Object getUserMail() {
                return this.userMail;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            public final java.lang.Object getUserPhone() {
                return this.userPhone;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDing() != null) {
                    data.set("ding", om.valueToTree(this.getDing()));
                }
                if (this.getUserMail() != null) {
                    data.set("userMail", om.valueToTree(this.getUserMail()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }
                if (this.getUserPhone() != null) {
                    data.set("userPhone", om.valueToTree(this.getUserPhone()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContactInfoProperty.Jsii$Proxy that = (ContactInfoProperty.Jsii$Proxy) o;

                if (this.ding != null ? !this.ding.equals(that.ding) : that.ding != null) return false;
                if (this.userMail != null ? !this.userMail.equals(that.userMail) : that.userMail != null) return false;
                if (this.userName != null ? !this.userName.equals(that.userName) : that.userName != null) return false;
                return this.userPhone != null ? this.userPhone.equals(that.userPhone) : that.userPhone == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ding != null ? this.ding.hashCode() : 0;
                result = 31 * result + (this.userMail != null ? this.userMail.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                result = 31 * result + (this.userPhone != null ? this.userPhone.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.schedulerx.RosJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.schedulerx.RosJob> {
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
        private final com.aliyun.ros.cdk.schedulerx.RosJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.schedulerx.RosJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param executeMode This parameter is required.
         */
        public Builder executeMode(final java.lang.String executeMode) {
            this.props.executeMode(executeMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param executeMode This parameter is required.
         */
        public Builder executeMode(final com.aliyun.ros.cdk.core.IResolvable executeMode) {
            this.props.executeMode(executeMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobType This parameter is required.
         */
        public Builder jobType(final java.lang.String jobType) {
            this.props.jobType(jobType);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobType This parameter is required.
         */
        public Builder jobType(final com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.props.jobType(jobType);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeType This parameter is required.
         */
        public Builder timeType(final java.lang.Number timeType) {
            this.props.timeType(timeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeType This parameter is required.
         */
        public Builder timeType(final com.aliyun.ros.cdk.core.IResolvable timeType) {
            this.props.timeType(timeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param attemptInterval This parameter is required.
         */
        public Builder attemptInterval(final java.lang.Number attemptInterval) {
            this.props.attemptInterval(attemptInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param attemptInterval This parameter is required.
         */
        public Builder attemptInterval(final com.aliyun.ros.cdk.core.IResolvable attemptInterval) {
            this.props.attemptInterval(attemptInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param calendar This parameter is required.
         */
        public Builder calendar(final java.lang.String calendar) {
            this.props.calendar(calendar);
            return this;
        }
        /**
         * @return {@code this}
         * @param calendar This parameter is required.
         */
        public Builder calendar(final com.aliyun.ros.cdk.core.IResolvable calendar) {
            this.props.calendar(calendar);
            return this;
        }

        /**
         * @return {@code this}
         * @param className This parameter is required.
         */
        public Builder className(final java.lang.String className) {
            this.props.className(className);
            return this;
        }
        /**
         * @return {@code this}
         * @param className This parameter is required.
         */
        public Builder className(final com.aliyun.ros.cdk.core.IResolvable className) {
            this.props.className(className);
            return this;
        }

        /**
         * @return {@code this}
         * @param consumerSize This parameter is required.
         */
        public Builder consumerSize(final java.lang.Number consumerSize) {
            this.props.consumerSize(consumerSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerSize This parameter is required.
         */
        public Builder consumerSize(final com.aliyun.ros.cdk.core.IResolvable consumerSize) {
            this.props.consumerSize(consumerSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param contactInfo This parameter is required.
         */
        public Builder contactInfo(final com.aliyun.ros.cdk.core.IResolvable contactInfo) {
            this.props.contactInfo(contactInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactInfo This parameter is required.
         */
        public Builder contactInfo(final java.util.List<? extends java.lang.Object> contactInfo) {
            this.props.contactInfo(contactInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param content This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * @return {@code this}
         * @param content This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataOffset This parameter is required.
         */
        public Builder dataOffset(final java.lang.Number dataOffset) {
            this.props.dataOffset(dataOffset);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataOffset This parameter is required.
         */
        public Builder dataOffset(final com.aliyun.ros.cdk.core.IResolvable dataOffset) {
            this.props.dataOffset(dataOffset);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param dispatcherSize This parameter is required.
         */
        public Builder dispatcherSize(final java.lang.Number dispatcherSize) {
            this.props.dispatcherSize(dispatcherSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param dispatcherSize This parameter is required.
         */
        public Builder dispatcherSize(final com.aliyun.ros.cdk.core.IResolvable dispatcherSize) {
            this.props.dispatcherSize(dispatcherSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param failEnable This parameter is required.
         */
        public Builder failEnable(final java.lang.Boolean failEnable) {
            this.props.failEnable(failEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param failEnable This parameter is required.
         */
        public Builder failEnable(final com.aliyun.ros.cdk.core.IResolvable failEnable) {
            this.props.failEnable(failEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param failTimes This parameter is required.
         */
        public Builder failTimes(final java.lang.Number failTimes) {
            this.props.failTimes(failTimes);
            return this;
        }
        /**
         * @return {@code this}
         * @param failTimes This parameter is required.
         */
        public Builder failTimes(final com.aliyun.ros.cdk.core.IResolvable failTimes) {
            this.props.failTimes(failTimes);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxAttempt This parameter is required.
         */
        public Builder maxAttempt(final java.lang.Number maxAttempt) {
            this.props.maxAttempt(maxAttempt);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxAttempt This parameter is required.
         */
        public Builder maxAttempt(final com.aliyun.ros.cdk.core.IResolvable maxAttempt) {
            this.props.maxAttempt(maxAttempt);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxConcurrency This parameter is required.
         */
        public Builder maxConcurrency(final java.lang.Number maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxConcurrency This parameter is required.
         */
        public Builder maxConcurrency(final com.aliyun.ros.cdk.core.IResolvable maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }

        /**
         * @return {@code this}
         * @param missWorkerEnable This parameter is required.
         */
        public Builder missWorkerEnable(final java.lang.Boolean missWorkerEnable) {
            this.props.missWorkerEnable(missWorkerEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param missWorkerEnable This parameter is required.
         */
        public Builder missWorkerEnable(final com.aliyun.ros.cdk.core.IResolvable missWorkerEnable) {
            this.props.missWorkerEnable(missWorkerEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespaceSource This parameter is required.
         */
        public Builder namespaceSource(final java.lang.String namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespaceSource This parameter is required.
         */
        public Builder namespaceSource(final com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param pageSize This parameter is required.
         */
        public Builder pageSize(final java.lang.Number pageSize) {
            this.props.pageSize(pageSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param pageSize This parameter is required.
         */
        public Builder pageSize(final com.aliyun.ros.cdk.core.IResolvable pageSize) {
            this.props.pageSize(pageSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.lang.String parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param queueSize This parameter is required.
         */
        public Builder queueSize(final java.lang.Number queueSize) {
            this.props.queueSize(queueSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueSize This parameter is required.
         */
        public Builder queueSize(final com.aliyun.ros.cdk.core.IResolvable queueSize) {
            this.props.queueSize(queueSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param sendChannel This parameter is required.
         */
        public Builder sendChannel(final java.lang.String sendChannel) {
            this.props.sendChannel(sendChannel);
            return this;
        }
        /**
         * @return {@code this}
         * @param sendChannel This parameter is required.
         */
        public Builder sendChannel(final com.aliyun.ros.cdk.core.IResolvable sendChannel) {
            this.props.sendChannel(sendChannel);
            return this;
        }

        /**
         * @return {@code this}
         * @param successNoticeEnable This parameter is required.
         */
        public Builder successNoticeEnable(final java.lang.Boolean successNoticeEnable) {
            this.props.successNoticeEnable(successNoticeEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param successNoticeEnable This parameter is required.
         */
        public Builder successNoticeEnable(final com.aliyun.ros.cdk.core.IResolvable successNoticeEnable) {
            this.props.successNoticeEnable(successNoticeEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskAttemptInterval This parameter is required.
         */
        public Builder taskAttemptInterval(final java.lang.Number taskAttemptInterval) {
            this.props.taskAttemptInterval(taskAttemptInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskAttemptInterval This parameter is required.
         */
        public Builder taskAttemptInterval(final com.aliyun.ros.cdk.core.IResolvable taskAttemptInterval) {
            this.props.taskAttemptInterval(taskAttemptInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskMaxAttempt This parameter is required.
         */
        public Builder taskMaxAttempt(final java.lang.Number taskMaxAttempt) {
            this.props.taskMaxAttempt(taskMaxAttempt);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskMaxAttempt This parameter is required.
         */
        public Builder taskMaxAttempt(final com.aliyun.ros.cdk.core.IResolvable taskMaxAttempt) {
            this.props.taskMaxAttempt(taskMaxAttempt);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeExpression This parameter is required.
         */
        public Builder timeExpression(final java.lang.String timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeExpression This parameter is required.
         */
        public Builder timeExpression(final com.aliyun.ros.cdk.core.IResolvable timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutEnable This parameter is required.
         */
        public Builder timeoutEnable(final java.lang.Boolean timeoutEnable) {
            this.props.timeoutEnable(timeoutEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutEnable This parameter is required.
         */
        public Builder timeoutEnable(final com.aliyun.ros.cdk.core.IResolvable timeoutEnable) {
            this.props.timeoutEnable(timeoutEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutKillEnable This parameter is required.
         */
        public Builder timeoutKillEnable(final java.lang.Boolean timeoutKillEnable) {
            this.props.timeoutKillEnable(timeoutKillEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutKillEnable This parameter is required.
         */
        public Builder timeoutKillEnable(final com.aliyun.ros.cdk.core.IResolvable timeoutKillEnable) {
            this.props.timeoutKillEnable(timeoutKillEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }
        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * @return {@code this}
         * @param xAttrs This parameter is required.
         */
        public Builder xAttrs(final com.aliyun.ros.cdk.core.IResolvable xAttrs) {
            this.props.xAttrs(xAttrs);
            return this;
        }
        /**
         * @return {@code this}
         * @param xAttrs This parameter is required.
         */
        public Builder xAttrs(final java.util.Map<java.lang.String, ? extends java.lang.Object> xAttrs) {
            this.props.xAttrs(xAttrs);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.schedulerx.RosJob}.
         */
        @Override
        public com.aliyun.ros.cdk.schedulerx.RosJob build() {
            return new com.aliyun.ros.cdk.schedulerx.RosJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

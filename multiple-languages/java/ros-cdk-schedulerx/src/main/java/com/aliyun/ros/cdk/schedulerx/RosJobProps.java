package com.aliyun.ros.cdk.schedulerx;

/**
 * Properties for defining a <code>RosJob</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:46:20.783Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosJobProps")
@software.amazon.jsii.Jsii.Proxy(RosJobProps.Jsii$Proxy.class)
public interface RosJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExecuteMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getJobType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttemptInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCalendar() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClassName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConsumerSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContactInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataOffset() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDispatcherSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailTimes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAttempt() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxConcurrency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMissWorkerEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPageSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSendChannel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessNoticeEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaskAttemptInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaskMaxAttempt() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeExpression() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutKillEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getXAttrs() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosJobProps> {
        java.lang.Object executeMode;
        java.lang.Object groupId;
        java.lang.Object jobType;
        java.lang.Object name;
        java.lang.Object namespace;
        java.lang.Object timeType;
        java.lang.Object attemptInterval;
        java.lang.Object calendar;
        java.lang.Object className;
        java.lang.Object consumerSize;
        java.lang.Object contactInfo;
        java.lang.Object content;
        java.lang.Object dataOffset;
        java.lang.Object description;
        java.lang.Object dispatcherSize;
        java.lang.Object failEnable;
        java.lang.Object failTimes;
        java.lang.Object maxAttempt;
        java.lang.Object maxConcurrency;
        java.lang.Object missWorkerEnable;
        java.lang.Object namespaceSource;
        java.lang.Object pageSize;
        java.lang.Object parameters;
        java.lang.Object priority;
        java.lang.Object queueSize;
        java.lang.Object sendChannel;
        java.lang.Object successNoticeEnable;
        java.lang.Object taskAttemptInterval;
        java.lang.Object taskMaxAttempt;
        java.lang.Object timeExpression;
        java.lang.Object timeout;
        java.lang.Object timeoutEnable;
        java.lang.Object timeoutKillEnable;
        java.lang.Object timezone;
        java.lang.Object xAttrs;

        /**
         * Sets the value of {@link RosJobProps#getExecuteMode}
         * @param executeMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder executeMode(java.lang.String executeMode) {
            this.executeMode = executeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getExecuteMode}
         * @param executeMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder executeMode(com.aliyun.ros.cdk.core.IResolvable executeMode) {
            this.executeMode = executeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobType}
         * @param jobType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobType(java.lang.String jobType) {
            this.jobType = jobType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobType}
         * @param jobType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobType(com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.jobType = jobType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeType}
         * @param timeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeType(java.lang.Number timeType) {
            this.timeType = timeType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeType}
         * @param timeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeType(com.aliyun.ros.cdk.core.IResolvable timeType) {
            this.timeType = timeType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getAttemptInterval}
         * @param attemptInterval the value to be set.
         * @return {@code this}
         */
        public Builder attemptInterval(java.lang.Number attemptInterval) {
            this.attemptInterval = attemptInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getAttemptInterval}
         * @param attemptInterval the value to be set.
         * @return {@code this}
         */
        public Builder attemptInterval(com.aliyun.ros.cdk.core.IResolvable attemptInterval) {
            this.attemptInterval = attemptInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getCalendar}
         * @param calendar the value to be set.
         * @return {@code this}
         */
        public Builder calendar(java.lang.String calendar) {
            this.calendar = calendar;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getCalendar}
         * @param calendar the value to be set.
         * @return {@code this}
         */
        public Builder calendar(com.aliyun.ros.cdk.core.IResolvable calendar) {
            this.calendar = calendar;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getClassName}
         * @param className the value to be set.
         * @return {@code this}
         */
        public Builder className(java.lang.String className) {
            this.className = className;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getClassName}
         * @param className the value to be set.
         * @return {@code this}
         */
        public Builder className(com.aliyun.ros.cdk.core.IResolvable className) {
            this.className = className;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getConsumerSize}
         * @param consumerSize the value to be set.
         * @return {@code this}
         */
        public Builder consumerSize(java.lang.Number consumerSize) {
            this.consumerSize = consumerSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getConsumerSize}
         * @param consumerSize the value to be set.
         * @return {@code this}
         */
        public Builder consumerSize(com.aliyun.ros.cdk.core.IResolvable consumerSize) {
            this.consumerSize = consumerSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getContactInfo}
         * @param contactInfo the value to be set.
         * @return {@code this}
         */
        public Builder contactInfo(com.aliyun.ros.cdk.core.IResolvable contactInfo) {
            this.contactInfo = contactInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getContactInfo}
         * @param contactInfo the value to be set.
         * @return {@code this}
         */
        public Builder contactInfo(java.util.List<? extends java.lang.Object> contactInfo) {
            this.contactInfo = contactInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getContent}
         * @param content the value to be set.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getContent}
         * @param content the value to be set.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDataOffset}
         * @param dataOffset the value to be set.
         * @return {@code this}
         */
        public Builder dataOffset(java.lang.Number dataOffset) {
            this.dataOffset = dataOffset;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDataOffset}
         * @param dataOffset the value to be set.
         * @return {@code this}
         */
        public Builder dataOffset(com.aliyun.ros.cdk.core.IResolvable dataOffset) {
            this.dataOffset = dataOffset;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDispatcherSize}
         * @param dispatcherSize the value to be set.
         * @return {@code this}
         */
        public Builder dispatcherSize(java.lang.Number dispatcherSize) {
            this.dispatcherSize = dispatcherSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDispatcherSize}
         * @param dispatcherSize the value to be set.
         * @return {@code this}
         */
        public Builder dispatcherSize(com.aliyun.ros.cdk.core.IResolvable dispatcherSize) {
            this.dispatcherSize = dispatcherSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getFailEnable}
         * @param failEnable the value to be set.
         * @return {@code this}
         */
        public Builder failEnable(java.lang.Boolean failEnable) {
            this.failEnable = failEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getFailEnable}
         * @param failEnable the value to be set.
         * @return {@code this}
         */
        public Builder failEnable(com.aliyun.ros.cdk.core.IResolvable failEnable) {
            this.failEnable = failEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getFailTimes}
         * @param failTimes the value to be set.
         * @return {@code this}
         */
        public Builder failTimes(java.lang.Number failTimes) {
            this.failTimes = failTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getFailTimes}
         * @param failTimes the value to be set.
         * @return {@code this}
         */
        public Builder failTimes(com.aliyun.ros.cdk.core.IResolvable failTimes) {
            this.failTimes = failTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMaxAttempt}
         * @param maxAttempt the value to be set.
         * @return {@code this}
         */
        public Builder maxAttempt(java.lang.Number maxAttempt) {
            this.maxAttempt = maxAttempt;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMaxAttempt}
         * @param maxAttempt the value to be set.
         * @return {@code this}
         */
        public Builder maxAttempt(com.aliyun.ros.cdk.core.IResolvable maxAttempt) {
            this.maxAttempt = maxAttempt;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMaxConcurrency}
         * @param maxConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder maxConcurrency(java.lang.Number maxConcurrency) {
            this.maxConcurrency = maxConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMaxConcurrency}
         * @param maxConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder maxConcurrency(com.aliyun.ros.cdk.core.IResolvable maxConcurrency) {
            this.maxConcurrency = maxConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMissWorkerEnable}
         * @param missWorkerEnable the value to be set.
         * @return {@code this}
         */
        public Builder missWorkerEnable(java.lang.Boolean missWorkerEnable) {
            this.missWorkerEnable = missWorkerEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getMissWorkerEnable}
         * @param missWorkerEnable the value to be set.
         * @return {@code this}
         */
        public Builder missWorkerEnable(com.aliyun.ros.cdk.core.IResolvable missWorkerEnable) {
            this.missWorkerEnable = missWorkerEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(java.lang.String namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPageSize}
         * @param pageSize the value to be set.
         * @return {@code this}
         */
        public Builder pageSize(java.lang.Number pageSize) {
            this.pageSize = pageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPageSize}
         * @param pageSize the value to be set.
         * @return {@code this}
         */
        public Builder pageSize(com.aliyun.ros.cdk.core.IResolvable pageSize) {
            this.pageSize = pageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.lang.String parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getQueueSize}
         * @param queueSize the value to be set.
         * @return {@code this}
         */
        public Builder queueSize(java.lang.Number queueSize) {
            this.queueSize = queueSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getQueueSize}
         * @param queueSize the value to be set.
         * @return {@code this}
         */
        public Builder queueSize(com.aliyun.ros.cdk.core.IResolvable queueSize) {
            this.queueSize = queueSize;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSendChannel}
         * @param sendChannel the value to be set.
         * @return {@code this}
         */
        public Builder sendChannel(java.lang.String sendChannel) {
            this.sendChannel = sendChannel;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSendChannel}
         * @param sendChannel the value to be set.
         * @return {@code this}
         */
        public Builder sendChannel(com.aliyun.ros.cdk.core.IResolvable sendChannel) {
            this.sendChannel = sendChannel;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSuccessNoticeEnable}
         * @param successNoticeEnable the value to be set.
         * @return {@code this}
         */
        public Builder successNoticeEnable(java.lang.Boolean successNoticeEnable) {
            this.successNoticeEnable = successNoticeEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSuccessNoticeEnable}
         * @param successNoticeEnable the value to be set.
         * @return {@code this}
         */
        public Builder successNoticeEnable(com.aliyun.ros.cdk.core.IResolvable successNoticeEnable) {
            this.successNoticeEnable = successNoticeEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTaskAttemptInterval}
         * @param taskAttemptInterval the value to be set.
         * @return {@code this}
         */
        public Builder taskAttemptInterval(java.lang.Number taskAttemptInterval) {
            this.taskAttemptInterval = taskAttemptInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTaskAttemptInterval}
         * @param taskAttemptInterval the value to be set.
         * @return {@code this}
         */
        public Builder taskAttemptInterval(com.aliyun.ros.cdk.core.IResolvable taskAttemptInterval) {
            this.taskAttemptInterval = taskAttemptInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTaskMaxAttempt}
         * @param taskMaxAttempt the value to be set.
         * @return {@code this}
         */
        public Builder taskMaxAttempt(java.lang.Number taskMaxAttempt) {
            this.taskMaxAttempt = taskMaxAttempt;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTaskMaxAttempt}
         * @param taskMaxAttempt the value to be set.
         * @return {@code this}
         */
        public Builder taskMaxAttempt(com.aliyun.ros.cdk.core.IResolvable taskMaxAttempt) {
            this.taskMaxAttempt = taskMaxAttempt;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeExpression}
         * @param timeExpression the value to be set.
         * @return {@code this}
         */
        public Builder timeExpression(java.lang.String timeExpression) {
            this.timeExpression = timeExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeExpression}
         * @param timeExpression the value to be set.
         * @return {@code this}
         */
        public Builder timeExpression(com.aliyun.ros.cdk.core.IResolvable timeExpression) {
            this.timeExpression = timeExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeoutEnable}
         * @param timeoutEnable the value to be set.
         * @return {@code this}
         */
        public Builder timeoutEnable(java.lang.Boolean timeoutEnable) {
            this.timeoutEnable = timeoutEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeoutEnable}
         * @param timeoutEnable the value to be set.
         * @return {@code this}
         */
        public Builder timeoutEnable(com.aliyun.ros.cdk.core.IResolvable timeoutEnable) {
            this.timeoutEnable = timeoutEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeoutKillEnable}
         * @param timeoutKillEnable the value to be set.
         * @return {@code this}
         */
        public Builder timeoutKillEnable(java.lang.Boolean timeoutKillEnable) {
            this.timeoutKillEnable = timeoutKillEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimeoutKillEnable}
         * @param timeoutKillEnable the value to be set.
         * @return {@code this}
         */
        public Builder timeoutKillEnable(com.aliyun.ros.cdk.core.IResolvable timeoutKillEnable) {
            this.timeoutKillEnable = timeoutKillEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getXAttrs}
         * @param xAttrs the value to be set.
         * @return {@code this}
         */
        public Builder xAttrs(com.aliyun.ros.cdk.core.IResolvable xAttrs) {
            this.xAttrs = xAttrs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getXAttrs}
         * @param xAttrs the value to be set.
         * @return {@code this}
         */
        public Builder xAttrs(java.util.Map<java.lang.String, ? extends java.lang.Object> xAttrs) {
            this.xAttrs = xAttrs;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosJobProps {
        private final java.lang.Object executeMode;
        private final java.lang.Object groupId;
        private final java.lang.Object jobType;
        private final java.lang.Object name;
        private final java.lang.Object namespace;
        private final java.lang.Object timeType;
        private final java.lang.Object attemptInterval;
        private final java.lang.Object calendar;
        private final java.lang.Object className;
        private final java.lang.Object consumerSize;
        private final java.lang.Object contactInfo;
        private final java.lang.Object content;
        private final java.lang.Object dataOffset;
        private final java.lang.Object description;
        private final java.lang.Object dispatcherSize;
        private final java.lang.Object failEnable;
        private final java.lang.Object failTimes;
        private final java.lang.Object maxAttempt;
        private final java.lang.Object maxConcurrency;
        private final java.lang.Object missWorkerEnable;
        private final java.lang.Object namespaceSource;
        private final java.lang.Object pageSize;
        private final java.lang.Object parameters;
        private final java.lang.Object priority;
        private final java.lang.Object queueSize;
        private final java.lang.Object sendChannel;
        private final java.lang.Object successNoticeEnable;
        private final java.lang.Object taskAttemptInterval;
        private final java.lang.Object taskMaxAttempt;
        private final java.lang.Object timeExpression;
        private final java.lang.Object timeout;
        private final java.lang.Object timeoutEnable;
        private final java.lang.Object timeoutKillEnable;
        private final java.lang.Object timezone;
        private final java.lang.Object xAttrs;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.executeMode = software.amazon.jsii.Kernel.get(this, "executeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobType = software.amazon.jsii.Kernel.get(this, "jobType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeType = software.amazon.jsii.Kernel.get(this, "timeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attemptInterval = software.amazon.jsii.Kernel.get(this, "attemptInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.calendar = software.amazon.jsii.Kernel.get(this, "calendar", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.className = software.amazon.jsii.Kernel.get(this, "className", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerSize = software.amazon.jsii.Kernel.get(this, "consumerSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactInfo = software.amazon.jsii.Kernel.get(this, "contactInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataOffset = software.amazon.jsii.Kernel.get(this, "dataOffset", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dispatcherSize = software.amazon.jsii.Kernel.get(this, "dispatcherSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failEnable = software.amazon.jsii.Kernel.get(this, "failEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failTimes = software.amazon.jsii.Kernel.get(this, "failTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxAttempt = software.amazon.jsii.Kernel.get(this, "maxAttempt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxConcurrency = software.amazon.jsii.Kernel.get(this, "maxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.missWorkerEnable = software.amazon.jsii.Kernel.get(this, "missWorkerEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceSource = software.amazon.jsii.Kernel.get(this, "namespaceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pageSize = software.amazon.jsii.Kernel.get(this, "pageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueSize = software.amazon.jsii.Kernel.get(this, "queueSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sendChannel = software.amazon.jsii.Kernel.get(this, "sendChannel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.successNoticeEnable = software.amazon.jsii.Kernel.get(this, "successNoticeEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskAttemptInterval = software.amazon.jsii.Kernel.get(this, "taskAttemptInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskMaxAttempt = software.amazon.jsii.Kernel.get(this, "taskMaxAttempt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeExpression = software.amazon.jsii.Kernel.get(this, "timeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutEnable = software.amazon.jsii.Kernel.get(this, "timeoutEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutKillEnable = software.amazon.jsii.Kernel.get(this, "timeoutKillEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.xAttrs = software.amazon.jsii.Kernel.get(this, "xAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.executeMode = java.util.Objects.requireNonNull(builder.executeMode, "executeMode is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.jobType = java.util.Objects.requireNonNull(builder.jobType, "jobType is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.timeType = java.util.Objects.requireNonNull(builder.timeType, "timeType is required");
            this.attemptInterval = builder.attemptInterval;
            this.calendar = builder.calendar;
            this.className = builder.className;
            this.consumerSize = builder.consumerSize;
            this.contactInfo = builder.contactInfo;
            this.content = builder.content;
            this.dataOffset = builder.dataOffset;
            this.description = builder.description;
            this.dispatcherSize = builder.dispatcherSize;
            this.failEnable = builder.failEnable;
            this.failTimes = builder.failTimes;
            this.maxAttempt = builder.maxAttempt;
            this.maxConcurrency = builder.maxConcurrency;
            this.missWorkerEnable = builder.missWorkerEnable;
            this.namespaceSource = builder.namespaceSource;
            this.pageSize = builder.pageSize;
            this.parameters = builder.parameters;
            this.priority = builder.priority;
            this.queueSize = builder.queueSize;
            this.sendChannel = builder.sendChannel;
            this.successNoticeEnable = builder.successNoticeEnable;
            this.taskAttemptInterval = builder.taskAttemptInterval;
            this.taskMaxAttempt = builder.taskMaxAttempt;
            this.timeExpression = builder.timeExpression;
            this.timeout = builder.timeout;
            this.timeoutEnable = builder.timeoutEnable;
            this.timeoutKillEnable = builder.timeoutKillEnable;
            this.timezone = builder.timezone;
            this.xAttrs = builder.xAttrs;
        }

        @Override
        public final java.lang.Object getExecuteMode() {
            return this.executeMode;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getJobType() {
            return this.jobType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getTimeType() {
            return this.timeType;
        }

        @Override
        public final java.lang.Object getAttemptInterval() {
            return this.attemptInterval;
        }

        @Override
        public final java.lang.Object getCalendar() {
            return this.calendar;
        }

        @Override
        public final java.lang.Object getClassName() {
            return this.className;
        }

        @Override
        public final java.lang.Object getConsumerSize() {
            return this.consumerSize;
        }

        @Override
        public final java.lang.Object getContactInfo() {
            return this.contactInfo;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getDataOffset() {
            return this.dataOffset;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDispatcherSize() {
            return this.dispatcherSize;
        }

        @Override
        public final java.lang.Object getFailEnable() {
            return this.failEnable;
        }

        @Override
        public final java.lang.Object getFailTimes() {
            return this.failTimes;
        }

        @Override
        public final java.lang.Object getMaxAttempt() {
            return this.maxAttempt;
        }

        @Override
        public final java.lang.Object getMaxConcurrency() {
            return this.maxConcurrency;
        }

        @Override
        public final java.lang.Object getMissWorkerEnable() {
            return this.missWorkerEnable;
        }

        @Override
        public final java.lang.Object getNamespaceSource() {
            return this.namespaceSource;
        }

        @Override
        public final java.lang.Object getPageSize() {
            return this.pageSize;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getQueueSize() {
            return this.queueSize;
        }

        @Override
        public final java.lang.Object getSendChannel() {
            return this.sendChannel;
        }

        @Override
        public final java.lang.Object getSuccessNoticeEnable() {
            return this.successNoticeEnable;
        }

        @Override
        public final java.lang.Object getTaskAttemptInterval() {
            return this.taskAttemptInterval;
        }

        @Override
        public final java.lang.Object getTaskMaxAttempt() {
            return this.taskMaxAttempt;
        }

        @Override
        public final java.lang.Object getTimeExpression() {
            return this.timeExpression;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getTimeoutEnable() {
            return this.timeoutEnable;
        }

        @Override
        public final java.lang.Object getTimeoutKillEnable() {
            return this.timeoutKillEnable;
        }

        @Override
        public final java.lang.Object getTimezone() {
            return this.timezone;
        }

        @Override
        public final java.lang.Object getXAttrs() {
            return this.xAttrs;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("executeMode", om.valueToTree(this.getExecuteMode()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("jobType", om.valueToTree(this.getJobType()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("timeType", om.valueToTree(this.getTimeType()));
            if (this.getAttemptInterval() != null) {
                data.set("attemptInterval", om.valueToTree(this.getAttemptInterval()));
            }
            if (this.getCalendar() != null) {
                data.set("calendar", om.valueToTree(this.getCalendar()));
            }
            if (this.getClassName() != null) {
                data.set("className", om.valueToTree(this.getClassName()));
            }
            if (this.getConsumerSize() != null) {
                data.set("consumerSize", om.valueToTree(this.getConsumerSize()));
            }
            if (this.getContactInfo() != null) {
                data.set("contactInfo", om.valueToTree(this.getContactInfo()));
            }
            if (this.getContent() != null) {
                data.set("content", om.valueToTree(this.getContent()));
            }
            if (this.getDataOffset() != null) {
                data.set("dataOffset", om.valueToTree(this.getDataOffset()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDispatcherSize() != null) {
                data.set("dispatcherSize", om.valueToTree(this.getDispatcherSize()));
            }
            if (this.getFailEnable() != null) {
                data.set("failEnable", om.valueToTree(this.getFailEnable()));
            }
            if (this.getFailTimes() != null) {
                data.set("failTimes", om.valueToTree(this.getFailTimes()));
            }
            if (this.getMaxAttempt() != null) {
                data.set("maxAttempt", om.valueToTree(this.getMaxAttempt()));
            }
            if (this.getMaxConcurrency() != null) {
                data.set("maxConcurrency", om.valueToTree(this.getMaxConcurrency()));
            }
            if (this.getMissWorkerEnable() != null) {
                data.set("missWorkerEnable", om.valueToTree(this.getMissWorkerEnable()));
            }
            if (this.getNamespaceSource() != null) {
                data.set("namespaceSource", om.valueToTree(this.getNamespaceSource()));
            }
            if (this.getPageSize() != null) {
                data.set("pageSize", om.valueToTree(this.getPageSize()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getQueueSize() != null) {
                data.set("queueSize", om.valueToTree(this.getQueueSize()));
            }
            if (this.getSendChannel() != null) {
                data.set("sendChannel", om.valueToTree(this.getSendChannel()));
            }
            if (this.getSuccessNoticeEnable() != null) {
                data.set("successNoticeEnable", om.valueToTree(this.getSuccessNoticeEnable()));
            }
            if (this.getTaskAttemptInterval() != null) {
                data.set("taskAttemptInterval", om.valueToTree(this.getTaskAttemptInterval()));
            }
            if (this.getTaskMaxAttempt() != null) {
                data.set("taskMaxAttempt", om.valueToTree(this.getTaskMaxAttempt()));
            }
            if (this.getTimeExpression() != null) {
                data.set("timeExpression", om.valueToTree(this.getTimeExpression()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getTimeoutEnable() != null) {
                data.set("timeoutEnable", om.valueToTree(this.getTimeoutEnable()));
            }
            if (this.getTimeoutKillEnable() != null) {
                data.set("timeoutKillEnable", om.valueToTree(this.getTimeoutKillEnable()));
            }
            if (this.getTimezone() != null) {
                data.set("timezone", om.valueToTree(this.getTimezone()));
            }
            if (this.getXAttrs() != null) {
                data.set("xAttrs", om.valueToTree(this.getXAttrs()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-schedulerx.RosJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosJobProps.Jsii$Proxy that = (RosJobProps.Jsii$Proxy) o;

            if (!executeMode.equals(that.executeMode)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!jobType.equals(that.jobType)) return false;
            if (!name.equals(that.name)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!timeType.equals(that.timeType)) return false;
            if (this.attemptInterval != null ? !this.attemptInterval.equals(that.attemptInterval) : that.attemptInterval != null) return false;
            if (this.calendar != null ? !this.calendar.equals(that.calendar) : that.calendar != null) return false;
            if (this.className != null ? !this.className.equals(that.className) : that.className != null) return false;
            if (this.consumerSize != null ? !this.consumerSize.equals(that.consumerSize) : that.consumerSize != null) return false;
            if (this.contactInfo != null ? !this.contactInfo.equals(that.contactInfo) : that.contactInfo != null) return false;
            if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
            if (this.dataOffset != null ? !this.dataOffset.equals(that.dataOffset) : that.dataOffset != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dispatcherSize != null ? !this.dispatcherSize.equals(that.dispatcherSize) : that.dispatcherSize != null) return false;
            if (this.failEnable != null ? !this.failEnable.equals(that.failEnable) : that.failEnable != null) return false;
            if (this.failTimes != null ? !this.failTimes.equals(that.failTimes) : that.failTimes != null) return false;
            if (this.maxAttempt != null ? !this.maxAttempt.equals(that.maxAttempt) : that.maxAttempt != null) return false;
            if (this.maxConcurrency != null ? !this.maxConcurrency.equals(that.maxConcurrency) : that.maxConcurrency != null) return false;
            if (this.missWorkerEnable != null ? !this.missWorkerEnable.equals(that.missWorkerEnable) : that.missWorkerEnable != null) return false;
            if (this.namespaceSource != null ? !this.namespaceSource.equals(that.namespaceSource) : that.namespaceSource != null) return false;
            if (this.pageSize != null ? !this.pageSize.equals(that.pageSize) : that.pageSize != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.queueSize != null ? !this.queueSize.equals(that.queueSize) : that.queueSize != null) return false;
            if (this.sendChannel != null ? !this.sendChannel.equals(that.sendChannel) : that.sendChannel != null) return false;
            if (this.successNoticeEnable != null ? !this.successNoticeEnable.equals(that.successNoticeEnable) : that.successNoticeEnable != null) return false;
            if (this.taskAttemptInterval != null ? !this.taskAttemptInterval.equals(that.taskAttemptInterval) : that.taskAttemptInterval != null) return false;
            if (this.taskMaxAttempt != null ? !this.taskMaxAttempt.equals(that.taskMaxAttempt) : that.taskMaxAttempt != null) return false;
            if (this.timeExpression != null ? !this.timeExpression.equals(that.timeExpression) : that.timeExpression != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.timeoutEnable != null ? !this.timeoutEnable.equals(that.timeoutEnable) : that.timeoutEnable != null) return false;
            if (this.timeoutKillEnable != null ? !this.timeoutKillEnable.equals(that.timeoutKillEnable) : that.timeoutKillEnable != null) return false;
            if (this.timezone != null ? !this.timezone.equals(that.timezone) : that.timezone != null) return false;
            return this.xAttrs != null ? this.xAttrs.equals(that.xAttrs) : that.xAttrs == null;
        }

        @Override
        public final int hashCode() {
            int result = this.executeMode.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.jobType.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.timeType.hashCode());
            result = 31 * result + (this.attemptInterval != null ? this.attemptInterval.hashCode() : 0);
            result = 31 * result + (this.calendar != null ? this.calendar.hashCode() : 0);
            result = 31 * result + (this.className != null ? this.className.hashCode() : 0);
            result = 31 * result + (this.consumerSize != null ? this.consumerSize.hashCode() : 0);
            result = 31 * result + (this.contactInfo != null ? this.contactInfo.hashCode() : 0);
            result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
            result = 31 * result + (this.dataOffset != null ? this.dataOffset.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dispatcherSize != null ? this.dispatcherSize.hashCode() : 0);
            result = 31 * result + (this.failEnable != null ? this.failEnable.hashCode() : 0);
            result = 31 * result + (this.failTimes != null ? this.failTimes.hashCode() : 0);
            result = 31 * result + (this.maxAttempt != null ? this.maxAttempt.hashCode() : 0);
            result = 31 * result + (this.maxConcurrency != null ? this.maxConcurrency.hashCode() : 0);
            result = 31 * result + (this.missWorkerEnable != null ? this.missWorkerEnable.hashCode() : 0);
            result = 31 * result + (this.namespaceSource != null ? this.namespaceSource.hashCode() : 0);
            result = 31 * result + (this.pageSize != null ? this.pageSize.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.queueSize != null ? this.queueSize.hashCode() : 0);
            result = 31 * result + (this.sendChannel != null ? this.sendChannel.hashCode() : 0);
            result = 31 * result + (this.successNoticeEnable != null ? this.successNoticeEnable.hashCode() : 0);
            result = 31 * result + (this.taskAttemptInterval != null ? this.taskAttemptInterval.hashCode() : 0);
            result = 31 * result + (this.taskMaxAttempt != null ? this.taskMaxAttempt.hashCode() : 0);
            result = 31 * result + (this.timeExpression != null ? this.timeExpression.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.timeoutEnable != null ? this.timeoutEnable.hashCode() : 0);
            result = 31 * result + (this.timeoutKillEnable != null ? this.timeoutKillEnable.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            result = 31 * result + (this.xAttrs != null ? this.xAttrs.hashCode() : 0);
            return result;
        }
    }
}

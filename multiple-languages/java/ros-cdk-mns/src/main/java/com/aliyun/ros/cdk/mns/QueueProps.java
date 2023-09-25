package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a <code>ALIYUN::MNS::Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.851Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.QueueProps")
@software.amazon.jsii.Jsii.Proxy(QueueProps.Jsii$Proxy.class)
public interface QueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property queueName: Queue name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

    /**
     * Property delaySeconds: It is measured in seconds.
     * <p>
     * All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelaySeconds() {
        return null;
    }

    /**
     * Property loggingEnabled: Whether to enable log management.
     * <p>
     * "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
     * The default value is false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingEnabled() {
        return null;
    }

    /**
     * Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * <p>
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaximumMessageSize() {
        return null;
    }

    /**
     * Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
     * <p>
     * After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMessageRetentionPeriod() {
        return null;
    }

    /**
     * Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
     * <p>
     * Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPollingWaitSeconds() {
        return null;
    }

    /**
     * Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
     * <p>
     * Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVisibilityTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QueueProps> {
        java.lang.Object queueName;
        java.lang.Object delaySeconds;
        java.lang.Object loggingEnabled;
        java.lang.Object maximumMessageSize;
        java.lang.Object messageRetentionPeriod;
        java.lang.Object pollingWaitSeconds;
        java.lang.Object visibilityTimeout;

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: Queue name. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: Queue name. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDelaySeconds}
         * @param delaySeconds Property delaySeconds: It is measured in seconds.
         *                     All messages sent to the queue can be consumed until the DelaySeconds expires.
         *                     An integer between 0 and 604800 (7 days). The default value is 0
         * @return {@code this}
         */
        public Builder delaySeconds(java.lang.Number delaySeconds) {
            this.delaySeconds = delaySeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDelaySeconds}
         * @param delaySeconds Property delaySeconds: It is measured in seconds.
         *                     All messages sent to the queue can be consumed until the DelaySeconds expires.
         *                     An integer between 0 and 604800 (7 days). The default value is 0
         * @return {@code this}
         */
        public Builder delaySeconds(com.aliyun.ros.cdk.core.IResolvable delaySeconds) {
            this.delaySeconds = delaySeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getLoggingEnabled}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management.
         *                       "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         *                       The default value is false
         * @return {@code this}
         */
        public Builder loggingEnabled(java.lang.Boolean loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getLoggingEnabled}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management.
         *                       "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         *                       The default value is false
         * @return {@code this}
         */
        public Builder loggingEnabled(com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaximumMessageSize}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
         *                           An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
         * @return {@code this}
         */
        public Builder maximumMessageSize(java.lang.Number maximumMessageSize) {
            this.maximumMessageSize = maximumMessageSize;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaximumMessageSize}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
         *                           An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
         * @return {@code this}
         */
        public Builder maximumMessageSize(com.aliyun.ros.cdk.core.IResolvable maximumMessageSize) {
            this.maximumMessageSize = maximumMessageSize;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMessageRetentionPeriod}
         * @param messageRetentionPeriod Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
         *                               After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
         *                               An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
         * @return {@code this}
         */
        public Builder messageRetentionPeriod(java.lang.Number messageRetentionPeriod) {
            this.messageRetentionPeriod = messageRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMessageRetentionPeriod}
         * @param messageRetentionPeriod Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
         *                               After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
         *                               An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
         * @return {@code this}
         */
        public Builder messageRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable messageRetentionPeriod) {
            this.messageRetentionPeriod = messageRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getPollingWaitSeconds}
         * @param pollingWaitSeconds Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
         *                           Measured in seconds.
         *                           An integer between 0 and 30 seconds. The default value is 0 (seconds)
         * @return {@code this}
         */
        public Builder pollingWaitSeconds(java.lang.Number pollingWaitSeconds) {
            this.pollingWaitSeconds = pollingWaitSeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getPollingWaitSeconds}
         * @param pollingWaitSeconds Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
         *                           Measured in seconds.
         *                           An integer between 0 and 30 seconds. The default value is 0 (seconds)
         * @return {@code this}
         */
        public Builder pollingWaitSeconds(com.aliyun.ros.cdk.core.IResolvable pollingWaitSeconds) {
            this.pollingWaitSeconds = pollingWaitSeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVisibilityTimeout}
         * @param visibilityTimeout Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
         *                          Measured in seconds.
         *                          An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
         * @return {@code this}
         */
        public Builder visibilityTimeout(java.lang.Number visibilityTimeout) {
            this.visibilityTimeout = visibilityTimeout;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVisibilityTimeout}
         * @param visibilityTimeout Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
         *                          Measured in seconds.
         *                          An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
         * @return {@code this}
         */
        public Builder visibilityTimeout(com.aliyun.ros.cdk.core.IResolvable visibilityTimeout) {
            this.visibilityTimeout = visibilityTimeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueueProps {
        private final java.lang.Object queueName;
        private final java.lang.Object delaySeconds;
        private final java.lang.Object loggingEnabled;
        private final java.lang.Object maximumMessageSize;
        private final java.lang.Object messageRetentionPeriod;
        private final java.lang.Object pollingWaitSeconds;
        private final java.lang.Object visibilityTimeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delaySeconds = software.amazon.jsii.Kernel.get(this, "delaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingEnabled = software.amazon.jsii.Kernel.get(this, "loggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maximumMessageSize = software.amazon.jsii.Kernel.get(this, "maximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageRetentionPeriod = software.amazon.jsii.Kernel.get(this, "messageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pollingWaitSeconds = software.amazon.jsii.Kernel.get(this, "pollingWaitSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.visibilityTimeout = software.amazon.jsii.Kernel.get(this, "visibilityTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.queueName = java.util.Objects.requireNonNull(builder.queueName, "queueName is required");
            this.delaySeconds = builder.delaySeconds;
            this.loggingEnabled = builder.loggingEnabled;
            this.maximumMessageSize = builder.maximumMessageSize;
            this.messageRetentionPeriod = builder.messageRetentionPeriod;
            this.pollingWaitSeconds = builder.pollingWaitSeconds;
            this.visibilityTimeout = builder.visibilityTimeout;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        public final java.lang.Object getDelaySeconds() {
            return this.delaySeconds;
        }

        @Override
        public final java.lang.Object getLoggingEnabled() {
            return this.loggingEnabled;
        }

        @Override
        public final java.lang.Object getMaximumMessageSize() {
            return this.maximumMessageSize;
        }

        @Override
        public final java.lang.Object getMessageRetentionPeriod() {
            return this.messageRetentionPeriod;
        }

        @Override
        public final java.lang.Object getPollingWaitSeconds() {
            return this.pollingWaitSeconds;
        }

        @Override
        public final java.lang.Object getVisibilityTimeout() {
            return this.visibilityTimeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("queueName", om.valueToTree(this.getQueueName()));
            if (this.getDelaySeconds() != null) {
                data.set("delaySeconds", om.valueToTree(this.getDelaySeconds()));
            }
            if (this.getLoggingEnabled() != null) {
                data.set("loggingEnabled", om.valueToTree(this.getLoggingEnabled()));
            }
            if (this.getMaximumMessageSize() != null) {
                data.set("maximumMessageSize", om.valueToTree(this.getMaximumMessageSize()));
            }
            if (this.getMessageRetentionPeriod() != null) {
                data.set("messageRetentionPeriod", om.valueToTree(this.getMessageRetentionPeriod()));
            }
            if (this.getPollingWaitSeconds() != null) {
                data.set("pollingWaitSeconds", om.valueToTree(this.getPollingWaitSeconds()));
            }
            if (this.getVisibilityTimeout() != null) {
                data.set("visibilityTimeout", om.valueToTree(this.getVisibilityTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.QueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QueueProps.Jsii$Proxy that = (QueueProps.Jsii$Proxy) o;

            if (!queueName.equals(that.queueName)) return false;
            if (this.delaySeconds != null ? !this.delaySeconds.equals(that.delaySeconds) : that.delaySeconds != null) return false;
            if (this.loggingEnabled != null ? !this.loggingEnabled.equals(that.loggingEnabled) : that.loggingEnabled != null) return false;
            if (this.maximumMessageSize != null ? !this.maximumMessageSize.equals(that.maximumMessageSize) : that.maximumMessageSize != null) return false;
            if (this.messageRetentionPeriod != null ? !this.messageRetentionPeriod.equals(that.messageRetentionPeriod) : that.messageRetentionPeriod != null) return false;
            if (this.pollingWaitSeconds != null ? !this.pollingWaitSeconds.equals(that.pollingWaitSeconds) : that.pollingWaitSeconds != null) return false;
            return this.visibilityTimeout != null ? this.visibilityTimeout.equals(that.visibilityTimeout) : that.visibilityTimeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.queueName.hashCode();
            result = 31 * result + (this.delaySeconds != null ? this.delaySeconds.hashCode() : 0);
            result = 31 * result + (this.loggingEnabled != null ? this.loggingEnabled.hashCode() : 0);
            result = 31 * result + (this.maximumMessageSize != null ? this.maximumMessageSize.hashCode() : 0);
            result = 31 * result + (this.messageRetentionPeriod != null ? this.messageRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.pollingWaitSeconds != null ? this.pollingWaitSeconds.hashCode() : 0);
            result = 31 * result + (this.visibilityTimeout != null ? this.visibilityTimeout.hashCode() : 0);
            return result;
        }
    }
}

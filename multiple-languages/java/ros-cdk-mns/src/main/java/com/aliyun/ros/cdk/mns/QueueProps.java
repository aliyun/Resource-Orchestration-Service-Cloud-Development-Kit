package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a `ALIYUN::MNS::Queue`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.080Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.QueueProps")
@software.amazon.jsii.Jsii.Proxy(QueueProps.Jsii$Proxy.class)
public interface QueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getQueueName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDelaySeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMaximumMessageSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMessageRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPollingWaitSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getVisibilityTimeout() {
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
        private java.lang.String queueName;
        private java.lang.Number delaySeconds;
        private java.lang.Object loggingEnabled;
        private java.lang.Number maximumMessageSize;
        private java.lang.Number messageRetentionPeriod;
        private java.lang.Number pollingWaitSeconds;
        private java.lang.Number visibilityTimeout;

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDelaySeconds}
         * @param delaySeconds the value to be set.
         * @return {@code this}
         */
        public Builder delaySeconds(java.lang.Number delaySeconds) {
            this.delaySeconds = delaySeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getLoggingEnabled}
         * @param loggingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder loggingEnabled(java.lang.Boolean loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getLoggingEnabled}
         * @param loggingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder loggingEnabled(com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaximumMessageSize}
         * @param maximumMessageSize the value to be set.
         * @return {@code this}
         */
        public Builder maximumMessageSize(java.lang.Number maximumMessageSize) {
            this.maximumMessageSize = maximumMessageSize;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMessageRetentionPeriod}
         * @param messageRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder messageRetentionPeriod(java.lang.Number messageRetentionPeriod) {
            this.messageRetentionPeriod = messageRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getPollingWaitSeconds}
         * @param pollingWaitSeconds the value to be set.
         * @return {@code this}
         */
        public Builder pollingWaitSeconds(java.lang.Number pollingWaitSeconds) {
            this.pollingWaitSeconds = pollingWaitSeconds;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVisibilityTimeout}
         * @param visibilityTimeout the value to be set.
         * @return {@code this}
         */
        public Builder visibilityTimeout(java.lang.Number visibilityTimeout) {
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
            return new Jsii$Proxy(queueName, delaySeconds, loggingEnabled, maximumMessageSize, messageRetentionPeriod, pollingWaitSeconds, visibilityTimeout);
        }
    }

    /**
     * An implementation for {@link QueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueueProps {
        private final java.lang.String queueName;
        private final java.lang.Number delaySeconds;
        private final java.lang.Object loggingEnabled;
        private final java.lang.Number maximumMessageSize;
        private final java.lang.Number messageRetentionPeriod;
        private final java.lang.Number pollingWaitSeconds;
        private final java.lang.Number visibilityTimeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.delaySeconds = software.amazon.jsii.Kernel.get(this, "delaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.loggingEnabled = software.amazon.jsii.Kernel.get(this, "loggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maximumMessageSize = software.amazon.jsii.Kernel.get(this, "maximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.messageRetentionPeriod = software.amazon.jsii.Kernel.get(this, "messageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.pollingWaitSeconds = software.amazon.jsii.Kernel.get(this, "pollingWaitSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.visibilityTimeout = software.amazon.jsii.Kernel.get(this, "visibilityTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String queueName, final java.lang.Number delaySeconds, final java.lang.Object loggingEnabled, final java.lang.Number maximumMessageSize, final java.lang.Number messageRetentionPeriod, final java.lang.Number pollingWaitSeconds, final java.lang.Number visibilityTimeout) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.queueName = java.util.Objects.requireNonNull(queueName, "queueName is required");
            this.delaySeconds = delaySeconds;
            this.loggingEnabled = loggingEnabled;
            this.maximumMessageSize = maximumMessageSize;
            this.messageRetentionPeriod = messageRetentionPeriod;
            this.pollingWaitSeconds = pollingWaitSeconds;
            this.visibilityTimeout = visibilityTimeout;
        }

        @Override
        public final java.lang.String getQueueName() {
            return this.queueName;
        }

        @Override
        public final java.lang.Number getDelaySeconds() {
            return this.delaySeconds;
        }

        @Override
        public final java.lang.Object getLoggingEnabled() {
            return this.loggingEnabled;
        }

        @Override
        public final java.lang.Number getMaximumMessageSize() {
            return this.maximumMessageSize;
        }

        @Override
        public final java.lang.Number getMessageRetentionPeriod() {
            return this.messageRetentionPeriod;
        }

        @Override
        public final java.lang.Number getPollingWaitSeconds() {
            return this.pollingWaitSeconds;
        }

        @Override
        public final java.lang.Number getVisibilityTimeout() {
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

package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a `ALIYUN::AMQP::Queue`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.QueueProps")
@software.amazon.jsii.Jsii.Proxy(QueueProps.Jsii$Proxy.class)
public interface QueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: InstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property queueName: The name of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

    /**
     * Property virtualHost: The name of the virtual host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
     * <p>
     * Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeleteState() {
        return null;
    }

    /**
     * Property autoExpireState: The validity period after which the queue is automatically deleted.
     * <p>
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoExpireState() {
        return null;
    }

    /**
     * Property deadLetterExchange: The dead-letter exchange.
     * <p>
     * A dead-letter exchange is used to receive rejected messages.
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterExchange() {
        return null;
    }

    /**
     * Property deadLetterRoutingKey: The dead letter routing key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterRoutingKey() {
        return null;
    }

    /**
     * Property exclusiveState: Specifies whether the queue is an exclusive queue.
     * <p>
     * Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveState() {
        return null;
    }

    /**
     * Property maximumPriority: The priority function is not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaximumPriority() {
        return null;
    }

    /**
     * Property maxLength: The maximum number of messages that can be stored in the queue.
     * <p>
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxLength() {
        return null;
    }

    /**
     * Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * <p>
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMessageTtl() {
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
        java.lang.Object instanceId;
        java.lang.Object queueName;
        java.lang.Object virtualHost;
        java.lang.Object autoDeleteState;
        java.lang.Object autoExpireState;
        java.lang.Object deadLetterExchange;
        java.lang.Object deadLetterRoutingKey;
        java.lang.Object exclusiveState;
        java.lang.Object maximumPriority;
        java.lang.Object maxLength;
        java.lang.Object messageTtl;

        /**
         * Sets the value of {@link QueueProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: The name of the queue. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getQueueName}
         * @param queueName Property queueName: The name of the queue. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getAutoDeleteState}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         *                        Valid values:
         *                        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
         *                        false: The Auto Delete attribute is not configured.
         * @return {@code this}
         */
        public Builder autoDeleteState(java.lang.Boolean autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getAutoDeleteState}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         *                        Valid values:
         *                        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
         *                        false: The Auto Delete attribute is not configured.
         * @return {@code this}
         */
        public Builder autoDeleteState(com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getAutoExpireState}
         * @param autoExpireState Property autoExpireState: The validity period after which the queue is automatically deleted.
         *                        If the queue is not accessed within a specified period of time, it is automatically deleted.
         * @return {@code this}
         */
        public Builder autoExpireState(java.lang.Number autoExpireState) {
            this.autoExpireState = autoExpireState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getAutoExpireState}
         * @param autoExpireState Property autoExpireState: The validity period after which the queue is automatically deleted.
         *                        If the queue is not accessed within a specified period of time, it is automatically deleted.
         * @return {@code this}
         */
        public Builder autoExpireState(com.aliyun.ros.cdk.core.IResolvable autoExpireState) {
            this.autoExpireState = autoExpireState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDeadLetterExchange}
         * @param deadLetterExchange Property deadLetterExchange: The dead-letter exchange.
         *                           A dead-letter exchange is used to receive rejected messages.
         *                           If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
         *                           Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
         * @return {@code this}
         */
        public Builder deadLetterExchange(java.lang.String deadLetterExchange) {
            this.deadLetterExchange = deadLetterExchange;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDeadLetterExchange}
         * @param deadLetterExchange Property deadLetterExchange: The dead-letter exchange.
         *                           A dead-letter exchange is used to receive rejected messages.
         *                           If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
         *                           Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
         * @return {@code this}
         */
        public Builder deadLetterExchange(com.aliyun.ros.cdk.core.IResolvable deadLetterExchange) {
            this.deadLetterExchange = deadLetterExchange;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDeadLetterRoutingKey}
         * @param deadLetterRoutingKey Property deadLetterRoutingKey: The dead letter routing key.
         * @return {@code this}
         */
        public Builder deadLetterRoutingKey(java.lang.String deadLetterRoutingKey) {
            this.deadLetterRoutingKey = deadLetterRoutingKey;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getDeadLetterRoutingKey}
         * @param deadLetterRoutingKey Property deadLetterRoutingKey: The dead letter routing key.
         * @return {@code this}
         */
        public Builder deadLetterRoutingKey(com.aliyun.ros.cdk.core.IResolvable deadLetterRoutingKey) {
            this.deadLetterRoutingKey = deadLetterRoutingKey;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getExclusiveState}
         * @param exclusiveState Property exclusiveState: Specifies whether the queue is an exclusive queue.
         *                       Valid values:
         *                       true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
         *                       false: The Auto Delete attribute is not configured.
         * @return {@code this}
         */
        public Builder exclusiveState(java.lang.Boolean exclusiveState) {
            this.exclusiveState = exclusiveState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getExclusiveState}
         * @param exclusiveState Property exclusiveState: Specifies whether the queue is an exclusive queue.
         *                       Valid values:
         *                       true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
         *                       false: The Auto Delete attribute is not configured.
         * @return {@code this}
         */
        public Builder exclusiveState(com.aliyun.ros.cdk.core.IResolvable exclusiveState) {
            this.exclusiveState = exclusiveState;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaximumPriority}
         * @param maximumPriority Property maximumPriority: The priority function is not supported.
         * @return {@code this}
         */
        public Builder maximumPriority(java.lang.Number maximumPriority) {
            this.maximumPriority = maximumPriority;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaximumPriority}
         * @param maximumPriority Property maximumPriority: The priority function is not supported.
         * @return {@code this}
         */
        public Builder maximumPriority(com.aliyun.ros.cdk.core.IResolvable maximumPriority) {
            this.maximumPriority = maximumPriority;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaxLength}
         * @param maxLength Property maxLength: The maximum number of messages that can be stored in the queue.
         *                  If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
         * @return {@code this}
         */
        public Builder maxLength(java.lang.Number maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMaxLength}
         * @param maxLength Property maxLength: The maximum number of messages that can be stored in the queue.
         *                  If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
         * @return {@code this}
         */
        public Builder maxLength(com.aliyun.ros.cdk.core.IResolvable maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMessageTtl}
         * @param messageTtl Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
         *                   The value of message lifetime must be a non-negative integer, up to 1 day.
         *                   The unit is milliseconds
         * @return {@code this}
         */
        public Builder messageTtl(java.lang.Number messageTtl) {
            this.messageTtl = messageTtl;
            return this;
        }

        /**
         * Sets the value of {@link QueueProps#getMessageTtl}
         * @param messageTtl Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
         *                   The value of message lifetime must be a non-negative integer, up to 1 day.
         *                   The unit is milliseconds
         * @return {@code this}
         */
        public Builder messageTtl(com.aliyun.ros.cdk.core.IResolvable messageTtl) {
            this.messageTtl = messageTtl;
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
        private final java.lang.Object instanceId;
        private final java.lang.Object queueName;
        private final java.lang.Object virtualHost;
        private final java.lang.Object autoDeleteState;
        private final java.lang.Object autoExpireState;
        private final java.lang.Object deadLetterExchange;
        private final java.lang.Object deadLetterRoutingKey;
        private final java.lang.Object exclusiveState;
        private final java.lang.Object maximumPriority;
        private final java.lang.Object maxLength;
        private final java.lang.Object messageTtl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.virtualHost = software.amazon.jsii.Kernel.get(this, "virtualHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoDeleteState = software.amazon.jsii.Kernel.get(this, "autoDeleteState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoExpireState = software.amazon.jsii.Kernel.get(this, "autoExpireState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deadLetterExchange = software.amazon.jsii.Kernel.get(this, "deadLetterExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deadLetterRoutingKey = software.amazon.jsii.Kernel.get(this, "deadLetterRoutingKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclusiveState = software.amazon.jsii.Kernel.get(this, "exclusiveState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maximumPriority = software.amazon.jsii.Kernel.get(this, "maximumPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxLength = software.amazon.jsii.Kernel.get(this, "maxLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageTtl = software.amazon.jsii.Kernel.get(this, "messageTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.queueName = java.util.Objects.requireNonNull(builder.queueName, "queueName is required");
            this.virtualHost = java.util.Objects.requireNonNull(builder.virtualHost, "virtualHost is required");
            this.autoDeleteState = builder.autoDeleteState;
            this.autoExpireState = builder.autoExpireState;
            this.deadLetterExchange = builder.deadLetterExchange;
            this.deadLetterRoutingKey = builder.deadLetterRoutingKey;
            this.exclusiveState = builder.exclusiveState;
            this.maximumPriority = builder.maximumPriority;
            this.maxLength = builder.maxLength;
            this.messageTtl = builder.messageTtl;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        public final java.lang.Object getVirtualHost() {
            return this.virtualHost;
        }

        @Override
        public final java.lang.Object getAutoDeleteState() {
            return this.autoDeleteState;
        }

        @Override
        public final java.lang.Object getAutoExpireState() {
            return this.autoExpireState;
        }

        @Override
        public final java.lang.Object getDeadLetterExchange() {
            return this.deadLetterExchange;
        }

        @Override
        public final java.lang.Object getDeadLetterRoutingKey() {
            return this.deadLetterRoutingKey;
        }

        @Override
        public final java.lang.Object getExclusiveState() {
            return this.exclusiveState;
        }

        @Override
        public final java.lang.Object getMaximumPriority() {
            return this.maximumPriority;
        }

        @Override
        public final java.lang.Object getMaxLength() {
            return this.maxLength;
        }

        @Override
        public final java.lang.Object getMessageTtl() {
            return this.messageTtl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("queueName", om.valueToTree(this.getQueueName()));
            data.set("virtualHost", om.valueToTree(this.getVirtualHost()));
            if (this.getAutoDeleteState() != null) {
                data.set("autoDeleteState", om.valueToTree(this.getAutoDeleteState()));
            }
            if (this.getAutoExpireState() != null) {
                data.set("autoExpireState", om.valueToTree(this.getAutoExpireState()));
            }
            if (this.getDeadLetterExchange() != null) {
                data.set("deadLetterExchange", om.valueToTree(this.getDeadLetterExchange()));
            }
            if (this.getDeadLetterRoutingKey() != null) {
                data.set("deadLetterRoutingKey", om.valueToTree(this.getDeadLetterRoutingKey()));
            }
            if (this.getExclusiveState() != null) {
                data.set("exclusiveState", om.valueToTree(this.getExclusiveState()));
            }
            if (this.getMaximumPriority() != null) {
                data.set("maximumPriority", om.valueToTree(this.getMaximumPriority()));
            }
            if (this.getMaxLength() != null) {
                data.set("maxLength", om.valueToTree(this.getMaxLength()));
            }
            if (this.getMessageTtl() != null) {
                data.set("messageTtl", om.valueToTree(this.getMessageTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.QueueProps"));
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

            if (!instanceId.equals(that.instanceId)) return false;
            if (!queueName.equals(that.queueName)) return false;
            if (!virtualHost.equals(that.virtualHost)) return false;
            if (this.autoDeleteState != null ? !this.autoDeleteState.equals(that.autoDeleteState) : that.autoDeleteState != null) return false;
            if (this.autoExpireState != null ? !this.autoExpireState.equals(that.autoExpireState) : that.autoExpireState != null) return false;
            if (this.deadLetterExchange != null ? !this.deadLetterExchange.equals(that.deadLetterExchange) : that.deadLetterExchange != null) return false;
            if (this.deadLetterRoutingKey != null ? !this.deadLetterRoutingKey.equals(that.deadLetterRoutingKey) : that.deadLetterRoutingKey != null) return false;
            if (this.exclusiveState != null ? !this.exclusiveState.equals(that.exclusiveState) : that.exclusiveState != null) return false;
            if (this.maximumPriority != null ? !this.maximumPriority.equals(that.maximumPriority) : that.maximumPriority != null) return false;
            if (this.maxLength != null ? !this.maxLength.equals(that.maxLength) : that.maxLength != null) return false;
            return this.messageTtl != null ? this.messageTtl.equals(that.messageTtl) : that.messageTtl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.queueName.hashCode());
            result = 31 * result + (this.virtualHost.hashCode());
            result = 31 * result + (this.autoDeleteState != null ? this.autoDeleteState.hashCode() : 0);
            result = 31 * result + (this.autoExpireState != null ? this.autoExpireState.hashCode() : 0);
            result = 31 * result + (this.deadLetterExchange != null ? this.deadLetterExchange.hashCode() : 0);
            result = 31 * result + (this.deadLetterRoutingKey != null ? this.deadLetterRoutingKey.hashCode() : 0);
            result = 31 * result + (this.exclusiveState != null ? this.exclusiveState.hashCode() : 0);
            result = 31 * result + (this.maximumPriority != null ? this.maximumPriority.hashCode() : 0);
            result = 31 * result + (this.maxLength != null ? this.maxLength.hashCode() : 0);
            result = 31 * result + (this.messageTtl != null ? this.messageTtl.hashCode() : 0);
            return result;
        }
    }
}

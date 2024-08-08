package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>RosQueue</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:07.272Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosQueueProps")
@software.amazon.jsii.Jsii.Proxy(RosQueueProps.Jsii$Proxy.class)
public interface RosQueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeleteState() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoExpireState() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterExchange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterRoutingKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveState() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaximumPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxLength() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMessageTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosQueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosQueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosQueueProps> {
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
         * Sets the value of {@link RosQueueProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getAutoDeleteState}
         * @param autoDeleteState the value to be set.
         * @return {@code this}
         */
        public Builder autoDeleteState(java.lang.Boolean autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getAutoDeleteState}
         * @param autoDeleteState the value to be set.
         * @return {@code this}
         */
        public Builder autoDeleteState(com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getAutoExpireState}
         * @param autoExpireState the value to be set.
         * @return {@code this}
         */
        public Builder autoExpireState(java.lang.Number autoExpireState) {
            this.autoExpireState = autoExpireState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getAutoExpireState}
         * @param autoExpireState the value to be set.
         * @return {@code this}
         */
        public Builder autoExpireState(com.aliyun.ros.cdk.core.IResolvable autoExpireState) {
            this.autoExpireState = autoExpireState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getDeadLetterExchange}
         * @param deadLetterExchange the value to be set.
         * @return {@code this}
         */
        public Builder deadLetterExchange(java.lang.String deadLetterExchange) {
            this.deadLetterExchange = deadLetterExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getDeadLetterExchange}
         * @param deadLetterExchange the value to be set.
         * @return {@code this}
         */
        public Builder deadLetterExchange(com.aliyun.ros.cdk.core.IResolvable deadLetterExchange) {
            this.deadLetterExchange = deadLetterExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getDeadLetterRoutingKey}
         * @param deadLetterRoutingKey the value to be set.
         * @return {@code this}
         */
        public Builder deadLetterRoutingKey(java.lang.String deadLetterRoutingKey) {
            this.deadLetterRoutingKey = deadLetterRoutingKey;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getDeadLetterRoutingKey}
         * @param deadLetterRoutingKey the value to be set.
         * @return {@code this}
         */
        public Builder deadLetterRoutingKey(com.aliyun.ros.cdk.core.IResolvable deadLetterRoutingKey) {
            this.deadLetterRoutingKey = deadLetterRoutingKey;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getExclusiveState}
         * @param exclusiveState the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveState(java.lang.Boolean exclusiveState) {
            this.exclusiveState = exclusiveState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getExclusiveState}
         * @param exclusiveState the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveState(com.aliyun.ros.cdk.core.IResolvable exclusiveState) {
            this.exclusiveState = exclusiveState;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMaximumPriority}
         * @param maximumPriority the value to be set.
         * @return {@code this}
         */
        public Builder maximumPriority(java.lang.Number maximumPriority) {
            this.maximumPriority = maximumPriority;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMaximumPriority}
         * @param maximumPriority the value to be set.
         * @return {@code this}
         */
        public Builder maximumPriority(com.aliyun.ros.cdk.core.IResolvable maximumPriority) {
            this.maximumPriority = maximumPriority;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMaxLength}
         * @param maxLength the value to be set.
         * @return {@code this}
         */
        public Builder maxLength(java.lang.Number maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMaxLength}
         * @param maxLength the value to be set.
         * @return {@code this}
         */
        public Builder maxLength(com.aliyun.ros.cdk.core.IResolvable maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMessageTtl}
         * @param messageTtl the value to be set.
         * @return {@code this}
         */
        public Builder messageTtl(java.lang.Number messageTtl) {
            this.messageTtl = messageTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getMessageTtl}
         * @param messageTtl the value to be set.
         * @return {@code this}
         */
        public Builder messageTtl(com.aliyun.ros.cdk.core.IResolvable messageTtl) {
            this.messageTtl = messageTtl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosQueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosQueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosQueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosQueueProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.RosQueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosQueueProps.Jsii$Proxy that = (RosQueueProps.Jsii$Proxy) o;

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

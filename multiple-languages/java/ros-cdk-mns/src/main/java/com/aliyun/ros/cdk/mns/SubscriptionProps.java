package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a <code>Subscription</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.657Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.SubscriptionProps")
@software.amazon.jsii.Jsii.Proxy(SubscriptionProps.Jsii$Proxy.class)
public interface SubscriptionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpoint: Terminal address of the message recipient for the created subscription.
     * <p>
     * Currently, four types of endpoints are supported:
     * <p>
     * <ol>
     * <li>HttpEndpoint, which must be prefixed with "http://";</li>
     * <li>QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};</li>
     * <li>MailEndpoint, in the format of mail:directmail:{MailAddress};</li>
     * <li>SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.</li>
     * </ol>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint();

    /**
     * Property subscriptionName: Subscription name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionName();

    /**
     * Property topicName: Topic name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     * Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilterTag() {
        return null;
    }

    /**
     * Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * <p>
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyContentFormat() {
        return null;
    }

    /**
     * Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * <p>
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubscriptionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubscriptionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubscriptionProps> {
        java.lang.Object endpoint;
        java.lang.Object subscriptionName;
        java.lang.Object topicName;
        java.lang.Object filterTag;
        java.lang.Object notifyContentFormat;
        java.lang.Object notifyStrategy;

        /**
         * Sets the value of {@link SubscriptionProps#getEndpoint}
         * @param endpoint Property endpoint: Terminal address of the message recipient for the created subscription. This parameter is required.
         *                 Currently, four types of endpoints are supported:
         *                 <p>
         *                 <ol>
         *                 <li>HttpEndpoint, which must be prefixed with "http://";</li>
         *                 <li>QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};</li>
         *                 <li>MailEndpoint, in the format of mail:directmail:{MailAddress};</li>
         *                 <li>SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.</li>
         *                 </ol>
         * @return {@code this}
         */
        public Builder endpoint(java.lang.String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getEndpoint}
         * @param endpoint Property endpoint: Terminal address of the message recipient for the created subscription. This parameter is required.
         *                 Currently, four types of endpoints are supported:
         *                 <p>
         *                 <ol>
         *                 <li>HttpEndpoint, which must be prefixed with "http://";</li>
         *                 <li>QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};</li>
         *                 <li>MailEndpoint, in the format of mail:directmail:{MailAddress};</li>
         *                 <li>SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.</li>
         *                 </ol>
         * @return {@code this}
         */
        public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getSubscriptionName}
         * @param subscriptionName Property subscriptionName: Subscription name. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionName(java.lang.String subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getSubscriptionName}
         * @param subscriptionName Property subscriptionName: Subscription name. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionName(com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getTopicName}
         * @param topicName Property topicName: Topic name. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getTopicName}
         * @param topicName Property topicName: Topic name. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getFilterTag}
         * @param filterTag Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
         * @return {@code this}
         */
        public Builder filterTag(java.lang.String filterTag) {
            this.filterTag = filterTag;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getFilterTag}
         * @param filterTag Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
         * @return {@code this}
         */
        public Builder filterTag(com.aliyun.ros.cdk.core.IResolvable filterTag) {
            this.filterTag = filterTag;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyContentFormat}
         * @param notifyContentFormat Property notifyContentFormat: Format of the message content pushed to the endpoint.
         *                            XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
         * @return {@code this}
         */
        public Builder notifyContentFormat(java.lang.String notifyContentFormat) {
            this.notifyContentFormat = notifyContentFormat;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyContentFormat}
         * @param notifyContentFormat Property notifyContentFormat: Format of the message content pushed to the endpoint.
         *                            XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
         * @return {@code this}
         */
        public Builder notifyContentFormat(com.aliyun.ros.cdk.core.IResolvable notifyContentFormat) {
            this.notifyContentFormat = notifyContentFormat;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyStrategy}
         * @param notifyStrategy Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
         *                       BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
         * @return {@code this}
         */
        public Builder notifyStrategy(java.lang.String notifyStrategy) {
            this.notifyStrategy = notifyStrategy;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyStrategy}
         * @param notifyStrategy Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
         *                       BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
         * @return {@code this}
         */
        public Builder notifyStrategy(com.aliyun.ros.cdk.core.IResolvable notifyStrategy) {
            this.notifyStrategy = notifyStrategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubscriptionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubscriptionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SubscriptionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionProps {
        private final java.lang.Object endpoint;
        private final java.lang.Object subscriptionName;
        private final java.lang.Object topicName;
        private final java.lang.Object filterTag;
        private final java.lang.Object notifyContentFormat;
        private final java.lang.Object notifyStrategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionName = software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterTag = software.amazon.jsii.Kernel.get(this, "filterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyContentFormat = software.amazon.jsii.Kernel.get(this, "notifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyStrategy = software.amazon.jsii.Kernel.get(this, "notifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
            this.subscriptionName = java.util.Objects.requireNonNull(builder.subscriptionName, "subscriptionName is required");
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.filterTag = builder.filterTag;
            this.notifyContentFormat = builder.notifyContentFormat;
            this.notifyStrategy = builder.notifyStrategy;
        }

        @Override
        public final java.lang.Object getEndpoint() {
            return this.endpoint;
        }

        @Override
        public final java.lang.Object getSubscriptionName() {
            return this.subscriptionName;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getFilterTag() {
            return this.filterTag;
        }

        @Override
        public final java.lang.Object getNotifyContentFormat() {
            return this.notifyContentFormat;
        }

        @Override
        public final java.lang.Object getNotifyStrategy() {
            return this.notifyStrategy;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpoint", om.valueToTree(this.getEndpoint()));
            data.set("subscriptionName", om.valueToTree(this.getSubscriptionName()));
            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getFilterTag() != null) {
                data.set("filterTag", om.valueToTree(this.getFilterTag()));
            }
            if (this.getNotifyContentFormat() != null) {
                data.set("notifyContentFormat", om.valueToTree(this.getNotifyContentFormat()));
            }
            if (this.getNotifyStrategy() != null) {
                data.set("notifyStrategy", om.valueToTree(this.getNotifyStrategy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.SubscriptionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubscriptionProps.Jsii$Proxy that = (SubscriptionProps.Jsii$Proxy) o;

            if (!endpoint.equals(that.endpoint)) return false;
            if (!subscriptionName.equals(that.subscriptionName)) return false;
            if (!topicName.equals(that.topicName)) return false;
            if (this.filterTag != null ? !this.filterTag.equals(that.filterTag) : that.filterTag != null) return false;
            if (this.notifyContentFormat != null ? !this.notifyContentFormat.equals(that.notifyContentFormat) : that.notifyContentFormat != null) return false;
            return this.notifyStrategy != null ? this.notifyStrategy.equals(that.notifyStrategy) : that.notifyStrategy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpoint.hashCode();
            result = 31 * result + (this.subscriptionName.hashCode());
            result = 31 * result + (this.topicName.hashCode());
            result = 31 * result + (this.filterTag != null ? this.filterTag.hashCode() : 0);
            result = 31 * result + (this.notifyContentFormat != null ? this.notifyContentFormat.hashCode() : 0);
            result = 31 * result + (this.notifyStrategy != null ? this.notifyStrategy.hashCode() : 0);
            return result;
        }
    }
}

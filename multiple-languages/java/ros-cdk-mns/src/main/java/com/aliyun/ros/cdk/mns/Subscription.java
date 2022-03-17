package com.aliyun.ros.cdk.mns;

/**
 * A ROS resource type:  `ALIYUN::MNS::Subscription`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.879Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.Subscription")
public class Subscription extends com.aliyun.ros.cdk.core.Resource {

    protected Subscription(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Subscription(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::MNS::Subscription`.
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
    public Subscription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.SubscriptionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Subscription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.SubscriptionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SubscriptionName: Subscription name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionName() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SubscriptionUrl: URL of created subscription.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TopicName: Topic name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicName() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.Subscription}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.Subscription> {
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
        private final com.aliyun.ros.cdk.mns.SubscriptionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.SubscriptionProps.Builder();
        }

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
         * <p>
         * @return {@code this}
         * @param endpoint Property endpoint: Terminal address of the message recipient for the created subscription. This parameter is required.
         */
        public Builder endpoint(final java.lang.String endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param endpoint Property endpoint: Terminal address of the message recipient for the created subscription. This parameter is required.
         */
        public Builder endpoint(final com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }

        /**
         * Property subscriptionName: Subscription name.
         * <p>
         * @return {@code this}
         * @param subscriptionName Property subscriptionName: Subscription name. This parameter is required.
         */
        public Builder subscriptionName(final java.lang.String subscriptionName) {
            this.props.subscriptionName(subscriptionName);
            return this;
        }
        /**
         * Property subscriptionName: Subscription name.
         * <p>
         * @return {@code this}
         * @param subscriptionName Property subscriptionName: Subscription name. This parameter is required.
         */
        public Builder subscriptionName(final com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.props.subscriptionName(subscriptionName);
            return this;
        }

        /**
         * Property topicName: Topic name.
         * <p>
         * @return {@code this}
         * @param topicName Property topicName: Topic name. This parameter is required.
         */
        public Builder topicName(final java.lang.String topicName) {
            this.props.topicName(topicName);
            return this;
        }
        /**
         * Property topicName: Topic name.
         * <p>
         * @return {@code this}
         * @param topicName Property topicName: Topic name. This parameter is required.
         */
        public Builder topicName(final com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.props.topicName(topicName);
            return this;
        }

        /**
         * Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
         * <p>
         * @return {@code this}
         * @param filterTag Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter. This parameter is required.
         */
        public Builder filterTag(final java.lang.String filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }
        /**
         * Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
         * <p>
         * @return {@code this}
         * @param filterTag Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter. This parameter is required.
         */
        public Builder filterTag(final com.aliyun.ros.cdk.core.IResolvable filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }

        /**
         * Property notifyContentFormat: Format of the message content pushed to the endpoint.
         * <p>
         * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
         * <p>
         * @return {@code this}
         * @param notifyContentFormat Property notifyContentFormat: Format of the message content pushed to the endpoint. This parameter is required.
         */
        public Builder notifyContentFormat(final java.lang.String notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }
        /**
         * Property notifyContentFormat: Format of the message content pushed to the endpoint.
         * <p>
         * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
         * <p>
         * @return {@code this}
         * @param notifyContentFormat Property notifyContentFormat: Format of the message content pushed to the endpoint. This parameter is required.
         */
        public Builder notifyContentFormat(final com.aliyun.ros.cdk.core.IResolvable notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }

        /**
         * Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
         * <p>
         * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
         * <p>
         * @return {@code this}
         * @param notifyStrategy Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint. This parameter is required.
         */
        public Builder notifyStrategy(final java.lang.String notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }
        /**
         * Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
         * <p>
         * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
         * <p>
         * @return {@code this}
         * @param notifyStrategy Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint. This parameter is required.
         */
        public Builder notifyStrategy(final com.aliyun.ros.cdk.core.IResolvable notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mns.Subscription}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.Subscription build() {
            return new com.aliyun.ros.cdk.mns.Subscription(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

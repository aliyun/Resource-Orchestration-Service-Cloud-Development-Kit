package com.aliyun.ros.cdk.mns;

/**
 * A ROS resource type:  `ALIYUN::MNS::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.705Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.Topic")
public class Topic extends com.aliyun.ros.cdk.core.Resource {

    protected Topic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Topic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::MNS::Topic`.
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
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.TopicProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::MNS::Topic`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.TopicProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArnWithSlash() {
        return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TopicName: Topic name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicName() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TopicUrl: URL of created topic.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.Topic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.Topic> {
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
        private final com.aliyun.ros.cdk.mns.TopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.TopicProps.Builder();
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
         * Property loggingEnabled: Whether to enable log management.
         * <p>
         * "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         * The default value is false
         * <p>
         * @return {@code this}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management. This parameter is required.
         */
        public Builder loggingEnabled(final java.lang.Boolean loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }
        /**
         * Property loggingEnabled: Whether to enable log management.
         * <p>
         * "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         * The default value is false
         * <p>
         * @return {@code this}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management. This parameter is required.
         */
        public Builder loggingEnabled(final com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }

        /**
         * Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
         * <p>
         * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
         * <p>
         * @return {@code this}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes. This parameter is required.
         */
        public Builder maximumMessageSize(final java.lang.Number maximumMessageSize) {
            this.props.maximumMessageSize(maximumMessageSize);
            return this;
        }
        /**
         * Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
         * <p>
         * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
         * <p>
         * @return {@code this}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes. This parameter is required.
         */
        public Builder maximumMessageSize(final com.aliyun.ros.cdk.core.IResolvable maximumMessageSize) {
            this.props.maximumMessageSize(maximumMessageSize);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mns.Topic}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.Topic build() {
            return new com.aliyun.ros.cdk.mns.Topic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

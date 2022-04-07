package com.aliyun.ros.cdk.iot;

/**
 * A ROS resource type:  `ALIYUN::IOT::ProductTopic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:41.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.ProductTopic")
public class ProductTopic extends com.aliyun.ros.cdk.core.Resource {

    protected ProductTopic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProductTopic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::IOT::ProductTopic`.
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
    public ProductTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.ProductTopicProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::IOT::ProductTopic`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ProductTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.ProductTopicProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TopicId: Topic ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicId() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.ProductTopic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.ProductTopic> {
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
        private final com.aliyun.ros.cdk.iot.ProductTopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.ProductTopicProps.Builder();
        }

        /**
         * Property operation: Operation permissions of devices on the topic category.
         * <p>
         * Value options:
         * SUB: Subscribe. Devices can subscribe to the topics of this category.
         * PUB: Publish. Devices can publish messages using the topics of this category.
         * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
         * <p>
         * @return {@code this}
         * @param operation Property operation: Operation permissions of devices on the topic category. This parameter is required.
         */
        public Builder operation(final java.lang.String operation) {
            this.props.operation(operation);
            return this;
        }
        /**
         * Property operation: Operation permissions of devices on the topic category.
         * <p>
         * Value options:
         * SUB: Subscribe. Devices can subscribe to the topics of this category.
         * PUB: Publish. Devices can publish messages using the topics of this category.
         * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
         * <p>
         * @return {@code this}
         * @param operation Property operation: Operation permissions of devices on the topic category. This parameter is required.
         */
        public Builder operation(final com.aliyun.ros.cdk.core.IResolvable operation) {
            this.props.operation(operation);
            return this;
        }

        /**
         * Property productKey: The unique identifier of the product for which you want to create a topic category.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The unique identifier of the product for which you want to create a topic category. This parameter is required.
         */
        public Builder productKey(final java.lang.String productKey) {
            this.props.productKey(productKey);
            return this;
        }
        /**
         * Property productKey: The unique identifier of the product for which you want to create a topic category.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The unique identifier of the product for which you want to create a topic category. This parameter is required.
         */
        public Builder productKey(final com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.props.productKey(productKey);
            return this;
        }

        /**
         * Property topicShortName: The custom category hierarchy in the topic category.
         * <p>
         * By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
         * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
         * <p>
         * @return {@code this}
         * @param topicShortName Property topicShortName: The custom category hierarchy in the topic category. This parameter is required.
         */
        public Builder topicShortName(final java.lang.String topicShortName) {
            this.props.topicShortName(topicShortName);
            return this;
        }
        /**
         * Property topicShortName: The custom category hierarchy in the topic category.
         * <p>
         * By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
         * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
         * <p>
         * @return {@code this}
         * @param topicShortName Property topicShortName: The custom category hierarchy in the topic category. This parameter is required.
         */
        public Builder topicShortName(final com.aliyun.ros.cdk.core.IResolvable topicShortName) {
            this.props.topicShortName(topicShortName);
            return this;
        }

        /**
         * Property desc: The description of the topic category.
         * <p>
         * You can enter a description with up to 100 characters.
         * <p>
         * @return {@code this}
         * @param desc Property desc: The description of the topic category. This parameter is required.
         */
        public Builder desc(final java.lang.String desc) {
            this.props.desc(desc);
            return this;
        }
        /**
         * Property desc: The description of the topic category.
         * <p>
         * You can enter a description with up to 100 characters.
         * <p>
         * @return {@code this}
         * @param desc Property desc: The description of the topic category. This parameter is required.
         */
        public Builder desc(final com.aliyun.ros.cdk.core.IResolvable desc) {
            this.props.desc(desc);
            return this;
        }

        /**
         * Property iotInstanceId: Instance ID you purchased.
         * <p>
         * Public instances do not need pass this property.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Instance ID you purchased. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: Instance ID you purchased.
         * <p>
         * Public instances do not need pass this property.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Instance ID you purchased. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.ProductTopic}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.ProductTopic build() {
            return new com.aliyun.ros.cdk.iot.ProductTopic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

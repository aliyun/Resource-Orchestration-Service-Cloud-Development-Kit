package com.aliyun.ros.cdk.iot;

/**
 * A ROS template type:  <code>ALIYUN::IOT::ProductTopic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosProductTopic")
public class RosProductTopic extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProductTopic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProductTopic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.iot.RosProductTopic.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::IOT::ProductTopic</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProductTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RosProductTopicProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicId() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getOperation() {
        return software.amazon.jsii.Kernel.get(this, "operation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperation(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "operation", java.util.Objects.requireNonNull(value, "operation is required"));
    }

    /**
     */
    public void setOperation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operation", java.util.Objects.requireNonNull(value, "operation is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductKey() {
        return software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productKey", java.util.Objects.requireNonNull(value, "productKey is required"));
    }

    /**
     */
    public void setProductKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productKey", java.util.Objects.requireNonNull(value, "productKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTopicShortName() {
        return software.amazon.jsii.Kernel.get(this, "topicShortName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTopicShortName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "topicShortName", java.util.Objects.requireNonNull(value, "topicShortName is required"));
    }

    /**
     */
    public void setTopicShortName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "topicShortName", java.util.Objects.requireNonNull(value, "topicShortName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
        return software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "desc", value);
    }

    /**
     */
    public void setDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "desc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.RosProductTopic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.RosProductTopic> {
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
        private final com.aliyun.ros.cdk.iot.RosProductTopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RosProductTopicProps.Builder();
        }

        /**
         * @return {@code this}
         * @param operation This parameter is required.
         */
        public Builder operation(final java.lang.String operation) {
            this.props.operation(operation);
            return this;
        }
        /**
         * @return {@code this}
         * @param operation This parameter is required.
         */
        public Builder operation(final com.aliyun.ros.cdk.core.IResolvable operation) {
            this.props.operation(operation);
            return this;
        }

        /**
         * @return {@code this}
         * @param productKey This parameter is required.
         */
        public Builder productKey(final java.lang.String productKey) {
            this.props.productKey(productKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param productKey This parameter is required.
         */
        public Builder productKey(final com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.props.productKey(productKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param topicShortName This parameter is required.
         */
        public Builder topicShortName(final java.lang.String topicShortName) {
            this.props.topicShortName(topicShortName);
            return this;
        }
        /**
         * @return {@code this}
         * @param topicShortName This parameter is required.
         */
        public Builder topicShortName(final com.aliyun.ros.cdk.core.IResolvable topicShortName) {
            this.props.topicShortName(topicShortName);
            return this;
        }

        /**
         * @return {@code this}
         * @param desc This parameter is required.
         */
        public Builder desc(final java.lang.String desc) {
            this.props.desc(desc);
            return this;
        }
        /**
         * @return {@code this}
         * @param desc This parameter is required.
         */
        public Builder desc(final com.aliyun.ros.cdk.core.IResolvable desc) {
            this.props.desc(desc);
            return this;
        }

        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.iot.RosProductTopic}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.RosProductTopic build() {
            return new com.aliyun.ros.cdk.iot.RosProductTopic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

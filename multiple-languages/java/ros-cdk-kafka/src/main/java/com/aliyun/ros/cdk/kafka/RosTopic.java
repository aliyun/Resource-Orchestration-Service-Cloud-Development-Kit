package com.aliyun.ros.cdk.kafka;

/**
 * A ROS template type:  `ALIYUN::KAFKA::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosTopic")
public class RosTopic extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTopic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTopic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.kafka.RosTopic.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.RosTopicProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopic() {
        return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", java.util.Objects.requireNonNull(value, "remark is required"));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", java.util.Objects.requireNonNull(value, "remark is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTopic() {
        return software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTopic(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "topic", java.util.Objects.requireNonNull(value, "topic is required"));
    }

    /**
     */
    public void setTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "topic", java.util.Objects.requireNonNull(value, "topic is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompactTopic() {
        return software.amazon.jsii.Kernel.get(this, "compactTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompactTopic(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "compactTopic", value);
    }

    /**
     */
    public void setCompactTopic(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compactTopic", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalTopic() {
        return software.amazon.jsii.Kernel.get(this, "localTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalTopic(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "localTopic", value);
    }

    /**
     */
    public void setLocalTopic(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localTopic", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinInsyncReplicas() {
        return software.amazon.jsii.Kernel.get(this, "minInsyncReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinInsyncReplicas(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minInsyncReplicas", value);
    }

    /**
     */
    public void setMinInsyncReplicas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minInsyncReplicas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNum() {
        return software.amazon.jsii.Kernel.get(this, "partitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPartitionNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "partitionNum", value);
    }

    /**
     */
    public void setPartitionNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "partitionNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
        return software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicationFactor(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicationFactor", value);
    }

    /**
     */
    public void setReplicationFactor(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicationFactor", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.RosTopic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.RosTopic> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kafka.RosTopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.RosTopicProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return {@code this}
         * @param topic This parameter is required.
         */
        public Builder topic(final java.lang.String topic) {
            this.props.topic(topic);
            return this;
        }
        /**
         * @return {@code this}
         * @param topic This parameter is required.
         */
        public Builder topic(final com.aliyun.ros.cdk.core.IResolvable topic) {
            this.props.topic(topic);
            return this;
        }

        /**
         * @return {@code this}
         * @param compactTopic This parameter is required.
         */
        public Builder compactTopic(final java.lang.Boolean compactTopic) {
            this.props.compactTopic(compactTopic);
            return this;
        }
        /**
         * @return {@code this}
         * @param compactTopic This parameter is required.
         */
        public Builder compactTopic(final com.aliyun.ros.cdk.core.IResolvable compactTopic) {
            this.props.compactTopic(compactTopic);
            return this;
        }

        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return {@code this}
         * @param localTopic This parameter is required.
         */
        public Builder localTopic(final java.lang.Boolean localTopic) {
            this.props.localTopic(localTopic);
            return this;
        }
        /**
         * @return {@code this}
         * @param localTopic This parameter is required.
         */
        public Builder localTopic(final com.aliyun.ros.cdk.core.IResolvable localTopic) {
            this.props.localTopic(localTopic);
            return this;
        }

        /**
         * @return {@code this}
         * @param minInsyncReplicas This parameter is required.
         */
        public Builder minInsyncReplicas(final java.lang.Number minInsyncReplicas) {
            this.props.minInsyncReplicas(minInsyncReplicas);
            return this;
        }
        /**
         * @return {@code this}
         * @param minInsyncReplicas This parameter is required.
         */
        public Builder minInsyncReplicas(final com.aliyun.ros.cdk.core.IResolvable minInsyncReplicas) {
            this.props.minInsyncReplicas(minInsyncReplicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param partitionNum This parameter is required.
         */
        public Builder partitionNum(final java.lang.Number partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param partitionNum This parameter is required.
         */
        public Builder partitionNum(final com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicationFactor This parameter is required.
         */
        public Builder replicationFactor(final java.lang.Number replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicationFactor This parameter is required.
         */
        public Builder replicationFactor(final com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kafka.RosTopic}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.RosTopic build() {
            return new com.aliyun.ros.cdk.kafka.RosTopic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

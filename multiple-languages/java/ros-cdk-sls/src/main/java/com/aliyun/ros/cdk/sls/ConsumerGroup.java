package com.aliyun.ros.cdk.sls;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLS::ConsumerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.943Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.ConsumerGroup")
public class ConsumerGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sls.IConsumerGroup {

    protected ConsumerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConsumerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.ConsumerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.ConsumerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConsumerGroup: The name of the consumer group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Logstore: The name of the logstore to which this consumer group belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstore() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Project: The name of the project to which the logstore belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProject() {
        return software.amazon.jsii.Kernel.get(this, "attrProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.ConsumerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.ConsumerGroupProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.ConsumerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.ConsumerGroup> {
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
        private final com.aliyun.ros.cdk.sls.ConsumerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.ConsumerGroupProps.Builder();
        }

        /**
         * Property consumerGroup: The name of the consumer group.
         * <p>
         * The name must be unique in a project.
         * <p>
         * @return {@code this}
         * @param consumerGroup Property consumerGroup: The name of the consumer group. This parameter is required.
         */
        public Builder consumerGroup(final java.lang.String consumerGroup) {
            this.props.consumerGroup(consumerGroup);
            return this;
        }
        /**
         * Property consumerGroup: The name of the consumer group.
         * <p>
         * The name must be unique in a project.
         * <p>
         * @return {@code this}
         * @param consumerGroup Property consumerGroup: The name of the consumer group. This parameter is required.
         */
        public Builder consumerGroup(final com.aliyun.ros.cdk.core.IResolvable consumerGroup) {
            this.props.consumerGroup(consumerGroup);
            return this;
        }

        /**
         * Property logstore: The name of the Logstore.
         * <p>
         * @return {@code this}
         * @param logstore Property logstore: The name of the Logstore. This parameter is required.
         */
        public Builder logstore(final java.lang.String logstore) {
            this.props.logstore(logstore);
            return this;
        }
        /**
         * Property logstore: The name of the Logstore.
         * <p>
         * @return {@code this}
         * @param logstore Property logstore: The name of the Logstore. This parameter is required.
         */
        public Builder logstore(final com.aliyun.ros.cdk.core.IResolvable logstore) {
            this.props.logstore(logstore);
            return this;
        }

        /**
         * Property order: Specifies whether to consume data in sequence.
         * <p>
         * Valid values:
         * true
         * In a shard, data is consumed in ascending order based on the value of the <strong><strong>tag</strong>:<strong>receive_time</strong></strong> field.
         * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
         * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
         * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
         * <p>
         * @return {@code this}
         * @param order Property order: Specifies whether to consume data in sequence. This parameter is required.
         */
        public Builder order(final java.lang.Boolean order) {
            this.props.order(order);
            return this;
        }
        /**
         * Property order: Specifies whether to consume data in sequence.
         * <p>
         * Valid values:
         * true
         * In a shard, data is consumed in ascending order based on the value of the <strong><strong>tag</strong>:<strong>receive_time</strong></strong> field.
         * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
         * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
         * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
         * <p>
         * @return {@code this}
         * @param order Property order: Specifies whether to consume data in sequence. This parameter is required.
         */
        public Builder order(final com.aliyun.ros.cdk.core.IResolvable order) {
            this.props.order(order);
            return this;
        }

        /**
         * Property project: The name of the project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of the project. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: The name of the project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of the project. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property timeout: The timeout period.
         * <p>
         * If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period.
         * <p>
         * If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.ConsumerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.ConsumerGroup build() {
            return new com.aliyun.ros.cdk.sls.ConsumerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

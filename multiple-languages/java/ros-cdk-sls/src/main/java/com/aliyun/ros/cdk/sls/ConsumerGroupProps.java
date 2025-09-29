package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>ConsumerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.ConsumerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerGroupProps.Jsii$Proxy.class)
public interface ConsumerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumerGroup: The name of the consumer group.
     * <p>
     * The name must be unique in a project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroup();

    /**
     * Property logstore: The name of the Logstore.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

    /**
     * Property order: Specifies whether to consume data in sequence.
     * <p>
     * Valid values:
     * true
     * In a shard, data is consumed in ascending order based on the value of the <strong><strong>tag</strong>:<strong>receive_time</strong></strong> field.
     * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
     * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
     * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrder();

    /**
     * Property project: The name of the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property timeout: The timeout period.
     * <p>
     * If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     * @return a {@link Builder} of {@link ConsumerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerGroupProps> {
        java.lang.Object consumerGroup;
        java.lang.Object logstore;
        java.lang.Object order;
        java.lang.Object project;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroup}
         * @param consumerGroup Property consumerGroup: The name of the consumer group. This parameter is required.
         *                      The name must be unique in a project.
         * @return {@code this}
         */
        public Builder consumerGroup(java.lang.String consumerGroup) {
            this.consumerGroup = consumerGroup;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroup}
         * @param consumerGroup Property consumerGroup: The name of the consumer group. This parameter is required.
         *                      The name must be unique in a project.
         * @return {@code this}
         */
        public Builder consumerGroup(com.aliyun.ros.cdk.core.IResolvable consumerGroup) {
            this.consumerGroup = consumerGroup;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getLogstore}
         * @param logstore Property logstore: The name of the Logstore. This parameter is required.
         * @return {@code this}
         */
        public Builder logstore(java.lang.String logstore) {
            this.logstore = logstore;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getLogstore}
         * @param logstore Property logstore: The name of the Logstore. This parameter is required.
         * @return {@code this}
         */
        public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
            this.logstore = logstore;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getOrder}
         * @param order Property order: Specifies whether to consume data in sequence. This parameter is required.
         *              Valid values:
         *              true
         *              In a shard, data is consumed in ascending order based on the value of the <strong><strong>tag</strong>:<strong>receive_time</strong></strong> field.
         *              If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
         *              If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
         *              false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
         * @return {@code this}
         */
        public Builder order(java.lang.Boolean order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getOrder}
         * @param order Property order: Specifies whether to consume data in sequence. This parameter is required.
         *              Valid values:
         *              true
         *              In a shard, data is consumed in ascending order based on the value of the <strong><strong>tag</strong>:<strong>receive_time</strong></strong> field.
         *              If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
         *              If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
         *              false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
         * @return {@code this}
         */
        public Builder order(com.aliyun.ros.cdk.core.IResolvable order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getProject}
         * @param project Property project: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getProject}
         * @param project Property project: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getTimeout}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         *                If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getTimeout}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         *                If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerGroupProps {
        private final java.lang.Object consumerGroup;
        private final java.lang.Object logstore;
        private final java.lang.Object order;
        private final java.lang.Object project;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumerGroup = software.amazon.jsii.Kernel.get(this, "consumerGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumerGroup = java.util.Objects.requireNonNull(builder.consumerGroup, "consumerGroup is required");
            this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
            this.order = java.util.Objects.requireNonNull(builder.order, "order is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.timeout = java.util.Objects.requireNonNull(builder.timeout, "timeout is required");
        }

        @Override
        public final java.lang.Object getConsumerGroup() {
            return this.consumerGroup;
        }

        @Override
        public final java.lang.Object getLogstore() {
            return this.logstore;
        }

        @Override
        public final java.lang.Object getOrder() {
            return this.order;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumerGroup", om.valueToTree(this.getConsumerGroup()));
            data.set("logstore", om.valueToTree(this.getLogstore()));
            data.set("order", om.valueToTree(this.getOrder()));
            data.set("project", om.valueToTree(this.getProject()));
            data.set("timeout", om.valueToTree(this.getTimeout()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.ConsumerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerGroupProps.Jsii$Proxy that = (ConsumerGroupProps.Jsii$Proxy) o;

            if (!consumerGroup.equals(that.consumerGroup)) return false;
            if (!logstore.equals(that.logstore)) return false;
            if (!order.equals(that.order)) return false;
            if (!project.equals(that.project)) return false;
            return this.timeout.equals(that.timeout);
        }

        @Override
        public final int hashCode() {
            int result = this.consumerGroup.hashCode();
            result = 31 * result + (this.logstore.hashCode());
            result = 31 * result + (this.order.hashCode());
            result = 31 * result + (this.project.hashCode());
            result = 31 * result + (this.timeout.hashCode());
            return result;
        }
    }
}

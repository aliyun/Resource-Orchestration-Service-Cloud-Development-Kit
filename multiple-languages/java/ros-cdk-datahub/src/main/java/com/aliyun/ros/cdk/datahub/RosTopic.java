package com.aliyun.ros.cdk.datahub;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DATAHUB::Topic</code>, which is used to create a topic.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.614Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.RosTopic")
public class RosTopic extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTopic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTopic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.datahub.RosTopic.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTopic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datahub.RosTopicProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicName() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getComment() {
        return software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comment", java.util.Objects.requireNonNull(value, "comment is required"));
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comment", java.util.Objects.requireNonNull(value, "comment is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRecordType() {
        return software.amazon.jsii.Kernel.get(this, "recordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecordType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recordType", java.util.Objects.requireNonNull(value, "recordType is required"));
    }

    /**
     */
    public void setRecordType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recordType", java.util.Objects.requireNonNull(value, "recordType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTopicName() {
        return software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTopicName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "topicName", java.util.Objects.requireNonNull(value, "topicName is required"));
    }

    /**
     */
    public void setTopicName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "topicName", java.util.Objects.requireNonNull(value, "topicName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLifecycle() {
        return software.amazon.jsii.Kernel.get(this, "lifecycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLifecycle(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "lifecycle", value);
    }

    /**
     */
    public void setLifecycle(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lifecycle", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRecordSchema() {
        return software.amazon.jsii.Kernel.get(this, "recordSchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecordSchema(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recordSchema", value);
    }

    /**
     */
    public void setRecordSchema(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recordSchema", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.datahub.RosTopic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.datahub.RosTopic> {
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
        private final com.aliyun.ros.cdk.datahub.RosTopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.datahub.RosTopicProps.Builder();
        }

        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param recordType This parameter is required.
         */
        public Builder recordType(final java.lang.String recordType) {
            this.props.recordType(recordType);
            return this;
        }
        /**
         * @return {@code this}
         * @param recordType This parameter is required.
         */
        public Builder recordType(final com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.props.recordType(recordType);
            return this;
        }

        /**
         * @return {@code this}
         * @param topicName This parameter is required.
         */
        public Builder topicName(final java.lang.String topicName) {
            this.props.topicName(topicName);
            return this;
        }
        /**
         * @return {@code this}
         * @param topicName This parameter is required.
         */
        public Builder topicName(final com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.props.topicName(topicName);
            return this;
        }

        /**
         * @return {@code this}
         * @param lifecycle This parameter is required.
         */
        public Builder lifecycle(final java.lang.Number lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }
        /**
         * @return {@code this}
         * @param lifecycle This parameter is required.
         */
        public Builder lifecycle(final com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }

        /**
         * @return {@code this}
         * @param recordSchema This parameter is required.
         */
        public Builder recordSchema(final java.lang.String recordSchema) {
            this.props.recordSchema(recordSchema);
            return this;
        }
        /**
         * @return {@code this}
         * @param recordSchema This parameter is required.
         */
        public Builder recordSchema(final com.aliyun.ros.cdk.core.IResolvable recordSchema) {
            this.props.recordSchema(recordSchema);
            return this;
        }

        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.datahub.RosTopic}.
         */
        @Override
        public com.aliyun.ros.cdk.datahub.RosTopic build() {
            return new com.aliyun.ros.cdk.datahub.RosTopic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

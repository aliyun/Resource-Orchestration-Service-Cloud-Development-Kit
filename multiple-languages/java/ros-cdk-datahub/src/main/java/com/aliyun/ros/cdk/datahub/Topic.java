package com.aliyun.ros.cdk.datahub;

/**
 * A ROS resource type:  <code>ALIYUN::DATAHUB::Topic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.378Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.Topic")
public class Topic extends com.aliyun.ros.cdk.core.Resource {

    protected Topic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Topic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::DATAHUB::Topic</code>.
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
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datahub.TopicProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::DATAHUB::Topic</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datahub.TopicProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectName: Project name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TopicName: Topic name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopicName() {
        return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.datahub.Topic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.datahub.Topic> {
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
        private final com.aliyun.ros.cdk.datahub.TopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.datahub.TopicProps.Builder();
        }

        /**
         * Property comment: The comment of topic.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of topic. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The comment of topic.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of topic. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property projectName: The name of the project.
         * <p>
         * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The name of the project.
         * <p>
         * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property recordType: Record type.
         * <p>
         * TUPLE: structured data, BLOB: unstructured data.
         * <p>
         * @return {@code this}
         * @param recordType Property recordType: Record type. This parameter is required.
         */
        public Builder recordType(final java.lang.String recordType) {
            this.props.recordType(recordType);
            return this;
        }
        /**
         * Property recordType: Record type.
         * <p>
         * TUPLE: structured data, BLOB: unstructured data.
         * <p>
         * @return {@code this}
         * @param recordType Property recordType: Record type. This parameter is required.
         */
        public Builder recordType(final com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.props.recordType(recordType);
            return this;
        }

        /**
         * Property topicName: The name of the topic.
         * <p>
         * Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         */
        public Builder topicName(final java.lang.String topicName) {
            this.props.topicName(topicName);
            return this;
        }
        /**
         * Property topicName: The name of the topic.
         * <p>
         * Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         */
        public Builder topicName(final com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.props.topicName(topicName);
            return this;
        }

        /**
         * Property lifecycle: Data storage life cycle.
         * <p>
         * @return {@code this}
         * @param lifecycle Property lifecycle: Data storage life cycle. This parameter is required.
         */
        public Builder lifecycle(final java.lang.Number lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }
        /**
         * Property lifecycle: Data storage life cycle.
         * <p>
         * @return {@code this}
         * @param lifecycle Property lifecycle: Data storage life cycle. This parameter is required.
         */
        public Builder lifecycle(final com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }

        /**
         * Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
         * <p>
         * @return {@code this}
         * @param recordSchema Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter. This parameter is required.
         */
        public Builder recordSchema(final java.lang.String recordSchema) {
            this.props.recordSchema(recordSchema);
            return this;
        }
        /**
         * Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
         * <p>
         * @return {@code this}
         * @param recordSchema Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter. This parameter is required.
         */
        public Builder recordSchema(final com.aliyun.ros.cdk.core.IResolvable recordSchema) {
            this.props.recordSchema(recordSchema);
            return this;
        }

        /**
         * Property shardCount: Initial shard number.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: Initial shard number. This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }
        /**
         * Property shardCount: Initial shard number.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: Initial shard number. This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.datahub.Topic}.
         */
        @Override
        public com.aliyun.ros.cdk.datahub.Topic build() {
            return new com.aliyun.ros.cdk.datahub.Topic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

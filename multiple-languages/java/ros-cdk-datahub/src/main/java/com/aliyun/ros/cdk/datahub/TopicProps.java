package com.aliyun.ros.cdk.datahub;

/**
 * Properties for defining a `ALIYUN::DATAHUB::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.047Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property comment: The comment of topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComment();

    /**
     * Property projectName: The name of the project.
     * <p>
     * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property recordType: Record type.
     * <p>
     * TUPLE: structured data, BLOB: unstructured data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRecordType();

    /**
     * Property topicName: The name of the topic.
     * <p>
     * Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     * Property lifecycle: Data storage life cycle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycle() {
        return null;
    }

    /**
     * Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecordSchema() {
        return null;
    }

    /**
     * Property shardCount: Initial shard number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TopicProps> {
        private java.lang.Object comment;
        private java.lang.Object projectName;
        private java.lang.Object recordType;
        private java.lang.Object topicName;
        private java.lang.Object lifecycle;
        private java.lang.Object recordSchema;
        private java.lang.Object shardCount;

        /**
         * Sets the value of {@link TopicProps#getComment}
         * @param comment Property comment: The comment of topic. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getComment}
         * @param comment Property comment: The comment of topic. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getProjectName}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         *                    Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getProjectName}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         *                    Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordType}
         * @param recordType Property recordType: Record type. This parameter is required.
         *                   TUPLE: structured data, BLOB: unstructured data.
         * @return {@code this}
         */
        public Builder recordType(java.lang.String recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordType}
         * @param recordType Property recordType: Record type. This parameter is required.
         *                   TUPLE: structured data, BLOB: unstructured data.
         * @return {@code this}
         */
        public Builder recordType(com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopicName}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         *                  Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopicName}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         *                  Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getLifecycle}
         * @param lifecycle Property lifecycle: Data storage life cycle.
         * @return {@code this}
         */
        public Builder lifecycle(java.lang.Number lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getLifecycle}
         * @param lifecycle Property lifecycle: Data storage life cycle.
         * @return {@code this}
         */
        public Builder lifecycle(com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordSchema}
         * @param recordSchema Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
         * @return {@code this}
         */
        public Builder recordSchema(java.lang.String recordSchema) {
            this.recordSchema = recordSchema;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordSchema}
         * @param recordSchema Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
         * @return {@code this}
         */
        public Builder recordSchema(com.aliyun.ros.cdk.core.IResolvable recordSchema) {
            this.recordSchema = recordSchema;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getShardCount}
         * @param shardCount Property shardCount: Initial shard number.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getShardCount}
         * @param shardCount Property shardCount: Initial shard number.
         * @return {@code this}
         */
        public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicProps build() {
            return new Jsii$Proxy(comment, projectName, recordType, topicName, lifecycle, recordSchema, shardCount);
        }
    }

    /**
     * An implementation for {@link TopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TopicProps {
        private final java.lang.Object comment;
        private final java.lang.Object projectName;
        private final java.lang.Object recordType;
        private final java.lang.Object topicName;
        private final java.lang.Object lifecycle;
        private final java.lang.Object recordSchema;
        private final java.lang.Object shardCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recordType = software.amazon.jsii.Kernel.get(this, "recordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lifecycle = software.amazon.jsii.Kernel.get(this, "lifecycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recordSchema = software.amazon.jsii.Kernel.get(this, "recordSchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object comment, final java.lang.Object projectName, final java.lang.Object recordType, final java.lang.Object topicName, final java.lang.Object lifecycle, final java.lang.Object recordSchema, final java.lang.Object shardCount) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.comment = java.util.Objects.requireNonNull(comment, "comment is required");
            this.projectName = java.util.Objects.requireNonNull(projectName, "projectName is required");
            this.recordType = java.util.Objects.requireNonNull(recordType, "recordType is required");
            this.topicName = java.util.Objects.requireNonNull(topicName, "topicName is required");
            this.lifecycle = lifecycle;
            this.recordSchema = recordSchema;
            this.shardCount = shardCount;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getRecordType() {
            return this.recordType;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getLifecycle() {
            return this.lifecycle;
        }

        @Override
        public final java.lang.Object getRecordSchema() {
            return this.recordSchema;
        }

        @Override
        public final java.lang.Object getShardCount() {
            return this.shardCount;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("comment", om.valueToTree(this.getComment()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("recordType", om.valueToTree(this.getRecordType()));
            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getLifecycle() != null) {
                data.set("lifecycle", om.valueToTree(this.getLifecycle()));
            }
            if (this.getRecordSchema() != null) {
                data.set("recordSchema", om.valueToTree(this.getRecordSchema()));
            }
            if (this.getShardCount() != null) {
                data.set("shardCount", om.valueToTree(this.getShardCount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datahub.TopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TopicProps.Jsii$Proxy that = (TopicProps.Jsii$Proxy) o;

            if (!comment.equals(that.comment)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (!recordType.equals(that.recordType)) return false;
            if (!topicName.equals(that.topicName)) return false;
            if (this.lifecycle != null ? !this.lifecycle.equals(that.lifecycle) : that.lifecycle != null) return false;
            if (this.recordSchema != null ? !this.recordSchema.equals(that.recordSchema) : that.recordSchema != null) return false;
            return this.shardCount != null ? this.shardCount.equals(that.shardCount) : that.shardCount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.comment.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.recordType.hashCode());
            result = 31 * result + (this.topicName.hashCode());
            result = 31 * result + (this.lifecycle != null ? this.lifecycle.hashCode() : 0);
            result = 31 * result + (this.recordSchema != null ? this.recordSchema.hashCode() : 0);
            result = 31 * result + (this.shardCount != null ? this.shardCount.hashCode() : 0);
            return result;
        }
    }
}

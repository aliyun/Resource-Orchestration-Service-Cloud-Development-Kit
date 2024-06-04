package com.aliyun.ros.cdk.datahub;

/**
 * Properties for defining a <code>RosTopic</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.RosTopicProps")
@software.amazon.jsii.Jsii.Proxy(RosTopicProps.Jsii$Proxy.class)
public interface RosTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComment();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRecordType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecordSchema() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTopicProps> {
        java.lang.Object comment;
        java.lang.Object projectName;
        java.lang.Object recordType;
        java.lang.Object topicName;
        java.lang.Object lifecycle;
        java.lang.Object recordSchema;
        java.lang.Object shardCount;

        /**
         * Sets the value of {@link RosTopicProps#getComment}
         * @param comment the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getComment}
         * @param comment the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRecordType}
         * @param recordType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordType(java.lang.String recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRecordType}
         * @param recordType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordType(com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getLifecycle}
         * @param lifecycle the value to be set.
         * @return {@code this}
         */
        public Builder lifecycle(java.lang.Number lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getLifecycle}
         * @param lifecycle the value to be set.
         * @return {@code this}
         */
        public Builder lifecycle(com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRecordSchema}
         * @param recordSchema the value to be set.
         * @return {@code this}
         */
        public Builder recordSchema(java.lang.String recordSchema) {
            this.recordSchema = recordSchema;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRecordSchema}
         * @param recordSchema the value to be set.
         * @return {@code this}
         */
        public Builder recordSchema(com.aliyun.ros.cdk.core.IResolvable recordSchema) {
            this.recordSchema = recordSchema;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTopicProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTopicProps {
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
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.comment = java.util.Objects.requireNonNull(builder.comment, "comment is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.recordType = java.util.Objects.requireNonNull(builder.recordType, "recordType is required");
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.lifecycle = builder.lifecycle;
            this.recordSchema = builder.recordSchema;
            this.shardCount = builder.shardCount;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datahub.RosTopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTopicProps.Jsii$Proxy that = (RosTopicProps.Jsii$Proxy) o;

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

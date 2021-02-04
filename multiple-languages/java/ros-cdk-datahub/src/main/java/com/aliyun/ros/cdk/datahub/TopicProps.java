package com.aliyun.ros.cdk.datahub;

/**
 * Properties for defining a `ALIYUN::DATAHUB::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getComment();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProjectName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRecordType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getLifecycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRecordSchema() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getShardCount() {
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
        private java.lang.String comment;
        private java.lang.String projectName;
        private java.lang.String recordType;
        private java.lang.String topicName;
        private java.lang.Number lifecycle;
        private java.lang.String recordSchema;
        private java.lang.Number shardCount;

        /**
         * Sets the value of {@link TopicProps#getComment}
         * @param comment the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordType}
         * @param recordType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordType(java.lang.String recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getLifecycle}
         * @param lifecycle the value to be set.
         * @return {@code this}
         */
        public Builder lifecycle(java.lang.Number lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRecordSchema}
         * @param recordSchema the value to be set.
         * @return {@code this}
         */
        public Builder recordSchema(java.lang.String recordSchema) {
            this.recordSchema = recordSchema;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
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
        private final java.lang.String comment;
        private final java.lang.String projectName;
        private final java.lang.String recordType;
        private final java.lang.String topicName;
        private final java.lang.Number lifecycle;
        private final java.lang.String recordSchema;
        private final java.lang.Number shardCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.recordType = software.amazon.jsii.Kernel.get(this, "recordType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.lifecycle = software.amazon.jsii.Kernel.get(this, "lifecycle", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.recordSchema = software.amazon.jsii.Kernel.get(this, "recordSchema", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String comment, final java.lang.String projectName, final java.lang.String recordType, final java.lang.String topicName, final java.lang.Number lifecycle, final java.lang.String recordSchema, final java.lang.Number shardCount) {
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
        public final java.lang.String getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.String getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.String getRecordType() {
            return this.recordType;
        }

        @Override
        public final java.lang.String getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Number getLifecycle() {
            return this.lifecycle;
        }

        @Override
        public final java.lang.String getRecordSchema() {
            return this.recordSchema;
        }

        @Override
        public final java.lang.Number getShardCount() {
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

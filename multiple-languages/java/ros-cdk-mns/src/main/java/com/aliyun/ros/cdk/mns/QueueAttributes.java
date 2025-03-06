package com.aliyun.ros.cdk.mns;

/**
 * Represents a <code>Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.QueueAttributes")
@software.amazon.jsii.Jsii.Proxy(QueueAttributes.Jsii$Proxy.class)
public interface QueueAttributes extends software.amazon.jsii.JsiiSerializable {

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash();

    /**
     * Attribute QueueName: Queue name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttrQueueName() {
        return null;
    }

    /**
     * Attribute QueueUrl: URL of created queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttrQueueUrl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QueueAttributes}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QueueAttributes}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QueueAttributes> {
        java.lang.Object attrArnWithSlash;
        java.lang.Object attrQueueName;
        java.lang.Object attrQueueUrl;

        /**
         * Sets the value of {@link QueueAttributes#getAttrArnWithSlash}
         * @param attrArnWithSlash Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName. This parameter is required.
         * @return {@code this}
         */
        public Builder attrArnWithSlash(java.lang.String attrArnWithSlash) {
            this.attrArnWithSlash = attrArnWithSlash;
            return this;
        }

        /**
         * Sets the value of {@link QueueAttributes#getAttrArnWithSlash}
         * @param attrArnWithSlash Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName. This parameter is required.
         * @return {@code this}
         */
        public Builder attrArnWithSlash(com.aliyun.ros.cdk.core.IResolvable attrArnWithSlash) {
            this.attrArnWithSlash = attrArnWithSlash;
            return this;
        }

        /**
         * Sets the value of {@link QueueAttributes#getAttrQueueName}
         * @param attrQueueName Attribute QueueName: Queue name.
         * @return {@code this}
         */
        public Builder attrQueueName(java.lang.String attrQueueName) {
            this.attrQueueName = attrQueueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueAttributes#getAttrQueueName}
         * @param attrQueueName Attribute QueueName: Queue name.
         * @return {@code this}
         */
        public Builder attrQueueName(com.aliyun.ros.cdk.core.IResolvable attrQueueName) {
            this.attrQueueName = attrQueueName;
            return this;
        }

        /**
         * Sets the value of {@link QueueAttributes#getAttrQueueUrl}
         * @param attrQueueUrl Attribute QueueUrl: URL of created queue.
         * @return {@code this}
         */
        public Builder attrQueueUrl(java.lang.String attrQueueUrl) {
            this.attrQueueUrl = attrQueueUrl;
            return this;
        }

        /**
         * Sets the value of {@link QueueAttributes#getAttrQueueUrl}
         * @param attrQueueUrl Attribute QueueUrl: URL of created queue.
         * @return {@code this}
         */
        public Builder attrQueueUrl(com.aliyun.ros.cdk.core.IResolvable attrQueueUrl) {
            this.attrQueueUrl = attrQueueUrl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QueueAttributes}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QueueAttributes build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QueueAttributes}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueueAttributes {
        private final java.lang.Object attrArnWithSlash;
        private final java.lang.Object attrQueueName;
        private final java.lang.Object attrQueueUrl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.attrArnWithSlash = software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attrQueueName = software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attrQueueUrl = software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.attrArnWithSlash = java.util.Objects.requireNonNull(builder.attrArnWithSlash, "attrArnWithSlash is required");
            this.attrQueueName = builder.attrQueueName;
            this.attrQueueUrl = builder.attrQueueUrl;
        }

        @Override
        public final java.lang.Object getAttrArnWithSlash() {
            return this.attrArnWithSlash;
        }

        @Override
        public final java.lang.Object getAttrQueueName() {
            return this.attrQueueName;
        }

        @Override
        public final java.lang.Object getAttrQueueUrl() {
            return this.attrQueueUrl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("attrArnWithSlash", om.valueToTree(this.getAttrArnWithSlash()));
            if (this.getAttrQueueName() != null) {
                data.set("attrQueueName", om.valueToTree(this.getAttrQueueName()));
            }
            if (this.getAttrQueueUrl() != null) {
                data.set("attrQueueUrl", om.valueToTree(this.getAttrQueueUrl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.QueueAttributes"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QueueAttributes.Jsii$Proxy that = (QueueAttributes.Jsii$Proxy) o;

            if (!attrArnWithSlash.equals(that.attrArnWithSlash)) return false;
            if (this.attrQueueName != null ? !this.attrQueueName.equals(that.attrQueueName) : that.attrQueueName != null) return false;
            return this.attrQueueUrl != null ? this.attrQueueUrl.equals(that.attrQueueUrl) : that.attrQueueUrl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.attrArnWithSlash.hashCode();
            result = 31 * result + (this.attrQueueName != null ? this.attrQueueName.hashCode() : 0);
            result = 31 * result + (this.attrQueueUrl != null ? this.attrQueueUrl.hashCode() : 0);
            return result;
        }
    }
}

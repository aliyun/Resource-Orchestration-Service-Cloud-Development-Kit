package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a `ALIYUN::MNS::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:11.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosTopicProps")
@software.amazon.jsii.Jsii.Proxy(RosTopicProps.Jsii$Proxy.class)
public interface RosTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaximumMessageSize() {
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
        java.lang.Object topicName;
        java.lang.Object loggingEnabled;
        java.lang.Object maximumMessageSize;

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
         * Sets the value of {@link RosTopicProps#getLoggingEnabled}
         * @param loggingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder loggingEnabled(java.lang.Boolean loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getLoggingEnabled}
         * @param loggingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder loggingEnabled(com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.loggingEnabled = loggingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMaximumMessageSize}
         * @param maximumMessageSize the value to be set.
         * @return {@code this}
         */
        public Builder maximumMessageSize(java.lang.Number maximumMessageSize) {
            this.maximumMessageSize = maximumMessageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMaximumMessageSize}
         * @param maximumMessageSize the value to be set.
         * @return {@code this}
         */
        public Builder maximumMessageSize(com.aliyun.ros.cdk.core.IResolvable maximumMessageSize) {
            this.maximumMessageSize = maximumMessageSize;
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
        private final java.lang.Object topicName;
        private final java.lang.Object loggingEnabled;
        private final java.lang.Object maximumMessageSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingEnabled = software.amazon.jsii.Kernel.get(this, "loggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maximumMessageSize = software.amazon.jsii.Kernel.get(this, "maximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.loggingEnabled = builder.loggingEnabled;
            this.maximumMessageSize = builder.maximumMessageSize;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getLoggingEnabled() {
            return this.loggingEnabled;
        }

        @Override
        public final java.lang.Object getMaximumMessageSize() {
            return this.maximumMessageSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getLoggingEnabled() != null) {
                data.set("loggingEnabled", om.valueToTree(this.getLoggingEnabled()));
            }
            if (this.getMaximumMessageSize() != null) {
                data.set("maximumMessageSize", om.valueToTree(this.getMaximumMessageSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.RosTopicProps"));
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

            if (!topicName.equals(that.topicName)) return false;
            if (this.loggingEnabled != null ? !this.loggingEnabled.equals(that.loggingEnabled) : that.loggingEnabled != null) return false;
            return this.maximumMessageSize != null ? this.maximumMessageSize.equals(that.maximumMessageSize) : that.maximumMessageSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.topicName.hashCode();
            result = 31 * result + (this.loggingEnabled != null ? this.loggingEnabled.hashCode() : 0);
            result = 31 * result + (this.maximumMessageSize != null ? this.maximumMessageSize.hashCode() : 0);
            return result;
        }
    }
}

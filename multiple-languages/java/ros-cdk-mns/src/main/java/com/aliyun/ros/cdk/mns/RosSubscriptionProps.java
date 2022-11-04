package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a `ALIYUN::MNS::Subscription`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:43.066Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosSubscriptionProps")
@software.amazon.jsii.Jsii.Proxy(RosSubscriptionProps.Jsii$Proxy.class)
public interface RosSubscriptionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilterTag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyContentFormat() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSubscriptionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSubscriptionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSubscriptionProps> {
        java.lang.Object endpoint;
        java.lang.Object subscriptionName;
        java.lang.Object topicName;
        java.lang.Object filterTag;
        java.lang.Object notifyContentFormat;
        java.lang.Object notifyStrategy;

        /**
         * Sets the value of {@link RosSubscriptionProps#getEndpoint}
         * @param endpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoint(java.lang.String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getEndpoint}
         * @param endpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getSubscriptionName}
         * @param subscriptionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionName(java.lang.String subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getSubscriptionName}
         * @param subscriptionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionName(com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getFilterTag}
         * @param filterTag the value to be set.
         * @return {@code this}
         */
        public Builder filterTag(java.lang.String filterTag) {
            this.filterTag = filterTag;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getFilterTag}
         * @param filterTag the value to be set.
         * @return {@code this}
         */
        public Builder filterTag(com.aliyun.ros.cdk.core.IResolvable filterTag) {
            this.filterTag = filterTag;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getNotifyContentFormat}
         * @param notifyContentFormat the value to be set.
         * @return {@code this}
         */
        public Builder notifyContentFormat(java.lang.String notifyContentFormat) {
            this.notifyContentFormat = notifyContentFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getNotifyContentFormat}
         * @param notifyContentFormat the value to be set.
         * @return {@code this}
         */
        public Builder notifyContentFormat(com.aliyun.ros.cdk.core.IResolvable notifyContentFormat) {
            this.notifyContentFormat = notifyContentFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getNotifyStrategy}
         * @param notifyStrategy the value to be set.
         * @return {@code this}
         */
        public Builder notifyStrategy(java.lang.String notifyStrategy) {
            this.notifyStrategy = notifyStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionProps#getNotifyStrategy}
         * @param notifyStrategy the value to be set.
         * @return {@code this}
         */
        public Builder notifyStrategy(com.aliyun.ros.cdk.core.IResolvable notifyStrategy) {
            this.notifyStrategy = notifyStrategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSubscriptionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSubscriptionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSubscriptionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSubscriptionProps {
        private final java.lang.Object endpoint;
        private final java.lang.Object subscriptionName;
        private final java.lang.Object topicName;
        private final java.lang.Object filterTag;
        private final java.lang.Object notifyContentFormat;
        private final java.lang.Object notifyStrategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionName = software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterTag = software.amazon.jsii.Kernel.get(this, "filterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyContentFormat = software.amazon.jsii.Kernel.get(this, "notifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyStrategy = software.amazon.jsii.Kernel.get(this, "notifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
            this.subscriptionName = java.util.Objects.requireNonNull(builder.subscriptionName, "subscriptionName is required");
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.filterTag = builder.filterTag;
            this.notifyContentFormat = builder.notifyContentFormat;
            this.notifyStrategy = builder.notifyStrategy;
        }

        @Override
        public final java.lang.Object getEndpoint() {
            return this.endpoint;
        }

        @Override
        public final java.lang.Object getSubscriptionName() {
            return this.subscriptionName;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getFilterTag() {
            return this.filterTag;
        }

        @Override
        public final java.lang.Object getNotifyContentFormat() {
            return this.notifyContentFormat;
        }

        @Override
        public final java.lang.Object getNotifyStrategy() {
            return this.notifyStrategy;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpoint", om.valueToTree(this.getEndpoint()));
            data.set("subscriptionName", om.valueToTree(this.getSubscriptionName()));
            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getFilterTag() != null) {
                data.set("filterTag", om.valueToTree(this.getFilterTag()));
            }
            if (this.getNotifyContentFormat() != null) {
                data.set("notifyContentFormat", om.valueToTree(this.getNotifyContentFormat()));
            }
            if (this.getNotifyStrategy() != null) {
                data.set("notifyStrategy", om.valueToTree(this.getNotifyStrategy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.RosSubscriptionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSubscriptionProps.Jsii$Proxy that = (RosSubscriptionProps.Jsii$Proxy) o;

            if (!endpoint.equals(that.endpoint)) return false;
            if (!subscriptionName.equals(that.subscriptionName)) return false;
            if (!topicName.equals(that.topicName)) return false;
            if (this.filterTag != null ? !this.filterTag.equals(that.filterTag) : that.filterTag != null) return false;
            if (this.notifyContentFormat != null ? !this.notifyContentFormat.equals(that.notifyContentFormat) : that.notifyContentFormat != null) return false;
            return this.notifyStrategy != null ? this.notifyStrategy.equals(that.notifyStrategy) : that.notifyStrategy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpoint.hashCode();
            result = 31 * result + (this.subscriptionName.hashCode());
            result = 31 * result + (this.topicName.hashCode());
            result = 31 * result + (this.filterTag != null ? this.filterTag.hashCode() : 0);
            result = 31 * result + (this.notifyContentFormat != null ? this.notifyContentFormat.hashCode() : 0);
            result = 31 * result + (this.notifyStrategy != null ? this.notifyStrategy.hashCode() : 0);
            return result;
        }
    }
}

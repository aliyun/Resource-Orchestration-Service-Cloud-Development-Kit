package com.aliyun.ros.cdk.mns;

/**
 * Properties for defining a `ALIYUN::MNS::Subscription`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.SubscriptionProps")
@software.amazon.jsii.Jsii.Proxy(SubscriptionProps.Jsii$Proxy.class)
public interface SubscriptionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSubscriptionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFilterTag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNotifyContentFormat() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNotifyStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubscriptionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubscriptionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubscriptionProps> {
        private java.lang.String endpoint;
        private java.lang.String subscriptionName;
        private java.lang.String topicName;
        private java.lang.String filterTag;
        private java.lang.String notifyContentFormat;
        private java.lang.String notifyStrategy;

        /**
         * Sets the value of {@link SubscriptionProps#getEndpoint}
         * @param endpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoint(java.lang.String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getSubscriptionName}
         * @param subscriptionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionName(java.lang.String subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getFilterTag}
         * @param filterTag the value to be set.
         * @return {@code this}
         */
        public Builder filterTag(java.lang.String filterTag) {
            this.filterTag = filterTag;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyContentFormat}
         * @param notifyContentFormat the value to be set.
         * @return {@code this}
         */
        public Builder notifyContentFormat(java.lang.String notifyContentFormat) {
            this.notifyContentFormat = notifyContentFormat;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionProps#getNotifyStrategy}
         * @param notifyStrategy the value to be set.
         * @return {@code this}
         */
        public Builder notifyStrategy(java.lang.String notifyStrategy) {
            this.notifyStrategy = notifyStrategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubscriptionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubscriptionProps build() {
            return new Jsii$Proxy(endpoint, subscriptionName, topicName, filterTag, notifyContentFormat, notifyStrategy);
        }
    }

    /**
     * An implementation for {@link SubscriptionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionProps {
        private final java.lang.String endpoint;
        private final java.lang.String subscriptionName;
        private final java.lang.String topicName;
        private final java.lang.String filterTag;
        private final java.lang.String notifyContentFormat;
        private final java.lang.String notifyStrategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.subscriptionName = software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.filterTag = software.amazon.jsii.Kernel.get(this, "filterTag", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.notifyContentFormat = software.amazon.jsii.Kernel.get(this, "notifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.notifyStrategy = software.amazon.jsii.Kernel.get(this, "notifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String endpoint, final java.lang.String subscriptionName, final java.lang.String topicName, final java.lang.String filterTag, final java.lang.String notifyContentFormat, final java.lang.String notifyStrategy) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpoint = java.util.Objects.requireNonNull(endpoint, "endpoint is required");
            this.subscriptionName = java.util.Objects.requireNonNull(subscriptionName, "subscriptionName is required");
            this.topicName = java.util.Objects.requireNonNull(topicName, "topicName is required");
            this.filterTag = filterTag;
            this.notifyContentFormat = notifyContentFormat;
            this.notifyStrategy = notifyStrategy;
        }

        @Override
        public final java.lang.String getEndpoint() {
            return this.endpoint;
        }

        @Override
        public final java.lang.String getSubscriptionName() {
            return this.subscriptionName;
        }

        @Override
        public final java.lang.String getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.String getFilterTag() {
            return this.filterTag;
        }

        @Override
        public final java.lang.String getNotifyContentFormat() {
            return this.notifyContentFormat;
        }

        @Override
        public final java.lang.String getNotifyStrategy() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.SubscriptionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubscriptionProps.Jsii$Proxy that = (SubscriptionProps.Jsii$Proxy) o;

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

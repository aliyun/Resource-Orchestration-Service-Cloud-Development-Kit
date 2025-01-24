package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>RosSubscriptions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.307Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.RosSubscriptionsProps")
@software.amazon.jsii.Jsii.Proxy(RosSubscriptionsProps.Jsii$Proxy.class)
public interface RosSubscriptionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSubscriptionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSubscriptionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSubscriptionsProps> {
        java.lang.Object topicName;
        java.lang.Object refreshOptions;
        java.lang.Object subscriptionName;

        /**
         * Sets the value of {@link RosSubscriptionsProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionsProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionsProps#getSubscriptionName}
         * @param subscriptionName the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionName(java.lang.String subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionsProps#getSubscriptionName}
         * @param subscriptionName the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionName(com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.subscriptionName = subscriptionName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSubscriptionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSubscriptionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSubscriptionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSubscriptionsProps {
        private final java.lang.Object topicName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object subscriptionName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionName = software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.refreshOptions = builder.refreshOptions;
            this.subscriptionName = builder.subscriptionName;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getSubscriptionName() {
            return this.subscriptionName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getSubscriptionName() != null) {
                data.set("subscriptionName", om.valueToTree(this.getSubscriptionName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.RosSubscriptionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSubscriptionsProps.Jsii$Proxy that = (RosSubscriptionsProps.Jsii$Proxy) o;

            if (!topicName.equals(that.topicName)) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.subscriptionName != null ? this.subscriptionName.equals(that.subscriptionName) : that.subscriptionName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.topicName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.subscriptionName != null ? this.subscriptionName.hashCode() : 0);
            return result;
        }
    }
}

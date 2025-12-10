package com.aliyun.ros.cdk.mns;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MNS::Subscription</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.072Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosSubscription")
public class RosSubscription extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSubscription(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSubscription(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mns.RosSubscription.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSubscription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.RosSubscriptionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionName() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpoint(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpoint", java.util.Objects.requireNonNull(value, "endpoint is required"));
    }

    /**
     */
    public void setEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpoint", java.util.Objects.requireNonNull(value, "endpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionName() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionName", java.util.Objects.requireNonNull(value, "subscriptionName is required"));
    }

    /**
     */
    public void setSubscriptionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionName", java.util.Objects.requireNonNull(value, "subscriptionName is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDlqPolicy() {
        return software.amazon.jsii.Kernel.get(this, "dlqPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDlqPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dlqPolicy", value);
    }

    /**
     */
    public void setDlqPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mns.RosSubscription.DlqPolicyProperty value) {
        software.amazon.jsii.Kernel.set(this, "dlqPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilterTag() {
        return software.amazon.jsii.Kernel.get(this, "filterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterTag(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "filterTag", value);
    }

    /**
     */
    public void setFilterTag(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterTag", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotifyContentFormat() {
        return software.amazon.jsii.Kernel.get(this, "notifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotifyContentFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notifyContentFormat", value);
    }

    /**
     */
    public void setNotifyContentFormat(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notifyContentFormat", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotifyStrategy() {
        return software.amazon.jsii.Kernel.get(this, "notifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotifyStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notifyStrategy", value);
    }

    /**
     */
    public void setNotifyStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notifyStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPushType() {
        return software.amazon.jsii.Kernel.get(this, "pushType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPushType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pushType", value);
    }

    /**
     */
    public void setPushType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pushType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty")
    @software.amazon.jsii.Jsii.Proxy(DlqPolicyProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DlqPolicyProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDeadLetterTargetQueue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         * @return a {@link Builder} of {@link DlqPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DlqPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DlqPolicyProperty> {
            java.lang.Object deadLetterTargetQueue;
            java.lang.Object enabled;

            /**
             * Sets the value of {@link DlqPolicyProperty#getDeadLetterTargetQueue}
             * @param deadLetterTargetQueue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deadLetterTargetQueue(java.lang.String deadLetterTargetQueue) {
                this.deadLetterTargetQueue = deadLetterTargetQueue;
                return this;
            }

            /**
             * Sets the value of {@link DlqPolicyProperty#getDeadLetterTargetQueue}
             * @param deadLetterTargetQueue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deadLetterTargetQueue(com.aliyun.ros.cdk.core.IResolvable deadLetterTargetQueue) {
                this.deadLetterTargetQueue = deadLetterTargetQueue;
                return this;
            }

            /**
             * Sets the value of {@link DlqPolicyProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link DlqPolicyProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DlqPolicyProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DlqPolicyProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DlqPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DlqPolicyProperty {
            private final java.lang.Object deadLetterTargetQueue;
            private final java.lang.Object enabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.deadLetterTargetQueue = software.amazon.jsii.Kernel.get(this, "deadLetterTargetQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.deadLetterTargetQueue = java.util.Objects.requireNonNull(builder.deadLetterTargetQueue, "deadLetterTargetQueue is required");
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
            }

            @Override
            public final java.lang.Object getDeadLetterTargetQueue() {
                return this.deadLetterTargetQueue;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("deadLetterTargetQueue", om.valueToTree(this.getDeadLetterTargetQueue()));
                data.set("enabled", om.valueToTree(this.getEnabled()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DlqPolicyProperty.Jsii$Proxy that = (DlqPolicyProperty.Jsii$Proxy) o;

                if (!deadLetterTargetQueue.equals(that.deadLetterTargetQueue)) return false;
                return this.enabled.equals(that.enabled);
            }

            @Override
            public final int hashCode() {
                int result = this.deadLetterTargetQueue.hashCode();
                result = 31 * result + (this.enabled.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.RosSubscription}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.RosSubscription> {
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
        private final com.aliyun.ros.cdk.mns.RosSubscriptionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.RosSubscriptionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param endpoint This parameter is required.
         */
        public Builder endpoint(final java.lang.String endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpoint This parameter is required.
         */
        public Builder endpoint(final com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionName This parameter is required.
         */
        public Builder subscriptionName(final java.lang.String subscriptionName) {
            this.props.subscriptionName(subscriptionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscriptionName This parameter is required.
         */
        public Builder subscriptionName(final com.aliyun.ros.cdk.core.IResolvable subscriptionName) {
            this.props.subscriptionName(subscriptionName);
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
         * @param dlqPolicy This parameter is required.
         */
        public Builder dlqPolicy(final com.aliyun.ros.cdk.core.IResolvable dlqPolicy) {
            this.props.dlqPolicy(dlqPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param dlqPolicy This parameter is required.
         */
        public Builder dlqPolicy(final com.aliyun.ros.cdk.mns.RosSubscription.DlqPolicyProperty dlqPolicy) {
            this.props.dlqPolicy(dlqPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterTag This parameter is required.
         */
        public Builder filterTag(final java.lang.String filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterTag This parameter is required.
         */
        public Builder filterTag(final com.aliyun.ros.cdk.core.IResolvable filterTag) {
            this.props.filterTag(filterTag);
            return this;
        }

        /**
         * @return {@code this}
         * @param notifyContentFormat This parameter is required.
         */
        public Builder notifyContentFormat(final java.lang.String notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }
        /**
         * @return {@code this}
         * @param notifyContentFormat This parameter is required.
         */
        public Builder notifyContentFormat(final com.aliyun.ros.cdk.core.IResolvable notifyContentFormat) {
            this.props.notifyContentFormat(notifyContentFormat);
            return this;
        }

        /**
         * @return {@code this}
         * @param notifyStrategy This parameter is required.
         */
        public Builder notifyStrategy(final java.lang.String notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param notifyStrategy This parameter is required.
         */
        public Builder notifyStrategy(final com.aliyun.ros.cdk.core.IResolvable notifyStrategy) {
            this.props.notifyStrategy(notifyStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param pushType This parameter is required.
         */
        public Builder pushType(final java.lang.String pushType) {
            this.props.pushType(pushType);
            return this;
        }
        /**
         * @return {@code this}
         * @param pushType This parameter is required.
         */
        public Builder pushType(final com.aliyun.ros.cdk.core.IResolvable pushType) {
            this.props.pushType(pushType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mns.RosSubscription}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.RosSubscription build() {
            return new com.aliyun.ros.cdk.mns.RosSubscription(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

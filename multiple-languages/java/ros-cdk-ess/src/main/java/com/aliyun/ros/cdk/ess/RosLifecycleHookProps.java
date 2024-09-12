package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>RosLifecycleHook</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:27.079Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosLifecycleHookProps")
@software.amazon.jsii.Jsii.Proxy(RosLifecycleHookProps.Jsii$Proxy.class)
public interface RosLifecycleHookProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLifecycleTransition();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultResult() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHeartbeatTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleHookName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationMetadata() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLifecycleHookProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLifecycleHookProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLifecycleHookProps> {
        java.lang.Object lifecycleTransition;
        java.lang.Object scalingGroupId;
        java.lang.Object defaultResult;
        java.lang.Object heartbeatTimeout;
        java.lang.Object lifecycleHookName;
        java.lang.Object notificationArn;
        java.lang.Object notificationMetadata;

        /**
         * Sets the value of {@link RosLifecycleHookProps#getLifecycleTransition}
         * @param lifecycleTransition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder lifecycleTransition(java.lang.String lifecycleTransition) {
            this.lifecycleTransition = lifecycleTransition;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getLifecycleTransition}
         * @param lifecycleTransition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder lifecycleTransition(com.aliyun.ros.cdk.core.IResolvable lifecycleTransition) {
            this.lifecycleTransition = lifecycleTransition;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getDefaultResult}
         * @param defaultResult the value to be set.
         * @return {@code this}
         */
        public Builder defaultResult(java.lang.String defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getDefaultResult}
         * @param defaultResult the value to be set.
         * @return {@code this}
         */
        public Builder defaultResult(com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout the value to be set.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(java.lang.Number heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout the value to be set.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(com.aliyun.ros.cdk.core.IResolvable heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getLifecycleHookName}
         * @param lifecycleHookName the value to be set.
         * @return {@code this}
         */
        public Builder lifecycleHookName(java.lang.String lifecycleHookName) {
            this.lifecycleHookName = lifecycleHookName;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getLifecycleHookName}
         * @param lifecycleHookName the value to be set.
         * @return {@code this}
         */
        public Builder lifecycleHookName(com.aliyun.ros.cdk.core.IResolvable lifecycleHookName) {
            this.lifecycleHookName = lifecycleHookName;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getNotificationArn}
         * @param notificationArn the value to be set.
         * @return {@code this}
         */
        public Builder notificationArn(java.lang.String notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getNotificationArn}
         * @param notificationArn the value to be set.
         * @return {@code this}
         */
        public Builder notificationArn(com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata the value to be set.
         * @return {@code this}
         */
        public Builder notificationMetadata(java.lang.String notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Sets the value of {@link RosLifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata the value to be set.
         * @return {@code this}
         */
        public Builder notificationMetadata(com.aliyun.ros.cdk.core.IResolvable notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLifecycleHookProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLifecycleHookProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLifecycleHookProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLifecycleHookProps {
        private final java.lang.Object lifecycleTransition;
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object defaultResult;
        private final java.lang.Object heartbeatTimeout;
        private final java.lang.Object lifecycleHookName;
        private final java.lang.Object notificationArn;
        private final java.lang.Object notificationMetadata;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.lifecycleTransition = software.amazon.jsii.Kernel.get(this, "lifecycleTransition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultResult = software.amazon.jsii.Kernel.get(this, "defaultResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.heartbeatTimeout = software.amazon.jsii.Kernel.get(this, "heartbeatTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lifecycleHookName = software.amazon.jsii.Kernel.get(this, "lifecycleHookName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationArn = software.amazon.jsii.Kernel.get(this, "notificationArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationMetadata = software.amazon.jsii.Kernel.get(this, "notificationMetadata", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.lifecycleTransition = java.util.Objects.requireNonNull(builder.lifecycleTransition, "lifecycleTransition is required");
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.defaultResult = builder.defaultResult;
            this.heartbeatTimeout = builder.heartbeatTimeout;
            this.lifecycleHookName = builder.lifecycleHookName;
            this.notificationArn = builder.notificationArn;
            this.notificationMetadata = builder.notificationMetadata;
        }

        @Override
        public final java.lang.Object getLifecycleTransition() {
            return this.lifecycleTransition;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getDefaultResult() {
            return this.defaultResult;
        }

        @Override
        public final java.lang.Object getHeartbeatTimeout() {
            return this.heartbeatTimeout;
        }

        @Override
        public final java.lang.Object getLifecycleHookName() {
            return this.lifecycleHookName;
        }

        @Override
        public final java.lang.Object getNotificationArn() {
            return this.notificationArn;
        }

        @Override
        public final java.lang.Object getNotificationMetadata() {
            return this.notificationMetadata;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("lifecycleTransition", om.valueToTree(this.getLifecycleTransition()));
            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getDefaultResult() != null) {
                data.set("defaultResult", om.valueToTree(this.getDefaultResult()));
            }
            if (this.getHeartbeatTimeout() != null) {
                data.set("heartbeatTimeout", om.valueToTree(this.getHeartbeatTimeout()));
            }
            if (this.getLifecycleHookName() != null) {
                data.set("lifecycleHookName", om.valueToTree(this.getLifecycleHookName()));
            }
            if (this.getNotificationArn() != null) {
                data.set("notificationArn", om.valueToTree(this.getNotificationArn()));
            }
            if (this.getNotificationMetadata() != null) {
                data.set("notificationMetadata", om.valueToTree(this.getNotificationMetadata()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosLifecycleHookProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLifecycleHookProps.Jsii$Proxy that = (RosLifecycleHookProps.Jsii$Proxy) o;

            if (!lifecycleTransition.equals(that.lifecycleTransition)) return false;
            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.defaultResult != null ? !this.defaultResult.equals(that.defaultResult) : that.defaultResult != null) return false;
            if (this.heartbeatTimeout != null ? !this.heartbeatTimeout.equals(that.heartbeatTimeout) : that.heartbeatTimeout != null) return false;
            if (this.lifecycleHookName != null ? !this.lifecycleHookName.equals(that.lifecycleHookName) : that.lifecycleHookName != null) return false;
            if (this.notificationArn != null ? !this.notificationArn.equals(that.notificationArn) : that.notificationArn != null) return false;
            return this.notificationMetadata != null ? this.notificationMetadata.equals(that.notificationMetadata) : that.notificationMetadata == null;
        }

        @Override
        public final int hashCode() {
            int result = this.lifecycleTransition.hashCode();
            result = 31 * result + (this.scalingGroupId.hashCode());
            result = 31 * result + (this.defaultResult != null ? this.defaultResult.hashCode() : 0);
            result = 31 * result + (this.heartbeatTimeout != null ? this.heartbeatTimeout.hashCode() : 0);
            result = 31 * result + (this.lifecycleHookName != null ? this.lifecycleHookName.hashCode() : 0);
            result = 31 * result + (this.notificationArn != null ? this.notificationArn.hashCode() : 0);
            result = 31 * result + (this.notificationMetadata != null ? this.notificationMetadata.hashCode() : 0);
            return result;
        }
    }
}

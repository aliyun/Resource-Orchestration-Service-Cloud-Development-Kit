package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::LifecycleHook`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.812Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LifecycleHookProps")
@software.amazon.jsii.Jsii.Proxy(LifecycleHookProps.Jsii$Proxy.class)
public interface LifecycleHookProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLifecycleTransition();

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
     * <p>
     * Value range:
     * CONTINUE: the scaling group continues with the scale-in or scale-out process.
     * ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultResult() {
        return null;
    }

    /**
     * Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
     * <p>
     * If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHeartbeatTimeout() {
        return null;
    }

    /**
     * Property lifecycleHookName: The name of the lifecycle hook.
     * <p>
     * Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleHookName() {
        return null;
    }

    /**
     * Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.
     * <p>
     * This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationArn() {
        return null;
    }

    /**
     * Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
     * <p>
     * The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationMetadata() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LifecycleHookProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LifecycleHookProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LifecycleHookProps> {
        java.lang.Object lifecycleTransition;
        java.lang.Object scalingGroupId;
        java.lang.Object defaultResult;
        java.lang.Object heartbeatTimeout;
        java.lang.Object lifecycleHookName;
        java.lang.Object notificationArn;
        java.lang.Object notificationMetadata;

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleTransition}
         * @param lifecycleTransition Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event. This parameter is required.
         * @return {@code this}
         */
        public Builder lifecycleTransition(java.lang.String lifecycleTransition) {
            this.lifecycleTransition = lifecycleTransition;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleTransition}
         * @param lifecycleTransition Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event. This parameter is required.
         * @return {@code this}
         */
        public Builder lifecycleTransition(com.aliyun.ros.cdk.core.IResolvable lifecycleTransition) {
            this.lifecycleTransition = lifecycleTransition;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getDefaultResult}
         * @param defaultResult Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
         *                      Value range:
         *                      CONTINUE: the scaling group continues with the scale-in or scale-out process.
         *                      ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
         *                      Default value: CONTINUE
         *                      If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
         * @return {@code this}
         */
        public Builder defaultResult(java.lang.String defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getDefaultResult}
         * @param defaultResult Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
         *                      Value range:
         *                      CONTINUE: the scaling group continues with the scale-in or scale-out process.
         *                      ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
         *                      Default value: CONTINUE
         *                      If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
         * @return {@code this}
         */
        public Builder defaultResult(com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
         *                         If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
         *                         You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(java.lang.Number heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
         *                         If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
         *                         You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(com.aliyun.ros.cdk.core.IResolvable heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleHookName}
         * @param lifecycleHookName Property lifecycleHookName: The name of the lifecycle hook.
         *                          Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
         *                          Default value: Lifecycle Hook ID
         * @return {@code this}
         */
        public Builder lifecycleHookName(java.lang.String lifecycleHookName) {
            this.lifecycleHookName = lifecycleHookName;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleHookName}
         * @param lifecycleHookName Property lifecycleHookName: The name of the lifecycle hook.
         *                          Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
         *                          Default value: Lifecycle Hook ID
         * @return {@code this}
         */
        public Builder lifecycleHookName(com.aliyun.ros.cdk.core.IResolvable lifecycleHookName) {
            this.lifecycleHookName = lifecycleHookName;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationArn}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.
         *                        This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
         *                        region: the region to which the scaling group locates
         *                        account-id: Alibaba Cloud ID
         *                        For example:
         *                        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
         *                        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
         *                        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
         * @return {@code this}
         */
        public Builder notificationArn(java.lang.String notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationArn}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.
         *                        This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
         *                        region: the region to which the scaling group locates
         *                        account-id: Alibaba Cloud ID
         *                        For example:
         *                        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
         *                        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
         *                        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
         * @return {@code this}
         */
        public Builder notificationArn(com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
         *                             The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
         * @return {@code this}
         */
        public Builder notificationMetadata(java.lang.String notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
         *                             The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
         * @return {@code this}
         */
        public Builder notificationMetadata(com.aliyun.ros.cdk.core.IResolvable notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LifecycleHookProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LifecycleHookProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LifecycleHookProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LifecycleHookProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.LifecycleHookProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LifecycleHookProps.Jsii$Proxy that = (LifecycleHookProps.Jsii$Proxy) o;

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

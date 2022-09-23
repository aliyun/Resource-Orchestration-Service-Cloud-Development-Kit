package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::LifecycleHook`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.445Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LifecycleHook")
public class LifecycleHook extends com.aliyun.ros.cdk.core.Resource {

    protected LifecycleHook(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LifecycleHook(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::LifecycleHook`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public LifecycleHook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LifecycleHookProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::LifecycleHook`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LifecycleHook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LifecycleHookProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LifecycleHookId: The lifecycle hook ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLifecycleHookId() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleHookId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.LifecycleHook}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.LifecycleHook> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.LifecycleHookProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.LifecycleHookProps.Builder();
        }

        /**
         * Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.
         * <p>
         * @return {@code this}
         * @param lifecycleTransition Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event. This parameter is required.
         */
        public Builder lifecycleTransition(final java.lang.String lifecycleTransition) {
            this.props.lifecycleTransition(lifecycleTransition);
            return this;
        }
        /**
         * Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.
         * <p>
         * @return {@code this}
         * @param lifecycleTransition Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event. This parameter is required.
         */
        public Builder lifecycleTransition(final com.aliyun.ros.cdk.core.IResolvable lifecycleTransition) {
            this.props.lifecycleTransition(lifecycleTransition);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
         * <p>
         * Value range:
         * CONTINUE: the scaling group continues with the scale-in or scale-out process.
         * ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
         * Default value: CONTINUE
         * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
         * <p>
         * @return {@code this}
         * @param defaultResult Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. This parameter is required.
         */
        public Builder defaultResult(final java.lang.String defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }
        /**
         * Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
         * <p>
         * Value range:
         * CONTINUE: the scaling group continues with the scale-in or scale-out process.
         * ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
         * Default value: CONTINUE
         * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
         * <p>
         * @return {@code this}
         * @param defaultResult Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. This parameter is required.
         */
        public Builder defaultResult(final com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }

        /**
         * Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
         * <p>
         * If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
         * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
         * <p>
         * @return {@code this}
         * @param heartbeatTimeout Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. This parameter is required.
         */
        public Builder heartbeatTimeout(final java.lang.Number heartbeatTimeout) {
            this.props.heartbeatTimeout(heartbeatTimeout);
            return this;
        }
        /**
         * Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
         * <p>
         * If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
         * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
         * <p>
         * @return {@code this}
         * @param heartbeatTimeout Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. This parameter is required.
         */
        public Builder heartbeatTimeout(final com.aliyun.ros.cdk.core.IResolvable heartbeatTimeout) {
            this.props.heartbeatTimeout(heartbeatTimeout);
            return this;
        }

        /**
         * Property lifecycleHookName: The name of the lifecycle hook.
         * <p>
         * Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
         * Default value: Lifecycle Hook ID
         * <p>
         * @return {@code this}
         * @param lifecycleHookName Property lifecycleHookName: The name of the lifecycle hook. This parameter is required.
         */
        public Builder lifecycleHookName(final java.lang.String lifecycleHookName) {
            this.props.lifecycleHookName(lifecycleHookName);
            return this;
        }
        /**
         * Property lifecycleHookName: The name of the lifecycle hook.
         * <p>
         * Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
         * Default value: Lifecycle Hook ID
         * <p>
         * @return {@code this}
         * @param lifecycleHookName Property lifecycleHookName: The name of the lifecycle hook. This parameter is required.
         */
        public Builder lifecycleHookName(final com.aliyun.ros.cdk.core.IResolvable lifecycleHookName) {
            this.props.lifecycleHookName(lifecycleHookName);
            return this;
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
         * <p>
         * @return {@code this}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This parameter is required.
         */
        public Builder notificationArn(final java.lang.String notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
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
         * <p>
         * @return {@code this}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This parameter is required.
         */
        public Builder notificationArn(final com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
        }

        /**
         * Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
         * <p>
         * The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
         * <p>
         * @return {@code this}
         * @param notificationMetadata Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. This parameter is required.
         */
        public Builder notificationMetadata(final java.lang.String notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }
        /**
         * Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
         * <p>
         * The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
         * <p>
         * @return {@code this}
         * @param notificationMetadata Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. This parameter is required.
         */
        public Builder notificationMetadata(final com.aliyun.ros.cdk.core.IResolvable notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.LifecycleHook}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.LifecycleHook build() {
            return new com.aliyun.ros.cdk.ess.LifecycleHook(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

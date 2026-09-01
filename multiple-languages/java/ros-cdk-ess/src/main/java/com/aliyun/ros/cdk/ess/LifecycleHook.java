package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::LifecycleHook</code>, which is used to create a lifecycle hook for a scaling group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:06:45.563Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LifecycleHook")
public class LifecycleHook extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.ILifecycleHook {

    protected LifecycleHook(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LifecycleHook(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLifecycleHookId() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleHookId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LifecycleHookProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.LifecycleHookProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.
         * <p>
         * Valid
         * values:
         * <p>
         * <ul>
         * <li>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
         * request.</li>
         * <li>ABANDON: Auto Scaling releases ECS instances that are created during
         * scale-out activities or removes ECS instances from the scaling group during
         * scale-in activities.</li>
         * <li>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
         * release ECS instances but rolls back ECS instances. For scale-out activities, the
         * ROLLBACK setting has the same effect as the <code>ABANDON</code> setting.
         * If a scaling group has multiple lifecycle hooks in effect and you set the
         * <code>DefaultResult</code> parameter for one of the lifecycle hooks to <code>ABANDON</code> or
         * <code>ROLLBACK</code>, the following rule applies to scale-in activities: When the lifecycle
         * hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
         * lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
         * the action only after all lifecycle hooks time out. The action that Auto Scaling
         * performs is specified by the DefaultResult parameter of the last lifecycle hook
         * that times out.
         * Default value: CONTINUE.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defaultResult Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out. This parameter is required.
         */
        public Builder defaultResult(final java.lang.String defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }
        /**
         * Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.
         * <p>
         * Valid
         * values:
         * <p>
         * <ul>
         * <li>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
         * request.</li>
         * <li>ABANDON: Auto Scaling releases ECS instances that are created during
         * scale-out activities or removes ECS instances from the scaling group during
         * scale-in activities.</li>
         * <li>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
         * release ECS instances but rolls back ECS instances. For scale-out activities, the
         * ROLLBACK setting has the same effect as the <code>ABANDON</code> setting.
         * If a scaling group has multiple lifecycle hooks in effect and you set the
         * <code>DefaultResult</code> parameter for one of the lifecycle hooks to <code>ABANDON</code> or
         * <code>ROLLBACK</code>, the following rule applies to scale-in activities: When the lifecycle
         * hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
         * lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
         * the action only after all lifecycle hooks time out. The action that Auto Scaling
         * performs is specified by the DefaultResult parameter of the last lifecycle hook
         * that times out.
         * Default value: CONTINUE.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defaultResult Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out. This parameter is required.
         */
        public Builder defaultResult(final com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.props.defaultResult(defaultResult);
            return this;
        }

        /**
         * Property heartbeatTimeout: The period of time before the lifecycle hook times out.
         * <p>
         * When the lifecycle hook
         * times out, Auto Scaling performs the action that is specified by the
         * DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
         * You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
         * period of time before a lifecycle hook times out. You can also call the
         * <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
         * Default value: 600.
         * <p>
         * @return {@code this}
         * @param heartbeatTimeout Property heartbeatTimeout: The period of time before the lifecycle hook times out. This parameter is required.
         */
        public Builder heartbeatTimeout(final java.lang.Number heartbeatTimeout) {
            this.props.heartbeatTimeout(heartbeatTimeout);
            return this;
        }
        /**
         * Property heartbeatTimeout: The period of time before the lifecycle hook times out.
         * <p>
         * When the lifecycle hook
         * times out, Auto Scaling performs the action that is specified by the
         * DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
         * You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
         * period of time before a lifecycle hook times out. You can also call the
         * <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
         * Default value: 600.
         * <p>
         * @return {@code this}
         * @param heartbeatTimeout Property heartbeatTimeout: The period of time before the lifecycle hook times out. This parameter is required.
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
         * Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.
         * <p>
         * If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
         * <p>
         * <ul>
         * <li>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</li>
         * <li>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</li>
         * <li>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</li>
         * <li>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</li>
         * </ul>
         * <p>
         * The variables in the preceding value formats have the following meanings:
         * <p>
         * <ul>
         * <li>region-id: the region ID of your scaling group.</li>
         * <li>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</li>
         * <li>queuename: the name of the SMQ queue.</li>
         * <li>topicname: the name of the SMQ topic.</li>
         * <li>templatename: the name of the OOS template.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient. This parameter is required.
         */
        public Builder notificationArn(final java.lang.String notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
        }
        /**
         * Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.
         * <p>
         * If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
         * <p>
         * <ul>
         * <li>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</li>
         * <li>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</li>
         * <li>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</li>
         * <li>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</li>
         * </ul>
         * <p>
         * The variables in the preceding value formats have the following meanings:
         * <p>
         * <ul>
         * <li>region-id: the region ID of your scaling group.</li>
         * <li>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</li>
         * <li>queuename: the name of the SMQ queue.</li>
         * <li>topicname: the name of the SMQ topic.</li>
         * <li>templatename: the name of the OOS template.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient. This parameter is required.
         */
        public Builder notificationArn(final com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.props.notificationArn(notificationArn);
            return this;
        }

        /**
         * Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
         * <p>
         * Auto Scaling sends the value of the
         * NotificationMetadata parameter together with the notification. This helps you
         * categorize your notifications. If you specify this parameter, you must also
         * specify the <code>NotificationArn</code> parameter. The value of this parameter cannot
         * exceed 4,096 characters in length.
         * If you use the <code>NotificationArn</code> parameter to specify a public or custom OOS
         * template, the value of the <code>NotificationMetadata</code> parameter must be a JSON string
         * that contains the OOS template parameters.
         * For example, your OOS template includes the following parameters:
         * <code>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</code>,
         * <code>dbInstanceId</code>, and <code>modifyMode</code>. Specific parameters that are defined in your
         * OOS template have default values. When you specify the <code>NotificationMetadata</code>
         * parameter, specify parameters that do not have default values. If you specify
         * parameters that have default values, the default values are overwritten. The
         * default values of the following parameters must be retained to obtain information
         * about scaling activities that are in progress:
         * <p>
         * <ul>
         * <li>regionId: the region ID of the scaling activity that is in progress. Default
         * value: ${regionId}.</li>
         * <li>instanceIds: the IDs of ECS instances that are scaled in the scaling
         * activity. Default value: ${instanceIds}.</li>
         * <li>lifecycleHookId: the ID of the lifecycle hook. Default value:
         * ${lifecycleHookId}.</li>
         * <li>lifecycleActionToken: the token of the lifecycle hook. You can use the token
         * to end the timeout period of the lifecycle hook ahead of schedule. Default value:
         * ${lifecycleActionToken}</li>
         * <li>scalingGroupId: the ID of the scaling group in which the scaling activity is
         * executed. Default value: ${scalingGroupId}.</li>
         * <li>lifecycleActionResult: the action that Auto Scaling performs after the
         * lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
         * hook times out ahead of schedule. If you set the <code>DefalutResult</code> parameter to
         * <code>ROLLBACK</code>, the default value of this parameter is <code>ROLLBACK</code>. If you set the
         * <code>DefaultResult</code> parameter to other values, the default value of this parameter is
         * ABANDON.
         * Note**</li>
         * <li>You can specify a value for the <code>lifecycleActionResult</code> parameter to
         * overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
         * ${lifecycleActionResult}. A value of <code>${lifecycleActionResult}</code> specifies that
         * the value of the lifecycleActionResult parameter is the same as the value of the
         * DefaultResult parameter.</li>
         * <li>You can view the details of the OOS template that you specify in the OOS
         * console.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param notificationMetadata Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect. This parameter is required.
         */
        public Builder notificationMetadata(final java.lang.String notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }
        /**
         * Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
         * <p>
         * Auto Scaling sends the value of the
         * NotificationMetadata parameter together with the notification. This helps you
         * categorize your notifications. If you specify this parameter, you must also
         * specify the <code>NotificationArn</code> parameter. The value of this parameter cannot
         * exceed 4,096 characters in length.
         * If you use the <code>NotificationArn</code> parameter to specify a public or custom OOS
         * template, the value of the <code>NotificationMetadata</code> parameter must be a JSON string
         * that contains the OOS template parameters.
         * For example, your OOS template includes the following parameters:
         * <code>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</code>,
         * <code>dbInstanceId</code>, and <code>modifyMode</code>. Specific parameters that are defined in your
         * OOS template have default values. When you specify the <code>NotificationMetadata</code>
         * parameter, specify parameters that do not have default values. If you specify
         * parameters that have default values, the default values are overwritten. The
         * default values of the following parameters must be retained to obtain information
         * about scaling activities that are in progress:
         * <p>
         * <ul>
         * <li>regionId: the region ID of the scaling activity that is in progress. Default
         * value: ${regionId}.</li>
         * <li>instanceIds: the IDs of ECS instances that are scaled in the scaling
         * activity. Default value: ${instanceIds}.</li>
         * <li>lifecycleHookId: the ID of the lifecycle hook. Default value:
         * ${lifecycleHookId}.</li>
         * <li>lifecycleActionToken: the token of the lifecycle hook. You can use the token
         * to end the timeout period of the lifecycle hook ahead of schedule. Default value:
         * ${lifecycleActionToken}</li>
         * <li>scalingGroupId: the ID of the scaling group in which the scaling activity is
         * executed. Default value: ${scalingGroupId}.</li>
         * <li>lifecycleActionResult: the action that Auto Scaling performs after the
         * lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
         * hook times out ahead of schedule. If you set the <code>DefalutResult</code> parameter to
         * <code>ROLLBACK</code>, the default value of this parameter is <code>ROLLBACK</code>. If you set the
         * <code>DefaultResult</code> parameter to other values, the default value of this parameter is
         * ABANDON.
         * Note**</li>
         * <li>You can specify a value for the <code>lifecycleActionResult</code> parameter to
         * overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
         * ${lifecycleActionResult}. A value of <code>${lifecycleActionResult}</code> specifies that
         * the value of the lifecycleActionResult parameter is the same as the value of the
         * DefaultResult parameter.</li>
         * <li>You can view the details of the OOS template that you specify in the OOS
         * console.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param notificationMetadata Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect. This parameter is required.
         */
        public Builder notificationMetadata(final com.aliyun.ros.cdk.core.IResolvable notificationMetadata) {
            this.props.notificationMetadata(notificationMetadata);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.LifecycleHook}.
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

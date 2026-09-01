package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>LifecycleHook</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:06:45.566Z")
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultResult() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationArn() {
        return null;
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
         * @param defaultResult Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.
         *                      Valid
         *                      values:
         *                      <p>
         *                      <ul>
         *                      <li>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
         *                      request.</li>
         *                      <li>ABANDON: Auto Scaling releases ECS instances that are created during
         *                      scale-out activities or removes ECS instances from the scaling group during
         *                      scale-in activities.</li>
         *                      <li>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
         *                      release ECS instances but rolls back ECS instances. For scale-out activities, the
         *                      ROLLBACK setting has the same effect as the <code>ABANDON</code> setting.
         *                      If a scaling group has multiple lifecycle hooks in effect and you set the
         *                      <code>DefaultResult</code> parameter for one of the lifecycle hooks to <code>ABANDON</code> or
         *                      <code>ROLLBACK</code>, the following rule applies to scale-in activities: When the lifecycle
         *                      hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
         *                      lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
         *                      the action only after all lifecycle hooks time out. The action that Auto Scaling
         *                      performs is specified by the DefaultResult parameter of the last lifecycle hook
         *                      that times out.
         *                      Default value: CONTINUE.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder defaultResult(java.lang.String defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getDefaultResult}
         * @param defaultResult Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.
         *                      Valid
         *                      values:
         *                      <p>
         *                      <ul>
         *                      <li>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
         *                      request.</li>
         *                      <li>ABANDON: Auto Scaling releases ECS instances that are created during
         *                      scale-out activities or removes ECS instances from the scaling group during
         *                      scale-in activities.</li>
         *                      <li>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
         *                      release ECS instances but rolls back ECS instances. For scale-out activities, the
         *                      ROLLBACK setting has the same effect as the <code>ABANDON</code> setting.
         *                      If a scaling group has multiple lifecycle hooks in effect and you set the
         *                      <code>DefaultResult</code> parameter for one of the lifecycle hooks to <code>ABANDON</code> or
         *                      <code>ROLLBACK</code>, the following rule applies to scale-in activities: When the lifecycle
         *                      hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
         *                      lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
         *                      the action only after all lifecycle hooks time out. The action that Auto Scaling
         *                      performs is specified by the DefaultResult parameter of the last lifecycle hook
         *                      that times out.
         *                      Default value: CONTINUE.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder defaultResult(com.aliyun.ros.cdk.core.IResolvable defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout Property heartbeatTimeout: The period of time before the lifecycle hook times out.
         *                         When the lifecycle hook
         *                         times out, Auto Scaling performs the action that is specified by the
         *                         DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
         *                         You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
         *                         period of time before a lifecycle hook times out. You can also call the
         *                         <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
         *                         Default value: 600.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(java.lang.Number heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout Property heartbeatTimeout: The period of time before the lifecycle hook times out.
         *                         When the lifecycle hook
         *                         times out, Auto Scaling performs the action that is specified by the
         *                         DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
         *                         You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
         *                         period of time before a lifecycle hook times out. You can also call the
         *                         <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
         *                         Default value: 600.
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
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.
         *                        If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
         *                        <p>
         *                        <ul>
         *                        <li>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</li>
         *                        <li>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</li>
         *                        <li>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</li>
         *                        <li>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</li>
         *                        </ul>
         *                        <p>
         *                        The variables in the preceding value formats have the following meanings:
         *                        <p>
         *                        <ul>
         *                        <li>region-id: the region ID of your scaling group.</li>
         *                        <li>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</li>
         *                        <li>queuename: the name of the SMQ queue.</li>
         *                        <li>topicname: the name of the SMQ topic.</li>
         *                        <li>templatename: the name of the OOS template.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder notificationArn(java.lang.String notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationArn}
         * @param notificationArn Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.
         *                        If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
         *                        <p>
         *                        <ul>
         *                        <li>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</li>
         *                        <li>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</li>
         *                        <li>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</li>
         *                        <li>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</li>
         *                        </ul>
         *                        <p>
         *                        The variables in the preceding value formats have the following meanings:
         *                        <p>
         *                        <ul>
         *                        <li>region-id: the region ID of your scaling group.</li>
         *                        <li>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</li>
         *                        <li>queuename: the name of the SMQ queue.</li>
         *                        <li>topicname: the name of the SMQ topic.</li>
         *                        <li>templatename: the name of the OOS template.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder notificationArn(com.aliyun.ros.cdk.core.IResolvable notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
         *                             Auto Scaling sends the value of the
         *                             NotificationMetadata parameter together with the notification. This helps you
         *                             categorize your notifications. If you specify this parameter, you must also
         *                             specify the <code>NotificationArn</code> parameter. The value of this parameter cannot
         *                             exceed 4,096 characters in length.
         *                             If you use the <code>NotificationArn</code> parameter to specify a public or custom OOS
         *                             template, the value of the <code>NotificationMetadata</code> parameter must be a JSON string
         *                             that contains the OOS template parameters.
         *                             For example, your OOS template includes the following parameters:
         *                             <code>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</code>,
         *                             <code>dbInstanceId</code>, and <code>modifyMode</code>. Specific parameters that are defined in your
         *                             OOS template have default values. When you specify the <code>NotificationMetadata</code>
         *                             parameter, specify parameters that do not have default values. If you specify
         *                             parameters that have default values, the default values are overwritten. The
         *                             default values of the following parameters must be retained to obtain information
         *                             about scaling activities that are in progress:
         *                             <p>
         *                             <ul>
         *                             <li>regionId: the region ID of the scaling activity that is in progress. Default
         *                             value: ${regionId}.</li>
         *                             <li>instanceIds: the IDs of ECS instances that are scaled in the scaling
         *                             activity. Default value: ${instanceIds}.</li>
         *                             <li>lifecycleHookId: the ID of the lifecycle hook. Default value:
         *                             ${lifecycleHookId}.</li>
         *                             <li>lifecycleActionToken: the token of the lifecycle hook. You can use the token
         *                             to end the timeout period of the lifecycle hook ahead of schedule. Default value:
         *                             ${lifecycleActionToken}</li>
         *                             <li>scalingGroupId: the ID of the scaling group in which the scaling activity is
         *                             executed. Default value: ${scalingGroupId}.</li>
         *                             <li>lifecycleActionResult: the action that Auto Scaling performs after the
         *                             lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
         *                             hook times out ahead of schedule. If you set the <code>DefalutResult</code> parameter to
         *                             <code>ROLLBACK</code>, the default value of this parameter is <code>ROLLBACK</code>. If you set the
         *                             <code>DefaultResult</code> parameter to other values, the default value of this parameter is
         *                             ABANDON.
         *                             Note**</li>
         *                             <li>You can specify a value for the <code>lifecycleActionResult</code> parameter to
         *                             overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
         *                             ${lifecycleActionResult}. A value of <code>${lifecycleActionResult}</code> specifies that
         *                             the value of the lifecycleActionResult parameter is the same as the value of the
         *                             DefaultResult parameter.</li>
         *                             <li>You can view the details of the OOS template that you specify in the OOS
         *                             console.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder notificationMetadata(java.lang.String notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
         *                             Auto Scaling sends the value of the
         *                             NotificationMetadata parameter together with the notification. This helps you
         *                             categorize your notifications. If you specify this parameter, you must also
         *                             specify the <code>NotificationArn</code> parameter. The value of this parameter cannot
         *                             exceed 4,096 characters in length.
         *                             If you use the <code>NotificationArn</code> parameter to specify a public or custom OOS
         *                             template, the value of the <code>NotificationMetadata</code> parameter must be a JSON string
         *                             that contains the OOS template parameters.
         *                             For example, your OOS template includes the following parameters:
         *                             <code>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</code>,
         *                             <code>dbInstanceId</code>, and <code>modifyMode</code>. Specific parameters that are defined in your
         *                             OOS template have default values. When you specify the <code>NotificationMetadata</code>
         *                             parameter, specify parameters that do not have default values. If you specify
         *                             parameters that have default values, the default values are overwritten. The
         *                             default values of the following parameters must be retained to obtain information
         *                             about scaling activities that are in progress:
         *                             <p>
         *                             <ul>
         *                             <li>regionId: the region ID of the scaling activity that is in progress. Default
         *                             value: ${regionId}.</li>
         *                             <li>instanceIds: the IDs of ECS instances that are scaled in the scaling
         *                             activity. Default value: ${instanceIds}.</li>
         *                             <li>lifecycleHookId: the ID of the lifecycle hook. Default value:
         *                             ${lifecycleHookId}.</li>
         *                             <li>lifecycleActionToken: the token of the lifecycle hook. You can use the token
         *                             to end the timeout period of the lifecycle hook ahead of schedule. Default value:
         *                             ${lifecycleActionToken}</li>
         *                             <li>scalingGroupId: the ID of the scaling group in which the scaling activity is
         *                             executed. Default value: ${scalingGroupId}.</li>
         *                             <li>lifecycleActionResult: the action that Auto Scaling performs after the
         *                             lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
         *                             hook times out ahead of schedule. If you set the <code>DefalutResult</code> parameter to
         *                             <code>ROLLBACK</code>, the default value of this parameter is <code>ROLLBACK</code>. If you set the
         *                             <code>DefaultResult</code> parameter to other values, the default value of this parameter is
         *                             ABANDON.
         *                             Note**</li>
         *                             <li>You can specify a value for the <code>lifecycleActionResult</code> parameter to
         *                             overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
         *                             ${lifecycleActionResult}. A value of <code>${lifecycleActionResult}</code> specifies that
         *                             the value of the lifecycleActionResult parameter is the same as the value of the
         *                             DefaultResult parameter.</li>
         *                             <li>You can view the details of the OOS template that you specify in the OOS
         *                             console.</li>
         *                             </ul>
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

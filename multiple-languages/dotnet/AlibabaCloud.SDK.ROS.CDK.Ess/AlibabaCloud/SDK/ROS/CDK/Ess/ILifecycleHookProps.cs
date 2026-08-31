using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `LifecycleHook`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILifecycleHookProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.LifecycleHookProps")]
    public interface ILifecycleHookProps
    {
        /// <summary>Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.</summary>
        [JsiiProperty(name: "lifecycleTransition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LifecycleTransition
        {
            get;
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
        /// request.</description>
        /// <description>ABANDON: Auto Scaling releases ECS instances that are created during
        /// scale-out activities or removes ECS instances from the scaling group during
        /// scale-in activities.</description>
        /// <description>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
        /// release ECS instances but rolls back ECS instances. For scale-out activities, the
        /// ROLLBACK setting has the same effect as the <c>ABANDON</c> setting.
        /// If a scaling group has multiple lifecycle hooks in effect and you set the
        /// <c>DefaultResult</c> parameter for one of the lifecycle hooks to <c>ABANDON</c> or
        /// <c>ROLLBACK</c>, the following rule applies to scale-in activities: When the lifecycle
        /// hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
        /// lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
        /// the action only after all lifecycle hooks time out. The action that Auto Scaling
        /// performs is specified by the DefaultResult parameter of the last lifecycle hook
        /// that times out.
        /// Default value: CONTINUE.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "defaultResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultResult
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property heartbeatTimeout: The period of time before the lifecycle hook times out.</summary>
        /// <remarks>
        /// When the lifecycle hook
        /// times out, Auto Scaling performs the action that is specified by the
        /// DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
        /// You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
        /// period of time before a lifecycle hook times out. You can also call the
        /// <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
        /// Default value: 600.
        /// </remarks>
        [JsiiProperty(name: "heartbeatTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HeartbeatTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lifecycleHookName: The name of the lifecycle hook.</summary>
        /// <remarks>
        /// Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        /// Default value: Lifecycle Hook ID
        /// </remarks>
        [JsiiProperty(name: "lifecycleHookName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LifecycleHookName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.</summary>
        /// <remarks>
        /// If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
        ///
        /// <list type="bullet">
        /// <description>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</description>
        /// <description>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</description>
        /// <description>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</description>
        /// <description>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</description>
        /// </list>
        ///
        /// The variables in the preceding value formats have the following meanings:
        ///
        /// <list type="bullet">
        /// <description>region-id: the region ID of your scaling group.</description>
        /// <description>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</description>
        /// <description>queuename: the name of the SMQ queue.</description>
        /// <description>topicname: the name of the SMQ topic.</description>
        /// <description>templatename: the name of the OOS template.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "notificationArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.</summary>
        /// <remarks>
        /// Auto Scaling sends the value of the
        /// NotificationMetadata parameter together with the notification. This helps you
        /// categorize your notifications. If you specify this parameter, you must also
        /// specify the <c>NotificationArn</c> parameter. The value of this parameter cannot
        /// exceed 4,096 characters in length.
        /// If you use the <c>NotificationArn</c> parameter to specify a public or custom OOS
        /// template, the value of the <c>NotificationMetadata</c> parameter must be a JSON string
        /// that contains the OOS template parameters.
        /// For example, your OOS template includes the following parameters:
        /// <c>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</c>,
        /// <c>dbInstanceId</c>, and <c>modifyMode</c>. Specific parameters that are defined in your
        /// OOS template have default values. When you specify the <c>NotificationMetadata</c>
        /// parameter, specify parameters that do not have default values. If you specify
        /// parameters that have default values, the default values are overwritten. The
        /// default values of the following parameters must be retained to obtain information
        /// about scaling activities that are in progress:
        ///
        /// <list type="bullet">
        /// <description>regionId: the region ID of the scaling activity that is in progress. Default
        /// value: ${regionId}.</description>
        /// <description>instanceIds: the IDs of ECS instances that are scaled in the scaling
        /// activity. Default value: ${instanceIds}.</description>
        /// <description>lifecycleHookId: the ID of the lifecycle hook. Default value:
        /// ${lifecycleHookId}.</description>
        /// <description>lifecycleActionToken: the token of the lifecycle hook. You can use the token
        /// to end the timeout period of the lifecycle hook ahead of schedule. Default value:
        /// ${lifecycleActionToken}</description>
        /// <description>scalingGroupId: the ID of the scaling group in which the scaling activity is
        /// executed. Default value: ${scalingGroupId}.</description>
        /// <description>lifecycleActionResult: the action that Auto Scaling performs after the
        /// lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
        /// hook times out ahead of schedule. If you set the <c>DefalutResult</c> parameter to
        /// <c>ROLLBACK</c>, the default value of this parameter is <c>ROLLBACK</c>. If you set the
        /// <c>DefaultResult</c> parameter to other values, the default value of this parameter is
        /// ABANDON.
        /// Note**</description>
        /// <description>You can specify a value for the <c>lifecycleActionResult</c> parameter to
        /// overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
        /// ${lifecycleActionResult}. A value of <c>${lifecycleActionResult}</c> specifies that
        /// the value of the lifecycleActionResult parameter is the same as the value of the
        /// DefaultResult parameter.</description>
        /// <description>You can view the details of the OOS template that you specify in the OOS
        /// console.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "notificationMetadata", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationMetadata
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LifecycleHook`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILifecycleHookProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.LifecycleHookProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.ILifecycleHookProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.</summary>
            [JsiiProperty(name: "lifecycleTransition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LifecycleTransition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
            /// request.</description>
            /// <description>ABANDON: Auto Scaling releases ECS instances that are created during
            /// scale-out activities or removes ECS instances from the scaling group during
            /// scale-in activities.</description>
            /// <description>ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
            /// release ECS instances but rolls back ECS instances. For scale-out activities, the
            /// ROLLBACK setting has the same effect as the <c>ABANDON</c> setting.
            /// If a scaling group has multiple lifecycle hooks in effect and you set the
            /// <c>DefaultResult</c> parameter for one of the lifecycle hooks to <c>ABANDON</c> or
            /// <c>ROLLBACK</c>, the following rule applies to scale-in activities: When the lifecycle
            /// hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
            /// lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
            /// the action only after all lifecycle hooks time out. The action that Auto Scaling
            /// performs is specified by the DefaultResult parameter of the last lifecycle hook
            /// that times out.
            /// Default value: CONTINUE.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultResult
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property heartbeatTimeout: The period of time before the lifecycle hook times out.</summary>
            /// <remarks>
            /// When the lifecycle hook
            /// times out, Auto Scaling performs the action that is specified by the
            /// DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
            /// You can call the <a href="">RecordLifecycleActionHeartbeat</a> operation to extend the
            /// period of time before a lifecycle hook times out. You can also call the
            /// <a href="">CompleteLifecycleAction</a> operation to end a lifecycle hook ahead of schedule.
            /// Default value: 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "heartbeatTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HeartbeatTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lifecycleHookName: The name of the lifecycle hook.</summary>
            /// <remarks>
            /// Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
            /// Default value: Lifecycle Hook ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycleHookName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LifecycleHookName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.</summary>
            /// <remarks>
            /// If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
            ///
            /// <list type="bullet">
            /// <description>If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.</description>
            /// <description>If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.</description>
            /// <description>If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.</description>
            /// <description>If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.</description>
            /// </list>
            ///
            /// The variables in the preceding value formats have the following meanings:
            ///
            /// <list type="bullet">
            /// <description>region-id: the region ID of your scaling group.</description>
            /// <description>account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.</description>
            /// <description>queuename: the name of the SMQ queue.</description>
            /// <description>topicname: the name of the SMQ topic.</description>
            /// <description>templatename: the name of the OOS template.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotificationArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.</summary>
            /// <remarks>
            /// Auto Scaling sends the value of the
            /// NotificationMetadata parameter together with the notification. This helps you
            /// categorize your notifications. If you specify this parameter, you must also
            /// specify the <c>NotificationArn</c> parameter. The value of this parameter cannot
            /// exceed 4,096 characters in length.
            /// If you use the <c>NotificationArn</c> parameter to specify a public or custom OOS
            /// template, the value of the <c>NotificationMetadata</c> parameter must be a JSON string
            /// that contains the OOS template parameters.
            /// For example, your OOS template includes the following parameters:
            /// <c>{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}</c>,
            /// <c>dbInstanceId</c>, and <c>modifyMode</c>. Specific parameters that are defined in your
            /// OOS template have default values. When you specify the <c>NotificationMetadata</c>
            /// parameter, specify parameters that do not have default values. If you specify
            /// parameters that have default values, the default values are overwritten. The
            /// default values of the following parameters must be retained to obtain information
            /// about scaling activities that are in progress:
            ///
            /// <list type="bullet">
            /// <description>regionId: the region ID of the scaling activity that is in progress. Default
            /// value: ${regionId}.</description>
            /// <description>instanceIds: the IDs of ECS instances that are scaled in the scaling
            /// activity. Default value: ${instanceIds}.</description>
            /// <description>lifecycleHookId: the ID of the lifecycle hook. Default value:
            /// ${lifecycleHookId}.</description>
            /// <description>lifecycleActionToken: the token of the lifecycle hook. You can use the token
            /// to end the timeout period of the lifecycle hook ahead of schedule. Default value:
            /// ${lifecycleActionToken}</description>
            /// <description>scalingGroupId: the ID of the scaling group in which the scaling activity is
            /// executed. Default value: ${scalingGroupId}.</description>
            /// <description>lifecycleActionResult: the action that Auto Scaling performs after the
            /// lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
            /// hook times out ahead of schedule. If you set the <c>DefalutResult</c> parameter to
            /// <c>ROLLBACK</c>, the default value of this parameter is <c>ROLLBACK</c>. If you set the
            /// <c>DefaultResult</c> parameter to other values, the default value of this parameter is
            /// ABANDON.
            /// Note**</description>
            /// <description>You can specify a value for the <c>lifecycleActionResult</c> parameter to
            /// overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
            /// ${lifecycleActionResult}. A value of <c>${lifecycleActionResult}</c> specifies that
            /// the value of the lifecycleActionResult parameter is the same as the value of the
            /// DefaultResult parameter.</description>
            /// <description>You can view the details of the OOS template that you specify in the OOS
            /// console.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationMetadata", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotificationMetadata
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

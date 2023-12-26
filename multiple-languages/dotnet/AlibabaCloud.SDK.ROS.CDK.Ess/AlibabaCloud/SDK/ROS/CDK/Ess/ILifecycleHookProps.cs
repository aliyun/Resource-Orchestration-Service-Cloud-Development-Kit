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

        /// <summary>Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.</summary>
        /// <remarks>
        /// Value range:
        /// CONTINUE: the scaling group continues with the scale-in or scale-out process.
        /// ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        /// Default value: CONTINUE
        /// If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
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

        /// <summary>Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.</summary>
        /// <remarks>
        /// If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
        /// You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
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

        /// <summary>Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.</summary>
        /// <remarks>
        /// This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        /// region: the region to which the scaling group locates
        /// account-id: Alibaba Cloud ID
        /// For example:
        /// MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        /// MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        /// OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
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

        /// <summary>Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.</summary>
        /// <remarks>
        /// The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
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

            /// <summary>Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.</summary>
            /// <remarks>
            /// Value range:
            /// CONTINUE: the scaling group continues with the scale-in or scale-out process.
            /// ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
            /// Default value: CONTINUE
            /// If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultResult
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.</summary>
            /// <remarks>
            /// If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
            /// You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
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

            /// <summary>Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.</summary>
            /// <remarks>
            /// This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
            /// region: the region to which the scaling group locates
            /// account-id: Alibaba Cloud ID
            /// For example:
            /// MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
            /// MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
            /// OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotificationArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.</summary>
            /// <remarks>
            /// The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
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

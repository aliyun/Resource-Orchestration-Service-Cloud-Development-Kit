using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>A ROS template type:  `ALIYUN::ESS::ScalingGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosScalingGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ESS::ScalingGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosScalingGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingGroupId: Scaling group Id
        /// </remarks>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "maxSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double MaxSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "minSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double MinSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DbInstanceIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        /// The default value is 300s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultCooldown", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? DefaultCooldown
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "desiredCapacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? DesiredCapacity
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: groupDeletionProtection: Whether to enable deletion protection for scaling group.
        /// Default to False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? GroupDeletionProtection
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HealthCheckType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LaunchTemplateId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template. Valid values:
        /// A fixed template version numbe.
        /// Default: The default template version is always used.
        /// Latest: The latest template version is always used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LaunchTemplateVersion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LoadBalancerIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
        /// 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        /// 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MultiAzPolicy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? NotificationConfigurations
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protectedInstances: ECS instances of protected mode in the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ProtectedInstances
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: removalPolicys: Policy for removing ECS instances from the scaling group.
        /// Optional values:
        /// OldestInstance: removes the first ECS instance attached to the scaling group.
        /// NewestInstance: removes the first ECS instance attached to the scaling group.
        /// OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        /// Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RemovalPolicys
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        /// If this parameter is not specified, the default value is ScalingGroupId.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ScalingGroupName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: standbyInstances: ECS instances of standby mode in the scaling group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StandbyInstances
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        /// The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC.
        /// The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority.
        /// When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VSwitchIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(INotificationConfigurationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty")]
        public interface INotificationConfigurationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
            /// region: the region to which the scaling group locates
            /// account-id: Alibaba Cloud ID
            /// For example:
            /// MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
            /// MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
            /// Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
            /// </remarks>
            [JsiiProperty(name: "notificationArn", typeJson: "{\"primitive\":\"string\"}")]
            string NotificationArn
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationTypes: Ess events and resource change notification types. Possible values:
            /// AUTOSCALING:SCALE_OUT_SUCCESS
            /// AUTOSCALING:SCALE_IN_SUCCESS
            /// AUTOSCALING:SCALE_OUT_ERROR
            /// AUTOSCALING:SCALE_IN_ERROR
            /// AUTOSCALING:SCALE_REJECT
            /// AUTOSCALING:SCALE_OUT_START
            /// AUTOSCALING:SCALE_IN_START
            /// AUTOSCALING:SCHEDULE_TASK_EXPIRING
            /// </remarks>
            [JsiiProperty(name: "notificationTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object NotificationTypes
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(INotificationConfigurationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.INotificationConfigurationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
                /// region: the region to which the scaling group locates
                /// account-id: Alibaba Cloud ID
                /// For example:
                /// MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
                /// MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
                /// Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
                /// </remarks>
                [JsiiProperty(name: "notificationArn", typeJson: "{\"primitive\":\"string\"}")]
                public string NotificationArn
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: notificationTypes: Ess events and resource change notification types. Possible values:
                /// AUTOSCALING:SCALE_OUT_SUCCESS
                /// AUTOSCALING:SCALE_IN_SUCCESS
                /// AUTOSCALING:SCALE_OUT_ERROR
                /// AUTOSCALING:SCALE_IN_ERROR
                /// AUTOSCALING:SCALE_REJECT
                /// AUTOSCALING:SCALE_OUT_START
                /// AUTOSCALING:SCALE_IN_START
                /// AUTOSCALING:SCHEDULE_TASK_EXPIRING
                /// </remarks>
                [JsiiProperty(name: "notificationTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object NotificationTypes
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty")]
        public class NotificationConfigurationsProperty : AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroup.INotificationConfigurationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
            /// region: the region to which the scaling group locates
            /// account-id: Alibaba Cloud ID
            /// For example:
            /// MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
            /// MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
            /// Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
            /// </remarks>
            [JsiiProperty(name: "notificationArn", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string NotificationArn
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationTypes: Ess events and resource change notification types. Possible values:
            /// AUTOSCALING:SCALE_OUT_SUCCESS
            /// AUTOSCALING:SCALE_IN_SUCCESS
            /// AUTOSCALING:SCALE_OUT_ERROR
            /// AUTOSCALING:SCALE_IN_ERROR
            /// AUTOSCALING:SCALE_REJECT
            /// AUTOSCALING:SCALE_OUT_START
            /// AUTOSCALING:SCALE_IN_START
            /// AUTOSCALING:SCHEDULE_TASK_EXPIRING
            /// </remarks>
            [JsiiProperty(name: "notificationTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object NotificationTypes
            {
                get;
                set;
            }
        }
    }
}

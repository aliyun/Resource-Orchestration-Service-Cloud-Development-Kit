using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupProps")]
    public interface IScalingGroupProps
    {
        /// <summary>Property maxSize: Maximum number of ECS instances in the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "maxSize", typeJson: "{\"primitive\":\"number\"}")]
        double MaxSize
        {
            get;
        }

        /// <summary>Property minSize: Minimum number of ECS instances in the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 1000].
        /// </remarks>
        [JsiiProperty(name: "minSize", typeJson: "{\"primitive\":\"number\"}")]
        double MinSize
        {
            get;
        }

        /// <summary>Property dbInstanceIds: ID list of an RDS instance.</summary>
        /// <remarks>
        /// A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.</summary>
        /// <remarks>
        /// Value range: [0, 86400].
        /// The default value is 300s.
        /// </remarks>
        [JsiiProperty(name: "defaultCooldown", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? DefaultCooldown
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property desiredCapacity: The expected number of ECS instances in a scaling group.</summary>
        /// <remarks>
        /// The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        /// </remarks>
        [JsiiProperty(name: "desiredCapacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? DesiredCapacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupDeletionProtection: Whether to enable deletion protection for scaling group.</summary>
        /// <remarks>
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupDeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckType: The health check type.</summary>
        /// <remarks>
        /// Allow values is "ECS" and "NONE", default to "ECS".
        /// </remarks>
        [JsiiProperty(name: "healthCheckType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.</summary>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LaunchTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateVersion: The version of the instance launch template.</summary>
        /// <remarks>
        /// Valid values:
        /// A fixed template version numbe.
        /// Default: The default template version is always used.
        /// Latest: The latest template version is always used.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LaunchTemplateVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerIds: ID list of a Server Load Balancer instance.</summary>
        /// <remarks>
        /// A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiAzPolicy: ECS scaling strategy for multi availability zone.</summary>
        /// <remarks>
        /// Allow value:
        /// 
        /// <list type="number">
        /// <description>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</description>
        /// <description>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MultiAzPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.</summary>
        [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationConfigurations
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protectedInstances: ECS instances of protected mode in the scaling group.</summary>
        [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectedInstances
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property removalPolicys: Policy for removing ECS instances from the scaling group.</summary>
        /// <remarks>
        /// Optional values:
        /// OldestInstance: removes the first ECS instance attached to the scaling group.
        /// NewestInstance: removes the first ECS instance attached to the scaling group.
        /// OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        /// Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        /// </remarks>
        [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemovalPolicys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).</summary>
        /// <remarks>
        /// The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        /// If this parameter is not specified, the default value is ScalingGroupId.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ScalingGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property standbyInstances: ECS instances of standby mode in the scaling group.</summary>
        [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyInstances
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.</summary>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property maxSize: Maximum number of ECS instances in the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 1000].
            /// </remarks>
            [JsiiProperty(name: "maxSize", typeJson: "{\"primitive\":\"number\"}")]
            public double MaxSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property minSize: Minimum number of ECS instances in the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 1000].
            /// </remarks>
            [JsiiProperty(name: "minSize", typeJson: "{\"primitive\":\"number\"}")]
            public double MinSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property dbInstanceIds: ID list of an RDS instance.</summary>
            /// <remarks>
            /// A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.</summary>
            /// <remarks>
            /// Value range: [0, 86400].
            /// The default value is 300s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultCooldown", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? DefaultCooldown
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property desiredCapacity: The expected number of ECS instances in a scaling group.</summary>
            /// <remarks>
            /// The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desiredCapacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? DesiredCapacity
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property groupDeletionProtection: Whether to enable deletion protection for scaling group.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupDeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckType: The health check type.</summary>
            /// <remarks>
            /// Allow values is "ECS" and "NONE", default to "ECS".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LaunchTemplateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property launchTemplateVersion: The version of the instance launch template.</summary>
            /// <remarks>
            /// Valid values:
            /// A fixed template version numbe.
            /// Default: The default template version is always used.
            /// Latest: The latest template version is always used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LaunchTemplateVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property loadBalancerIds: ID list of a Server Load Balancer instance.</summary>
            /// <remarks>
            /// A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiAzPolicy: ECS scaling strategy for multi availability zone.</summary>
            /// <remarks>
            /// Allow value:
            /// 
            /// <list type="number">
            /// <description>PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.</description>
            /// <description>BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MultiAzPolicy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "notificationConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NotificationConfigurations
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protectedInstances: ECS instances of protected mode in the scaling group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protectedInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectedInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property removalPolicys: Policy for removing ECS instances from the scaling group.</summary>
            /// <remarks>
            /// Optional values:
            /// OldestInstance: removes the first ECS instance attached to the scaling group.
            /// NewestInstance: removes the first ECS instance attached to the scaling group.
            /// OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
            /// Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "removalPolicys", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemovalPolicys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).</summary>
            /// <remarks>
            /// The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
            /// If this parameter is not specified, the default value is ScalingGroupId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ScalingGroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property standbyInstances: ECS instances of standby mode in the scaling group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "standbyInstances", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyInstances
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

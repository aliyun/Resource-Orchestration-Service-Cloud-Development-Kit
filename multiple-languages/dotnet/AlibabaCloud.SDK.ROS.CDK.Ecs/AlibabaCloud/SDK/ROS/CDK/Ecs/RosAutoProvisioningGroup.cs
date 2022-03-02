using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAutoProvisioningGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECS::AutoProvisioningGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAutoProvisioningGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAutoProvisioningGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAutoProvisioningGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAutoProvisioningGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AutoProvisioningGroupId: The ID of the auto provisioning group.
        /// </remarks>
        [JsiiProperty(name: "attrAutoProvisioningGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAutoProvisioningGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AutoProvisioningGroupName: The name of the auto provisioning group.
        /// </remarks>
        [JsiiProperty(name: "attrAutoProvisioningGroupName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAutoProvisioningGroupName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
        /// of the following three parts:
        /// The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
        /// The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
        /// The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
        /// </remarks>
        [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TotalTargetCapacity
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
        /// in length. It must start with a letter but cannot start with http:// or https://.
        /// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoProvisioningGroupName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupType: The type of the auto provisioning group. Valid values:
        /// request: One-time delivery. After the auto provisioning group is started, it only attempts
        /// to create an instance cluster once. If the cluster fails to be created, the group
        /// does not try again.
        /// maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
        /// is started, it continuously attempts to create and maintain the instance cluster.
        /// The auto provisioning group compares the real-time and target capacity of the cluster.
        /// If the cluster does not meet the target capacity, the group will create instances
        /// until the cluster meets the target capacity.
        /// Default value: maintain
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoProvisioningGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoProvisioningGroupType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "checkExecutionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CheckExecutionStatus
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
        /// the capacity requirements. Valid values:
        /// PayAsYouGo: Pay-as-you-go instances.
        /// Spot: Preemptible instances.
        /// Default value: Spot
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultTargetCapacityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DefaultTargetCapacityType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
        /// the auto provisioning group exceeds the target capacity. Valid values:
        /// no-termination: Excess preemptible instances are not shut down.
        /// termination: Excess preemptible instances are to be shut down. The action to be performed on these
        /// shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
        /// Default value: no-termination
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "excessCapacityTerminationPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ExcessCapacityTerminationPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchConfiguration:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? LaunchConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateConfig:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? LaunchTemplateConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
        /// You can call the DescribeLaunchTemplates operation to query available instance launch templates.
        /// An auto provisioning group can be associated with only one instance launch template.
        /// But you can configure multiple extended configurations for the launch template through
        /// the LaunchTemplateConfig parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LaunchTemplateId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
        /// group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LaunchTemplateVersion
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
        /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MaxSpotPrice
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// prioritized: The priority-based policy the auto provisioning group follows to create instances.
        /// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
        /// Default value: lowest-price
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payAsYouGoAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PayAsYouGoAllocationStrategy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PayAsYouGoTargetCapacity
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// diversified: The distribution balancing policy the auto provisioning group follows to evenly create
        /// instances across zones specified in multiple extended template configurations.
        /// Default value: lowest-price
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotAllocationStrategy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
        /// stop: stops preemptible instances.
        /// terminate: releases preemptible instances.
        /// Default value: stop
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotInstanceInterruptionBehavior
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
        /// instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotInstancePoolsToUseCount
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotTargetCapacity
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
        /// true
        /// false
        /// Default: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TerminateInstances
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
        /// Valid values:
        /// true: shuts down preemptible instances. The action to be performed on these shutdown instances
        /// is specified by the SpotInstanceInterruptionBehavior parameter.
        /// false: does not shut down preemptible instances.
        /// Default: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TerminateInstancesWithExpiration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: validFrom: The time when the auto provisioning group is started. The period of time between this
        /// point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group is immediately started after creation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "validFrom", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ValidFrom
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: validUntil: The time when the auto provisioning group expires. The period of time between this
        /// point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group never expires.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "validUntil", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ValidUntil
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDataDiskProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty")]
        public interface IDataDiskProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The category of data disk. Valid values:
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// cloud_essd: ESSD
            /// cloud: basic disk
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Category
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteWithInstance: Specifies whether to release data disk when the instance is released. Default value: true
            /// </remarks>
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DeleteWithInstance
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DiskName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt data disk. Default value: false
            /// </remarks>
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Encrypted
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
            /// PayByBandwidth
            /// PayByTraffic
            /// </remarks>
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetChargeType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key to be used by data disk
            /// </remarks>
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KmsKeyId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the ESSD used as data disk. Default value: PL1. Valid values:
            /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PerformanceLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of data disk
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Size
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: The ID of the snapshot used to create data disk
            /// </remarks>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SnapshotId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDataDiskProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IDataDiskProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The category of data disk. Valid values:
                /// cloud_efficiency: ultra disk
                /// cloud_ssd: standard SSD
                /// cloud_essd: ESSD
                /// cloud: basic disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Category
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: deleteWithInstance: Specifies whether to release data disk when the instance is released. Default value: true
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DeleteWithInstance
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DiskName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encrypted: Specifies whether to encrypt data disk. Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Encrypted
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
                /// PayByBandwidth
                /// PayByTraffic
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetChargeType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key to be used by data disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KmsKeyId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: performanceLevel: The performance level of the ESSD used as data disk. Default value: PL1. Valid values:
                /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
                /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
                /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
                /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PerformanceLevel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: size: The size of data disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Size
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: snapshotId: The ID of the snapshot used to create data disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SnapshotId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty")]
        public class DataDiskProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.IDataDiskProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The category of data disk. Valid values:
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// cloud_essd: ESSD
            /// cloud: basic disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteWithInstance: Specifies whether to release data disk when the instance is released. Default value: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteWithInstance
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt data disk. Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
            /// PayByBandwidth
            /// PayByTraffic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The ID of the KMS key to be used by data disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the ESSD used as data disk. Default value: PL1. Valid values:
            /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PerformanceLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of data disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Size
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: The ID of the snapshot used to create data disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ILaunchConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty")]
        public interface ILaunchConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: imageId: Image ID.
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ImageId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SecurityGroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: creditSpecification: The performance mode of the burstable instance. Valid values:
            /// Standard: the standard mode. For more information, see the "Standard mode" section of the Burstable instances topic.
            /// Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section of the Burstable instances topic.
            /// </remarks>
            [JsiiProperty(name: "creditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CreditSpecification
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDisk: Data disk
            /// </remarks>
            [JsiiProperty(name: "dataDisk", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataDisk
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The hostname of the instance.
            /// </remarks>
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HostName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceDescription: The description of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceDescription
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
            /// PayByBandwidth
            /// PayByTraffic
            /// </remarks>
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetChargeType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthIn: The maximum inbound public bandwidth.
            /// </remarks>
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetMaxBandwidthIn
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100. Default value: 0.
            /// </remarks>
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetMaxBandwidthOut
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
            /// none: The instance is not I/O optimized.
            /// optimized: The instance is I/O optimized.
            /// </remarks>
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IoOptimized
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: The name of the key pair to be bound to the instance.
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KeyPairName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: passwordInherit: Specifies whether to use the password preset in the image.
            /// </remarks>
            [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PasswordInherit
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ramRoleName: The name of the RAM role.
            /// </remarks>
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RamRoleName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which to assign the instance.
            /// </remarks>
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceGroupId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
            /// Active: Security hardening is enabled. This value is applicable only to public images.
            /// Deactive: Security hardening is disabled. This value is applicable to all image types.
            /// </remarks>
            [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SecurityEnhancementStrategy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// cloud_essd: enhanced SSD (ESSD)
            /// cloud: basic disk
            /// </remarks>
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskCategory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskDescription
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "systemDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the ESSD used as the system disk. Default value: PL0. Valid values:
            /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskPerformanceLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: The size of the system disk. Unit: GiB. Valid values: 20 to 500.
            /// </remarks>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tag:
            /// </remarks>
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Tag
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: userData: The user data of the instance.
            /// </remarks>
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserData
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILaunchConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: imageId: Image ID.
                /// </remarks>
                [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ImageId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroupId: Security group ID.
                /// </remarks>
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SecurityGroupId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: creditSpecification: The performance mode of the burstable instance. Valid values:
                /// Standard: the standard mode. For more information, see the "Standard mode" section of the Burstable instances topic.
                /// Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section of the Burstable instances topic.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "creditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CreditSpecification
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dataDisk: Data disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataDisk", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? DataDisk
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostName: The hostname of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HostName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceDescription: The description of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceDescription
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceName: The name of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
                /// PayByBandwidth
                /// PayByTraffic
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetChargeType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetMaxBandwidthIn: The maximum inbound public bandwidth.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetMaxBandwidthIn
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100. Default value: 0.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetMaxBandwidthOut
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
                /// none: The instance is not I/O optimized.
                /// optimized: The instance is I/O optimized.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IoOptimized
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: keyPairName: The name of the key pair to be bound to the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KeyPairName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: passwordInherit: Specifies whether to use the password preset in the image.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PasswordInherit
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ramRoleName: The name of the RAM role.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RamRoleName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which to assign the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ResourceGroupId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
                /// Active: Security hardening is enabled. This value is applicable only to public images.
                /// Deactive: Security hardening is disabled. This value is applicable to all image types.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SecurityEnhancementStrategy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
                /// cloud_efficiency: ultra disk
                /// cloud_ssd: standard SSD
                /// cloud_essd: enhanced SSD (ESSD)
                /// cloud: basic disk
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskCategory
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskDescription
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the ESSD used as the system disk. Default value: PL0. Valid values:
                /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
                /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
                /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
                /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskPerformanceLevel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskSize: The size of the system disk. Unit: GiB. Valid values: 20 to 500.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tag:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Tag
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userData: The user data of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserData
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty")]
        public class LaunchConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: imageId: Image ID.
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: creditSpecification: The performance mode of the burstable instance. Valid values:
            /// Standard: the standard mode. For more information, see the "Standard mode" section of the Burstable instances topic.
            /// Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section of the Burstable instances topic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreditSpecification
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDisk: Data disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDisk", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.DataDiskProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DataDisk
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The hostname of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceDescription: The description of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceDescription
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
            /// PayByBandwidth
            /// PayByTraffic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthIn: The maximum inbound public bandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthIn
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100. Default value: 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthOut
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
            /// none: The instance is not I/O optimized.
            /// optimized: The instance is I/O optimized.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: The name of the key pair to be bound to the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: passwordInherit: Specifies whether to use the password preset in the image.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordInherit
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ramRoleName: The name of the RAM role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RamRoleName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which to assign the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
            /// Active: Security hardening is enabled. This value is applicable only to public images.
            /// Deactive: Security hardening is disabled. This value is applicable to all image types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityEnhancementStrategy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// cloud_essd: enhanced SSD (ESSD)
            /// cloud: basic disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskCategory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskDescription
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the ESSD used as the system disk. Default value: PL0. Valid values:
            /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskPerformanceLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: The size of the system disk. Unit: GiB. Valid values: 20 to 500.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskSize
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tag:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userData: The user data of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserData
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ILaunchTemplateConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty")]
        public interface ILaunchTemplateConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch in the Nth extended configurations of the launch template.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object VSwitchId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the Nth extended configurations of the launch template.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxPrice: The maximum price of the instance type specified in the Nth extended configurations
            /// of the launch template.
            /// </remarks>
            [JsiiProperty(name: "maxPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxPrice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the instance type specified in the Nth extended configurations of
            /// the launch template. A value of 0 indicates the highest priority.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Priority
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: weightedCapacity: The weight of the instance type specified in the Nth extended configurations of the
            /// launch template.
            /// The weight is calculated based on the computing power of a specified instance type
            /// and the minimum computing power of a single node of the cluster. A greater weight
            /// indicates that the instance has more computing power, and as a result fewer instances
            /// are required.
            /// For example, when the minimum computing power of a single node is 8 vCPUs and 60 GiB
            /// of memory, the weight of the instance type with 8 vCPUs and 60 GiB of memory is 1,
            /// and the weight of the instance type with 16 vCPUs and 120 GiB of memory is 2.
            /// </remarks>
            [JsiiProperty(name: "weightedCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WeightedCapacity
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILaunchTemplateConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchTemplateConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch in the Nth extended configurations of the launch template.
                /// </remarks>
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object VSwitchId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the Nth extended configurations of the launch template.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxPrice: The maximum price of the instance type specified in the Nth extended configurations
                /// of the launch template.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxPrice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: priority: The priority of the instance type specified in the Nth extended configurations of
                /// the launch template. A value of 0 indicates the highest priority.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Priority
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: weightedCapacity: The weight of the instance type specified in the Nth extended configurations of the
                /// launch template.
                /// The weight is calculated based on the computing power of a specified instance type
                /// and the minimum computing power of a single node of the cluster. A greater weight
                /// indicates that the instance has more computing power, and as a result fewer instances
                /// are required.
                /// For example, when the minimum computing power of a single node is 8 vCPUs and 60 GiB
                /// of memory, the weight of the instance type with 8 vCPUs and 60 GiB of memory is 1,
                /// and the weight of the instance type with 16 vCPUs and 120 GiB of memory is 2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "weightedCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WeightedCapacity
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty")]
        public class LaunchTemplateConfigProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ILaunchTemplateConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch in the Nth extended configurations of the launch template.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the Nth extended configurations of the launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxPrice: The maximum price of the instance type specified in the Nth extended configurations
            /// of the launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxPrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxPrice
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the instance type specified in the Nth extended configurations of
            /// the launch template. A value of 0 indicates the highest priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: weightedCapacity: The weight of the instance type specified in the Nth extended configurations of the
            /// launch template.
            /// The weight is calculated based on the computing power of a specified instance type
            /// and the minimum computing power of a single node of the cluster. A greater weight
            /// indicates that the instance has more computing power, and as a result fewer instances
            /// are required.
            /// For example, when the minimum computing power of a single node is 8 vCPUs and 60 GiB
            /// of memory, the weight of the instance type with 8 vCPUs and 60 GiB of memory is 1,
            /// and the weight of the instance type with 16 vCPUs and 120 GiB of memory is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "weightedCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WeightedCapacity
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.TagProperty")]
        public interface ITagProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The tag key of the instance.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The tag value of the instance.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.TagProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ITagProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The tag key of the instance.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The tag value of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.TagProperty")]
        public class TagProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoProvisioningGroup.ITagProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The tag key of the instance.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The tag value of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
    }
}

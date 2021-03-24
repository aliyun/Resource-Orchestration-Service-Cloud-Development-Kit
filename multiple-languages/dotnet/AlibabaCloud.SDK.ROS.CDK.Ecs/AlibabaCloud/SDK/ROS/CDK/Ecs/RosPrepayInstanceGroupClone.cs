using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS template type:  `ALIYUN::ECS::PrepayInstanceGroupClone`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupCloneProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosPrepayInstanceGroupClone : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosPrepayInstanceGroupClone(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosPrepayInstanceGroupCloneProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPrepayInstanceGroupClone(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPrepayInstanceGroupClone(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone))!;

        /// <remarks>
        /// <strong>Attribute</strong>: HostNames: Host names of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrHostNames", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostNames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InnerIps: Inner IP address list of the specified instance. Only for classical instance.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceIds: The instance id list of created ecs instance
        /// </remarks>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: The order id list of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicIps: Public IP address list of created ecs instance.
        /// </remarks>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RelatedOrderIds: The related order id list of created ecs instances
        /// </remarks>
        [JsiiProperty(name: "attrRelatedOrderIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRelatedOrderIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ZoneIds: Zone id of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrZoneIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneIds
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
        /// <strong>Property</strong>: maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
        /// </remarks>
        [JsiiProperty(name: "maxAmount", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double MaxAmount
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
        /// </remarks>
        [JsiiProperty(name: "minAmount", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double MinAmount
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Period
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: Charge period for created instances.
        /// </remarks>
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PeriodType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string SourceInstanceId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AutoRenew
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? AutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DeploymentSetId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance. Max support 16 disks.
        /// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? DiskMappings
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eniMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? EniMappings
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HpcClusterId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ImageId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? InternetMaxBandwidthIn
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? InternetMaxBandwidthOut
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KeyPairName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LaunchTemplateId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LaunchTemplateName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LaunchTemplateVersion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Password
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PasswordInherit
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PeriodUnit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RamRoleName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityGroupIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SystemDiskAutoSnapshotPolicyId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SystemDiskCategory
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDescription: Description of created system disk.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SystemDiskDescription
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDiskName: Name of created system disk.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SystemDiskDiskName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone to which the instance belongs. For more information, 
        /// call the DescribeZones operation to query the most recent zone list. 
        /// Default value is empty, which means random selection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDiskMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty")]
        public interface IDiskMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"string\"}")]
            string Size
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
            /// </remarks>
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? AutoSnapshotPolicyId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Category
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
            /// </remarks>
            [JsiiProperty(name: "device", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Device
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
            /// </remarks>
            [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DiskName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Whether the data disk is encrypted or not. Options:
            /// true: Encrypted.
            /// false: Not encrypted.
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "encrypted", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Encrypted
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The KMS key ID for the data disk.
            /// </remarks>
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? KmsKeyId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PerformanceLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
            /// </remarks>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SnapshotId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDiskMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone.IDiskMappingsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
                /// </remarks>
                [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"string\"}")]
                public string Size
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? AutoSnapshotPolicyId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Category
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "device", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Device
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DiskName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encrypted: Whether the data disk is encrypted or not. Options:
                /// true: Encrypted.
                /// false: Not encrypted.
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encrypted", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Encrypted
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: kmsKeyId: The KMS key ID for the data disk.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? KmsKeyId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PerformanceLevel
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SnapshotId
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty")]
        public class DiskMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone.IDiskMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Size
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: Auto snapshot policy ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? AutoSnapshotPolicyId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "device", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Device
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DiskName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Whether the data disk is encrypted or not. Options:
            /// true: Encrypted.
            /// false: Not encrypted.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Encrypted
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The KMS key ID for the data disk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? KmsKeyId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PerformanceLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SnapshotId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IEniMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty")]
        public interface IEniMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            string SecurityGroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            string VSwitchId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NetworkInterfaceName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
            /// </remarks>
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PrimaryIpAddress
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEniMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone.IEniMappingsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
                /// </remarks>
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
                public string SecurityGroupId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
                /// </remarks>
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
                public string VSwitchId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NetworkInterfaceName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PrimaryIpAddress
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty")]
        public class EniMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosPrepayInstanceGroupClone.IEniMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VSwitchId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NetworkInterfaceName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PrimaryIpAddress
            {
                get;
                set;
            }
        }
    }
}

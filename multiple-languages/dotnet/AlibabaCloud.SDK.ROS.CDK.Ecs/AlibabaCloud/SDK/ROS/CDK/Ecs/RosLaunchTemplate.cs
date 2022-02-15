using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS template type:  `ALIYUN::ECS::LaunchTemplate`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplateProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosLaunchTemplate : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECS::LaunchTemplate`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosLaunchTemplate(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosLaunchTemplateProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLaunchTemplate(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLaunchTemplate(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DefaultVersionNumber: The default version number of launch template.
        /// </remarks>
        [JsiiProperty(name: "attrDefaultVersionNumber", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDefaultVersionNumber
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LatestVersionNumber: The latest version number of launch template.
        /// </remarks>
        [JsiiProperty(name: "attrLatestVersionNumber", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLatestVersionNumber
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LaunchTemplateId: The id of launch template.
        /// </remarks>
        [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLaunchTemplateId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LaunchTemplateName: The name of launch template.
        /// </remarks>
        [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLaunchTemplateName
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
        /// <strong>Property</strong>: launchTemplateName: The name of launch template.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LaunchTemplateName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoReleaseTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the instance, [2, 256] characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance. Max support 16 disks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? DiskMappings
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? HostName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ImageId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Ecs instance supported instance type, make sure it should be correct.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetChargeType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second). The range is [1,200].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetMaxBandwidthIn
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetMaxBandwidthOut
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IoOptimized
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? KeyPairName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaces: Elastic network interfaces to be attached to instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkInterfaces", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.NetworkInterfacesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? NetworkInterfaces
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: Instance network type. Support 'vpc' and 'classic'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NetworkType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RamRoleName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityEnhancementStrategy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityGroupId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotPriceLimit
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpotStrategy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SystemDiskCategory
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDescription: Description of created system disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SystemDiskDescription
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDiskName: Name of created system disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SystemDiskDiskName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SystemDiskSize
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance, security group, disk and network interface.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITagsProperty[]? Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITagsProperty[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: templateTags: Template tags to attach to launch template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateTags", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.TemplateTagsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? TemplateTags
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UserData
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: versionDescription: Description for version 1 of launch template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VersionDescription
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VSwitchId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Current zone to create the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ZoneId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDiskMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.DiskMappingsProperty")]
        public interface IDiskMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
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
            /// <strong>Property</strong>: deleteWithInstance: Whether data disk should be released with instance.
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
            /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters.
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
            /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
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
            /// <strong>Property</strong>: encrypted: Whether data disk is encrypted.
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
            /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768] ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Size
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
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

            [JsiiTypeProxy(nativeType: typeof(IDiskMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.DiskMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.IDiskMappingsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Category
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: deleteWithInstance: Whether data disk should be released with instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DeleteWithInstance
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DiskName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encrypted: Whether data disk is encrypted.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Encrypted
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768] ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Size
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SnapshotId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.DiskMappingsProperty")]
        public class DiskMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.IDiskMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteWithInstance: Whether data disk should be released with instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteWithInstance
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the disk, [2, 256] characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Whether data disk is encrypted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768] ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Size
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: ID of the snapshot to create the volume.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(INetworkInterfacesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.NetworkInterfacesProperty")]
        public interface INetworkInterfacesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
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
            /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NetworkInterfaceName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.
            /// </remarks>
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PrimaryIpAddress
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SecurityGroupId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VSwitchId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INetworkInterfacesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.NetworkInterfacesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.INetworkInterfacesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NetworkInterfaceName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PrimaryIpAddress
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SecurityGroupId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? VSwitchId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.NetworkInterfacesProperty")]
        public class NetworkInterfacesProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.INetworkInterfacesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryIpAddress: The primary private IP address of the ENI.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimaryIpAddress
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID of the specified VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
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

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITemplateTagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TemplateTagsProperty")]
        public interface ITemplateTagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
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

            [JsiiTypeProxy(nativeType: typeof(ITemplateTagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TemplateTagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITemplateTagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosLaunchTemplate.TemplateTagsProperty")]
        public class TemplateTagsProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITemplateTagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
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

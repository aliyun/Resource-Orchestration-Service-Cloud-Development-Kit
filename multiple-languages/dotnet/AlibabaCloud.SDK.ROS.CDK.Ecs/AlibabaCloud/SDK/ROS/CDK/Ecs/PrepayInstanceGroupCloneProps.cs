using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::PrepayInstanceGroupClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.PrepayInstanceGroupCloneProps")]
    public class PrepayInstanceGroupCloneProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IPrepayInstanceGroupCloneProps
    {
        /// <summary>Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.</summary>
        [JsiiProperty(name: "maxAmount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double MaxAmount
        {
            get;
            set;
        }

        /// <summary>Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.</summary>
        [JsiiProperty(name: "minAmount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double MinAmount
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Period
        {
            get;
            set;
        }

        /// <summary>Property periodType: Charge period for created instances.</summary>
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PeriodType
        {
            get;
            set;
        }

        /// <summary>Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.</summary>
        /// <remarks>
        /// It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceInstanceId
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Whether renew the fee automatically?</summary>
        /// <remarks>
        /// When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
        /// <remarks>
        /// When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property deploymentSetId: Deployment set ID.</summary>
        /// <remarks>
        /// The change of the property does not affect existing instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DeploymentSetId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the instance, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty. Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property diskMappings: Disk mappings to attach to instance.</summary>
        /// <remarks>
        /// Max support 16 disks.
        /// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DiskMappings
        {
            get;
            set;
        }

        /// <summary>Property eniMappings: NetworkInterface to attach to instance.</summary>
        /// <remarks>
        /// Max support 1 ENI.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eniMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? EniMappings
        {
            get;
            set;
        }

        /// <summary>Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HpcClusterId
        {
            get;
            set;
        }

        /// <summary>Property imageId: Image ID to create ecs instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageId
        {
            get;
            set;
        }

        /// <summary>Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceName
        {
            get;
            set;
        }

        /// <summary>Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).</summary>
        /// <remarks>
        /// The range is [1,200], default is 200 Mbps.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthIn
        {
            get;
            set;
        }

        /// <summary>Property internetMaxBandwidthOut: Set internet output bandwidth of instance.</summary>
        /// <remarks>
        /// Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: SSH key pair name.Old instances will not be changed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property launchTemplateId: ID of launch template.</summary>
        /// <remarks>
        /// Launch template id or name must be specified to use launch template
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LaunchTemplateId
        {
            get;
            set;
        }

        /// <summary>Property launchTemplateName: Name of launch template.</summary>
        /// <remarks>
        /// Launch template id or name must be specified to use launch template
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LaunchTemplateName
        {
            get;
            set;
        }

        /// <summary>Property launchTemplateVersion: Version of launch template.</summary>
        /// <remarks>
        /// Default version is used if version is not specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LaunchTemplateVersion
        {
            get;
            set;
        }

        /// <summary>Property password: Password of created ecs instance.</summary>
        /// <remarks>
        /// Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <summary>Property passwordInherit: Specifies whether to use the password preset in the image.</summary>
        /// <remarks>
        /// To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PasswordInherit
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: Unit of prepaid time period, it could be Week/Month.</summary>
        /// <remarks>
        /// Default value is Month.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property ramRoleName: Instance RAM role name.</summary>
        /// <remarks>
        /// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RamRoleName
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group to create ecs instance.</summary>
        /// <remarks>
        /// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupIds: The IDs of security groups N to which the instance belongs.</summary>
        /// <remarks>
        /// The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityGroupIds
        {
            get;
            set;
        }

        /// <summary>Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskAutoSnapshotPolicyId
        {
            get;
            set;
        }

        /// <summary>Property systemDiskCategory: Category of system disk.</summary>
        /// <remarks>
        /// Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskCategory
        {
            get;
            set;
        }

        /// <summary>Property systemDiskDescription: Description of created system disk.Old instances will not be changed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskDescription
        {
            get;
            set;
        }

        /// <summary>Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskDiskName
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The ID of the zone to which the instance belongs.</summary>
        /// <remarks>
        /// For more information,
        /// call the DescribeZones operation to query the most recent zone list.
        /// Default value is empty, which means random selection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}

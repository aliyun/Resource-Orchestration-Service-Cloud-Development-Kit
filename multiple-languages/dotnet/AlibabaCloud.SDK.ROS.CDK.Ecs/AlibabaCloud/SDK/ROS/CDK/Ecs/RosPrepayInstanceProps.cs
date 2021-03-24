using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::PrepayInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosPrepayInstanceProps")]
    public class RosPrepayInstanceProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosPrepayInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ecs instance.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Ecs instance supported instance type, make sure it should be correct.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
        /// </remarks>
        [JsiiProperty(name: "maxAmount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double MaxAmount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
        /// </remarks>
        [JsiiProperty(name: "minAmount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double MinAmount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: Charge period for created instances.
        /// </remarks>
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PeriodType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AllocatePublicIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostId: which dedicated host will be deployed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DedicatedHostId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentSetId: Deployment set ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DeploymentSetId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance. Max support 16 disks.
        /// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosPrepayInstance.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DiskMappings
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HostName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hpcClusterId: The HPC cluster ID to which the instance belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HpcClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthIn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: The 'optimized' instance can provide better IO performance. Support true or false, Default is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PasswordInherit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodUnit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RamRoleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityEnhancementStrategy:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityEnhancementStrategy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDescription: Description of created system disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskDiskName: Name of created system disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskDiskName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SystemDiskPerformanceLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? SystemDiskSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserData
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone to which the instance belongs. For more information, 
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

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosScalingConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingConfigurationProps")]
    public interface IRosScalingConfigurationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: Scaling group id to create the scaling configuration.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
        /// - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
        /// - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
        /// Default value: **default**
        /// </remarks>
        [JsiiProperty(name: "affinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Affinity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: The number of vCPUs.
        /// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
        /// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: creditSpecification: The performance mode of the burstable instance. Valid values:
        /// Standard: the standard mode.
        /// Unlimited: the unlimited mode.
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
        /// <strong>Property</strong>: dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
        /// You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentSetId: Deployment set ID.
        /// </remarks>
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentSetId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance.
        /// </remarks>
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskMappings
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
        /// Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
        /// Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
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
        /// <strong>Property</strong>: hpcClusterId: The HPC cluster ID to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HpcClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageFamily: The name of the image family. You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
        /// </remarks>
        [JsiiProperty(name: "imageFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageFamily
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ecs instance .
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageName: The name of the image. Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
        /// You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values:
        /// - **true**
        /// - **false**
        /// Default value: **false**.
        /// </remarks>
        [JsiiProperty(name: "imageOptionsLoginAsNonRoot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageOptionsLoginAsNonRoot
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceDescription: The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance launched from the current scaling configuration.
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
        /// <strong>Property</strong>: instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
        /// </remarks>
        [JsiiProperty(name: "instancePatternInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.InstancePatternInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstancePatternInfos
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: ecs supported instance type.
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
        /// <strong>Property</strong>: instanceTypeOverrides: The instance types.
        /// </remarks>
        [JsiiProperty(name: "instanceTypeOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.InstanceTypeOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypeOverrides
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        /// </remarks>
        [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
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
        /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
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
        /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        /// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        /// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
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
        /// <strong>Property</strong>: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
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
        /// <strong>Property</strong>: ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
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
        /// <strong>Property</strong>: loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
        /// Default value: 50.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerWeight
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: The memory size. Unit: GiB.
        /// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
        /// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
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
        /// <strong>Property</strong>: privatePoolOptions: Option settings for private pools
        /// </remarks>
        [JsiiProperty(name: "privatePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.PrivatePoolOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivatePoolOptions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
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
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
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
        /// <strong>Property</strong>: scalingConfigurationName: Name of created scaling configuration.
        /// </remarks>
        [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingConfigurationName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
        /// - **Active**: enables security hardening. This value is applicable only to public images.
        /// - **Deactive**: disables security hardening. This value is applicable to all image types.
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
        /// <strong>Property</strong>: securityGroupId: Security Group to create ecs instance.
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
        /// <strong>Property</strong>: securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
        /// **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotDuration: The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
        /// The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
        /// If you set this parameter to 0, no protection period is specified for the preemptible instance.
        /// Default value: 1
        /// </remarks>
        [JsiiProperty(name: "spotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
        /// </remarks>
        [JsiiProperty(name: "spotInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotInterruptionBehavior
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        /// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 50 items can be specified.
        /// Key
        /// ecs instance type
        /// Value
        /// Supports a maximum of 3 decimal places.
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimitForInstanceType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotPriceLimitForInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        /// NoSpot: Normal pay-per-use instance
        /// SpotWithPriceLimit: Set a preemptive instance of the cap price
        /// SpotAsPriceGo: System automatic bidding, following the current market actual price
        /// Default: NoSpot.
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        /// </remarks>
        [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskAutoSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
        /// - **true**
        /// - **false**
        /// **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
        /// </remarks>
        [JsiiProperty(name: "systemDiskBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskBurstingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategories: The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
        /// - **cloud**: basic disk
        /// - **cloud_efficiency**: ultra disk
        /// - **cloud_ssd**: standard SSD
        /// - **cloud_essd**: ESSD
        /// **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategories", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskCategories
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
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
        /// <strong>Property</strong>: systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskDiskName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. Valid values:
        /// - **AES-256**
        /// - **SM4-128**
        /// Default value: **AES-256**
        /// </remarks>
        [JsiiProperty(name: "systemDiskEncryptAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskEncryptAlgorithm
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
        /// - **true**
        /// - **false**
        /// Default value: **false**
        /// </remarks>
        [JsiiProperty(name: "systemDiskEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskEncrypted
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
        /// </remarks>
        [JsiiProperty(name: "systemDiskKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskKmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of an ESSD.
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
        /// <strong>Property</strong>: systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
        /// **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
        /// </remarks>
        [JsiiProperty(name: "systemDiskProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: Size of system disk. Unit is GB.
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
        /// <strong>Property</strong>: tagList: The tags of an instance in list format.
        /// Do not use with Tags at the same time.
        /// You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
        /// At most 20 tags can be specified.
        /// Key
        /// It can be up to 64 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:\/\/ or https:\/\/.
        /// Cannot be a null string.
        /// Value
        /// It can be up to 128 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:\/\/ or https:\/\/.
        /// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
        /// </remarks>
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tenancy: Specifies whether to create an ECS instance on a dedicated host. Valid values:
        /// - **default**: does not create an ECS instance on a dedicated host.
        /// - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
        /// Default value: **default**
        /// </remarks>
        [JsiiProperty(name: "tenancy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tenancy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
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

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the ECS instance.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScalingConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupId: Scaling group id to create the scaling configuration.
            /// </remarks>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
            /// - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
            /// - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
            /// Default value: **default**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "affinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Affinity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: The number of vCPUs.
            /// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
            /// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: creditSpecification: The performance mode of the burstable instance. Valid values:
            /// Standard: the standard mode.
            /// Unlimited: the unlimited mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creditSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreditSpecification
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
            /// You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentSetId: Deployment set ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DiskMappings
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
            /// Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
            /// Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hpcClusterId: The HPC cluster ID to which the instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HpcClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageFamily: The name of the image family. You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageFamily
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: Image ID to create ecs instance .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageName: The name of the image. Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
            /// You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values:
            /// - **true**
            /// - **false**
            /// Default value: **false**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageOptionsLoginAsNonRoot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageOptionsLoginAsNonRoot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceDescription: The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance launched from the current scaling configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instancePatternInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.InstancePatternInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstancePatternInfos
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: ecs supported instance type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceTypeOverrides: The instance types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypeOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.InstanceTypeOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceTypeOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthIn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
            /// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
            /// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: SSH key pair name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
            /// Default value: 50.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerWeight
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory size. Unit: GiB.
            /// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
            /// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordInherit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privatePoolOptions: Option settings for private pools
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privatePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.PrivatePoolOptionsProperty\"}]}}", isOptional: true)]
            public object? PrivatePoolOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RamRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingConfigurationName: Name of created scaling configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingConfigurationName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
            /// - **Active**: enables security hardening. This value is applicable only to public images.
            /// - **Deactive**: disables security hardening. This value is applicable to all image types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityEnhancementStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security Group to create ecs instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
            /// **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotDuration: The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
            /// The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
            /// If you set this parameter to 0, no protection period is specified for the preemptible instance.
            /// Default value: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInterruptionBehavior", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotInterruptionBehavior
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotPriceLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
            /// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
            /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
            /// At most 50 items can be specified.
            /// Key
            /// ecs instance type
            /// Value
            /// Supports a maximum of 3 decimal places.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimitForInstanceType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? SpotPriceLimitForInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
            /// NoSpot: Normal pay-per-use instance
            /// SpotWithPriceLimit: Set a preemptive instance of the cap price
            /// SpotAsPriceGo: System automatic bidding, following the current market actual price
            /// Default: NoSpot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskAutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
            /// - **true**
            /// - **false**
            /// **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskBurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategories: The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
            /// - **cloud**: basic disk
            /// - **cloud_efficiency**: ultra disk
            /// - **cloud_ssd**: standard SSD
            /// - **cloud_essd**: ESSD
            /// **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategories", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SystemDiskCategories
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskDiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. Valid values:
            /// - **AES-256**
            /// - **SM4-128**
            /// Default value: **AES-256**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskEncryptAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskEncryptAlgorithm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
            /// - **true**
            /// - **false**
            /// Default value: **false**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskEncrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskKmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of an ESSD.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
            /// **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: Size of system disk. Unit is GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagList: The tags of an instance in list format.
            /// Do not use with Tags at the same time.
            /// You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
            /// At most 20 tags can be specified.
            /// Key
            /// It can be up to 64 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:\/\/ or https:\/\/.
            /// Cannot be a null string.
            /// Value
            /// It can be up to 128 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:\/\/ or https:\/\/.
            /// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TagList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tenancy: Specifies whether to create an ECS instance on a dedicated host. Valid values:
            /// - **default**: does not create an ECS instance on a dedicated host.
            /// - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
            /// Default value: **default**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tenancy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tenancy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID of the ECS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECI::ContainerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.ContainerGroupProps")]
    public class ContainerGroupProps : AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps
    {
        /// <summary>Property container: The containers that constitute the container group.</summary>
        [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object Container
        {
            get;
            set;
        }

        /// <summary>Property containerGroupName: The name of the container group.</summary>
        /// <remarks>
        /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        /// </remarks>
        [JsiiProperty(name: "containerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContainerGroupName
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: The ID of the security group to which the instance belongs.</summary>
        /// <remarks>
        /// Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The ID of the specified VSwitch.</summary>
        /// <remarks>
        /// Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property acrRegistryInfo: Enterprise Edition access credential configuration information.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "acrRegistryInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.AcrRegistryInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AcrRegistryInfo
        {
            get;
            set;
        }

        /// <summary>Property activeDeadlineSeconds: The validity period in seconds.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ActiveDeadlineSeconds
        {
            get;
            set;
        }

        /// <summary>Property autoMatchImageCache: Specifies whether to automatically match the image cache.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoMatchImageCache
        {
            get;
            set;
        }

        /// <summary>Property cpu: CPU size.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Cpu
        {
            get;
            set;
        }

        /// <summary>Property dnsConfig: The information about DNS configurations.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
        public object? DnsConfig
        {
            get;
            set;
        }

        /// <summary>Property eipInstanceId: Elastic IP ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EipInstanceId
        {
            get;
            set;
        }

        /// <summary>Property hostAliase: Customize the hostname mapping of a container inside the pod.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? HostAliase
        {
            get;
            set;
        }

        /// <summary>Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ImageRegistryCredential
        {
            get;
            set;
        }

        /// <summary>Property imageSnapshotId: Image cache ID or snapshot ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImageSnapshotId
        {
            get;
            set;
        }

        /// <summary>Property initContainer: The containers that constitute the container group for initializing.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? InitContainer
        {
            get;
            set;
        }

        /// <summary>Property instanceType: The type of the ECS instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceType
        {
            get;
            set;
        }

        /// <summary>Property ipv6AddressCount: The number of IPv6 addresses.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ipv6AddressCount
        {
            get;
            set;
        }

        /// <summary>Property memory: memory size.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Memory
        {
            get;
            set;
        }

        /// <summary>Property ramRoleName: The RAM role that the container group assumes.</summary>
        /// <remarks>
        /// ECI and ECS share the same RAM role.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RamRoleName
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property restartPolicy: The policy for restarting the instance.</summary>
        /// <remarks>
        /// Default value: Always.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restartPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RestartPolicy
        {
            get;
            set;
        }

        /// <summary>Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.</summary>
        /// <remarks>
        /// Currently only two Sysctl keyNames are supported:
        /// Kernel.shm_rmid_forced
        /// Kernel.msgmax
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityContextSysctl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SecurityContextSysctl
        {
            get;
            set;
        }

        /// <summary>Property slsEnable: Enable user log collection.</summary>
        /// <remarks>
        /// The default is False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsEnable
        {
            get;
            set;
        }

        /// <summary>Property spotPriceLimit: Set the hourly maximum price of the instance.</summary>
        /// <remarks>
        /// It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotPriceLimit
        {
            get;
            set;
        }

        /// <summary>Property spotStrategy: Instance preemption strategy.</summary>
        /// <remarks>
        /// Ranges:
        /// NoSpot (default): normal pay-as-you-go instances.
        /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
        /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotStrategy
        {
            get;
            set;
        }

        /// <summary>Property tag: The list of container group tags in the form of key/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags for each container group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Tag
        {
            get;
            set;
        }

        /// <summary>Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TerminationGracePeriodSeconds
        {
            get;
            set;
        }

        /// <summary>Property volume: The data volume.</summary>
        /// <remarks>
        /// You can specify a maximum of 20 data volumes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Volume
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The ID of the zone in which the instance resides.</summary>
        /// <remarks>
        /// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}

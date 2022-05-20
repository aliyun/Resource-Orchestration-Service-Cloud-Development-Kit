using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps")]
    public class ManagedEdgeKubernetesClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IManagedEdgeKubernetesClusterProps
    {
        /// <summary>Property name: The name of the cluster.</summary>
        /// <remarks>
        /// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property numOfNodes: Number of worker nodes.</summary>
        /// <remarks>
        /// The range is [0,300]
        /// </remarks>
        [JsiiProperty(name: "numOfNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NumOfNodes
        {
            get;
            set;
        }

        /// <summary>Property addons: The add-ons to be installed for the cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Addons
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Whether the cluster automatically renews.</summary>
        /// <remarks>
        /// It takes effect when the value of ChargeType is PrePaid. The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property chargeType: cluster payment type.</summary>
        /// <remarks>
        /// The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CloudMonitorFlags
        {
            get;
            set;
        }

        /// <summary>Property clusterSpec: The edge managed cluster spec.</summary>
        /// <remarks>
        /// Value:
        /// ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        /// ack.standard: Standard hosting cluster.
        /// Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterSpec
        {
            get;
            set;
        }

        /// <summary>Property containerCidr: The container network segment cannot conflict with the VPC network segment.</summary>
        /// <remarks>
        /// When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "containerCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ContainerCidr
        {
            get;
            set;
        }

        /// <summary>Property deletionProtection: Specifies whether to enable deletion protection for the cluster.</summary>
        /// <remarks>
        /// After deletion protection is enabled, the cluster cannot be deleted
        /// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        /// false: disables deletion protection for the cluster.
        /// Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionProtection
        {
            get;
            set;
        }

        /// <summary>Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.</summary>
        /// <remarks>
        /// If rollback fails, resources produced during the creation process will be released. False is not recommended.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DisableRollback
        {
            get;
            set;
        }

        /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
        /// <remarks>
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointPublicAccess
        {
            get;
            set;
        }

        /// <summary>Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.</summary>
        /// <remarks>
        /// This parameter takes effect only if security_group_id is left empty.
        /// Note You must specify an advanced security group for a cluster that has Terway installed.
        /// true: creates an advanced security group.
        /// false: does not create an advanced security group.
        /// Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isEnterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IsEnterpriseSecurityGroup
        {
            get;
            set;
        }

        /// <summary>Property keyPair: Key pair name.</summary>
        /// <remarks>
        /// Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPair
        {
            get;
            set;
        }

        /// <summary>Property loginPassword: SSH login password.</summary>
        /// <remarks>
        /// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoginPassword
        {
            get;
            set;
        }

        /// <summary>Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.</summary>
        /// <remarks>
        /// This number is determined by the specified pod CIDR block.
        /// This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nodeCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NodeCidrMask
        {
            get;
            set;
        }

        /// <summary>Property period: The duration of the annual subscription and monthly subscription.</summary>
        /// <remarks>
        /// It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: When you specify PrePaid, you need to specify the period.</summary>
        /// <remarks>
        /// The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property profile: Edge cluster ID.</summary>
        /// <remarks>
        /// The default value is Edge.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "profile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Profile
        {
            get;
            set;
        }

        /// <summary>Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.</summary>
        /// <remarks>
        /// The default is iptables.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyMode
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.</summary>
        /// <remarks>
        /// When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceCidr
        {
            get;
            set;
        }

        /// <summary>Property snatEntry: Whether to configure SNAT for the network.</summary>
        /// <remarks>
        /// When a VPC can access the public network environment, set it to false.
        /// When an existing VPC cannot access the public network environment:
        /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
        /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SnatEntry
        {
            get;
            set;
        }

        /// <summary>Property tags: Tag the cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cs.RosManagedEdgeKubernetesCluster.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property timeoutMins: Cluster resource stack creation timeout, in minutes.</summary>
        /// <remarks>
        /// The default value is 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TimeoutMins
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        /// <remarks>
        /// If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        /// VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchIds: The virtual switch ID of the worker node.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchIds
        {
            get;
            set;
        }

        /// <summary>Property workerDataDisk: Whether to mount the data disk.</summary>
        /// <remarks>
        /// The options are as follows:
        /// true: indicates that the worker node mounts data disks.
        /// false: indicates that the worker node does not mount data disks.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerDataDisk
        {
            get;
            set;
        }

        /// <summary>Property workerDataDiskCategory: Data disk type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerDataDiskCategory
        {
            get;
            set;
        }

        /// <summary>Property workerDataDiskSize: Data disk size in GiB.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerDataDiskSize
        {
            get;
            set;
        }

        /// <summary>Property workerInstanceTypes: Worker node ECS specification type code.</summary>
        /// <remarks>
        /// For more details, see Instance Specification Family.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? WorkerInstanceTypes
        {
            get;
            set;
        }

        /// <summary>Property workerSystemDiskCategory: Worker node system disk type.</summary>
        /// <remarks>
        /// Default to cloud_efficiency.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerSystemDiskCategory
        {
            get;
            set;
        }

        /// <summary>Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.</summary>
        /// <remarks>
        /// Default to 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerSystemDiskSize
        {
            get;
            set;
        }

        /// <summary>Property zoneIds: Zone ids of worker node virtual switches belongs to.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ZoneIds
        {
            get;
            set;
        }
    }
}

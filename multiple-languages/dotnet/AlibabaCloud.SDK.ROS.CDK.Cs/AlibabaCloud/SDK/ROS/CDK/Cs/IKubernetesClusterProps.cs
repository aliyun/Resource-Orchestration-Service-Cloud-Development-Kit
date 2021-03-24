using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::KubernetesCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.KubernetesClusterProps")]
    public interface IKubernetesClusterProps
    {
        /// <summary>Property masterInstanceTypes: Master node ECS specification type code.</summary>
        /// <remarks>
        /// For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        /// List size must be 3, Instance Type can be repeated.
        /// </remarks>
        [JsiiProperty(name: "masterInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MasterInstanceTypes
        {
            get;
        }

        /// <summary>Property masterVSwitchIds: Master node switch ID.</summary>
        /// <remarks>
        /// To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        /// </remarks>
        [JsiiProperty(name: "masterVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MasterVSwitchIds
        {
            get;
        }

        /// <summary>Property name: The name of the cluster.</summary>
        /// <remarks>
        /// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Property workerInstanceTypes: Worker node ECS specification type code.</summary>
        /// <remarks>
        /// For more details, see Instance Specification Family.
        /// </remarks>
        [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkerInstanceTypes
        {
            get;
        }

        /// <summary>Property workerVSwitchIds: The virtual switch ID of the worker node.</summary>
        [JsiiProperty(name: "workerVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkerVSwitchIds
        {
            get;
        }

        /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
        /// <remarks>
        /// Network plug-in: including Flannel and Terway network plug-ins
        /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        /// Ingress: The installation of the Ingress component is enabled by default.
        /// </remarks>
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Addons
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.</summary>
        [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloudMonitorFlags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerCidr: The container network segment cannot conflict with the VPC network segment.</summary>
        /// <remarks>
        /// When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        /// </remarks>
        [JsiiProperty(name: "containerCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ContainerCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpuPolicy: CPU policy.</summary>
        /// <remarks>
        /// The cluster version is 1.12.6 and above supports both static and none strategies.
        /// </remarks>
        [JsiiProperty(name: "cpuPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CpuPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.</summary>
        /// <remarks>
        /// If rollback fails, resources produced during the creation process will be released. False is not recommended.
        /// </remarks>
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableRollback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
        /// <remarks>
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        /// </remarks>
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointPublicAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPair: Key pair name.</summary>
        /// <remarks>
        /// Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiProperty(name: "keyPair", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KeyPair
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kubernetesVersion: The version of the Kubernetes cluster.</summary>
        [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KubernetesVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginPassword: SSH login password.</summary>
        /// <remarks>
        /// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiProperty(name: "loginPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LoginPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterAutoRenew: Whether the master node automatically renews.</summary>
        /// <remarks>
        /// It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "masterAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterAutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
        [JsiiProperty(name: "masterAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MasterAutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterCount: Number of master instances.</summary>
        /// <remarks>
        /// The value can be 3 or 5. The default value is 3.
        /// </remarks>
        [JsiiProperty(name: "masterCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MasterCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.</summary>
        [JsiiProperty(name: "masterDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterDataDisk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterDataDisks: Master data disk type, size and other configuration combinations.</summary>
        /// <remarks>
        /// This parameter is valid only when the master node data disk is mounted.
        /// </remarks>
        [JsiiProperty(name: "masterDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterDataDisks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterInstanceChargeType: Master node payment type.</summary>
        /// <remarks>
        /// The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiProperty(name: "masterInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterInstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterPeriod: The duration of the annual subscription and monthly subscription.</summary>
        /// <remarks>
        /// It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiProperty(name: "masterPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MasterPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.</summary>
        /// <remarks>
        /// The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month
        /// </remarks>
        [JsiiProperty(name: "masterPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterPeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskCategory: Master disk system disk type.</summary>
        /// <remarks>
        /// The value range is:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// Default to cloud_ssd.
        /// </remarks>
        [JsiiProperty(name: "masterSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterSystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskSize: Master disk system disk size in GiB.</summary>
        /// <remarks>
        /// Default to 120.
        /// </remarks>
        [JsiiProperty(name: "masterSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MasterSystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodePortRange: Node service port.</summary>
        /// <remarks>
        /// The value range is [30000, 65535].
        /// Default to 30000-65535.
        /// </remarks>
        [JsiiProperty(name: "nodePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NodePortRange
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property numOfNodes: Number of worker nodes.</summary>
        /// <remarks>
        /// The range is [0,300].
        /// Default to 3.
        /// </remarks>
        [JsiiProperty(name: "numOfNodes", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? NumOfNodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.</summary>
        /// <remarks>
        /// The default is iptables.
        /// </remarks>
        [JsiiProperty(name: "proxyMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.</summary>
        /// <remarks>
        /// When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        /// </remarks>
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ServiceCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snatEntry: Whether to configure SNAT for the network.</summary>
        /// <remarks>
        /// When a VPC can access the public network environment, set it to false.
        /// When an existing VPC cannot access the public network environment:
        /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
        /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntry
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sshFlags: Whether to enable public network SSH login: true: open false: not open.</summary>
        [JsiiProperty(name: "sshFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SshFlags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tag the cluster.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taint: It is used to mark nodes with taints.</summary>
        /// <remarks>
        /// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        /// </remarks>
        [JsiiProperty(name: "taint", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Taint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutMins: Cluster resource stack creation timeout, in minutes.</summary>
        /// <remarks>
        /// The default value is 60.
        /// </remarks>
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? TimeoutMins
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.</summary>
        /// <remarks>
        /// The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "workerAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerAutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
        [JsiiProperty(name: "workerAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? WorkerAutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerDataDisk: Whether to mount the data disk.</summary>
        /// <remarks>
        /// The options are as follows:
        /// true: indicates that the worker node mounts data disks.
        /// false: indicates that the worker node does not mount data disks.
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "workerDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerDataDisk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerDataDisks: A combination of configurations such as worker data disk type and size.</summary>
        /// <remarks>
        /// This parameter is valid only when the worker node data disk is mounted.
        /// </remarks>
        [JsiiProperty(name: "workerDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerDataDisks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerInstanceChargeType: Worker node payment type.</summary>
        /// <remarks>
        /// The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiProperty(name: "workerInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WorkerInstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerPeriod: The duration of the annual and monthly subscription.</summary>
        /// <remarks>
        /// It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiProperty(name: "workerPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? WorkerPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.</summary>
        /// <remarks>
        /// The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month.
        /// </remarks>
        [JsiiProperty(name: "workerPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WorkerPeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerSystemDiskCategory: Worker node system disk type.</summary>
        /// <remarks>
        /// The value includes:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// Default to cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WorkerSystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.</summary>
        /// <remarks>
        /// Default to 120.
        /// </remarks>
        [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? WorkerSystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CS::KubernetesCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.KubernetesClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IKubernetesClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property masterInstanceTypes: Master node ECS specification type code.</summary>
            /// <remarks>
            /// For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
            /// List size must be 3, Instance Type can be repeated.
            /// </remarks>
            [JsiiProperty(name: "masterInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MasterInstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property masterVSwitchIds: Master node switch ID.</summary>
            /// <remarks>
            /// To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
            /// </remarks>
            [JsiiProperty(name: "masterVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MasterVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the cluster.</summary>
            /// <remarks>
            /// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property workerInstanceTypes: Worker node ECS specification type code.</summary>
            /// <remarks>
            /// For more details, see Instance Specification Family.
            /// </remarks>
            [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkerInstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workerVSwitchIds: The virtual switch ID of the worker node.</summary>
            [JsiiProperty(name: "workerVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkerVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
            /// <remarks>
            /// Network plug-in: including Flannel and Terway network plug-ins
            /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
            /// Ingress: The installation of the Ingress component is enabled by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Addons
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloudMonitorFlags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerCidr: The container network segment cannot conflict with the VPC network segment.</summary>
            /// <remarks>
            /// When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ContainerCidr
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property cpuPolicy: CPU policy.</summary>
            /// <remarks>
            /// The cluster version is 1.12.6 and above supports both static and none strategies.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CpuPolicy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.</summary>
            /// <remarks>
            /// If rollback fails, resources produced during the creation process will be released. False is not recommended.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableRollback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
            /// <remarks>
            /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointPublicAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPair: Key pair name.</summary>
            /// <remarks>
            /// Specify one of KeyPair or LoginPassword.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPair", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KeyPair
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property kubernetesVersion: The version of the Kubernetes cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KubernetesVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property loginPassword: SSH login password.</summary>
            /// <remarks>
            /// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LoginPassword
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterAutoRenew: Whether the master node automatically renews.</summary>
            /// <remarks>
            /// It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
            /// true: automatic renewal
            /// false: do not renew automatically
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MasterAutoRenewPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property masterCount: Number of master instances.</summary>
            /// <remarks>
            /// The value can be 3 or 5. The default value is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MasterCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterDataDisk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterDataDisks: Master data disk type, size and other configuration combinations.</summary>
            /// <remarks>
            /// This parameter is valid only when the master node data disk is mounted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MasterDataDisks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterInstanceChargeType: Master node payment type.</summary>
            /// <remarks>
            /// The optional values are:
            /// PrePaid: prepaid
            /// PostPaid: Pay as you go
            /// Default to PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterInstanceChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterPeriod: The duration of the annual subscription and monthly subscription.</summary>
            /// <remarks>
            /// It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
            /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
            /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
            /// Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MasterPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.</summary>
            /// <remarks>
            /// The options are:
            /// Week: Time is measured in weeks
            /// Month: time in months
            /// Default to Month
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterPeriodUnit
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterSystemDiskCategory: Master disk system disk type.</summary>
            /// <remarks>
            /// The value range is:
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// Default to cloud_ssd.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterSystemDiskCategory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterSystemDiskSize: Master disk system disk size in GiB.</summary>
            /// <remarks>
            /// Default to 120.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MasterSystemDiskSize
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property nodePortRange: Node service port.</summary>
            /// <remarks>
            /// The value range is [30000, 65535].
            /// Default to 30000-65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NodePortRange
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property numOfNodes: Number of worker nodes.</summary>
            /// <remarks>
            /// The range is [0,300].
            /// Default to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numOfNodes", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? NumOfNodes
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.</summary>
            /// <remarks>
            /// The default is iptables.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyMode
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.</summary>
            /// <remarks>
            /// When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ServiceCidr
            {
                get => GetInstanceProperty<string?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sshFlags: Whether to enable public network SSH login: true: open false: not open.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sshFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SshFlags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tag the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property taint: It is used to mark nodes with taints.</summary>
            /// <remarks>
            /// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taint", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Taint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutMins: Cluster resource stack creation timeout, in minutes.</summary>
            /// <remarks>
            /// The default value is 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? TimeoutMins
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.</summary>
            /// <remarks>
            /// The optional values are:
            /// true: automatic renewal
            /// false: do not renew automatically
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkerAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workerAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? WorkerAutoRenewPeriod
            {
                get => GetInstanceProperty<double?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerDataDisks: A combination of configurations such as worker data disk type and size.</summary>
            /// <remarks>
            /// This parameter is valid only when the worker node data disk is mounted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WorkerDataDisks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerInstanceChargeType: Worker node payment type.</summary>
            /// <remarks>
            /// The optional values are:
            /// PrePaid: prepaid
            /// PostPaid: Pay as you go
            /// Default to PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WorkerInstanceChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property workerPeriod: The duration of the annual and monthly subscription.</summary>
            /// <remarks>
            /// It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
            /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
            /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
            /// Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? WorkerPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.</summary>
            /// <remarks>
            /// The options are:
            /// Week: Time is measured in weeks
            /// Month: time in months
            /// Default to Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WorkerPeriodUnit
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property workerSystemDiskCategory: Worker node system disk type.</summary>
            /// <remarks>
            /// The value includes:
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// Default to cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WorkerSystemDiskCategory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.</summary>
            /// <remarks>
            /// Default to 120.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? WorkerSystemDiskSize
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}

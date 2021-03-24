using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>A ROS template type:  `ALIYUN::CS::KubernetesCluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosKubernetesCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CS::KubernetesCluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosKubernetesCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cs.IRosKubernetesClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosKubernetesCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosKubernetesCluster(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: Cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        /// </remarks>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTaskId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: WorkerRamRoleName: Worker ram role name.
        /// </remarks>
        [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrWorkerRamRoleName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tag the cluster.
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
        /// <strong>Property</strong>: masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        /// List size must be 3, Instance Type can be repeated.
        /// </remarks>
        [JsiiProperty(name: "masterInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object MasterInstanceTypes
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        /// </remarks>
        [JsiiProperty(name: "masterVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object MasterVSwitchIds
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VpcId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        /// </remarks>
        [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object WorkerInstanceTypes
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerVSwitchIds: The virtual switch ID of the worker node.
        /// </remarks>
        [JsiiProperty(name: "workerVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object WorkerVSwitchIds
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: addons: A combination of addon plugins for Kubernetes clusters.
        /// Network plug-in: including Flannel and Terway network plug-ins
        /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        /// Ingress: The installation of the Ingress component is enabled by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Addons
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        /// true: indicates installation
        /// false: Do not install
        /// Default to false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CloudMonitorFlags
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "containerCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ContainerCidr
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cpuPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CpuPolicy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: disableRollback: Whether the failure was rolled back:
        /// true: indicates that it fails to roll back
        /// false: rollback failed
        /// The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DisableRollback
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointPublicAccess: Whether to enable the public network API Server:
        /// true: which means that the public network API Server is open.
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EndpointPublicAccess
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPair", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KeyPair
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: kubernetesVersion: The version of the Kubernetes cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KubernetesVersion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loginPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LoginPassword
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MasterAutoRenew
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        /// When PeriodUnit = Week, the values are: {"1", "2", "3"}
        /// When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        /// Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? MasterAutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? MasterCount
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterDataDisk: Whether the master node mounts data disks can be selected as:
        /// true: mount the data disk
        /// false: no data disk is mounted, default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MasterDataDisk
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MasterDataDisks
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterInstanceChargeType: Master node payment type. The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterInstanceChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? MasterPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterPeriodUnit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSystemDiskCategory: Master disk system disk type. The value range is:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// Default to cloud_ssd.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterSystemDiskCategory
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSystemDiskSize: Master disk system disk size in GiB.
        /// Default to 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? MasterSystemDiskSize
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nodePortRange: Node service port. The value range is [30000, 65535].
        /// Default to 30000-65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nodePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? NodePortRange
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: numOfNodes: Number of worker nodes. The range is [0,300].
        /// Default to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "numOfNodes", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? NumOfNodes
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ProxyMode
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ServiceCidr
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntry: Whether to configure SNAT for the network.
        /// When a VPC can access the public network environment, set it to false.
        /// When an existing VPC cannot access the public network environment:
        /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
        /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SnatEntry
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sshFlags: Whether to enable public network SSH login:
        /// true: open
        /// false: not open
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sshFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SshFlags
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "taint", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Taint
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TimeoutMins
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? WorkerAutoRenew
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        /// When PeriodUnit = Week, the values are: {"1", "2", "3"}
        /// When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        /// Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerAutoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? WorkerAutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerDataDisk: Whether to mount the data disk. The options are as follows:
        /// true: indicates that the worker node mounts data disks.
        /// false: indicates that the worker node does not mount data disks.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? WorkerDataDisk
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? WorkerDataDisks
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerInstanceChargeType: Worker node payment type. The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerInstanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? WorkerInstanceChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? WorkerPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerPeriodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? WorkerPeriodUnit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerSystemDiskCategory: Worker node system disk type. The value includes:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// Default to cloud_efficiency.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? WorkerSystemDiskCategory
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        /// Default to 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? WorkerSystemDiskSize
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAddonsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty")]
        public interface IAddonsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Addon plugin name
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: config: When the value is empty, no configuration is required.
            /// </remarks>
            [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Config
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: disabled: Specifies whether to disable default installation.
            /// </remarks>
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Disabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAddonsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IAddonsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Addon plugin name
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: config: When the value is empty, no configuration is required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Config
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: disabled: Specifies whether to disable default installation.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Disabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty")]
        public class AddonsProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IAddonsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Addon plugin name
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: config: When the value is empty, no configuration is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Config
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: disabled: Specifies whether to disable default installation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Disabled
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMasterDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty")]
        public interface IMasterDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: Data disk type. Value includes:
            /// cloud: ordinary cloud disk
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
            string Category
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: Data disk size in GiB.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}")]
            double Size
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IMasterDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IMasterDataDisksProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: Data disk type. Value includes:
                /// cloud: ordinary cloud disk
                /// cloud_efficiency: efficient cloud disk
                /// cloud_ssd: SSD cloud disk
                /// </remarks>
                [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
                public string Category
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: size: Data disk size in GiB.
                /// </remarks>
                [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}")]
                public double Size
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty")]
        public class MasterDataDisksProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IMasterDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: Data disk type. Value includes:
            /// cloud: ordinary cloud disk
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: Data disk size in GiB.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Size
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IWorkerDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty")]
        public interface IWorkerDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: Data disk type. Value includes:
            /// cloud: ordinary cloud disk
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
            string Category
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: Data disk size in GiB.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}")]
            double Size
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IWorkerDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IWorkerDataDisksProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: Data disk type. Value includes:
                /// cloud: ordinary cloud disk
                /// cloud_efficiency: efficient cloud disk
                /// cloud_ssd: SSD cloud disk
                /// </remarks>
                [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
                public string Category
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: size: Data disk size in GiB.
                /// </remarks>
                [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}")]
                public double Size
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty")]
        public class WorkerDataDisksProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.IWorkerDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: Data disk type. Value includes:
            /// cloud: ordinary cloud disk
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: Data disk size in GiB.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Size
            {
                get;
                set;
            }
        }
    }
}

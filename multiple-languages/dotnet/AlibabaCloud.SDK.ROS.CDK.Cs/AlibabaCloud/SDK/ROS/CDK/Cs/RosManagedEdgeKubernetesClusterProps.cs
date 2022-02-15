using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps")]
    public class RosManagedEdgeKubernetesClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IRosManagedEdgeKubernetesClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: numOfNodes: Number of worker nodes. The range is [0,300]
        /// </remarks>
        [JsiiProperty(name: "numOfNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NumOfNodes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: addons: The add-ons to be installed for the cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Addons
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        /// true: indicates installation
        /// false: Do not install
        /// Default to false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CloudMonitorFlags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterSpec: The edge managed cluster spec. Value:
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

        /// <remarks>
        /// <strong>Property</strong>: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "containerCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ContainerCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: disableRollback: Whether the failure was rolled back:
        /// true: indicates that it fails to roll back
        /// false: rollback failed
        /// The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DisableRollback
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointPublicAccess: Whether to enable the public network API Server:
        /// true: which means that the public network API Server is open.
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointPublicAccess
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPair
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoginPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: profile: Edge cluster ID. The default value is Edge.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "profile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Profile
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyMode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceCidr
        {
            get;
            set;
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
        public object? SnatEntry
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tag the cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cs.RosManagedEdgeKubernetesCluster.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TimeoutMins
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        /// VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: The virtual switch ID of the worker node.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workerDataDisk: Whether to mount the data disk. The options are as follows:
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

        /// <remarks>
        /// <strong>Property</strong>: workerDataDiskCategory: Data disk type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerDataDiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workerDataDiskSize: Data disk size in GiB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerDataDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerDataDiskSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? WorkerInstanceTypes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workerSystemDiskCategory: Worker node system disk type.
        /// Default to cloud_efficiency.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerSystemDiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        /// Default to 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WorkerSystemDiskSize
        {
            get;
            set;
        }
    }
}

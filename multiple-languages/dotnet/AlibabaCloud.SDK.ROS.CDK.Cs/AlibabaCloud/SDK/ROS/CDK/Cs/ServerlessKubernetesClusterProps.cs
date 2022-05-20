using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.ServerlessKubernetesClusterProps")]
    public class ServerlessKubernetesClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IServerlessKubernetesClusterProps
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

        /// <summary>Property addons: The add-ons to be installed for the cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosServerlessKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Addons
        {
            get;
            set;
        }

        /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
        /// <remarks>
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointPublicAccess
        {
            get;
            set;
        }

        /// <summary>Property kubernetesVersion: The version of the Kubernetes cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KubernetesVersion
        {
            get;
            set;
        }

        /// <summary>Property natGateway: Whether to create a NAT gateway.</summary>
        /// <remarks>
        /// The value can be true or false. If not set, the system defaults to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "natGateway", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NatGateway
        {
            get;
            set;
        }

        /// <summary>Property privateZone: Whether to enable PrivateZone for service discovery.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PrivateZone
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

        /// <summary>Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupId
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

        /// <summary>Property tags: Tag the cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosServerlessKubernetesCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cs.RosServerlessKubernetesCluster.ITagsProperty[]? Tags
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

        /// <summary>Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchIds: The IDs of VSwitches.</summary>
        /// <remarks>
        /// If you leave this property empty, the system automatically creates a VSwitch.
        /// Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchIds
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The zone ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}

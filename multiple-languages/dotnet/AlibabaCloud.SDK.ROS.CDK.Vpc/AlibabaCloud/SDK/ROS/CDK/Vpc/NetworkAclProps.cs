using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::NetworkAcl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.NetworkAclProps")]
    public class NetworkAclProps : AlibabaCloud.SDK.ROS.CDK.Vpc.INetworkAclProps
    {
        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the network ACL.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. The description must start
        /// with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property egressAclEntries: The list of egress network ACL entries.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? EgressAclEntries
        {
            get;
            set;
        }

        /// <summary>Property ingressAclEntries: The list of ingress network ACL entries.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? IngressAclEntries
        {
            get;
            set;
        }

        /// <summary>Property networkAclName: The name of the network ACL.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        /// start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NetworkAclName
        {
            get;
            set;
        }
    }
}

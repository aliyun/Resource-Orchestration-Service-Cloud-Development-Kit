using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::NetworkAclAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosNetworkAclAssociationProps")]
    public class RosNetworkAclAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosNetworkAclAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkAclId: The ID of the network ACL.
        /// </remarks>
        [JsiiProperty(name: "networkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkAclId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: The list of resources that need to be associated with network ACL.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAclAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Resources
        {
            get;
            set;
        }
    }
}

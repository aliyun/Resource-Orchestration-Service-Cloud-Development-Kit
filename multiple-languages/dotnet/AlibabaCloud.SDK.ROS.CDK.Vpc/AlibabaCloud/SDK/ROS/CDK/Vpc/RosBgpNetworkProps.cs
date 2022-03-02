using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::BgpNetwork`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosBgpNetworkProps")]
    public class RosBgpNetworkProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosBgpNetworkProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
        /// to a data center.
        /// </remarks>
        [JsiiProperty(name: "dstCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DstCidrBlock
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerId: The ID of the vRouter associated with the router interface.
        /// </remarks>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RouterId
        {
            get;
            set;
        }
    }
}

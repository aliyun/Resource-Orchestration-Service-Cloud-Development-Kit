using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `BgpNetwork`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBgpNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpNetworkProps")]
    public interface IBgpNetworkProps
    {
        /// <summary>Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.</summary>
        [JsiiProperty(name: "dstCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DstCidrBlock
        {
            get;
        }

        /// <summary>Property routerId: The ID of the vRouter associated with the router interface.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterId
        {
            get;
        }

        /// <summary>Properties for defining a `BgpNetwork`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBgpNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpNetworkProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IBgpNetworkProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.</summary>
            [JsiiProperty(name: "dstCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DstCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routerId: The ID of the vRouter associated with the router interface.</summary>
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

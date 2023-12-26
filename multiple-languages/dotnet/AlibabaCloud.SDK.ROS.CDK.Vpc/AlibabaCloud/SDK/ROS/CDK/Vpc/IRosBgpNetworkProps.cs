using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosBgpNetwork`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBgpNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpNetworkProps")]
    public interface IRosBgpNetworkProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
        /// to a data center.
        /// </remarks>
        [JsiiProperty(name: "dstCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DstCidrBlock
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerId: The ID of the vRouter associated with the router interface.
        /// </remarks>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosBgpNetwork`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBgpNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpNetworkProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosBgpNetworkProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
            /// to a data center.
            /// </remarks>
            [JsiiProperty(name: "dstCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DstCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerId: The ID of the vRouter associated with the router interface.
            /// </remarks>
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

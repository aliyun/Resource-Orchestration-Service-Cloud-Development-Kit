using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>Properties for defining a `ALIYUN::UIS::UisNode`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUisNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisNodeProps")]
    public interface IRosUisNodeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        /// </remarks>
        [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"primitive\":\"number\"}")]
        double IpAddrsNum
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisId: The instance ID to which the boarding point belongs.
        /// </remarks>
        [JsiiProperty(name: "uisId", typeJson: "{\"primitive\":\"string\"}")]
        string UisId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
        /// </remarks>
        [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"primitive\":\"string\"}")]
        string UisNodeAreaId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
        /// If you do not specify a bandwidth, the default value is 20Mbps.
        /// </remarks>
        [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double UisNodeBandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the instance of the boarding point.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the instance of the boarding point.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::UIS::UisNode`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosUisNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisNodeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.IRosUisNodeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
            /// </remarks>
            [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"primitive\":\"number\"}")]
            public double IpAddrsNum
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uisId: The instance ID to which the boarding point belongs.
            /// </remarks>
            [JsiiProperty(name: "uisId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
            /// </remarks>
            [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisNodeAreaId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
            /// If you do not specify a bandwidth, the default value is 20Mbps.
            /// </remarks>
            [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double UisNodeBandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the instance of the boarding point.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the instance of the boarding point.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

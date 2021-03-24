using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>Properties for defining a `ALIYUN::UIS::UisNode`.</summary>
    [JsiiInterface(nativeType: typeof(IUisNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.UisNodeProps")]
    public interface IUisNodeProps
    {
        /// <summary>Property ipAddrsNum: The number of IPs available at the boarding point.</summary>
        /// <remarks>
        /// The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        /// </remarks>
        [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"primitive\":\"number\"}")]
        double IpAddrsNum
        {
            get;
        }

        /// <summary>Property uisId: The instance ID to which the boarding point belongs.</summary>
        [JsiiProperty(name: "uisId", typeJson: "{\"primitive\":\"string\"}")]
        string UisId
        {
            get;
        }

        /// <summary>Property uisNodeAreaId: Specifies the territory ID of the node.</summary>
        /// <remarks>
        /// You can query the supported territories through the DescribeRegions interface.
        /// </remarks>
        [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"primitive\":\"string\"}")]
        string UisNodeAreaId
        {
            get;
        }

        /// <summary>Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.</summary>
        /// <remarks>
        /// If you do not specify a bandwidth, the default value is 20Mbps.
        /// </remarks>
        [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double UisNodeBandwidth
        {
            get;
        }

        /// <summary>Property description: Description of the instance of the boarding point.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the instance of the boarding point.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IUisNodeProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.UisNodeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.IUisNodeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipAddrsNum: The number of IPs available at the boarding point.</summary>
            /// <remarks>
            /// The default is 2, the maximum is 10, if you need more quota, please submit the work order.
            /// </remarks>
            [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"primitive\":\"number\"}")]
            public double IpAddrsNum
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property uisId: The instance ID to which the boarding point belongs.</summary>
            [JsiiProperty(name: "uisId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property uisNodeAreaId: Specifies the territory ID of the node.</summary>
            /// <remarks>
            /// You can query the supported territories through the DescribeRegions interface.
            /// </remarks>
            [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisNodeAreaId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.</summary>
            /// <remarks>
            /// If you do not specify a bandwidth, the default value is 20Mbps.
            /// </remarks>
            [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double UisNodeBandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property description: Description of the instance of the boarding point.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: The name of the instance of the boarding point.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `EIPSegment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEIPSegmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPSegmentProps")]
    public interface IEIPSegmentProps
    {
        /// <summary>Property eipMask: The mask of the contiguous EIP group.</summary>
        /// <remarks>
        /// Valid values:
        /// 28: 16 contiguous EIPs are allocated for one call.
        /// 27: 32 contiguous EIPs are allocated for one call.
        /// 26: 64 contiguous EIPs are allocated for one call.
        /// 25: 128 contiguous EIPs are allocated for one call.
        /// 24: 256 contiguous EIPs are allocated for one call.
        /// Note The actual number of assigned EIPs may be less than the expected number because one,
        /// three, or four EIPs may be reserved.
        /// </remarks>
        [JsiiProperty(name: "eipMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EipMask
        {
            get;
        }

        /// <summary>Property bandwidth: The maximum bandwidth of the contiguous EIPs.</summary>
        /// <remarks>
        /// Unit: Mbit/s. Default value: 5.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The metering method of the contiguous EIPs.</summary>
        /// <remarks>
        /// Valid values:
        /// PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
        /// PayByTraffic: Fees are charged based on data transfer.
        /// Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isp: The line type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>BGP</strong> (default): BGP (multi-line). All regions support BGP (multi-line) EIPs.</description>
        /// <description><strong>BGP_PRO</strong>: BGP (multi-line)_Premium. Currently supported only in China (Hong Kong),
        /// Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila),
        /// India (Jakarta), and Thailand (Bangkok).</description>
        /// </list>
        ///
        /// For more information about BGP (multi-line) and BGP (multi-line)_Premium,
        /// see <a href="~~32321~~">EIP Line Type</a>.
        ///
        /// If you are a single-bandwidth whitelist user, you can also choose:
        ///
        /// <list type="bullet">
        /// <description><strong>ChinaTelecom</strong>: China Telecom</description>
        /// <description><strong>ChinaUnicom</strong>: China Unicom</description>
        /// <description><strong>ChinaMobile</strong>: China Mobile</description>
        /// <description><strong>ChinaTelecom_L2</strong>: China Telecom L2</description>
        /// <description><strong>ChinaUnicom_L2</strong>: China Unicom L2</description>
        /// <description><strong>ChinaMobile_L2</strong>: China Mobile L2</description>
        /// </list>
        ///
        /// If you are a Hangzhou Finance Cloud user, this field is required with value: <strong>BGP_FinanceCloud</strong>.
        /// </remarks>
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property netmode: The network type.</summary>
        /// <remarks>
        /// Valid values:
        /// public: the Internet. This is the default value. After contiguous EIPs are associated with
        /// cloud resources, the cloud resources can access the Internet by using the EIPs.
        /// hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
        /// cloud resources can access the hybrid cloud by using the EIPs.
        /// Note This network type is available only to users who are added to the whitelist. To use
        /// this network type, contact your customer manager.
        /// </remarks>
        [JsiiProperty(name: "netmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Netmode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the EIPs belong.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zone: The zone of the contiguous EIP group.</summary>
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EIPSegment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEIPSegmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPSegmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPSegmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property eipMask: The mask of the contiguous EIP group.</summary>
            /// <remarks>
            /// Valid values:
            /// 28: 16 contiguous EIPs are allocated for one call.
            /// 27: 32 contiguous EIPs are allocated for one call.
            /// 26: 64 contiguous EIPs are allocated for one call.
            /// 25: 128 contiguous EIPs are allocated for one call.
            /// 24: 256 contiguous EIPs are allocated for one call.
            /// Note The actual number of assigned EIPs may be less than the expected number because one,
            /// three, or four EIPs may be reserved.
            /// </remarks>
            [JsiiProperty(name: "eipMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EipMask
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidth: The maximum bandwidth of the contiguous EIPs.</summary>
            /// <remarks>
            /// Unit: Mbit/s. Default value: 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The metering method of the contiguous EIPs.</summary>
            /// <remarks>
            /// Valid values:
            /// PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
            /// PayByTraffic: Fees are charged based on data transfer.
            /// Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isp: The line type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>BGP</strong> (default): BGP (multi-line). All regions support BGP (multi-line) EIPs.</description>
            /// <description><strong>BGP_PRO</strong>: BGP (multi-line)_Premium. Currently supported only in China (Hong Kong),
            /// Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila),
            /// India (Jakarta), and Thailand (Bangkok).</description>
            /// </list>
            ///
            /// For more information about BGP (multi-line) and BGP (multi-line)_Premium,
            /// see <a href="~~32321~~">EIP Line Type</a>.
            ///
            /// If you are a single-bandwidth whitelist user, you can also choose:
            ///
            /// <list type="bullet">
            /// <description><strong>ChinaTelecom</strong>: China Telecom</description>
            /// <description><strong>ChinaUnicom</strong>: China Unicom</description>
            /// <description><strong>ChinaMobile</strong>: China Mobile</description>
            /// <description><strong>ChinaTelecom_L2</strong>: China Telecom L2</description>
            /// <description><strong>ChinaUnicom_L2</strong>: China Unicom L2</description>
            /// <description><strong>ChinaMobile_L2</strong>: China Mobile L2</description>
            /// </list>
            ///
            /// If you are a Hangzhou Finance Cloud user, this field is required with value: <strong>BGP_FinanceCloud</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property netmode: The network type.</summary>
            /// <remarks>
            /// Valid values:
            /// public: the Internet. This is the default value. After contiguous EIPs are associated with
            /// cloud resources, the cloud resources can access the Internet by using the EIPs.
            /// hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
            /// cloud resources can access the hybrid cloud by using the EIPs.
            /// Note This network type is available only to users who are added to the whitelist. To use
            /// this network type, contact your customer manager.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "netmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Netmode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the EIPs belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zone: The zone of the contiguous EIP group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Zone
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

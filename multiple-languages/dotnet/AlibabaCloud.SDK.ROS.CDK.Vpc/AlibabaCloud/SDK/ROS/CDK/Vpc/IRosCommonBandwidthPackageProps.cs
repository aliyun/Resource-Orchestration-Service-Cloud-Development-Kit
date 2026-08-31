using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosCommonBandwidthPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps")]
    public interface IRosCommonBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
        /// Valid values: 1 to 1000. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionProtection: Whether to enable deletion protection.
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the Internet Shared Bandwidth instance.
        /// The description must be 0 to 256 characters in length and cannot start with
        /// `http:\/\/` or `https:\/\/`.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: The billing method of the Internet Shared Bandwidth instance. Set the value to
        /// PayByTraffic, which specifies the pay-by-data-transfer billing method.
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

        /// <remarks>
        /// <strong>Property</strong>: isp: The line type. Valid values:
        /// *   BGP (default) All regions support BGP (Multi-ISP).
        /// *   BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
        /// Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
        /// Indonesia (Jakarta), and Thailand (Bangkok) regions.
        /// If you are allowed to use single-ISP bandwidth, you can also use one of the
        /// following values:
        /// *   ChinaTelecom
        /// *   ChinaUnicom
        /// *   ChinaMobile
        /// *   ChinaTelecom_L2
        /// *   ChinaUnicom_L2
        /// *   ChinaMobile_L2
        /// If your services are deployed in China East 1 Finance, this parameter is required
        /// and you must set the value to BGP_FinanceCloud.
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the Internet Shared Bandwidth instance.
        /// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or
        /// `https:\/\/`.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The percentage of the minimum bandwidth commitment. Set the parameter to 20.
        /// </remarks>
        [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ratio
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zone: The zone of the Internet Shared Bandwidth instance. This parameter is required if
        /// you create an Internet Shared Bandwidth instance for a cloud box.
        /// </remarks>
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCommonBandwidthPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosCommonBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
            /// Valid values: 1 to 1000. Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionProtection: Whether to enable deletion protection.
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the Internet Shared Bandwidth instance.
            /// The description must be 0 to 256 characters in length and cannot start with
            /// `http:\/\/` or `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: The billing method of the Internet Shared Bandwidth instance. Set the value to
            /// PayByTraffic, which specifies the pay-by-data-transfer billing method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isp: The line type. Valid values:
            /// *   BGP (default) All regions support BGP (Multi-ISP).
            /// *   BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
            /// Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
            /// Indonesia (Jakarta), and Thailand (Bangkok) regions.
            /// If you are allowed to use single-ISP bandwidth, you can also use one of the
            /// following values:
            /// *   ChinaTelecom
            /// *   ChinaUnicom
            /// *   ChinaMobile
            /// *   ChinaTelecom_L2
            /// *   ChinaUnicom_L2
            /// *   ChinaMobile_L2
            /// If your services are deployed in China East 1 Finance, this parameter is required
            /// and you must set the value to BGP_FinanceCloud.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the Internet Shared Bandwidth instance.
            /// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or
            /// `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ratio: The percentage of the minimum bandwidth commitment. Set the parameter to 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ratio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zone: The zone of the Internet Shared Bandwidth instance. This parameter is required if
            /// you create an Internet Shared Bandwidth instance for a cloud box.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Zone
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

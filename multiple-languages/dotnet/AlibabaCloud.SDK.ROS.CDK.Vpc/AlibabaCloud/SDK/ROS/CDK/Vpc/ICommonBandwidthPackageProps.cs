using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `CommonBandwidthPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps")]
    public interface ICommonBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// Valid values: 1 to 1000. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        /// <remarks>
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

        /// <summary>Property description: The description of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The description must be 0 to 256 characters in length and cannot start with
        /// <c>http:\/\/</c> or <c>https:\/\/</c>.
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

        /// <summary>Property internetChargeType: The billing method of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Set the value to
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

        /// <summary>Property isp: The line type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>BGP (default) All regions support BGP (Multi-ISP).</description>
        /// <description>BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
        /// Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
        /// Indonesia (Jakarta), and Thailand (Bangkok) regions.
        /// If you are allowed to use single-ISP bandwidth, you can also use one of the
        /// following values:</description>
        /// <description>ChinaTelecom</description>
        /// <description>ChinaUnicom</description>
        /// <description>ChinaMobile</description>
        /// <description>ChinaTelecom_L2</description>
        /// <description>ChinaUnicom_L2</description>
        /// <description>ChinaMobile_L2
        /// If your services are deployed in China East 1 Finance, this parameter is required
        /// and you must set the value to BGP_FinanceCloud.</description>
        /// </list>
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

        /// <summary>Property name: The name of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The name must be 0 to 128 characters in length and cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.
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

        /// <summary>Property ratio: The percentage of the minimum bandwidth commitment.</summary>
        /// <remarks>
        /// Set the parameter to 20.
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property zone: The zone of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// This parameter is required if
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

        /// <summary>Properties for defining a `CommonBandwidthPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// Valid values: 1 to 1000. Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// The description must be 0 to 256 characters in length and cannot start with
            /// <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The billing method of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Set the value to
            /// PayByTraffic, which specifies the pay-by-data-transfer billing method.
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
            /// <description>BGP (default) All regions support BGP (Multi-ISP).</description>
            /// <description>BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
            /// Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
            /// Indonesia (Jakarta), and Thailand (Bangkok) regions.
            /// If you are allowed to use single-ISP bandwidth, you can also use one of the
            /// following values:</description>
            /// <description>ChinaTelecom</description>
            /// <description>ChinaUnicom</description>
            /// <description>ChinaMobile</description>
            /// <description>ChinaTelecom_L2</description>
            /// <description>ChinaUnicom_L2</description>
            /// <description>ChinaMobile_L2
            /// If your services are deployed in China East 1 Finance, this parameter is required
            /// and you must set the value to BGP_FinanceCloud.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// The name must be 0 to 128 characters in length and cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ratio: The percentage of the minimum bandwidth commitment.</summary>
            /// <remarks>
            /// Set the parameter to 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ratio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]?>();
            }

            /// <summary>Property zone: The zone of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// This parameter is required if
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

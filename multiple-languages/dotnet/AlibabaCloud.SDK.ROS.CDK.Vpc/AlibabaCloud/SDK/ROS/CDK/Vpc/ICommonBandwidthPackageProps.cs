using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps")]
    public interface ICommonBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property description: The description of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter,
        /// and cannot start with http:// or https://.
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

        /// <summary>Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Allowed values:
        /// PayByBandwidth (default): Billed by bandwidth.
        /// PayBy95: Charged at Enhanced 95.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isp: Line type of EIP, value: BGP (multi-line).</summary>
        [JsiiProperty(name: "isp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        /// start with http:// or https://.
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

        /// <summary>Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Default to 100.
        /// Note This parameter is only supported on the China site.
        /// </remarks>
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Ratio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zone: Zone Id.</summary>
        [JsiiProperty(name: "zone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Zone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property description: The description of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter,
            /// and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Allowed values:
            /// PayByBandwidth (default): Billed by bandwidth.
            /// PayBy95: Charged at Enhanced 95.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property isp: Line type of EIP, value: BGP (multi-line).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Isp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: The name of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can contain letters, numbers, periods
            /// (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
            /// start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Default to 100.
            /// Note This parameter is only supported on the China site.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ratio
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property zone: Zone Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Zone
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

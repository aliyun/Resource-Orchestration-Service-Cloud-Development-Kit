using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `BgpGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBgpGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpGroupProps")]
    public interface IBgpGroupProps
    {
        /// <summary>Property peerAsn: The AS number of the BGP peer.</summary>
        [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerAsn
        {
            get;
        }

        /// <summary>Property routerId: The ID of the VBR.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterId
        {
            get;
        }

        /// <summary>Property authKey: The authentication key of the BGP group.</summary>
        [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the BGP group.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length.
        /// It must start with a letter but cannot start with http:// or https://.
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

        /// <summary>Property ipVersion: The IP version.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>IPv4: This is the default value.</description>
        /// <description>IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
        /// group has IPv6 enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isFakeAsn: Specifies whether to use a fake ASN.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>false (default)</description>
        /// <description>true</description>
        /// </list>
        ///
        ///     A router that runs BGP typically belongs to only one AS. If you need to
        ///     replace an existing AS with a new AS and you cannot immediately modify BGP
        ///     configurations, you can use fake ASNs to ensure service continuity.
        /// </remarks>
        [JsiiProperty(name: "isFakeAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsFakeAsn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property localAsn: The custom ASN on the cloud side.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>45104</description>
        /// <description>64512~65534</description>
        /// <description>4200000000~4294967294</description>
        /// </list>
        ///
        ///     65025 is reserved by the cloud platform. By default, the system uses 45104 as
        ///     LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
        ///     may occur.
        /// </remarks>
        [JsiiProperty(name: "localAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalAsn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the BGP group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can
        /// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        /// with a letter but cannot start with http:// or https://.
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

        /// <summary>Property routeQuota: The upper limit of the BGP neighbor's route entries.</summary>
        /// <remarks>
        /// Unit: entries, default value: 110.
        /// </remarks>
        [JsiiProperty(name: "routeQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteQuota
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BgpGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBgpGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IBgpGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property peerAsn: The AS number of the BGP peer.</summary>
            [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerAsn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routerId: The ID of the VBR.</summary>
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authKey: The authentication key of the BGP group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the BGP group.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length.
            /// It must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipVersion: The IP version.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>IPv4: This is the default value.</description>
            /// <description>IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
            /// group has IPv6 enabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isFakeAsn: Specifies whether to use a fake ASN.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>false (default)</description>
            /// <description>true</description>
            /// </list>
            ///
            ///     A router that runs BGP typically belongs to only one AS. If you need to
            ///     replace an existing AS with a new AS and you cannot immediately modify BGP
            ///     configurations, you can use fake ASNs to ensure service continuity.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isFakeAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsFakeAsn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localAsn: The custom ASN on the cloud side.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>45104</description>
            /// <description>64512~65534</description>
            /// <description>4200000000~4294967294</description>
            /// </list>
            ///
            ///     65025 is reserved by the cloud platform. By default, the system uses 45104 as
            ///     LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
            ///     may occur.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalAsn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the BGP group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can
            /// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
            /// with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeQuota: The upper limit of the BGP neighbor's route entries.</summary>
            /// <remarks>
            /// Unit: entries, default value: 110.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteQuota
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

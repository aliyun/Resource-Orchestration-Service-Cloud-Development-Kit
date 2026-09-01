using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosBgpGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBgpGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpGroupProps")]
    public interface IRosBgpGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: peerAsn: The AS number of the BGP peer.
        /// </remarks>
        [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerAsn
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerId: The ID of the VBR.
        /// </remarks>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authKey: The authentication key of the BGP group.
        /// </remarks>
        [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the BGP group. The description must be 2 to 256 characters in length.
        /// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
        /// *   IPv4: This is the default value.
        /// *   IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
        /// group has IPv6 enabled.
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

        /// <remarks>
        /// <strong>Property</strong>: isFakeAsn: Specifies whether to use a fake ASN. Valid values:
        /// *   false (default)
        /// *   true
        /// >  A router that runs BGP typically belongs to only one AS. If you need to
        /// replace an existing AS with a new AS and you cannot immediately modify BGP
        /// configurations, you can use fake ASNs to ensure service continuity.
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

        /// <remarks>
        /// <strong>Property</strong>: localAsn: The custom ASN on the cloud side. Valid values:
        /// *   45104
        /// *   64512~65534
        /// *   4200000000~4294967294
        /// >  65025 is reserved by the cloud platform. By default, the system uses 45104 as
        /// LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
        /// may occur.
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the BGP group. The name must be 2 to 128 characters in length and can
        /// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        /// with a letter but cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: routeQuota: The upper limit of the BGP neighbor's route entries. Unit: entries, default value: 110.
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

        /// <summary>Properties for defining a `RosBgpGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBgpGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosBgpGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: peerAsn: The AS number of the BGP peer.
            /// </remarks>
            [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerAsn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerId: The ID of the VBR.
            /// </remarks>
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authKey: The authentication key of the BGP group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the BGP group. The description must be 2 to 256 characters in length.
            /// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
            /// *   IPv4: This is the default value.
            /// *   IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
            /// group has IPv6 enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isFakeAsn: Specifies whether to use a fake ASN. Valid values:
            /// *   false (default)
            /// *   true
            /// >  A router that runs BGP typically belongs to only one AS. If you need to
            /// replace an existing AS with a new AS and you cannot immediately modify BGP
            /// configurations, you can use fake ASNs to ensure service continuity.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isFakeAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsFakeAsn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: localAsn: The custom ASN on the cloud side. Valid values:
            /// *   45104
            /// *   64512~65534
            /// *   4200000000~4294967294
            /// >  65025 is reserved by the cloud platform. By default, the system uses 45104 as
            /// LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
            /// may occur.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalAsn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the BGP group. The name must be 2 to 128 characters in length and can
            /// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
            /// with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeQuota: The upper limit of the BGP neighbor's route entries. Unit: entries, default value: 110.
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

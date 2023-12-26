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

        /// <summary>Property isFakeAsn: A router that runs BGP typically belongs to only one AS.</summary>
        /// <remarks>
        /// In some cases, for example,
        /// the AS needs to be migrated or is merged with another AS, a new AS number replaces
        /// the original one.
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

        /// <summary>Property localAsn: The AS number on the Alibaba Cloud side.</summary>
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

            /// <summary>Property isFakeAsn: A router that runs BGP typically belongs to only one AS.</summary>
            /// <remarks>
            /// In some cases, for example,
            /// the AS needs to be migrated or is merged with another AS, a new AS number replaces
            /// the original one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isFakeAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsFakeAsn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localAsn: The AS number on the Alibaba Cloud side.</summary>
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
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `IpamScope`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpamScopeProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamScopeProps")]
    public interface IIpamScopeProps
    {
        /// <summary>Property ipamId: The id of the Ipam instance.</summary>
        [JsiiProperty(name: "ipamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpamId
        {
            get;
        }

        /// <summary>Property ipamScopeDescription: The description of the IPAM's scope of action.</summary>
        /// <remarks>
        /// It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
        /// </remarks>
        [JsiiProperty(name: "ipamScopeDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamScopeDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamScopeName: The name of the IPAM scope.</summary>
        [JsiiProperty(name: "ipamScopeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamScopeName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamScopeType: IPAM scope of action type: **private**.</summary>
        /// <remarks>
        ///     Currently, only the role scope of the private network is supported.
        /// </remarks>
        [JsiiProperty(name: "ipamScopeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamScopeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of ipam scope.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamScope.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamScope.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `IpamScope`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpamScopeProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamScopeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamScopeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipamId: The id of the Ipam instance.</summary>
            [JsiiProperty(name: "ipamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpamId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipamScopeDescription: The description of the IPAM's scope of action.</summary>
            /// <remarks>
            /// It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipamScopeDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamScopeDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamScopeName: The name of the IPAM scope.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipamScopeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamScopeName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamScopeType: IPAM scope of action type: **private**.</summary>
            /// <remarks>
            ///     Currently, only the role scope of the private network is supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipamScopeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamScopeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of ipam scope.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamScope.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamScope.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamScope.ITagsProperty[]?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `IpamResourceDiscovery`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpamResourceDiscoveryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamResourceDiscoveryProps")]
    public interface IIpamResourceDiscoveryProps
    {
        /// <summary>Property operatingRegionList: The list of regions where the resource discovery is effective.</summary>
        [JsiiProperty(name: "operatingRegionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object OperatingRegionList
        {
            get;
        }

        /// <summary>Property ipamResourceDiscoveryDescription: The description of the resource discovery.</summary>
        [JsiiProperty(name: "ipamResourceDiscoveryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamResourceDiscoveryDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamResourceDiscoveryName: The name of the resource discovery.</summary>
        [JsiiProperty(name: "ipamResourceDiscoveryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamResourceDiscoveryName
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

        /// <summary>Property tags: Tags of ipam resource discovery.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamResourceDiscovery.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamResourceDiscovery.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `IpamResourceDiscovery`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpamResourceDiscoveryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamResourceDiscoveryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamResourceDiscoveryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property operatingRegionList: The list of regions where the resource discovery is effective.</summary>
            [JsiiProperty(name: "operatingRegionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object OperatingRegionList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipamResourceDiscoveryDescription: The description of the resource discovery.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipamResourceDiscoveryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamResourceDiscoveryDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamResourceDiscoveryName: The name of the resource discovery.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipamResourceDiscoveryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamResourceDiscoveryName
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

            /// <summary>Property tags: Tags of ipam resource discovery.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamResourceDiscovery.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamResourceDiscovery.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamResourceDiscovery.ITagsProperty[]?>();
            }
        }
    }
}

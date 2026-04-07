using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `SwimmingLane`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISwimmingLaneProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.SwimmingLaneProps")]
    public interface ISwimmingLaneProps
    {
        /// <summary>Property entryRules: The entry rules of the swimming lane.</summary>
        [JsiiProperty(name: "entryRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object EntryRules
        {
            get;
        }

        /// <summary>Property groupId: The group ID of the swimming lane.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property logicalRegionId: The RegionId of the logical region.</summary>
        /// <remarks>
        /// Format: <c>physicalRegion:customNamespaceIdentifier</c>.
        /// </remarks>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogicalRegionId
        {
            get;
        }

        /// <summary>Property name: The name of the swimming lane.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property tag: The tag of the swimming lane.</summary>
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Tag
        {
            get;
        }

        /// <summary>Property appInfos: Application information involved in the swimming lane.</summary>
        [JsiiProperty(name: "appInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableRules: Whether to enable flow control rules.</summary>
        [JsiiProperty(name: "enableRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SwimmingLane`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISwimmingLaneProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.SwimmingLaneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.ISwimmingLaneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property entryRules: The entry rules of the swimming lane.</summary>
            [JsiiProperty(name: "entryRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object EntryRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The group ID of the swimming lane.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logicalRegionId: The RegionId of the logical region.</summary>
            /// <remarks>
            /// Format: <c>physicalRegion:customNamespaceIdentifier</c>.
            /// </remarks>
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogicalRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the swimming lane.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property tag: The tag of the swimming lane.</summary>
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Tag
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appInfos: Application information involved in the swimming lane.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AppInfos
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableRules: Whether to enable flow control rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableRules
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

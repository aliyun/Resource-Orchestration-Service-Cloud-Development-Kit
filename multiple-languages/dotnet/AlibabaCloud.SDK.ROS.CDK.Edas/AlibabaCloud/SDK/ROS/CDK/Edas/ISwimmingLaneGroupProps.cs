using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `SwimmingLaneGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISwimmingLaneGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.SwimmingLaneGroupProps")]
    public interface ISwimmingLaneGroupProps
    {
        /// <summary>Property appIds: The list of application IDs involved in the swimming lane group.</summary>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AppIds
        {
            get;
        }

        /// <summary>Property entryApp: The entry application.</summary>
        /// <remarks>
        /// Format: EDAS:{application ID}.
        /// </remarks>
        [JsiiProperty(name: "entryApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EntryApp
        {
            get;
        }

        /// <summary>Property logicalRegionId: The RegionId of the custom namespace.</summary>
        /// <remarks>
        /// Format: <c>physical Region:custom namespace identifier</c>.
        /// </remarks>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogicalRegionId
        {
            get;
        }

        /// <summary>Property name: The name of the swimming lane group.</summary>
        /// <remarks>
        /// The value can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `SwimmingLaneGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISwimmingLaneGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.SwimmingLaneGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.ISwimmingLaneGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appIds: The list of application IDs involved in the swimming lane group.</summary>
            [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AppIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property entryApp: The entry application.</summary>
            /// <remarks>
            /// Format: EDAS:{application ID}.
            /// </remarks>
            [JsiiProperty(name: "entryApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EntryApp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logicalRegionId: The RegionId of the custom namespace.</summary>
            /// <remarks>
            /// Format: <c>physical Region:custom namespace identifier</c>.
            /// </remarks>
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogicalRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the swimming lane group.</summary>
            /// <remarks>
            /// The value can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

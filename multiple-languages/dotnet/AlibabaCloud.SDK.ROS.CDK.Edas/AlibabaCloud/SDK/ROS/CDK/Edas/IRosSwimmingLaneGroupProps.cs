using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `RosSwimmingLaneGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSwimmingLaneGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosSwimmingLaneGroupProps")]
    public interface IRosSwimmingLaneGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appIds: The list of application IDs involved in the swimming lane group.
        /// </remarks>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AppIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: entryApp: The entry application. Format: EDAS:{application ID}.
        /// </remarks>
        [JsiiProperty(name: "entryApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EntryApp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: The RegionId of the custom namespace. Format: `physical Region:custom namespace identifier`.
        /// </remarks>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogicalRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the swimming lane group.
        /// The value can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `RosSwimmingLaneGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSwimmingLaneGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosSwimmingLaneGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosSwimmingLaneGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appIds: The list of application IDs involved in the swimming lane group.
            /// </remarks>
            [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AppIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: entryApp: The entry application. Format: EDAS:{application ID}.
            /// </remarks>
            [JsiiProperty(name: "entryApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EntryApp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logicalRegionId: The RegionId of the custom namespace. Format: `physical Region:custom namespace identifier`.
            /// </remarks>
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogicalRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the swimming lane group.
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

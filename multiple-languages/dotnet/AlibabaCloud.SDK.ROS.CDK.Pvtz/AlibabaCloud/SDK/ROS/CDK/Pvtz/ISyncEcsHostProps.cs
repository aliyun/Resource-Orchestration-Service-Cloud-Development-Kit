using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `SyncEcsHost`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISyncEcsHostProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.SyncEcsHostProps")]
    public interface ISyncEcsHostProps
    {
        /// <summary>Property regions: A list of region information to be synchronized.</summary>
        [JsiiProperty(name: "regions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosSyncEcsHost.RegionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Regions
        {
            get;
        }

        /// <summary>Property status: The host synchronizes the task state.</summary>
        /// <remarks>
        /// Valid values: ON, OFF.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <summary>Property zoneId: Zone ID, a unique identifier for the Zone.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Properties for defining a `SyncEcsHost`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISyncEcsHostProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.SyncEcsHostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.ISyncEcsHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property regions: A list of region information to be synchronized.</summary>
            [JsiiProperty(name: "regions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosSyncEcsHost.RegionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Regions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property status: The host synchronizes the task state.</summary>
            /// <remarks>
            /// Valid values: ON, OFF.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Zone ID, a unique identifier for the Zone.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

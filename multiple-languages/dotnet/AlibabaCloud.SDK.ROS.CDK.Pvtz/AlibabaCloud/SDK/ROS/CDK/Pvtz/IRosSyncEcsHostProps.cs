using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `RosSyncEcsHost`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSyncEcsHostProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosSyncEcsHostProps")]
    public interface IRosSyncEcsHostProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regions: A list of region information to be synchronized.
        /// </remarks>
        [JsiiProperty(name: "regions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosSyncEcsHost.RegionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Regions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The host synchronizes the task state. Valid values: ON, OFF.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone ID, a unique identifier for the Zone.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Properties for defining a `RosSyncEcsHost`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSyncEcsHostProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosSyncEcsHostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosSyncEcsHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: regions: A list of region information to be synchronized.
            /// </remarks>
            [JsiiProperty(name: "regions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosSyncEcsHost.RegionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Regions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The host synchronizes the task state. Valid values: ON, OFF.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Zone ID, a unique identifier for the Zone.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

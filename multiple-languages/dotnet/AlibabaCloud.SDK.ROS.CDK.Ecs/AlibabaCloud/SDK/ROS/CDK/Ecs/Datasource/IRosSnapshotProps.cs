using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosSnapshot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSnapshotProps")]
    public interface IRosSnapshotProps
    {
        /// <remarks>
        /// <strong>Property</strong>: snapshotId: The snapshot id.
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnapshotId
        {
            get;
        }

        /// <summary>Properties for defining a `RosSnapshot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSnapshotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosSnapshotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: The snapshot id.
            /// </remarks>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

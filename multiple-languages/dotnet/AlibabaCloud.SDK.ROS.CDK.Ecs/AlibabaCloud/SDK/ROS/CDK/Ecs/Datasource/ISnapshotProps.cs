using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Snapshot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SnapshotProps")]
    public interface ISnapshotProps
    {
        /// <summary>Property snapshotId: The snapshot id.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnapshotId
        {
            get;
        }

        /// <summary>Properties for defining a `Snapshot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SnapshotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property snapshotId: The snapshot id.</summary>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

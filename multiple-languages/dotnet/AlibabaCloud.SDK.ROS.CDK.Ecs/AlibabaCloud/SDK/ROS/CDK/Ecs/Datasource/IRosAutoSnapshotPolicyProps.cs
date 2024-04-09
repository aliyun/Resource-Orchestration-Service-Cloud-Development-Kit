using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosAutoSnapshotPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicyProps")]
    public interface IRosAutoSnapshotPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoSnapshotPolicyId: The name of the automatic snapshot policy.
        /// </remarks>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AutoSnapshotPolicyId
        {
            get;
        }

        /// <summary>Properties for defining a `RosAutoSnapshotPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosAutoSnapshotPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: The name of the automatic snapshot policy.
            /// </remarks>
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

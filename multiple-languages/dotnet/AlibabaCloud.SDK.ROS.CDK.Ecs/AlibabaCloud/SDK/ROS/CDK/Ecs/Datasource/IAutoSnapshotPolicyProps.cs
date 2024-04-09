using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `AutoSnapshotPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps")]
    public interface IAutoSnapshotPolicyProps
    {
        /// <summary>Property autoSnapshotPolicyId: The name of the automatic snapshot policy.</summary>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AutoSnapshotPolicyId
        {
            get;
        }

        /// <summary>Properties for defining a `AutoSnapshotPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoSnapshotPolicyId: The name of the automatic snapshot policy.</summary>
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

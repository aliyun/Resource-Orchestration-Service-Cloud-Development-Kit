using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `RosPatchBaseline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps")]
    public interface IRosPatchBaselineProps
    {
        /// <remarks>
        /// <strong>Property</strong>: patchBaselineName: The name of the patch baseline.
        /// </remarks>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PatchBaselineName
        {
            get;
        }

        /// <summary>Properties for defining a `RosPatchBaseline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IRosPatchBaselineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: patchBaselineName: The name of the patch baseline.
            /// </remarks>
            [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PatchBaselineName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

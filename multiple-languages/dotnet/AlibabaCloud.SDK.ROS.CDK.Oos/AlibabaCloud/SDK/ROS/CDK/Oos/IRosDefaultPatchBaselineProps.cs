using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `RosDefaultPatchBaseline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDefaultPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosDefaultPatchBaselineProps")]
    public interface IRosDefaultPatchBaselineProps
    {
        /// <remarks>
        /// <strong>Property</strong>: patchBaselineName: The name of the patch baseline.
        /// </remarks>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PatchBaselineName
        {
            get;
        }

        /// <summary>Properties for defining a `RosDefaultPatchBaseline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDefaultPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosDefaultPatchBaselineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosDefaultPatchBaselineProps
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

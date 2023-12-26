using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `DefaultPatchBaseline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDefaultPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.DefaultPatchBaselineProps")]
    public interface IDefaultPatchBaselineProps
    {
        /// <summary>Property patchBaselineName: The name of the patch baseline.</summary>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PatchBaselineName
        {
            get;
        }

        /// <summary>Properties for defining a `DefaultPatchBaseline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDefaultPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.DefaultPatchBaselineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IDefaultPatchBaselineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property patchBaselineName: The name of the patch baseline.</summary>
            [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PatchBaselineName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

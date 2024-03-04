using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `PatchBaseline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.PatchBaselineProps")]
    public interface IPatchBaselineProps
    {
        /// <summary>Property patchBaselineName: The name of the patch baseline.</summary>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PatchBaselineName
        {
            get;
        }

        /// <summary>Properties for defining a `PatchBaseline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPatchBaselineProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.PatchBaselineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselineProps
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

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Local bundling.</summary>
    [JsiiInterface(nativeType: typeof(ILocalBundling), fullyQualifiedName: "@alicloud/ros-cdk-core.ILocalBundling")]
    public interface ILocalBundling
    {
        /// <summary>This method is called before attempting docker bundling to allow the bundler to be executed locally.</summary>
        /// <param name="outputDir">the directory where the bundled asset should be output.</param>
        /// <param name="options">bundling options for this asset.</param>
        /// <remarks>
        /// If the local bundler exists, and bundling
        /// was performed locally, return <c>true</c>. Otherwise, return <c>false</c>.
        /// </remarks>
        [JsiiMethod(name: "tryBundle", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the directory where the bundled asset should be output.\"},\"name\":\"outputDir\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"bundling options for this asset.\"},\"name\":\"options\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.BundlingOptions\"}}]")]
        bool TryBundle(string outputDir, AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions options);

        /// <summary>Local bundling.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILocalBundling), fullyQualifiedName: "@alicloud/ros-cdk-core.ILocalBundling")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ILocalBundling
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>This method is called before attempting docker bundling to allow the bundler to be executed locally.</summary>
            /// <param name="outputDir">the directory where the bundled asset should be output.</param>
            /// <param name="options">bundling options for this asset.</param>
            /// <remarks>
            /// If the local bundler exists, and bundling
            /// was performed locally, return <c>true</c>. Otherwise, return <c>false</c>.
            /// </remarks>
            [JsiiMethod(name: "tryBundle", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the directory where the bundled asset should be output.\"},\"name\":\"outputDir\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"bundling options for this asset.\"},\"name\":\"options\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.BundlingOptions\"}}]")]
            public bool TryBundle(string outputDir, AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions options)
            {
                return InvokeInstanceMethod<bool>(new System.Type[]{typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions)}, new object[]{outputDir, options})!;
            }
        }
    }
}

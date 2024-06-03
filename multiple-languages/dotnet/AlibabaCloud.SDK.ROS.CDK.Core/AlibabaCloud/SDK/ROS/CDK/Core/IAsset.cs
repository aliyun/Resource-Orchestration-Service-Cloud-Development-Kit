using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Common interface for all assets.</summary>
    [JsiiInterface(nativeType: typeof(IAsset), fullyQualifiedName: "@alicloud/ros-cdk-core.IAsset")]
    public interface IAsset
    {
        /// <summary>A hash of this asset, which is available at construction time.</summary>
        /// <remarks>
        /// As this is a plain string, it
        /// can be used in construct IDs in order to enforce creation of a new resource when the content
        /// hash has changed.
        /// </remarks>
        [JsiiProperty(name: "assetHash", typeJson: "{\"primitive\":\"string\"}")]
        string AssetHash
        {
            get;
        }

        /// <summary>Common interface for all assets.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAsset), fullyQualifiedName: "@alicloud/ros-cdk-core.IAsset")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAsset
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A hash of this asset, which is available at construction time.</summary>
            /// <remarks>
            /// As this is a plain string, it
            /// can be used in construct IDs in order to enforce creation of a new resource when the content
            /// hash has changed.
            /// </remarks>
            [JsiiProperty(name: "assetHash", typeJson: "{\"primitive\":\"string\"}")]
            public string AssetHash
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

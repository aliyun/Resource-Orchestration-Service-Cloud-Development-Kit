using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Artifact properties for the Asset Manifest.</summary>
    [JsiiInterface(nativeType: typeof(IAssetManifestProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssetManifestProperties")]
    public interface IAssetManifestProperties : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifestOptions
    {
        /// <summary>Filename of the asset manifest.</summary>
        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
        string File
        {
            get;
        }

        /// <summary>Artifact properties for the Asset Manifest.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssetManifestProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssetManifestProperties")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifestProperties
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Filename of the asset manifest.</summary>
            [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
            public string File
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Artifact properties for the Construct Tree Artifact.</summary>
    [JsiiInterface(nativeType: typeof(ITreeArtifactProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties")]
    public interface ITreeArtifactProperties
    {
        /// <summary>Filename of the tree artifact.</summary>
        [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
        string File
        {
            get;
        }

        /// <summary>Artifact properties for the Construct Tree Artifact.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITreeArtifactProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITreeArtifactProperties
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Filename of the tree artifact.</summary>
            [JsiiProperty(name: "file", typeJson: "{\"primitive\":\"string\"}")]
            public string File
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

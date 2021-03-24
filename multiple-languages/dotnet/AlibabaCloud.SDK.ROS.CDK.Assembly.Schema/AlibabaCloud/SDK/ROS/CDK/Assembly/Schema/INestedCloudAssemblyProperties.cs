using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Artifact properties for nested cloud assemblies.</summary>
    [JsiiInterface(nativeType: typeof(INestedCloudAssemblyProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties")]
    public interface INestedCloudAssemblyProperties
    {
        /// <summary>Relative path to the nested cloud assembly.</summary>
        [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}")]
        string DirectoryName
        {
            get;
        }

        /// <summary>Display name for the cloud assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - The artifact ID
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Artifact properties for nested cloud assemblies.</summary>
        [JsiiTypeProxy(nativeType: typeof(INestedCloudAssemblyProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.INestedCloudAssemblyProperties
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Relative path to the nested cloud assembly.</summary>
            [JsiiProperty(name: "directoryName", typeJson: "{\"primitive\":\"string\"}")]
            public string DirectoryName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Display name for the cloud assembly.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - The artifact ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DisplayName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

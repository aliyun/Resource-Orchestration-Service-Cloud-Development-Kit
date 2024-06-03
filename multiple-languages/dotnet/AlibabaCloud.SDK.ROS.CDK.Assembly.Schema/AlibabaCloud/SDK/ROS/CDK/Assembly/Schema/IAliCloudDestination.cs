using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Destination for assets that need to be uploaded to AliCloud.</summary>
    [JsiiInterface(nativeType: typeof(IAliCloudDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AliCloudDestination")]
    public interface IAliCloudDestination
    {
        /// <summary>The region where this asset will need to be published.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Current region
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>Destination for assets that need to be uploaded to AliCloud.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAliCloudDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AliCloudDestination")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliCloudDestination
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The region where this asset will need to be published.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Current region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

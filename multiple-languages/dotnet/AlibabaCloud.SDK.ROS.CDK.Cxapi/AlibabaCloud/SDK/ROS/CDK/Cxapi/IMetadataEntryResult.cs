using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiInterface(nativeType: typeof(IMetadataEntryResult), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.MetadataEntryResult")]
    public interface IMetadataEntryResult : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry
    {
        /// <summary>The path in which this entry was defined.</summary>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        string Path
        {
            get;
        }

        [JsiiTypeProxy(nativeType: typeof(IMetadataEntryResult), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.MetadataEntryResult")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntryResult
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The path in which this entry was defined.</summary>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
            public string Path
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The type of the metadata entry.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The data.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no data.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.Tag\"},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Data
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>A stack trace for when the entry was created.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no trace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trace", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Trace
            {
                get => GetInstanceProperty<string[]?>();
            }
        }
    }
}

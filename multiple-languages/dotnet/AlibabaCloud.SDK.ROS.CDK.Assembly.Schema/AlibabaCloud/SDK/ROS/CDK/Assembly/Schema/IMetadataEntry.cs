using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>A metadata entry in a cloud assembly artifact.</summary>
    [JsiiInterface(nativeType: typeof(IMetadataEntry), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.MetadataEntry")]
    public interface IMetadataEntry
    {
        /// <summary>The type of the metadata entry.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>The data.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no data.
        /// </remarks>
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.Tag\"},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Data
        {
            get
            {
                return null;
            }
        }

        /// <summary>A stack trace for when the entry was created.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no trace.
        /// </remarks>
        [JsiiProperty(name: "trace", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Trace
        {
            get
            {
                return null;
            }
        }

        /// <summary>A metadata entry in a cloud assembly artifact.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMetadataEntry), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.MetadataEntry")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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

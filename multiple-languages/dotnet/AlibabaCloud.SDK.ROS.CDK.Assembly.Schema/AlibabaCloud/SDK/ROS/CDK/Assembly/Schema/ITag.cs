using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Metadata Entry spec for stack tag.</summary>
    [JsiiInterface(nativeType: typeof(ITag), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.Tag")]
    public interface ITag
    {
        /// <summary>Tag key.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        string Key
        {
            get;
        }

        /// <summary>Tag value.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
        string Value
        {
            get;
        }

        /// <summary>Metadata Entry spec for stack tag.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITag), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.Tag")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITag
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Tag key.</summary>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            public string Key
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Tag value.</summary>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
            public string Value
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

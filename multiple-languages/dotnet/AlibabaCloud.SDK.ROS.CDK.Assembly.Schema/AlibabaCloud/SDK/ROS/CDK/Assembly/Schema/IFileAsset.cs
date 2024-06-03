using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>A file asset.</summary>
    [JsiiInterface(nativeType: typeof(IFileAsset), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileAsset")]
    public interface IFileAsset
    {
        /// <summary>Destinations for this file asset.</summary>
        [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"},\"kind\":\"map\"}}")]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination> Destinations
        {
            get;
        }

        /// <summary>Source description for file assets.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileSource\"}")]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource Source
        {
            get;
        }

        /// <summary>A file asset.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileAsset), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileAsset")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Destinations for this file asset.</summary>
            [JsiiProperty(name: "destinations", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"},\"kind\":\"map\"}}")]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination> Destinations
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination>>()!;
            }

            /// <summary>Source description for file assets.</summary>
            [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileSource\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource Source
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileSource>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiInterface(nativeType: typeof(ISynthesisMessage), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.SynthesisMessage")]
    public interface ISynthesisMessage
    {
        [JsiiProperty(name: "entry", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"}")]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry Entry
        {
            get;
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        string Id
        {
            get;
        }

        [JsiiProperty(name: "level", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.SynthesisMessageLevel\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cxapi.SynthesisMessageLevel Level
        {
            get;
        }

        [JsiiTypeProxy(nativeType: typeof(ISynthesisMessage), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.SynthesisMessage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.ISynthesisMessage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            [JsiiProperty(name: "entry", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry Entry
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry>()!;
            }

            [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
            public string Id
            {
                get => GetInstanceProperty<string>()!;
            }

            [JsiiProperty(name: "level", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.SynthesisMessageLevel\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cxapi.SynthesisMessageLevel Level
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.SynthesisMessageLevel>()!;
            }
        }
    }
}

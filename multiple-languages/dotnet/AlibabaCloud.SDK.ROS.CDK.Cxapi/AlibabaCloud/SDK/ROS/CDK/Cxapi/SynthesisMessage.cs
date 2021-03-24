using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.SynthesisMessage")]
    public class SynthesisMessage : AlibabaCloud.SDK.ROS.CDK.Cxapi.ISynthesisMessage
    {
        [JsiiProperty(name: "entry", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MetadataEntry\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMetadataEntry Entry
        {
            get;
            set;
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Id
        {
            get;
            set;
        }

        [JsiiProperty(name: "level", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.SynthesisMessageLevel\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cxapi.SynthesisMessageLevel Level
        {
            get;
            set;
        }
    }
}

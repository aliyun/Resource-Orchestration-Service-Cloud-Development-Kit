using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Ots.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type, the default is SSD.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Instance description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: network: Instance network type, default is NORMAL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "network", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Network
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Ots.IInstanceProps
    {
        /// <summary>Property instanceName: The name of the instance.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceName
        {
            get;
            set;
        }

        /// <summary>Property clusterType: Cluster type, the default is SSD.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterType
        {
            get;
            set;
        }

        /// <summary>Property description: Instance description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property network: Instance network type, default is NORMAL.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "network", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Network
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ots.RosInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}

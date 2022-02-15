using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::FlowLog`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.FlowLogProps")]
    public class FlowLogProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IFlowLogProps
    {
        /// <summary>Property logStoreName: The log store name.</summary>
        [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LogStoreName
        {
            get;
            set;
        }

        /// <summary>Property projectName: The project name.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProjectName
        {
            get;
            set;
        }

        /// <summary>Property resourceId: The resource id.</summary>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceId
        {
            get;
            set;
        }

        /// <summary>Property resourceType: The resource type.</summary>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceType
        {
            get;
            set;
        }

        /// <summary>Property trafficType: The traffic type.</summary>
        [JsiiProperty(name: "trafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficType
        {
            get;
            set;
        }

        /// <summary>Property description: The Description of flow log.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property flowLogName: The flow log name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FlowLogName
        {
            get;
            set;
        }
    }
}

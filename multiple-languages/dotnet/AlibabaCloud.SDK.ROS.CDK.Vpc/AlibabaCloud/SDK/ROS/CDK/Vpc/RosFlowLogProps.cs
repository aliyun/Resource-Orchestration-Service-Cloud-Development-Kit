using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::FlowLog`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosFlowLogProps")]
    public class RosFlowLogProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosFlowLogProps
    {
        /// <remarks>
        /// <strong>Property</strong>: logStoreName: The log store name.
        /// </remarks>
        [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LogStoreName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The project name.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceId: The resource id.
        /// </remarks>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The resource type.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficType: The traffic type.
        /// </remarks>
        [JsiiProperty(name: "trafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The Description of flow log.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: flowLogName: The flow log name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FlowLogName
        {
            get;
            set;
        }
    }
}

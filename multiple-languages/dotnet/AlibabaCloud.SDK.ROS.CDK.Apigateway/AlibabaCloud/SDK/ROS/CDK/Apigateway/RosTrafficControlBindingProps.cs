using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControlBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps")]
    public class RosTrafficControlBindingProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to bind with the traffic control.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind traffic in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlId: The id of traffic control.
        /// </remarks>
        [JsiiProperty(name: "trafficControlId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficControlId
        {
            get;
            set;
        }
    }
}

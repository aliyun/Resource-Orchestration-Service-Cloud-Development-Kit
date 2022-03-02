using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.TrafficControlProps")]
    public class TrafficControlProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.ITrafficControlProps
    {
        /// <summary>Property apiDefault: Default API traffic value.</summary>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiDefault
        {
            get;
            set;
        }

        /// <summary>Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficControlName
        {
            get;
            set;
        }

        /// <summary>Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.</summary>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TrafficControlUnit
        {
            get;
            set;
        }

        /// <summary>Property appDefault: Default APP traffic value.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "appDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AppDefault
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the traffic control, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property special: Special traffic controls.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Special
        {
            get;
            set;
        }

        /// <summary>Property userDefault: Default user traffic value.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserDefault
        {
            get;
            set;
        }
    }
}

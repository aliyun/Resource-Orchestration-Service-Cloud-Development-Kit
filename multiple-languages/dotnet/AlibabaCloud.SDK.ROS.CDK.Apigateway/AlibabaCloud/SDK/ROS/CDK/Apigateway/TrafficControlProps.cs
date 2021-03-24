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
        [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ApiDefault
        {
            get;
            set;
        }

        /// <summary>Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TrafficControlName
        {
            get;
            set;
        }

        /// <summary>Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.</summary>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TrafficControlUnit
        {
            get;
            set;
        }

        /// <summary>Property appDefault: Default APP traffic value.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AppDefault
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the traffic control, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property special: Special traffic controls.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Special
        {
            get;
            set;
        }

        /// <summary>Property userDefault: Default user traffic value.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserDefault
        {
            get;
            set;
        }
    }
}

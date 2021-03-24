using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControl`.</summary>
    [JsiiInterface(nativeType: typeof(ITrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.TrafficControlProps")]
    public interface ITrafficControlProps
    {
        /// <summary>Property apiDefault: Default API traffic value.</summary>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}")]
        double ApiDefault
        {
            get;
        }

        /// <summary>Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}")]
        string TrafficControlName
        {
            get;
        }

        /// <summary>Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.</summary>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}")]
        string TrafficControlUnit
        {
            get;
        }

        /// <summary>Property appDefault: Default APP traffic value.</summary>
        [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AppDefault
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the traffic control, less than 180 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property special: Special traffic controls.</summary>
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Special
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userDefault: Default user traffic value.</summary>
        [JsiiProperty(name: "userDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserDefault
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.TrafficControlProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ITrafficControlProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiDefault: Default API traffic value.</summary>
            [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}")]
            public double ApiDefault
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}")]
            public string TrafficControlName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.</summary>
            [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}")]
            public string TrafficControlUnit
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property appDefault: Default APP traffic value.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AppDefault
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Description of the traffic control, less than 180 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property special: Special traffic controls.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Special
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userDefault: Default user traffic value.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserDefault
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

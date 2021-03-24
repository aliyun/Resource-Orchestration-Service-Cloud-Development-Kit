using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::TrafficControl`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlProps")]
    public interface IRosTrafficControlProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiDefault: Default API traffic value.
        /// </remarks>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}")]
        double ApiDefault
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}")]
        string TrafficControlName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        /// </remarks>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}")]
        string TrafficControlUnit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appDefault: Default APP traffic value.
        /// </remarks>
        [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AppDefault
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: special: Special traffic controls.
        /// </remarks>
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Special
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefault: Default user traffic value.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiDefault: Default API traffic value.
            /// </remarks>
            [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}")]
            public double ApiDefault
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
            /// </remarks>
            [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}")]
            public string TrafficControlName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
            /// </remarks>
            [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}")]
            public string TrafficControlUnit
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appDefault: Default APP traffic value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AppDefault
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: special: Special traffic controls.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Special
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userDefault: Default user traffic value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserDefault
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

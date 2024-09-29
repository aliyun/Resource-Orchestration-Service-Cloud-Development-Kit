using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosTrafficControl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlProps")]
    public interface IRosTrafficControlProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiDefault: Default API traffic value.
        /// </remarks>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiDefault
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlName: The name of the traffic control.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficControlName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY\/HOUR\/MINUTE.
        /// </remarks>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficControlUnit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appDefault: Default APP traffic value.
        /// </remarks>
        [JsiiProperty(name: "appDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppDefault
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
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
        [JsiiProperty(name: "userDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserDefault
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTrafficControl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiDefault: Default API traffic value.
            /// </remarks>
            [JsiiProperty(name: "apiDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiDefault
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficControlName: The name of the traffic control.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "trafficControlName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficControlName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY\/HOUR\/MINUTE.
            /// </remarks>
            [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficControlUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appDefault: Default APP traffic value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "userDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDefault
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

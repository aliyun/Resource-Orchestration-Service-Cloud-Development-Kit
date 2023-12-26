using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `TrafficControlBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficControlBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.TrafficControlBindingProps")]
    public interface ITrafficControlBindingProps
    {
        /// <summary>Property apiIds: APIs to bind with the traffic control.</summary>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <summary>Property groupId: The id of group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property stageName: Bind traffic in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Property trafficControlId: The id of traffic control.</summary>
        [JsiiProperty(name: "trafficControlId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficControlId
        {
            get;
        }

        /// <summary>Properties for defining a `TrafficControlBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficControlBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.TrafficControlBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ITrafficControlBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiIds: APIs to bind with the traffic control.</summary>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The id of group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stageName: Bind traffic in this stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficControlId: The id of traffic control.</summary>
            [JsiiProperty(name: "trafficControlId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficControlId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

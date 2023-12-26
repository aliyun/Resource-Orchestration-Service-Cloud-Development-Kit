using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosTrafficControlBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficControlBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps")]
    public interface IRosTrafficControlBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to bind with the traffic control.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind traffic in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlId: The id of traffic control.
        /// </remarks>
        [JsiiProperty(name: "trafficControlId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficControlId
        {
            get;
        }

        /// <summary>Properties for defining a `RosTrafficControlBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficControlBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiIds: APIs to bind with the traffic control.
            /// </remarks>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: Bind traffic in this stage.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficControlId: The id of traffic control.
            /// </remarks>
            [JsiiProperty(name: "trafficControlId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficControlId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

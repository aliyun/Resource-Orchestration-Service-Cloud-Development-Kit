using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `RosGatewayLogging`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGatewayLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLoggingProps")]
    public interface IRosGatewayLoggingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: gatewayId: The ID of the gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsLogstore: The name of the SLS log store.
        /// </remarks>
        [JsiiProperty(name: "slsLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogstore
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProject: The name of the SLS project.
        /// </remarks>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProject
        {
            get;
        }

        /// <summary>Properties for defining a `RosGatewayLogging`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGatewayLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IRosGatewayLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayId: The ID of the gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsLogstore: The name of the SLS log store.
            /// </remarks>
            [JsiiProperty(name: "slsLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProject: The name of the SLS project.
            /// </remarks>
            [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProject
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

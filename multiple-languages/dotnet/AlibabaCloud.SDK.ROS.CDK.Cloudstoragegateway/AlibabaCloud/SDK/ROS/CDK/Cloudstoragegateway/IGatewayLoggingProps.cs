using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `GatewayLogging`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.GatewayLoggingProps")]
    public interface IGatewayLoggingProps
    {
        /// <summary>Property gatewayId: The ID of the gateway.</summary>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <summary>Property slsLogstore: The name of the SLS log store.</summary>
        [JsiiProperty(name: "slsLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogstore
        {
            get;
        }

        /// <summary>Property slsProject: The name of the SLS project.</summary>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProject
        {
            get;
        }

        /// <summary>Properties for defining a `GatewayLogging`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.GatewayLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IGatewayLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayId: The ID of the gateway.</summary>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsLogstore: The name of the SLS log store.</summary>
            [JsiiProperty(name: "slsLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsProject: The name of the SLS project.</summary>
            [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProject
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

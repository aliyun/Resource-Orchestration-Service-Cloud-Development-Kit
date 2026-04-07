using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosApplicationEndpointAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosApplicationEndpointAddressProps")]
    public interface IRosApplicationEndpointAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: applicationId: The id of the application.
        /// </remarks>
        [JsiiProperty(name: "applicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointId: The id of the endpoint.
        /// </remarks>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: Network type for adding connection address.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetType
        {
            get;
        }

        /// <summary>Properties for defining a `RosApplicationEndpointAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosApplicationEndpointAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosApplicationEndpointAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationId: The id of the application.
            /// </remarks>
            [JsiiProperty(name: "applicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointId: The id of the endpoint.
            /// </remarks>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: netType: Network type for adding connection address.
            /// </remarks>
            [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

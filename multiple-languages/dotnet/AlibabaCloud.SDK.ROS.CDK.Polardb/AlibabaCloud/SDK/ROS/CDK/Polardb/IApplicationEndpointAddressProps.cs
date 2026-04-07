using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ApplicationEndpointAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ApplicationEndpointAddressProps")]
    public interface IApplicationEndpointAddressProps
    {
        /// <summary>Property applicationId: The id of the application.</summary>
        [JsiiProperty(name: "applicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationId
        {
            get;
        }

        /// <summary>Property endpointId: The id of the endpoint.</summary>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <summary>Property netType: Network type for adding connection address.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetType
        {
            get;
        }

        /// <summary>Properties for defining a `ApplicationEndpointAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ApplicationEndpointAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IApplicationEndpointAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationId: The id of the application.</summary>
            [JsiiProperty(name: "applicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointId: The id of the endpoint.</summary>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property netType: Network type for adding connection address.</summary>
            [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest
{
    /// <summary>Properties for defining a `IntranetConnectorEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIntranetConnectorEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.IntranetConnectorEndpointProps")]
    public interface IIntranetConnectorEndpointProps
    {
        /// <summary>Property endpointRegionId: The region ID of the endpoint.</summary>
        [JsiiProperty(name: "endpointRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointRegionId
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC to which the endpoint belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property description: The description of the endpoint, supporting full character set.</summary>
        /// <remarks>
        /// The length must not exceed 500 characters.
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

        /// <summary>Property enablePrivateZone: Whether to enable the private zone.</summary>
        /// <remarks>
        /// This parameter is only valid when the access point type is Managed.
        /// </remarks>
        [JsiiProperty(name: "enablePrivateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnablePrivateZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the endpoint, supporting full character set except space.</summary>
        /// <remarks>
        /// The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.</summary>
        /// <remarks>
        /// Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
        /// Hosted access points do not require incoming.
        /// </remarks>
        [JsiiProperty(name: "resourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the endpoint.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Private (default) : private access point</description>
        /// <description>Managed: managed access point.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `IntranetConnectorEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIntranetConnectorEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.IntranetConnectorEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Computenest.IIntranetConnectorEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpointRegionId: The region ID of the endpoint.</summary>
            [JsiiProperty(name: "endpointRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC to which the endpoint belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the endpoint, supporting full character set.</summary>
            /// <remarks>
            /// The length must not exceed 500 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enablePrivateZone: Whether to enable the private zone.</summary>
            /// <remarks>
            /// This parameter is only valid when the access point type is Managed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enablePrivateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnablePrivateZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the endpoint, supporting full character set except space.</summary>
            /// <remarks>
            /// The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.</summary>
            /// <remarks>
            /// Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
            /// Hosted access points do not require incoming.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The type of the endpoint.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Private (default) : private access point</description>
            /// <description>Managed: managed access point.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

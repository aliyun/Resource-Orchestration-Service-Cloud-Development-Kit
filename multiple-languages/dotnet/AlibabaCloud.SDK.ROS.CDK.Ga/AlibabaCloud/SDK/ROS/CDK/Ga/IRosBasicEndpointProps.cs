using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosBasicEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBasicEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicEndpointProps")]
    public interface IRosBasicEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointAddress: The address of the endpoint.
        /// </remarks>
        [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointGroupId: The ID of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
        /// If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        /// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        /// This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
        /// </remarks>
        [JsiiProperty(name: "endpointSubAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointSubAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
        /// primary: a primary private IP address.
        /// secondary: a secondary private IP address.
        /// This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
        /// </remarks>
        [JsiiProperty(name: "endpointSubAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointSubAddressType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
        /// ENI: elastic network interface (ENI)
        /// SLB: Classic Load Balancer (CLB)
        /// NLB: Network Load Balancer (NLB)
        /// ECS: Elastic Compute Service (ECS)
        /// </remarks>
        [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
        /// </remarks>
        [JsiiProperty(name: "endpointZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointZoneId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
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

        /// <summary>Properties for defining a `RosBasicEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBasicEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBasicEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointAddress: The address of the endpoint.
            /// </remarks>
            [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointGroupId: The ID of the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "endpointGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
            /// If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
            /// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
            /// This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointSubAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointSubAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
            /// primary: a primary private IP address.
            /// secondary: a secondary private IP address.
            /// This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointSubAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointSubAddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
            /// ENI: elastic network interface (ENI)
            /// SLB: Classic Load Balancer (CLB)
            /// NLB: Network Load Balancer (NLB)
            /// ECS: Elastic Compute Service (ECS)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

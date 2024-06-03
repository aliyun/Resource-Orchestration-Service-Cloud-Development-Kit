using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `BasicEndpointGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBasicEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicEndpointGroupProps")]
    public interface IBasicEndpointGroupProps
    {
        /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.</summary>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointGroupRegion
        {
            get;
        }

        /// <summary>Property description: The description of the endpoint group.</summary>
        /// <remarks>
        /// The description can be up to 200 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property endpointAddress: The endpoint address.</summary>
        [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointSubAddress: The secondary address of the endpoint.</summary>
        /// <remarks>
        /// You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
        /// When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        /// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
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

        /// <summary>Property endpointType: The type of the endpoint.</summary>
        /// <remarks>
        /// Valid values:
        /// ENI
        /// SLB
        /// ECS
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

        /// <summary>Property name: The name of the endpoint group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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

        /// <summary>Properties for defining a `BasicEndpointGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBasicEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicEndpointGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBasicEndpointGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.</summary>
            [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointGroupRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the endpoint group.</summary>
            /// <remarks>
            /// The description can be up to 200 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointAddress: The endpoint address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointSubAddress: The secondary address of the endpoint.</summary>
            /// <remarks>
            /// You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
            /// When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
            /// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointSubAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointSubAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointType: The type of the endpoint.</summary>
            /// <remarks>
            /// Valid values:
            /// ENI
            /// SLB
            /// ECS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the endpoint group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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

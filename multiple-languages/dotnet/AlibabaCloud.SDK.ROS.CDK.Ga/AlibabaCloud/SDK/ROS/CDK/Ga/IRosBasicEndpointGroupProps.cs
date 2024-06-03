using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosBasicEndpointGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBasicEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicEndpointGroupProps")]
    public interface IRosBasicEndpointGroupProps
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
        /// <strong>Property</strong>: endpointGroupRegion: The ID of the region to which the endpoint group belongs.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointGroupRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: endpointAddress: The endpoint address.
        /// </remarks>
        [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
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

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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

        /// <summary>Properties for defining a `RosBasicEndpointGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBasicEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicEndpointGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBasicEndpointGroupProps
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
            /// <strong>Property</strong>: endpointGroupRegion: The ID of the region to which the endpoint group belongs.
            /// </remarks>
            [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointGroupRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointAddress: The endpoint address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
            /// When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
            /// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointSubAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointSubAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointType: The type of the endpoint. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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

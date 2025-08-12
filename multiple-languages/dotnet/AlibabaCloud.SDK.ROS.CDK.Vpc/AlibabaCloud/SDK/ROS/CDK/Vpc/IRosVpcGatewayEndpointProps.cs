using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpcGatewayEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcGatewayEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointProps")]
    public interface IRosVpcGatewayEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Terminal service name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC ID of the gateway endpoint is to be created.
        /// The VPC must be in the same region as the gateway endpoint.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointDescription: Description information of the gateway endpoint.
        /// The length of the description information is between 1 and 255 characters.
        /// </remarks>
        [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointName: The name of the gateway endpoint.
        /// The length of the name is between 1 and 128 characters.
        /// </remarks>
        [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocument: Access policies for cloud services.
        /// For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
        /// illustrate
        /// This field is required when the selected endpoint service supports setting access policies;
        /// This field must be empty when the selected endpoint service does not support setting access policies.
        /// Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
        /// </remarks>
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyDocument
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The resource group ID to which the gateway endpoint belongs.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpcGatewayEndpoint.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpcGatewayEndpoint.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpcGatewayEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcGatewayEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpcGatewayEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Terminal service name.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The VPC ID of the gateway endpoint is to be created.
            /// The VPC must be in the same region as the gateway endpoint.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointDescription: Description information of the gateway endpoint.
            /// The length of the description information is between 1 and 255 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointName: The name of the gateway endpoint.
            /// The length of the name is between 1 and 128 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policyDocument: Access policies for cloud services.
            /// For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
            /// illustrate
            /// This field is required when the selected endpoint service supports setting access policies;
            /// This field must be empty when the selected endpoint service does not support setting access policies.
            /// Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The resource group ID to which the gateway endpoint belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpcGatewayEndpoint.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpcGatewayEndpoint.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpcGatewayEndpoint.ITagsProperty[]?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VpcGatewayEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcGatewayEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcGatewayEndpointProps")]
    public interface IVpcGatewayEndpointProps
    {
        /// <summary>Property serviceName: Terminal service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property vpcId: The VPC ID of the gateway endpoint is to be created.</summary>
        /// <remarks>
        /// The VPC must be in the same region as the gateway endpoint.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property endpointDescription: Description information of the gateway endpoint.</summary>
        /// <remarks>
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

        /// <summary>Property endpointName: The name of the gateway endpoint.</summary>
        /// <remarks>
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

        /// <summary>Property policyDocument: Access policies for cloud services.</summary>
        /// <remarks>
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

        /// <summary>Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags.
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

        /// <summary>Properties for defining a `VpcGatewayEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcGatewayEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpcGatewayEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcGatewayEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceName: Terminal service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The VPC ID of the gateway endpoint is to be created.</summary>
            /// <remarks>
            /// The VPC must be in the same region as the gateway endpoint.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointDescription: Description information of the gateway endpoint.</summary>
            /// <remarks>
            /// The length of the description information is between 1 and 255 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointName: The name of the gateway endpoint.</summary>
            /// <remarks>
            /// The length of the name is between 1 and 128 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policyDocument: Access policies for cloud services.</summary>
            /// <remarks>
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

            /// <summary>Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags.
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

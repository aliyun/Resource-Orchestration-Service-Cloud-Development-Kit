using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::CustomerGateway`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
    public interface ICustomerGatewayProps
    {
        /// <summary>Property ipAddress: The IP address of the user gateway.</summary>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpAddress
        {
            get;
        }

        /// <summary>Property asn: The autonomous system number of the local data center gateway device.</summary>
        [JsiiProperty(name: "asn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Asn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the user gateway.</summary>
        /// <remarks>
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
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

        /// <summary>Property name: The name of the user gateway.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
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

        /// <summary>Properties for defining a `ALIYUN::VPC::CustomerGateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICustomerGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipAddress: The IP address of the user gateway.</summary>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property asn: The autonomous system number of the local data center gateway device.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "asn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Asn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the user gateway.</summary>
            /// <remarks>
            /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the user gateway.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
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

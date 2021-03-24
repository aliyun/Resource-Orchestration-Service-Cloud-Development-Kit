using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::CustomerGateway`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
    public interface ICustomerGatewayProps
    {
        /// <summary>Property ipAddress: The IP address of the user gateway.</summary>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"primitive\":\"string\"}")]
        string IpAddress
        {
            get;
        }

        /// <summary>Property description: Description of the user gateway.</summary>
        /// <remarks>
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
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
            [JsiiProperty(name: "ipAddress", typeJson: "{\"primitive\":\"string\"}")]
            public string IpAddress
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the user gateway.</summary>
            /// <remarks>
            /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: The name of the user gateway.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

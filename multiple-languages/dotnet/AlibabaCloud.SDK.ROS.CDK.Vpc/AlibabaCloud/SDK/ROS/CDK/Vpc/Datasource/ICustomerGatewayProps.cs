using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `CustomerGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CustomerGatewayProps")]
    public interface ICustomerGatewayProps
    {
        /// <summary>Property customerGatewayId: The ID of the customer gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomerGatewayId
        {
            get;
        }

        /// <summary>Properties for defining a `CustomerGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CustomerGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICustomerGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property customerGatewayId: The ID of the customer gateway.</summary>
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomerGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

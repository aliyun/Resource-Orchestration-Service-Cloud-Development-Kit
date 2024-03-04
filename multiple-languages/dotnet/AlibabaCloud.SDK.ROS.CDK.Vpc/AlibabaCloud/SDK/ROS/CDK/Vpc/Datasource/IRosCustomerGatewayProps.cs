using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosCustomerGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewayProps")]
    public interface IRosCustomerGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: customerGatewayId: The ID of the customer gateway.
        /// </remarks>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomerGatewayId
        {
            get;
        }

        /// <summary>Properties for defining a `RosCustomerGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosCustomerGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: customerGatewayId: The ID of the customer gateway.
            /// </remarks>
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomerGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

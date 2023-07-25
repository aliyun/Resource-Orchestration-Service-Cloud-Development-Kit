using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::CustomerGateways`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomerGatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CustomerGatewaysProps")]
    public interface ICustomerGatewaysProps
    {
        /// <summary>Property customerGatewayId: The ID of the customer gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomerGatewayId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::CustomerGateways`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomerGatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CustomerGatewaysProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICustomerGatewaysProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property customerGatewayId: The ID of the customer gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomerGatewayId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

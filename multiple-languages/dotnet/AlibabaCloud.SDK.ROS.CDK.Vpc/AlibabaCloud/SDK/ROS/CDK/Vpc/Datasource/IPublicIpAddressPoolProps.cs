using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `PublicIpAddressPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolProps")]
    public interface IPublicIpAddressPoolProps
    {
        /// <summary>Property publicIpAddressPoolId: The first ID of the resource.</summary>
        [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PublicIpAddressPoolId
        {
            get;
        }

        /// <summary>Properties for defining a `PublicIpAddressPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPublicIpAddressPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property publicIpAddressPoolId: The first ID of the resource.</summary>
            [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PublicIpAddressPoolId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

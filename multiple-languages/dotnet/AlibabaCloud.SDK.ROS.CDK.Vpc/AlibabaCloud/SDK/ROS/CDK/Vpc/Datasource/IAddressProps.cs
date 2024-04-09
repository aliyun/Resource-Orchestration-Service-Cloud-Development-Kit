using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `Address`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.AddressProps")]
    public interface IAddressProps
    {
        /// <summary>Property allocationId: The ID of the EIP instance.</summary>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AllocationId
        {
            get;
        }

        /// <summary>Properties for defining a `Address`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.AddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property allocationId: The ID of the EIP instance.</summary>
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AllocationId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

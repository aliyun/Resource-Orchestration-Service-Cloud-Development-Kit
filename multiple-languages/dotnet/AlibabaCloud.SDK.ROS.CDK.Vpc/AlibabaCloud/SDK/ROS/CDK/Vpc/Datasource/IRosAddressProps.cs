using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosAddressProps")]
    public interface IRosAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: allocationId: The ID of the EIP instance.
        /// </remarks>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AllocationId
        {
            get;
        }

        /// <summary>Properties for defining a `RosAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: allocationId: The ID of the EIP instance.
            /// </remarks>
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AllocationId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

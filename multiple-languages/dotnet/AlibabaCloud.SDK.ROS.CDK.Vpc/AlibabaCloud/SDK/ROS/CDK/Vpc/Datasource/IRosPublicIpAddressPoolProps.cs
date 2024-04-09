using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosPublicIpAddressPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolProps")]
    public interface IRosPublicIpAddressPoolProps
    {
        /// <remarks>
        /// <strong>Property</strong>: publicIpAddressPoolId: The first ID of the resource.
        /// </remarks>
        [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PublicIpAddressPoolId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPublicIpAddressPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosPublicIpAddressPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: publicIpAddressPoolId: The first ID of the resource.
            /// </remarks>
            [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PublicIpAddressPoolId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

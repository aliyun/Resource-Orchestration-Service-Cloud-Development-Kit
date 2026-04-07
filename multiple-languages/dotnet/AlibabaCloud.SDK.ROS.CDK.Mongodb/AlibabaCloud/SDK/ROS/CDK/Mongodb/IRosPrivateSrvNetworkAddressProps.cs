using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `RosPrivateSrvNetworkAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPrivateSrvNetworkAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosPrivateSrvNetworkAddressProps")]
    public interface IRosPrivateSrvNetworkAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPrivateSrvNetworkAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPrivateSrvNetworkAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosPrivateSrvNetworkAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosPrivateSrvNetworkAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

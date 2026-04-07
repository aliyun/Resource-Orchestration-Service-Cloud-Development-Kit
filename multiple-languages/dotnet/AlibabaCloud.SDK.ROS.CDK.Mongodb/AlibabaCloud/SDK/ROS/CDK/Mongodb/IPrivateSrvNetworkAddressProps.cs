using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `PrivateSrvNetworkAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrivateSrvNetworkAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.PrivateSrvNetworkAddressProps")]
    public interface IPrivateSrvNetworkAddressProps
    {
        /// <summary>Property dbInstanceId: The instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `PrivateSrvNetworkAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrivateSrvNetworkAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.PrivateSrvNetworkAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IPrivateSrvNetworkAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

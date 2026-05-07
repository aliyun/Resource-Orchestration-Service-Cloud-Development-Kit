using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `RosGlobalSecurityIPGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroupProps")]
    public interface IRosGlobalSecurityIPGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: globalIgName: The name of the IP whitelist template.
        /// </remarks>
        [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GlobalIgName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: globalSecurityIpList: The IP address in the whitelist template.
        /// </remarks>
        [JsiiProperty(name: "globalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GlobalSecurityIpList
        {
            get;
        }

        /// <summary>Properties for defining a `RosGlobalSecurityIPGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosGlobalSecurityIPGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: globalIgName: The name of the IP whitelist template.
            /// </remarks>
            [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GlobalIgName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: globalSecurityIpList: The IP address in the whitelist template.
            /// </remarks>
            [JsiiProperty(name: "globalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GlobalSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

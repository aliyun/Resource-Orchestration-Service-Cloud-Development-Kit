using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `GlobalSecurityIPGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroupProps")]
    public interface IGlobalSecurityIPGroupProps
    {
        /// <summary>Property globalIgName: The name of the IP whitelist template.</summary>
        [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GlobalIgName
        {
            get;
        }

        /// <summary>Property globalSecurityIpList: The IP address in the whitelist template.</summary>
        [JsiiProperty(name: "globalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GlobalSecurityIpList
        {
            get;
        }

        /// <summary>Properties for defining a `GlobalSecurityIPGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IGlobalSecurityIPGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property globalIgName: The name of the IP whitelist template.</summary>
            [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GlobalIgName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property globalSecurityIpList: The IP address in the whitelist template.</summary>
            [JsiiProperty(name: "globalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GlobalSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

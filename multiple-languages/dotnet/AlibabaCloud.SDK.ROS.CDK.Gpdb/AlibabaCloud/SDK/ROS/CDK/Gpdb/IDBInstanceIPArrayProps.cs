using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `DBInstanceIPArray`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstanceIPArrayProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps")]
    public interface IDBInstanceIPArrayProps
    {
        /// <summary>Property dbInstanceId: The instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property dbInstanceIpArrayName: The name of the IP address whitelist.</summary>
        /// <remarks>
        /// If you do not specify this parameter, the default whitelist is queried.
        ///
        ///     Each instance supports up to 50 IP address whitelists.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceIpArrayName
        {
            get;
        }

        /// <summary>Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0\/0 - 10.23.12.24(IP) - 10.23.12.24\/24(CIDR mode, Classless Inter-Domain Routing, '\/24' indicates the length of the prefix in the address, and the range is '[1,32]').</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object SecurityIpList
        {
            get;
        }

        /// <summary>Property dbInstanceIpArrayAttribute: The default is empty.</summary>
        /// <remarks>
        /// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIpArrayAttribute
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBInstanceIPArray`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceIPArrayProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceIPArrayProps
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

            /// <summary>Property dbInstanceIpArrayName: The name of the IP address whitelist.</summary>
            /// <remarks>
            /// If you do not specify this parameter, the default whitelist is queried.
            ///
            ///     Each instance supports up to 50 IP address whitelists.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceIpArrayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0\/0 - 10.23.12.24(IP) - 10.23.12.24\/24(CIDR mode, Classless Inter-Domain Routing, '\/24' indicates the length of the prefix in the address, and the range is '[1,32]').</summary>
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object SecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceIpArrayAttribute: The default is empty.</summary>
            /// <remarks>
            /// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceIpArrayAttribute
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

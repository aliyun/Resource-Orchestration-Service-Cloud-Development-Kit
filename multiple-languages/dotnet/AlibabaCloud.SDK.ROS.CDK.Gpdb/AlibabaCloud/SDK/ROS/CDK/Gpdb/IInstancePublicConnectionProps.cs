using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `InstancePublicConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstancePublicConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps")]
    public interface IInstancePublicConnectionProps
    {
        /// <summary>Property connectionStringPrefix: The endpoint that is used to connect to the specified database.</summary>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionStringPrefix
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property port: The port number of the instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Property addressType: Network type. Valid values:.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>primary</strong>: Primary address.</description>
        /// <description><strong>cluster</strong>: Cluster address, only multi-coordination node instances support creating cluster addresses.</description>
        /// </list>
        ///
        ///     Default is primary address.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `InstancePublicConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstancePublicConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IInstancePublicConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionStringPrefix: The endpoint that is used to connect to the specified database.</summary>
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionStringPrefix
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property port: The port number of the instance.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addressType: Network type. Valid values:.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>primary</strong>: Primary address.</description>
            /// <description><strong>cluster</strong>: Cluster address, only multi-coordination node instances support creating cluster addresses.</description>
            /// </list>
            ///
            ///     Default is primary address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

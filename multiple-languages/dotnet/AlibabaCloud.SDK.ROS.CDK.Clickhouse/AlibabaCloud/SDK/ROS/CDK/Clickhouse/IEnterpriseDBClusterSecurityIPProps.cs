using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `EnterpriseDBClusterSecurityIP`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterSecurityIPProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps")]
    public interface IEnterpriseDBClusterSecurityIPProps
    {
        /// <summary>Property dbInstanceId: The cluster ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property groupName: The name of the whitelist whose settings you want to modify.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property securityIpList: The IP addresses and CIDR blocks in the whitelist.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIpList
        {
            get;
        }

        /// <summary>Properties for defining a `EnterpriseDBClusterSecurityIP`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterSecurityIPProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterSecurityIPProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The cluster ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupName: The name of the whitelist whose settings you want to modify.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIpList: The IP addresses and CIDR blocks in the whitelist.</summary>
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

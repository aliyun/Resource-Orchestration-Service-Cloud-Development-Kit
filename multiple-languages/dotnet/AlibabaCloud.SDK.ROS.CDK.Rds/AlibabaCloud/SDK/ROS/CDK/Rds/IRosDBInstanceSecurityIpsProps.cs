using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `RosDBInstanceSecurityIps`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps")]
    public interface IRosDBInstanceSecurityIpsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database instance id to update security ips.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayAttribute: Security ips to add or remove.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceIpArrayAttribute
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIpArrayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBInstanceSecurityIps`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceSecurityIpsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Database instance id to update security ips.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceIpArrayAttribute: Security ips to add or remove.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceIpArrayAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceIpArrayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

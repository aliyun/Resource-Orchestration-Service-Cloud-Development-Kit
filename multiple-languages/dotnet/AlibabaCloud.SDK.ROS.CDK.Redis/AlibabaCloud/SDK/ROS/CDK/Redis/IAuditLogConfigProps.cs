using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `AuditLogConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAuditLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.AuditLogConfigProps")]
    public interface IAuditLogConfigProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        /// <remarks>
        /// You can call the DescribeInstances operation to query the ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property retention: The retention period of audit logs.</summary>
        /// <remarks>
        /// Valid values: 1 to 365. Unit: days.
        /// Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
        /// </remarks>
        [JsiiProperty(name: "retention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Retention
        {
            get;
        }

        /// <summary>Properties for defining a `AuditLogConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAuditLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.AuditLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IAuditLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            /// <remarks>
            /// You can call the DescribeInstances operation to query the ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property retention: The retention period of audit logs.</summary>
            /// <remarks>
            /// Valid values: 1 to 365. Unit: days.
            /// Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
            /// </remarks>
            [JsiiProperty(name: "retention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Retention
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `RosAuditLogConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAuditLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosAuditLogConfigProps")]
    public interface IRosAuditLogConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: retention: The retention period of audit logs. Valid values: 1 to 365. Unit: days.
        /// Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
        /// </remarks>
        [JsiiProperty(name: "retention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Retention
        {
            get;
        }

        /// <summary>Properties for defining a `RosAuditLogConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAuditLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosAuditLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosAuditLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: retention: The retention period of audit logs. Valid values: 1 to 365. Unit: days.
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

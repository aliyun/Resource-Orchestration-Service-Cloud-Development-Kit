using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `RosAuditPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAuditPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosAuditPolicyProps")]
    public interface IRosAuditPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: auditStatus: Audit state, Valid values: `enable`, `disabled`.
        /// </remarks>
        [JsiiProperty(name: "auditStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuditStatus
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database Instance Id.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
        /// </remarks>
        [JsiiProperty(name: "storagePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StoragePeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAuditPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAuditPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosAuditPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosAuditPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: auditStatus: Audit state, Valid values: `enable`, `disabled`.
            /// </remarks>
            [JsiiProperty(name: "auditStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuditStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Database Instance Id.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storagePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StoragePeriod
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

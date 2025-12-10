using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `RosScriptExecution`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScriptExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosScriptExecutionProps")]
    public interface IRosScriptExecutionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbId: The database ID.
        /// > This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
        /// </remarks>
        [JsiiProperty(name: "dbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logic: Whether it is a logical database.
        /// </remarks>
        [JsiiProperty(name: "logic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Logic
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: script: The specific SQL script to execute. Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
        /// </remarks>
        [JsiiProperty(name: "script", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Script
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tid: The tenant ID.
        /// > Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScriptExecution`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScriptExecutionProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosScriptExecutionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IRosScriptExecutionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbId: The database ID.
            /// > This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
            /// </remarks>
            [JsiiProperty(name: "dbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logic: Whether it is a logical database.
            /// </remarks>
            [JsiiProperty(name: "logic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Logic
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: script: The specific SQL script to execute. Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
            /// </remarks>
            [JsiiProperty(name: "script", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Script
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tid: The tenant ID.
            /// > Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tid
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

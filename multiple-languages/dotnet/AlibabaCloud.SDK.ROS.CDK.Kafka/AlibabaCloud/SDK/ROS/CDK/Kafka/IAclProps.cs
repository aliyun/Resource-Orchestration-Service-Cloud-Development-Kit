using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `Acl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAclProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.AclProps")]
    public interface IAclProps
    {
        /// <summary>Property aclOperationTypes: The types of operations allowed by the ACL.</summary>
        [JsiiProperty(name: "aclOperationTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AclOperationTypes
        {
            get;
        }

        /// <summary>Property aclResourceName: The resource name.</summary>
        /// <remarks>
        /// The value can be a topic name, a group ID, a cluster name, or a transaction ID.
        /// You can use an asterisk (<em>) to specify the names of all resources of the specified type.
        /// Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        /// </remarks>
        [JsiiProperty(name: "aclResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclResourceName
        {
            get;
        }

        /// <summary>Property aclResourcePatternType: The matching mode.</summary>
        /// <remarks>
        /// Valid values:
        /// LITERAL: exact match
        /// PREFIXED: prefix match
        /// </remarks>
        [JsiiProperty(name: "aclResourcePatternType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclResourcePatternType
        {
            get;
        }

        /// <summary>Property aclResourceType: The resource type.</summary>
        /// <remarks>
        /// Valid values:
        /// Topic
        /// Group
        /// Cluster
        /// TransactionalId: transactional ID
        /// </remarks>
        [JsiiProperty(name: "aclResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclResourceType
        {
            get;
        }

        /// <summary>Property instanceId: The instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property username: The username.</summary>
        /// <remarks>
        /// You can use an asterisk (<em>) to specify all usernames.
        /// Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
        /// </remarks>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <summary>Property aclPermissionType: The authorization method.</summary>
        /// <remarks>
        /// Valid values:
        /// DENY
        /// ALLOW
        /// Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        /// </remarks>
        [JsiiProperty(name: "aclPermissionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclPermissionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property host: The source IP address.</summary>
        /// <remarks>
        /// Note
        /// You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
        /// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        /// </remarks>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Host
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Acl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAclProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.AclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.IAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclOperationTypes: The types of operations allowed by the ACL.</summary>
            [JsiiProperty(name: "aclOperationTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AclOperationTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclResourceName: The resource name.</summary>
            /// <remarks>
            /// The value can be a topic name, a group ID, a cluster name, or a transaction ID.
            /// You can use an asterisk (<em>) to specify the names of all resources of the specified type.
            /// Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
            /// </remarks>
            [JsiiProperty(name: "aclResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclResourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclResourcePatternType: The matching mode.</summary>
            /// <remarks>
            /// Valid values:
            /// LITERAL: exact match
            /// PREFIXED: prefix match
            /// </remarks>
            [JsiiProperty(name: "aclResourcePatternType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclResourcePatternType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclResourceType: The resource type.</summary>
            /// <remarks>
            /// Valid values:
            /// Topic
            /// Group
            /// Cluster
            /// TransactionalId: transactional ID
            /// </remarks>
            [JsiiProperty(name: "aclResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property username: The username.</summary>
            /// <remarks>
            /// You can use an asterisk (<em>) to specify all usernames.
            /// Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
            /// </remarks>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclPermissionType: The authorization method.</summary>
            /// <remarks>
            /// Valid values:
            /// DENY
            /// ALLOW
            /// Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclPermissionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclPermissionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property host: The source IP address.</summary>
            /// <remarks>
            /// Note
            /// You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
            /// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

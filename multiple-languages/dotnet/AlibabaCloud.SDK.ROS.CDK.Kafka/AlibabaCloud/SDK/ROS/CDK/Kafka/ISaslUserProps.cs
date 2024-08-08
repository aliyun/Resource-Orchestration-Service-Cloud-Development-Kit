using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `SaslUser`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISaslUserProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.SaslUserProps")]
    public interface ISaslUserProps
    {
        /// <summary>Property instanceId: The instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property password: The password of the SASL user.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <summary>Property username: The name of the SASL user.</summary>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <summary>Property mechanism: The encryption method.</summary>
        /// <remarks>
        /// Valid values:
        /// SCRAM-SHA-512 (default)
        /// SCRAM-SHA-256
        /// Note
        /// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        /// </remarks>
        [JsiiProperty(name: "mechanism", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mechanism
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the Simple Authentication and Security Layer (SASL) user.</summary>
        /// <remarks>
        /// Valid values:
        /// plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
        /// SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
        /// LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
        /// Default value: plain.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SaslUser`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISaslUserProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.SaslUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.ISaslUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: The password of the SASL user.</summary>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property username: The name of the SASL user.</summary>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mechanism: The encryption method.</summary>
            /// <remarks>
            /// Valid values:
            /// SCRAM-SHA-512 (default)
            /// SCRAM-SHA-256
            /// Note
            /// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mechanism", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mechanism
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The type of the Simple Authentication and Security Layer (SASL) user.</summary>
            /// <remarks>
            /// Valid values:
            /// plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
            /// SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
            /// LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
            /// Default value: plain.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

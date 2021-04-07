using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiInterface(nativeType: typeof(IHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.HandshakeProps")]
    public interface IHandshakeProps
    {
        /// <summary>Property targetEntity: Invited account ID or login email.</summary>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetEntity
        {
            get;
        }

        /// <summary>Property targetType: Type of account being invited.</summary>
        /// <remarks>
        /// Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Property note: Remarks.</summary>
        [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Note
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.HandshakeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property targetEntity: Invited account ID or login email.</summary>
            [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetEntity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetType: Type of account being invited.</summary>
            /// <remarks>
            /// Valid values: Account, Email
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property note: Remarks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Note
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

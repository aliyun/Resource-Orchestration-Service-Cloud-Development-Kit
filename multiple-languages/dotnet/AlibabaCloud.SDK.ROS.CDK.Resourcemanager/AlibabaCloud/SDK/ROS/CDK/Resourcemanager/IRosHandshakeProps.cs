using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosHandshakeProps")]
    public interface IRosHandshakeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: targetEntity: Invited account ID or login email
        /// </remarks>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetEntity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: Type of account being invited. Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: note: Remarks
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosHandshakeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosHandshakeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: targetEntity: Invited account ID or login email
            /// </remarks>
            [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetEntity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: Type of account being invited. Valid values: Account, Email
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: note: Remarks
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Note
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

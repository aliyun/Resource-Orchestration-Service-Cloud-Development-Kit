using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `RosFcTrigger`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFcTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosFcTriggerProps")]
    public interface IRosFcTriggerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: eventMetaName: The event meta name.
        /// </remarks>
        [JsiiProperty(name: "eventMetaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventMetaName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventMetaVersion: The event meta version.
        /// </remarks>
        [JsiiProperty(name: "eventMetaVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventMetaVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: notes: The notes.
        /// </remarks>
        [JsiiProperty(name: "notes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Notes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleArn: The role ARN.
        /// </remarks>
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleArn
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceArn: The source ARN.
        /// </remarks>
        [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceArn
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerArn: The trigger ARN.
        /// </remarks>
        [JsiiProperty(name: "triggerArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerArn
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: functionArn: The function ARN.
        /// </remarks>
        [JsiiProperty(name: "functionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FunctionArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosFcTrigger`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFcTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosFcTriggerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IRosFcTriggerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: eventMetaName: The event meta name.
            /// </remarks>
            [JsiiProperty(name: "eventMetaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventMetaName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eventMetaVersion: The event meta version.
            /// </remarks>
            [JsiiProperty(name: "eventMetaVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventMetaVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: notes: The notes.
            /// </remarks>
            [JsiiProperty(name: "notes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Notes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleArn: The role ARN.
            /// </remarks>
            [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceArn: The source ARN.
            /// </remarks>
            [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerArn: The trigger ARN.
            /// </remarks>
            [JsiiProperty(name: "triggerArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: functionArn: The function ARN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FunctionArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

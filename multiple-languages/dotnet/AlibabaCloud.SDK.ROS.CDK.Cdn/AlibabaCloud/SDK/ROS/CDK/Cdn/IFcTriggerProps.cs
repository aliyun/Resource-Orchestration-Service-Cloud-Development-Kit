using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `FcTrigger`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFcTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.FcTriggerProps")]
    public interface IFcTriggerProps
    {
        /// <summary>Property eventMetaName: The event meta name.</summary>
        [JsiiProperty(name: "eventMetaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventMetaName
        {
            get;
        }

        /// <summary>Property eventMetaVersion: The event meta version.</summary>
        [JsiiProperty(name: "eventMetaVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventMetaVersion
        {
            get;
        }

        /// <summary>Property notes: The notes.</summary>
        [JsiiProperty(name: "notes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Notes
        {
            get;
        }

        /// <summary>Property roleArn: The role ARN.</summary>
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleArn
        {
            get;
        }

        /// <summary>Property sourceArn: The source ARN.</summary>
        [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceArn
        {
            get;
        }

        /// <summary>Property triggerArn: The trigger ARN.</summary>
        [JsiiProperty(name: "triggerArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerArn
        {
            get;
        }

        /// <summary>Property functionArn: The function ARN.</summary>
        [JsiiProperty(name: "functionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FunctionArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `FcTrigger`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFcTriggerProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.FcTriggerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IFcTriggerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property eventMetaName: The event meta name.</summary>
            [JsiiProperty(name: "eventMetaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventMetaName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eventMetaVersion: The event meta version.</summary>
            [JsiiProperty(name: "eventMetaVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventMetaVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property notes: The notes.</summary>
            [JsiiProperty(name: "notes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Notes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property roleArn: The role ARN.</summary>
            [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceArn: The source ARN.</summary>
            [JsiiProperty(name: "sourceArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property triggerArn: The trigger ARN.</summary>
            [JsiiProperty(name: "triggerArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property functionArn: The function ARN.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "functionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FunctionArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

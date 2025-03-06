using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Represents a `TrailLogging`.</summary>
    [JsiiInterface(nativeType: typeof(ITrailLogging), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.ITrailLogging")]
    public interface ITrailLogging : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute IsLogging: Indicates whether the trail is logging API invocations.</summary>
        [JsiiProperty(name: "attrIsLogging", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsLogging
        {
            get;
        }

        /// <summary>Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.</summary>
        [JsiiProperty(name: "attrLatestDeliveryError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestDeliveryError
        {
            get;
        }

        /// <summary>Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.</summary>
        [JsiiProperty(name: "attrLatestDeliveryTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestDeliveryTime
        {
            get;
        }

        /// <summary>Attribute StartLoggingTime: The most recent date and time when the user enables the trail.</summary>
        [JsiiProperty(name: "attrStartLoggingTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartLoggingTime
        {
            get;
        }

        /// <summary>Attribute StopLoggingTime: The most recent date and time when the user disables the trail.</summary>
        [JsiiProperty(name: "attrStopLoggingTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStopLoggingTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-actiontrail.TrailLoggingProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps Props
        {
            get;
        }

        /// <summary>Represents a `TrailLogging`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrailLogging), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.ITrailLogging")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLogging
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute IsLogging: Indicates whether the trail is logging API invocations.</summary>
            [JsiiProperty(name: "attrIsLogging", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsLogging
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.</summary>
            [JsiiProperty(name: "attrLatestDeliveryError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestDeliveryError
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.</summary>
            [JsiiProperty(name: "attrLatestDeliveryTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestDeliveryTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartLoggingTime: The most recent date and time when the user enables the trail.</summary>
            [JsiiProperty(name: "attrStartLoggingTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartLoggingTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StopLoggingTime: The most recent date and time when the user disables the trail.</summary>
            [JsiiProperty(name: "attrStopLoggingTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStopLoggingTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-actiontrail.TrailLoggingProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}

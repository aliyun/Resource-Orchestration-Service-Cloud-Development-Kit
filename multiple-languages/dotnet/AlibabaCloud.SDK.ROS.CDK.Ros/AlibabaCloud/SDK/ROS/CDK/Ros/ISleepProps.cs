using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `Sleep`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISleepProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.SleepProps")]
    public interface ISleepProps
    {
        /// <summary>Property createDuration: The number of seconds to wait before resource creation.</summary>
        [JsiiProperty(name: "createDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deleteDuration: The number of seconds to wait before resource deletion.</summary>
        [JsiiProperty(name: "deleteDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.</summary>
        [JsiiProperty(name: "triggers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Triggers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property updateDuration: The number of seconds to wait before resource update.</summary>
        /// <remarks>
        /// It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        /// </remarks>
        [JsiiProperty(name: "updateDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UpdateDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property updateRollbackDuration: The number of seconds to wait before resource update rollback.</summary>
        /// <remarks>
        /// It only triggers when stack update failed and resource was updated.
        /// </remarks>
        [JsiiProperty(name: "updateRollbackDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UpdateRollbackDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Sleep`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISleepProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.SleepProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.ISleepProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property createDuration: The number of seconds to wait before resource creation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "createDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteDuration: The number of seconds to wait before resource deletion.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deleteDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "triggers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Triggers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property updateDuration: The number of seconds to wait before resource update.</summary>
            /// <remarks>
            /// It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "updateDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UpdateDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property updateRollbackDuration: The number of seconds to wait before resource update rollback.</summary>
            /// <remarks>
            /// It only triggers when stack update failed and resource was updated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "updateRollbackDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UpdateRollbackDuration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

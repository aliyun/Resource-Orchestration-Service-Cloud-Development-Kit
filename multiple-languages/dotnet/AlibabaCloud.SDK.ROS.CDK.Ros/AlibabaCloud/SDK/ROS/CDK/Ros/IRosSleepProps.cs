using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::Sleep`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSleepProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosSleepProps")]
    public interface IRosSleepProps
    {
        /// <remarks>
        /// <strong>Property</strong>: createDuration: The number of seconds to wait before resource creation.
        /// </remarks>
        [JsiiProperty(name: "createDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteDuration: The number of seconds to wait before resource deletion.
        /// </remarks>
        [JsiiProperty(name: "deleteDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
        /// </remarks>
        [JsiiProperty(name: "triggers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Triggers
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
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

        /// <remarks>
        /// <strong>Property</strong>: updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
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

        /// <summary>Properties for defining a `ALIYUN::ROS::Sleep`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSleepProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosSleepProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IRosSleepProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: createDuration: The number of seconds to wait before resource creation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteDuration: The number of seconds to wait before resource deletion.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "triggers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Triggers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "updateDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UpdateDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
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

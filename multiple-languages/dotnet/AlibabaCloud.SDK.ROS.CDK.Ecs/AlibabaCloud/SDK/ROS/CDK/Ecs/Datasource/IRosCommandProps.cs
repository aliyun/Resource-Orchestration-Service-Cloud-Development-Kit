using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosCommand`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosCommandProps")]
    public interface IRosCommandProps
    {
        /// <remarks>
        /// <strong>Property</strong>: commandId: Command ID.
        /// </remarks>
        [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommandId
        {
            get;
        }

        /// <summary>Properties for defining a `RosCommand`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosCommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosCommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: commandId: Command ID.
            /// </remarks>
            [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommandId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Command`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.CommandProps")]
    public interface ICommandProps
    {
        /// <summary>Property commandId: Command ID.</summary>
        [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommandId
        {
            get;
        }

        /// <summary>Properties for defining a `Command`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.CommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commandId: Command ID.</summary>
            [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommandId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

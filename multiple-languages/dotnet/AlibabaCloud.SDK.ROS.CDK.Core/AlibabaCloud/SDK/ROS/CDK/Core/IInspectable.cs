using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for examining a construct and exposing metadata.</summary>
    [JsiiInterface(nativeType: typeof(IInspectable), fullyQualifiedName: "@alicloud/ros-cdk-core.IInspectable")]
    public interface IInspectable
    {
        /// <summary>Examines construct.</summary>
        /// <param name="inspector">- tree inspector to collect and process attributes.</param>
        [JsiiMethod(name: "inspect", parametersJson: "[{\"docs\":{\"summary\":\"- tree inspector to collect and process attributes.\"},\"name\":\"inspector\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TreeInspector\"}}]")]
        void Inspect(AlibabaCloud.SDK.ROS.CDK.Core.TreeInspector inspector);

        /// <summary>Interface for examining a construct and exposing metadata.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInspectable), fullyQualifiedName: "@alicloud/ros-cdk-core.IInspectable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IInspectable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Examines construct.</summary>
            /// <param name="inspector">- tree inspector to collect and process attributes.</param>
            [JsiiMethod(name: "inspect", parametersJson: "[{\"docs\":{\"summary\":\"- tree inspector to collect and process attributes.\"},\"name\":\"inspector\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TreeInspector\"}}]")]
            public void Inspect(AlibabaCloud.SDK.ROS.CDK.Core.TreeInspector inspector)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.TreeInspector)}, new object[]{inspector});
            }
        }
    }
}
